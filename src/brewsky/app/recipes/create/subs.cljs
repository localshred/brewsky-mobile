(ns brewsky.app.recipes.create.subs
  (:require
    [re-frame.core :refer [subscribe]]
    ))

;; Subscriptions

(defn subscribe->recipe-partial
  "A ratom containing the current recipe-partial in the DB (e.g. the current Recipe the user is building"
  []
  (subscribe [:recipes-create/recipe-partial]))

;; Subscription Handlers

;; IMPORTANT!!! Don't forget to map these subscribers in brewsky/src/subs.cljs

(defn recipe-partial
  "Retrieves the :recipe-partial from the db."
  [db _]
  (:recipe-partial db {}))
