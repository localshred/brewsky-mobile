(ns brewsky.app.colors.styles
  (:require
    [brewsky.app.ui :refer [colors]]
    ))

(def styles
  {
   :container
   {:flex 1
    :margin-top 25
    :justify-content "flex-start"}

   :scroll-view
   {:flex 10}

   :color-block-text
   {:padding 5
    :background-color "#fff"
    :text-align "center"
    :font-weight "bold"
    :opacity 0.5
    :color "#000"}

   :color-block-view
   (fn
     [hex-color]
     {:background-color hex-color
      :padding 20
      :text-align :center})
   })
