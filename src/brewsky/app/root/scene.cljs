(ns brewsky.app.root.scene
  (:require
    [reagent.core :as r]
    ; [brewsky.app.db] ; preload
    ; [brewsky.app.events] ; preload
    ; [brewsky.app.subs] ; preload
    [brewsky.app.scenes :as scenes]
    ))

(defn app-root
  "The root of the Brewksy mobile application"
  []
  (let [scene (scenes/current-scene)]
    [scene]))
