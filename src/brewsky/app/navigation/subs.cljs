(ns brewsky.app.navigation.subs
  (:require
    [re-frame.core :refer [subscribe]]
    ))

;; Subscriptions

(defn subscribe->current-scene
  "A ratom indicating which scene is currently displayed to the user"
  []
  (subscribe [:navigation/current-scene]))

;; Subscription Handlers

(defn current-scene
  "Returns the last element of the :scene-stack from the db indicating
  which scene should be currently displayed to the user."
  [db _]
  (let [scene-stack (:scene-stack db [])
        current-scene (last scene-stack)]
    current-scene))
