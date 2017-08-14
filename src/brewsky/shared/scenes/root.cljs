(ns brewsky.shared.scenes.root
  (:require [reagent.core :as r]
            [brewsky.db] ; preload
            [brewsky.events] ; preload
            [brewsky.subs] ; preload
            [brewsky.shared.scenes :as scenes]
            [brewsky.shared.scenes.recipes.list :as recipes-list]))

(defn app-root
  "The root of the Brewksy mobile application"
  []
  (let [scene (scenes/current-scene)]
    [scene]))
