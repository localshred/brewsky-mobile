// Compiled by ClojureScript 1.9.542 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__45782__auto__,writer__45783__auto__,opt__45784__auto__){
return cljs.core._write.call(null,writer__45783__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__46353__auto__ = [];
var len__46346__auto___48492 = arguments.length;
var i__46347__auto___48493 = (0);
while(true){
if((i__46347__auto___48493 < len__46346__auto___48492)){
args__46353__auto__.push((arguments[i__46347__auto___48493]));

var G__48494 = (i__46347__auto___48493 + (1));
i__46347__auto___48493 = G__48494;
continue;
} else {
}
break;
}

var argseq__46354__auto__ = ((((0) < args__46353__auto__.length))?(new cljs.core.IndexedSeq(args__46353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__46354__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq48491){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48491));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__46353__auto__ = [];
var len__46346__auto___48496 = arguments.length;
var i__46347__auto___48497 = (0);
while(true){
if((i__46347__auto___48497 < len__46346__auto___48496)){
args__46353__auto__.push((arguments[i__46347__auto___48497]));

var G__48498 = (i__46347__auto___48497 + (1));
i__46347__auto___48497 = G__48498;
continue;
} else {
}
break;
}

var argseq__46354__auto__ = ((((0) < args__46353__auto__.length))?(new cljs.core.IndexedSeq(args__46353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__46354__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq48495){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48495));
});

var g_QMARK__48499 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_48500 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__48499){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__48499))
,null));
var mkg_48501 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__48499,g_48500){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__48499,g_48500))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__48499,g_48500,mkg_48501){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__48499).call(null,x);
});})(g_QMARK__48499,g_48500,mkg_48501))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__48499,g_48500,mkg_48501){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_48501).call(null,gfn);
});})(g_QMARK__48499,g_48500,mkg_48501))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__48499,g_48500,mkg_48501){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_48500).call(null,generator);
});})(g_QMARK__48499,g_48500,mkg_48501))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__46447__auto___48521 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__46447__auto___48521){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__46353__auto__ = [];
var len__46346__auto___48522 = arguments.length;
var i__46347__auto___48523 = (0);
while(true){
if((i__46347__auto___48523 < len__46346__auto___48522)){
args__46353__auto__.push((arguments[i__46347__auto___48523]));

var G__48524 = (i__46347__auto___48523 + (1));
i__46347__auto___48523 = G__48524;
continue;
} else {
}
break;
}

var argseq__46354__auto__ = ((((0) < args__46353__auto__.length))?(new cljs.core.IndexedSeq(args__46353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__46354__auto__);
});})(g__46447__auto___48521))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46447__auto___48521){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46447__auto___48521),args);
});})(g__46447__auto___48521))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__46447__auto___48521){
return (function (seq48502){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48502));
});})(g__46447__auto___48521))
;


var g__46447__auto___48525 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__46447__auto___48525){
return (function cljs$spec$gen$alpha$list(var_args){
var args__46353__auto__ = [];
var len__46346__auto___48526 = arguments.length;
var i__46347__auto___48527 = (0);
while(true){
if((i__46347__auto___48527 < len__46346__auto___48526)){
args__46353__auto__.push((arguments[i__46347__auto___48527]));

var G__48528 = (i__46347__auto___48527 + (1));
i__46347__auto___48527 = G__48528;
continue;
} else {
}
break;
}

var argseq__46354__auto__ = ((((0) < args__46353__auto__.length))?(new cljs.core.IndexedSeq(args__46353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__46354__auto__);
});})(g__46447__auto___48525))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46447__auto___48525){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46447__auto___48525),args);
});})(g__46447__auto___48525))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__46447__auto___48525){
return (function (seq48503){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48503));
});})(g__46447__auto___48525))
;


var g__46447__auto___48529 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__46447__auto___48529){
return (function cljs$spec$gen$alpha$map(var_args){
var args__46353__auto__ = [];
var len__46346__auto___48530 = arguments.length;
var i__46347__auto___48531 = (0);
while(true){
if((i__46347__auto___48531 < len__46346__auto___48530)){
args__46353__auto__.push((arguments[i__46347__auto___48531]));

var G__48532 = (i__46347__auto___48531 + (1));
i__46347__auto___48531 = G__48532;
continue;
} else {
}
break;
}

var argseq__46354__auto__ = ((((0) < args__46353__auto__.length))?(new cljs.core.IndexedSeq(args__46353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__46354__auto__);
});})(g__46447__auto___48529))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46447__auto___48529){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46447__auto___48529),args);
});})(g__46447__auto___48529))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__46447__auto___48529){
return (function (seq48504){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48504));
});})(g__46447__auto___48529))
;


