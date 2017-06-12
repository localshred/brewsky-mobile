// Compiled by ClojureScript 1.9.542 {}
goog.provide('rewrite_clj.parser.core');
goog.require('cljs.core');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.reader');
goog.require('rewrite_clj.parser.keyword');
goog.require('rewrite_clj.parser.string');
goog.require('rewrite_clj.parser.token');
goog.require('rewrite_clj.parser.whitespace');
goog.require('cljs.tools.reader.reader_types');
rewrite_clj.parser.core._STAR_delimiter_STAR_ = null;
rewrite_clj.parser.core.parse_delim = (function rewrite_clj$parser$core$parse_delim(reader,delimiter){
rewrite_clj.reader.ignore.call(null,reader);

return rewrite_clj.reader.read_repeatedly.call(null,reader,(function (p1__55559_SHARP_){
var _STAR_delimiter_STAR_55561 = rewrite_clj.parser.core._STAR_delimiter_STAR_;
rewrite_clj.parser.core._STAR_delimiter_STAR_ = delimiter;

try{return rewrite_clj.parser.core.parse_next.call(null,p1__55559_SHARP_);
}finally {rewrite_clj.parser.core._STAR_delimiter_STAR_ = _STAR_delimiter_STAR_55561;
}}));
});
rewrite_clj.parser.core.parse_printables = (function rewrite_clj$parser$core$parse_printables(var_args){
var args__46353__auto__ = [];
var len__46346__auto___55570 = arguments.length;
var i__46347__auto___55571 = (0);
while(true){
if((i__46347__auto___55571 < len__46346__auto___55570)){
args__46353__auto__.push((arguments[i__46347__auto___55571]));

var G__55572 = (i__46347__auto___55571 + (1));
i__46347__auto___55571 = G__55572;
continue;
} else {
}
break;
}

var argseq__46354__auto__ = ((((3) < args__46353__auto__.length))?(new cljs.core.IndexedSeq(args__46353__auto__.slice((3)),(0),null)):null);
return rewrite_clj.parser.core.parse_printables.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__46354__auto__);
});

rewrite_clj.parser.core.parse_printables.cljs$core$IFn$_invoke$arity$variadic = (function (reader,node_tag,n,p__55566){
var vec__55567 = p__55566;
var ignore_QMARK_ = cljs.core.nth.call(null,vec__55567,(0),null);
if(cljs.core.truth_(ignore_QMARK_)){
rewrite_clj.reader.ignore.call(null,reader);
} else {
}

return rewrite_clj.reader.read_n.call(null,reader,node_tag,rewrite_clj.parser.core.parse_next,cljs.core.complement.call(null,rewrite_clj.node.printable_only_QMARK_),n);
});

rewrite_clj.parser.core.parse_printables.cljs$lang$maxFixedArity = (3);

rewrite_clj.parser.core.parse_printables.cljs$lang$applyTo = (function (seq55562){
var G__55563 = cljs.core.first.call(null,seq55562);
var seq55562__$1 = cljs.core.next.call(null,seq55562);
var G__55564 = cljs.core.first.call(null,seq55562__$1);
var seq55562__$2 = cljs.core.next.call(null,seq55562__$1);
var G__55565 = cljs.core.first.call(null,seq55562__$2);
var seq55562__$3 = cljs.core.next.call(null,seq55562__$2);
return rewrite_clj.parser.core.parse_printables.cljs$core$IFn$_invoke$arity$variadic(G__55563,G__55564,G__55565,seq55562__$3);
});

