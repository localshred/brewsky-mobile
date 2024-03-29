// Compiled by ClojureScript 1.9.542 {}
goog.provide('cljfmt.core');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.zip');
goog.require('clojure.string');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.parser');
goog.require('rewrite_clj.zip');
goog.require('rewrite_clj.zip.base');
goog.require('rewrite_clj.zip.whitespace');
cljfmt.core.zwhitespace_QMARK_ = rewrite_clj.zip.whitespace.whitespace_QMARK_;
cljfmt.core.zlinebreak_QMARK_ = rewrite_clj.zip.whitespace.linebreak_QMARK_;
cljfmt.core.includes_QMARK_ = clojure.string.includes_QMARK_;
cljfmt.core.edit_all = (function cljfmt$core$edit_all(zloc,p_QMARK_,f){
var zloc__$1 = (cljs.core.truth_(p_QMARK_.call(null,zloc))?f.call(null,zloc):zloc);
while(true){
var temp__6736__auto__ = rewrite_clj.zip.find_next.call(null,zloc__$1,clojure.zip.next,p_QMARK_);
if(cljs.core.truth_(temp__6736__auto__)){
var zloc__$2 = temp__6736__auto__;
var G__54289 = f.call(null,zloc__$2);
zloc__$1 = G__54289;
continue;
} else {
return zloc__$1;
}
break;
}
});
cljfmt.core.transform = (function cljfmt$core$transform(var_args){
var args__46353__auto__ = [];
var len__46346__auto___54293 = arguments.length;
var i__46347__auto___54294 = (0);
while(true){
if((i__46347__auto___54294 < len__46346__auto___54293)){
args__46353__auto__.push((arguments[i__46347__auto___54294]));

var G__54295 = (i__46347__auto___54294 + (1));
i__46347__auto___54294 = G__54295;
continue;
} else {
}
break;
}

var argseq__46354__auto__ = ((((2) < args__46353__auto__.length))?(new cljs.core.IndexedSeq(args__46353__auto__.slice((2)),(0),null)):null);
return cljfmt.core.transform.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__46354__auto__);
});

cljfmt.core.transform.cljs$core$IFn$_invoke$arity$variadic = (function (form,zf,args){
return rewrite_clj.zip.root.call(null,cljs.core.apply.call(null,zf,rewrite_clj.zip.base.edn.call(null,form),args));
});

cljfmt.core.transform.cljs$lang$maxFixedArity = (2);

cljfmt.core.transform.cljs$lang$applyTo = (function (seq54290){
var G__54291 = cljs.core.first.call(null,seq54290);
var seq54290__$1 = cljs.core.next.call(null,seq54290);
var G__54292 = cljs.core.first.call(null,seq54290__$1);
var seq54290__$2 = cljs.core.next.call(null,seq54290__$1);
return cljfmt.core.transform.cljs$core$IFn$_invoke$arity$variadic(G__54291,G__54292,seq54290__$2);
});

