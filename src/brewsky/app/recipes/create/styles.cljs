(ns brewsky.app.recipes.create.styles
  (:require
    [brewsky.app.ui :refer [colors]]
    ))

(def styles
  {
   :all-grains-beer-button
   {:background-color (:purple-heart colors)}

   :container
   {:align-items "center"
    :background-color (:shark colors)
    :flex 1
    :justify-content "center"}

   :custom-beer-button
   {:background-color (:buttercup colors)}

   :extract-beer-button
   {:background-color (:dodger-blue colors)}

   :new-brew-button
   {:flex 5
    :margin-bottom 0
    :padding-bottom 0
    :border-radius 1
    :border-width 0}

   :new-brew-button-inner-view
   {}

   :new-brew-button-inner-view-plus
   {:margin-top -30
    :text-align "center"
    :color (:athens-gray colors)
    :font-size 60}

   :new-brew-button-inner-view-title
   {:text-align "center"
    :color (:athens-gray colors)
    :font-size 22}
   })
