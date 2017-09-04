(ns brewsky.app.events
  (:require
   [brewsky.app.navigation.events :as navigation]
   [brewsky.app.recipes.create.events :as recipes-create]
   [brewsky.app.db :as db :refer [app-db]]
   [clojure.spec.alpha :as s]
   [re-frame.core :refer [reg-event-db after debug]]
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

(reg-event-db :initialize-db [debug validate-spec] initialize-db)
(reg-event-db :navigation/pop-scene [debug validate-spec] navigation/pop-scene)
(reg-event-db :navigation/push-scene [debug validate-spec] navigation/push-scene)
(reg-event-db :navigation/replace-scenes [debug validate-spec] navigation/replace-scenes)
(reg-event-db :recipes-create/create-recipe-partial [debug validate-spec] recipes-create/create-recipe-partial)
(reg-event-db :recipes-create/title-changed [debug validate-spec] recipes-create/title-changed)
(reg-event-db :recipes-create/style-changed [debug validate-spec] recipes-create/style-changed)
