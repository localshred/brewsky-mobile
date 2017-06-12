(ns brewsky.ios.core
  (:require [reagent.core :as r :refer [atom]]
            [re-frame.core :refer [subscribe dispatch dispatch-sync]]
            [brewsky.shared.ui :as ui]
            [brewsky.shared.scenes.root :as root-scene]
            [brewsky.events]
            [brewsky.subs]))

(def app-root #'root-scene/app-root)

(defn init []
  (dispatch-sync [:initialize-db])
  (.registerComponent
    ui/app-registry
    "Brewsky"
    #(r/reactify-component app-root)))
