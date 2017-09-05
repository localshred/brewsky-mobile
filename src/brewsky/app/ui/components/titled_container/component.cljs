(ns brewsky.app.ui.components.titled-container.component
  (:require
    [brewsky.app.navigation.events :as navigation]
    [brewsky.app.ui :as ui]
    [brewsky.app.ui.components.title-bar.component :as title-bar]
    [brewsky.app.ui.components.titled-container.styles :refer [styles]]
    ))

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
