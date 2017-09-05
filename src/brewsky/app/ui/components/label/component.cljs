(ns brewsky.app.ui.components.label.component
  (:require
    [brewsky.app.ui :as ui]
    [brewsky.app.ui.components.label.styles :refer [styles]]
    ))

(defn component
  "A generic label"
  [props text]
  (let [style (merge (:label styles {}) (:style props {}))
        label-props (merge props {:style style})]
    [ui/text label-props text]))
