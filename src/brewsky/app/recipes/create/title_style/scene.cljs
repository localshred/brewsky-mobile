(ns brewsky.app.recipes.create.title-style.scene
  (:require
    [brewsky.app.navigation.events :as navigation]
    [brewsky.app.recipes.create.events :as events]
    [brewsky.app.recipes.create.subs :as subs]
    [brewsky.app.recipes.create.title-style.styles :refer [styles]]
    [brewsky.app.ui :as ui]
    [brewsky.app.ui.components.label.component :as label]
    [brewsky.app.ui.components.titled-container.component :as titled-container]
    ))

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
  (let [recipe-partial @(subs/subscribe->recipe-partial)]
    [titled-container/component
     {:title-bar {:title "New Brew"}
      :next-scene-button {:on-press #(navigation/dispatch->push-scene :colors)}}
     [[ui/view
       {:style (:center-panel styles {})}
       [labeled-input {:label "What's the name of your beer?"
                       :input [text-input {:default-value (:title recipe-partial "")
                                           :on-focus #(.log js/console "focused style")
                                           :on-change-text #(events/dispatch->title-changed %)}]}]

       [labeled-input {:label "What style of beer?"
                       :input [text-input {:default-value (:style recipe-partial "")
                                           :on-focus #(.log js/console "focused style")
                                           :on-change-text #(events/dispatch->style-changed %)}]}]
       ]]
     ]))