cljfmt.core.surrounding_QMARK_ = (function cljfmt$core$surrounding_QMARK_(zloc,p_QMARK_){
var and__45113__auto__ = p_QMARK_.call(null,zloc);
if(cljs.core.truth_(and__45113__auto__)){
return ((clojure.zip.left.call(null,zloc) == null)) || ((rewrite_clj.zip.whitespace.skip.call(null,clojure.zip.right,p_QMARK_,zloc) == null));
} else {
return and__45113__auto__;
}
});
cljfmt.core.top_QMARK_ = (function cljfmt$core$top_QMARK_(zloc){
var and__45113__auto__ = zloc;
if(cljs.core.truth_(and__45113__auto__)){
return cljs.core.not_EQ_.call(null,rewrite_clj.zip.node.call(null,zloc),rewrite_clj.zip.root.call(null,zloc));
} else {
return and__45113__auto__;
}
});
cljfmt.core.surrounding_whitespace_QMARK_ = (function cljfmt$core$surrounding_whitespace_QMARK_(zloc){
var and__45113__auto__ = cljfmt.core.top_QMARK_.call(null,rewrite_clj.zip.up.call(null,zloc));
if(cljs.core.truth_(and__45113__auto__)){
return cljfmt.core.surrounding_QMARK_.call(null,zloc,cljfmt.core.zwhitespace_QMARK_);
} else {
return and__45113__auto__;
}
});
cljfmt.core.remove_surrounding_whitespace = (function cljfmt$core$remove_surrounding_whitespace(form){
return cljfmt.core.transform.call(null,form,cljfmt.core.edit_all,cljfmt.core.surrounding_whitespace_QMARK_,clojure.zip.remove);
});
cljfmt.core.element_QMARK_ = (function cljfmt$core$element_QMARK_(zloc){
if(cljs.core.truth_(zloc)){
return cljs.core.not.call(null,rewrite_clj.zip.whitespace.whitespace_or_comment_QMARK_.call(null,zloc));
} else {
return null;
}
});
cljfmt.core.missing_whitespace_QMARK_ = (function cljfmt$core$missing_whitespace_QMARK_(zloc){
var and__45113__auto__ = cljfmt.core.element_QMARK_.call(null,zloc);
if(cljs.core.truth_(and__45113__auto__)){
return cljfmt.core.element_QMARK_.call(null,clojure.zip.right.call(null,zloc));
} else {
return and__45113__auto__;
}
});
cljfmt.core.insert_missing_whitespace = (function cljfmt$core$insert_missing_whitespace(form){
return cljfmt.core.transform.call(null,form,cljfmt.core.edit_all,cljfmt.core.missing_whitespace_QMARK_,rewrite_clj.zip.whitespace.append_space);
});
cljfmt.core.whitespace_QMARK_ = (function cljfmt$core$whitespace_QMARK_(zloc){
return cljs.core._EQ_.call(null,rewrite_clj.zip.tag.call(null,zloc),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483));
});
cljfmt.core.comment_QMARK_ = (function cljfmt$core$comment_QMARK_(zloc){
var G__54297 = zloc;
var G__54297__$1 = (((G__54297 == null))?null:rewrite_clj.zip.node.call(null,G__54297));
if((G__54297__$1 == null)){
return null;
} else {
return rewrite_clj.node.comment_QMARK_.call(null,G__54297__$1);
}
});
cljfmt.core.line_break_QMARK_ = (function cljfmt$core$line_break_QMARK_(zloc){
var or__45125__auto__ = cljfmt.core.zlinebreak_QMARK_.call(null,zloc);
if(cljs.core.truth_(or__45125__auto__)){
return or__45125__auto__;
} else {
return cljfmt.core.comment_QMARK_.call(null,zloc);
}
});
cljfmt.core.skip_whitespace = (function cljfmt$core$skip_whitespace(zloc){
return rewrite_clj.zip.whitespace.skip.call(null,clojure.zip.next,cljfmt.core.whitespace_QMARK_,zloc);
});
cljfmt.core.count_newlines = (function cljfmt$core$count_newlines(zloc){
var zloc__$1 = zloc;
var newlines = (0);
while(true){
if(cljs.core.truth_(cljfmt.core.zlinebreak_QMARK_.call(null,zloc__$1))){
var G__54298 = cljfmt.core.skip_whitespace.call(null,clojure.zip.next.call(null,zloc__$1));
var G__54299 = (cljs.core.count.call(null,rewrite_clj.zip.string.call(null,zloc__$1)) + newlines);
zloc__$1 = G__54298;
newlines = G__54299;
continue;
} else {
return newlines;
}
break;
}
});
cljfmt.core.consecutive_blank_line_QMARK_ = (function cljfmt$core$consecutive_blank_line_QMARK_(zloc){
return (cljfmt.core.count_newlines.call(null,zloc) > (2));
});
cljfmt.core.remove_whitespace_and_newlines = (function cljfmt$core$remove_whitespace_and_newlines(zloc){
while(true){
if(cljs.core.truth_(cljfmt.core.zwhitespace_QMARK_.call(null,zloc))){
var G__54300 = clojure.zip.remove.call(null,zloc);
zloc = G__54300;
continue;
} else {
return zloc;
}
break;
}
});
cljfmt.core.replace_consecutive_blank_lines = (function cljfmt$core$replace_consecutive_blank_lines(zloc){
return cljfmt.core.remove_whitespace_and_newlines.call(null,clojure.zip.next.call(null,clojure.zip.replace.call(null,zloc,rewrite_clj.node.newlines.call(null,(2)))));
});
cljfmt.core.remove_consecutive_blank_lines = (function cljfmt$core$remove_consecutive_blank_lines(form){
return cljfmt.core.transform.call(null,form,cljfmt.core.edit_all,cljfmt.core.consecutive_blank_line_QMARK_,cljfmt.core.replace_consecutive_blank_lines);
});
cljfmt.core.indentation_QMARK_ = (function cljfmt$core$indentation_QMARK_(zloc){
var and__45113__auto__ = cljfmt.core.line_break_QMARK_.call(null,clojure.zip.prev.call(null,zloc));
if(cljs.core.truth_(and__45113__auto__)){
return cljfmt.core.whitespace_QMARK_.call(null,zloc);
} else {
return and__45113__auto__;
}
});
cljfmt.core.comment_next_QMARK_ = (function cljfmt$core$comment_next_QMARK_(zloc){
return cljfmt.core.comment_QMARK_.call(null,cljfmt.core.skip_whitespace.call(null,clojure.zip.next.call(null,zloc)));
});
cljfmt.core.line_break_next_QMARK_ = (function cljfmt$core$line_break_next_QMARK_(zloc){
return cljfmt.core.line_break_QMARK_.call(null,cljfmt.core.skip_whitespace.call(null,clojure.zip.next.call(null,zloc)));
});
cljfmt.core.should_indent_QMARK_ = (function cljfmt$core$should_indent_QMARK_(zloc){
var and__45113__auto__ = cljfmt.core.line_break_QMARK_.call(null,zloc);
if(cljs.core.truth_(and__45113__auto__)){
return cljs.core.not.call(null,cljfmt.core.line_break_next_QMARK_.call(null,zloc));
} else {
return and__45113__auto__;
}
});
cljfmt.core.should_unindent_QMARK_ = (function cljfmt$core$should_unindent_QMARK_(zloc){
var and__45113__auto__ = cljfmt.core.indentation_QMARK_.call(null,zloc);
if(cljs.core.truth_(and__45113__auto__)){
return cljs.core.not.call(null,cljfmt.core.comment_next_QMARK_.call(null,zloc));
} else {
return and__45113__auto__;
}
});
cljfmt.core.unindent = (function cljfmt$core$unindent(form){
return cljfmt.core.transform.call(null,form,cljfmt.core.edit_all,cljfmt.core.should_unindent_QMARK_,clojure.zip.remove);
});
cljfmt.core.start_element = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),new cljs.core.Keyword(null,"reader-macro","reader-macro",750056422),new cljs.core.Keyword(null,"unquote","unquote",1649741032),new cljs.core.Keyword(null,"meta*","meta*",-949431606),new cljs.core.Keyword(null,"uneval","uneval",1932037707),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"quote","quote",-262615245),new cljs.core.Keyword(null,"deref","deref",-145586795),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"eval","eval",-1103567905)],["#(","^","~@","#","~","#^","#_","[","`","(","#'","'","@","#{","{","#="]);
cljfmt.core.prior_line_string = (function cljfmt$core$prior_line_string(zloc){
var zloc__$1 = zloc;
var worklist = cljs.core.List.EMPTY;
while(true){
var temp__6736__auto__ = clojure.zip.left.call(null,zloc__$1);
if(cljs.core.truth_(temp__6736__auto__)){
var p = temp__6736__auto__;
var s = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_clj.node.string.call(null,rewrite_clj.zip.node.call(null,p)))].join('');
var new_worklist = cljs.core.cons.call(null,s,worklist);
if(cljs.core.not.call(null,cljfmt.core.includes_QMARK_.call(null,s,"\n"))){
var G__54301 = p;
var G__54302 = new_worklist;
zloc__$1 = G__54301;
worklist = G__54302;
continue;
} else {
return cljs.core.apply.call(null,cljs.core.str,new_worklist);
}
} else {
var temp__6736__auto____$1 = clojure.zip.up.call(null,zloc__$1);
if(cljs.core.truth_(temp__6736__auto____$1)){
var p = temp__6736__auto____$1;
var G__54303 = p;
var G__54304 = cljs.core.cons.call(null,cljfmt.core.start_element.call(null,rewrite_clj.node.tag.call(null,rewrite_clj.zip.node.call(null,p))),worklist);
zloc__$1 = G__54303;
worklist = G__54304;
continue;
} else {
return cljs.core.apply.call(null,cljs.core.str,worklist);
}
}
break;
}
});
cljfmt.core.last_line_in_string = (function cljfmt$core$last_line_in_string(s){
return cljs.core.subs.call(null,s,(s.lastIndexOf("\n") + (1)));
});
cljfmt.core.margin = (function cljfmt$core$margin(zloc){
return cljs.core.count.call(null,cljfmt.core.last_line_in_string.call(null,cljfmt.core.prior_line_string.call(null,zloc)));
});
cljfmt.core.whitespace = (function cljfmt$core$whitespace(width){
return rewrite_clj.node.whitespace_node.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,width," ")));
});
cljfmt.core.coll_indent = (function cljfmt$core$coll_indent(zloc){
return cljfmt.core.margin.call(null,clojure.zip.leftmost.call(null,zloc));
});
cljfmt.core.index_of = (function cljfmt$core$index_of(zloc){
return (cljs.core.count.call(null,cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,rewrite_clj.zip.left,zloc))) - (1));
});
cljfmt.core.list_indent = (function cljfmt$core$list_indent(zloc){
if((cljfmt.core.index_of.call(null,zloc) > (1))){
return cljfmt.core.margin.call(null,rewrite_clj.zip.right.call(null,clojure.zip.leftmost.call(null,zloc)));
} else {
return cljfmt.core.coll_indent.call(null,zloc);
}
});
cljfmt.core.indent_size = (2);
cljfmt.core.indent_width = (function cljfmt$core$indent_width(zloc){
var G__54306 = rewrite_clj.zip.tag.call(null,zloc);
var G__54306__$1 = (((G__54306 instanceof cljs.core.Keyword))?G__54306.fqn:null);
switch (G__54306__$1) {
case "list":
return cljfmt.core.indent_size;

break;
case "fn":
return (cljfmt.core.indent_size + (1));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_clj.zip.tag.call(null,zloc))].join('')));

}
});
cljfmt.core.remove_namespace = (function cljfmt$core$remove_namespace(x){
if((x instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,cljs.core.name.call(null,x));
} else {
return x;
}
});
cljfmt.core.pattern_QMARK_ = (function cljfmt$core$pattern_QMARK_(v){
return (v instanceof RegExp);
});
cljfmt.core.indent_matches_QMARK_ = (function cljfmt$core$indent_matches_QMARK_(key,sym){
if((key instanceof cljs.core.Symbol)){
return cljs.core._EQ_.call(null,key,sym);
} else {
if(cljs.core.truth_(cljfmt.core.pattern_QMARK_.call(null,key))){
return cljs.core.re_find.call(null,key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
} else {
return null;
}
}
});
cljfmt.core.token_QMARK_ = (function cljfmt$core$token_QMARK_(zloc){
return cljs.core._EQ_.call(null,rewrite_clj.zip.tag.call(null,zloc),new cljs.core.Keyword(null,"token","token",-1211463215));
});
cljfmt.core.token_value = (function cljfmt$core$token_value(zloc){
if(cljs.core.truth_(cljfmt.core.token_QMARK_.call(null,zloc))){
return rewrite_clj.zip.sexpr.call(null,zloc);
} else {
return null;
}
});
cljfmt.core.form_symbol = (function cljfmt$core$form_symbol(zloc){
return cljfmt.core.remove_namespace.call(null,cljfmt.core.token_value.call(null,rewrite_clj.zip.leftmost.call(null,zloc)));
});
cljfmt.core.index_matches_top_argument_QMARK_ = (function cljfmt$core$index_matches_top_argument_QMARK_(zloc,depth,idx){
return ((depth > (0))) && (cljs.core._EQ_.call(null,idx,cljfmt.core.index_of.call(null,cljs.core.nth.call(null,cljs.core.iterate.call(null,rewrite_clj.zip.up,zloc),(depth - (1))))));
});
cljfmt.core.inner_indent = (function cljfmt$core$inner_indent(zloc,key,depth,idx){
var top = cljs.core.nth.call(null,cljs.core.iterate.call(null,rewrite_clj.zip.up,zloc),depth);
if(cljs.core.truth_((function (){var and__45113__auto__ = cljfmt.core.indent_matches_QMARK_.call(null,key,cljfmt.core.form_symbol.call(null,top));
if(cljs.core.truth_(and__45113__auto__)){
var or__45125__auto__ = (idx == null);
if(or__45125__auto__){
return or__45125__auto__;
} else {
return cljfmt.core.index_matches_top_argument_QMARK_.call(null,zloc,depth,idx);
}
} else {
return and__45113__auto__;
}
})())){
var zup = rewrite_clj.zip.up.call(null,zloc);
return (cljfmt.core.margin.call(null,zup) + cljfmt.core.indent_width.call(null,zup));
} else {
return null;
}
});
cljfmt.core.nth_form = (function cljfmt$core$nth_form(zloc,n){
return cljs.core.reduce.call(null,(function (z,f){
if(cljs.core.truth_(z)){
return f.call(null,z);
} else {
return null;
}
}),rewrite_clj.zip.leftmost.call(null,zloc),cljs.core.repeat.call(null,n,rewrite_clj.zip.right));
});
cljfmt.core.first_form_in_line_QMARK_ = (function cljfmt$core$first_form_in_line_QMARK_(zloc){
while(true){
var temp__6736__auto__ = clojure.zip.left.call(null,zloc);
if(cljs.core.truth_(temp__6736__auto__)){
var zloc__$1 = temp__6736__auto__;
if(cljs.core.truth_(cljfmt.core.whitespace_QMARK_.call(null,zloc__$1))){
var G__54308 = zloc__$1;
zloc = G__54308;
continue;
} else {
var or__45125__auto__ = cljfmt.core.zlinebreak_QMARK_.call(null,zloc__$1);
if(cljs.core.truth_(or__45125__auto__)){
return or__45125__auto__;
} else {
return cljfmt.core.comment_QMARK_.call(null,zloc__$1);
}
}
} else {
return true;
}
break;
}
});
cljfmt.core.block_indent = (function cljfmt$core$block_indent(zloc,key,idx){
if(cljs.core.truth_(cljfmt.core.indent_matches_QMARK_.call(null,key,cljfmt.core.form_symbol.call(null,zloc)))){
if(cljs.core.truth_((function (){var and__45113__auto__ = (function (){var G__54312 = zloc;
var G__54312__$1 = (((G__54312 == null))?null:cljfmt.core.nth_form.call(null,G__54312,(idx + (1))));
if((G__54312__$1 == null)){
return null;
} else {
return cljfmt.core.first_form_in_line_QMARK_.call(null,G__54312__$1);
}
})();
if(cljs.core.truth_(and__45113__auto__)){
return (cljfmt.core.index_of.call(null,zloc) > idx);
} else {
return and__45113__auto__;
}
})())){
return cljfmt.core.inner_indent.call(null,zloc,key,(0),null);
} else {
return cljfmt.core.list_indent.call(null,zloc);
}
} else {
return null;
}
});
cljfmt.core.default_indents = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"are","are",1713001856,null),new cljs.core.Symbol(null,"when-first","when-first",821699168,null),new cljs.core.Symbol(null,"cond->>","cond->>",348844960,null),new cljs.core.Symbol(null,"while","while",-1691317983,null),new cljs.core.Symbol(null,"try","try",-1273693247,null),new cljs.core.Symbol(null,"bound-fn","bound-fn",125411266,null),new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"testing","testing",-1492767066,null),new cljs.core.Symbol(null,"if-not","if-not",-265415609,null),new cljs.core.Symbol(null,"doseq","doseq",221164135,null),new cljs.core.Symbol(null,"finally","finally",-1065347064,null),new cljs.core.Symbol(null,"deftype","deftype",1980826088,null),new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.Symbol(null,"go","go",1493584872,null),new cljs.core.Symbol(null,"if-some","if-some",1960677609,null),new cljs.core.Symbol(null,"with-precision","with-precision",393049897,null),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Symbol(null,"defstruct","defstruct",-506568086,null),new cljs.core.Symbol(null,"doto","doto",1252536074,null),new cljs.core.Symbol(null,"future","future",-776593045,null),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"alt!","alt!",1759993452,null),new cljs.core.Symbol(null,"do","do",1686842252,null),new cljs.core.Symbol(null,"when-not","when-not",-1223136340,null),new cljs.core.Symbol(null,"when","when",1064114221,null),new cljs.core.Symbol(null,"extend","extend",-817951763,null),new cljs.core.Symbol(null,"go-loop","go-loop",692273294,null),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"deftest","deftest",938248815,null),new cljs.core.Symbol(null,"extend-type","extend-type",1123355921,null),new cljs.core.Symbol(null,"defmethod","defmethod",-579171823,null),new cljs.core.Symbol(null,"struct-map","struct-map",-1387540878,null),new cljs.core.Symbol(null,"extend-protocol","extend-protocol",306378578,null),new cljs.core.Symbol(null,"cond->","cond->",561741875,null),new cljs.core.Symbol(null,"dotimes","dotimes",-818708397,null),new cljs.core.Symbol(null,"reify","reify",1885539699,null),new cljs.core.Symbol(null,"with-open","with-open",172119667,null),new cljs.core.Symbol(null,"defonce","defonce",-1681484013,null),new cljs.core.Symbol(null,"defn-","defn-",1097765044,null),new cljs.core.Symbol(null,"alt!!","alt!!",662409428,null),new cljs.core.Symbol(null,"defprotocol","defprotocol",1388695348,null),new cljs.core.Symbol(null,"letfn","letfn",-480490827,null),new cljs.core.Symbol(null,"use-fixtures","use-fixtures",-1608548619,null),new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.Symbol(null,"with-out-str","with-out-str",-140201577,null),new cljs.core.Symbol(null,"condp","condp",1054325175,null),new cljs.core.Symbol(null,"cond","cond",1606708055,null),new cljs.core.Symbol(null,"for","for",316745208,null),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Symbol(null,"with-local-vars","with-local-vars",837642072,null),new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),new cljs.core.Symbol(null,"proxy","proxy",1523077913,null),new cljs.core.Symbol(null,"with-redefs","with-redefs",-1143728263,null),new cljs.core.Symbol(null,"locking","locking",1542862874,null),new cljs.core.Symbol(null,"defmulti","defmulti",1936112154,null),new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.Symbol(null,"case","case",-1510733573,null),new cljs.core.Symbol(null,"catch","catch",-1616370245,null),new cljs.core.Symbol(null,"thread","thread",-1707434245,null),new cljs.core.Symbol(null,"comment","comment",-2122229700,null),new cljs.core.Symbol(null,"defrecord","defrecord",273038109,null),new cljs.core.Symbol(null,"when-some","when-some",1700415903,null),new cljs.core.Symbol(null,"def","def",597100991,null)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(2),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null)]),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"defroutes","defroutes",-1310011104,null),new cljs.core.Symbol(null,"PUT","PUT",-201468416,null),new cljs.core.Symbol(null,"POST","POST",1750988384,null),new cljs.core.Symbol(null,"let-routes","let-routes",-376261774,null),new cljs.core.Symbol(null,"DELETE","DELETE",-965761997,null),new cljs.core.Symbol(null,"rfn","rfn",649648083,null),new cljs.core.Symbol(null,"ANY","ANY",1875082901,null),new cljs.core.Symbol(null,"GET","GET",-917844743,null),new cljs.core.Symbol(null,"HEAD","HEAD",1903810169,null),new cljs.core.Symbol(null,"PATCH","PATCH",-1233173284,null),new cljs.core.Symbol(null,"context","context",810340414,null),new cljs.core.Symbol(null,"OPTIONS","OPTIONS",742094783,null)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null)]),new cljs.core.PersistentArrayMap(null, 2, [/^def/,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),/^with-/,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null)], null));
if(typeof cljfmt.core.indenter_fn !== 'undefined'){
} else {
cljfmt.core.indenter_fn = (function (){var method_table__46156__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__46157__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__46158__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__46159__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__46160__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljfmt.core","indenter-fn"),((function (method_table__46156__auto__,prefer_table__46157__auto__,method_cache__46158__auto__,cached_hierarchy__46159__auto__,hierarchy__46160__auto__){
return (function (sym,p__54313){
var vec__54314 = p__54313;
var seq__54315 = cljs.core.seq.call(null,vec__54314);
var first__54316 = cljs.core.first.call(null,seq__54315);
var seq__54315__$1 = cljs.core.next.call(null,seq__54315);
var type = first__54316;
var args = seq__54315__$1;
return type;
});})(method_table__46156__auto__,prefer_table__46157__auto__,method_cache__46158__auto__,cached_hierarchy__46159__auto__,hierarchy__46160__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__46160__auto__,method_table__46156__auto__,prefer_table__46157__auto__,method_cache__46158__auto__,cached_hierarchy__46159__auto__));
})();
}
cljs.core._add_method.call(null,cljfmt.core.indenter_fn,new cljs.core.Keyword(null,"inner","inner",-1383171215),(function (sym,p__54317){
var vec__54318 = p__54317;
var _ = cljs.core.nth.call(null,vec__54318,(0),null);
var depth = cljs.core.nth.call(null,vec__54318,(1),null);
var idx = cljs.core.nth.call(null,vec__54318,(2),null);
return ((function (vec__54318,_,depth,idx){
return (function (zloc){
return cljfmt.core.inner_indent.call(null,zloc,sym,depth,idx);
});
;})(vec__54318,_,depth,idx))
}));
cljs.core._add_method.call(null,cljfmt.core.indenter_fn,new cljs.core.Keyword(null,"block","block",664686210),(function (sym,p__54321){
var vec__54322 = p__54321;
var _ = cljs.core.nth.call(null,vec__54322,(0),null);
var idx = cljs.core.nth.call(null,vec__54322,(1),null);
return ((function (vec__54322,_,idx){
return (function (zloc){
return cljfmt.core.block_indent.call(null,zloc,sym,idx);
});
;})(vec__54322,_,idx))
}));
cljfmt.core.make_indenter = (function cljfmt$core$make_indenter(p__54325){
var vec__54329 = p__54325;
var key = cljs.core.nth.call(null,vec__54329,(0),null);
var opts = cljs.core.nth.call(null,vec__54329,(1),null);
return cljs.core.apply.call(null,cljs.core.some_fn,cljs.core.map.call(null,cljs.core.partial.call(null,cljfmt.core.indenter_fn,key),opts));
});
cljfmt.core.indent_order = (function cljfmt$core$indent_order(p__54332){
var vec__54336 = p__54332;
var key = cljs.core.nth.call(null,vec__54336,(0),null);
var _ = cljs.core.nth.call(null,vec__54336,(1),null);
if((key instanceof cljs.core.Symbol)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
} else {
if(cljs.core.truth_(cljfmt.core.pattern_QMARK_.call(null,key))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
} else {
return null;
}
}
});
cljfmt.core.custom_indent = (function cljfmt$core$custom_indent(zloc,indents){
if(cljs.core.empty_QMARK_.call(null,indents)){
return cljfmt.core.list_indent.call(null,zloc);
} else {
var indenter = cljs.core.apply.call(null,cljs.core.some_fn,cljs.core.map.call(null,cljfmt.core.make_indenter,cljs.core.sort_by.call(null,cljfmt.core.indent_order,indents)));
var or__45125__auto__ = indenter.call(null,zloc);
if(cljs.core.truth_(or__45125__auto__)){
return or__45125__auto__;
} else {
return cljfmt.core.list_indent.call(null,zloc);
}
}
});
cljfmt.core.indent_amount = (function cljfmt$core$indent_amount(zloc,indents){
var G__54340 = rewrite_clj.zip.tag.call(null,rewrite_clj.zip.up.call(null,zloc));
var G__54340__$1 = (((G__54340 instanceof cljs.core.Keyword))?G__54340.fqn:null);
switch (G__54340__$1) {
case "list":
return cljfmt.core.custom_indent.call(null,zloc,indents);

break;
case "fn":
return cljfmt.core.custom_indent.call(null,zloc,indents);

break;
case "meta":
return cljfmt.core.indent_amount.call(null,rewrite_clj.zip.up.call(null,zloc),indents);

break;
default:
return cljfmt.core.coll_indent.call(null,zloc);

}
});
cljfmt.core.indent_line = (function cljfmt$core$indent_line(zloc,indents){
var width = cljfmt.core.indent_amount.call(null,zloc,indents);
if((width > (0))){
return clojure.zip.insert_right.call(null,zloc,cljfmt.core.whitespace.call(null,width));
} else {
return zloc;
}
});
cljfmt.core.indent = (function cljfmt$core$indent(var_args){
var args54343 = [];
var len__46346__auto___54346 = arguments.length;
var i__46347__auto___54347 = (0);
while(true){
if((i__46347__auto___54347 < len__46346__auto___54346)){
args54343.push((arguments[i__46347__auto___54347]));

var G__54348 = (i__46347__auto___54347 + (1));
i__46347__auto___54347 = G__54348;
continue;
} else {
}
break;
}

var G__54345 = args54343.length;
switch (G__54345) {
case 1:
return cljfmt.core.indent.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljfmt.core.indent.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args54343.length)].join('')));

}
});

