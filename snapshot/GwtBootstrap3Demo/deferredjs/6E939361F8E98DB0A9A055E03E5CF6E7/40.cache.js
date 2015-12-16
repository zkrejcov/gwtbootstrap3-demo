$wnd.GwtBootstrap3Demo.runAsyncCallback40("function kLc(){}\nfunction oLc(){}\nfunction qLc(){}\nfunction rLc(){rLc=Qbb;nLc=new qLc}\nfunction Qqc(a){ktb.call(this,a);Pqc(this)}\nfunction jLc(){KEb.call(this);IEb(this,lLc(new mLc))}\nfunction dLc(a,b,c){WDb();sEb.call(this,a,b,c,(jrc(),irc))}\nfunction mLc(){this.a=(new oLc,rLc(),nLc);pLc(this.a)}\nfunction qPc(a){var b;if(!a.M){b=new jLc(new kLc);a.M=b}return a.M}\nfunction pPc(a){var b;if(!a.L){b=new dLc(vDb(ZEb(a.a)),qPc(a),oPc(a));ODb((aFb(a.a),b),mFb(aFb(a.a)));a.L=b}return a.L}\nfunction pLc(a){if(!a.a){a.a=true;av((gB(),'.GPBYFDEBM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDECM{margin-top:0 !important;}.GPBYFDEDM{margin-left:5px;}'));return true}return false}\nfunction lLc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new k0b;NVb(a,(b=new eYb(dtd),NVb(b,(c=new Y$b,c.a='Offline',X$b(c),c)),NVb(b,(d=new TWb,NVb(d,(e=new SYb((a9b(),Z8b)),Tfb((pnb(),e.eb),'GPBYFDECM',true),brc(e.b,mzd),OVb(e,e.b,0),e)),NVb(d,new Xqc((j=new aLb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new Kdb(j.a)).a)),NVb(d,(f=new sVc,__b(f,(k=new aLb,k.a+=nzd,new Kdb(k.a)).a),Tfb(f.eb,itd,true),f)),NVb(d,new Xqc((l=new aLb,l.a+=ozd,new Kdb(l.a)).a)),NVb(d,(g=new sVc,__b(g,(m=new aLb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new Kdb(m.a)).a),Tfb(g.eb,itd,true),g)),Tfb(d.eb,'GPBYFDEBM',true),d)),NVb(b,(h=new j_b,NVb(h,(n=new y_b,NVb(n,(o=new SYb(Y8b),brc(o.b,'What is Offline?'),OVb(o,o.b,0),o)),n)),NVb(h,(p=new l_b,NVb(p,new Qqc((q=new aLb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new Kdb(q.a)).a)),p)),NVb(h,new v_b),h)),NVb(b,(i=new j_b,NVb(i,(r=new y_b,NVb(r,(s=new SYb(Y8b),brc(s.b,'How to configure?'),OVb(s,s.b,0),s)),r)),NVb(i,(t=new l_b,NVb(t,new Xqc((u=new aLb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new Kdb(u.a)).a)),NVb(t,(v=new sVc,__b(v,(w=new aLb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new Kdb(w.a)).a),Tfb(v.eb,itd,true),v)),NVb(t,new Xqc((A=new aLb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new Kdb(A.a)).a)),NVb(t,(B=new sVc,__b(B,(C=new aLb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new Kdb(C.a)).a),Tfb(B.eb,itd,true),B)),NVb(t,new Xqc((D=new aLb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new Kdb(D.a)).a)),NVb(t,(F=new sVc,__b(F,(G=new aLb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new Kdb(G.a)).a),Tfb(F.eb,itd,true),F)),t)),NVb(i,new v_b),i)),b));return a}\nPbb(398,226,qrd,Qqc);Pbb(917,48,Zpd,dLc);var D2=rJb(Ssd,'OfflinePresenter',917);Pbb(1155,51,$pd,jLc);var I2=rJb(Ssd,'OfflineView',1155);Pbb(1388,1,{},kLc);var H2=rJb(Ssd,'OfflineView_BinderImpl',1388);Pbb(1389,1,{},mLc);var E2=rJb(Ssd,'OfflineView_BinderImpl/Widgets',1389);Pbb(1723,1,{},oLc);var nLc;var G2=rJb(Ssd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator',1723);Pbb(1724,1,{},qLc);_.a=false;var F2=rJb(Ssd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1',1724);Pbb(841,1,osd);_.Sb=function OPc(){FGb(this.b,pPc(this.a.a))};Cnd(Im)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")
