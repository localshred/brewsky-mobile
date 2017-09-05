(ns brewsky.app.ui.components.titled-container
  (:require
    [brewsky.app.navigation.events :as navigation]
    [brewsky.app.ui :as ui]
    [brewsky.app.ui.components.title-bar :as title-bar]
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
    :width "100%"}

   :next-scene-button
   {:background-color (:dodger-blue ui/colors)
    :border-radius 0
    :flex 2
    :height "100%"
    :margin -3
    :margin-bottom -3
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
  "Button to advance to the next scene"
  [props text]
  (let [merged-props (merge next-scene-button-default-props props)]
    [ui/button merged-props text]))

(defn form-panel
  "Component to wrap the form components"
  [props children]
  (let [style (merge (:children-panel styles {}) (:style props {}))]
    (into [ui/view {:style style}] children)))

(defn component
  "A component that has a title with an optional menu button and an optional right button"
  [props children]
  (let [title-bar-props (merge (:title-bar props {}) (:title-bar styles {}))
        container-style (:container styles {})
        next-button (if-not (:disable-next-button props false)
                      [next-scene-button (:next-scene-button props {}) "Next"]
                      nil)
        ]
    [ui/view
     {:style container-style}
     [ui/status-bar {:bar-style "light-content"}]
     [title-bar/component title-bar-props]
     [form-panel (:style props {}) children]
     next-button
     ]))