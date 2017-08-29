(ns brewsky.shared.components.label
  (:require [brewsky.shared.ui :as ui]))

(def styles
  {:label
   {:color (:abbey ui/colors)
    :font-size 20
    :margin-top 25
    :margin-bottom 25
    :margin-left 10
    :margin-right 10}})

(defn component
  "A generic label"
  [props text]
  (let [style (merge (:label styles {}) (:style props {}))
        label-props (merge props {:style style})]
    [ui/text label-props text]))
