(ns brewsky.shared.scenes.root
  (:require [reagent.core :as r]
            [re-frame.core :refer [subscribe]]
            [brewsky.shared.scenes.new-brew-menu :as new-brew-menu]
            [brewsky.shared.ui :as ui]
            [brewsky.events]
            [brewsky.subs]))

(def logo-img (js/require "./images/cljs.png"))

(defn app-root []
  (cond
    :else [new-brew-menu/component]))
