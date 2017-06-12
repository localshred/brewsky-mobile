// Compiled by ClojureScript 1.9.542 {}
goog.provide('brewsky.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('cljs.spec.alpha');
goog.require('brewsky.db');
/**
 * Throw an exception if db doesn't have a valid spec.
 */
brewsky.events.check_and_throw = (function brewsky$events$check_and_throw(spec,db,p__50709){
var vec__50713 = p__50709;
var event = cljs.core.nth.call(null,vec__50713,(0),null);
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.call(null,spec,db))){
return null;
} else {
var explain_data = cljs.spec.alpha.explain_data.call(null,spec,db);
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Spec check after "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(event),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(explain_data)].join(''),explain_data);
}
});
brewsky.events.validate_spec = (cljs.core.truth_(goog.DEBUG)?re_frame.core.after.call(null,cljs.core.partial.call(null,brewsky.events.check_and_throw,new cljs.core.Keyword("brewsky.db","app-db","brewsky.db/app-db",-1685306705))):cljs.core.PersistentVector.EMPTY);
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),brewsky.events.validate_spec,(function (_,___$1){
return brewsky.db.app_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-greeting","set-greeting",-653540063),brewsky.events.validate_spec,(function (db,p__50716){
var vec__50717 = p__50716;
var _ = cljs.core.nth.call(null,vec__50717,(0),null);
var value = cljs.core.nth.call(null,vec__50717,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"greeting","greeting",462222107),value);
}));

//# sourceMappingURL=events.js.map