(ns brewsky.shared.scenes-test
  (:require [cljs.test :refer [deftest is are testing]]
            [brewsky.shared.scenes :as scenes]))

(deftest test-scene?
  (are [scene expected] (= expected (scenes/scene? scene))
       :create-extract-brew true
       :choose-brew true
       :recipe-add-wizard true
       :something-bogus false
       123 false
       false false))

(deftest test-valid-scene-component
  (are [scene] (not= nil (scenes/scene-component scene))
       :create-extract-brew
       :choose-brew
       :recipe-add-wizard))

(deftest test-valid-scene-component
  (let [default-scene-component (scenes/scene-component scenes/default-scene)]
    (is (=
       default-scene-component
       (scenes/scene-component :not-a-valid-scene)))))
