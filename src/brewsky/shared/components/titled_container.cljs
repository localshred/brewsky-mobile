(ns brewsky.shared.components.titled-container
  (:require [brewsky.shared.ui :as ui]
            [brewsky.shared.components.title-bar :as title-bar]))

(def styles
  {:container
   {:align-items "center"
    :background-color (:shark ui/colors)
    :flex 1
    :justify-content "center"}
   })

(def status-bar
  [ui/status-bar {:bar-style "light-content"}])

(defn titled-container
  "The container component that holds the status bar, title bar (with buttons)"
  [title]
  [ui/view
   {:style (:container styles {})}
   status-bar
   (title-bar/component {:title title})])


(defn component
  "A component that has a title with an optional menu button and an optional right button"
  [props children]
  (let [title (:title props "Title")
        container (into (titled-container title) children)]
    container))
