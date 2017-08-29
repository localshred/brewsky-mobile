(ns brewsky.shared.components.titled-container
  (:require [brewsky.shared.ui :as ui]
            [brewsky.shared.components.title-bar :as title-bar]))

(def styles
  {:container
   {:align-items "center"
    :background-color (:shark ui/colors)
    :flex 1
    :justify-content "center"}

   :children-panel
   {:background-color (:athens-gray ui/colors)
    :flex 15
    :width "100%"
    :padding 10}

   :title-bar
   {:flex 1}
   })

(defn component
  "A component that has a title with an optional menu button and an optional right button"
  [props children]
  (let [title-bar-props (merge
                          (:title-bar props {})
                          (:title-bar styles {}))

        container-style (:container styles {})

        children-panel-style (merge
                               (:children-panel styles {})
                               (:style props {}))]
    [ui/view
     {:style container-style}
     [ui/status-bar {:bar-style "light-content"}]
     (title-bar/component title-bar-props)
     (into
       [ui/view {:style children-panel-style}]
       children)]))