cljfmt.core.indent.cljs$core$IFn$_invoke$arity$1 = (function (form){
return cljfmt.core.indent.call(null,form,cljfmt.core.default_indents);
});

cljfmt.core.indent.cljs$core$IFn$_invoke$arity$2 = (function (form,indents){
return cljfmt.core.transform.call(null,form,cljfmt.core.edit_all,cljfmt.core.should_indent_QMARK_,(function (p1__54342_SHARP_){
return cljfmt.core.indent_line.call(null,p1__54342_SHARP_,indents);
}));
});

cljfmt.core.indent.cljs$lang$maxFixedArity = 2;

cljfmt.core.reindent = (function cljfmt$core$reindent(var_args){
var args54350 = [];
var len__46346__auto___54353 = arguments.length;
var i__46347__auto___54354 = (0);
while(true){
if((i__46347__auto___54354 < len__46346__auto___54353)){
args54350.push((arguments[i__46347__auto___54354]));

var G__54355 = (i__46347__auto___54354 + (1));
i__46347__auto___54354 = G__54355;
continue;
} else {
}
break;
}

var G__54352 = args54350.length;
switch (G__54352) {
case 1:
return cljfmt.core.reindent.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljfmt.core.reindent.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args54350.length)].join('')));

}
});

cljfmt.core.reindent.cljs$core$IFn$_invoke$arity$1 = (function (form){
return cljfmt.core.indent.call(null,cljfmt.core.unindent.call(null,form));
});

