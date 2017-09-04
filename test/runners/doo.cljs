(ns runners.doo
  (:require [doo.runner :refer-macros [doo-tests]]
            [brewsky.db-test]
            [brewsky.app.navigation.events-test]
            [brewsky.app.scenes-test]
            [brewsky.app.navigation.subs-test]))

(doo-tests 'brewsky.db-test
           'brewsky.app.navigation.events-test
           'brewsky.app.scenes-test
           'brewsky.app.navigation.subs-test)
