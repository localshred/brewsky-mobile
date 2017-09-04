(ns brewsky.app.ui.components.label
  (:require
    [brewsky.app.ui :as ui]
    ))

(def styles
  {:label
   {:color (:abbey ui/colors)
    :font-size 20}})

(defn component
  "A generic label"
  [props text]
  (let [style (merge (:label styles {}) (:style props {}))
        label-props (merge props {:style style})]
    [ui/text label-props text]))
