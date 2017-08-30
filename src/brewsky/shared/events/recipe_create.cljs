(ns brewsky.shared.events.recipe-create
  (:require [re-frame.core :refer [dispatch]]))

;; Event Dispatchers

(defn dispatch->style-chosen
  "Dispatch a :recipe-create/style-chosen event with the changed title."
  [guid title]
  (dispatch [:recipe-create/title guid title]))

(defn dispatch->title-changed
  "Dispatch a :recipe-create/title-changed event with the changed title."
  [guid title]
  (dispatch [:recipe-create/title guid title]))

;; Event Handlers
;; IMPORTANT!!! Don't forget to map events in brewsky/src/events.cljs

(defn style-chosen
  "Handles a :recipe-create/style-chosen event.
  Stores the chosen brew style for the recipe with the given guid"
  [db [_ guid style]]
  (assoc-in db [:recipes guid :style] style))

(defn title-changed
  "Handles a :recipe-create/title-changed event.
  Stores the changed title for the recipe with the given guid"
  [db [_ guid title]]
  (assoc-in db [:recipes guid :title] title))
