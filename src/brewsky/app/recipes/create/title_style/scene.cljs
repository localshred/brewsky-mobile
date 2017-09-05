(ns brewsky.app.recipes.create.title-style.scene
  (:require
    [brewsky.app.types :as types]
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

(def recipe-style-picker-items
  "Mapped list of Picker.Item elements for each recipe style"
  (map
    (fn [style] [ui/picker-item {:label style :value style}])
    types/recipe-styles))

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
                       :input [ui/input {:default-value (:title recipe-partial "")
                                         :on-change-text #(events/dispatch->title-changed %)
                                         :style (:text-input styles {})}]}]

       [labeled-input {:label "What style of beer?"
                       :input (into [ui/picker
                                     {:mode "dropdown"
                                      :on-focus #(.log js/console "focused style")
                                      :on-value-change #(events/dispatch->style-changed %)
                                      :selected-value (:style recipe-partial "")
                                      :style {}}
                                     ]
                                    recipe-style-picker-items)
                       }]
       ]]
     ]))
