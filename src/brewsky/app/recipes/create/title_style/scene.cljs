(ns brewsky.app.recipes.create.title-style.scene
  (:require
    [brewsky.app.navigation.events :as navigation]
    [brewsky.app.ui :as ui]
    [brewsky.app.recipes.create.events :refer [dispatch->style-changed
                                               dispatch->title-changed]]
    [brewsky.app.recipes.create.subs :refer [subscription->recipe-partial]]
    [brewsky.app.ui.components.label :as label]
    [brewsky.app.ui.components.titled-container :as titled-container]
    ))

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
  (let [recipe-partial @(subscription->recipe-partial)]
    [titled-container/component
     {:title-bar {:title "New Brew"}
      :next-scene-button {:on-press #(navigation/dispatch->push-scene :colors)}}
     [[ui/view
       {:style (:center-panel styles {})}
       [labeled-input {:label "What's the name of your beer?"
                       :input [text-input {:default-value (:title recipe-partial "")
                                           :on-focus #(.log js/console "focused style")
                                           :on-change-text #(dispatch->title-changed %)}]}]

       [labeled-input {:label "What style of beer?"
                       :input [text-input {:default-value (:style recipe-partial "")
                                           :on-focus #(.log js/console "focused style")
                                           :on-change-text #(dispatch->style-changed %)}]}]
       ]]
     ]))