var g__46447__auto___48533 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__46447__auto___48533){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__46353__auto__ = [];
var len__46346__auto___48534 = arguments.length;
var i__46347__auto___48535 = (0);
while(true){
if((i__46347__auto___48535 < len__46346__auto___48534)){
args__46353__auto__.push((arguments[i__46347__auto___48535]));

var G__48536 = (i__46347__auto___48535 + (1));
i__46347__auto___48535 = G__48536;
continue;
} else {
}
break;
}

var argseq__46354__auto__ = ((((0) < args__46353__auto__.length))?(new cljs.core.IndexedSeq(args__46353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__46354__auto__);
});})(g__46447__auto___48533))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46447__auto___48533){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46447__auto___48533),args);
});})(g__46447__auto___48533))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__46447__auto___48533){
return (function (seq48505){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48505));
});})(g__46447__auto___48533))
;


var g__46447__auto___48537 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__46447__auto___48537){
return (function cljs$spec$gen$alpha$set(var_args){
var args__46353__auto__ = [];
var len__46346__auto___48538 = arguments.length;
var i__46347__auto___48539 = (0);
while(true){
if((i__46347__auto___48539 < len__46346__auto___48538)){
args__46353__auto__.push((arguments[i__46347__auto___48539]));

var G__48540 = (i__46347__auto___48539 + (1));
i__46347__auto___48539 = G__48540;
continue;
} else {
}
break;
}

var argseq__46354__auto__ = ((((0) < args__46353__auto__.length))?(new cljs.core.IndexedSeq(args__46353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__46354__auto__);
});})(g__46447__auto___48537))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46447__auto___48537){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46447__auto___48537),args);
});})(g__46447__auto___48537))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__46447__auto___48537){
return (function (seq48506){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48506));
});})(g__46447__auto___48537))
;


var g__46447__auto___48541 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__46447__auto___48541){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__46353__auto__ = [];
var len__46346__auto___48542 = arguments.length;
var i__46347__auto___48543 = (0);
while(true){
if((i__46347__auto___48543 < len__46346__auto___48542)){
args__46353__auto__.push((arguments[i__46347__auto___48543]));

var G__48544 = (i__46347__auto___48543 + (1));
i__46347__auto___48543 = G__48544;
continue;
} else {
}
break;
}

var argseq__46354__auto__ = ((((0) < args__46353__auto__.length))?(new cljs.core.IndexedSeq(args__46353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__46354__auto__);
});})(g__46447__auto___48541))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46447__auto___48541){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46447__auto___48541),args);
});})(g__46447__auto___48541))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__46447__auto___48541){
return (function (seq48507){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48507));
});})(g__46447__auto___48541))
;


var g__46447__auto___48545 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__46447__auto___48545){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__46353__auto__ = [];
var len__46346__auto___48546 = arguments.length;
var i__46347__auto___48547 = (0);
while(true){
if((i__46347__auto___48547 < len__46346__auto___48546)){
args__46353__auto__.push((arguments[i__46347__auto___48547]));

var G__48548 = (i__46347__auto___48547 + (1));
i__46347__auto___48547 = G__48548;
continue;
} else {
}
break;
}

var argseq__46354__auto__ = ((((0) < args__46353__auto__.length))?(new cljs.core.IndexedSeq(args__46353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__46354__auto__);
});})(g__46447__auto___48545))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46447__auto___48545){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46447__auto___48545),args);
});})(g__46447__auto___48545))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__46447__auto___48545){
return (function (seq48508){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48508));
});})(g__46447__auto___48545))
;


var g__46447__auto___48549 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__46447__auto___48549){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__46353__auto__ = [];
var len__46346__auto___48550 = arguments.length;
var i__46347__auto___48551 = (0);
while(true){
if((i__46347__auto___48551 < len__46346__auto___48550)){
args__46353__auto__.push((arguments[i__46347__auto___48551]));

var G__48552 = (i__46347__auto___48551 + (1));
i__46347__auto___48551 = G__48552;
continue;
} else {
}
break;
}

var argseq__46354__auto__ = ((((0) < args__46353__auto__.length))?(new cljs.core.IndexedSeq(args__46353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__46354__auto__);
});})(g__46447__auto___48549))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46447__auto___48549){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46447__auto___48549),args);
});})(g__46447__auto___48549))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__46447__auto___48549){
return (function (seq48509){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48509));
});})(g__46447__auto___48549))
;


var g__46447__auto___48553 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__46447__auto___48553){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__46353__auto__ = [];
var len__46346__auto___48554 = arguments.length;
var i__46347__auto___48555 = (0);
while(true){
if((i__46347__auto___48555 < len__46346__auto___48554)){
args__46353__auto__.push((arguments[i__46347__auto___48555]));

var G__48556 = (i__46347__auto___48555 + (1));
i__46347__auto___48555 = G__48556;
continue;
} else {
}
break;
}

var argseq__46354__auto__ = ((((0) < args__46353__auto__.length))?(new cljs.core.IndexedSeq(args__46353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__46354__auto__);
});})(g__46447__auto___48553))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46447__auto___48553){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46447__auto___48553),args);
});})(g__46447__auto___48553))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__46447__auto___48553){
return (function (seq48510){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48510));
});})(g__46447__auto___48553))
;


