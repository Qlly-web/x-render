(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{RZMt:function(_e,ve,O){},Zxc8:function(_e,ve,O){"use strict";O.r(ve);var t=O("q1tI"),u=O.n(t),le=O("wx14"),K=O("rePB"),R=O("ODXe"),Ce=O("U8pU"),Pe=O("Ff2n"),W=O("VTBJ"),me=O("TSYQ"),Z=O.n(me),Se=O("Zm9Q"),Pt=O("5Z9U"),ze=O("6cGi"),Xe=O("KQm4"),be=O("wgJM"),Ge=O("t23M");function Ze(e){var r=Object(t.useRef)(),n=Object(t.useRef)(!1);function c(){for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];n.current||(be.a.cancel(r.current),r.current=Object(be.a)(function(){e.apply(void 0,o)}))}return Object(t.useEffect)(function(){return function(){n.current=!0,be.a.cancel(r.current)}},[]),c}function Nt(e){var r=Object(t.useRef)([]),n=Object(t.useState)({}),c=Object(R.a)(n,2),i=c[1],o=Object(t.useRef)(typeof e=="function"?e():e),l=Ze(function(){var a=o.current;r.current.forEach(function(b){a=b(a)}),r.current=[],o.current=a,i({})});function s(a){r.current.push(a),l()}return[o.current,s]}var ae=O("4IlW");function At(e,r){var n,c=e.prefixCls,i=e.id,o=e.active,l=e.tab,s=l.key,a=l.tab,b=l.disabled,y=l.closeIcon,m=e.closable,d=e.renderWrapper,E=e.removeAriaLabel,g=e.editable,C=e.onClick,D=e.onRemove,V=e.onFocus,$=e.style,w="".concat(c,"-tab");t.useEffect(function(){return D},[]);var j=g&&m!==!1&&!b;function U(P){b||C(P)}function Y(P){P.preventDefault(),P.stopPropagation(),g.onEdit("remove",{key:s,event:P})}var L=t.createElement("div",{key:s,ref:r,className:Z()(w,(n={},Object(K.a)(n,"".concat(w,"-with-remove"),j),Object(K.a)(n,"".concat(w,"-active"),o),Object(K.a)(n,"".concat(w,"-disabled"),b),n)),style:$,onClick:U},t.createElement("div",{role:"tab","aria-selected":o,id:i&&"".concat(i,"-tab-").concat(s),className:"".concat(w,"-btn"),"aria-controls":i&&"".concat(i,"-panel-").concat(s),"aria-disabled":b,tabIndex:b?null:0,onClick:function(f){f.stopPropagation(),U(f)},onKeyDown:function(f){[ae.a.SPACE,ae.a.ENTER].includes(f.which)&&(f.preventDefault(),U(f))},onFocus:V},a),j&&t.createElement("button",{type:"button","aria-label":E||"remove",tabIndex:0,className:"".concat(w,"-remove"),onClick:function(f){f.stopPropagation(),Y(f)}},y||g.removeIcon||"\xD7"));return d?d(L):L}var Mt=t.forwardRef(At),Ye={width:0,height:0,left:0,top:0};function kt(e,r,n){return Object(t.useMemo)(function(){for(var c,i=new Map,o=r.get((c=e[0])===null||c===void 0?void 0:c.key)||Ye,l=o.left+o.width,s=0;s<e.length;s+=1){var a=e[s].key,b=r.get(a);if(!b){var y;b=r.get((y=e[s-1])===null||y===void 0?void 0:y.key)||Ye}var m=i.get(a)||Object(W.a)({},b);m.right=l-m.left-m.width,i.set(a,m)}return i},[e.map(function(c){return c.key}).join("_"),r,n])}var Je={width:0,height:0,left:0,top:0,right:0};function It(e,r,n,c,i){var o=i.tabs,l=i.tabPosition,s=i.rtl,a,b,y;["top","bottom"].includes(l)?(a="width",b=s?"right":"left",y=Math.abs(r.left)):(a="height",b="top",y=-r.top);var m=r[a],d=n[a],E=c[a],g=m;return d+E>m&&d<m&&(g=m-E),Object(t.useMemo)(function(){if(!o.length)return[0,0];for(var C=o.length,D=C,V=0;V<C;V+=1){var $=e.get(o[V].key)||Je;if($[b]+$[a]>y+g){D=V-1;break}}for(var w=0,j=C-1;j>=0;j-=1){var U=e.get(o[j].key)||Je;if(U[b]<y){w=j+1;break}}return[w,D]},[e,y,g,l,o.map(function(C){return C.key}).join("_"),s])}var Qe=O("1j5w"),Ft=O("uciX"),he={adjustX:1,adjustY:1},pe=[0,0],Bt={topLeft:{points:["bl","tl"],overflow:he,offset:[0,-4],targetOffset:pe},topCenter:{points:["bc","tc"],overflow:he,offset:[0,-4],targetOffset:pe},topRight:{points:["br","tr"],overflow:he,offset:[0,-4],targetOffset:pe},bottomLeft:{points:["tl","bl"],overflow:he,offset:[0,4],targetOffset:pe},bottomCenter:{points:["tc","bc"],overflow:he,offset:[0,4],targetOffset:pe},bottomRight:{points:["tr","br"],overflow:he,offset:[0,4],targetOffset:pe}},Lt=Bt,Dt=ae.a.ESC,Wt=ae.a.TAB;function Kt(e){var r=e.visible,n=e.setTriggerVisible,c=e.triggerRef,i=e.menuRef,o=e.onVisibleChange,l=e.autoFocus,s=t.useRef(!1),a=function(){if(r&&c.current){var d,E,g,C;(d=c.current)===null||d===void 0||(E=d.triggerRef)===null||E===void 0||(g=E.current)===null||g===void 0||(C=g.focus)===null||C===void 0||C.call(g),n(!1),typeof o=="function"&&o(!1)}},b=function(){var d,E;(d=i.current)===null||d===void 0||(E=d.focus)===null||E===void 0||E.call(d),s.current=!0},y=function(d){var E;switch(d.keyCode){case Dt:a();break;case Wt:!s.current&&((E=i.current)===null||E===void 0?void 0:E.focus)?(d.preventDefault(),b()):a();break}};t.useEffect(function(){return r?(window.addEventListener("keydown",y),l&&Object(be.a)(b,3),function(){window.removeEventListener("keydown",y),s.current=!1}):function(){s.current=!1}},[r])}var qe=O("c+Xe"),Vt=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus"];function $t(e,r){var n=e.arrow,c=n===void 0?!1:n,i=e.prefixCls,o=i===void 0?"rc-dropdown":i,l=e.transitionName,s=e.animation,a=e.align,b=e.placement,y=b===void 0?"bottomLeft":b,m=e.placements,d=m===void 0?Lt:m,E=e.getPopupContainer,g=e.showAction,C=e.hideAction,D=e.overlayClassName,V=e.overlayStyle,$=e.visible,w=e.trigger,j=w===void 0?["hover"]:w,U=e.autoFocus,Y=Object(Pe.a)(e,Vt),L=t.useState(),P=Object(R.a)(L,2),f=P[0],x=P[1],M="visible"in e?$:f,v=t.useRef(null);t.useImperativeHandle(r,function(){return v.current});var S=t.useRef(null),F="".concat(o,"-menu");Kt({visible:M,setTriggerVisible:x,triggerRef:v,menuRef:S,onVisibleChange:e.onVisibleChange,autoFocus:U});var B=function(){var p=e.overlay,N;return typeof p=="function"?N=p():N=p,N},te=function(p){var N=e.onOverlayClick,ee=B().props;x(!1),N&&N(p),ee.onClick&&ee.onClick(p)},J=function(p){var N=e.onVisibleChange;x(p),typeof N=="function"&&N(p)},oe=function(){var p,N=B(),ee=Object(qe.a)(S,N.ref),ie=(p={prefixCls:F},Object(K.a)(p,"data-dropdown-inject",!0),Object(K.a)(p,"onClick",te),Object(K.a)(p,"ref",Object(qe.c)(N)?ee:void 0),p);return typeof N.type=="string"&&(delete ie.prefixCls,delete ie["data-dropdown-inject"]),t.createElement(t.Fragment,null,c&&t.createElement("div",{className:"".concat(o,"-arrow")}),t.cloneElement(N,ie))},q=function(){var p=e.overlay;return typeof p=="function"?oe:oe()},h=function(){var p=e.minOverlayWidthMatchTrigger,N=e.alignPoint;return"minOverlayWidthMatchTrigger"in e?p:!N},I=function(){var p=e.openClassName;return p!==void 0?p:"".concat(o,"-open")},X=function(){var p=e.children,N=p.props?p.props:{},ee=Z()(N.className,I());return M&&p?t.cloneElement(p,{className:ee}):p},k=C;return!k&&j.indexOf("contextMenu")!==-1&&(k=["click"]),t.createElement(Ft.a,Object(W.a)(Object(W.a)({builtinPlacements:d},Y),{},{prefixCls:o,ref:v,popupClassName:Z()(D,Object(K.a)({},"".concat(o,"-show-arrow"),c)),popupStyle:V,action:j,showAction:g,hideAction:k||[],popupPlacement:y,popupAlign:a,popupTransitionName:l,popupAnimation:s,popupVisible:M,stretch:h()?"minWidth":"",popup:q(),onPopupVisibleChange:J,getPopupContainer:E}),X())}var Ut=t.forwardRef($t),Ht=Ut;function _t(e,r){var n=e.prefixCls,c=e.editable,i=e.locale,o=e.style;return!c||c.showAdd===!1?null:t.createElement("button",{ref:r,type:"button",className:"".concat(n,"-nav-add"),style:o,"aria-label":(i==null?void 0:i.addAriaLabel)||"Add tab",onClick:function(s){c.onEdit("add",{event:s})}},c.addIcon||"+")}var et=t.forwardRef(_t);function zt(e,r){var n=e.prefixCls,c=e.id,i=e.tabs,o=e.locale,l=e.mobile,s=e.moreIcon,a=s===void 0?"More":s,b=e.moreTransitionName,y=e.style,m=e.className,d=e.editable,E=e.tabBarGutter,g=e.rtl,C=e.removeAriaLabel,D=e.onTabClick,V=Object(t.useState)(!1),$=Object(R.a)(V,2),w=$[0],j=$[1],U=Object(t.useState)(null),Y=Object(R.a)(U,2),L=Y[0],P=Y[1],f="".concat(c,"-more-popup"),x="".concat(n,"-dropdown"),M=L!==null?"".concat(f,"-").concat(L):null,v=o==null?void 0:o.dropdownAriaLabel;function S(h,I){h.preventDefault(),h.stopPropagation(),d.onEdit("remove",{key:I,event:h})}var F=t.createElement(Qe.default,{onClick:function(I){var X=I.key,k=I.domEvent;D(X,k),j(!1)},id:f,tabIndex:-1,role:"listbox","aria-activedescendant":M,selectedKeys:[L],"aria-label":v!==void 0?v:"expanded dropdown"},i.map(function(h){var I=d&&h.closable!==!1&&!h.disabled;return t.createElement(Qe.MenuItem,{key:h.key,id:"".concat(f,"-").concat(h.key),role:"option","aria-controls":c&&"".concat(c,"-panel-").concat(h.key),disabled:h.disabled},t.createElement("span",null,h.tab),I&&t.createElement("button",{type:"button","aria-label":C||"remove",tabIndex:0,className:"".concat(x,"-menu-item-remove"),onClick:function(k){k.stopPropagation(),S(k,h.key)}},h.closeIcon||d.removeIcon||"\xD7"))}));function B(h){for(var I=i.filter(function(N){return!N.disabled}),X=I.findIndex(function(N){return N.key===L})||0,k=I.length,G=0;G<k;G+=1){X=(X+h+k)%k;var p=I[X];if(!p.disabled){P(p.key);return}}}function te(h){var I=h.which;if(!w){[ae.a.DOWN,ae.a.SPACE,ae.a.ENTER].includes(I)&&(j(!0),h.preventDefault());return}switch(I){case ae.a.UP:B(-1),h.preventDefault();break;case ae.a.DOWN:B(1),h.preventDefault();break;case ae.a.ESC:j(!1);break;case ae.a.SPACE:case ae.a.ENTER:L!==null&&D(L,h);break}}Object(t.useEffect)(function(){var h=document.getElementById(M);h&&h.scrollIntoView&&h.scrollIntoView(!1)},[L]),Object(t.useEffect)(function(){w||P(null)},[w]);var J=Object(K.a)({},g?"marginRight":"marginLeft",E);i.length||(J.visibility="hidden",J.order=1);var oe=Z()(Object(K.a)({},"".concat(x,"-rtl"),g)),q=l?null:t.createElement(Ht,{prefixCls:x,overlay:F,trigger:["hover"],visible:w,transitionName:b,onVisibleChange:j,overlayClassName:oe,mouseEnterDelay:.1,mouseLeaveDelay:.1},t.createElement("button",{type:"button",className:"".concat(n,"-nav-more"),style:J,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":f,id:"".concat(c,"-more"),"aria-expanded":w,onKeyDown:te},a));return t.createElement("div",{className:Z()("".concat(n,"-nav-operations"),m),style:y,ref:r},q,t.createElement(et,{prefixCls:n,locale:o,editable:d}))}var Xt=t.memo(t.forwardRef(zt),function(e,r){return r.tabMoving}),Fe=Object(t.createContext)(null),Gt=.1,tt=.01,Ne=20,at=Math.pow(.995,Ne);function Zt(e,r){var n=Object(t.useState)(),c=Object(R.a)(n,2),i=c[0],o=c[1],l=Object(t.useState)(0),s=Object(R.a)(l,2),a=s[0],b=s[1],y=Object(t.useState)(0),m=Object(R.a)(y,2),d=m[0],E=m[1],g=Object(t.useState)(),C=Object(R.a)(g,2),D=C[0],V=C[1],$=Object(t.useRef)();function w(f){var x=f.touches[0],M=x.screenX,v=x.screenY;o({x:M,y:v}),window.clearInterval($.current)}function j(f){if(!!i){f.preventDefault();var x=f.touches[0],M=x.screenX,v=x.screenY;o({x:M,y:v});var S=M-i.x,F=v-i.y;r(S,F);var B=Date.now();b(B),E(B-a),V({x:S,y:F})}}function U(){if(!!i&&(o(null),V(null),D)){var f=D.x/d,x=D.y/d,M=Math.abs(f),v=Math.abs(x);if(Math.max(M,v)<Gt)return;var S=f,F=x;$.current=window.setInterval(function(){if(Math.abs(S)<tt&&Math.abs(F)<tt){window.clearInterval($.current);return}S*=at,F*=at,r(S*Ne,F*Ne)},Ne)}}var Y=Object(t.useRef)();function L(f){var x=f.deltaX,M=f.deltaY,v=0,S=Math.abs(x),F=Math.abs(M);S===F?v=Y.current==="x"?x:M:S>F?(v=x,Y.current="x"):(v=M,Y.current="y"),r(-v,-v)&&f.preventDefault()}var P=Object(t.useRef)(null);P.current={onTouchStart:w,onTouchMove:j,onTouchEnd:U,onWheel:L},t.useEffect(function(){function f(S){P.current.onTouchStart(S)}function x(S){P.current.onTouchMove(S)}function M(S){P.current.onTouchEnd(S)}function v(S){P.current.onWheel(S)}return document.addEventListener("touchmove",x,{passive:!1}),document.addEventListener("touchend",M,{passive:!1}),e.current.addEventListener("touchstart",f,{passive:!1}),e.current.addEventListener("wheel",v),function(){document.removeEventListener("touchmove",x),document.removeEventListener("touchend",M)}},[])}function Yt(){var e=Object(t.useRef)(new Map);function r(c){return e.current.has(c)||e.current.set(c,t.createRef()),e.current.get(c)}function n(c){e.current.delete(c)}return[r,n]}function nt(e,r){var n=t.useRef(e),c=t.useState({}),i=Object(R.a)(c,2),o=i[1];function l(s){var a=typeof s=="function"?s(n.current):s;a!==n.current&&r(a,n.current),n.current=a,o({})}return[n.current,l]}var rt=function(r){var n=r.position,c=r.prefixCls,i=r.extra;if(!i)return null;var o,l={};return i&&Object(Ce.a)(i)==="object"&&!t.isValidElement(i)?l=i:l.right=i,n==="right"&&(o=l.right),n==="left"&&(o=l.left),o?t.createElement("div",{className:"".concat(c,"-extra-content")},o):null};function Jt(e,r){var n,c=t.useContext(Fe),i=c.prefixCls,o=c.tabs,l=e.className,s=e.style,a=e.id,b=e.animated,y=e.activeKey,m=e.rtl,d=e.extra,E=e.editable,g=e.locale,C=e.tabPosition,D=e.tabBarGutter,V=e.children,$=e.onTabClick,w=e.onTabScroll,j=Object(t.useRef)(),U=Object(t.useRef)(),Y=Object(t.useRef)(),L=Object(t.useRef)(),P=Yt(),f=Object(R.a)(P,2),x=f[0],M=f[1],v=C==="top"||C==="bottom",S=nt(0,function(A,T){v&&w&&w({direction:A>T?"left":"right"})}),F=Object(R.a)(S,2),B=F[0],te=F[1],J=nt(0,function(A,T){!v&&w&&w({direction:A>T?"top":"bottom"})}),oe=Object(R.a)(J,2),q=oe[0],h=oe[1],I=Object(t.useState)(0),X=Object(R.a)(I,2),k=X[0],G=X[1],p=Object(t.useState)(0),N=Object(R.a)(p,2),ee=N[0],ie=N[1],ye=Object(t.useState)(null),ge=Object(R.a)(ye,2),Q=ge[0],H=ge[1],Ae=Object(t.useState)(null),Ee=Object(R.a)(Ae,2),ce=Ee[0],_=Ee[1],de=Object(t.useState)(0),Oe=Object(R.a)(de,2),sa=Oe[0],da=Oe[1],fa=Object(t.useState)(0),st=Object(R.a)(fa,2),va=st[0],ma=st[1],ba=Nt(new Map),dt=Object(R.a)(ba,2),ha=dt[0],pa=dt[1],Me=kt(o,ha,k),ya="".concat(i,"-nav-operations-hidden"),je=0,xe=0;v?m?(je=0,xe=Math.max(0,k-Q)):(je=Math.min(0,Q-k),xe=0):(je=Math.min(0,ce-ee),xe=0);function De(A){return A<je?je:A>xe?xe:A}var ft=Object(t.useRef)(),ga=Object(t.useState)(),vt=Object(R.a)(ga,2),ke=vt[0],mt=vt[1];function We(){mt(Date.now())}function Ke(){window.clearTimeout(ft.current)}Zt(j,function(A,T){function z(re,fe){re(function(Re){var He=De(Re+fe);return He})}if(v){if(Q>=k)return!1;z(te,A)}else{if(ce>=ee)return!1;z(h,T)}return Ke(),We(),!0}),Object(t.useEffect)(function(){return Ke(),ke&&(ft.current=window.setTimeout(function(){mt(0)},100)),Ke},[ke]);function bt(){var A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:y,T=Me.get(A)||{width:0,height:0,left:0,right:0,top:0};if(v){var z=B;m?T.right<B?z=T.right:T.right+T.width>B+Q&&(z=T.right+T.width-Q):T.left<-B?z=-T.left:T.left+T.width>-B+Q&&(z=-(T.left+T.width-Q)),h(0),te(De(z))}else{var re=q;T.top<-q?re=-T.top:T.top+T.height>-q+ce&&(re=-(T.top+T.height-ce)),te(0),h(De(re))}}var Ea=It(Me,{width:Q,height:ce,left:B,top:q},{width:k,height:ee},{width:sa,height:va},Object(W.a)(Object(W.a)({},e),{},{tabs:o})),ht=Object(R.a)(Ea,2),Oa=ht[0],Ca=ht[1],Ie={};C==="top"||C==="bottom"?Ie[m?"marginRight":"marginLeft"]=D:Ie.marginTop=D;var pt=o.map(function(A,T){var z=A.key;return t.createElement(Mt,{id:a,prefixCls:i,key:z,tab:A,style:T===0?void 0:Ie,closable:A.closable,editable:E,active:z===y,renderWrapper:V,removeAriaLabel:g==null?void 0:g.removeAriaLabel,ref:x(z),onClick:function(fe){$(z,fe)},onRemove:function(){M(z)},onFocus:function(){bt(z),We(),!!j.current&&(m||(j.current.scrollLeft=0),j.current.scrollTop=0)}})}),Ve=Ze(function(){var A,T,z,re,fe,Re,He=((A=j.current)===null||A===void 0?void 0:A.offsetWidth)||0,wa=((T=j.current)===null||T===void 0?void 0:T.offsetHeight)||0,xt=((z=L.current)===null||z===void 0?void 0:z.offsetWidth)||0,Tt=((re=L.current)===null||re===void 0?void 0:re.offsetHeight)||0;H(He),_(wa),da(xt),ma(Tt);var Pa=(((fe=U.current)===null||fe===void 0?void 0:fe.offsetWidth)||0)-xt,Na=(((Re=U.current)===null||Re===void 0?void 0:Re.offsetHeight)||0)-Tt;G(Pa),ie(Na),pa(function(){var Rt=new Map;return o.forEach(function(Aa){var wt=Aa.key,we=x(wt).current;we&&Rt.set(wt,{width:we.offsetWidth,height:we.offsetHeight,left:we.offsetLeft,top:we.offsetTop})}),Rt})}),Sa=o.slice(0,Oa),ja=o.slice(Ca+1),yt=[].concat(Object(Xe.a)(Sa),Object(Xe.a)(ja)),xa=Object(t.useState)(),gt=Object(R.a)(xa,2),Ta=gt[0],Ra=gt[1],ue=Me.get(y),Et=Object(t.useRef)();function Ot(){be.a.cancel(Et.current)}Object(t.useEffect)(function(){var A={};return ue&&(v?(m?A.right=ue.right:A.left=ue.left,A.width=ue.width):(A.top=ue.top,A.height=ue.height)),Ot(),Et.current=Object(be.a)(function(){Ra(A)}),Ot},[ue,v,m]),Object(t.useEffect)(function(){bt()},[y,ue,Me,v]),Object(t.useEffect)(function(){Ve()},[m,D,y,o.map(function(A){return A.key}).join("_")]);var Ct=!!yt.length,Te="".concat(i,"-nav-wrap"),$e,Ue,St,jt;return v?m?(Ue=B>0,$e=B+Q<k):($e=B<0,Ue=-B+Q<k):(St=q<0,jt=-q+ce<ee),t.createElement("div",{ref:r,role:"tablist",className:Z()("".concat(i,"-nav"),l),style:s,onKeyDown:function(){We()}},t.createElement(rt,{position:"left",extra:d,prefixCls:i}),t.createElement(Ge.default,{onResize:Ve},t.createElement("div",{className:Z()(Te,(n={},Object(K.a)(n,"".concat(Te,"-ping-left"),$e),Object(K.a)(n,"".concat(Te,"-ping-right"),Ue),Object(K.a)(n,"".concat(Te,"-ping-top"),St),Object(K.a)(n,"".concat(Te,"-ping-bottom"),jt),n)),ref:j},t.createElement(Ge.default,{onResize:Ve},t.createElement("div",{ref:U,className:"".concat(i,"-nav-list"),style:{transform:"translate(".concat(B,"px, ").concat(q,"px)"),transition:ke?"none":void 0}},pt,t.createElement(et,{ref:L,prefixCls:i,locale:g,editable:E,style:Object(W.a)(Object(W.a)({},pt.length===0?void 0:Ie),{},{visibility:Ct?"hidden":null})}),t.createElement("div",{className:Z()("".concat(i,"-ink-bar"),Object(K.a)({},"".concat(i,"-ink-bar-animated"),b.inkBar)),style:Ta}))))),t.createElement(Xt,Object(le.a)({},e,{removeAriaLabel:g==null?void 0:g.removeAriaLabel,ref:Y,prefixCls:i,tabs:yt,className:!Ct&&ya,tabMoving:!!ke})),t.createElement(rt,{position:"right",extra:d,prefixCls:i}))}var ot=t.forwardRef(Jt);function Qt(e){var r=e.id,n=e.activeKey,c=e.animated,i=e.tabPosition,o=e.rtl,l=e.destroyInactiveTabPane,s=t.useContext(Fe),a=s.prefixCls,b=s.tabs,y=c.tabPane,m=b.findIndex(function(d){return d.key===n});return t.createElement("div",{className:Z()("".concat(a,"-content-holder"))},t.createElement("div",{className:Z()("".concat(a,"-content"),"".concat(a,"-content-").concat(i),Object(K.a)({},"".concat(a,"-content-animated"),y)),style:m&&y?Object(K.a)({},o?"marginRight":"marginLeft","-".concat(m,"00%")):null},b.map(function(d){return t.cloneElement(d.node,{key:d.key,prefixCls:a,tabKey:d.key,id:r,animated:y,active:d.key===n,destroyInactiveTabPane:l})})))}function it(e){var r=e.prefixCls,n=e.forceRender,c=e.className,i=e.style,o=e.id,l=e.active,s=e.animated,a=e.destroyInactiveTabPane,b=e.tabKey,y=e.children,m=t.useState(n),d=Object(R.a)(m,2),E=d[0],g=d[1];t.useEffect(function(){l?g(!0):a&&g(!1)},[l,a]);var C={};return l||(s?(C.visibility="hidden",C.height=0,C.overflowY="hidden"):C.display="none"),t.createElement("div",{id:o&&"".concat(o,"-panel-").concat(b),role:"tabpanel",tabIndex:l?0:-1,"aria-labelledby":o&&"".concat(o,"-tab-").concat(b),"aria-hidden":!l,style:Object(W.a)(Object(W.a)({},C),i),className:Z()("".concat(r,"-tabpane"),l&&"".concat(r,"-tabpane-active"),c)},(l||E||n)&&y)}var qt=["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"],ct=0;function ea(e){return Object(Se.a)(e).map(function(r){if(t.isValidElement(r)){var n=r.key!==void 0?String(r.key):void 0;return Object(W.a)(Object(W.a)({key:n},r.props),{},{node:r})}return null}).filter(function(r){return r})}function ta(e,r){var n,c=e.id,i=e.prefixCls,o=i===void 0?"rc-tabs":i,l=e.className,s=e.children,a=e.direction,b=e.activeKey,y=e.defaultActiveKey,m=e.editable,d=e.animated,E=d===void 0?{inkBar:!0,tabPane:!1}:d,g=e.tabPosition,C=g===void 0?"top":g,D=e.tabBarGutter,V=e.tabBarStyle,$=e.tabBarExtraContent,w=e.locale,j=e.moreIcon,U=e.moreTransitionName,Y=e.destroyInactiveTabPane,L=e.renderTabBar,P=e.onChange,f=e.onTabClick,x=e.onTabScroll,M=Object(Pe.a)(e,qt),v=ea(s),S=a==="rtl",F;E===!1?F={inkBar:!1,tabPane:!1}:E===!0?F={inkBar:!0,tabPane:!0}:F=Object(W.a)({inkBar:!0,tabPane:!1},Object(Ce.a)(E)==="object"?E:{});var B=Object(t.useState)(!1),te=Object(R.a)(B,2),J=te[0],oe=te[1];Object(t.useEffect)(function(){oe(Object(Pt.a)())},[]);var q=Object(ze.a)(function(){var _;return(_=v[0])===null||_===void 0?void 0:_.key},{value:b,defaultValue:y}),h=Object(R.a)(q,2),I=h[0],X=h[1],k=Object(t.useState)(function(){return v.findIndex(function(_){return _.key===I})}),G=Object(R.a)(k,2),p=G[0],N=G[1];Object(t.useEffect)(function(){var _=v.findIndex(function(Oe){return Oe.key===I});if(_===-1){var de;_=Math.max(0,Math.min(p,v.length-1)),X((de=v[_])===null||de===void 0?void 0:de.key)}N(_)},[v.map(function(_){return _.key}).join("_"),I,p]);var ee=Object(ze.a)(null,{value:c}),ie=Object(R.a)(ee,2),ye=ie[0],ge=ie[1],Q=C;J&&!["left","right"].includes(C)&&(Q="top"),Object(t.useEffect)(function(){c||(ge("rc-tabs-".concat(ct)),ct+=1)},[]);function H(_,de){f==null||f(_,de);var Oe=_!==I;X(_),Oe&&(P==null||P(_))}var Ae={id:ye,activeKey:I,animated:F,tabPosition:Q,rtl:S,mobile:J},Ee,ce=Object(W.a)(Object(W.a)({},Ae),{},{editable:m,locale:w,moreIcon:j,moreTransitionName:U,tabBarGutter:D,onTabClick:H,onTabScroll:x,extra:$,style:V,panes:s});return L?Ee=L(ce,ot):Ee=t.createElement(ot,ce),t.createElement(Fe.Provider,{value:{tabs:v,prefixCls:o}},t.createElement("div",Object(le.a)({ref:r,id:c,className:Z()(o,"".concat(o,"-").concat(Q),(n={},Object(K.a)(n,"".concat(o,"-mobile"),J),Object(K.a)(n,"".concat(o,"-editable"),m),Object(K.a)(n,"".concat(o,"-rtl"),S),n),l)},M),Ee,t.createElement(Qt,Object(le.a)({destroyInactiveTabPane:Y},Ae,{animated:F}))))}var lt=t.forwardRef(ta);lt.TabPane=it;var aa=lt,na=aa,Be=O("MZF8"),ne=O("dEAq"),ra=O("H1Ra"),Ma=O("RZMt");function se(e,r){return la(e)||ca(e,r)||ia(e,r)||oa()}function oa(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ia(e,r){if(!!e){if(typeof e=="string")return ut(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ut(e,r)}}function ut(e,r){(r==null||r>e.length)&&(r=e.length);for(var n=0,c=new Array(r);n<r;n++)c[n]=e[n];return c}function ca(e,r){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var c=[],i=!0,o=!1,l,s;try{for(n=n.call(e);!(i=(l=n.next()).done)&&(c.push(l.value),!(r&&c.length===r));i=!0);}catch(a){o=!0,s=a}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw s}}return c}}function la(e){if(Array.isArray(e))return e}function Le(e,r){var n,c=(n=e.match(/\.(\w+)$/))===null||n===void 0?void 0:n[1];return c||(c=r.tsx?"tsx":"jsx"),c}var ua=function(r){var n,c,i,o=Object(t.useRef)(),l=Object(t.useContext)(ne.context),s=l.locale,a=Object(ne.useLocaleProps)(s,r),b=Object(ne.useDemoUrl)(a.identifier),y=a.demoUrl||b,m=(Be.a===null||Be.a===void 0?void 0:Be.a.location.hash)==="#".concat(a.identifier),d=Object.keys(a.sources).length===1,E=Object(ne.useCodeSandbox)(((n=a.hideActions)===null||n===void 0?void 0:n.includes("CSB"))?null:a),g=Object(ne.useRiddle)(((c=a.hideActions)===null||c===void 0?void 0:c.includes("RIDDLE"))?null:a),C=Object(ne.useMotions)(a.motions||[],o.current),D=se(C,2),V=D[0],$=D[1],w=Object(ne.useCopy)(),j=se(w,2),U=j[0],Y=j[1],L=Object(t.useState)(function(){return a.sources._?"_":Object.keys(a.sources)[0]}),P=se(L,2),f=P[0],x=P[1],M=Object(t.useState)(Le(f,a.sources[f])),v=se(M,2),S=v[0],F=v[1],B=Object(t.useState)(Boolean(a.defaultShowCode)),te=se(B,2),J=te[0],oe=te[1],q=Object(t.useState)(Math.random()),h=se(q,2),I=h[0],X=h[1],k=a.sources[f][S]||a.sources[f].content,G=Object(ne.useTSPlaygroundUrl)(s,k),p=Object(t.useRef)(),N=Object(ne.usePrefersColor)(),ee=se(N,1),ie=ee[0],ye=a.actionBarRender,ge=ye===void 0?function(H){return H}:ye;Object(t.useEffect)(function(){X(Math.random())},[ie]);function Q(H){x(H),F(Le(H,a.sources[H]))}return u.a.createElement("div",{style:a.style,className:[a.className,"__dumi-default-previewer",m?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:a.identifier,"data-debug":a.debug||void 0,"data-iframe":a.iframe||void 0},a.iframe&&u.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),u.a.createElement("div",{ref:o,className:"__dumi-default-previewer-demo",style:{transform:a.transform?"translate(0, 0)":void 0,padding:a.compact||a.iframe&&a.compact!==!1?"0":void 0,background:a.background}},a.iframe?u.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(a.iframe).replace(/(\d)$/,"$1px")},key:I,src:y,ref:p}):a.children),u.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":a.title},a.title&&u.a.createElement(ne.AnchorLink,{to:"#".concat(a.identifier)},a.title),a.description&&u.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.description}})),u.a.createElement("div",{className:"__dumi-default-previewer-actions"},ge(u.a.createElement(u.a.Fragment,null,E&&u.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:E}),g&&u.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:g}),a.motions&&u.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:$,onClick:function(){return V()}}),a.iframe&&u.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:function(){return X(Math.random())}}),!((i=a.hideActions)===null||i===void 0?void 0:i.includes("EXTERNAL"))&&u.a.createElement(ne.Link,{target:"_blank",to:y},u.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),u.a.createElement("span",null),u.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":Y,onClick:function(){return U(k)}}),S==="tsx"&&J&&u.a.createElement(ne.Link,{target:"_blank",to:G},u.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),u.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(J?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:function(){return oe(!J)}})))),J&&u.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!d&&u.a.createElement(na,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:f,onChange:Q},Object.keys(a.sources).map(function(H){return u.a.createElement(it,{tab:H==="_"?"index.".concat(Le(H,a.sources[H])):H,key:H})})),u.a.createElement("div",{className:"__dumi-default-previewer-source"},u.a.createElement(ra.a,{code:k,lang:S,showCopy:!1}))))},ka=ve.default=ua},tOfU:function(_e,ve,O){"use strict";O.r(ve);var t=O("q1tI"),u=O.n(t),le=O("dEAq"),K=O.n(le),R=O("Zxc8"),Ce=O("H1Ra"),Pe=u.a.memo(W=>{var me=W.demos,Z=me["form-render-rightpath"].component;return u.a.createElement(u.a.Fragment,null,u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"markdown"},u.a.createElement("h2",{id:"\u5982\u4F55\u6B63\u786E\u4E66\u5199-path"},u.a.createElement(le.AnchorLink,{to:"#\u5982\u4F55\u6B63\u786E\u4E66\u5199-path","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"\u5982\u4F55\u6B63\u786E\u4E66\u5199 path"),u.a.createElement("p",null,"\u5F53\u4F60\u9700\u8981\u8C03\u7528 setSchemaByPath \u65F6\uFF0C\u9700\u8981\u4E66\u5199\u6539\u52A8\u7684\u8868\u5355\u5143\u7D20\u5BF9\u5E94\u7684 path\u3002\u5982\u679C\u5143\u7D20\u7ED3\u6784\u5F88\u6DF1\uFF0C\u5982\u4F55\u5199\u6B63\u786E\u7684 path \u5462\uFF1F"),u.a.createElement("p",null,"\u4F8B\u5982"),u.a.createElement(Ce.a,{code:"const formData = { x: [{ y: { z: 1 } }] };",lang:"js"}),u.a.createElement("p",null,"\u6211\u4EEC\u8981\u4FEE\u6539 z=1 \u53D8\u6210 z=2\uFF0C\u719F\u6089 lodash \u7684\u540C\u5B66\uFF0C\u90FD\u77E5\u9053\u9700\u8981, lodash \u7684 set \u51FD\u6570",u.a.createElement("code",null,"_.set(object, path, value)")),u.a.createElement(Ce.a,{code:`import _ from 'lodash';
_.set(formData, 'x[0].y.z', 2);`,lang:"js"}),u.a.createElement("p",null,"\u6240\u4EE5\u4E0A\u8FF0\u60C5\u51B5\u4E0B path \u662F",u.a.createElement("code",null,"'x[0].y.z'"),"\u3002\u5728 form-render \u91CC\u7684\u6D89\u53CA list \u7684 schema\uFF0C\u6240\u6709 item \u7684 schema \u662F\u4E00\u81F4\u7684\uFF0C\u6240\u4EE5\u6CA1\u6709\u4FEE\u6539\u7279\u5B9A index \u4E0B\u7684 schema \u7684\u6982\u5FF5\uFF0C\u90A3\u4E48\u5982\u679C\u4F60\u5E0C\u671B setSchemaByPath \u4FEE\u6539\u6240\u6709 index \u4E0B\u7684 schema\uFF0C\u5728 form-render \u91CC\u6B63\u786E\u7684 path \u662F",u.a.createElement("code",null,"'x[].y.z'"))),u.a.createElement(R.default,me["form-render-rightpath"].previewerProps,u.a.createElement(Z,null))))});ve.default=W=>{var me=u.a.useContext(le.context),Z=me.demos;return u.a.useEffect(()=>{var Se;W!=null&&(Se=W.location)!==null&&Se!==void 0&&Se.hash&&le.AnchorLink.scrollToAnchor(decodeURIComponent(W.location.hash.slice(1)))},[]),u.a.createElement(Pe,{demos:Z})}}}]);
