(ns brewsky.events
  (:require
   [brewsky.db :as db :refer [app-db]]
   [brewsky.shared.events.navigation :as navigation]
   [brewsky.shared.events.recipe-create :as recipe-create]
   [clojure.spec.alpha :as s]
   [re-frame.core :refer [reg-event-db after]]
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

(reg-event-db :initialize-db validate-spec initialize-db)
(reg-event-db :navigation/pop-scene validate-spec navigation/pop-scene)
(reg-event-db :navigation/push-scene validate-spec navigation/push-scene)
(reg-event-db :navigation/replace-scenes validate-spec navigation/replace-scenes)
(reg-event-db :recipe-create/title-changed validate-spec recipe-create/title-changed)
(reg-event-db :recipe-create/style-chosen validate-spec recipe-create/style-chosen)