var g__46447__auto___48557 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__46447__auto___48557){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__46353__auto__ = [];
var len__46346__auto___48558 = arguments.length;
var i__46347__auto___48559 = (0);
while(true){
if((i__46347__auto___48559 < len__46346__auto___48558)){
args__46353__auto__.push((arguments[i__46347__auto___48559]));

var G__48560 = (i__46347__auto___48559 + (1));
i__46347__auto___48559 = G__48560;
continue;
} else {
}
break;
}

var argseq__46354__auto__ = ((((0) < args__46353__auto__.length))?(new cljs.core.IndexedSeq(args__46353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__46354__auto__);
});})(g__46447__auto___48557))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46447__auto___48557){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46447__auto___48557),args);
});})(g__46447__auto___48557))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__46447__auto___48557){
return (function (seq48511){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48511));
});})(g__46447__auto___48557))
;


var g__46447__auto___48561 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__46447__auto___48561){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__46353__auto__ = [];
var len__46346__auto___48562 = arguments.length;
var i__46347__auto___48563 = (0);
while(true){
if((i__46347__auto___48563 < len__46346__auto___48562)){
args__46353__auto__.push((arguments[i__46347__auto___48563]));

var G__48564 = (i__46347__auto___48563 + (1));
i__46347__auto___48563 = G__48564;
continue;
} else {
}
break;
}

var argseq__46354__auto__ = ((((0) < args__46353__auto__.length))?(new cljs.core.IndexedSeq(args__46353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__46354__auto__);
});})(g__46447__auto___48561))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46447__auto___48561){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46447__auto___48561),args);
});})(g__46447__auto___48561))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__46447__auto___48561){
return (function (seq48512){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48512));
});})(g__46447__auto___48561))
;


var g__46447__auto___48565 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__46447__auto___48565){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__46353__auto__ = [];
var len__46346__auto___48566 = arguments.length;
var i__46347__auto___48567 = (0);
while(true){
if((i__46347__auto___48567 < len__46346__auto___48566)){
args__46353__auto__.push((arguments[i__46347__auto___48567]));

var G__48568 = (i__46347__auto___48567 + (1));
i__46347__auto___48567 = G__48568;
continue;
} else {
}
break;
}

var argseq__46354__auto__ = ((((0) < args__46353__auto__.length))?(new cljs.core.IndexedSeq(args__46353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__46354__auto__);
});})(g__46447__auto___48565))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46447__auto___48565){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46447__auto___48565),args);
});})(g__46447__auto___48565))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__46447__auto___48565){
return (function (seq48513){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48513));
});})(g__46447__auto___48565))
;


var g__46447__auto___48569 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__46447__auto___48569){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__46353__auto__ = [];
var len__46346__auto___48570 = arguments.length;
var i__46347__auto___48571 = (0);
while(true){
if((i__46347__auto___48571 < len__46346__auto___48570)){
args__46353__auto__.push((arguments[i__46347__auto___48571]));

var G__48572 = (i__46347__auto___48571 + (1));
i__46347__auto___48571 = G__48572;
continue;
} else {
}
break;
}

var argseq__46354__auto__ = ((((0) < args__46353__auto__.length))?(new cljs.core.IndexedSeq(args__46353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__46354__auto__);
});})(g__46447__auto___48569))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46447__auto___48569){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46447__auto___48569),args);
});})(g__46447__auto___48569))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__46447__auto___48569){
return (function (seq48514){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48514));
});})(g__46447__auto___48569))
;


var g__46447__auto___48573 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__46447__auto___48573){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__46353__auto__ = [];
var len__46346__auto___48574 = arguments.length;
var i__46347__auto___48575 = (0);
while(true){
if((i__46347__auto___48575 < len__46346__auto___48574)){
args__46353__auto__.push((arguments[i__46347__auto___48575]));

var G__48576 = (i__46347__auto___48575 + (1));
i__46347__auto___48575 = G__48576;
continue;
} else {
}
break;
}

var argseq__46354__auto__ = ((((0) < args__46353__auto__.length))?(new cljs.core.IndexedSeq(args__46353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__46354__auto__);
});})(g__46447__auto___48573))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46447__auto___48573){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46447__auto___48573),args);
});})(g__46447__auto___48573))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__46447__auto___48573){
return (function (seq48515){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48515));
});})(g__46447__auto___48573))
;