cljfmt.core.reindent.cljs$core$IFn$_invoke$arity$2 = (function (form,indents){
return cljfmt.core.indent.call(null,cljfmt.core.unindent.call(null,form),indents);
});

cljfmt.core.reindent.cljs$lang$maxFixedArity = 2;

cljfmt.core.root_QMARK_ = (function cljfmt$core$root_QMARK_(zloc){
return (clojure.zip.up.call(null,zloc) == null);
});
cljfmt.core.final_QMARK_ = (function cljfmt$core$final_QMARK_(zloc){
var and__45113__auto__ = (clojure.zip.right.call(null,zloc) == null);
if(and__45113__auto__){
return cljfmt.core.root_QMARK_.call(null,clojure.zip.up.call(null,zloc));
} else {
return and__45113__auto__;
}
});
cljfmt.core.trailing_whitespace_QMARK_ = (function cljfmt$core$trailing_whitespace_QMARK_(zloc){
var and__45113__auto__ = cljfmt.core.whitespace_QMARK_.call(null,zloc);
if(cljs.core.truth_(and__45113__auto__)){
var or__45125__auto__ = cljfmt.core.zlinebreak_QMARK_.call(null,clojure.zip.right.call(null,zloc));
if(cljs.core.truth_(or__45125__auto__)){
return or__45125__auto__;
} else {
return cljfmt.core.final_QMARK_.call(null,zloc);
}
} else {
return and__45113__auto__;
}
});
cljfmt.core.remove_trailing_whitespace = (function cljfmt$core$remove_trailing_whitespace(form){
return cljfmt.core.transform.call(null,form,cljfmt.core.edit_all,cljfmt.core.trailing_whitespace_QMARK_,clojure.zip.remove);
});
cljfmt.core.reformat_form = (function cljfmt$core$reformat_form(var_args){
var args__46353__auto__ = [];
var len__46346__auto___54370 = arguments.length;
var i__46347__auto___54371 = (0);
while(true){
if((i__46347__auto___54371 < len__46346__auto___54370)){
args__46353__auto__.push((arguments[i__46347__auto___54371]));

var G__54372 = (i__46347__auto___54371 + (1));
i__46347__auto___54371 = G__54372;
continue;
} else {
}
break;
}

var argseq__46354__auto__ = ((((1) < args__46353__auto__.length))?(new cljs.core.IndexedSeq(args__46353__auto__.slice((1)),(0),null)):null);
return cljfmt.core.reformat_form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__46354__auto__);
});

