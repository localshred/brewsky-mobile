(ns brewsky.shared.scenes
  (:require [re-frame.core :refer [subscribe]]
            [brewsky.shared.scenes.new-brew-menu :as new-brew-menu]
            [brewsky.shared.subs.navigation :as navigation]))

(def default-scene
  "The scene to render initially or if a given scene is not known."
  :new-brew-menu)

(def scenes
  "All of the scenes we can render as top-level scenes."
  {:new-brew-menu new-brew-menu/component})

(defn scene?
  "Is the given scene known?"
  [scene]
  (contains? scenes scene))

(defn scene-component
  "Gets the given scene function by keyword, or the default scene function
  if the given keyword does not have a corresponding scene."
  [scene]
  (scene
    scenes
    (default-scene scenes)))

(defn current-scene
  "Gets the current scene to be displayed to the user."
  []
  (let [scene (navigation/subscription->current-scene)]
    (scene-component @scene)))
