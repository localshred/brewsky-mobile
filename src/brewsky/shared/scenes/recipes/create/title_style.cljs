(ns brewsky.shared.scenes.recipes.create.title-style
  (:require [brewsky.shared.ui :as ui]
            [brewsky.shared.events.navigation :as navigation]
            [brewsky.shared.components.titled-container :as titled-container]))

(def styles
  {})

(defn back-button
  "Navigate to the prior screen"
  []
  [ui/button
    {:on-press #(navigation/dispatch->pop-scene)}
    "Back"])

(defn component
  "Container component for this scene"
  []
  [titled-container/component
   {:title-bar {:title "New Brew"}}
   [(back-button)
    [ui/text "Scene: brewsky.shared.scenes.recipes.create.title-style"]]])
