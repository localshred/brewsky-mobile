(ns brewsky.app.ui.components.titled-container.styles
  (:require
    [brewsky.app.ui :refer [colors]]
    ))

(def styles
  {
   :container
   {:align-items "center"
    :background-color (:shark colors)
    :flex 1
    :justify-content "center"}

   :children-panel
   {:background-color (:athens-gray colors)
    :flex 15
    :width "100%"}

   :next-scene-button
   {:background-color (:dodger-blue colors)
    :border-radius 0
    :flex 2
    :height "100%"
    :margin -3
    :margin-bottom -3
    :padding 0
    }

   :next-scene-button-text
   {:color (:athens-gray colors)
    }

   :title-bar
   {:flex 1}
   })
