// Compiled by ClojureScript 1.9.542 {}
goog.provide('rewrite_clj.zip.whitespace');
goog.require('cljs.core');
goog.require('rewrite_clj.node');
goog.require('clojure.zip');
rewrite_clj.zip.whitespace.whitespace_QMARK_ = (function rewrite_clj$zip$whitespace$whitespace_QMARK_(zloc){
var G__54537 = zloc;
var G__54537__$1 = (((G__54537 == null))?null:clojure.zip.node.call(null,G__54537));
if((G__54537__$1 == null)){
return null;
} else {
return rewrite_clj.node.whitespace_QMARK_.call(null,G__54537__$1);
}
});
rewrite_clj.zip.whitespace.linebreak_QMARK_ = (function rewrite_clj$zip$whitespace$linebreak_QMARK_(zloc){
var G__54539 = zloc;
var G__54539__$1 = (((G__54539 == null))?null:clojure.zip.node.call(null,G__54539));
if((G__54539__$1 == null)){
return null;
} else {
return rewrite_clj.node.linebreak_QMARK_.call(null,G__54539__$1);
}
});
rewrite_clj.zip.whitespace.comment_QMARK_ = (function rewrite_clj$zip$whitespace$comment_QMARK_(zloc){
var G__54541 = zloc;
var G__54541__$1 = (((G__54541 == null))?null:clojure.zip.node.call(null,G__54541));
if((G__54541__$1 == null)){
return null;
} else {
return rewrite_clj.node.comment_QMARK_.call(null,G__54541__$1);
}
});
rewrite_clj.zip.whitespace.whitespace_not_linebreak_QMARK_ = (function rewrite_clj$zip$whitespace$whitespace_not_linebreak_QMARK_(zloc){
var and__45113__auto__ = rewrite_clj.zip.whitespace.whitespace_QMARK_.call(null,zloc);
if(cljs.core.truth_(and__45113__auto__)){
return cljs.core.not.call(null,rewrite_clj.zip.whitespace.linebreak_QMARK_.call(null,zloc));
} else {
return and__45113__auto__;
}
});
rewrite_clj.zip.whitespace.whitespace_or_comment_QMARK_ = (function rewrite_clj$zip$whitespace$whitespace_or_comment_QMARK_(zloc){
var G__54543 = zloc;
var G__54543__$1 = (((G__54543 == null))?null:clojure.zip.node.call(null,G__54543));
if((G__54543__$1 == null)){
return null;
} else {
return rewrite_clj.node.whitespace_or_comment_QMARK_.call(null,G__54543__$1);
}
});
/**
 * Perform the given movement while the given predicate returns true.
 */
rewrite_clj.zip.whitespace.skip = (function rewrite_clj$zip$whitespace$skip(f,p_QMARK_,zloc){
return cljs.core.first.call(null,cljs.core.drop_while.call(null,p_QMARK_,cljs.core.take_while.call(null,cljs.core.complement.call(null,clojure.zip.end_QMARK_),cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,f,zloc)))));
});
/**
 * Perform the given movement (default: `z/right`) until a non-whitespace/
 * non-comment node is encountered.
 */
rewrite_clj.zip.whitespace.skip_whitespace = (function rewrite_clj$zip$whitespace$skip_whitespace(var_args){
var args54544 = [];
var len__46346__auto___54547 = arguments.length;
var i__46347__auto___54548 = (0);
while(true){
if((i__46347__auto___54548 < len__46346__auto___54547)){
args54544.push((arguments[i__46347__auto___54548]));

var G__54549 = (i__46347__auto___54548 + (1));
i__46347__auto___54548 = G__54549;
continue;
} else {
}
break;
}

var G__54546 = args54544.length;
switch (G__54546) {
case 1:
return rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args54544.length)].join('')));

}
});

rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_clj.zip.whitespace.skip_whitespace.call(null,clojure.zip.right,zloc);
});

rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$2 = (function (f,zloc){
return rewrite_clj.zip.whitespace.skip.call(null,f,rewrite_clj.zip.whitespace.whitespace_or_comment_QMARK_,zloc);
});

rewrite_clj.zip.whitespace.skip_whitespace.cljs$lang$maxFixedArity = 2;

/**
 * Move left until a non-whitespace/non-comment node is encountered.
 */
rewrite_clj.zip.whitespace.skip_whitespace_left = (function rewrite_clj$zip$whitespace$skip_whitespace_left(zloc){
return rewrite_clj.zip.whitespace.skip_whitespace.call(null,clojure.zip.left,zloc);
});
/**
 * Prepend a whitespace node representing the given number of spaces (default: 1).
 */
