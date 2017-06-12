// Compiled by ClojureScript 1.9.542 {}
goog.provide('rewrite_clj.node.whitespace');
goog.require('cljs.core');
goog.require('rewrite_clj.node.protocols');
/**
 * This function is applied to every newline string.
 */
rewrite_clj.node.whitespace._STAR_newline_fn_STAR_ = cljs.core.identity;
/**
 * This function is applied to every newline string and should produce
 * the eventual character count.
 */
rewrite_clj.node.whitespace._STAR_count_fn_STAR_ = cljs.core.count;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {rewrite_clj.node.whitespace.Object}
 * @implements {cljs.core.ICounted}
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
rewrite_clj.node.whitespace.WhitespaceNode = (function (whitespace,__meta,__extmap,__hash){
this.whitespace = whitespace;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
rewrite_clj.node.whitespace.WhitespaceNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_clj$node$protocols$Node$string$arity$1(null);
});

rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__45800__auto__,k__45801__auto__){
var self__ = this;
var this__45800__auto____$1 = this;
return this__45800__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__45801__auto__,null);
});

rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__45802__auto__,k54807,else__45803__auto__){
var self__ = this;
var this__45802__auto____$1 = this;
var G__54809 = k54807;
var G__54809__$1 = (((G__54809 instanceof cljs.core.Keyword))?G__54809.fqn:null);
switch (G__54809__$1) {
case "whitespace":
return self__.whitespace;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k54807,else__45803__auto__);

}
});

rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__45814__auto__,writer__45815__auto__,opts__45816__auto__){
var self__ = this;
var this__45814__auto____$1 = this;
var pr_pair__45817__auto__ = ((function (this__45814__auto____$1){
return (function (keyval__45818__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__45815__auto__,cljs.core.pr_writer,""," ","",opts__45816__auto__,keyval__45818__auto__);
});})(this__45814__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__45815__auto__,pr_pair__45817__auto__,"#rewrite-clj.node.whitespace.WhitespaceNode{",", ","}",opts__45816__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),self__.whitespace],null))], null),self__.__extmap));
});

rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__54806){
var self__ = this;
var G__54806__$1 = this;
return (new cljs.core.RecordIter((0),G__54806__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__45798__auto__){
var self__ = this;
var this__45798__auto____$1 = this;
return self__.__meta;
});

rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__45794__auto__){
var self__ = this;
var this__45794__auto____$1 = this;
return (new rewrite_clj.node.whitespace.WhitespaceNode(self__.whitespace,self__.__meta,self__.__extmap,self__.__hash));
});

rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__45804__auto__){
var self__ = this;
var this__45804__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__45795__auto__){
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

rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__45796__auto__,other__45797__auto__){
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

rewrite_clj.node.whitespace.WhitespaceNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL;

rewrite_clj.node.whitespace.WhitespaceNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483);
});

rewrite_clj.node.whitespace.WhitespaceNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

rewrite_clj.node.whitespace.WhitespaceNode.prototype.rewrite_clj$node$protocols$Node$sexpr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
throw (new Error("Unsupported operation"));
});

rewrite_clj.node.whitespace.WhitespaceNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.count.call(null,self__.whitespace);
});

rewrite_clj.node.whitespace.WhitespaceNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.whitespace;
});

rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__45809__auto__,k__45810__auto__){
var self__ = this;
var this__45809__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),null], null), null),k__45810__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__45809__auto____$1),self__.__meta),k__45810__auto__);
} else {
return (new rewrite_clj.node.whitespace.WhitespaceNode(self__.whitespace,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__45810__auto__)),null));
}
});

rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__45807__auto__,k__45808__auto__,G__54806){
var self__ = this;
var this__45807__auto____$1 = this;
var pred__54810 = cljs.core.keyword_identical_QMARK_;
var expr__54811 = k__45808__auto__;
if(cljs.core.truth_(pred__54810.call(null,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),expr__54811))){
return (new rewrite_clj.node.whitespace.WhitespaceNode(G__54806,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.whitespace.WhitespaceNode(self__.whitespace,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__45808__auto__,G__54806),null));
}
});

rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__45812__auto__){
var self__ = this;
var this__45812__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),self__.whitespace],null))], null),self__.__extmap));
});

rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__45799__auto__,G__54806){
var self__ = this;
var this__45799__auto____$1 = this;
return (new rewrite_clj.node.whitespace.WhitespaceNode(self__.whitespace,G__54806,self__.__extmap,self__.__hash));
});

rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__45805__auto__,entry__45806__auto__){
var self__ = this;
var this__45805__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__45806__auto__)){
return this__45805__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__45806__auto__,(0)),cljs.core._nth.call(null,entry__45806__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__45805__auto____$1,entry__45806__auto__);
}
});

rewrite_clj.node.whitespace.WhitespaceNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"whitespace","whitespace",300496044,null)], null);
});

rewrite_clj.node.whitespace.WhitespaceNode.cljs$lang$type = true;

rewrite_clj.node.whitespace.WhitespaceNode.cljs$lang$ctorPrSeq = (function (this__45836__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rewrite-clj.node.whitespace/WhitespaceNode");
});

rewrite_clj.node.whitespace.WhitespaceNode.cljs$lang$ctorPrWriter = (function (this__45836__auto__,writer__45837__auto__){
return cljs.core._write.call(null,writer__45837__auto__,"rewrite-clj.node.whitespace/WhitespaceNode");
});

rewrite_clj.node.whitespace.__GT_WhitespaceNode = (function rewrite_clj$node$whitespace$__GT_WhitespaceNode(whitespace){
return (new rewrite_clj.node.whitespace.WhitespaceNode(whitespace,null,null,null));
});

rewrite_clj.node.whitespace.map__GT_WhitespaceNode = (function rewrite_clj$node$whitespace$map__GT_WhitespaceNode(G__54808){
return (new rewrite_clj.node.whitespace.WhitespaceNode(new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483).cljs$core$IFn$_invoke$arity$1(G__54808),null,cljs.core.dissoc.call(null,G__54808,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {rewrite_clj.node.whitespace.Object}
 * @implements {cljs.core.ICounted}
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
rewrite_clj.node.whitespace.NewlineNode = (function (newlines,__meta,__extmap,__hash){
this.newlines = newlines;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
rewrite_clj.node.whitespace.NewlineNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_clj$node$protocols$Node$string$arity$1(null);
});

rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__45800__auto__,k__45801__auto__){
var self__ = this;
var this__45800__auto____$1 = this;
return this__45800__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__45801__auto__,null);
});

rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__45802__auto__,k54815,else__45803__auto__){
var self__ = this;
var this__45802__auto____$1 = this;
var G__54817 = k54815;
var G__54817__$1 = (((G__54817 instanceof cljs.core.Keyword))?G__54817.fqn:null);
switch (G__54817__$1) {
case "newlines":
return self__.newlines;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k54815,else__45803__auto__);

}
});

rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__45814__auto__,writer__45815__auto__,opts__45816__auto__){
var self__ = this;
var this__45814__auto____$1 = this;
var pr_pair__45817__auto__ = ((function (this__45814__auto____$1){
return (function (keyval__45818__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__45815__auto__,cljs.core.pr_writer,""," ","",opts__45816__auto__,keyval__45818__auto__);
});})(this__45814__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__45815__auto__,pr_pair__45817__auto__,"#rewrite-clj.node.whitespace.NewlineNode{",", ","}",opts__45816__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"newlines","newlines",-1185451518),self__.newlines],null))], null),self__.__extmap));
});

rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__54814){
var self__ = this;
var G__54814__$1 = this;
return (new cljs.core.RecordIter((0),G__54814__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"newlines","newlines",-1185451518)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__45798__auto__){
var self__ = this;
var this__45798__auto____$1 = this;
return self__.__meta;
});

rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__45794__auto__){
var self__ = this;
var this__45794__auto____$1 = this;
return (new rewrite_clj.node.whitespace.NewlineNode(self__.newlines,self__.__meta,self__.__extmap,self__.__hash));
});

rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__45804__auto__){
var self__ = this;
var this__45804__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__45795__auto__){
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

rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__45796__auto__,other__45797__auto__){
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

rewrite_clj.node.whitespace.NewlineNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL;

rewrite_clj.node.whitespace.NewlineNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"newline","newline",1790071323);
});

rewrite_clj.node.whitespace.NewlineNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

rewrite_clj.node.whitespace.NewlineNode.prototype.rewrite_clj$node$protocols$Node$sexpr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
throw (new Error("Unsupported operation"));
});

rewrite_clj.node.whitespace.NewlineNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return rewrite_clj.node.whitespace._STAR_count_fn_STAR_.call(null,self__.newlines);
});

rewrite_clj.node.whitespace.NewlineNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return rewrite_clj.node.whitespace._STAR_newline_fn_STAR_.call(null,self__.newlines);
});

rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__45809__auto__,k__45810__auto__){
var self__ = this;
var this__45809__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"newlines","newlines",-1185451518),null], null), null),k__45810__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__45809__auto____$1),self__.__meta),k__45810__auto__);
} else {
return (new rewrite_clj.node.whitespace.NewlineNode(self__.newlines,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__45810__auto__)),null));
}
});

rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__45807__auto__,k__45808__auto__,G__54814){
var self__ = this;
var this__45807__auto____$1 = this;
var pred__54818 = cljs.core.keyword_identical_QMARK_;
var expr__54819 = k__45808__auto__;
if(cljs.core.truth_(pred__54818.call(null,new cljs.core.Keyword(null,"newlines","newlines",-1185451518),expr__54819))){
return (new rewrite_clj.node.whitespace.NewlineNode(G__54814,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.whitespace.NewlineNode(self__.newlines,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__45808__auto__,G__54814),null));
}
});

rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__45812__auto__){
var self__ = this;
var this__45812__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"newlines","newlines",-1185451518),self__.newlines],null))], null),self__.__extmap));
});

rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__45799__auto__,G__54814){
var self__ = this;
var this__45799__auto____$1 = this;
return (new rewrite_clj.node.whitespace.NewlineNode(self__.newlines,G__54814,self__.__extmap,self__.__hash));
});

rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__45805__auto__,entry__45806__auto__){
var self__ = this;
var this__45805__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__45806__auto__)){
return this__45805__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__45806__auto__,(0)),cljs.core._nth.call(null,entry__45806__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__45805__auto____$1,entry__45806__auto__);
}
});

rewrite_clj.node.whitespace.NewlineNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"newlines","newlines",455080009,null)], null);
});

rewrite_clj.node.whitespace.NewlineNode.cljs$lang$type = true;

rewrite_clj.node.whitespace.NewlineNode.cljs$lang$ctorPrSeq = (function (this__45836__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rewrite-clj.node.whitespace/NewlineNode");
});

rewrite_clj.node.whitespace.NewlineNode.cljs$lang$ctorPrWriter = (function (this__45836__auto__,writer__45837__auto__){
return cljs.core._write.call(null,writer__45837__auto__,"rewrite-clj.node.whitespace/NewlineNode");
});

rewrite_clj.node.whitespace.__GT_NewlineNode = (function rewrite_clj$node$whitespace$__GT_NewlineNode(newlines){
return (new rewrite_clj.node.whitespace.NewlineNode(newlines,null,null,null));
});

rewrite_clj.node.whitespace.map__GT_NewlineNode = (function rewrite_clj$node$whitespace$map__GT_NewlineNode(G__54816){
return (new rewrite_clj.node.whitespace.NewlineNode(new cljs.core.Keyword(null,"newlines","newlines",-1185451518).cljs$core$IFn$_invoke$arity$1(G__54816),null,cljs.core.dissoc.call(null,G__54816,new cljs.core.Keyword(null,"newlines","newlines",-1185451518)),null));
});

/**
 * Create whitespace node.
 */
rewrite_clj.node.whitespace.whitespace_node = (function rewrite_clj$node$whitespace$whitespace_node(s){
return rewrite_clj.node.whitespace.__GT_WhitespaceNode.call(null,s);
});
/**
 * Create newline node.
 */
