// Compiled by ClojureScript 1.9.542 {}
goog.provide('rewrite_clj.node.meta');
goog.require('cljs.core');
goog.require('rewrite_clj.node.protocols');
goog.require('rewrite_clj.node.whitespace');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {rewrite_clj.node.meta.Object}
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
 * @implements {rewrite_clj.node.protocols.Node}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rewrite_clj.node.meta.MetaNode = (function (tag,prefix,children,__meta,__extmap,__hash){
this.tag = tag;
this.prefix = prefix;
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
rewrite_clj.node.meta.MetaNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_clj$node$protocols$Node$string$arity$1(null);
});

rewrite_clj.node.meta.MetaNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__45800__auto__,k__45801__auto__){
var self__ = this;
var this__45800__auto____$1 = this;
return this__45800__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__45801__auto__,null);
});

rewrite_clj.node.meta.MetaNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__45802__auto__,k54970,else__45803__auto__){
var self__ = this;
var this__45802__auto____$1 = this;
var G__54972 = k54970;
var G__54972__$1 = (((G__54972 instanceof cljs.core.Keyword))?G__54972.fqn:null);
switch (G__54972__$1) {
case "tag":
return self__.tag;

break;
case "prefix":
return self__.prefix;

break;
case "children":
return self__.children;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k54970,else__45803__auto__);

}
});

rewrite_clj.node.meta.MetaNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__45814__auto__,writer__45815__auto__,opts__45816__auto__){
var self__ = this;
var this__45814__auto____$1 = this;
var pr_pair__45817__auto__ = ((function (this__45814__auto____$1){
return (function (keyval__45818__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__45815__auto__,cljs.core.pr_writer,""," ","",opts__45816__auto__,keyval__45818__auto__);
});})(this__45814__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__45815__auto__,pr_pair__45817__auto__,"#rewrite-clj.node.meta.MetaNode{",", ","}",opts__45816__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
});

rewrite_clj.node.meta.MetaNode.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

rewrite_clj.node.meta.MetaNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__54969){
var self__ = this;
var G__54969__$1 = this;
return (new cljs.core.RecordIter((0),G__54969__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"children","children",-940561982)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

rewrite_clj.node.meta.MetaNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__45798__auto__){
var self__ = this;
var this__45798__auto____$1 = this;
return self__.__meta;
});

rewrite_clj.node.meta.MetaNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__45794__auto__){
var self__ = this;
var this__45794__auto____$1 = this;
return (new rewrite_clj.node.meta.MetaNode(self__.tag,self__.prefix,self__.children,self__.__meta,self__.__extmap,self__.__hash));
});

rewrite_clj.node.meta.MetaNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__45804__auto__){
var self__ = this;
var this__45804__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

rewrite_clj.node.meta.MetaNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__45795__auto__){
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

rewrite_clj.node.meta.MetaNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__45796__auto__,other__45797__auto__){
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

rewrite_clj.node.meta.MetaNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL;

rewrite_clj.node.meta.MetaNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.tag;
});

rewrite_clj.node.meta.MetaNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
});

rewrite_clj.node.meta.MetaNode.prototype.rewrite_clj$node$protocols$Node$sexpr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var vec__54973 = rewrite_clj.node.protocols.sexprs.call(null,self__.children);
var mta = cljs.core.nth.call(null,vec__54973,(0),null);
var data = cljs.core.nth.call(null,vec__54973,(1),null);
if(((!((data == null)))?((((data.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IWithMeta$)))?true:false):false)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("cannot attach metadata to: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,data))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(implements? IWithMeta data)")].join('')));
}

return cljs.core.with_meta.call(null,data,((cljs.core.map_QMARK_.call(null,mta))?mta:cljs.core.PersistentArrayMap.createAsIfByAssoc([mta,true])));
});

rewrite_clj.node.meta.MetaNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.count.call(null,self__.prefix) + rewrite_clj.node.protocols.sum_lengths.call(null,self__.children));
});

rewrite_clj.node.meta.MetaNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_clj.node.protocols.concat_strings.call(null,self__.children))].join('');
});

rewrite_clj.node.meta.MetaNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__45809__auto__,k__45810__auto__){
var self__ = this;
var this__45809__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"children","children",-940561982),null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null], null), null),k__45810__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__45809__auto____$1),self__.__meta),k__45810__auto__);
} else {
return (new rewrite_clj.node.meta.MetaNode(self__.tag,self__.prefix,self__.children,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__45810__auto__)),null));
}
});

rewrite_clj.node.meta.MetaNode.prototype.rewrite_clj$node$protocols$InnerNode$ = cljs.core.PROTOCOL_SENTINEL;

rewrite_clj.node.meta.MetaNode.prototype.rewrite_clj$node$protocols$InnerNode$inner_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

rewrite_clj.node.meta.MetaNode.prototype.rewrite_clj$node$protocols$InnerNode$children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.children;
});

rewrite_clj.node.meta.MetaNode.prototype.rewrite_clj$node$protocols$InnerNode$replace_children$arity$2 = (function (this$,children_SINGLEQUOTE_){
var self__ = this;
var this$__$1 = this;
rewrite_clj.node.protocols.assert_sexpr_count.call(null,children_SINGLEQUOTE_,(2));

return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"children","children",-940561982),children_SINGLEQUOTE_);
});

