// Compiled by ClojureScript 1.9.542 {}
goog.provide('rewrite_clj.node.fn');
goog.require('cljs.core');
goog.require('rewrite_clj.node.protocols');
goog.require('clojure.walk');
/**
 * Construct function form.
 */
rewrite_clj.node.fn.construct_fn = (function rewrite_clj$node$fn$construct_fn(syms,vararg,body){
return cljs.core._conj.call(null,(function (){var x__46059__auto__ = cljs.core.vec.call(null,cljs.core.concat.call(null,syms,(cljs.core.truth_(vararg)?cljs.core._conj.call(null,(function (){var x__46059__auto__ = vararg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46059__auto__);
})(),new cljs.core.Symbol(null,"&","&",-2144855648,null)):null)));
return cljs.core._conj.call(null,(function (){var x__46059__auto____$1 = body;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46059__auto____$1);
})(),x__46059__auto__);
})(),new cljs.core.Symbol(null,"fn*","fn*",-752876845,null));
});
/**
 * Get index based on the substring following the parameter's `%`.
 * Zero means vararg.
 */
rewrite_clj.node.fn.sym_index = (function rewrite_clj$node$fn$sym_index(n){
if(cljs.core._EQ_.call(null,n,"&")){
return (0);
} else {
if(cljs.core._EQ_.call(null,n,"")){
return (1);
} else {
if(cljs.core.truth_(cljs.core.re_matches.call(null,/\d+/,n))){
return parseInt(n);
} else {
throw (new Error("arg literal must be %, %& or %integer."));

}
}
}
});
/**
 * If symbol starting with `%`, convert to respective gensym.
 */
