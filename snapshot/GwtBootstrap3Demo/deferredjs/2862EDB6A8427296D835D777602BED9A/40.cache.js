$wnd.GwtBootstrap3Demo.runAsyncCallback40("function jTc(){}\nfunction nTc(){}\nfunction pTc(){}\nfunction qTc(){qTc=_hb;mTc=new pTc}\nfunction qxc(a){xzb.call(this,a);pxc(this)}\nfunction iTc(){JKb.call(this);HKb(this,kTc(new lTc))}\nfunction cTc(a,b,c){VJb();rKb.call(this,a,b,c,(Mxc(),Lxc))}\nfunction lTc(){this.a=(new nTc,qTc(),mTc);oTc(this.a)}\nfunction eYc(a){var b;if(!a.M){b=new iTc(new jTc);a.M=b}return a.M}\nfunction dYc(a){var b;if(!a.L){b=new cTc(uJb(YKb(a.a)),eYc(a),cYc(a));NJb((_Kb(a.a),b),lLb(_Kb(a.a)));a.L=b}return a.L}\nfunction oTc(a){if(!a.a){a.a=true;gx((HD(),'.GPBYFDEEM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEFM{margin-top:0 !important;}.GPBYFDEGM{margin-left:5px;}'));return true}return false}\nfunction kTc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new y6b;Q_b(a,(b=new k2b(WMd),Q_b(b,(c=new c5b,c.a='Offline',b5b(c),c)),Q_b(b,(d=new Z0b,Q_b(d,(e=new Y2b((afc(),Zec)),dmb((Btb(),e.eb),'GPBYFDEFM',true),Exc(e.b,_Sd),R_b(e,e.b,0),e)),Q_b(d,new yxc((j=new bRb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new Vjb(j.a)).a)),Q_b(d,(f=new o2c,n6b(f,(k=new bRb,k.a+=aTd,new Vjb(k.a)).a),dmb(f.eb,_Md,true),f)),Q_b(d,new yxc((l=new bRb,l.a+=bTd,new Vjb(l.a)).a)),Q_b(d,(g=new o2c,n6b(g,(m=new bRb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new Vjb(m.a)).a),dmb(g.eb,_Md,true),g)),dmb(d.eb,'GPBYFDEEM',true),d)),Q_b(b,(h=new p5b,Q_b(h,(n=new E5b,Q_b(n,(o=new Y2b(Yec),Exc(o.b,'What is Offline?'),R_b(o,o.b,0),o)),n)),Q_b(h,(p=new r5b,Q_b(p,new qxc((q=new bRb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new Vjb(q.a)).a)),p)),Q_b(h,new B5b),h)),Q_b(b,(i=new p5b,Q_b(i,(r=new E5b,Q_b(r,(s=new Y2b(Yec),Exc(s.b,'How to configure?'),R_b(s,s.b,0),s)),r)),Q_b(i,(t=new r5b,Q_b(t,new yxc((u=new bRb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new Vjb(u.a)).a)),Q_b(t,(v=new o2c,n6b(v,(w=new bRb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new Vjb(w.a)).a),dmb(v.eb,_Md,true),v)),Q_b(t,new yxc((A=new bRb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new Vjb(A.a)).a)),Q_b(t,(B=new o2c,n6b(B,(C=new bRb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new Vjb(C.a)).a),dmb(B.eb,_Md,true),B)),Q_b(t,new yxc((D=new bRb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new Vjb(D.a)).a)),Q_b(t,(F=new o2c,n6b(F,(G=new bRb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new Vjb(G.a)).a),dmb(F.eb,_Md,true),F)),t)),Q_b(i,new B5b),i)),b));return a}\n$hb(405,231,KJd,qxc);$hb(972,44,WJd,cTc);var D6=rPb(NMd,'OfflinePresenter',972);$hb(1210,47,XJd,iTc);var I6=rPb(NMd,'OfflineView',1210);$hb(1481,1,{},jTc);var H6=rPb(NMd,'OfflineView_BinderImpl',1481);$hb(1482,1,{},lTc);var E6=rPb(NMd,'OfflineView_BinderImpl/Widgets',1482);$hb(1831,1,{},nTc);var mTc;var G6=rPb(NMd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator',1831);$hb(1832,1,{},pTc);_.a=false;var F6=rPb(NMd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1',1832);$hb(894,1,hMd);_.Sb=function FYc(){EMb(this.b,dYc(this.a.a))};qHd(No)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")