var g__46447__auto___48577 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__46447__auto___48577){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__46353__auto__ = [];
var len__46346__auto___48578 = arguments.length;
var i__46347__auto___48579 = (0);
while(true){
if((i__46347__auto___48579 < len__46346__auto___48578)){
args__46353__auto__.push((arguments[i__46347__auto___48579]));

var G__48580 = (i__46347__auto___48579 + (1));
i__46347__auto___48579 = G__48580;
continue;
} else {
}
break;
}

var argseq__46354__auto__ = ((((0) < args__46353__auto__.length))?(new cljs.core.IndexedSeq(args__46353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__46354__auto__);
});})(g__46447__auto___48577))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46447__auto___48577){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46447__auto___48577),args);
});})(g__46447__auto___48577))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__46447__auto___48577){
return (function (seq48516){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48516));
});})(g__46447__auto___48577))
;


var g__46447__auto___48581 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__46447__auto___48581){
return (function cljs$spec$gen$alpha$return(var_args){
var args__46353__auto__ = [];
var len__46346__auto___48582 = arguments.length;
var i__46347__auto___48583 = (0);
while(true){
if((i__46347__auto___48583 < len__46346__auto___48582)){
args__46353__auto__.push((arguments[i__46347__auto___48583]));

var G__48584 = (i__46347__auto___48583 + (1));
i__46347__auto___48583 = G__48584;
continue;
} else {
}
break;
}

var argseq__46354__auto__ = ((((0) < args__46353__auto__.length))?(new cljs.core.IndexedSeq(args__46353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__46354__auto__);
});})(g__46447__auto___48581))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46447__auto___48581){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46447__auto___48581),args);
});})(g__46447__auto___48581))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__46447__auto___48581){
return (function (seq48517){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48517));
});})(g__46447__auto___48581))
;


var g__46447__auto___48585 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__46447__auto___48585){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__46353__auto__ = [];
var len__46346__auto___48586 = arguments.length;
var i__46347__auto___48587 = (0);
while(true){
if((i__46347__auto___48587 < len__46346__auto___48586)){
args__46353__auto__.push((arguments[i__46347__auto___48587]));

var G__48588 = (i__46347__auto___48587 + (1));
i__46347__auto___48587 = G__48588;
continue;
} else {
}
break;
}

var argseq__46354__auto__ = ((((0) < args__46353__auto__.length))?(new cljs.core.IndexedSeq(args__46353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__46354__auto__);
});})(g__46447__auto___48585))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46447__auto___48585){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46447__auto___48585),args);
});})(g__46447__auto___48585))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__46447__auto___48585){
return (function (seq48518){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48518));
});})(g__46447__auto___48585))
;


var g__46447__auto___48589 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__46447__auto___48589){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__46353__auto__ = [];
var len__46346__auto___48590 = arguments.length;
var i__46347__auto___48591 = (0);
while(true){
if((i__46347__auto___48591 < len__46346__auto___48590)){
args__46353__auto__.push((arguments[i__46347__auto___48591]));

var G__48592 = (i__46347__auto___48591 + (1));
i__46347__auto___48591 = G__48592;
continue;
} else {
}
break;
}

var argseq__46354__auto__ = ((((0) < args__46353__auto__.length))?(new cljs.core.IndexedSeq(args__46353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__46354__auto__);
});})(g__46447__auto___48589))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46447__auto___48589){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46447__auto___48589),args);
});})(g__46447__auto___48589))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__46447__auto___48589){
return (function (seq48519){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48519));
});})(g__46447__auto___48589))
;


var g__46447__auto___48593 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__46447__auto___48593){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__46353__auto__ = [];
var len__46346__auto___48594 = arguments.length;
var i__46347__auto___48595 = (0);
while(true){
if((i__46347__auto___48595 < len__46346__auto___48594)){
args__46353__auto__.push((arguments[i__46347__auto___48595]));

var G__48596 = (i__46347__auto___48595 + (1));
i__46347__auto___48595 = G__48596;
continue;
} else {
}
break;
}

var argseq__46354__auto__ = ((((0) < args__46353__auto__.length))?(new cljs.core.IndexedSeq(args__46353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__46354__auto__);
});})(g__46447__auto___48593))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46447__auto___48593){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46447__auto___48593),args);
});})(g__46447__auto___48593))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__46447__auto___48593){
return (function (seq48520){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48520));
});})(g__46447__auto___48593))
;

var g__46460__auto___48618 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__46460__auto___48618){
return (function cljs$spec$gen$alpha$any(var_args){
var args__46353__auto__ = [];
var len__46346__auto___48619 = arguments.length;
var i__46347__auto___48620 = (0);
while(true){
if((i__46347__auto___48620 < len__46346__auto___48619)){
args__46353__auto__.push((arguments[i__46347__auto___48620]));

var G__48621 = (i__46347__auto___48620 + (1));
i__46347__auto___48620 = G__48621;
continue;
} else {
}
break;
}

var argseq__46354__auto__ = ((((0) < args__46353__auto__.length))?(new cljs.core.IndexedSeq(args__46353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__46354__auto__);
});})(g__46460__auto___48618))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46460__auto___48618){
return (function (args){
return cljs.core.deref.call(null,g__46460__auto___48618);
});})(g__46460__auto___48618))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__46460__auto___48618){
return (function (seq48597){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48597));
});})(g__46460__auto___48618))
;


