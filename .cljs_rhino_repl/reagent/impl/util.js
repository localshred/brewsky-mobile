// Compiled by ClojureScript 1.9.542 {}
goog.provide('reagent.impl.util');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('reagent.debug');
goog.require('reagent.interop');
goog.require('clojure.string');
if(typeof reagent.impl.util.react !== 'undefined'){
} else {
reagent.impl.util.react = ((typeof React !== 'undefined')?React:((typeof require !== 'undefined')?(function (){var or__45125__auto__ = require("react");
if(cljs.core.truth_(or__45125__auto__)){
return or__45125__auto__;
} else {
throw (new Error("require('react') failed"));
}
})():(function(){throw (new Error("js/React is missing"))})()
));
}
reagent.impl.util.is_client = (typeof window !== 'undefined') && (!(((window["document"]) == null)));
reagent.impl.util._STAR_non_reactive_STAR_ = false;
reagent.impl.util.memoize_1 = (function reagent$impl$util$memoize_1(f){
var mem = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (mem){
return (function (arg){
var v = cljs.core.get.call(null,cljs.core.deref.call(null,mem),arg);
if(!((v == null))){
return v;
} else {
var ret = f.call(null,arg);
cljs.core.swap_BANG_.call(null,mem,cljs.core.assoc,arg,ret);

return ret;
}
});
;})(mem))
});
reagent.impl.util.dont_camel_case = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["aria",null,"data",null], null), null);
reagent.impl.util.capitalize = (function reagent$impl$util$capitalize(s){
if((cljs.core.count.call(null,s) < (2))){
return clojure.string.upper_case.call(null,s);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case.call(null,cljs.core.subs.call(null,s,(0),(1)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(1)))].join('');
}
});
reagent.impl.util.dash_to_camel = (function reagent$impl$util$dash_to_camel(dashed){
if(typeof dashed === 'string'){
return dashed;
} else {
var name_str = cljs.core.name.call(null,dashed);
var vec__50681 = clojure.string.split.call(null,name_str,/-/);
var seq__50682 = cljs.core.seq.call(null,vec__50681);
var first__50683 = cljs.core.first.call(null,seq__50682);
var seq__50682__$1 = cljs.core.next.call(null,seq__50682);
var start = first__50683;
var parts = seq__50682__$1;
if(cljs.core.truth_(reagent.impl.util.dont_camel_case.call(null,start))){
return name_str;
} else {
return cljs.core.apply.call(null,cljs.core.str,start,cljs.core.map.call(null,reagent.impl.util.capitalize,parts));
}
}
});
reagent.impl.util.fun_name = (function reagent$impl$util$fun_name(f){
var n = (function (){var or__45125__auto__ = (function (){var and__45113__auto__ = cljs.core.fn_QMARK_.call(null,f);
if(and__45113__auto__){
var or__45125__auto__ = (f["displayName"]);
if(cljs.core.truth_(or__45125__auto__)){
return or__45125__auto__;
} else {
return (f["name"]);
}
} else {
return and__45113__auto__;
}
})();
if(cljs.core.truth_(or__45125__auto__)){
return or__45125__auto__;
} else {
var or__45125__auto____$1 = (function (){var and__45113__auto__ = ((!((f == null)))?((((f.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === f.cljs$core$INamed$)))?true:false):false);
if(and__45113__auto__){
return cljs.core.name.call(null,f);
} else {
return and__45113__auto__;
}
})();
if(cljs.core.truth_(or__45125__auto____$1)){
return or__45125__auto____$1;
} else {
var m = cljs.core.meta.call(null,f);
if(cljs.core.map_QMARK_.call(null,m)){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
}
}
})();
return clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),"$",".");
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
*/
reagent.impl.util.partial_ifn = (function (f,args,p){
this.f = f;
this.args = args;
this.p = p;
this.cljs$lang$protocol_mask$partition0$ = 6291457;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
reagent.impl.util.partial_ifn.prototype.call = (function() { 
var G__50693__delegate = function (self__,a){
var self____$1 = this;
var _ = self____$1;
var or__45125__auto___50694 = self__.p;
if(cljs.core.truth_(or__45125__auto___50694)){
} else {
self__.p = cljs.core.apply.call(null,cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.call(null,self__.p,a);
};
var G__50693 = function (self__,var_args){
var self__ = this;
var a = null;
if (arguments.length > 1) {
var G__50695__i = 0, G__50695__a = new Array(arguments.length -  1);
while (G__50695__i < G__50695__a.length) {G__50695__a[G__50695__i] = arguments[G__50695__i + 1]; ++G__50695__i;}
  a = new cljs.core.IndexedSeq(G__50695__a,0,null);
} 
return G__50693__delegate.call(this,self__,a);};
G__50693.cljs$lang$maxFixedArity = 1;
G__50693.cljs$lang$applyTo = (function (arglist__50696){
var self__ = cljs.core.first(arglist__50696);
var a = cljs.core.rest(arglist__50696);
return G__50693__delegate(self__,a);
});
G__50693.cljs$core$IFn$_invoke$arity$variadic = G__50693__delegate;
return G__50693;
})()
;

reagent.impl.util.partial_ifn.prototype.apply = (function (self__,args50692){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args50692)));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__50697__delegate = function (a){
var _ = this;
var or__45125__auto___50698 = self__.p;
if(cljs.core.truth_(or__45125__auto___50698)){
} else {
self__.p = cljs.core.apply.call(null,cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.call(null,self__.p,a);
};
var G__50697 = function (var_args){
var self__ = this;
var a = null;
if (arguments.length > 0) {
var G__50699__i = 0, G__50699__a = new Array(arguments.length -  0);
while (G__50699__i < G__50699__a.length) {G__50699__a[G__50699__i] = arguments[G__50699__i + 0]; ++G__50699__i;}
  a = new cljs.core.IndexedSeq(G__50699__a,0,null);
} 
return G__50697__delegate.call(this,a);};
G__50697.cljs$lang$maxFixedArity = 0;
G__50697.cljs$lang$applyTo = (function (arglist__50700){
var a = cljs.core.seq(arglist__50700);
return G__50697__delegate(a);
});
G__50697.cljs$core$IFn$_invoke$arity$variadic = G__50697__delegate;
return G__50697;
})()
;

reagent.impl.util.partial_ifn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (cljs.core._EQ_.call(null,self__.f,other.f)) && (cljs.core._EQ_.call(null,self__.args,other.args));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
});

reagent.impl.util.partial_ifn.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),cljs.core.with_meta(new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

reagent.impl.util.partial_ifn.cljs$lang$type = true;

reagent.impl.util.partial_ifn.cljs$lang$ctorStr = "reagent.impl.util/partial-ifn";

reagent.impl.util.partial_ifn.cljs$lang$ctorPrWriter = (function (this__45782__auto__,writer__45783__auto__,opt__45784__auto__){
return cljs.core._write.call(null,writer__45783__auto__,"reagent.impl.util/partial-ifn");
});

reagent.impl.util.__GT_partial_ifn = (function reagent$impl$util$__GT_partial_ifn(f,args,p){
return (new reagent.impl.util.partial_ifn(f,args,p));
});

reagent.impl.util.merge_class = (function reagent$impl$util$merge_class(p1,p2){
var class$ = (function (){var temp__6738__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__6738__auto__)){
var c1 = temp__6738__auto__;
var temp__6738__auto____$1 = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__6738__auto____$1)){
var c2 = temp__6738__auto____$1;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(c1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c2)].join('');
} else {
return null;
}
} else {
return null;
}
})();
if((class$ == null)){
return p2;
} else {
return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"class","class",-2030961996),class$);
}
});
reagent.impl.util.merge_style = (function reagent$impl$util$merge_style(p1,p2){
var style = (function (){var temp__6738__auto__ = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__6738__auto__)){
var s1 = temp__6738__auto__;
var temp__6738__auto____$1 = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__6738__auto____$1)){
var s2 = temp__6738__auto____$1;
return cljs.core.merge.call(null,s1,s2);
} else {
return null;
}
} else {
return null;
}
})();
if((style == null)){
return p2;
} else {
return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"style","style",-496642736),style);
}
});
reagent.impl.util.merge_props = (function reagent$impl$util$merge_props(p1,p2){
if((p1 == null)){
return p2;
} else {
if(cljs.core.map_QMARK_.call(null,p1)){
} else {
throw (new Error("Assert failed: (map? p1)"));
}

return reagent.impl.util.merge_style.call(null,p1,reagent.impl.util.merge_class.call(null,p1,cljs.core.merge.call(null,p1,p2)));
}
});
reagent.impl.util._STAR_always_update_STAR_ = false;
reagent.impl.util.force_update = (function reagent$impl$util$force_update(comp,deep){
if(cljs.core.truth_(deep)){
var _STAR_always_update_STAR_50702 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (comp["forceUpdate"])();
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_50702;
}} else {
return (comp["forceUpdate"])();
}
});

//# sourceMappingURL=util.js.map