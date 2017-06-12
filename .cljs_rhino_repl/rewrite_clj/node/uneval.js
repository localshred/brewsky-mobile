// Compiled by ClojureScript 1.9.542 {}
goog.provide('rewrite_clj.node.uneval');
goog.require('cljs.core');
goog.require('rewrite_clj.node.protocols');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {rewrite_clj.node.protocols.InnerNode}
 * @implements {rewrite_clj.node.uneval.Object}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {rewrite_clj.node.protocols.Node}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rewrite_clj.node.uneval.UnevalNode = (function (children,__meta,__extmap,__hash){
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
rewrite_clj.node.uneval.UnevalNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_clj$node$protocols$Node$string$arity$1(null);
});

rewrite_clj.node.uneval.UnevalNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__45800__auto__,k__45801__auto__){
var self__ = this;
var this__45800__auto____$1 = this;
return this__45800__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__45801__auto__,null);
});

rewrite_clj.node.uneval.UnevalNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__45802__auto__,k54828,else__45803__auto__){
var self__ = this;
var this__45802__auto____$1 = this;
var G__54830 = k54828;
var G__54830__$1 = (((G__54830 instanceof cljs.core.Keyword))?G__54830.fqn:null);
switch (G__54830__$1) {
case "children":
return self__.children;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k54828,else__45803__auto__);

}
});

rewrite_clj.node.uneval.UnevalNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__45814__auto__,writer__45815__auto__,opts__45816__auto__){
var self__ = this;
var this__45814__auto____$1 = this;
var pr_pair__45817__auto__ = ((function (this__45814__auto____$1){
return (function (keyval__45818__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__45815__auto__,cljs.core.pr_writer,""," ","",opts__45816__auto__,keyval__45818__auto__);
});})(this__45814__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__45815__auto__,pr_pair__45817__auto__,"#rewrite-clj.node.uneval.UnevalNode{",", ","}",opts__45816__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
});

rewrite_clj.node.uneval.UnevalNode.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

rewrite_clj.node.uneval.UnevalNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__54827){
var self__ = this;
var G__54827__$1 = this;
return (new cljs.core.RecordIter((0),G__54827__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

rewrite_clj.node.uneval.UnevalNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__45798__auto__){
var self__ = this;
var this__45798__auto____$1 = this;
return self__.__meta;
});

rewrite_clj.node.uneval.UnevalNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__45794__auto__){
var self__ = this;
var this__45794__auto____$1 = this;
return (new rewrite_clj.node.uneval.UnevalNode(self__.children,self__.__meta,self__.__extmap,self__.__hash));
});

rewrite_clj.node.uneval.UnevalNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__45804__auto__){
var self__ = this;
var this__45804__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

rewrite_clj.node.uneval.UnevalNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__45795__auto__){
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

rewrite_clj.node.uneval.UnevalNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__45796__auto__,other__45797__auto__){
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

rewrite_clj.node.uneval.UnevalNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL;

rewrite_clj.node.uneval.UnevalNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"uneval","uneval",1932037707);
});

rewrite_clj.node.uneval.UnevalNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

rewrite_clj.node.uneval.UnevalNode.prototype.rewrite_clj$node$protocols$Node$sexpr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
throw (new Error("Unsupported operation for unevalnode"));
});

rewrite_clj.node.uneval.UnevalNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((2) + rewrite_clj.node.protocols.sum_lengths.call(null,self__.children));
});

rewrite_clj.node.uneval.UnevalNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("#_"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_clj.node.protocols.concat_strings.call(null,self__.children))].join('');
});

rewrite_clj.node.uneval.UnevalNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__45809__auto__,k__45810__auto__){
var self__ = this;
var this__45809__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),null], null), null),k__45810__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__45809__auto____$1),self__.__meta),k__45810__auto__);
} else {
return (new rewrite_clj.node.uneval.UnevalNode(self__.children,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__45810__auto__)),null));
}
});

