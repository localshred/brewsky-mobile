(ns brewsky.app.events
  (:require
    [brewsky.app.db :as db :refer [app-db]]
    [brewsky.app.navigation.events :as navigation]
    [brewsky.app.recipes.create.events :as recipes-create]
    [clojure.data :as data]
    [clojure.spec.alpha :as s]
    [re-frame.core :refer [reg-event-db after]]
    [re-frame.interceptor :refer [->interceptor get-effect get-coeffect]]
    [re-frame.loggers :refer  [console]]
    ))

;; -- Interceptors ------------------------------------------------------------
;;
;; See https://github.com/Day8/re-frame/blob/master/docs/Interceptors.md
;;
(defn check-and-throw
  "Throw an exception if db doesn't have a valid spec."
  [spec db [event]]
  (when-not (s/valid? spec db)
    (let [explain-data (s/explain-data spec db)]
      (throw (ex-info (str "Spec check after " event " failed: " explain-data) explain-data)))))

(def validate-spec
  (if goog.DEBUG
    (after (partial check-and-throw ::db/app-db))
    []))

(defn log-ex
  [handler]
  (fn log-ex-handler
    [db v]
    (try
      (handler db v)        ;; call the handler with a wrapping try
      (catch :default e     ;; ooops
        (do
          (.error js/console e.stack)   ;; print a sane stacktrace
          (throw e))))))

(def log-around
  "An interceptor which logs/instruments an event handler's actions to
  `js/console.debug`. See examples/todomvc/src/events.cljs for use.
  Output includes:
  1. the event vector
  2. a `clojure.data/diff` of db, before vs after, which shows
  the changes caused by the event handler.  You will absolutely have
  to understand https://clojuredocs.org/clojure.data/diff to
  understand the output.
  You'd typically include this interceptor after (to the right of) any
  path interceptor.
  "
  (when ^boolean goog.DEBUG
    (->interceptor
      :id     :log-around
      :before (fn log-around-before
                [context]
                (console :log "Handling re-frame event:" (-> context (get-coeffect :event) first clj->js))
                context)
      :after  (fn log-around-after
                [context]
                (let [event (get-coeffect context :event)
                      event-name (-> event first clj->js)
                      event-args (rest event)
                      orig-db (get-coeffect context :db)
                      new-db  (get-effect   context :db ::not-found)]
                  (if (= new-db ::not-found)
                    (console :log "No :db changes caused by:" event-name)
                    (let [[only-before only-after] (data/diff orig-db new-db)
                          db-changed?    (or (some? only-before) (some? only-after))
                          diff {:changed db-changed? :before only-before :after only-after}]
                      (do (console :group "db clojure.data/diff for:" event-name)
                          (console :log "[event]" event-name)
                          (console :log "[event args]" (clj->js event-args))
                          (console :log "[new db]" (clj->js new-db))
                          (console :log "[diff]" (clj->js diff))
                          (console :groupEnd))))
                  context)))))

;; -- Handlers --------------------------------------------------------------

(defn initialize-db
  "Returns the initial app-db. Called by src/<platform>/core.js synchronously."
  [_ _]
  (let [conform-explanation (s/explain-str ::db/app-db app-db)]
    (do
      (when-not
        (= "Success!\n" conform-explanation)
        (.error js/console conform-explanation))
      app-db)))

(reg-event-db :initialize-db [log-around validate-spec] initialize-db)
(reg-event-db :navigation/pop-scene [log-around validate-spec] navigation/pop-scene)
(reg-event-db :navigation/push-scene [log-around validate-spec] navigation/push-scene)
(reg-event-db :navigation/replace-scenes [log-around validate-spec] navigation/replace-scenes)
(reg-event-db :recipes-create/create-recipe-partial [log-around validate-spec] recipes-create/create-recipe-partial)
(reg-event-db :recipes-create/title-changed [log-around validate-spec] recipes-create/title-changed)
(reg-event-db :recipes-create/style-changed [log-around validate-spec] recipes-create/style-changed)
