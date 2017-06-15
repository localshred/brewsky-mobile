(ns brewsky.shared.components.title-bar
  (:require [reagent.core :as r]
            [brewsky.shared.colors :refer [colors]]
            [brewsky.shared.ui :as ui]))

(def styles
  {:component
   {:flex 1
    :flex-direction "row"
    :height 70
    :justify-content "center"
    :margin-top 20
    :margin-bottom 20
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
    :font-size 25}

   :title
   {:color (:oslo-gray colors)
    :flex 10
    :font-size 20
    :padding-top 15
    :text-align "center"
    :width 75}})

(defn merge-styles
  [styles-key overrides]
  (merge
    (styles-key styles {})
    (or overrides {})))

(defn button
  [default-text
   style-key
   text-style-key
   on-press
   user-text
   style-overrides
   text-style-overrides]
  (let [style (merge-styles style-key style-overrides)
        text-style (merge-styles text-style-key text-style-overrides)
        button-props {:style style :text-style text-style :on-press on-press}
        text (if (empty? user-text) default-text user-text)]
    [ui/button button-props text]))

(def right-button
  (partial
    button
    "+"
    :button-right
    :button-right-text-style
    #(ui/alert "What is this button even for, bro?")))

(def left-button
  (partial
    button
    "☰"
    :button-left
    :button-left-text-style
    #(ui/alert "Open the menu, bro")))

(defn title
  [display-text style-overrides]
  (let [style (merge-styles :title style-overrides)
        props {:style style}]
    [ui/text props display-text]))

(defn component
  [props]
  (let [view-styles (merge-styles :component (:style props))
        view-props {:style view-styles}]
    [ui/view
     view-props
     (left-button
       (:left-button-text props "")
       (:left-button-style props {})
       (:left-button-text-style props {}))

     (title
       (:title props "")
       (:title-style props {}))

     (right-button
       (:right-button-text props "")
       (:right-button-style props {})
       (:right-button-text-style props {}))]))