rewrite_clj.node.fn.symbol__GT_gensym = (function rewrite_clj$node$fn$symbol__GT_gensym(sym_seq,vararg_QMARK_,max_n,sym){
if((sym instanceof cljs.core.Symbol)){
var nm = cljs.core.name.call(null,sym);
if(cljs.core._EQ_.call(null,nm.indexOf("%"),(0))){
var i = rewrite_clj.node.fn.sym_index.call(null,cljs.core.subs.call(null,nm,(1)));
cljs.core.swap_BANG_.call(null,max_n,cljs.core.max,i);

return cljs.core.nth.call(null,sym_seq,i);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Walk the form and create an expand function form.
 */
rewrite_clj.node.fn.fn_walk = (function rewrite_clj$node$fn$fn_walk(form){
var syms = (function (){var iter__45987__auto__ = (function rewrite_clj$node$fn$fn_walk_$_iter__54925(s__54926){
return (new cljs.core.LazySeq(null,(function (){
var s__54926__$1 = s__54926;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__54926__$1);
if(temp__6738__auto__){
var s__54926__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__54926__$2)){
var c__45985__auto__ = cljs.core.chunk_first.call(null,s__54926__$2);
var size__45986__auto__ = cljs.core.count.call(null,c__45985__auto__);
var b__54928 = cljs.core.chunk_buffer.call(null,size__45986__auto__);
if((function (){var i__54927 = (0);
while(true){
if((i__54927 < size__45986__auto__)){
var i = cljs.core._nth.call(null,c__45985__auto__,i__54927);
var base = ((cljs.core._EQ_.call(null,i,(0)))?"rest__":[cljs.core.str.cljs$core$IFn$_invoke$arity$1("p"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.str.cljs$core$IFn$_invoke$arity$1("__")].join(''));
var s = cljs.core.name.call(null,cljs.core.gensym.call(null,base));
cljs.core.chunk_append.call(null,b__54928,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1("#")].join('')));

var G__54929 = (i__54927 + (1));
i__54927 = G__54929;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__54928),rewrite_clj$node$fn$fn_walk_$_iter__54925.call(null,cljs.core.chunk_rest.call(null,s__54926__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__54928),null);
}
} else {
var i = cljs.core.first.call(null,s__54926__$2);
var base = ((cljs.core._EQ_.call(null,i,(0)))?"rest__":[cljs.core.str.cljs$core$IFn$_invoke$arity$1("p"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.str.cljs$core$IFn$_invoke$arity$1("__")].join(''));
var s = cljs.core.name.call(null,cljs.core.gensym.call(null,base));
return cljs.core.cons.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1("#")].join('')),rewrite_clj$node$fn$fn_walk_$_iter__54925.call(null,cljs.core.rest.call(null,s__54926__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__45987__auto__.call(null,cljs.core.range.call(null));
})();
var vararg_QMARK_ = false;
var max_n = cljs.core.atom.call(null,(0));
var body = clojure.walk.prewalk.call(null,((function (syms,vararg_QMARK_,max_n){
return (function (p1__54920_SHARP_){
var or__45125__auto__ = rewrite_clj.node.fn.symbol__GT_gensym.call(null,syms,vararg_QMARK_,max_n,p1__54920_SHARP_);
if(cljs.core.truth_(or__45125__auto__)){
return or__45125__auto__;
} else {
return p1__54920_SHARP_;
}
});})(syms,vararg_QMARK_,max_n))
,form);
return rewrite_clj.node.fn.construct_fn.call(null,cljs.core.take.call(null,cljs.core.deref.call(null,max_n),cljs.core.rest.call(null,syms)),null,body);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {rewrite_clj.node.protocols.InnerNode}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {rewrite_clj.node.fn.Object}
 * @implements {rewrite_clj.node.protocols.Node}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rewrite_clj.node.fn.FnNode = (function (children,__meta,__extmap,__hash){
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
rewrite_clj.node.fn.FnNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_clj$node$protocols$Node$string$arity$1(null);
});

rewrite_clj.node.fn.FnNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__45800__auto__,k__45801__auto__){
var self__ = this;
var this__45800__auto____$1 = this;
return this__45800__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__45801__auto__,null);
});

rewrite_clj.node.fn.FnNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__45802__auto__,k54931,else__45803__auto__){
var self__ = this;
var this__45802__auto____$1 = this;
var G__54933 = k54931;
var G__54933__$1 = (((G__54933 instanceof cljs.core.Keyword))?G__54933.fqn:null);
switch (G__54933__$1) {
case "children":
return self__.children;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k54931,else__45803__auto__);

}
});

rewrite_clj.node.fn.FnNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__45814__auto__,writer__45815__auto__,opts__45816__auto__){
var self__ = this;
var this__45814__auto____$1 = this;
var pr_pair__45817__auto__ = ((function (this__45814__auto____$1){
return (function (keyval__45818__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__45815__auto__,cljs.core.pr_writer,""," ","",opts__45816__auto__,keyval__45818__auto__);
});})(this__45814__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__45815__auto__,pr_pair__45817__auto__,"#rewrite-clj.node.fn.FnNode{",", ","}",opts__45816__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
});

rewrite_clj.node.fn.FnNode.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

rewrite_clj.node.fn.FnNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__54930){
var self__ = this;
var G__54930__$1 = this;
return (new cljs.core.RecordIter((0),G__54930__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

rewrite_clj.node.fn.FnNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__45798__auto__){
var self__ = this;
var this__45798__auto____$1 = this;
return self__.__meta;
});

rewrite_clj.node.fn.FnNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__45794__auto__){
var self__ = this;
var this__45794__auto____$1 = this;
return (new rewrite_clj.node.fn.FnNode(self__.children,self__.__meta,self__.__extmap,self__.__hash));
});

rewrite_clj.node.fn.FnNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__45804__auto__){
var self__ = this;
var this__45804__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

rewrite_clj.node.fn.FnNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__45795__auto__){
var self__ = this;
var this__45795__auto____$1 = this;
var h__45567__auto__ = self__.__hash;
if(!((h__45567__auto__ == null))){
return h__45567__auto__;
} else {
var h__45567__auto____$1 = cljs.core.hash_imap.call(null,this__45795__auto____$1);
self__.__hash = h__45567__auto____$1;

return h__45567__auto____$1;
}
});

rewrite_clj.node.fn.FnNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__45796__auto__,other__45797__auto__){
var self__ = this;
var this__45796__auto____$1 = this;
if(cljs.core.truth_((function (){var and__45113__auto__ = other__45797__auto__;
if(cljs.core.truth_(and__45113__auto__)){
return ((this__45796__auto____$1.constructor === other__45797__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__45796__auto____$1,other__45797__auto__));
} else {
return and__45113__auto__;
}
})())){
return true;
} else {
return false;
}
});

rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL;

rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"fn","fn",-1175266204);
});

rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
});

rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$Node$sexpr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return rewrite_clj.node.fn.fn_walk.call(null,rewrite_clj.node.protocols.sexprs.call(null,self__.children));
});

rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((3) + rewrite_clj.node.protocols.sum_lengths.call(null,self__.children));
});

rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("#("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_clj.node.protocols.concat_strings.call(null,self__.children)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('');
});

rewrite_clj.node.fn.FnNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__45809__auto__,k__45810__auto__){
var self__ = this;
var this__45809__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),null], null), null),k__45810__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__45809__auto____$1),self__.__meta),k__45810__auto__);
} else {
return (new rewrite_clj.node.fn.FnNode(self__.children,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__45810__auto__)),null));
}
});

rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$InnerNode$ = cljs.core.PROTOCOL_SENTINEL;

rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$InnerNode$inner_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$InnerNode$children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.children;
});

rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$InnerNode$replace_children$arity$2 = (function (this$,children_SINGLEQUOTE_){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"children","children",-940561982),children_SINGLEQUOTE_);
});

rewrite_clj.node.fn.FnNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__45807__auto__,k__45808__auto__,G__54930){
var self__ = this;
var this__45807__auto____$1 = this;
var pred__54934 = cljs.core.keyword_identical_QMARK_;
var expr__54935 = k__45808__auto__;
if(cljs.core.truth_(pred__54934.call(null,new cljs.core.Keyword(null,"children","children",-940561982),expr__54935))){
return (new rewrite_clj.node.fn.FnNode(G__54930,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.fn.FnNode(self__.children,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__45808__auto__,G__54930),null));
}
});

rewrite_clj.node.fn.FnNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__45812__auto__){
var self__ = this;
var this__45812__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
});

rewrite_clj.node.fn.FnNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__45799__auto__,G__54930){
var self__ = this;
var this__45799__auto____$1 = this;
return (new rewrite_clj.node.fn.FnNode(self__.children,G__54930,self__.__extmap,self__.__hash));
});

rewrite_clj.node.fn.FnNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__45805__auto__,entry__45806__auto__){
var self__ = this;
var this__45805__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__45806__auto__)){
return this__45805__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__45806__auto__,(0)),cljs.core._nth.call(null,entry__45806__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__45805__auto____$1,entry__45806__auto__);
}
});

rewrite_clj.node.fn.FnNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"children","children",699969545,null)], null);
});

rewrite_clj.node.fn.FnNode.cljs$lang$type = true;

rewrite_clj.node.fn.FnNode.cljs$lang$ctorPrSeq = (function (this__45836__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rewrite-clj.node.fn/FnNode");
});

rewrite_clj.node.fn.FnNode.cljs$lang$ctorPrWriter = (function (this__45836__auto__,writer__45837__auto__){
return cljs.core._write.call(null,writer__45837__auto__,"rewrite-clj.node.fn/FnNode");
});

rewrite_clj.node.fn.__GT_FnNode = (function rewrite_clj$node$fn$__GT_FnNode(children){
return (new rewrite_clj.node.fn.FnNode(children,null,null,null));
});

rewrite_clj.node.fn.map__GT_FnNode = (function rewrite_clj$node$fn$map__GT_FnNode(G__54932){
return (new rewrite_clj.node.fn.FnNode(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__54932),null,cljs.core.dissoc.call(null,G__54932,new cljs.core.Keyword(null,"children","children",-940561982)),null));
});

/**
 * Create node representing an anonymous function.
 */
rewrite_clj.node.fn.fn_node = (function rewrite_clj$node$fn$fn_node(children){
return rewrite_clj.node.fn.__GT_FnNode.call(null,children);
});

//# sourceMappingURL=fn.js.map