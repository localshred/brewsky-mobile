(ns brewsky.events
  (:require
   [re-frame.core :refer [reg-event-db after]]
   [clojure.spec.alpha :as s]
   [brewsky.db :as db :refer [app-db]]
   [brewsky.shared.events.navigation :as navigation]))

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
  app-db)

(def db-events
  "Describes all db-related events (to be used in conjunction with re-frame.core/reg-event-db)"
  {:initialize-db initialize-db
   :navigation/pop-scene navigation/pop-scene
   :navigation/push-scene navigation/push-scene
   :navigation/replace-scenes navigation/replace-scenes})

;; Register all the db event handlers
(doseq [[event-name handler] (seq db-events)]
  (reg-event-db
    event-name
    validate-spec
    handler))
