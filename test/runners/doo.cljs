(ns runners.doo
  (:require [doo.runner :refer-macros [doo-tests]]
            [brewsky.db-test]))

(doo-tests 'brewsky.db-test)
