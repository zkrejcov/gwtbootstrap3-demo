$wnd.GwtBootstrap3Demo.runAsyncCallback40("function EMc(){}\nfunction IMc(){}\nfunction KMc(){}\nfunction LMc(){LMc=Kdb;HMc=new KMc}\nfunction Trc(a){Uub.call(this,a);Src(this)}\nfunction DMc(){WFb.call(this);UFb(this,FMc(new GMc))}\nfunction xMc(a,b,c){gFb();EFb.call(this,a,b,c,(nsc(),msc))}\nfunction GMc(){this.a=(new IMc,LMc(),HMc);JMc(this.a)}\nfunction fRc(a){var b;if(!a.M){b=new DMc(new EMc);a.M=b}return a.M}\nfunction eRc(a){var b;if(!a.L){b=new xMc(HEb(jGb(a.a)),fRc(a),dRc(a));$Eb((mGb(a.a),b),yGb(mGb(a.a)));a.L=b}return a.L}\nfunction JMc(a){if(!a.a){a.a=true;kv((pB(),'.GPBYFDEBM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDECM{margin-top:0 !important;}.GPBYFDEDM{margin-left:5px;}'));return true}return false}\nfunction FMc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new E1b;aXb(a,(b=new rZb(rAd),aXb(b,(c=new i0b,c.a='Offline',h0b(c),c)),aXb(b,(d=new eYb,aXb(d,(e=new d$b((cac(),_9b)),Ohb(e.eb,'GPBYFDECM',true),fsc(e.b,DGd),bXb(e,e.b,0),e)),aXb(d,new _rc((j=new oMb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new Ifb(j.a)).a)),aXb(d,(f=new hXc,t1b(f,(k=new oMb,k.a+=EGd,new Ifb(k.a)).a),Ohb(f.eb,wAd,true),f)),aXb(d,new _rc((l=new oMb,l.a+=FGd,new Ifb(l.a)).a)),aXb(d,(g=new hXc,t1b(g,(m=new oMb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new Ifb(m.a)).a),Ohb(g.eb,wAd,true),g)),Ohb(d.eb,'GPBYFDEBM',true),d)),aXb(b,(h=new v0b,aXb(h,(n=new K0b,aXb(n,(o=new d$b($9b),fsc(o.b,'What is Offline?'),bXb(o,o.b,0),o)),n)),aXb(h,(p=new x0b,aXb(p,new Trc((q=new oMb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new Ifb(q.a)).a)),p)),aXb(h,new H0b),h)),aXb(b,(i=new v0b,aXb(i,(r=new K0b,aXb(r,(s=new d$b($9b),fsc(s.b,'How to configure?'),bXb(s,s.b,0),s)),r)),aXb(i,(t=new x0b,aXb(t,new _rc((u=new oMb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new Ifb(u.a)).a)),aXb(t,(v=new hXc,t1b(v,(w=new oMb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new Ifb(w.a)).a),Ohb(v.eb,wAd,true),v)),aXb(t,new _rc((A=new oMb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new Ifb(A.a)).a)),aXb(t,(B=new hXc,t1b(B,(C=new oMb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new Ifb(C.a)).a),Ohb(B.eb,wAd,true),B)),aXb(t,new _rc((D=new oMb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new Ifb(D.a)).a)),aXb(t,(F=new hXc,t1b(F,(G=new oMb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new Ifb(G.a)).a),Ohb(F.eb,wAd,true),F)),t)),aXb(i,new H0b),i)),b));return a}\nJdb(405,231,Gyd,Trc);Jdb(970,49,nxd,xMc);var p3=EKb(hAd,'OfflinePresenter',970);Jdb(1211,53,oxd,DMc);var u3=EKb(hAd,'OfflineView',1211);Jdb(1451,1,{},EMc);var t3=EKb(hAd,'OfflineView_BinderImpl',1451);Jdb(1452,1,{},GMc);var q3=EKb(hAd,'OfflineView_BinderImpl/Widgets',1452);Jdb(1794,1,{},IMc);var HMc;var s3=EKb(hAd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator',1794);Jdb(1795,1,{},KMc);_.a=false;var r3=EKb(hAd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator/1',1795);Jdb(894,1,Fzd);_.Sb=function DRc(){RHb(this.b,eRc(this.a.a))};Nud(Lm)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")
