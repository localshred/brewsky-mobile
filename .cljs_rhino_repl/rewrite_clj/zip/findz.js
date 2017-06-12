// Compiled by ClojureScript 1.9.542 {}
goog.provide('rewrite_clj.zip.findz');
goog.require('cljs.core');
goog.require('rewrite_clj.zip.base');
goog.require('rewrite_clj.zip.move');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.zip.whitespace');
goog.require('clojure.zip');
rewrite_clj.zip.findz.tag_predicate = (function rewrite_clj$zip$findz$tag_predicate(var_args){
var args__46353__auto__ = [];
var len__46346__auto___54693 = arguments.length;
var i__46347__auto___54694 = (0);
while(true){
if((i__46347__auto___54694 < len__46346__auto___54693)){
args__46353__auto__.push((arguments[i__46347__auto___54694]));

var G__54695 = (i__46347__auto___54694 + (1));
i__46347__auto___54694 = G__54695;
continue;
} else {
}
break;
}

var argseq__46354__auto__ = ((((1) < args__46353__auto__.length))?(new cljs.core.IndexedSeq(args__46353__auto__.slice((1)),(0),null)):null);
return rewrite_clj.zip.findz.tag_predicate.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__46354__auto__);
});

rewrite_clj.zip.findz.tag_predicate.cljs$core$IFn$_invoke$arity$variadic = (function (t,p__54689){
var vec__54690 = p__54689;
var additional = cljs.core.nth.call(null,vec__54690,(0),null);
if(cljs.core.truth_(additional)){
return ((function (vec__54690,additional){
return (function (node){
var and__45113__auto__ = cljs.core._EQ_.call(null,rewrite_clj.zip.base.tag.call(null,node),t);
if(and__45113__auto__){
return additional.call(null,node);
} else {
return and__45113__auto__;
}
});
;})(vec__54690,additional))
} else {
return ((function (vec__54690,additional){
return (function (p1__54686_SHARP_){
return cljs.core._EQ_.call(null,rewrite_clj.zip.base.tag.call(null,p1__54686_SHARP_),t);
});
;})(vec__54690,additional))
}
});

rewrite_clj.zip.findz.tag_predicate.cljs$lang$maxFixedArity = (1);

rewrite_clj.zip.findz.tag_predicate.cljs$lang$applyTo = (function (seq54687){
var G__54688 = cljs.core.first.call(null,seq54687);
var seq54687__$1 = cljs.core.next.call(null,seq54687);
return rewrite_clj.zip.findz.tag_predicate.cljs$core$IFn$_invoke$arity$variadic(G__54688,seq54687__$1);
});

