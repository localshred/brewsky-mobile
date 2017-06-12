// Compiled by ClojureScript 1.9.542 {}
goog.provide('brewsky.ios.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('brewsky.events');
goog.require('brewsky.subs');
brewsky.ios.core.ReactNative = require("react-native");
brewsky.ios.core.app_registry = brewsky.ios.core.ReactNative.AppRegistry;
brewsky.ios.core.text = reagent.core.adapt_react_class.call(null,brewsky.ios.core.ReactNative.Text);
brewsky.ios.core.view = reagent.core.adapt_react_class.call(null,brewsky.ios.core.ReactNative.View);
brewsky.ios.core.image = reagent.core.adapt_react_class.call(null,brewsky.ios.core.ReactNative.Image);
brewsky.ios.core.touchable_highlight = reagent.core.adapt_react_class.call(null,brewsky.ios.core.ReactNative.TouchableHighlight);
brewsky.ios.core.logo_img = require("./images/cljs.png");
brewsky.ios.core.alert = (function brewsky$ios$core$alert(title){
return brewsky.ios.core.ReactNative.Alert.alert(title);
});
brewsky.ios.core.app_root = (function brewsky$ios$core$app_root(){
var greeting = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-greeting","get-greeting",-320717747)], null));
return ((function (greeting){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [brewsky.ios.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"margin","margin",-995903681),(40),new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [brewsky.ios.core.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(30),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"100",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(20),new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),cljs.core.deref.call(null,greeting)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [brewsky.ios.core.image,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),brewsky.ios.core.logo_img,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(80),new cljs.core.Keyword(null,"height","height",1025178622),(80),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(30)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [brewsky.ios.core.touchable_highlight,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#999",new cljs.core.Keyword(null,"padding","padding",1660304693),(10),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(5)], null),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),((function (greeting){
return (function (){
return brewsky.ios.core.alert.call(null,"HOW ARE YOU?");
});})(greeting))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [brewsky.ios.core.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),"press me"], null)], null)], null);
});
;})(greeting))
});
brewsky.ios.core.init = (function brewsky$ios$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

return brewsky.ios.core.app_registry.registerComponent("Brewsky",(function (){
return reagent.core.reactify_component.call(null,brewsky.ios.core.app_root);
}));
});

//# sourceMappingURL=core.js.map