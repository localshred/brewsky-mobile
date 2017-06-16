(ns runners.doo
  (:require [doo.runner :refer-macros [doo-tests]]
            [runners.all-tests]))

(doo-tests 'brewsky.db-test)
