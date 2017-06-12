// Compiled by ClojureScript 1.9.542 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.call(null,re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__50328 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__50329 = null;
var count__50330 = (0);
var i__50331 = (0);
while(true){
if((i__50331 < count__50330)){
var vec__50332 = cljs.core._nth.call(null,chunk__50329,i__50331);
var effect_k = cljs.core.nth.call(null,vec__50332,(0),null);
var value = cljs.core.nth.call(null,vec__50332,(1),null);
var temp__6736__auto___50338 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__6736__auto___50338)){
var effect_fn_50339 = temp__6736__auto___50338;
effect_fn_50339.call(null,value);
} else {
}

var G__50340 = seq__50328;
var G__50341 = chunk__50329;
var G__50342 = count__50330;
var G__50343 = (i__50331 + (1));
seq__50328 = G__50340;
chunk__50329 = G__50341;
count__50330 = G__50342;
i__50331 = G__50343;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__50328);
if(temp__6738__auto__){
var seq__50328__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50328__$1)){
var c__46036__auto__ = cljs.core.chunk_first.call(null,seq__50328__$1);
var G__50344 = cljs.core.chunk_rest.call(null,seq__50328__$1);
var G__50345 = c__46036__auto__;
var G__50346 = cljs.core.count.call(null,c__46036__auto__);
var G__50347 = (0);
seq__50328 = G__50344;
chunk__50329 = G__50345;
count__50330 = G__50346;
i__50331 = G__50347;
continue;
} else {
var vec__50335 = cljs.core.first.call(null,seq__50328__$1);
var effect_k = cljs.core.nth.call(null,vec__50335,(0),null);
var value = cljs.core.nth.call(null,vec__50335,(1),null);
var temp__6736__auto___50348 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__6736__auto___50348)){
var effect_fn_50349 = temp__6736__auto___50348;
effect_fn_50349.call(null,value);
} else {
}

var G__50350 = cljs.core.next.call(null,seq__50328__$1);
var G__50351 = null;
var G__50352 = (0);
var G__50353 = (0);
seq__50328 = G__50350;
chunk__50329 = G__50351;
count__50330 = G__50352;
i__50331 = G__50353;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__50354 = cljs.core.seq.call(null,value);
var chunk__50355 = null;
var count__50356 = (0);
var i__50357 = (0);
while(true){
if((i__50357 < count__50356)){
var map__50358 = cljs.core._nth.call(null,chunk__50355,i__50357);
var map__50358__$1 = ((((!((map__50358 == null)))?((((map__50358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50358.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50358):map__50358);
var effect = map__50358__$1;
var ms = cljs.core.get.call(null,map__50358__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__50358__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__50354,chunk__50355,count__50356,i__50357,map__50358,map__50358__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__50354,chunk__50355,count__50356,i__50357,map__50358,map__50358__$1,effect,ms,dispatch))
,ms);
}

var G__50362 = seq__50354;
var G__50363 = chunk__50355;
var G__50364 = count__50356;
var G__50365 = (i__50357 + (1));
seq__50354 = G__50362;
chunk__50355 = G__50363;
count__50356 = G__50364;
i__50357 = G__50365;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__50354);
if(temp__6738__auto__){
var seq__50354__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50354__$1)){
var c__46036__auto__ = cljs.core.chunk_first.call(null,seq__50354__$1);
var G__50366 = cljs.core.chunk_rest.call(null,seq__50354__$1);
var G__50367 = c__46036__auto__;
var G__50368 = cljs.core.count.call(null,c__46036__auto__);
var G__50369 = (0);
seq__50354 = G__50366;
chunk__50355 = G__50367;
count__50356 = G__50368;
i__50357 = G__50369;
continue;
} else {
var map__50360 = cljs.core.first.call(null,seq__50354__$1);
var map__50360__$1 = ((((!((map__50360 == null)))?((((map__50360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50360.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50360):map__50360);
var effect = map__50360__$1;
var ms = cljs.core.get.call(null,map__50360__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__50360__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__50354,chunk__50355,count__50356,i__50357,map__50360,map__50360__$1,effect,ms,dispatch,seq__50354__$1,temp__6738__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__50354,chunk__50355,count__50356,i__50357,map__50360,map__50360__$1,effect,ms,dispatch,seq__50354__$1,temp__6738__auto__))
,ms);
}

var G__50370 = cljs.core.next.call(null,seq__50354__$1);
var G__50371 = null;
var G__50372 = (0);
var G__50373 = (0);
seq__50354 = G__50370;
chunk__50355 = G__50371;
count__50356 = G__50372;
i__50357 = G__50373;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
}

var seq__50374 = cljs.core.seq.call(null,value);
var chunk__50375 = null;
var count__50376 = (0);
var i__50377 = (0);
while(true){
if((i__50377 < count__50376)){
var event = cljs.core._nth.call(null,chunk__50375,i__50377);
re_frame.router.dispatch.call(null,event);

var G__50378 = seq__50374;
var G__50379 = chunk__50375;
var G__50380 = count__50376;
var G__50381 = (i__50377 + (1));
seq__50374 = G__50378;
chunk__50375 = G__50379;
count__50376 = G__50380;
i__50377 = G__50381;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__50374);
if(temp__6738__auto__){
var seq__50374__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50374__$1)){
var c__46036__auto__ = cljs.core.chunk_first.call(null,seq__50374__$1);
var G__50382 = cljs.core.chunk_rest.call(null,seq__50374__$1);
var G__50383 = c__46036__auto__;
var G__50384 = cljs.core.count.call(null,c__46036__auto__);
var G__50385 = (0);
seq__50374 = G__50382;
chunk__50375 = G__50383;
count__50376 = G__50384;
i__50377 = G__50385;
continue;
} else {
var event = cljs.core.first.call(null,seq__50374__$1);
re_frame.router.dispatch.call(null,event);

var G__50386 = cljs.core.next.call(null,seq__50374__$1);
var G__50387 = null;
var G__50388 = (0);
var G__50389 = (0);
seq__50374 = G__50386;
chunk__50375 = G__50387;
count__50376 = G__50388;
i__50377 = G__50389;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__50390 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__50391 = null;
var count__50392 = (0);
var i__50393 = (0);
while(true){
if((i__50393 < count__50392)){
var event = cljs.core._nth.call(null,chunk__50391,i__50393);
clear_event.call(null,event);

var G__50394 = seq__50390;
var G__50395 = chunk__50391;
var G__50396 = count__50392;
var G__50397 = (i__50393 + (1));
seq__50390 = G__50394;
chunk__50391 = G__50395;
count__50392 = G__50396;
i__50393 = G__50397;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__50390);
if(temp__6738__auto__){
var seq__50390__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50390__$1)){
var c__46036__auto__ = cljs.core.chunk_first.call(null,seq__50390__$1);
var G__50398 = cljs.core.chunk_rest.call(null,seq__50390__$1);
var G__50399 = c__46036__auto__;
var G__50400 = cljs.core.count.call(null,c__46036__auto__);
var G__50401 = (0);
seq__50390 = G__50398;
chunk__50391 = G__50399;
count__50392 = G__50400;
i__50393 = G__50401;
continue;
} else {
var event = cljs.core.first.call(null,seq__50390__$1);
clear_event.call(null,event);

var G__50402 = cljs.core.next.call(null,seq__50390__$1);
var G__50403 = null;
var G__50404 = (0);
var G__50405 = (0);
seq__50390 = G__50402;
chunk__50391 = G__50403;
count__50392 = G__50404;
i__50393 = G__50405;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
}));

//# sourceMappingURL=fx.js.map