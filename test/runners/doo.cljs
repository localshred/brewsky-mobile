(ns runners.doo
  (:require [doo.runner :refer-macros [doo-tests]]
            [brewsky.db-test]
            [brewsky.shared.events.navigation-test]
            [brewsky.shared.scenes-test]
            [brewsky.shared.subs.navigation-test]))

(doo-tests 'brewsky.db-test
           'brewsky.shared.events.navigation-test
           'brewsky.shared.scenes-test
           'brewsky.shared.subs.navigation-test)
