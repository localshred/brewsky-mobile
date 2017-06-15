(ns brewsky.db
  (:require [clojure.spec.alpha :as s]
            [brewsky.shared.scenes :refer [default-scene scene?]]))

;; app-db specification
(s/def ::scene-stack (s/coll-of scene? :kind vector? :min-count 1))
(s/def ::app-db
  (s/keys :req-un [::scene-stack]))

;; initial state of app-db
(def app-db
  {:scene-stack [default-scene]})
