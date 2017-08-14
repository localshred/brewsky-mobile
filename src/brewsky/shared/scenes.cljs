(ns brewsky.shared.scenes
  (:require [re-frame.core :refer [subscribe]]
            [brewsky.shared.scenes.choose-brew :as choose-brew]
            [brewsky.shared.scenes.create-extract-brew :as create-extract-brew]
            [brewsky.shared.scenes.recipe-add-wizard :as recipe-add-wizard]
            [brewsky.shared.scenes.recipes :as recipes]
            [brewsky.shared.subs.navigation :as navigation]))

(def default-scene
  "The scene to render initially or if a given scene is not known."
  :recipes)

(def scenes
  "All of the scenes we can render as top-level scenes."
  {:choose-brew choose-brew/component
   :create-extract-brew create-extract-brew/component
   :recipe-add-wizard recipe-add-wizard/component
   :recipes recipes/component})

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
