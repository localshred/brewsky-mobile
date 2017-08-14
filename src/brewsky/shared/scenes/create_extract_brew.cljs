(ns brewsky.shared.scenes.create-extract-brew
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

(def container
  "Container component for this scene"
  [ui/view
   {:style (:container styles {})}
   [ui/text {:style (:title styles {})} "Create Extract Brew"]
   [ui/button
    {:on-press #(navigation/dispatch->pop-scene)
     :text-style (:back-button-text-style styles {})}
    "Back"]])

(defn component [] container)
