(ns brewsky.shared.scenes.create-extract-brew
  (:require [brewsky.shared.ui :as ui]
            [brewsky.shared.events.navigation :as navigation]))

(def styles
  { :container
   {:align-items "center"
    :background-color (:shark ui/colors)
    :flex 1
    :justify-content "center"}})

(def container
  "Container component for this scene"
  [ui/view
   {}
   [ui/text {} "Create Extract Brew"]
   [ui/button
    {:on-press #(navigation/dispatch->pop-scene)}
    "Back"]])

(defn component [] container)