rewrite_clj.node.meta.MetaNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__45807__auto__,k__45808__auto__,G__54969){
var self__ = this;
var this__45807__auto____$1 = this;
var pred__54977 = cljs.core.keyword_identical_QMARK_;
var expr__54978 = k__45808__auto__;
if(cljs.core.truth_(pred__54977.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__54978))){
return (new rewrite_clj.node.meta.MetaNode(G__54969,self__.prefix,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__54977.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__54978))){
return (new rewrite_clj.node.meta.MetaNode(self__.tag,G__54969,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__54977.call(null,new cljs.core.Keyword(null,"children","children",-940561982),expr__54978))){
return (new rewrite_clj.node.meta.MetaNode(self__.tag,self__.prefix,G__54969,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.meta.MetaNode(self__.tag,self__.prefix,self__.children,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__45808__auto__,G__54969),null));
}
}
}
});

rewrite_clj.node.meta.MetaNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__45812__auto__){
var self__ = this;
var this__45812__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
});

rewrite_clj.node.meta.MetaNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__45799__auto__,G__54969){
var self__ = this;
var this__45799__auto____$1 = this;
return (new rewrite_clj.node.meta.MetaNode(self__.tag,self__.prefix,self__.children,G__54969,self__.__extmap,self__.__hash));
});

rewrite_clj.node.meta.MetaNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__45805__auto__,entry__45806__auto__){
var self__ = this;
var this__45805__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__45806__auto__)){
return this__45805__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__45806__auto__,(0)),cljs.core._nth.call(null,entry__45806__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__45805__auto____$1,entry__45806__auto__);
}
});

rewrite_clj.node.meta.MetaNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"prefix","prefix",1374623062,null),new cljs.core.Symbol(null,"children","children",699969545,null)], null);
});

rewrite_clj.node.meta.MetaNode.cljs$lang$type = true;

rewrite_clj.node.meta.MetaNode.cljs$lang$ctorPrSeq = (function (this__45836__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rewrite-clj.node.meta/MetaNode");
});

rewrite_clj.node.meta.MetaNode.cljs$lang$ctorPrWriter = (function (this__45836__auto__,writer__45837__auto__){
return cljs.core._write.call(null,writer__45837__auto__,"rewrite-clj.node.meta/MetaNode");
});

rewrite_clj.node.meta.__GT_MetaNode = (function rewrite_clj$node$meta$__GT_MetaNode(tag,prefix,children){
return (new rewrite_clj.node.meta.MetaNode(tag,prefix,children,null,null,null));
});

rewrite_clj.node.meta.map__GT_MetaNode = (function rewrite_clj$node$meta$map__GT_MetaNode(G__54971){
return (new rewrite_clj.node.meta.MetaNode(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(G__54971),new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(G__54971),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__54971),null,cljs.core.dissoc.call(null,G__54971,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"children","children",-940561982)),null));
});

/**
 * Create node representing a form and its metadata.
 */
rewrite_clj.node.meta.meta_node = (function rewrite_clj$node$meta$meta_node(var_args){
var args54981 = [];
var len__46346__auto___54984 = arguments.length;
var i__46347__auto___54985 = (0);
while(true){
if((i__46347__auto___54985 < len__46346__auto___54984)){
args54981.push((arguments[i__46347__auto___54985]));

var G__54986 = (i__46347__auto___54985 + (1));
i__46347__auto___54985 = G__54986;
continue;
} else {
}
break;
}

var G__54983 = args54981.length;
switch (G__54983) {
case 1:
return rewrite_clj.node.meta.meta_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.node.meta.meta_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args54981.length)].join('')));

}
});

rewrite_clj.node.meta.meta_node.cljs$core$IFn$_invoke$arity$1 = (function (children){
rewrite_clj.node.protocols.assert_sexpr_count.call(null,children,(2));

return rewrite_clj.node.meta.__GT_MetaNode.call(null,new cljs.core.Keyword(null,"meta","meta",1499536964),"^",children);
});

rewrite_clj.node.meta.meta_node.cljs$core$IFn$_invoke$arity$2 = (function (metadata,data){
return rewrite_clj.node.meta.meta_node.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [metadata,rewrite_clj.node.whitespace.spaces.call(null,(1)),data], null));
});

rewrite_clj.node.meta.meta_node.cljs$lang$maxFixedArity = 2;

/**
 * Create node representing a form and its metadata using the
 * `#^` prefix.
 */
rewrite_clj.node.meta.raw_meta_node = (function rewrite_clj$node$meta$raw_meta_node(var_args){
var args54988 = [];
var len__46346__auto___54991 = arguments.length;
var i__46347__auto___54992 = (0);
while(true){
if((i__46347__auto___54992 < len__46346__auto___54991)){
args54988.push((arguments[i__46347__auto___54992]));

var G__54993 = (i__46347__auto___54992 + (1));
i__46347__auto___54992 = G__54993;
continue;
} else {
}
break;
}

var G__54990 = args54988.length;
switch (G__54990) {
case 1:
return rewrite_clj.node.meta.raw_meta_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.node.meta.raw_meta_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args54988.length)].join('')));

}
});

rewrite_clj.node.meta.raw_meta_node.cljs$core$IFn$_invoke$arity$1 = (function (children){
rewrite_clj.node.protocols.assert_sexpr_count.call(null,children,(2));

return rewrite_clj.node.meta.__GT_MetaNode.call(null,new cljs.core.Keyword(null,"meta*","meta*",-949431606),"#^",children);
});

rewrite_clj.node.meta.raw_meta_node.cljs$core$IFn$_invoke$arity$2 = (function (metadata,data){
return rewrite_clj.node.meta.raw_meta_node.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [metadata,rewrite_clj.node.whitespace.spaces.call(null,(1)),data], null));
});

rewrite_clj.node.meta.raw_meta_node.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=meta.js.map