var g__46460__auto___48622 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__46460__auto___48622){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__46353__auto__ = [];
var len__46346__auto___48623 = arguments.length;
var i__46347__auto___48624 = (0);
while(true){
if((i__46347__auto___48624 < len__46346__auto___48623)){
args__46353__auto__.push((arguments[i__46347__auto___48624]));

var G__48625 = (i__46347__auto___48624 + (1));
i__46347__auto___48624 = G__48625;
continue;
} else {
}
break;
}

var argseq__46354__auto__ = ((((0) < args__46353__auto__.length))?(new cljs.core.IndexedSeq(args__46353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__46354__auto__);
});})(g__46460__auto___48622))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46460__auto___48622){
return (function (args){
return cljs.core.deref.call(null,g__46460__auto___48622);
});})(g__46460__auto___48622))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__46460__auto___48622){
return (function (seq48598){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48598));
});})(g__46460__auto___48622))
;


var g__46460__auto___48626 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__46460__auto___48626){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__46353__auto__ = [];
var len__46346__auto___48627 = arguments.length;
var i__46347__auto___48628 = (0);
while(true){
if((i__46347__auto___48628 < len__46346__auto___48627)){
args__46353__auto__.push((arguments[i__46347__auto___48628]));

var G__48629 = (i__46347__auto___48628 + (1));
i__46347__auto___48628 = G__48629;
continue;
} else {
}
break;
}

var argseq__46354__auto__ = ((((0) < args__46353__auto__.length))?(new cljs.core.IndexedSeq(args__46353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__46354__auto__);
});})(g__46460__auto___48626))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46460__auto___48626){
return (function (args){
return cljs.core.deref.call(null,g__46460__auto___48626);
});})(g__46460__auto___48626))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__46460__auto___48626){
return (function (seq48599){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48599));
});})(g__46460__auto___48626))
;


var g__46460__auto___48630 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__46460__auto___48630){
return (function cljs$spec$gen$alpha$char(var_args){
var args__46353__auto__ = [];
var len__46346__auto___48631 = arguments.length;
var i__46347__auto___48632 = (0);
while(true){
if((i__46347__auto___48632 < len__46346__auto___48631)){
args__46353__auto__.push((arguments[i__46347__auto___48632]));

var G__48633 = (i__46347__auto___48632 + (1));
i__46347__auto___48632 = G__48633;
continue;
} else {
}
break;
}

var argseq__46354__auto__ = ((((0) < args__46353__auto__.length))?(new cljs.core.IndexedSeq(args__46353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__46354__auto__);
});})(g__46460__auto___48630))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46460__auto___48630){
return (function (args){
return cljs.core.deref.call(null,g__46460__auto___48630);
});})(g__46460__auto___48630))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__46460__auto___48630){
return (function (seq48600){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48600));
});})(g__46460__auto___48630))
;


var g__46460__auto___48634 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__46460__auto___48634){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__46353__auto__ = [];
var len__46346__auto___48635 = arguments.length;
var i__46347__auto___48636 = (0);
while(true){
if((i__46347__auto___48636 < len__46346__auto___48635)){
args__46353__auto__.push((arguments[i__46347__auto___48636]));

var G__48637 = (i__46347__auto___48636 + (1));
i__46347__auto___48636 = G__48637;
continue;
} else {
}
break;
}

var argseq__46354__auto__ = ((((0) < args__46353__auto__.length))?(new cljs.core.IndexedSeq(args__46353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__46354__auto__);
});})(g__46460__auto___48634))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46460__auto___48634){
return (function (args){
return cljs.core.deref.call(null,g__46460__auto___48634);
});})(g__46460__auto___48634))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__46460__auto___48634){
return (function (seq48601){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48601));
});})(g__46460__auto___48634))
;


var g__46460__auto___48638 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__46460__auto___48638){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__46353__auto__ = [];
var len__46346__auto___48639 = arguments.length;
var i__46347__auto___48640 = (0);
while(true){
if((i__46347__auto___48640 < len__46346__auto___48639)){
args__46353__auto__.push((arguments[i__46347__auto___48640]));

var G__48641 = (i__46347__auto___48640 + (1));
i__46347__auto___48640 = G__48641;
continue;
} else {
}
break;
}

var argseq__46354__auto__ = ((((0) < args__46353__auto__.length))?(new cljs.core.IndexedSeq(args__46353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__46354__auto__);
});})(g__46460__auto___48638))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46460__auto___48638){
return (function (args){
return cljs.core.deref.call(null,g__46460__auto___48638);
});})(g__46460__auto___48638))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__46460__auto___48638){
return (function (seq48602){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48602));
});})(g__46460__auto___48638))
;


