(ns brewsky.shared.scenes.recipes.create.title-style
  (:require [brewsky.shared.ui :as ui]
            [brewsky.shared.events.navigation :as navigation]
            [brewsky.shared.components.titled-container :as titled-container]))

(def styles
  {:container {}
   :back-button {}
   :title {}})

(defn back-button
  "Navigate to the prior screen"
  []
  [ui/button
    {:style (:back-button styles {})
     :on-press #(navigation/dispatch->pop-scene)}
    "Back"])

(defn title
  "Title for this scene"
  [text]
  [ui/text
    {:style (:title styles {})}
    text])

(defn component
  "Container component for this scene"
  []
  [titled-container/component
   {:title "New Brew" :style (:container styles {})}
   [(back-button)
    (title "Scene: brewsky.shared.scenes.recipes.create.title-style")]])