rewrite_clj.zip.whitespace.prepend_space = (function rewrite_clj$zip$whitespace$prepend_space(var_args){
var args54551 = [];
var len__46346__auto___54554 = arguments.length;
var i__46347__auto___54555 = (0);
while(true){
if((i__46347__auto___54555 < len__46346__auto___54554)){
args54551.push((arguments[i__46347__auto___54555]));

var G__54556 = (i__46347__auto___54555 + (1));
i__46347__auto___54555 = G__54556;
continue;
} else {
}
break;
}

var G__54553 = args54551.length;
switch (G__54553) {
case 1:
return rewrite_clj.zip.whitespace.prepend_space.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.zip.whitespace.prepend_space.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args54551.length)].join('')));

}
});

rewrite_clj.zip.whitespace.prepend_space.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_clj.zip.whitespace.prepend_space.call(null,zloc,(1));
});

rewrite_clj.zip.whitespace.prepend_space.cljs$core$IFn$_invoke$arity$2 = (function (zloc,n){
return clojure.zip.insert_left.call(null,zloc,rewrite_clj.node.spaces.call(null,n));
});

rewrite_clj.zip.whitespace.prepend_space.cljs$lang$maxFixedArity = 2;

/**
 * Append a whitespace node representing the given number of spaces (default: 1).
 */
rewrite_clj.zip.whitespace.append_space = (function rewrite_clj$zip$whitespace$append_space(var_args){
var args54558 = [];
var len__46346__auto___54561 = arguments.length;
var i__46347__auto___54562 = (0);
while(true){
if((i__46347__auto___54562 < len__46346__auto___54561)){
args54558.push((arguments[i__46347__auto___54562]));

var G__54563 = (i__46347__auto___54562 + (1));
i__46347__auto___54562 = G__54563;
continue;
} else {
}
break;
}

var G__54560 = args54558.length;
switch (G__54560) {
case 1:
return rewrite_clj.zip.whitespace.append_space.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.zip.whitespace.append_space.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args54558.length)].join('')));

}
});

rewrite_clj.zip.whitespace.append_space.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_clj.zip.whitespace.append_space.call(null,zloc,(1));
});

rewrite_clj.zip.whitespace.append_space.cljs$core$IFn$_invoke$arity$2 = (function (zloc,n){
return clojure.zip.insert_right.call(null,zloc,rewrite_clj.node.spaces.call(null,n));
});

rewrite_clj.zip.whitespace.append_space.cljs$lang$maxFixedArity = 2;

/**
 * Prepend a newlines node representing the given number of newlines (default: 1).
 */
rewrite_clj.zip.whitespace.prepend_newline = (function rewrite_clj$zip$whitespace$prepend_newline(var_args){
var args54565 = [];
var len__46346__auto___54568 = arguments.length;
var i__46347__auto___54569 = (0);
while(true){
if((i__46347__auto___54569 < len__46346__auto___54568)){
args54565.push((arguments[i__46347__auto___54569]));

var G__54570 = (i__46347__auto___54569 + (1));
i__46347__auto___54569 = G__54570;
continue;
} else {
}
break;
}

var G__54567 = args54565.length;
switch (G__54567) {
case 1:
return rewrite_clj.zip.whitespace.prepend_newline.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.zip.whitespace.prepend_newline.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args54565.length)].join('')));

}
});

rewrite_clj.zip.whitespace.prepend_newline.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_clj.zip.whitespace.prepend_newline.call(null,zloc,(1));
});

rewrite_clj.zip.whitespace.prepend_newline.cljs$core$IFn$_invoke$arity$2 = (function (zloc,n){
return clojure.zip.insert_left.call(null,zloc,rewrite_clj.node.newlines.call(null,n));
});

rewrite_clj.zip.whitespace.prepend_newline.cljs$lang$maxFixedArity = 2;

/**
 * Append a newline node representing the given number of newlines (default: 1).
 */
rewrite_clj.zip.whitespace.append_newline = (function rewrite_clj$zip$whitespace$append_newline(var_args){
var args54572 = [];
var len__46346__auto___54575 = arguments.length;
var i__46347__auto___54576 = (0);
while(true){
if((i__46347__auto___54576 < len__46346__auto___54575)){
args54572.push((arguments[i__46347__auto___54576]));

var G__54577 = (i__46347__auto___54576 + (1));
i__46347__auto___54576 = G__54577;
continue;
} else {
}
break;
}

var G__54574 = args54572.length;
switch (G__54574) {
case 1:
return rewrite_clj.zip.whitespace.append_newline.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.zip.whitespace.append_newline.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args54572.length)].join('')));

}
});

rewrite_clj.zip.whitespace.append_newline.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_clj.zip.whitespace.append_newline.call(null,zloc,(1));
});

rewrite_clj.zip.whitespace.append_newline.cljs$core$IFn$_invoke$arity$2 = (function (zloc,n){
return clojure.zip.insert_right.call(null,zloc,rewrite_clj.node.newlines.call(null,n));
});

rewrite_clj.zip.whitespace.append_newline.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=whitespace.js.map