(ns brewsky.shared.ui
  (:require [reagent.core :as r]
            [clojure.string :as str]
            [brewsky.shared.colors]))

(enable-console-print!)

;; ReactNative core
(def react-native (js/require "react-native"))
(def app-registry (.-AppRegistry react-native))
(def NativeModules (.-NativeModules react-native))
(def platform (.-Platform react-native))

; ReactNative classes
(def Alert (.-Alert react-native))
(def Image (.-Image react-native))
(def RNConfig (.-Config NativeModules))
(def StatusBar (.-StatusBar react-native))

;; Reagant components
(def action-sheet (.-ActionSheetIOS react-native))
(def activity-indicator (r/adapt-react-class (.-ActivityIndicator react-native)))
(def back-android (.-BackAndroid react-native))
(def button (r/adapt-react-class (js/require "apsl-react-native-button")))
(def clipboard (.-Clipboard react-native))
(def device-event-emitter (.-DeviceEventEmitter react-native))
(def dimensions (.-Dimensions react-native))
(def image (r/adapt-react-class Image))
(def input (r/adapt-react-class (.-TextInput react-native)))
(def interaction-manager (.-InteractionManager react-native))
(def linking (.-Linking react-native))
(def list-view (r/adapt-react-class (.-ListView react-native)))
(def modal (r/adapt-react-class (.-Modal react-native)))
(def net-info (.-NetInfo react-native))
(def refresh-control (r/adapt-react-class (.-RefreshControl react-native)))
(def scroll-view (r/adapt-react-class (.-ScrollView react-native)))
(def status-bar (r/adapt-react-class StatusBar))
(def status-bar-background (.-StatusBarBackground NativeModules))
(def switch (r/adapt-react-class (.-Switch react-native)))
(def text (r/adapt-react-class (.-Text react-native)))
(def touchable-highlight (r/adapt-react-class (.-TouchableHighlight react-native)))
(def touchable-native-feedback (r/adapt-react-class (.-TouchableNativeFeedback react-native)))
(def touchable-opacity (r/adapt-react-class (.-TouchableOpacity react-native)))
(def touchable-without-feedback (r/adapt-react-class (.-TouchableWithoutFeedback react-native)))
(def vibration (.-Vibration react-native))
(def view (r/adapt-react-class (.-View react-native)))

;; Other

(def colors brewsky.shared.colors/colors)

; (def NavigationExperimental (.-NavigationExperimental react-native))
; (def NavigationExperimentalHeader (.-Header (.-NavigationExperimental react-native)))
; (def card-stack (r/adapt-react-class (.-CardStack NavigationExperimental)))
; (def header-title (r/adapt-react-class (.-Title NavigationExperimentalHeader)))
; (def navigation-header (r/adapt-react-class NavigationExperimentalHeader))
; (def device-info (js/require "react-native-device-info"))
; (def SwipeableListView (js/require "SwipeableListView"))
; (def swipeable-list-view (r/adapt-react-class SwipeableListView))
; (def swipeable-quick-actions (r/adapt-react-class (js/require "SwipeableQuickActions")))
; (def progress (js/require "react-native-progress"))
; (def dismiss-keyboard (js/require "dismissKeyboard"))
; (def modalbox (r/adapt-react-class (js/require "react-native-modalbox")))
; (def image-picker (js/require "react-native-image-picker"))
; (def image-resizer (.-default (js/require "react-native-image-resizer")))
; (def aws3 (js/require "react-native-aws3"))
; (def rns3 (.-RNS3 aws3))
; (def font-awesome (js/require "react-native-vector-icons/FontAwesome"))
; (def icon (r/adapt-react-class font-awesome))
; (def icon-button (r/adapt-react-class (.-Button font-awesome)))
; (def material-icons (js/require "react-native-vector-icons/MaterialIcons"))
; (def material-icon (r/adapt-react-class material-icons))
; (def material-icon-button (r/adapt-react-class (.-Button material-icons)))
; (def google-signin (.-GoogleSignin google-signin-module))
; (def google-signin-button (r/adapt-react-class (.-GoogleSigninButton google-signin-module)))
; (def Realm (js/require "realm"))
; (def realm-react-native (js/require "realm/react-native"))
; (def realm-list-view (r/adapt-react-class (.-ListView realm-react-native)))
; (def app-intro (r/adapt-react-class (.-default (js/require "react-native-app-intro"))))
; (def gradient (r/adapt-react-class (.-default (js/require "react-native-linear-gradient"))))
; (def gifted-chat (r/adapt-react-class (.-GiftedChat (js/require "react-native-gifted-chat"))))
; (def parsed-text (r/adapt-react-class (.-default (js/require "react-native-parsed-text"))))
; (def webrtc (js/require "react-native-webrtc"))
; (def rtc-view (r/adapt-react-class (.-RTCView webrtc)))
; (def moment (js/require "moment"))
; (def code-push (js/require "react-native-code-push"))
; (def Drawer (js/require "react-native-drawer"))
; (def drawer (r/adapt-react-class Drawer))
; (def ActionButton (.-default (js/require "react-native-action-button")))
; (def action-button (r/adapt-react-class ActionButton))
; (def DialogAndroid (js/require "react-native-dialogs"))
; (def push-notification (js/require "react-native-push-notification"))
; (def fb-sdk (js/require "react-native-fbsdk"))
; (def google-signin-module (js/require "react-native-google-signin"))
; (def wechat (js/require "react-native-wechat"))

