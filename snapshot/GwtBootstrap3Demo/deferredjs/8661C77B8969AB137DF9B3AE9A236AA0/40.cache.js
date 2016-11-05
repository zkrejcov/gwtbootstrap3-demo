$wnd.GwtBootstrap3Demo.runAsyncCallback40("function bVc(){}\nfunction fVc(){}\nfunction hVc(){}\nfunction iVc(){iVc=Tib;eVc=new hVc}\nfunction izc(a){qAb.call(this,a);hzc(this)}\nfunction aVc(){lLb.call(this);jLb(this,cVc(new dVc))}\nfunction WUc(a,b,c){xKb();VKb.call(this,a,b,c,(Bzc(),Azc))}\nfunction dVc(){this.a=(new fVc,iVc(),eVc);gVc(this.a)}\nfunction p$c(a){var b;if(!a.M){b=new aVc(new bVc);a.M=b}return a.M}\nfunction o$c(a){var b;if(!a.L){b=new WUc(YJb(ALb(a.a)),p$c(a),n$c(a));pKb((DLb(a.a),b),PLb(DLb(a.a)));a.L=b}return a.L}\nfunction gVc(a){if(!a.a){a.a=true;Kx((jE(),'.GPBYFDEEM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEFM{margin-top:0 !important;}.GPBYFDEGM{margin-left:5px;}'));return true}return false}\nfunction cVc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new d7b;s0b(a,(b=new R2b(SPd),s0b(b,(c=new J5b,c.a='Offline',I5b(c),c)),s0b(b,(d=new E1b,s0b(d,(e=new D3b((Jfc(),Gfc)),Xmb((wub(),e.eb),'GPBYFDEFM',true),wzc(e.b,WVd),t0b(e,e.b,0),e)),s0b(d,new qzc((j=new FRb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new Nkb(j.a)).a)),s0b(d,(f=new z4c,U6b(f,(k=new FRb,k.a+=XVd,new Nkb(k.a)).a),Xmb(f.eb,XPd,true),f)),s0b(d,new qzc((l=new FRb,l.a+=YVd,new Nkb(l.a)).a)),s0b(d,(g=new z4c,U6b(g,(m=new FRb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new Nkb(m.a)).a),Xmb(g.eb,XPd,true),g)),Xmb(d.eb,'GPBYFDEEM',true),d)),s0b(b,(h=new W5b,s0b(h,(n=new j6b,s0b(n,(o=new D3b(Ffc),wzc(o.b,'What is Offline?'),t0b(o,o.b,0),o)),n)),s0b(h,(p=new Y5b,s0b(p,new izc((q=new FRb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new Nkb(q.a)).a)),p)),s0b(h,new g6b),h)),s0b(b,(i=new W5b,s0b(i,(r=new j6b,s0b(r,(s=new D3b(Ffc),wzc(s.b,'How to configure?'),t0b(s,s.b,0),s)),r)),s0b(i,(t=new Y5b,s0b(t,new qzc((u=new FRb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new Nkb(u.a)).a)),s0b(t,(v=new z4c,U6b(v,(w=new FRb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new Nkb(w.a)).a),Xmb(v.eb,XPd,true),v)),s0b(t,new qzc((A=new FRb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new Nkb(A.a)).a)),s0b(t,(B=new z4c,U6b(B,(C=new FRb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new Nkb(C.a)).a),Xmb(B.eb,XPd,true),B)),s0b(t,new qzc((D=new FRb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new Nkb(D.a)).a)),s0b(t,(F=new z4c,U6b(F,(G=new FRb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new Nkb(G.a)).a),Xmb(F.eb,XPd,true),F)),t)),s0b(i,new g6b),i)),b));return a}\nSib(409,233,FMd,izc);Sib(1012,44,QMd,WUc);var i7=VPb(IPd,'OfflinePresenter',1012);Sib(1251,47,RMd,aVc);var n7=VPb(IPd,'OfflineView',1251);Sib(1528,1,{},bVc);var m7=VPb(IPd,'OfflineView_BinderImpl',1528);Sib(1529,1,{},dVc);var j7=VPb(IPd,'OfflineView_BinderImpl/Widgets',1529);Sib(1879,1,{},fVc);var eVc;var l7=VPb(IPd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator',1879);Sib(1880,1,{},hVc);_.a=false;var k7=VPb(IPd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1',1880);Sib(934,1,cPd);_.Sb=function Q$c(){gNb(this.b,o$c(this.a.a))};mKd(vp)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")