rewrite_clj.zip.findz.in_range_QMARK_ = (function rewrite_clj$zip$findz$in_range_QMARK_(p__54696,p__54697){
var map__54702 = p__54696;
var map__54702__$1 = ((((!((map__54702 == null)))?((((map__54702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54702.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54702):map__54702);
var row = cljs.core.get.call(null,map__54702__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.call(null,map__54702__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var end_row = cljs.core.get.call(null,map__54702__$1,new cljs.core.Keyword(null,"end-row","end-row",-545103581));
var end_col = cljs.core.get.call(null,map__54702__$1,new cljs.core.Keyword(null,"end-col","end-col",-724155879));
var map__54703 = p__54697;
var map__54703__$1 = ((((!((map__54703 == null)))?((((map__54703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54703.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54703):map__54703);
var r = cljs.core.get.call(null,map__54703__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var c = cljs.core.get.call(null,map__54703__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
if(((row > r)) || ((r > end_row))){
return false;
} else {
if(((r > row)) && ((end_row > r))){
return true;
} else {
if(((c >= col)) && ((end_col > c))){
return true;
} else {
if((cljs.core._EQ_.call(null,r,row)) && ((end_row > r)) && ((c >= col))){
return true;
} else {
if((cljs.core._EQ_.call(null,r,end_row)) && ((end_row > r)) && ((col >= c))){
return true;
} else {
return false;

}
}
}
}
}
});
/**
 * Find node satisfying the given predicate by repeatedly
 * applying the given movement function to the initial zipper
 * location.
 */
rewrite_clj.zip.findz.find = (function rewrite_clj$zip$findz$find(var_args){
var args54706 = [];
var len__46346__auto___54709 = arguments.length;
var i__46347__auto___54710 = (0);
while(true){
if((i__46347__auto___54710 < len__46346__auto___54709)){
args54706.push((arguments[i__46347__auto___54710]));

var G__54711 = (i__46347__auto___54710 + (1));
i__46347__auto___54710 = G__54711;
continue;
} else {
}
break;
}

var G__54708 = args54706.length;
switch (G__54708) {
case 2:
return rewrite_clj.zip.findz.find.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_clj.zip.findz.find.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args54706.length)].join('')));

}
});

rewrite_clj.zip.findz.find.cljs$core$IFn$_invoke$arity$2 = (function (zloc,p_QMARK_){
return rewrite_clj.zip.findz.find.call(null,zloc,rewrite_clj.zip.move.right,p_QMARK_);
});

rewrite_clj.zip.findz.find.cljs$core$IFn$_invoke$arity$3 = (function (zloc,f,p_QMARK_){
return cljs.core.first.call(null,cljs.core.drop_while.call(null,cljs.core.complement.call(null,p_QMARK_),cljs.core.take_while.call(null,cljs.core.complement.call(null,rewrite_clj.zip.move.end_QMARK_),cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,f,zloc)))));
});

rewrite_clj.zip.findz.find.cljs$lang$maxFixedArity = 3;

/**
 * Find last node (if more than one node) that is in range of pos and
 *   satisfying the given predicate depth first from initial zipper
 *   location.
 */
rewrite_clj.zip.findz.find_last_by_pos = (function rewrite_clj$zip$findz$find_last_by_pos(var_args){
var args54714 = [];
var len__46346__auto___54717 = arguments.length;
var i__46347__auto___54718 = (0);
while(true){
if((i__46347__auto___54718 < len__46346__auto___54717)){
args54714.push((arguments[i__46347__auto___54718]));

var G__54719 = (i__46347__auto___54718 + (1));
i__46347__auto___54718 = G__54719;
continue;
} else {
}
break;
}

var G__54716 = args54714.length;
switch (G__54716) {
case 2:
return rewrite_clj.zip.findz.find_last_by_pos.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_clj.zip.findz.find_last_by_pos.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args54714.length)].join('')));

}
});

rewrite_clj.zip.findz.find_last_by_pos.cljs$core$IFn$_invoke$arity$2 = (function (zloc,pos){
return rewrite_clj.zip.findz.find_last_by_pos.call(null,zloc,pos,cljs.core.constantly.call(null,true));
});

rewrite_clj.zip.findz.find_last_by_pos.cljs$core$IFn$_invoke$arity$3 = (function (zloc,pos,p_QMARK_){
return cljs.core.last.call(null,cljs.core.filter.call(null,(function (p1__54713_SHARP_){
var and__45113__auto__ = p_QMARK_.call(null,p1__54713_SHARP_);
if(cljs.core.truth_(and__45113__auto__)){
return rewrite_clj.zip.findz.in_range_QMARK_.call(null,cljs.core.meta.call(null,clojure.zip.node.call(null,p1__54713_SHARP_)),pos);
} else {
return and__45113__auto__;
}
}),cljs.core.take_while.call(null,cljs.core.complement.call(null,rewrite_clj.zip.move.end_QMARK_),cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,clojure.zip.next,zloc)))));
});

rewrite_clj.zip.findz.find_last_by_pos.cljs$lang$maxFixedArity = 3;

/**
 * Find node satisfying the given predicate by traversing
 * the zipper in a depth-first way.
 */
rewrite_clj.zip.findz.find_depth_first = (function rewrite_clj$zip$findz$find_depth_first(zloc,p_QMARK_){
return rewrite_clj.zip.findz.find.call(null,zloc,rewrite_clj.zip.move.next,p_QMARK_);
});
/**
 * Find node other than the current zipper location matching
 * the given predicate by applying the given movement function
 * to the initial zipper location.
 */
rewrite_clj.zip.findz.find_next = (function rewrite_clj$zip$findz$find_next(var_args){
var args54721 = [];
var len__46346__auto___54725 = arguments.length;
var i__46347__auto___54726 = (0);
while(true){
if((i__46347__auto___54726 < len__46346__auto___54725)){
args54721.push((arguments[i__46347__auto___54726]));

var G__54727 = (i__46347__auto___54726 + (1));
i__46347__auto___54726 = G__54727;
continue;
} else {
}
break;
}

var G__54723 = args54721.length;
switch (G__54723) {
case 2:
return rewrite_clj.zip.findz.find_next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_clj.zip.findz.find_next.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args54721.length)].join('')));

}
});

