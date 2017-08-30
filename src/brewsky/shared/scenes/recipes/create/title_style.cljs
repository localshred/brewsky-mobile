(ns brewsky.shared.scenes.recipes.create.title-style
  (:require [brewsky.shared.ui :as ui]
            [brewsky.shared.events.navigation :as navigation]
            [brewsky.shared.components.titled-container :as titled-container]
            [brewsky.shared.components.label :as label]))

(def styles
  {:center-panel
   {:justify-content "center"
    :height "100%"}

   :labeled-input
   {:margin 10
    :padding 10
    }

   :label
   {:margin-bottom 25
    :margin-top 25}

   :text-input
   {:border-bottom-color (:oslo-gray ui/colors)
    :border-bottom-width 1
    :color (:abbey ui/colors)
    :font-size 20}})

(defn labeled-input
  ""
  [props]
  [ui/view {:style (:labeled-input styles {})}
   [label/component {:style (:label styles {})} (:label props)]
   (:input props)])

(defn text-input
  "" 
  [props]
  [ui/input {:style (:text-input styles {})
             :value (:value props)}])

(defn component
  "Container component for this scene"
  []
  [titled-container/component
   {:title-bar {:title "New Brew"}
    :next-scene-button {:on-press #(navigation/dispatch->push-scene :colors)}}
   [[ui/view
     {:style (:center-panel styles {})}
     [labeled-input {:label "What's the name of your beer?"
                     :input [text-input {:value "Hold My Beer"}]}]
     [labeled-input {:label "What style of beer?"
                     :input [text-input {:value "India Pale Ale"}]}]]]])
