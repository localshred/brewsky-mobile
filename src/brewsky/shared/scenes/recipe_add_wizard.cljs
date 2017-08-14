(ns brewsky.shared.scenes.recipe-add-wizard
  (:require [brewsky.shared.ui :as ui]
            [brewsky.shared.components.title-bar :as title-bar]
            [brewsky.shared.events.navigation :as navigation]))

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

(def container
  [ui/view {:style (:container styles {})}
   status-bar
   (title-bar/component {:title "New Brew"})
   (new-brew-button
     {:title "Extract Beer"
      :on-press #(navigation/dispatch->push-scene :create-extract-brew)
      :style-key :extract-beer-button})
   (new-brew-button
     {:title "All Grain Beer"
      :on-press #(navigation/dispatch->push-scene :choose-brew)
      :style-key :all-grains-beer-button})
   (new-brew-button
     {:title "Custom Beer"
      :on-press #(navigation/dispatch->push-scene :choose-brew)
      :style-key :custom-beer-button})])

(defn component [] container)
