(ns brewsky.shared.scenes.choose-brew
  (:require [brewsky.shared.ui :as ui]
            [brewsky.shared.events.navigation :as navigation]))

;; IMPORTANT!!! DELETE ME - Don't forget to map this scene in brewsky/src/shared/scenes.cljs

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
    (title "Scene: brewsky.shared.scenes.choose-brew")])

(defn component [] container)
