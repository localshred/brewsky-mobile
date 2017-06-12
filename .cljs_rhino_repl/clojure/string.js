// Compiled by ClojureScript 1.9.542 {}
goog.provide('clojure.string');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
clojure.string.seq_reverse = (function clojure$string$seq_reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
clojure.string.re_surrogate_pair = (new RegExp("([\\uD800-\\uDBFF])([\\uDC00-\\uDFFF])","g"));
/**
 * Returns s with its characters reversed.
 */
clojure.string.reverse = (function clojure$string$reverse(s){
return s.replace(clojure.string.re_surrogate_pair,"$2$1").split("").reverse().join("");
});
clojure.string.replace_all = (function clojure$string$replace_all(s,re,replacement){
var r = (new RegExp(re.source,(function (){var G__48731 = "g";
var G__48731__$1 = (cljs.core.truth_(re.ignoreCase)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48731),cljs.core.str.cljs$core$IFn$_invoke$arity$1("i")].join(''):G__48731);
var G__48731__$2 = (cljs.core.truth_(re.multiline)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48731__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("m")].join(''):G__48731__$1);
if(cljs.core.truth_(re.unicode)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48731__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1("u")].join('');
} else {
return G__48731__$2;
}
})()));
return s.replace(r,replacement);
});
clojure.string.replace_with = (function clojure$string$replace_with(f){
return (function() { 
var G__48732__delegate = function (args){
var matches = cljs.core.drop_last.call(null,(2),args);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches),(1))){
return f.call(null,cljs.core.first.call(null,matches));
} else {
return f.call(null,cljs.core.vec.call(null,matches));
}
};
var G__48732 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48733__i = 0, G__48733__a = new Array(arguments.length -  0);
while (G__48733__i < G__48733__a.length) {G__48733__a[G__48733__i] = arguments[G__48733__i + 0]; ++G__48733__i;}
  args = new cljs.core.IndexedSeq(G__48733__a,0,null);
} 
return G__48732__delegate.call(this,args);};
G__48732.cljs$lang$maxFixedArity = 0;
G__48732.cljs$lang$applyTo = (function (arglist__48734){
var args = cljs.core.seq(arglist__48734);
return G__48732__delegate(args);
});
G__48732.cljs$core$IFn$_invoke$arity$variadic = G__48732__delegate;
return G__48732;
})()
;
});
/**
 * Replaces all instance of match with replacement in s.
 * match/replacement can be:
 * 
 * string / string
 * pattern / (string or function of match).
 */
clojure.string.replace = (function clojure$string$replace(s,match,replacement){
if(typeof match === 'string'){
return s.replace((new RegExp(goog.string.regExpEscape(match),"g")),replacement);
} else {
if((match instanceof RegExp)){
if(typeof replacement === 'string'){
return clojure.string.replace_all.call(null,s,match,replacement);
} else {
return clojure.string.replace_all.call(null,s,match,clojure.string.replace_with.call(null,replacement));
}
} else {
throw [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid match arg: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(match)].join('');

}
}
});
/**
 * Replaces the first instance of match with replacement in s.
 * match/replacement can be:
 * 
 * string / string
 * pattern / (string or function of match).
 */
clojure.string.replace_first = (function clojure$string$replace_first(s,match,replacement){
return s.replace(match,replacement);
});
/**
 * Returns a string of all elements in coll, as returned by (seq coll),
 *   separated by an optional separator.
 */
clojure.string.join = (function clojure$string$join(var_args){
var args48735 = [];
var len__46346__auto___48738 = arguments.length;
var i__46347__auto___48739 = (0);
while(true){
if((i__46347__auto___48739 < len__46346__auto___48738)){
args48735.push((arguments[i__46347__auto___48739]));

var G__48740 = (i__46347__auto___48739 + (1));
i__46347__auto___48739 = G__48740;
continue;
} else {
}
break;
}

var G__48737 = args48735.length;
switch (G__48737) {
case 1:
return clojure.string.join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.string.join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48735.length)].join('')));

}
});

clojure.string.join.cljs$core$IFn$_invoke$arity$1 = (function (coll){
var sb = (new goog.string.StringBuffer());
var coll__$1 = cljs.core.seq.call(null,coll);
while(true){
if(!((coll__$1 == null))){
var G__48742 = sb.append([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,coll__$1))].join(''));
var G__48743 = cljs.core.next.call(null,coll__$1);
sb = G__48742;
coll__$1 = G__48743;
continue;
} else {
return sb.toString();
}
break;
}
});

clojure.string.join.cljs$core$IFn$_invoke$arity$2 = (function (separator,coll){
var sb = (new goog.string.StringBuffer());
var coll__$1 = cljs.core.seq.call(null,coll);
while(true){
if(!((coll__$1 == null))){
sb.append([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,coll__$1))].join(''));

var coll__$2 = cljs.core.next.call(null,coll__$1);
if((coll__$2 == null)){
} else {
sb.append(separator);
}

var G__48744 = sb;
var G__48745 = coll__$2;
sb = G__48744;
coll__$1 = G__48745;
continue;
} else {
return sb.toString();
}
break;
}
});

