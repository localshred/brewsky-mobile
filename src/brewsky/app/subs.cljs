(ns brewsky.app.subs
  (:require
    [brewsky.app.navigation.subs :as navigation]
    [brewsky.app.recipes.create.subs :as recipes-create]
    [re-frame.core :refer [reg-sub]]
    ))

(reg-sub :navigation/current-scene navigation/current-scene)
(reg-sub :recipes-create/recipe-partial recipes-create/recipe-partial)
