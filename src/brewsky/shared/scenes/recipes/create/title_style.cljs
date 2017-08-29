(ns brewsky.shared.scenes.recipes.create.title-style
  (:require [brewsky.shared.ui :as ui]
            [brewsky.shared.events.navigation :as navigation]
            [brewsky.shared.components.titled-container :as titled-container]
            [brewsky.shared.components.label :as label]))

(def styles
  {:center-panel
   {:justify-content "center"
    :height "100%"
    }

   :text-input
   {:border-bottom-color (:oslo-gray ui/colors)
    :border-bottom-width 1
    :color (:abbey ui/colors)
    :font-size 20
    :margin 10
    :padding 10}})

(defn component
  "Container component for this scene"
  []
  [titled-container/component
   {:title-bar {:title "New Brew"}
    :next-scene-button {:on-press #(navigation/dispatch->push-scene :colors)}}
   [[ui/view
     {:style (:center-panel styles {})}
     [label/component {}  "What's the name of your beer?"]
     [ui/input {:style (:text-input styles {})
                :value "Hold My Beer"}]
     [label/component {}  "What style of beer?"]
     [ui/input {:style (:text-input styles {})
                :value "India Pale Ale"}] ]]])
