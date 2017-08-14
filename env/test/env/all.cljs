(ns ^:figwheel-no-load env.all)

(enable-console-print!)

;; We need to babelify certain plugins that use "import" et al
((js/require "babel-register") (clj->js {:only #".+/node_modules/apsl-react-native-button.*"}))

; (js/require "react-native-mock/mock")
(def react-native (js/require "react-native"))

;; Some rn components are not mocked correctly
(aset (.-Header (.-NavigationExperimental react-native)) "Title" "")
(aset react-native "SwipeableListView" (clj->js {}))