clojure.string.join.cljs$lang$maxFixedArity = 2;

/**
 * Converts string to all upper-case.
 */
clojure.string.upper_case = (function clojure$string$upper_case(s){
return s.toUpperCase();
});
/**
 * Converts string to all lower-case.
 */
clojure.string.lower_case = (function clojure$string$lower_case(s){
return s.toLowerCase();
});
/**
 * Converts first character of the string to upper-case, all other
 *   characters to lower-case.
 */
clojure.string.capitalize = (function clojure$string$capitalize(s){
if((cljs.core.count.call(null,s) < (2))){
return clojure.string.upper_case.call(null,s);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case.call(null,cljs.core.subs.call(null,s,(0),(1)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case.call(null,cljs.core.subs.call(null,s,(1))))].join('');
}
});
clojure.string.pop_last_while_empty = (function clojure$string$pop_last_while_empty(v){
var v__$1 = v;
while(true){
if(("" === cljs.core.peek.call(null,v__$1))){
var G__48746 = cljs.core.pop.call(null,v__$1);
v__$1 = G__48746;
continue;
} else {
return v__$1;
}
break;
}
});
clojure.string.discard_trailing_if_needed = (function clojure$string$discard_trailing_if_needed(limit,v){
if((((0) === limit)) && (((1) < cljs.core.count.call(null,v)))){
return clojure.string.pop_last_while_empty.call(null,v);
} else {
return v;
}
});
clojure.string.split_with_empty_regex = (function clojure$string$split_with_empty_regex(s,limit){
if(((limit <= (0))) || ((limit >= ((2) + cljs.core.count.call(null,s))))){
return cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,"",cljs.core.map.call(null,cljs.core.str,cljs.core.seq.call(null,s)))),"");
} else {
var pred__48750 = cljs.core._EQ__EQ_;
var expr__48751 = limit;
if(cljs.core.truth_(pred__48750.call(null,(1),expr__48751))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[s],null));
} else {
if(cljs.core.truth_(pred__48750.call(null,(2),expr__48751))){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,["",s],null));
} else {
var c = (limit - (2));
return cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,"",cljs.core.subvec.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.str,cljs.core.seq.call(null,s))),(0),c))),cljs.core.subs.call(null,s,c));
}
}
}
});
/**
 * Splits string on a regular expression. Optional argument limit is
 *   the maximum number of splits. Not lazy. Returns vector of the splits.
 */
clojure.string.split = (function clojure$string$split(var_args){
var args48753 = [];
var len__46346__auto___48756 = arguments.length;
var i__46347__auto___48757 = (0);
while(true){
if((i__46347__auto___48757 < len__46346__auto___48756)){
args48753.push((arguments[i__46347__auto___48757]));

var G__48758 = (i__46347__auto___48757 + (1));
i__46347__auto___48757 = G__48758;
continue;
} else {
}
break;
}

var G__48755 = args48753.length;
switch (G__48755) {
case 2:
return clojure.string.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.string.split.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48753.length)].join('')));

}
});

clojure.string.split.cljs$core$IFn$_invoke$arity$2 = (function (s,re){
return clojure.string.split.call(null,s,re,(0));
});

clojure.string.split.cljs$core$IFn$_invoke$arity$3 = (function (s,re,limit){
return clojure.string.discard_trailing_if_needed.call(null,limit,((("/(?:)/" === [cljs.core.str.cljs$core$IFn$_invoke$arity$1(re)].join('')))?clojure.string.split_with_empty_regex.call(null,s,limit):(((limit < (1)))?cljs.core.vec.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('').split(re)):(function (){var s__$1 = s;
var limit__$1 = limit;
var parts = cljs.core.PersistentVector.EMPTY;
while(true){
if(((1) === limit__$1)){
return cljs.core.conj.call(null,parts,s__$1);
} else {
var m = cljs.core.re_find.call(null,re,s__$1);
if(!((m == null))){
var index = s__$1.indexOf(m);
var G__48760 = s__$1.substring((index + cljs.core.count.call(null,m)));
var G__48761 = (limit__$1 - (1));
var G__48762 = cljs.core.conj.call(null,parts,s__$1.substring((0),index));
s__$1 = G__48760;
limit__$1 = G__48761;
parts = G__48762;
continue;
} else {
return cljs.core.conj.call(null,parts,s__$1);
}
}
break;
}
})())));
});

clojure.string.split.cljs$lang$maxFixedArity = 3;

/**
 * Splits s on 
 *  or 
 * .
 */
clojure.string.split_lines = (function clojure$string$split_lines(s){
return clojure.string.split.call(null,s,/\n|\r\n/);
});
/**
 * Removes whitespace from both ends of string.
 */
