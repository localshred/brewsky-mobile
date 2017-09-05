(ns brewsky.app.recipes.list.styles
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

   :add-brew-button
   {}

   :add-brew-button-text-style
   {:color (:white colors)}

   :title
   {:color (:white colors)
    :font-size 35
    :margin-bottom 50}
   })
