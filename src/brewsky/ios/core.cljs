(ns brewsky.ios.core
  (:require
    [brewsky.app.events]
    [brewsky.app.root.scene :as root-scene]
    [brewsky.app.subs]
    [brewsky.app.ui :as ui]
    [re-frame.core :refer [subscribe dispatch dispatch-sync]]
    [reagent.core :as r :refer [atom]]
    ))

(def app-root #'root-scene/app-root)

(defn init []
  (dispatch-sync [:initialize-db])
  (.registerComponent
    ui/app-registry
    "Brewsky"
    #(r/reactify-component app-root)))