rewrite_clj.parser.core.parse_meta = (function rewrite_clj$parser$core$parse_meta(reader){
rewrite_clj.reader.ignore.call(null,reader);

return rewrite_clj.node.meta_node.call(null,rewrite_clj.parser.core.parse_printables.call(null,reader,new cljs.core.Keyword(null,"meta","meta",1499536964),(2)));
});
rewrite_clj.parser.core.parse_eof = (function rewrite_clj$parser$core$parse_eof(reader){
if(cljs.core.truth_(rewrite_clj.parser.core._STAR_delimiter_STAR_)){
return rewrite_clj.reader.throw_reader.call(null,reader,"Unexpected EOF.");
} else {
return null;
}
});
rewrite_clj.parser.core.parse_list = (function rewrite_clj$parser$core$parse_list(reader){
return rewrite_clj.node.list_node.call(null,rewrite_clj.parser.core.parse_delim.call(null,reader,")"));
});
rewrite_clj.parser.core.parse_vector = (function rewrite_clj$parser$core$parse_vector(reader){
return rewrite_clj.node.vector_node.call(null,rewrite_clj.parser.core.parse_delim.call(null,reader,"]"));
});
rewrite_clj.parser.core.parse_map = (function rewrite_clj$parser$core$parse_map(reader){
return rewrite_clj.node.map_node.call(null,rewrite_clj.parser.core.parse_delim.call(null,reader,"}"));
});
rewrite_clj.parser.core.parse_sharp = (function rewrite_clj$parser$core$parse_sharp(reader){
rewrite_clj.reader.ignore.call(null,reader);

var G__55574 = cljs.tools.reader.reader_types.peek_char.call(null,reader);
if(cljs.core._EQ_.call(null,null,G__55574)){
return rewrite_clj.reader.throw_reader.call(null,reader,"Unexpected EOF.");
} else {
if(cljs.core._EQ_.call(null,"{",G__55574)){
return rewrite_clj.node.set_node.call(null,rewrite_clj.parser.core.parse_delim.call(null,reader,"}"));
} else {
if(cljs.core._EQ_.call(null,"(",G__55574)){
return rewrite_clj.node.fn_node.call(null,rewrite_clj.parser.core.parse_delim.call(null,reader,")"));
} else {
if(cljs.core._EQ_.call(null,"\"",G__55574)){
return rewrite_clj.parser.string.parse_regex.call(null,reader);
} else {
if(cljs.core._EQ_.call(null,"^",G__55574)){
return rewrite_clj.node.meta_node.call(null,rewrite_clj.parser.core.parse_printables.call(null,reader,new cljs.core.Keyword(null,"meta","meta",1499536964),(2),true));
} else {
if(cljs.core._EQ_.call(null,"'",G__55574)){
return rewrite_clj.node.var_node.call(null,rewrite_clj.parser.core.parse_printables.call(null,reader,new cljs.core.Keyword(null,"var","var",-769682797),(1),true));
} else {
if(cljs.core._EQ_.call(null,"=",G__55574)){
return rewrite_clj.node.eval_node.call(null,rewrite_clj.parser.core.parse_printables.call(null,reader,new cljs.core.Keyword(null,"eval","eval",-1103567905),(1),true));
} else {
if(cljs.core._EQ_.call(null,"_",G__55574)){
return rewrite_clj.node.uneval_node.call(null,rewrite_clj.parser.core.parse_printables.call(null,reader,new cljs.core.Keyword(null,"uneval","uneval",1932037707),(1),true));
} else {
return rewrite_clj.node.reader_macro_node.call(null,rewrite_clj.parser.core.parse_printables.call(null,reader,new cljs.core.Keyword(null,"reader-macro","reader-macro",750056422),(2)));

}
}
}
}
}
}
}
}
});
rewrite_clj.parser.core.parse_unmatched = (function rewrite_clj$parser$core$parse_unmatched(reader){
return rewrite_clj.reader.throw_reader.call(null,reader,"Unmatched delimiter: %s",cljs.tools.reader.reader_types.peek_char.call(null,reader));
});
rewrite_clj.parser.core.parse_deref = (function rewrite_clj$parser$core$parse_deref(reader){
return rewrite_clj.node.deref_node.call(null,rewrite_clj.parser.core.parse_printables.call(null,reader,new cljs.core.Keyword(null,"deref","deref",-145586795),(1),true));
});
rewrite_clj.parser.core.parse_quote = (function rewrite_clj$parser$core$parse_quote(reader){
return rewrite_clj.node.quote_node.call(null,rewrite_clj.parser.core.parse_printables.call(null,reader,new cljs.core.Keyword(null,"quote","quote",-262615245),(1),true));
});
rewrite_clj.parser.core.parse_syntax_quote = (function rewrite_clj$parser$core$parse_syntax_quote(reader){
return rewrite_clj.node.syntax_quote_node.call(null,rewrite_clj.parser.core.parse_printables.call(null,reader,new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),(1),true));
});
rewrite_clj.parser.core.parse_unquote = (function rewrite_clj$parser$core$parse_unquote(reader){
rewrite_clj.reader.ignore.call(null,reader);

var c = cljs.tools.reader.reader_types.peek_char.call(null,reader);
if(cljs.core._EQ_.call(null,c,"@")){
return rewrite_clj.node.unquote_splicing_node.call(null,rewrite_clj.parser.core.parse_printables.call(null,reader,new cljs.core.Keyword(null,"unquote","unquote",1649741032),(1),true));
} else {
return rewrite_clj.node.unquote_node.call(null,rewrite_clj.parser.core.parse_printables.call(null,reader,new cljs.core.Keyword(null,"unquote","unquote",1649741032),(1)));
}
});
rewrite_clj.parser.core.parse_comment = (function rewrite_clj$parser$core$parse_comment(reader){
rewrite_clj.reader.ignore.call(null,reader);

return rewrite_clj.node.comment_node.call(null,rewrite_clj.reader.read_include_linebreak.call(null,reader));
});
rewrite_clj.parser.core.dispatch = (function rewrite_clj$parser$core$dispatch(c){
if((c == null)){
return rewrite_clj.parser.core.parse_eof;
} else {
if((c === rewrite_clj.parser.core._STAR_delimiter_STAR_)){
return rewrite_clj.reader.ignore;
} else {
if(rewrite_clj.reader.whitespace_QMARK_.call(null,c)){
return rewrite_clj.parser.whitespace.parse_whitespace;
} else {
if((c === "^")){
return rewrite_clj.parser.core.parse_meta;
} else {
if((c === "#")){
return rewrite_clj.parser.core.parse_sharp;
} else {
if((c === "(")){
return rewrite_clj.parser.core.parse_list;
} else {
if((c === "[")){
return rewrite_clj.parser.core.parse_vector;
} else {
if((c === "{")){
return rewrite_clj.parser.core.parse_map;
} else {
if((c === "}")){
return rewrite_clj.parser.core.parse_unmatched;
} else {
if((c === "]")){
return rewrite_clj.parser.core.parse_unmatched;
} else {
if((c === ")")){
return rewrite_clj.parser.core.parse_unmatched;
} else {
if((c === "~")){
return rewrite_clj.parser.core.parse_unquote;
} else {
if((c === "'")){
return rewrite_clj.parser.core.parse_quote;
} else {
if((c === "`")){
return rewrite_clj.parser.core.parse_syntax_quote;
} else {
if((c === ";")){
return rewrite_clj.parser.core.parse_comment;
} else {
if((c === "@")){
return rewrite_clj.parser.core.parse_deref;
} else {
if((c === "\"")){
return rewrite_clj.parser.string.parse_string;
} else {
if((c === ":")){
return rewrite_clj.parser.keyword.parse_keyword;
} else {
return rewrite_clj.parser.token.parse_token;

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
rewrite_clj.parser.core.parse_next = (function rewrite_clj$parser$core$parse_next(rdr){
return rewrite_clj.reader.read_with_meta.call(null,rdr,rewrite_clj.parser.core.dispatch.call(null,cljs.tools.reader.reader_types.peek_char.call(null,rdr)));
});

//# sourceMappingURL=core.js.map