cljfmt.core.reformat_form.cljs$core$IFn$_invoke$arity$variadic = (function (form,p__54359){
var vec__54360 = p__54359;
var map__54363 = cljs.core.nth.call(null,vec__54360,(0),null);
var map__54363__$1 = ((((!((map__54363 == null)))?((((map__54363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54363.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54363):map__54363);
var opts = map__54363__$1;
var G__54365 = (function (){var G__54366 = (function (){var G__54367 = (function (){var G__54368 = (function (){var G__54369 = form;
if(cljs.core.truth_(new cljs.core.Keyword(null,"remove-consecutive-blank-lines?","remove-consecutive-blank-lines?",982824512).cljs$core$IFn$_invoke$arity$2(opts,true))){
return cljfmt.core.remove_consecutive_blank_lines.call(null,G__54369);
} else {
return G__54369;
}
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"remove-surrounding-whitespace?","remove-surrounding-whitespace?",-2083582887).cljs$core$IFn$_invoke$arity$2(opts,true))){
return cljfmt.core.remove_surrounding_whitespace.call(null,G__54368);
} else {
return G__54368;
}
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"insert-missing-whitespace?","insert-missing-whitespace?",-1012188573).cljs$core$IFn$_invoke$arity$2(opts,true))){
return cljfmt.core.insert_missing_whitespace.call(null,G__54367);
} else {
return G__54367;
}
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"indentation?","indentation?",-649129482).cljs$core$IFn$_invoke$arity$2(opts,true))){
return cljfmt.core.reindent.call(null,G__54366,new cljs.core.Keyword(null,"indents","indents",-569647275).cljs$core$IFn$_invoke$arity$2(opts,cljfmt.core.default_indents));
} else {
return G__54366;
}
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"remove-trailing-whitespace?","remove-trailing-whitespace?",251206854).cljs$core$IFn$_invoke$arity$2(opts,true))){
return cljfmt.core.remove_trailing_whitespace.call(null,G__54365);
} else {
return G__54365;
}
});

cljfmt.core.reformat_form.cljs$lang$maxFixedArity = (1);

cljfmt.core.reformat_form.cljs$lang$applyTo = (function (seq54357){
var G__54358 = cljs.core.first.call(null,seq54357);
var seq54357__$1 = cljs.core.next.call(null,seq54357);
return cljfmt.core.reformat_form.cljs$core$IFn$_invoke$arity$variadic(G__54358,seq54357__$1);
});

cljfmt.core.reformat_string = (function cljfmt$core$reformat_string(var_args){
var args__46353__auto__ = [];
var len__46346__auto___54379 = arguments.length;
var i__46347__auto___54380 = (0);
while(true){
if((i__46347__auto___54380 < len__46346__auto___54379)){
args__46353__auto__.push((arguments[i__46347__auto___54380]));

var G__54381 = (i__46347__auto___54380 + (1));
i__46347__auto___54380 = G__54381;
continue;
} else {
}
break;
}

var argseq__46354__auto__ = ((((1) < args__46353__auto__.length))?(new cljs.core.IndexedSeq(args__46353__auto__.slice((1)),(0),null)):null);
return cljfmt.core.reformat_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__46354__auto__);
});

cljfmt.core.reformat_string.cljs$core$IFn$_invoke$arity$variadic = (function (form_string,p__54375){
var vec__54376 = p__54375;
var options = cljs.core.nth.call(null,vec__54376,(0),null);
return rewrite_clj.node.string.call(null,cljfmt.core.reformat_form.call(null,rewrite_clj.parser.parse_string_all.call(null,form_string),options));
});

cljfmt.core.reformat_string.cljs$lang$maxFixedArity = (1);

cljfmt.core.reformat_string.cljs$lang$applyTo = (function (seq54373){
var G__54374 = cljs.core.first.call(null,seq54373);
var seq54373__$1 = cljs.core.next.call(null,seq54373);
return cljfmt.core.reformat_string.cljs$core$IFn$_invoke$arity$variadic(G__54374,seq54373__$1);
});


//# sourceMappingURL=core.js.map