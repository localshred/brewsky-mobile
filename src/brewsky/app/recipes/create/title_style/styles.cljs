(ns brewsky.app.recipes.create.title-style.styles
  (:require
    [brewsky.app.ui :refer [colors]]
    ))

(def styles
  {
   :center-panel
   {:justify-content "center"
    :height "100%"}

   :labeled-input
   {:margin 10
    :padding 10
    }

   :label
   {:margin-bottom 25
    :margin-top 25}

   :text-input
   {:border-bottom-color (:oslo-gray colors)
    :border-bottom-width 1
    :color (:abbey colors)
    :font-size 20}
   }
  )
