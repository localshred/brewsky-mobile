(ns brewsky.subs
  (:require [re-frame.core :refer [reg-sub]]
            [brewsky.shared.subs.navigation :as navigation]))

(reg-sub :navigation/current-scene navigation/current-scene)
