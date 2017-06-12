// Compiled by ClojureScript 1.9.542 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__47506){
var map__47531 = p__47506;
var map__47531__$1 = ((((!((map__47531 == null)))?((((map__47531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47531.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47531):map__47531);
var m = map__47531__$1;
var n = cljs.core.get.call(null,map__47531__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__47531__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__6738__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6738__auto__)){
var ns = temp__6738__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__47533_47555 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__47534_47556 = null;
var count__47535_47557 = (0);
var i__47536_47558 = (0);
while(true){
if((i__47536_47558 < count__47535_47557)){
var f_47559 = cljs.core._nth.call(null,chunk__47534_47556,i__47536_47558);
cljs.core.println.call(null,"  ",f_47559);

var G__47560 = seq__47533_47555;
var G__47561 = chunk__47534_47556;
var G__47562 = count__47535_47557;
var G__47563 = (i__47536_47558 + (1));
seq__47533_47555 = G__47560;
chunk__47534_47556 = G__47561;
count__47535_47557 = G__47562;
i__47536_47558 = G__47563;
continue;
} else {
var temp__6738__auto___47564 = cljs.core.seq.call(null,seq__47533_47555);
if(temp__6738__auto___47564){
var seq__47533_47565__$1 = temp__6738__auto___47564;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47533_47565__$1)){
var c__46036__auto___47566 = cljs.core.chunk_first.call(null,seq__47533_47565__$1);
var G__47567 = cljs.core.chunk_rest.call(null,seq__47533_47565__$1);
var G__47568 = c__46036__auto___47566;
var G__47569 = cljs.core.count.call(null,c__46036__auto___47566);
var G__47570 = (0);
seq__47533_47555 = G__47567;
chunk__47534_47556 = G__47568;
count__47535_47557 = G__47569;
i__47536_47558 = G__47570;
continue;
} else {
var f_47571 = cljs.core.first.call(null,seq__47533_47565__$1);
cljs.core.println.call(null,"  ",f_47571);

var G__47572 = cljs.core.next.call(null,seq__47533_47565__$1);
var G__47573 = null;
var G__47574 = (0);
var G__47575 = (0);
seq__47533_47555 = G__47572;
chunk__47534_47556 = G__47573;
count__47535_47557 = G__47574;
i__47536_47558 = G__47575;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_47576 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__45125__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__45125__auto__)){
return or__45125__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_47576);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_47576)))?cljs.core.second.call(null,arglists_47576):arglists_47576));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__47537_47577 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__47538_47578 = null;
var count__47539_47579 = (0);
var i__47540_47580 = (0);
while(true){
if((i__47540_47580 < count__47539_47579)){
var vec__47541_47581 = cljs.core._nth.call(null,chunk__47538_47578,i__47540_47580);
var name_47582 = cljs.core.nth.call(null,vec__47541_47581,(0),null);
var map__47544_47583 = cljs.core.nth.call(null,vec__47541_47581,(1),null);
var map__47544_47584__$1 = ((((!((map__47544_47583 == null)))?((((map__47544_47583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47544_47583.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47544_47583):map__47544_47583);
var doc_47585 = cljs.core.get.call(null,map__47544_47584__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_47586 = cljs.core.get.call(null,map__47544_47584__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_47582);

cljs.core.println.call(null," ",arglists_47586);

if(cljs.core.truth_(doc_47585)){
cljs.core.println.call(null," ",doc_47585);
} else {
}

var G__47587 = seq__47537_47577;
var G__47588 = chunk__47538_47578;
var G__47589 = count__47539_47579;
var G__47590 = (i__47540_47580 + (1));
seq__47537_47577 = G__47587;
chunk__47538_47578 = G__47588;
count__47539_47579 = G__47589;
i__47540_47580 = G__47590;
continue;
} else {
var temp__6738__auto___47591 = cljs.core.seq.call(null,seq__47537_47577);
if(temp__6738__auto___47591){
var seq__47537_47592__$1 = temp__6738__auto___47591;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47537_47592__$1)){
var c__46036__auto___47593 = cljs.core.chunk_first.call(null,seq__47537_47592__$1);
var G__47594 = cljs.core.chunk_rest.call(null,seq__47537_47592__$1);
var G__47595 = c__46036__auto___47593;
var G__47596 = cljs.core.count.call(null,c__46036__auto___47593);
var G__47597 = (0);
seq__47537_47577 = G__47594;
chunk__47538_47578 = G__47595;
count__47539_47579 = G__47596;
i__47540_47580 = G__47597;
continue;
} else {
var vec__47546_47598 = cljs.core.first.call(null,seq__47537_47592__$1);
var name_47599 = cljs.core.nth.call(null,vec__47546_47598,(0),null);
var map__47549_47600 = cljs.core.nth.call(null,vec__47546_47598,(1),null);
var map__47549_47601__$1 = ((((!((map__47549_47600 == null)))?((((map__47549_47600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47549_47600.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47549_47600):map__47549_47600);
var doc_47602 = cljs.core.get.call(null,map__47549_47601__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_47603 = cljs.core.get.call(null,map__47549_47601__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_47599);

cljs.core.println.call(null," ",arglists_47603);

if(cljs.core.truth_(doc_47602)){
cljs.core.println.call(null," ",doc_47602);
} else {
}

var G__47604 = cljs.core.next.call(null,seq__47537_47592__$1);
var G__47605 = null;
var G__47606 = (0);
var G__47607 = (0);
seq__47537_47577 = G__47604;
chunk__47538_47578 = G__47605;
count__47539_47579 = G__47606;
i__47540_47580 = G__47607;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__6738__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__6738__auto__)){
var fnspec = temp__6738__auto__;
cljs.core.print.call(null,"Spec");

var seq__47551 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__47552 = null;
var count__47553 = (0);
var i__47554 = (0);
while(true){
if((i__47554 < count__47553)){
var role = cljs.core._nth.call(null,chunk__47552,i__47554);
var temp__6738__auto___47608__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6738__auto___47608__$1)){
var spec_47609 = temp__6738__auto___47608__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_47609));
} else {
}

var G__47610 = seq__47551;
var G__47611 = chunk__47552;
var G__47612 = count__47553;
var G__47613 = (i__47554 + (1));
seq__47551 = G__47610;
chunk__47552 = G__47611;
count__47553 = G__47612;
i__47554 = G__47613;
continue;
} else {
var temp__6738__auto____$1 = cljs.core.seq.call(null,seq__47551);
if(temp__6738__auto____$1){
var seq__47551__$1 = temp__6738__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47551__$1)){
var c__46036__auto__ = cljs.core.chunk_first.call(null,seq__47551__$1);
var G__47614 = cljs.core.chunk_rest.call(null,seq__47551__$1);
var G__47615 = c__46036__auto__;
var G__47616 = cljs.core.count.call(null,c__46036__auto__);
var G__47617 = (0);
seq__47551 = G__47614;
chunk__47552 = G__47615;
count__47553 = G__47616;
i__47554 = G__47617;
continue;
} else {
var role = cljs.core.first.call(null,seq__47551__$1);
var temp__6738__auto___47618__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6738__auto___47618__$2)){
var spec_47619 = temp__6738__auto___47618__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_47619));
} else {
}

var G__47620 = cljs.core.next.call(null,seq__47551__$1);
var G__47621 = null;
var G__47622 = (0);
var G__47623 = (0);
seq__47551 = G__47620;
chunk__47552 = G__47621;
count__47553 = G__47622;
i__47554 = G__47623;
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
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map