(ns brewsky.shared.scenes.recipes.list
  (:require [brewsky.shared.ui :as ui]
            [brewsky.shared.events.navigation :as navigation]))

(def styles
  {:container
   {:align-items "center"
    :background-color (:shark ui/colors)
    :flex 1
    :justify-content "center"}

   :add-brew-button {}
   :add-brew-button-text-style {:color (:white ui/colors)}

   :title {:color (:white ui/colors)
           :font-size 35
           :margin-bottom 50}})

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