var g__46460__auto___48642 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__46460__auto___48642){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__46353__auto__ = [];
var len__46346__auto___48643 = arguments.length;
var i__46347__auto___48644 = (0);
while(true){
if((i__46347__auto___48644 < len__46346__auto___48643)){
args__46353__auto__.push((arguments[i__46347__auto___48644]));

var G__48645 = (i__46347__auto___48644 + (1));
i__46347__auto___48644 = G__48645;
continue;
} else {
}
break;
}

var argseq__46354__auto__ = ((((0) < args__46353__auto__.length))?(new cljs.core.IndexedSeq(args__46353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__46354__auto__);
});})(g__46460__auto___48642))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46460__auto___48642){
return (function (args){
return cljs.core.deref.call(null,g__46460__auto___48642);
});})(g__46460__auto___48642))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__46460__auto___48642){
return (function (seq48603){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48603));
});})(g__46460__auto___48642))
;


var g__46460__auto___48646 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__46460__auto___48646){
return (function cljs$spec$gen$alpha$double(var_args){
var args__46353__auto__ = [];
var len__46346__auto___48647 = arguments.length;
var i__46347__auto___48648 = (0);
while(true){
if((i__46347__auto___48648 < len__46346__auto___48647)){
args__46353__auto__.push((arguments[i__46347__auto___48648]));

var G__48649 = (i__46347__auto___48648 + (1));
i__46347__auto___48648 = G__48649;
continue;
} else {
}
break;
}

var argseq__46354__auto__ = ((((0) < args__46353__auto__.length))?(new cljs.core.IndexedSeq(args__46353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__46354__auto__);
});})(g__46460__auto___48646))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46460__auto___48646){
return (function (args){
return cljs.core.deref.call(null,g__46460__auto___48646);
});})(g__46460__auto___48646))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__46460__auto___48646){
return (function (seq48604){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48604));
});})(g__46460__auto___48646))
;


var g__46460__auto___48650 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__46460__auto___48650){
return (function cljs$spec$gen$alpha$int(var_args){
var args__46353__auto__ = [];
var len__46346__auto___48651 = arguments.length;
var i__46347__auto___48652 = (0);
while(true){
if((i__46347__auto___48652 < len__46346__auto___48651)){
args__46353__auto__.push((arguments[i__46347__auto___48652]));

var G__48653 = (i__46347__auto___48652 + (1));
i__46347__auto___48652 = G__48653;
continue;
} else {
}
break;
}

var argseq__46354__auto__ = ((((0) < args__46353__auto__.length))?(new cljs.core.IndexedSeq(args__46353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__46354__auto__);
});})(g__46460__auto___48650))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46460__auto___48650){
return (function (args){
return cljs.core.deref.call(null,g__46460__auto___48650);
});})(g__46460__auto___48650))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__46460__auto___48650){
return (function (seq48605){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48605));
});})(g__46460__auto___48650))
;


var g__46460__auto___48654 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__46460__auto___48654){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__46353__auto__ = [];
var len__46346__auto___48655 = arguments.length;
var i__46347__auto___48656 = (0);
while(true){
if((i__46347__auto___48656 < len__46346__auto___48655)){
args__46353__auto__.push((arguments[i__46347__auto___48656]));

var G__48657 = (i__46347__auto___48656 + (1));
i__46347__auto___48656 = G__48657;
continue;
} else {
}
break;
}

var argseq__46354__auto__ = ((((0) < args__46353__auto__.length))?(new cljs.core.IndexedSeq(args__46353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__46354__auto__);
});})(g__46460__auto___48654))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46460__auto___48654){
return (function (args){
return cljs.core.deref.call(null,g__46460__auto___48654);
});})(g__46460__auto___48654))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__46460__auto___48654){
return (function (seq48606){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48606));
});})(g__46460__auto___48654))
;


var g__46460__auto___48658 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__46460__auto___48658){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__46353__auto__ = [];
var len__46346__auto___48659 = arguments.length;
var i__46347__auto___48660 = (0);
while(true){
if((i__46347__auto___48660 < len__46346__auto___48659)){
args__46353__auto__.push((arguments[i__46347__auto___48660]));

var G__48661 = (i__46347__auto___48660 + (1));
i__46347__auto___48660 = G__48661;
continue;
} else {
}
break;
}

var argseq__46354__auto__ = ((((0) < args__46353__auto__.length))?(new cljs.core.IndexedSeq(args__46353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__46354__auto__);
});})(g__46460__auto___48658))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46460__auto___48658){
return (function (args){
return cljs.core.deref.call(null,g__46460__auto___48658);
});})(g__46460__auto___48658))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__46460__auto___48658){
return (function (seq48607){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48607));
});})(g__46460__auto___48658))
;


