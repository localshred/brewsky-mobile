(ns brewsky.shared.scenes.recipes.create.title-style
  (:require [brewsky.shared.ui :as ui]
            [brewsky.shared.events.navigation :as navigation]))

(def styles
  {:container
   {:align-items "center"
    :background-color (:shark ui/colors)
    :flex 1
    :justify-content "center"}

   :back-button {}

   :title {}})

(defn back-button
  "Navigate to the prior screen"
  []
  [ui/button
    {:style (:back-button styles {})
     :on-press #(navigation/dispatch->pop-scene)}
    "Back"])

(defn title
  "Title for this scene"
  [text]
  [ui/text
    {:style (:title styles {})}
    text])

(def container
  "Container component for this scene"
  [ui/view {:style (:container styles {})}
    (back-button)
    (title "Scene: brewsky.shared.scenes.recipes.create.title-style")])

(defn component [] container)
