(ns brewsky.app.scenes
  (:require
    [brewsky.app.navigation.subs :as navigation]
    [brewsky.app.recipes.create.scene :as recipes-create]
    [brewsky.app.recipes.create.title-style.scene :as recipes-create-title-style]
    [brewsky.app.recipes.list.scene :as recipes-list]
    [brewsky.app.ui.colors.scene :as colors]
    [re-frame.core :refer [subscribe]]
    ))

(def default-scene
  "The scene to render initially or if a given scene is not known."
  :recipes-list)

(def scenes
  "All of the scenes we can render as top-level scenes."
  {:colors colors/component
   :recipes-create recipes-create/component
   :recipes-create-title-style recipes-create-title-style/component
   :recipes-list recipes-list/component})

(defn scene?
  "Is the given scene known?"
  [scene]
  (contains? scenes scene))

(defn scene-component
  "Gets the given scene function by keyword, or the default scene function
  if the given keyword does not have a corresponding scene."
  [scene]
  (scene scenes (default-scene scenes)))

(defn current-scene
  "Gets the current scene to be displayed to the user."
  []
  (let [scene (navigation/subscribe->current-scene)]
    (scene-component @scene)))
