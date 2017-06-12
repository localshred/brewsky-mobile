(ns brewsky.shared.scenes.new-brew-menu
  (:require [reagent.core :as r]
            [brewsky.shared.colors :refer [colors]]
            [brewsky.shared.ui :as ui]
            [brewsky.shared.components.title-bar :as title-bar]
            [brewsky.events]
            [brewsky.subs]))

(def styles {:container {:align-items "center"
                         :background-color (:shark colors)
                         :flex 1
                         :justify-content "center"}})

(def status-bar [ui/status-bar {:bar-style "light-content"}])

(def container [ui/view {:style (:container styles)}
                status-bar
                (title-bar/component {:title "New Brew"})])

(defn component [] container)
