(ns brewsky.app.ui.components.title-bar.component
  (:require
    [brewsky.app.navigation.events :as navigation]
    [brewsky.app.ui :as ui]
    [brewsky.app.ui.components.title-bar.styles :refer [styles]]
    ))

(defn merge-styles
  [styles-key style-overrides]
  (merge
    (styles-key styles {})
    (or style-overrides {})))

(defn button
  [default-text
   style-key
   text-style-key
   on-press
   user-text
   style-overrides
   text-style-overrides]
  (let [style (merge-styles style-key style-overrides)
        text-style (merge-styles text-style-key text-style-overrides)
        button-props {:style style :text-style text-style :on-press on-press}
        text (if (empty? user-text) default-text user-text)]
    [ui/button button-props text]))

(def right-button
  (partial
    button
    "+"
    :button-right
    :button-right-text-style
    #(navigation/dispatch->push-scene :colors)))

(def left-button
  (partial
    button
    "☰"
    :button-left
    :button-left-text-style
    #(navigation/dispatch->replace-scenes :recipes-list)))

(defn title
  [display-text style-overrides]
  (let [style (merge-styles :title style-overrides)
        props {:style style}]
    [ui/text props display-text]))

(defn component
  [props]
  (let [view-styles (merge-styles :component (:style props {}))
        view-props {:style view-styles}]
    [ui/view
     view-props
     (left-button
       (:left-button-text props "")
       (:left-button-style props {})
       (:left-button-text-style props {}))

     (title
       (:title props "")
       (:title-style props {}))

     (right-button
       (:right-button-text props "")
       (:right-button-style props {})
       (:right-button-text-style props {}))]))
