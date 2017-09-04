(ns brewsky.app.recipes.create.events
  (:require
    [re-frame.core :refer [dispatch]]
    ))

;; Event Dispatchers

(defn dispatch->create-recipe-partial
  "Dispatch a :recipes-create/create-recipe-partial event with the changed title."
  [recipe-type]
  (dispatch [:recipes-create/create-recipe-partial recipe-type]))

(defn dispatch->title-changed
  "Dispatch a :recipes-create/title-changed event with the changed title."
  [title]
  (dispatch [:recipes-create/title title]))

(defn dispatch->style-changed
  "Dispatch a :recipes-create/style-changed event with the changed title."
  [title]
  (dispatch [:recipes-create/title title]))

;; Event Handlers
;; IMPORTANT!!! Don't forget to map events in brewsky/src/events.cljs

(defn create-recipe-partial
  "Handles a :recipes-create/create-recipe-partial event.
  Creates a new recipe-partial with a type and guid"
  [db [_ recipe-type]]
  (assoc db :recipe-partial {:uuid (random-uuid) :type recipe-type}))

(defn title-changed
  "Handles a :recipes-create/title-changed event.
  Stores the changed title for the partial recipe"
  [db [_ title]]
  (assoc-in db [:recipe-partial :title] title))

(defn style-changed
  "Handles a :recipes-create/style-changed event.
  Stores the chosen brew style for the partial recipe"
  [db [_ style]]
  (assoc-in db [:recipe-partial :style] style))