rewrite_clj.node.uneval.UnevalNode.prototype.rewrite_clj$node$protocols$InnerNode$ = cljs.core.PROTOCOL_SENTINEL;

rewrite_clj.node.uneval.UnevalNode.prototype.rewrite_clj$node$protocols$InnerNode$inner_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

rewrite_clj.node.uneval.UnevalNode.prototype.rewrite_clj$node$protocols$InnerNode$children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.children;
});

rewrite_clj.node.uneval.UnevalNode.prototype.rewrite_clj$node$protocols$InnerNode$replace_children$arity$2 = (function (this$,children_SINGLEQUOTE_){
var self__ = this;
var this$__$1 = this;
rewrite_clj.node.protocols.assert_single_sexpr.call(null,children_SINGLEQUOTE_);

return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"children","children",-940561982),children_SINGLEQUOTE_);
});

rewrite_clj.node.uneval.UnevalNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__45807__auto__,k__45808__auto__,G__54827){
var self__ = this;
var this__45807__auto____$1 = this;
var pred__54831 = cljs.core.keyword_identical_QMARK_;
var expr__54832 = k__45808__auto__;
if(cljs.core.truth_(pred__54831.call(null,new cljs.core.Keyword(null,"children","children",-940561982),expr__54832))){
return (new rewrite_clj.node.uneval.UnevalNode(G__54827,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.uneval.UnevalNode(self__.children,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__45808__auto__,G__54827),null));
}
});

rewrite_clj.node.uneval.UnevalNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__45812__auto__){
var self__ = this;
var this__45812__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
});

rewrite_clj.node.uneval.UnevalNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__45799__auto__,G__54827){
var self__ = this;
var this__45799__auto____$1 = this;
return (new rewrite_clj.node.uneval.UnevalNode(self__.children,G__54827,self__.__extmap,self__.__hash));
});

rewrite_clj.node.uneval.UnevalNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__45805__auto__,entry__45806__auto__){
var self__ = this;
var this__45805__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__45806__auto__)){
return this__45805__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__45806__auto__,(0)),cljs.core._nth.call(null,entry__45806__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__45805__auto____$1,entry__45806__auto__);
}
});

rewrite_clj.node.uneval.UnevalNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"children","children",699969545,null)], null);
});

rewrite_clj.node.uneval.UnevalNode.cljs$lang$type = true;

rewrite_clj.node.uneval.UnevalNode.cljs$lang$ctorPrSeq = (function (this__45836__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rewrite-clj.node.uneval/UnevalNode");
});

rewrite_clj.node.uneval.UnevalNode.cljs$lang$ctorPrWriter = (function (this__45836__auto__,writer__45837__auto__){
return cljs.core._write.call(null,writer__45837__auto__,"rewrite-clj.node.uneval/UnevalNode");
});

rewrite_clj.node.uneval.__GT_UnevalNode = (function rewrite_clj$node$uneval$__GT_UnevalNode(children){
return (new rewrite_clj.node.uneval.UnevalNode(children,null,null,null));
});

rewrite_clj.node.uneval.map__GT_UnevalNode = (function rewrite_clj$node$uneval$map__GT_UnevalNode(G__54829){
return (new rewrite_clj.node.uneval.UnevalNode(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__54829),null,cljs.core.dissoc.call(null,G__54829,new cljs.core.Keyword(null,"children","children",-940561982)),null));
});

/**
 * Create node representing an EDN uneval `#_` form.
 */
rewrite_clj.node.uneval.uneval_node = (function rewrite_clj$node$uneval$uneval_node(children){
while(true){
if(cljs.core.sequential_QMARK_.call(null,children)){
rewrite_clj.node.protocols.assert_single_sexpr.call(null,children);

return rewrite_clj.node.uneval.__GT_UnevalNode.call(null,children);
} else {
var G__54835 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [children], null);
children = G__54835;
continue;
}
break;
}
});

//# sourceMappingURL=uneval.js.map