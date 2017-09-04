(ns brewsky.db
  (:require [clojure.spec.alpha :as s]
            [brewsky.shared.scenes :refer [default-scene scene?]]))

;; Specification
(defn gte-zero? [pred] (s/and pred #(>= % 0)))
(def granularity? #{:pound :ounce :kilo :gram :milliliter})
(def percentage? #((and (>= 0 %) (<= 100))))

; (s/def ::recipe-amount-granularity granularity?)
; (s/def ::recipe-amount-value (gte-zero? double?))
; (s/def ::recipe-amount (s/cat :value ::recipe-amount-value
;                               :granularity ::recipe-amount-granularity))

; (s/def ::recipe-grain-type #{"Roasted Barley" "Rice Hulls"})
; (s/def ::recipe-grain (s/cat :grain ::recipe-grain-type
;                              :amount ::recipe-amount))
; (s/def ::recipe-grains (s/* ::recipe-grain))

; (s/def ::recipe-hop-type #{"Citra Hop Pellets"})
; (s/def ::recipe-hop-spec-aau (s/and double? percentage?))
; (s/def ::recipe-hop-add-to-boil-at-minute int?)
; (s/def ::recipe-hop (s/cat :hop ::recipe-hop-type
;                            :amount ::recipe-amount
;                            :aau ::recipe-hop-spec-aau
;                            :add-to-boil-at-minute ::recipe-hop-add-to-boil-at-minute))
; (s/def ::recipe-hops (s/* ::recipe-hop))

; (s/def ::recipe-fermentation-stage-type #{:one-stage :two-stage})
; (s/def ::recipe-fermentation-container #{:keg :bottle})
; (s/def ::recipe-fermentation-conditioning-days (gte-zero? int?))
; (s/def ::recipe-fermentation-first-stage-days (gte-zero? int?))
; (s/def ::recipe-fermentation-second-stage-days (gte-zero? int?))

; (s/def ::recipe-fermentation (s/keys :req [::recipe-fermentation-stage-type
;                                            ::recipe-fermentation-container
;                                            ::recipe-fermentation-conditioning-days
;                                            ::recipe-fermentation-first-stage-days]
;                                      :opt [::recipe-fermentation-second-stage-days]))

; (s/def ::recipe-timing-steep-time-minutes int?)
; (s/def ::recipe-timing-boil-time-minutes int?)
; (s/def ::recipe-timing (s/keys :req [::recipe-timing-steep-time-minutes
;                                      ::recipe-timing-boil-time-minutes]))

; ; (s/def ::recipe-specs-abv double?)
; ; (s/def ::recipe-specs-fg double?)
; ; (s/def ::recipe-specs-ibu double?)
; ; (s/def ::recipe-specs-og double?)
; ; (s/def ::recipe-specs (s/keys :req [::recipe-specs-abv
; ;                                     ::recipe-specs-final-gravity
; ;                                     ::recipe-specs-ibu
; ;                                     ::recipe-specs-original-gravity]))


; (s/def ::recipe-guid uuid?)
; (s/def ::recipe-type #{:extract :custom :kit})
; (s/def ::recipe-name string?)
; (s/def ::recipe-style #{"Pale Ale" "IPA"})

; (s/def ::recipe (s/keys :req [::recipe-guid
;                               ::recipe-type
;                               ::recipe-name
;                               ::recipe-style
;                               ::recipe-grains
;                               ::recipe-hops
;                               ::recipe-fermentation
;                               ::recipe-timing
;                               ::recipe-ordered-steps]))

; (s/def ::recipe-unique-key (s/tuple ::recipe-type ::recipe-style))
; (s/def ::recipes (s/map-of ::recipe-unique-key ::recipe))

; (s/def ::brew (s/keys :req [::recipe-guid
;                             ::brew-started-at
;                             ::brew-ended-at
;                             ::brew-boil-started-at
;                             ::brew-boil-ended-at
;                             ::brew-steep-started-at
;                             ::brew-steep-ended-at
;                             ::brew-fermentation-stage-1-started-at
;                             ::brew-fermentation-stage-1-ended-at
;                             ::brew-current-step
;                             ;;; ...
;                             ]
;                       :opt [
;                             ::brew-fermentation-stage-2-started-at
;                             ::brew-fermentation-stage-2-ended-at
;                             ]))
; (s/def ::brews (s/* ::brew))

(s/def ::guid uuid?)
(s/def ::type #{:extract :custom-all-grain :kit-all-grain})
(s/def ::name string?)
(s/def ::style #{"Pale Ale" "IPA"})

(s/def ::recipe (s/keys :req-un [::guid
                                 ::type
                                 ::name
                                 ::style]))

(s/def ::recipe-partial (s/keys :opt-un [::guid
                                         ::type
                                         ::name
                                         ::style]))

(s/def ::recipes (s/map-of ::guid ::recipe))

(s/def ::scene-stack (s/+ scene?))
(s/def ::app-db (s/keys :req-un [::scene-stack
                                 ::recipes
                                 ::recipe-partial]))

;; Initial State
(def app-db
  {:scene-stack [default-scene]
   :recipes {}
   :recipe-partial {}})
