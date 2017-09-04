(ns brewsky.app.ui.components.title-bar
  (:require
    [reagent.core :as r]
    [brewsky.app.ui :as ui]
    [brewsky.app.navigation.events :as navigation]
    ))

(def styles
  {:component
   {:background-color (:shark ui/colors)
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
   {:color (:denim ui/colors)
    :font-size 35}

   :button-left
   {:border-width 0
    :flex 1
    :padding 20}

   :button-left-text-style
   {:color (:oslo-gray ui/colors)
    :font-size 20
    :padding-top 8}

   :title
   {:color (:athens-gray ui/colors)
    :flex 10
    :font-size 20
    :font-weight "400"
    :padding-top 15
    :text-align "center"
    :width 75}})

(defn merge-styles
  [styles-key style-overrides]
  (merge
    (styles-key styles {})
    (or style-overrides {})))

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
    #(navigation/dispatch->push-scene :colors)))

(def left-button
  (partial
    button
    "☰"
    :button-left
    :button-left-text-style
    #(navigation/dispatch->replace-scenes :recipes-list)))

(defn title
  [display-text style-overrides]
  (let [style (merge-styles :title style-overrides)
        props {:style style}]
    [ui/text props display-text]))

(defn component
  [props]
  (let [view-styles (merge-styles :component (:style props {}))
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
