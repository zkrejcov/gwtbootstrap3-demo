$wnd.GwtBootstrap3Demo.runAsyncCallback40("function OSc(){}\nfunction SSc(){}\nfunction USc(){}\nfunction VSc(){VSc=Vhb;RSc=new USc}\nfunction Vwc(a){rzb.call(this,a);Uwc(this)}\nfunction NSc(){mKb.call(this);kKb(this,PSc(new QSc))}\nfunction HSc(a,b,c){yJb();WJb.call(this,a,b,c,(pxc(),oxc))}\nfunction QSc(){this.a=(new SSc,VSc(),RSc);TSc(this.a)}\nfunction JXc(a){var b;if(!a.M){b=new NSc(new OSc);a.M=b}return a.M}\nfunction IXc(a){var b;if(!a.L){b=new HSc(ZIb(BKb(a.a)),JXc(a),HXc(a));qJb((EKb(a.a),b),QKb(EKb(a.a)));a.L=b}return a.L}\nfunction TSc(a){if(!a.a){a.a=true;_w((AD(),'.GPBYFDEEM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEFM{margin-top:0 !important;}.GPBYFDEGM{margin-left:5px;}'));return true}return false}\nfunction PSc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new b6b;t_b(a,(b=new P1b(yMd),t_b(b,(c=new H4b,c.a='Offline',G4b(c),c)),t_b(b,(d=new C0b,t_b(d,(e=new B2b((Fec(),Cec)),Zlb((xtb(),e.eb),'GPBYFDEFM',true),hxc(e.b,CSd),u_b(e,e.b,0),e)),t_b(d,new bxc((j=new GQb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new Pjb(j.a)).a)),t_b(d,(f=new T1c,S5b(f,(k=new GQb,k.a+=DSd,new Pjb(k.a)).a),Zlb(f.eb,DMd,true),f)),t_b(d,new bxc((l=new GQb,l.a+=ESd,new Pjb(l.a)).a)),t_b(d,(g=new T1c,S5b(g,(m=new GQb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new Pjb(m.a)).a),Zlb(g.eb,DMd,true),g)),Zlb(d.eb,'GPBYFDEEM',true),d)),t_b(b,(h=new U4b,t_b(h,(n=new h5b,t_b(n,(o=new B2b(Bec),hxc(o.b,'What is Offline?'),u_b(o,o.b,0),o)),n)),t_b(h,(p=new W4b,t_b(p,new Vwc((q=new GQb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new Pjb(q.a)).a)),p)),t_b(h,new e5b),h)),t_b(b,(i=new U4b,t_b(i,(r=new h5b,t_b(r,(s=new B2b(Bec),hxc(s.b,'How to configure?'),u_b(s,s.b,0),s)),r)),t_b(i,(t=new W4b,t_b(t,new bxc((u=new GQb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new Pjb(u.a)).a)),t_b(t,(v=new T1c,S5b(v,(w=new GQb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new Pjb(w.a)).a),Zlb(v.eb,DMd,true),v)),t_b(t,new bxc((A=new GQb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new Pjb(A.a)).a)),t_b(t,(B=new T1c,S5b(B,(C=new GQb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new Pjb(C.a)).a),Zlb(B.eb,DMd,true),B)),t_b(t,new bxc((D=new GQb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new Pjb(D.a)).a)),t_b(t,(F=new T1c,S5b(F,(G=new GQb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new Pjb(G.a)).a),Zlb(F.eb,DMd,true),F)),t)),t_b(i,new e5b),i)),b));return a}\nUhb(406,231,mJd,Vwc);Uhb(973,44,xJd,HSc);var x6=WOb(pMd,'OfflinePresenter',973);Uhb(1211,47,yJd,NSc);var C6=WOb(pMd,'OfflineView',1211);Uhb(1484,1,{},OSc);var B6=WOb(pMd,'OfflineView_BinderImpl',1484);Uhb(1485,1,{},QSc);var y6=WOb(pMd,'OfflineView_BinderImpl/Widgets',1485);Uhb(1833,1,{},SSc);var RSc;var A6=WOb(pMd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator',1833);Uhb(1834,1,{},USc);_.a=false;var z6=WOb(pMd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1',1834);Uhb(895,1,LLd);_.Sb=function iYc(){hMb(this.b,IXc(this.a.a))};VGd(No)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")
