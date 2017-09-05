(ns brewsky.app.ui.components.title-bar.styles
  (:require
    [brewsky.app.ui :refer [colors]]
    ))

(def styles
  {
   :component
   {:background-color (:shark colors)
    :flex 1
    :flex-direction "row"
    :height 70
    :justify-content "center"
    :margin-bottom 20
    :margin-top 20
    }

   :button-right
   {:border-width 0
    :flex 1
    :padding 20}

   :button-right-text-style
   {:color (:denim colors)
    :font-size 35}

   :button-left
   {:border-width 0
    :flex 1
    :padding 20}

   :button-left-text-style
   {:color (:oslo-gray colors)
    :font-size 20
    :padding-top 8}

   :title
   {:color (:athens-gray colors)
    :flex 10
    :font-size 20
    :font-weight "400"
    :padding-top 15
    :text-align "center"
    :width 75}
   })