rewrite_clj.node.whitespace.newline_node = (function rewrite_clj$node$whitespace$newline_node(s){
return rewrite_clj.node.whitespace.__GT_NewlineNode.call(null,s);
});
/**
 * Check whether a character represents a linebreak.
 */
rewrite_clj.node.whitespace.newline_QMARK_ = (function rewrite_clj$node$whitespace$newline_QMARK_(c){
return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["\n",null,"\r",null], null), null),c);
});
/**
 * Convert a string of whitespace to whitespace/newline nodes.
 */
rewrite_clj.node.whitespace.whitespace_nodes = (function rewrite_clj$node$whitespace$whitespace_nodes(s){
return cljs.core.map.call(null,(function (char_seq){
var s__$1 = cljs.core.apply.call(null,cljs.core.str,char_seq);
if(cljs.core.truth_(rewrite_clj.node.whitespace.newline_QMARK_.call(null,cljs.core.first.call(null,char_seq)))){
return rewrite_clj.node.whitespace.newline_node.call(null,s__$1);
} else {
return rewrite_clj.node.whitespace.whitespace_node.call(null,s__$1);
}
}),cljs.core.partition_by.call(null,rewrite_clj.node.whitespace.newline_QMARK_,s));
});
/**
 * Create node representing the given number of spaces.
 */
rewrite_clj.node.whitespace.spaces = (function rewrite_clj$node$whitespace$spaces(n){
return rewrite_clj.node.whitespace.whitespace_node.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n," ")));
});
/**
 * Create node representing the given number of newline characters.
 */
rewrite_clj.node.whitespace.newlines = (function rewrite_clj$node$whitespace$newlines(n){
return rewrite_clj.node.whitespace.newline_node.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n,"\n")));
});
var comma_54822 = rewrite_clj.node.whitespace.whitespace_node.call(null,", ");
/**
 * Interleave the given seq of nodes with `", "` nodes.
 */
rewrite_clj.node.whitespace.comma_separated = ((function (comma_54822){
return (function rewrite_clj$node$whitespace$comma_separated(nodes){
return cljs.core.butlast.call(null,cljs.core.interleave.call(null,nodes,cljs.core.repeat.call(null,comma_54822)));
});})(comma_54822))
;
var nl_54823 = rewrite_clj.node.whitespace.newline_node.call(null,"\n");
/**
 * Interleave the given seq of nodes with newline nodes.
 */
rewrite_clj.node.whitespace.line_separated = ((function (nl_54823){
return (function rewrite_clj$node$whitespace$line_separated(nodes){
return cljs.core.butlast.call(null,cljs.core.interleave.call(null,nodes,cljs.core.repeat.call(null,nl_54823)));
});})(nl_54823))
;
var space_54824 = rewrite_clj.node.whitespace.whitespace_node.call(null," ");
/**
 * Interleave the given seq of nodes with `" "` nodes.
 */
rewrite_clj.node.whitespace.space_separated = ((function (space_54824){
return (function rewrite_clj$node$whitespace$space_separated(nodes){
return cljs.core.butlast.call(null,cljs.core.interleave.call(null,nodes,cljs.core.repeat.call(null,space_54824)));
});})(space_54824))
;
/**
 * Check whether a node represents whitespace.
 */
rewrite_clj.node.whitespace.whitespace_QMARK_ = (function rewrite_clj$node$whitespace$whitespace_QMARK_(node){
return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),null,new cljs.core.Keyword(null,"newline","newline",1790071323),null], null), null),rewrite_clj.node.protocols.tag.call(null,node));
});
/**
 * Check whether a ndoe represents linebreaks.
 */
rewrite_clj.node.whitespace.linebreak_QMARK_ = (function rewrite_clj$node$whitespace$linebreak_QMARK_(node){
return cljs.core._EQ_.call(null,rewrite_clj.node.protocols.tag.call(null,node),new cljs.core.Keyword(null,"newline","newline",1790071323));
});

//# sourceMappingURL=whitespace.js.map