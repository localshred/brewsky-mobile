(ns brewsky.shared.components.title-bar
  (:require [reagent.core :as r]
            [brewsky.shared.colors :refer [colors]]
            [brewsky.shared.ui :as ui]
            [brewsky.events]
            [brewsky.subs]))

(def styles {:button-right {:border-width 0
                            :flex 1
                            :padding 20}

             :button-right-text-style {:font-size 35
                                       :color (:denim colors)}

             :button-left {:border-width 0
                           :flex 1
                           :padding 20}

             :button-left-text-style {:font-size 25
                                      :color (:oslo-gray colors)}

             :title {:color (:oslo-gray colors)
                     :background-color "blue"
                     :flex 10
                     :font-size 20
                     :padding-top 10
                     :text-align "center"
                     :width 75}

             :title-bar {:flex 1
                         :flex-direction "row"
                         :height 110
                         :justify-content "center"
                         :padding-top 25
                         :margin-top 20}})

(defn merge-styles
  [styles-key overrides]
  (merge
    (styles-key styles {})
    (or overrides {})))

(defn button
  [default-text
   style-key
   text-style-key
   user-text
   style-overrides
   text-style-overrides]
  (let [style (merge-styles style-key style-overrides)
        text-style (merge-styles text-style-key text-style-overrides)
        button-props {:style style :text-style text-style}
        text (if (empty? user-text) default-text user-text)]
    [ui/button button-props text]))

(def right-button
  (partial
    button
    "+"
    :button-right
    :button-right-text-style))

(def left-button
  (partial
    button
    "☰"
    :button-left
    :button-left-text-style))

(defn title
  [display-text style-overrides]
  (let [style (merge-styles :title style-overrides)
        props {:style style}]
    [ui/text props display-text]))

(defn component
  [props]
  [ui/view {:style (:title-bar styles)}
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
     (:right-button-text-style props {}))
   ])

















; (def title-styles {
;              :title {:flex 1
;                      :flex-direction "row"
;                      :height 110
;                      :justify-content "center"
;                      :padding-top 25
;                      :margin-top 20}

;              :title-button-add {:border-width 0
;                                 :flex 1
;                                 :padding 20}

;              :title-button-add-text-styles {:font-size 35
;                                             :color (:denim colors)}

;              :title-button-menu {:border-width 0
;                                  :flex 1
;                                  :padding 20}

;              :title-button-menu-text-styles {:font-size 25
;                                              :color (:oslo-gray colors)}

;              :title-text {:color (:oslo-gray colors)
;                           :background-color "blue"
;                           :flex 10
;                           :font-size 20
;                           :padding-top 10
;                           :text-align "center"
;                           :width 75}})

; (defn button [style-name text-style-name text]
;   [ui/button {:style (get title-styles style-name {})
;               :text-style (get title-styles text-style-name {})}
;    text])

; (def title-add-brew-button
;   (button
;      :title-button-add
;      :title-button-add-text-styles
;      "+"))

; (def title-menu-button
;   (button
;      :title-button-menu
;      :title-button-menu-text-styles
;      "☰"))

; (def title-text
;   [ui/text {:style (:title-text title-styles)} "New Brew"])

; (def title [ui/view {:style (:title title-styles)}
;             title-menu-button
;             title-text
;             title-add-brew-button])