clojure.string.trim = (function clojure$string$trim(s){
return goog.string.trim(s);
});
/**
 * Removes whitespace from the left side of string.
 */
clojure.string.triml = (function clojure$string$triml(s){
return goog.string.trimLeft(s);
});
/**
 * Removes whitespace from the right side of string.
 */
clojure.string.trimr = (function clojure$string$trimr(s){
return goog.string.trimRight(s);
});
/**
 * Removes all trailing newline \n or return \r characters from
 *   string.  Similar to Perl's chomp.
 */
clojure.string.trim_newline = (function clojure$string$trim_newline(s){
var index = s.length;
while(true){
if((index === (0))){
return "";
} else {
var ch = cljs.core.get.call(null,s,(index - (1)));
if((("\n" === ch)) || (("\r" === ch))){
var G__48763 = (index - (1));
index = G__48763;
continue;
} else {
return s.substring((0),index);
}
}
break;
}
});
/**
 * True is s is nil, empty, or contains only whitespace.
 */
clojure.string.blank_QMARK_ = (function clojure$string$blank_QMARK_(s){
return goog.string.isEmptySafe(s);
});
/**
 * Return a new string, using cmap to escape each character ch
 * from s as follows:
 * 
 * If (cmap ch) is nil, append ch to the new string.
 * If (cmap ch) is non-nil, append (str (cmap ch)) instead.
 */
clojure.string.escape = (function clojure$string$escape(s,cmap){
var buffer = (new goog.string.StringBuffer());
var length = s.length;
var index = (0);
while(true){
if((length === index)){
return buffer.toString();
} else {
var ch = s.charAt(index);
var replacement = cljs.core.get.call(null,cmap,ch);
if(!((replacement == null))){
buffer.append([cljs.core.str.cljs$core$IFn$_invoke$arity$1(replacement)].join(''));
} else {
buffer.append(ch);
}

var G__48764 = (index + (1));
index = G__48764;
continue;
}
break;
}
});
/**
 * Return index of value (string or char) in s, optionally searching
 *   forward from from-index or nil if not found.
 */
clojure.string.index_of = (function clojure$string$index_of(var_args){
var args48765 = [];
var len__46346__auto___48768 = arguments.length;
var i__46347__auto___48769 = (0);
while(true){
if((i__46347__auto___48769 < len__46346__auto___48768)){
args48765.push((arguments[i__46347__auto___48769]));

var G__48770 = (i__46347__auto___48769 + (1));
i__46347__auto___48769 = G__48770;
continue;
} else {
}
break;
}

var G__48767 = args48765.length;
switch (G__48767) {
case 2:
return clojure.string.index_of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.string.index_of.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48765.length)].join('')));

}
});

clojure.string.index_of.cljs$core$IFn$_invoke$arity$2 = (function (s,value){
var result = s.indexOf(value);
if((result < (0))){
return null;
} else {
return result;
}
});

clojure.string.index_of.cljs$core$IFn$_invoke$arity$3 = (function (s,value,from_index){
var result = s.indexOf(value,from_index);
if((result < (0))){
return null;
} else {
return result;
}
});

clojure.string.index_of.cljs$lang$maxFixedArity = 3;

/**
 * Return last index of value (string or char) in s, optionally
 *   searching backward from from-index or nil if not found.
 */
clojure.string.last_index_of = (function clojure$string$last_index_of(var_args){
var args48772 = [];
var len__46346__auto___48775 = arguments.length;
var i__46347__auto___48776 = (0);
while(true){
if((i__46347__auto___48776 < len__46346__auto___48775)){
args48772.push((arguments[i__46347__auto___48776]));

var G__48777 = (i__46347__auto___48776 + (1));
i__46347__auto___48776 = G__48777;
continue;
} else {
}
break;
}

var G__48774 = args48772.length;
switch (G__48774) {
case 2:
return clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48772.length)].join('')));

}
});

clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2 = (function (s,value){
var result = s.lastIndexOf(value);
if((result < (0))){
return null;
} else {
return result;
}
});

clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$3 = (function (s,value,from_index){
var result = s.lastIndexOf(value,from_index);
if((result < (0))){
return null;
} else {
return result;
}
});

clojure.string.last_index_of.cljs$lang$maxFixedArity = 3;

/**
 * True if s starts with substr.
 */
clojure.string.starts_with_QMARK_ = (function clojure$string$starts_with_QMARK_(s,substr){
return goog.string.startsWith(s,substr);
});
/**
 * True if s ends with substr.
 */
clojure.string.ends_with_QMARK_ = (function clojure$string$ends_with_QMARK_(s,substr){
return goog.string.endsWith(s,substr);
});
/**
 * True if s includes substr.
 */
clojure.string.includes_QMARK_ = (function clojure$string$includes_QMARK_(s,substr){
return goog.string.contains(s,substr);
});

//# sourceMappingURL=string.js.map