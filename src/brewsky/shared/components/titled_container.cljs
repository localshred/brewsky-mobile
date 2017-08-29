(ns brewsky.shared.components.titled-container
  (:require
    [brewsky.shared.components.title-bar :as title-bar]
    [brewsky.shared.events.navigation :as navigation]
    [brewsky.shared.ui :as ui]
    ))

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

   :next-scene-button
   {:background-color (:dodger-blue ui/colors)
    :border-radius 0
    :flex 2
    :height "100%"
    :margin 0
    :padding 0
    }

   :next-scene-button-text
   {:color (:athens-gray ui/colors)
    }

   :title-bar
   {:flex 1}
   })

(def next-scene-button-default-props
  {:style (:next-scene-button styles {})
   :text-style (:next-scene-button-text styles {})})

(defn next-scene-button
  ""
  [props text]
  (let [merged-props (merge next-scene-button-default-props props)]
    [ui/button merged-props text]))

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
       children)
     [next-scene-button
      (:next-scene-button props {})
      "Next"]]))
