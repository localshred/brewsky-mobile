(ns brewsky.shared.scenes.colors
  (:require [brewsky.shared.ui :as ui]
            [brewsky.shared.events.navigation :as navigation]))

(def styles
  {:container {:flex 1
               :justify-content "flex-start"}

   :scroll-view {:flex 10}

   :color-block-text {:padding 5
                      :background-color "#fff"
                      :text-align "center"
                      :font-weight "bold"
                      :opacity 0.5
                      :color "#000"}

   :color-block-view (fn
                       [hex-color]
                       {:background-color hex-color
                        :padding 20
                        :text-align :center})
   })

(defn block
  [hex-color color-name]
  [ui/view
   ((:color-block-view styles) hex-color)
   [ui/text {:style (:color-block-text styles)} (str color-name " " hex-color)]])

(def container
  "Container component for this scene"
  [ui/view {:style (:container styles {})}
   [ui/scroll-view {:style (:scroll-view styles {})}
    [ui/button
     {:style (:back-button styles {})
      :text-style (:back-button-text-style styles {})
      :on-press #(navigation/dispatch->replace-scenes :recipes-list)}
     "Recipes"]
    (block (:cod-gray ui/colors) "cod-gray")
    (block (:shark ui/colors) "shark")
    (block (:abbey ui/colors) "abbey")
    (block (:oslo-gray ui/colors) "oslo-gray")
    (block (:polo-blue ui/colors) "polo-blue")
    (block (:blue-bayoux ui/colors) "blue-bayoux")
    (block (:cello ui/colors) "cello")
    (block (:matisse ui/colors) "matisse")
    (block (:denim ui/colors) "denim")
    (block (:dodger-blue ui/colors) "dodger-blue")
    (block (:golden-grass ui/colors) "golden-grass")
    (block (:buttercup ui/colors) "buttercup")
    (block (:purple-heart ui/colors) "purple-heart")
    (block (:athens-gray ui/colors) "athens-gray")
    (block (:white ui/colors) "white")
    ]])

(defn component [] container)
