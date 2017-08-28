(ns brewsky.shared.scenes.recipes.create
  (:require [brewsky.shared.ui :as ui]
            [brewsky.shared.events.navigation :as navigation]
            [brewsky.shared.components.title-bar :as title-bar]))

(def styles
  {:all-grains-beer-button
   {:background-color (:purple-heart ui/colors)}

   :container
   {:align-items "center"
    :background-color (:shark ui/colors)
    :flex 1
    :justify-content "center"}

   :custom-beer-button
   {:background-color (:buttercup ui/colors)}

   :extract-beer-button
   {:background-color (:dodger-blue ui/colors)}

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
    :color (:white ui/colors)
    :font-size 60}

   :new-brew-button-inner-view-title
   {:text-align "center"
    :color (:white ui/colors)
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

(defn button
  [title push-scene-key style-key]
  (new-brew-button
    {:title title
     :on-press #(navigation/dispatch->push-scene push-scene-key)
     :style-key style-key}))

(def container
  [ui/view {:style (:container styles {})}
   status-bar
   (title-bar/component {:title "New Brew"})
   (button "Extract Beer" :recipes-create-title-style :extract-beer-button)
   (button "All Grain Beer" :recipes-create-title-style :all-grains-beer-button)
   (button "Custom Beer" :recipes-create-title-style :custom-beer-button)])

(defn component [] container)
