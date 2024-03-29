 (ns ^:figwheel-no-load env.android.main
  (:require [reagent.core :as r]
            [re-frame.core :refer [clear-subscription-cache!]]
            [brewsky.android.core :as core]
            [figwheel.client :as figwheel :include-macros true]
            [re-frisk-remote.core :as rr]))

(enable-console-print!)

(rr/enable-re-frisk-remote! {:host ":4567"})

(def cnt (r/atom 0))
(defn reloader [] @cnt [core/app-root])

;; Do not delete, root-el is used by the figwheel-bridge.js
(def root-el (r/as-element [reloader]))

(defn force-reload! []
  (clear-subscription-cache!)
  (swap! cnt inc))

(figwheel/watch-and-reload
 :websocket-url "ws://localhost:3449/figwheel-ws"
 :heads-up-display false
 :jsload-callback force-reload!)

(core/init)