var g__46460__auto___48662 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__46460__auto___48662){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__46353__auto__ = [];
var len__46346__auto___48663 = arguments.length;
var i__46347__auto___48664 = (0);
while(true){
if((i__46347__auto___48664 < len__46346__auto___48663)){
args__46353__auto__.push((arguments[i__46347__auto___48664]));

var G__48665 = (i__46347__auto___48664 + (1));
i__46347__auto___48664 = G__48665;
continue;
} else {
}
break;
}

var argseq__46354__auto__ = ((((0) < args__46353__auto__.length))?(new cljs.core.IndexedSeq(args__46353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__46354__auto__);
});})(g__46460__auto___48662))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46460__auto___48662){
return (function (args){
return cljs.core.deref.call(null,g__46460__auto___48662);
});})(g__46460__auto___48662))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__46460__auto___48662){
return (function (seq48608){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48608));
});})(g__46460__auto___48662))
;


var g__46460__auto___48666 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__46460__auto___48666){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__46353__auto__ = [];
var len__46346__auto___48667 = arguments.length;
var i__46347__auto___48668 = (0);
while(true){
if((i__46347__auto___48668 < len__46346__auto___48667)){
args__46353__auto__.push((arguments[i__46347__auto___48668]));

var G__48669 = (i__46347__auto___48668 + (1));
i__46347__auto___48668 = G__48669;
continue;
} else {
}
break;
}

var argseq__46354__auto__ = ((((0) < args__46353__auto__.length))?(new cljs.core.IndexedSeq(args__46353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__46354__auto__);
});})(g__46460__auto___48666))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46460__auto___48666){
return (function (args){
return cljs.core.deref.call(null,g__46460__auto___48666);
});})(g__46460__auto___48666))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__46460__auto___48666){
return (function (seq48609){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48609));
});})(g__46460__auto___48666))
;


var g__46460__auto___48670 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__46460__auto___48670){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__46353__auto__ = [];
var len__46346__auto___48671 = arguments.length;
var i__46347__auto___48672 = (0);
while(true){
if((i__46347__auto___48672 < len__46346__auto___48671)){
args__46353__auto__.push((arguments[i__46347__auto___48672]));

var G__48673 = (i__46347__auto___48672 + (1));
i__46347__auto___48672 = G__48673;
continue;
} else {
}
break;
}

var argseq__46354__auto__ = ((((0) < args__46353__auto__.length))?(new cljs.core.IndexedSeq(args__46353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__46354__auto__);
});})(g__46460__auto___48670))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46460__auto___48670){
return (function (args){
return cljs.core.deref.call(null,g__46460__auto___48670);
});})(g__46460__auto___48670))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__46460__auto___48670){
return (function (seq48610){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48610));
});})(g__46460__auto___48670))
;


var g__46460__auto___48674 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__46460__auto___48674){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__46353__auto__ = [];
var len__46346__auto___48675 = arguments.length;
var i__46347__auto___48676 = (0);
while(true){
if((i__46347__auto___48676 < len__46346__auto___48675)){
args__46353__auto__.push((arguments[i__46347__auto___48676]));

var G__48677 = (i__46347__auto___48676 + (1));
i__46347__auto___48676 = G__48677;
continue;
} else {
}
break;
}

var argseq__46354__auto__ = ((((0) < args__46353__auto__.length))?(new cljs.core.IndexedSeq(args__46353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__46354__auto__);
});})(g__46460__auto___48674))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46460__auto___48674){
return (function (args){
return cljs.core.deref.call(null,g__46460__auto___48674);
});})(g__46460__auto___48674))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__46460__auto___48674){
return (function (seq48611){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48611));
});})(g__46460__auto___48674))
;


var g__46460__auto___48678 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__46460__auto___48678){
return (function cljs$spec$gen$alpha$string(var_args){
var args__46353__auto__ = [];
var len__46346__auto___48679 = arguments.length;
var i__46347__auto___48680 = (0);
while(true){
if((i__46347__auto___48680 < len__46346__auto___48679)){
args__46353__auto__.push((arguments[i__46347__auto___48680]));

var G__48681 = (i__46347__auto___48680 + (1));
i__46347__auto___48680 = G__48681;
continue;
} else {
}
break;
}

var argseq__46354__auto__ = ((((0) < args__46353__auto__.length))?(new cljs.core.IndexedSeq(args__46353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__46354__auto__);
});})(g__46460__auto___48678))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46460__auto___48678){
return (function (args){
return cljs.core.deref.call(null,g__46460__auto___48678);
});})(g__46460__auto___48678))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__46460__auto___48678){
return (function (seq48612){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48612));
});})(g__46460__auto___48678))
;


