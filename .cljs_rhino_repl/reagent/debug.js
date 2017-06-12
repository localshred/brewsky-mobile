// Compiled by ClojureScript 1.9.542 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__50661__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__50661 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50662__i = 0, G__50662__a = new Array(arguments.length -  0);
while (G__50662__i < G__50662__a.length) {G__50662__a[G__50662__i] = arguments[G__50662__i + 0]; ++G__50662__i;}
  args = new cljs.core.IndexedSeq(G__50662__a,0,null);
} 
return G__50661__delegate.call(this,args);};
G__50661.cljs$lang$maxFixedArity = 0;
G__50661.cljs$lang$applyTo = (function (arglist__50663){
var args = cljs.core.seq(arglist__50663);
return G__50661__delegate(args);
});
G__50661.cljs$core$IFn$_invoke$arity$variadic = G__50661__delegate;
return G__50661;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__50664__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__50664 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50665__i = 0, G__50665__a = new Array(arguments.length -  0);
while (G__50665__i < G__50665__a.length) {G__50665__a[G__50665__i] = arguments[G__50665__i + 0]; ++G__50665__i;}
  args = new cljs.core.IndexedSeq(G__50665__a,0,null);
} 
return G__50664__delegate.call(this,args);};
G__50664.cljs$lang$maxFixedArity = 0;
G__50664.cljs$lang$applyTo = (function (arglist__50666){
var args = cljs.core.seq(arglist__50666);
return G__50664__delegate(args);
});
G__50664.cljs$core$IFn$_invoke$arity$variadic = G__50664__delegate;
return G__50664;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map