rewrite_clj.zip.findz.find_next.cljs$core$IFn$_invoke$arity$2 = (function (zloc,p_QMARK_){
return rewrite_clj.zip.findz.find_next.call(null,zloc,rewrite_clj.zip.move.right,p_QMARK_);
});

rewrite_clj.zip.findz.find_next.cljs$core$IFn$_invoke$arity$3 = (function (zloc,f,p_QMARK_){
var G__54724 = zloc;
var G__54724__$1 = (((G__54724 == null))?null:f.call(null,G__54724));
if((G__54724__$1 == null)){
return null;
} else {
return rewrite_clj.zip.findz.find.call(null,G__54724__$1,f,p_QMARK_);
}
});

rewrite_clj.zip.findz.find_next.cljs$lang$maxFixedArity = 3;

/**
 * Find node other than the current zipper location matching
 * the given predicate by traversing the zipper in a
 * depth-first way.
 */
rewrite_clj.zip.findz.find_next_depth_first = (function rewrite_clj$zip$findz$find_next_depth_first(zloc,p_QMARK_){
return rewrite_clj.zip.findz.find_next.call(null,zloc,rewrite_clj.zip.move.next,p_QMARK_);
});
/**
 * Find node with the given tag by repeatedly applying the given
 * movement function to the initial zipper location.
 */
rewrite_clj.zip.findz.find_tag = (function rewrite_clj$zip$findz$find_tag(var_args){
var args54730 = [];
var len__46346__auto___54733 = arguments.length;
var i__46347__auto___54734 = (0);
while(true){
if((i__46347__auto___54734 < len__46346__auto___54733)){
args54730.push((arguments[i__46347__auto___54734]));

var G__54735 = (i__46347__auto___54734 + (1));
i__46347__auto___54734 = G__54735;
continue;
} else {
}
break;
}

var G__54732 = args54730.length;
switch (G__54732) {
case 2:
return rewrite_clj.zip.findz.find_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_clj.zip.findz.find_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args54730.length)].join('')));

}
});

rewrite_clj.zip.findz.find_tag.cljs$core$IFn$_invoke$arity$2 = (function (zloc,t){
return rewrite_clj.zip.findz.find_tag.call(null,zloc,rewrite_clj.zip.move.right,t);
});

rewrite_clj.zip.findz.find_tag.cljs$core$IFn$_invoke$arity$3 = (function (zloc,f,t){
return rewrite_clj.zip.findz.find.call(null,zloc,f,(function (p1__54729_SHARP_){
return cljs.core._EQ_.call(null,rewrite_clj.zip.base.tag.call(null,p1__54729_SHARP_),t);
}));
});

rewrite_clj.zip.findz.find_tag.cljs$lang$maxFixedArity = 3;

/**
 * Find node other than the current zipper location with the
 * given tag by repeatedly applying the given movement function to
 * the initial zipper location.
 */