var g__46460__auto___48682 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__46460__auto___48682){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__46353__auto__ = [];
var len__46346__auto___48683 = arguments.length;
var i__46347__auto___48684 = (0);
while(true){
if((i__46347__auto___48684 < len__46346__auto___48683)){
args__46353__auto__.push((arguments[i__46347__auto___48684]));

var G__48685 = (i__46347__auto___48684 + (1));
i__46347__auto___48684 = G__48685;
continue;
} else {
}
break;
}

var argseq__46354__auto__ = ((((0) < args__46353__auto__.length))?(new cljs.core.IndexedSeq(args__46353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__46354__auto__);
});})(g__46460__auto___48682))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46460__auto___48682){
return (function (args){
return cljs.core.deref.call(null,g__46460__auto___48682);
});})(g__46460__auto___48682))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__46460__auto___48682){
return (function (seq48613){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48613));
});})(g__46460__auto___48682))
;


var g__46460__auto___48686 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__46460__auto___48686){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__46353__auto__ = [];
var len__46346__auto___48687 = arguments.length;
var i__46347__auto___48688 = (0);
while(true){
if((i__46347__auto___48688 < len__46346__auto___48687)){
args__46353__auto__.push((arguments[i__46347__auto___48688]));

var G__48689 = (i__46347__auto___48688 + (1));
i__46347__auto___48688 = G__48689;
continue;
} else {
}
break;
}

var argseq__46354__auto__ = ((((0) < args__46353__auto__.length))?(new cljs.core.IndexedSeq(args__46353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__46354__auto__);
});})(g__46460__auto___48686))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46460__auto___48686){
return (function (args){
return cljs.core.deref.call(null,g__46460__auto___48686);
});})(g__46460__auto___48686))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__46460__auto___48686){
return (function (seq48614){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48614));
});})(g__46460__auto___48686))
;


var g__46460__auto___48690 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__46460__auto___48690){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__46353__auto__ = [];
var len__46346__auto___48691 = arguments.length;
var i__46347__auto___48692 = (0);
while(true){
if((i__46347__auto___48692 < len__46346__auto___48691)){
args__46353__auto__.push((arguments[i__46347__auto___48692]));

var G__48693 = (i__46347__auto___48692 + (1));
i__46347__auto___48692 = G__48693;
continue;
} else {
}
break;
}

var argseq__46354__auto__ = ((((0) < args__46353__auto__.length))?(new cljs.core.IndexedSeq(args__46353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__46354__auto__);
});})(g__46460__auto___48690))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46460__auto___48690){
return (function (args){
return cljs.core.deref.call(null,g__46460__auto___48690);
});})(g__46460__auto___48690))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__46460__auto___48690){
return (function (seq48615){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48615));
});})(g__46460__auto___48690))
;


var g__46460__auto___48694 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__46460__auto___48694){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__46353__auto__ = [];
var len__46346__auto___48695 = arguments.length;
var i__46347__auto___48696 = (0);
while(true){
if((i__46347__auto___48696 < len__46346__auto___48695)){
args__46353__auto__.push((arguments[i__46347__auto___48696]));

var G__48697 = (i__46347__auto___48696 + (1));
i__46347__auto___48696 = G__48697;
continue;
} else {
}
break;
}

var argseq__46354__auto__ = ((((0) < args__46353__auto__.length))?(new cljs.core.IndexedSeq(args__46353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__46354__auto__);
});})(g__46460__auto___48694))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46460__auto___48694){
return (function (args){
return cljs.core.deref.call(null,g__46460__auto___48694);
});})(g__46460__auto___48694))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__46460__auto___48694){
return (function (seq48616){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48616));
});})(g__46460__auto___48694))
;


var g__46460__auto___48698 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__46460__auto___48698){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__46353__auto__ = [];
var len__46346__auto___48699 = arguments.length;
var i__46347__auto___48700 = (0);
while(true){
if((i__46347__auto___48700 < len__46346__auto___48699)){
args__46353__auto__.push((arguments[i__46347__auto___48700]));

var G__48701 = (i__46347__auto___48700 + (1));
i__46347__auto___48700 = G__48701;
continue;
} else {
}
break;
}

var argseq__46354__auto__ = ((((0) < args__46353__auto__.length))?(new cljs.core.IndexedSeq(args__46353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__46354__auto__);
});})(g__46460__auto___48698))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46460__auto___48698){
return (function (args){
return cljs.core.deref.call(null,g__46460__auto___48698);
});})(g__46460__auto___48698))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__46460__auto___48698){
return (function (seq48617){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48617));
});})(g__46460__auto___48698))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__46353__auto__ = [];
var len__46346__auto___48704 = arguments.length;
var i__46347__auto___48705 = (0);
while(true){
if((i__46347__auto___48705 < len__46346__auto___48704)){
args__46353__auto__.push((arguments[i__46347__auto___48705]));

var G__48706 = (i__46347__auto___48705 + (1));
i__46347__auto___48705 = G__48706;
continue;
} else {
}
break;
}

var argseq__46354__auto__ = ((((0) < args__46353__auto__.length))?(new cljs.core.IndexedSeq(args__46353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__46354__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__48702_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__48702_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq48703){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48703));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__48707_SHARP_){
return (new Date(p1__48707_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map