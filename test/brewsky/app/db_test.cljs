(ns brewsky.app.db-test
  (:require [cljs.test :refer [deftest is are testing]]
            [clojure.spec.alpha :as s]
            [brewsky.app.db :as db]))

(deftest test-app-db
  (testing "initial state of app-db"
    (is (=
         (s/conform ::db/app-db db/app-db)
         {:scene-stack [:recipes-list]}))))