rewrite_clj.zip.findz.find_next_tag = (function rewrite_clj$zip$findz$find_next_tag(var_args){
var args54737 = [];
var len__46346__auto___54740 = arguments.length;
var i__46347__auto___54741 = (0);
while(true){
if((i__46347__auto___54741 < len__46346__auto___54740)){
args54737.push((arguments[i__46347__auto___54741]));

var G__54742 = (i__46347__auto___54741 + (1));
i__46347__auto___54741 = G__54742;
continue;
} else {
}
break;
}

var G__54739 = args54737.length;
switch (G__54739) {
case 2:
return rewrite_clj.zip.findz.find_next_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_clj.zip.findz.find_next_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args54737.length)].join('')));

}
});

rewrite_clj.zip.findz.find_next_tag.cljs$core$IFn$_invoke$arity$2 = (function (zloc,t){
return rewrite_clj.zip.findz.find_next_tag.call(null,zloc,rewrite_clj.zip.move.right,t);
});

rewrite_clj.zip.findz.find_next_tag.cljs$core$IFn$_invoke$arity$3 = (function (zloc,f,t){
return rewrite_clj.zip.findz.find_next.call(null,zloc,f,rewrite_clj.zip.findz.tag_predicate.call(null,t));
});

rewrite_clj.zip.findz.find_next_tag.cljs$lang$maxFixedArity = 3;

/**
 * Find node with the given tag and pos depth-first from initial zipper location.
 */
rewrite_clj.zip.findz.find_tag_by_pos = (function rewrite_clj$zip$findz$find_tag_by_pos(zloc,pos,t){
return rewrite_clj.zip.findz.find_last_by_pos.call(null,zloc,pos,(function (p1__54744_SHARP_){
return cljs.core._EQ_.call(null,rewrite_clj.zip.base.tag.call(null,p1__54744_SHARP_),t);
}));
});
/**
 * Find token node matching the given predicate by applying the
 * given movement function to the initial zipper location, defaulting
 * to `right`.
 */
rewrite_clj.zip.findz.find_token = (function rewrite_clj$zip$findz$find_token(var_args){
var args54745 = [];
var len__46346__auto___54748 = arguments.length;
var i__46347__auto___54749 = (0);
while(true){
if((i__46347__auto___54749 < len__46346__auto___54748)){
args54745.push((arguments[i__46347__auto___54749]));

var G__54750 = (i__46347__auto___54749 + (1));
i__46347__auto___54749 = G__54750;
continue;
} else {
}
break;
}

var G__54747 = args54745.length;
switch (G__54747) {
case 2:
return rewrite_clj.zip.findz.find_token.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_clj.zip.findz.find_token.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args54745.length)].join('')));

}
});

rewrite_clj.zip.findz.find_token.cljs$core$IFn$_invoke$arity$2 = (function (zloc,p_QMARK_){
return rewrite_clj.zip.findz.find_token.call(null,zloc,rewrite_clj.zip.move.right,p_QMARK_);
});

rewrite_clj.zip.findz.find_token.cljs$core$IFn$_invoke$arity$3 = (function (zloc,f,p_QMARK_){
return rewrite_clj.zip.findz.find.call(null,zloc,f,rewrite_clj.zip.findz.tag_predicate.call(null,new cljs.core.Keyword(null,"token","token",-1211463215),p_QMARK_));
});

rewrite_clj.zip.findz.find_token.cljs$lang$maxFixedArity = 3;

/**
 * Find next token node matching the given predicate by applying the
 * given movement function to the initial zipper location, defaulting
 * to `right`.
 */
rewrite_clj.zip.findz.find_next_token = (function rewrite_clj$zip$findz$find_next_token(var_args){
var args54752 = [];
var len__46346__auto___54755 = arguments.length;
var i__46347__auto___54756 = (0);
while(true){
if((i__46347__auto___54756 < len__46346__auto___54755)){
args54752.push((arguments[i__46347__auto___54756]));

var G__54757 = (i__46347__auto___54756 + (1));
i__46347__auto___54756 = G__54757;
continue;
} else {
}
break;
}

var G__54754 = args54752.length;
switch (G__54754) {
case 2:
return rewrite_clj.zip.findz.find_next_token.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_clj.zip.findz.find_next_token.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args54752.length)].join('')));

}
});

