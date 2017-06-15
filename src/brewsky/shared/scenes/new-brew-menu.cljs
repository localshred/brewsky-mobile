(ns brewsky.shared.scenes.new-brew-menu
  (:require [reagent.core :as r]
            [brewsky.shared.colors :refer [colors]]
            [brewsky.shared.ui :as ui]
            [brewsky.shared.components.title-bar :as title-bar]))

(def styles
  {:all-grains-beer-button
   {:background-color (:purple-heart colors)}

   :container
   {:align-items "center"
    :background-color (:shark colors)
    :flex 1
    :justify-content "center"}

   :custom-beer-button
   {:background-color (:buttercup colors)}

   :extract-beer-button
   {:background-color (:dodger-blue colors)}

   :new-brew-button
   {:flex 5
    :margin-bottom 0
    :padding-bottom 0
    :border-radius 1
    :border-width 0}

   :new-brew-button-inner-view
   {}

   :new-brew-button-inner-view-plus
   {:margin-top -30
    :text-align "center"
    :color (:white colors)
    :font-size 60}

   :new-brew-button-inner-view-title
   {:text-align "center"
    :color (:white colors)
    :font-size 22}})

(def status-bar
  [ui/status-bar {:bar-style "light-content"}])

(defn new-brew-button
  [{:keys [title on-press style-key]}]
  (let [default-style (:new-brew-button styles {})
        override-style (style-key styles {})
        style (merge default-style override-style)
        props {:style style :on-press on-press}]
    [ui/button
     props
     [ui/view {:style (:new-brew-button-inner-view styles {})}
      [ui/text {:style (:new-brew-button-inner-view-plus styles {})} "+"]
      [ui/text {:style (:new-brew-button-inner-view-title styles {})} title]]]))

(def container
  [ui/view {:style (:container styles {})}
   status-bar
   (title-bar/component {:title "New Brew"})
   (new-brew-button
     {:title "Extract Beer"
      :on-press #(ui/alert "Pressed Extract")
      :style-key :extract-beer-button})
   (new-brew-button
     {:title "All Grain Beer"
      :on-press #(ui/alert "Pressed all grains")
      :style-key :all-grains-beer-button})
   (new-brew-button
     {:title "Custom Beer"
      :on-press #(ui/alert "Pressed custom")
      :style-key :custom-beer-button})])

(defn component [] container)
