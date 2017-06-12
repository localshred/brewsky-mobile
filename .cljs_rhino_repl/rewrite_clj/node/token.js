// Compiled by ClojureScript 1.9.542 {}
goog.provide('rewrite_clj.node.token');
goog.require('cljs.core');
goog.require('rewrite_clj.node.protocols');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {rewrite_clj.node.token.Object}
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
rewrite_clj.node.token.TokenNode = (function (value,string_value,__meta,__extmap,__hash){
this.value = value;
this.string_value = string_value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
rewrite_clj.node.token.TokenNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_clj$node$protocols$Node$string$arity$1(null);
});

rewrite_clj.node.token.TokenNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__45800__auto__,k__45801__auto__){
var self__ = this;
var this__45800__auto____$1 = this;
return this__45800__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__45801__auto__,null);
});

rewrite_clj.node.token.TokenNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__45802__auto__,k54953,else__45803__auto__){
var self__ = this;
var this__45802__auto____$1 = this;
var G__54955 = k54953;
var G__54955__$1 = (((G__54955 instanceof cljs.core.Keyword))?G__54955.fqn:null);
switch (G__54955__$1) {
case "value":
return self__.value;

break;
case "string-value":
return self__.string_value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k54953,else__45803__auto__);

}
});

rewrite_clj.node.token.TokenNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__45814__auto__,writer__45815__auto__,opts__45816__auto__){
var self__ = this;
var this__45814__auto____$1 = this;
var pr_pair__45817__auto__ = ((function (this__45814__auto____$1){
return (function (keyval__45818__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__45815__auto__,cljs.core.pr_writer,""," ","",opts__45816__auto__,keyval__45818__auto__);
});})(this__45814__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__45815__auto__,pr_pair__45817__auto__,"#rewrite-clj.node.token.TokenNode{",", ","}",opts__45816__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"string-value","string-value",1109600561),self__.string_value],null))], null),self__.__extmap));
});

rewrite_clj.node.token.TokenNode.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

rewrite_clj.node.token.TokenNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__54952){
var self__ = this;
var G__54952__$1 = this;
return (new cljs.core.RecordIter((0),G__54952__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"string-value","string-value",1109600561)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

rewrite_clj.node.token.TokenNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__45798__auto__){
var self__ = this;
var this__45798__auto____$1 = this;
return self__.__meta;
});

rewrite_clj.node.token.TokenNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__45794__auto__){
var self__ = this;
var this__45794__auto____$1 = this;
return (new rewrite_clj.node.token.TokenNode(self__.value,self__.string_value,self__.__meta,self__.__extmap,self__.__hash));
});

rewrite_clj.node.token.TokenNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__45804__auto__){
var self__ = this;
var this__45804__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

rewrite_clj.node.token.TokenNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__45795__auto__){
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

rewrite_clj.node.token.TokenNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__45796__auto__,other__45797__auto__){
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

rewrite_clj.node.token.TokenNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL;

rewrite_clj.node.token.TokenNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"token","token",-1211463215);
});

rewrite_clj.node.token.TokenNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
});

rewrite_clj.node.token.TokenNode.prototype.rewrite_clj$node$protocols$Node$sexpr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

rewrite_clj.node.token.TokenNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.string_value.length;
});

rewrite_clj.node.token.TokenNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.string_value;
});

rewrite_clj.node.token.TokenNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__45809__auto__,k__45810__auto__){
var self__ = this;
var this__45809__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"string-value","string-value",1109600561),null], null), null),k__45810__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__45809__auto____$1),self__.__meta),k__45810__auto__);
} else {
return (new rewrite_clj.node.token.TokenNode(self__.value,self__.string_value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__45810__auto__)),null));
}
});

rewrite_clj.node.token.TokenNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__45807__auto__,k__45808__auto__,G__54952){
var self__ = this;
var this__45807__auto____$1 = this;
var pred__54956 = cljs.core.keyword_identical_QMARK_;
var expr__54957 = k__45808__auto__;
if(cljs.core.truth_(pred__54956.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__54957))){
return (new rewrite_clj.node.token.TokenNode(G__54952,self__.string_value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__54956.call(null,new cljs.core.Keyword(null,"string-value","string-value",1109600561),expr__54957))){
return (new rewrite_clj.node.token.TokenNode(self__.value,G__54952,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.token.TokenNode(self__.value,self__.string_value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__45808__auto__,G__54952),null));
}
}
});

rewrite_clj.node.token.TokenNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__45812__auto__){
var self__ = this;
var this__45812__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"string-value","string-value",1109600561),self__.string_value],null))], null),self__.__extmap));
});

rewrite_clj.node.token.TokenNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__45799__auto__,G__54952){
var self__ = this;
var this__45799__auto____$1 = this;
return (new rewrite_clj.node.token.TokenNode(self__.value,self__.string_value,G__54952,self__.__extmap,self__.__hash));
});

rewrite_clj.node.token.TokenNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__45805__auto__,entry__45806__auto__){
var self__ = this;
var this__45805__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__45806__auto__)){
return this__45805__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__45806__auto__,(0)),cljs.core._nth.call(null,entry__45806__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__45805__auto____$1,entry__45806__auto__);
}
});

rewrite_clj.node.token.TokenNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"string-value","string-value",-1544835208,null)], null);
});

rewrite_clj.node.token.TokenNode.cljs$lang$type = true;

rewrite_clj.node.token.TokenNode.cljs$lang$ctorPrSeq = (function (this__45836__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rewrite-clj.node.token/TokenNode");
});

rewrite_clj.node.token.TokenNode.cljs$lang$ctorPrWriter = (function (this__45836__auto__,writer__45837__auto__){
return cljs.core._write.call(null,writer__45837__auto__,"rewrite-clj.node.token/TokenNode");
});

rewrite_clj.node.token.__GT_TokenNode = (function rewrite_clj$node$token$__GT_TokenNode(value,string_value){
return (new rewrite_clj.node.token.TokenNode(value,string_value,null,null,null));
});

rewrite_clj.node.token.map__GT_TokenNode = (function rewrite_clj$node$token$map__GT_TokenNode(G__54954){
return (new rewrite_clj.node.token.TokenNode(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__54954),new cljs.core.Keyword(null,"string-value","string-value",1109600561).cljs$core$IFn$_invoke$arity$1(G__54954),null,cljs.core.dissoc.call(null,G__54954,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"string-value","string-value",1109600561)),null));
});

/**
 * Create node for an unspecified EDN token.
 */
rewrite_clj.node.token.token_node = (function rewrite_clj$node$token$token_node(var_args){
var args54960 = [];
var len__46346__auto___54963 = arguments.length;
var i__46347__auto___54964 = (0);
while(true){
if((i__46347__auto___54964 < len__46346__auto___54963)){
args54960.push((arguments[i__46347__auto___54964]));

var G__54965 = (i__46347__auto___54964 + (1));
i__46347__auto___54964 = G__54965;
continue;
} else {
}
break;
}

var G__54962 = args54960.length;
switch (G__54962) {
case 1:
return rewrite_clj.node.token.token_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.node.token.token_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args54960.length)].join('')));

}
});

rewrite_clj.node.token.token_node.cljs$core$IFn$_invoke$arity$1 = (function (value){
return rewrite_clj.node.token.token_node.call(null,value,cljs.core.pr_str.call(null,value));
});

rewrite_clj.node.token.token_node.cljs$core$IFn$_invoke$arity$2 = (function (value,string_value){
return rewrite_clj.node.token.__GT_TokenNode.call(null,value,string_value);
});

rewrite_clj.node.token.token_node.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=token.js.map