(ns brewsky.shared.scenes.choose-brew
  (:require [brewsky.shared.ui :as ui]
            [brewsky.shared.events.navigation :as navigation]))

(def styles
  {:container
   {:align-items "center"
    :background-color (:shark ui/colors)
    :flex 1
    :justify-content "center"}

   :back-button {}
   :back-button-text-style {:color (:white ui/colors)}

   :title {:color (:white ui/colors)
           :font-size 35
           :margin-bottom 50}})

(defn back-button
  "Navigate to the prior screen"
  []
  [ui/button
    {:style (:back-button styles {})
     :text-style (:back-button-text-style styles {})
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
    (title "Choose your brew type")
    (back-button)])

(defn component [] container)
