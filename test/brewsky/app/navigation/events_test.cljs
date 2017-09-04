(ns brewsky.app/navigation/events-test
  (:require [cljs.test :refer [deftest is are testing]]
            [brewsky.app.navigation.events :as navigation]))

(deftest test-pop-scene
  (testing "removes the current scene from the scene stack if there are at least two scenes in the stack"
    (are
      [initial-scene-stack expected-scene-stack]
      (=
       expected-scene-stack
       (:scene-stack
         (navigation/pop-scene
           {:scene-stack initial-scene-stack}
           [:navigation/pop-scene])))
      [:foo :bar :baz] [:foo :bar]
      [:foo :bar] [:foo]
      [:foo] [:foo])))

(deftest test-push-scene
  (testing "pushes a scene onto the scene stack"
    (are
      [initial-scene-stack expected-scene-stack scene]
      (=
       expected-scene-stack
       (:scene-stack
         (navigation/push-scene
           {:scene-stack initial-scene-stack}
           [:navigation/push-scene scene])))
      [:foo] [:foo :bar] :bar
      [] [:foo] :foo)))

(deftest test-replace-scenes
  (testing "wipes out the existing scene-stack and replaces it with the given scene with a stack size of 1"
    (are
      [initial-scene-stack expected-scene-stack scene]
      (=
       expected-scene-stack
       (:scene-stack
         (navigation/replace-scenes
           {:scene-stack initial-scene-stack}
           [:navigation/replace-scenes scene])))
      [:foo] [:bar] :bar
      [:foo :bar :baz] [:quux] :quux)))
