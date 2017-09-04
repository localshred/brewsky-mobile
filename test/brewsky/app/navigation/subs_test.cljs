(ns brewsky.app.navigation.subs-test
  (:require [cljs.test :refer [deftest is are testing]]
            [brewsky.app.navigation.subs :as navigation]))

(deftest test-current-scene
  (testing "that the bottom of the scene-stack vector is always the current-scene"
    (are
      [scene-stack expected-scene]
      (= expected-scene (navigation/current-scene {:scene-stack scene-stack}))
      [:foo] :foo
      [:foo :bar] :bar
      [:foo :bar :baz] :baz
      [] nil)))
