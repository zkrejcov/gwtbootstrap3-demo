function GwtBootstrap3Demo(){var Q='bootstrap',R='begin',S='gwt.codesvr.GwtBootstrap3Demo=',T='gwt.codesvr=',U='GwtBootstrap3Demo',V='startup',W='DUMMY',X=0,Y=1,Z='iframe',$='javascript:""',_='position:absolute; width:0; height:0; border:none; left: -1000px;',ab=' top: -1000px;',bb='CSS1Compat',cb='<!doctype html>',db='',eb='<html><head><\/head><body><\/body><\/html>',fb='undefined',gb='DOMContentLoaded',hb=50,ib='Chrome',jb='eval("',kb='");',lb='script',mb='javascript',nb='moduleStartup',ob='moduleRequested',pb='Failed to load ',qb='head',rb='meta',sb='name',tb='GwtBootstrap3Demo::',ub='::',vb='gwt:property',wb='content',xb='=',yb='gwt:onPropertyErrorFn',zb='Bad handler "',Ab='" for "gwt:onPropertyErrorFn"',Bb='gwt:onLoadErrorFn',Cb='" for "gwt:onLoadErrorFn"',Db='#',Eb='?',Fb='/',Gb='img',Hb='clear.cache.gif',Ib='baseUrl',Jb='GwtBootstrap3Demo.nocache.js',Kb='base',Lb='//',Mb='locale',Nb='en',Ob='locale=',Pb=7,Qb='&',Rb='__gwt_Locale',Sb='_',Tb='Unexpected exception in locale detection, using default: ',Ub=2,Vb='user.agent',Wb='webkit',Xb='safari',Yb='msie',Zb=10,$b=11,_b='ie10',ac=9,bc='ie9',cc=8,dc='ie8',ec='gecko',fc='gecko1_8',gc=3,hc=4,ic='selectingPermutation',jc='GwtBootstrap3Demo.devmode.js',kc='0B8BA27102FD41B7A351428E708F2931',lc='default',mc='1ABE0317AC1EBE390891ED5781CF8ACA',nc='416A6D2743FD9BA553E62854AB935BD7',oc='4A4730B35085A1AB75A3255C45D3B452',pc='fr',qc='4C25A6901B7ADD26080668F32C37B72D',rc='53CF7B49648D81D167DE0F001C1570BA',sc='7174A4F905F302AAA7B80446E192E0C6',tc='8E37868A942FEB4978B4E9D8D4292182',uc='98FA4A5A46498BEFB2BA99DF6EBD1F36',vc='9A2880CBD1B0D7EB3DC21E2C8F7CC829',wc='AFA739F6811AB05939587E6711FDC272',xc='CDF977F1F95AAD97749A084F09B0BEB9',yc='E80D1B6D9BEA7EEE95501DEC3DA94710',zc='F8D12017A77421590E51C1D13E852924',Ac='FD3D498E7889058631ECBF560968F618',Bc=':',Cc='.cache.js',Dc='link',Ec='rel',Fc='stylesheet',Gc='href',Hc='loadExternalRefs',Ic='css/bootstrap-3.3.7.min.cache.css',Jc='css/font-awesome-4.6.3.min.cache.css',Kc='css/bootstrap-datetimepicker-2.3.8.min.cache.css',Lc='css/bootstrap-datepicker3-1.5.1.min.cache.css',Mc='css/card-1.0.1.cache.css',Nc='css/bootstrap-slider-7.1.1.min.cache.css',Oc='css/bootstrap-switch-3.3.2.min.cache.css',Pc='css/summernote-0.8.1.min.cache.css',Qc='css/bootstrap-select-1.10.0.min.cache.css',Rc='css/typeahead-0.10.5.min.cache.css',Sc='css/positioned-tabs-1.0.0.min.cache.css',Tc='css/animate-3.5.1.min.cache.css',Uc='css/bootstrap-notify-custom.min.cache.css',Vc='css/blueimp-gallery-2.18.2-fix.cache.css',Wc='css/blueimp-gallery-2.18.2.min.cache.css',Xc='css/bootstrap-image-gallery-3.4.2.min.cache.css',Yc='css/bootstrap-tagsinput-typeahead.css',Zc='css/bootstrap-tagsinput.css',$c='css/demo.css',_c='css/prettify.css',ad='end',bd='http:',cd='file:',dd='_gwt_dummy_',ed='__gwtDevModeHook:GwtBootstrap3Demo',fd='Ignoring non-whitelisted Dev Mode URL: ',gd=':moduleBase';var q=window;var r=document;t(Q,R);function s(){var a=q.location.search;return a.indexOf(S)!=-1||a.indexOf(T)!=-1}
function t(a,b){if(q.__gwtStatsEvent){q.__gwtStatsEvent({moduleName:U,sessionId:q.__gwtStatsSessionId,subSystem:V,evtGroup:a,millis:(new Date).getTime(),type:b})}}
GwtBootstrap3Demo.__sendStats=t;GwtBootstrap3Demo.__moduleName=U;GwtBootstrap3Demo.__errFn=null;GwtBootstrap3Demo.__moduleBase=W;GwtBootstrap3Demo.__softPermutationId=X;GwtBootstrap3Demo.__computePropValue=null;GwtBootstrap3Demo.__getPropMap=null;GwtBootstrap3Demo.__installRunAsyncCode=function(){};GwtBootstrap3Demo.__gwtStartLoadingFragment=function(){return null};GwtBootstrap3Demo.__gwt_isKnownPropertyValue=function(){return false};GwtBootstrap3Demo.__gwt_getMetaProperty=function(){return null};var u=null;var v=q.__gwt_activeModules=q.__gwt_activeModules||{};v[U]={moduleName:U};GwtBootstrap3Demo.__moduleStartupDone=function(e){var f=v[U].bindings;v[U].bindings=function(){var a=f?f():{};var b=e[GwtBootstrap3Demo.__softPermutationId];for(var c=X;c<b.length;c++){var d=b[c];a[d[X]]=d[Y]}return a}};var w;function A(){B();return w}
function B(){if(w){return}var a=r.createElement(Z);a.src=$;a.id=U;a.style.cssText=_+ab;a.tabIndex=-1;r.body.appendChild(a);w=a.contentDocument;if(!w){w=a.contentWindow.document}w.open();var b=document.compatMode==bb?cb:db;w.write(b+eb);w.close()}
function C(k){function l(a){function b(){if(typeof r.readyState==fb){return typeof r.body!=fb&&r.body!=null}return /loaded|complete/.test(r.readyState)}
var c=b();if(c){a();return}function d(){if(!c){c=true;a();if(r.removeEventListener){r.removeEventListener(gb,d,false)}if(e){clearInterval(e)}}}
if(r.addEventListener){r.addEventListener(gb,d,false)}var e=setInterval(function(){if(b()){d()}},hb)}
function m(c){function d(a,b){a.removeChild(b)}
var e=A();var f=e.body;var g;if(navigator.userAgent.indexOf(ib)>-1&&window.JSON){var h=e.createDocumentFragment();h.appendChild(e.createTextNode(jb));for(var i=X;i<c.length;i++){var j=window.JSON.stringify(c[i]);h.appendChild(e.createTextNode(j.substring(Y,j.length-Y)))}h.appendChild(e.createTextNode(kb));g=e.createElement(lb);g.language=mb;g.appendChild(h);f.appendChild(g);d(f,g)}else{for(var i=X;i<c.length;i++){g=e.createElement(lb);g.language=mb;g.text=c[i];f.appendChild(g);d(f,g)}}}
GwtBootstrap3Demo.onScriptDownloaded=function(a){l(function(){m(a)})};t(nb,ob);var n=r.createElement(lb);n.src=k;if(GwtBootstrap3Demo.__errFn){n.onerror=function(){GwtBootstrap3Demo.__errFn(U,new Error(pb+code))}}r.getElementsByTagName(qb)[X].appendChild(n)}
GwtBootstrap3Demo.__startLoadingFragment=function(a){return G(a)};GwtBootstrap3Demo.__installRunAsyncCode=function(a){var b=A();var c=b.body;var d=b.createElement(lb);d.language=mb;d.text=a;c.appendChild(d);c.removeChild(d)};function D(){var c={};var d;var e;var f=r.getElementsByTagName(rb);for(var g=X,h=f.length;g<h;++g){var i=f[g],j=i.getAttribute(sb),k;if(j){j=j.replace(tb,db);if(j.indexOf(ub)>=X){continue}if(j==vb){k=i.getAttribute(wb);if(k){var l,m=k.indexOf(xb);if(m>=X){j=k.substring(X,m);l=k.substring(m+Y)}else{j=k;l=db}c[j]=l}}else if(j==yb){k=i.getAttribute(wb);if(k){try{d=eval(k)}catch(a){alert(zb+k+Ab)}}}else if(j==Bb){k=i.getAttribute(wb);if(k){try{e=eval(k)}catch(a){alert(zb+k+Cb)}}}}}__gwt_getMetaProperty=function(a){var b=c[a];return b==null?null:b};u=d;GwtBootstrap3Demo.__errFn=e}
function F(){function e(a){var b=a.lastIndexOf(Db);if(b==-1){b=a.length}var c=a.indexOf(Eb);if(c==-1){c=a.length}var d=a.lastIndexOf(Fb,Math.min(c,b));return d>=X?a.substring(X,d+Y):db}
function f(a){if(a.match(/^\w+:\/\//)){}else{var b=r.createElement(Gb);b.src=a+Hb;a=e(b.src)}return a}
function g(){var a=__gwt_getMetaProperty(Ib);if(a!=null){return a}return db}
function h(){var a=r.getElementsByTagName(lb);for(var b=X;b<a.length;++b){if(a[b].src.indexOf(Jb)!=-1){return e(a[b].src)}}return db}
function i(){var a=r.getElementsByTagName(Kb);if(a.length>X){return a[a.length-Y].href}return db}
function j(){var a=r.location;return a.href==a.protocol+Lb+a.host+a.pathname+a.search+a.hash}
var k=g();if(k==db){k=h()}if(k==db){k=i()}if(k==db&&j()){k=e(r.location.href)}k=f(k);return k}
function G(a){if(a.match(/^\//)){return a}if(a.match(/^[a-zA-Z]+:\/\//)){return a}return GwtBootstrap3Demo.__moduleBase+a}
function H(){var i=[];var j=X;function k(a,b){var c=i;for(var d=X,e=a.length-Y;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
var l=[];var m=[];function n(a){var b=m[a](),c=l[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(u){u(a,d,b)}throw null}
m[Mb]=function(){var b=null;var c=Nb;try{if(!b){var d=location.search;var e=d.indexOf(Ob);if(e>=X){var f=d.substring(e+Pb);var g=d.indexOf(Qb,e);if(g<X){g=d.length}b=d.substring(e+Pb,g)}}if(!b){b=__gwt_getMetaProperty(Mb)}if(!b){b=q[Rb]}if(b){c=b}while(b&&!__gwt_isKnownPropertyValue(Mb,b)){var h=b.lastIndexOf(Sb);if(h<X){b=null;break}b=b.substring(X,h)}}catch(a){alert(Tb+a)}q[Rb]=c;return b||Nb};l[Mb]={'default':X,en:Y,fr:Ub};m[Vb]=function(){var a=navigator.userAgent.toLowerCase();var b=r.documentMode;if(function(){return a.indexOf(Wb)!=-1}())return Xb;if(function(){return a.indexOf(Yb)!=-1&&(b>=Zb&&b<$b)}())return _b;if(function(){return a.indexOf(Yb)!=-1&&(b>=ac&&b<$b)}())return bc;if(function(){return a.indexOf(Yb)!=-1&&(b>=cc&&b<$b)}())return dc;if(function(){return a.indexOf(ec)!=-1||b>=$b}())return fc;return db};l[Vb]={gecko1_8:X,ie10:Y,ie8:Ub,ie9:gc,safari:hc};__gwt_isKnownPropertyValue=function(a,b){return b in l[a]};GwtBootstrap3Demo.__getPropMap=function(){var a={};for(var b in l){if(l.hasOwnProperty(b)){a[b]=n(b)}}return a};GwtBootstrap3Demo.__computePropValue=n;q.__gwt_activeModules[U].bindings=GwtBootstrap3Demo.__getPropMap;t(Q,ic);if(s()){return G(jc)}var o;try{k([Nb,dc],kc);k([lc,fc],mc);k([Nb,fc],nc);k([Nb,Xb],oc);k([pc,bc],qc);k([lc,dc],rc);k([pc,_b],sc);k([lc,Xb],tc);k([lc,bc],uc);k([pc,dc],vc);k([Nb,bc],wc);k([pc,Xb],xc);k([lc,_b],yc);k([Nb,_b],zc);k([pc,fc],Ac);o=i[n(Mb)][n(Vb)];var p=o.indexOf(Bc);if(p!=-1){j=parseInt(o.substring(p+Y),Zb);o=o.substring(X,p)}}catch(a){}GwtBootstrap3Demo.__softPermutationId=j;return G(o+Cc)}
function I(){if(!q.__gwt_stylesLoaded){q.__gwt_stylesLoaded={}}function c(a){if(!__gwt_stylesLoaded[a]){var b=r.createElement(Dc);b.setAttribute(Ec,Fc);b.setAttribute(Gc,G(a));r.getElementsByTagName(qb)[X].appendChild(b);__gwt_stylesLoaded[a]=true}}
t(Hc,R);c(Ic);c(Jc);c(Kc);c(Lc);c(Mc);c(Nc);c(Oc);c(Pc);c(Qc);c(Rc);c(Sc);c(Tc);c(Uc);c(Vc);c(Wc);c(Xc);c(Yc);c(Zc);c($c);c(_c);t(Hc,ad)}
D();GwtBootstrap3Demo.__moduleBase=F();v[U].moduleBase=GwtBootstrap3Demo.__moduleBase;var J=H();if(q){var K=!!(q.location.protocol==bd||q.location.protocol==cd);q.__gwt_activeModules[U].canRedirect=K;function L(){var b=dd;try{q.sessionStorage.setItem(b,b);q.sessionStorage.removeItem(b);return true}catch(a){return false}}
if(K&&L()){var M=ed;var N=q.sessionStorage[M];if(!/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?\/.*$/.test(N)){if(N&&(window.console&&console.log)){console.log(fd+N)}N=db}if(N&&!q[M]){q[M]=true;q[M+gd]=F();var O=r.createElement(lb);O.src=N;var P=r.getElementsByTagName(qb)[X];P.insertBefore(O,P.firstElementChild||P.children[X]);return false}}}I();t(Q,ad);C(J);return true}
GwtBootstrap3Demo.succeeded=GwtBootstrap3Demo();