(defn alert
  ([title]
   (.alert Alert title))
  ([title message buttons]
   (.alert Alert title message (clj->js buttons))))

(defn get-platform
  []
  (.-OS platform))

(defn android?
  []
  (= "android" (get-platform)))

(defn ios?
  []
  (= "ios" (get-platform)))

(defn image-prefetch
  [url]
  (.prefetch Image url))

(defn run-after-interactions
  [cb]
  (.runAfterInteractions interaction-manager
                         cb))
(defn vibrate
  []
  (.vibrate vibration))

(defn open-url [url]
  (.openURL linking url))

; (defn show-dialog
; [options]
; (let [dialog (DialogAndroid.)]
;   (.set dialog (clj->js options))
;   (.show dialog)))
;
; (defn android-prompt
; [title content handler]
; (show-dialog {:title title
;               :content content
;               :positiveText "Ok"
;               :negativeText "Cancel"
;               :input {:callback (fn [text]
;                                   (when-not (str/blank? text)
;                                     (handler text)))}}))

; (defn prompt
;   [title message cb-or-buttons]
;   (cond
;     (android?)
;     (android-prompt title message cb-or-buttons)
;
;     (ios?)
;     (.prompt (.-AlertIOS react-native) title message cb-or-buttons)
;
;     :else
;     nil))
;
; (defn actions
;   [options handler]
;   (cond
;     (android?)
;     (show-dialog {:items options
;                   :itemsCallback handler})
;
;     (ios?)
;     (.showActionSheetWithOptions
;      action-sheet
;      (clj->js options)
;      handler)
;
;     :else
;     nil))

; (def material-kit (js/require "react-native-material-kit"))
; (def MDButton (.-MKButton material-kit))
; (def md-button (r/adapt-react-class MDButton))
; (defn floating-action-button
;   [handler]
;   (-> MDButton
;       (.accentColoredFlatButton)
;       (.withBackgroundColor (:teal400 colors))
;       (.withMaskColor "transparent")
;       (.withStyle #js {:position "absolute"
;                        :right 16
;                        :bottom 16
;                        :width 56
;                        :height 56
;                        :borderRadius 28})
;       (.withOnPress handler)
;       (.build)
;       (r/adapt-react-class)))
; (def MDSwitch (.-MKSwitch material-kit))
; (def md-switch (r/adapt-react-class MDSwitch))

; (defn dismiss-keyboard-cp
;   [child]
;   (let [dismissed? (r/atom false)]
;     (fn []
;       (if dismissed?
;         child
;         [touchable-opacity {:style {:flex 1
;                                     :activeOpacity 1
;                                     :background-color "transparent"}
;                             :on-press (fn []
;                                         (dismiss-keyboard)
;                                         (reset! dismissed? true))}
;          child]))))
