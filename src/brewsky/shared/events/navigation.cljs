(ns brewsky.shared.events.navigation
  (:require [re-frame.core :refer [dispatch]]))

(def db-scene-stack-key :scene-stack)

;; Event Dispatchers

(defn dispatch->pop-scene
  "Dispatch a :navigation/pop-scene event."
  []
  (dispatch [:navigation/pop-scene]))

(defn dispatch->push-scene
  "Dispatch a :navigation/push-scene event with the given scene."
  [scene]
  (dispatch [:navigation/push-scene scene]))

(defn dispatch->replace-scenes
  "Dispatch a :navigation/replace-scenes event with the given scene."
  [scene]
  (dispatch [:navigation/replace-scenes scene]))

;; Event Handlers

(defn pop-scene
  "Handles the :navigation/pop-scene event.
  Pop the top scene off the stack, effectively pressing the back button."
  [db [_]]
  (let [stack (db-scene-stack-key db)
        stack-size (count stack)]
    (case stack-size
      1 db
      (assoc db db-scene-stack-key (pop stack)))))

(defn push-scene
  "Handles the :navigation/push-scene event.
  Push a new scene onto the stack."
  [db [_ scene]]
  (let [stack (db-scene-stack-key db)]
    (if
     (not= (peek stack) scene)
      (assoc
       db
       db-scene-stack-key
       (conj (db-scene-stack-key db) scene))
      db)))

(defn replace-scenes
  "Handles the :navigation/replace-scenes event.
  Wipe out the current navigation stack and replace it with the given scene."
  [db [_ scene]]
  (assoc db db-scene-stack-key [scene]))