rewrite_clj.zip.findz.find_next_token.cljs$core$IFn$_invoke$arity$2 = (function (zloc,p_QMARK_){
return rewrite_clj.zip.findz.find_next_token.call(null,zloc,rewrite_clj.zip.move.right,p_QMARK_);
});

rewrite_clj.zip.findz.find_next_token.cljs$core$IFn$_invoke$arity$3 = (function (zloc,f,p_QMARK_){
return rewrite_clj.zip.findz.find_token.call(null,f.call(null,zloc),f,p_QMARK_);
});

rewrite_clj.zip.findz.find_next_token.cljs$lang$maxFixedArity = 3;

/**
 * Find token node whose value matches the given one by applying the
 * given movement function to the initial zipper location, defaulting
 * to `right`.
 */
rewrite_clj.zip.findz.find_value = (function rewrite_clj$zip$findz$find_value(var_args){
var args54760 = [];
var len__46346__auto___54763 = arguments.length;
var i__46347__auto___54764 = (0);
while(true){
if((i__46347__auto___54764 < len__46346__auto___54763)){
args54760.push((arguments[i__46347__auto___54764]));

var G__54765 = (i__46347__auto___54764 + (1));
i__46347__auto___54764 = G__54765;
continue;
} else {
}
break;
}

var G__54762 = args54760.length;
switch (G__54762) {
case 2:
return rewrite_clj.zip.findz.find_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_clj.zip.findz.find_value.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args54760.length)].join('')));

}
});

rewrite_clj.zip.findz.find_value.cljs$core$IFn$_invoke$arity$2 = (function (zloc,v){
return rewrite_clj.zip.findz.find_value.call(null,zloc,rewrite_clj.zip.move.right,v);
});

rewrite_clj.zip.findz.find_value.cljs$core$IFn$_invoke$arity$3 = (function (zloc,f,v){
var p_QMARK_ = ((cljs.core.set_QMARK_.call(null,v))?cljs.core.comp.call(null,v,rewrite_clj.zip.base.sexpr):(function (p1__54759_SHARP_){
return cljs.core._EQ_.call(null,rewrite_clj.zip.base.sexpr.call(null,p1__54759_SHARP_),v);
}));
return rewrite_clj.zip.findz.find_token.call(null,zloc,f,p_QMARK_);
});

rewrite_clj.zip.findz.find_value.cljs$lang$maxFixedArity = 3;

/**
 * Find next token node whose value matches the given one by applying the
 * given movement function to the initial zipper location, defaulting
 * to `right`.
 */
rewrite_clj.zip.findz.find_next_value = (function rewrite_clj$zip$findz$find_next_value(var_args){
var args54767 = [];
var len__46346__auto___54770 = arguments.length;
var i__46347__auto___54771 = (0);
while(true){
if((i__46347__auto___54771 < len__46346__auto___54770)){
args54767.push((arguments[i__46347__auto___54771]));

var G__54772 = (i__46347__auto___54771 + (1));
i__46347__auto___54771 = G__54772;
continue;
} else {
}
break;
}

var G__54769 = args54767.length;
switch (G__54769) {
case 2:
return rewrite_clj.zip.findz.find_next_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_clj.zip.findz.find_next_value.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args54767.length)].join('')));

}
});

rewrite_clj.zip.findz.find_next_value.cljs$core$IFn$_invoke$arity$2 = (function (zloc,v){
return rewrite_clj.zip.findz.find_next_value.call(null,zloc,rewrite_clj.zip.move.right,v);
});

rewrite_clj.zip.findz.find_next_value.cljs$core$IFn$_invoke$arity$3 = (function (zloc,f,v){
return rewrite_clj.zip.findz.find_value.call(null,f.call(null,zloc),f,v);
});

rewrite_clj.zip.findz.find_next_value.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=findz.js.map