(ns brewsky.subs
  (:require [re-frame.core :refer [reg-sub]]
            [brewsky.shared.subs.navigation :as navigation]
            [brewsky.shared.subs.recipes.create :as recipes-create]))

(reg-sub :navigation/current-scene navigation/current-scene)
(reg-sub :recipes-create/recipe-partial recipes-create/recipe-partial)
