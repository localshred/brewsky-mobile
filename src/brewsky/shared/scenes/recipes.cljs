(ns brewsky.shared.scenes.recipes
  (:require [brewsky.shared.ui :as ui]
            [brewsky.shared.events.navigation :as navigation]))

;; IMPORTANT!!! DELETE ME - Don't forget to map this scene in brewsky/src/shared/scenes.cljs

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

(defn add-brew-button
  "Render a button which will show the add-brew-menu scene on press"
  []
  [ui/button
    {:style (:add-brew-button styles {})
     :text-style (:add-brew-button-text-style styles {})
     :on-press #(navigation/dispatch->push-scene :recipe-add-wizard)}
    "Add Recipe +"])

(defn title
  "Title for this scene"
  [text]
  [ui/text
    {:style (:title styles {})}
    text])

(def container
  "Container component for this scene"
  [ui/view {:style (:container styles {})}
   (title "Recipes")
   (add-brew-button)])

(defn component [] container)
