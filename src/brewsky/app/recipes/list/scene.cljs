(ns brewsky.app.recipes.list.scene
  (:require
    [brewsky.app.navigation.events :as navigation]
    [brewsky.app.recipes.list.styles :refer [styles]]
    [brewsky.app.ui :as ui]
    ))

(defn add-recipe-button
  "Render a button which will show the :recipes-create scene on press"
  []
  [ui/button
   {:style (:add-brew-button styles {})
    :text-style (:add-brew-button-text-style styles {})
    :on-press #(navigation/dispatch->push-scene :recipes-create)}
   "Add Recipe +"])

(defn title
  "Title for this scene"
  [text]
  [ui/text
   {:style (:title styles {})}
   text])

(defn component
  "Container component for this scene"
  []
  [ui/view {:style (:container styles {})}
   (title "Recipes")
   (add-recipe-button)])
