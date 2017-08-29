(ns brewsky.shared.scenes.recipes.create
  (:require [brewsky.shared.ui :as ui]
            [brewsky.shared.events.navigation :as navigation]
            [brewsky.shared.components.titled-container :as titled-container]))

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

(defn hero-button-style
  [style-key]
  (merge
    (:new-brew-button styles {})
    (style-key styles {})))

(defn hero-button-props
  [style]
  {:style style
   :on-press #(navigation/dispatch->push-scene :recipes-create-title-style)})

(defn hero-button
  [title style-key]
  (let [style (hero-button-style style-key)
        button-props (hero-button-props style)]
    [ui/button
     button-props
     [ui/view {:style (:new-brew-button-inner-view styles {})}
      [ui/text {:style (:new-brew-button-inner-view-plus styles {})} "+"]
      [ui/text {:style (:new-brew-button-inner-view-title styles {})} title]]]))

(defn component
  "A picker scene which presents three main buttons to create a new recipe"
  []
  [titled-container/component
    {:title "New Brew"}
    [(hero-button "Extract Beer" :extract-beer-button)
     (hero-button "All Grain Beer" :all-grains-beer-button)
     (hero-button "Custom Beer" :custom-beer-button)]])
