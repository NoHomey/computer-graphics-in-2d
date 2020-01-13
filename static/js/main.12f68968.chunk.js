(this["webpackJsonpcomp-graphs"]=this["webpackJsonpcomp-graphs"]||[]).push([[0],{66:function(e,t,n){e.exports=n(77)},77:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(16),o=n.n(c),u=n(32),l=n(118),i=n(60),s=n(117),d=n(9),f=n(19),b="set-task";function v(e){return{type:b,payload:{task:e}}}var p;!function(e){e[e.Task1=0]="Task1",e[e.Task2=1]="Task2",e[e.Task3=2]="Task3"}(p||(p={}));var g=p,x=g.Task1;var h,m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return t.payload.task;default:return e}},y=n(10);!function(e){e[e.Background=0]="Background",e[e.Fill=1]="Fill",e[e.Contour=2]="Contour",e[e.Contrast=3]="Contrast"}(h||(h={}));var k,j=h,O="set-pixel-color",C=function(e){return function(t){return{type:O,payload:{pixelKind:e,color:t}}}},w=C(j.Background),E=C(j.Fill),B=C(j.Contour),D=C(j.Contrast);!function(e){e.Blue="Blue",e.Crimson="Crimson",e.DarkCyan="DarkCyan",e.DarkGreen="DarkGreen",e.DarkOrange="DarkOrange",e.DodgerBlue="DarkBlue",e.Gold="Gold",e.Green="Green",e.LawnGreen="LawnGreen",e.LightSeaGreen="LightSeaGreen",e.MediumBlue="MediumBlue",e.Orange="Orange",e.Red="Red",e.Purple="Purple",e.SteelBlue="SteelBlue",e.Indigo="Indigo",e.FireBrick="FireBrick",e.DarkMagenta="DarkMagenta"}(k||(k={}));var T,M=k,S=(T={},Object(y.a)(T,j.Background,M.Green),Object(y.a)(T,j.Fill,M.Blue),Object(y.a)(T,j.Contour,M.Red),Object(y.a)(T,j.Contrast,M.Gold),T);var F=function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case O:return e=n,t=r.payload,Object(u.a)({},e,Object(y.a)({},t.pixelKind,t.color));default:return n}};var G="set-raster-display-rows";function L(e){return{type:G,payload:{rows:e}}}var I="set-raster-display-cols";function R(e){return{type:I,payload:{cols:e}}}var z="add-pixel-to-selected",H=j.Contour;var W=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:H;return{type:z,payload:{pixel:e,kind:t}}},_="remove-pixel-from-selected";var A=function(e){return{type:_,payload:e}},P="set-kind-to-pixel";var K=function(e,t){return{type:P,payload:{pixel:e,pixelKind:t}}},J="clear-raster-display";var q=function(){return{type:J}},N=n(34);var Q=function(e,t){return Object(N.a)(Array(e).fill(j.Background).map((function(e){return Object(N.a)(Array(t).fill(j.Background))})))},U={rows:16,cols:32,display:Q(16,32)};function V(e){var t=e.rows,n=e.cols;return{rows:t,cols:n,display:Q(t,n)}}function X(e,t,n){var r=t.x,a=t.y;return Object(u.a)({},e,{display:e.display.setIn([a,r],n)})}var Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:var n=e.cols;return V({rows:t.payload.rows,cols:n});case I:return V({rows:e.rows,cols:t.payload.cols});case P:var r=e.rows,a=e.cols,c=t.payload,o=c.pixel,u=c.pixelKind;return o.x<0||o.x>=a||o.y<0||o.y>=r?e:X(e,o,u);case z:var l=t.payload;return X(e,l.pixel,l.kind);case _:return X(e,t.payload,j.Background);case b:return V({rows:e.rows,cols:e.cols});case J:return V({rows:e.rows,cols:e.cols});default:return e}},Z="resize";var $=function(e){return{type:Z,payload:e}},ee="object"===typeof window?{width:window.innerWidth,height:window.innerHeight}:{width:1080,height:720};var te={pixelColor:F,rasterDisplay:Y,screenSize:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Z:return t.payload;default:return e}}},ne=Object(f.c)(te),re="chage-config";function ae(){return{type:re,payload:{}}}var ce=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case re:return!e;default:return e}},oe="set-delay";function ue(e){return{type:oe,payload:{delay:e}}}var le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:300,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case oe:return t.payload.delay;default:return e}},ie="set-dash-length";function se(e){return{type:ie,payload:{dashLength:e}}}var de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ie:return t.payload.dashLength;default:return e}},fe="enable-config";var be=function(){return{type:fe}},ve=Object(N.b)();function pe(e){var t=e.x,n=e.y;return Object(N.a)([t,n])}function ge(e,t){return e.has(pe(t))}var xe="disable-config";var he=function(){return{type:xe}};var me="set-pointer-width";var ye=function(e){return{type:me,payload:{pointerWidth:e}}};var ke="set-pointer-height";var je=function(e){return{type:ke,payload:{pointerHeight:e}}};var Oe={task:m,rasterConfig:ne,configRaster:ce,delay:le,dashLength:de,selectedPixels:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:var n=t.payload.pixel;return e.add(pe(n));case _:var r=t.payload;return e.delete(pe(r));case b:case fe:return ve;default:return e}},config:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case fe:return!0;case xe:return!1;default:return e}},pointerWidth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case me:return t.payload.pointerWidth;default:return e}},pointerHeight:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ke:return t.payload.pointerHeight;default:return e}}},Ce=Object(f.c)(Oe),we=n(61),Ee=n(13),Be=n.n(Ee),De=n(6),Te="select-pixel";var Me=function(e){return{type:Te,payload:e}};var Se=function(e){return e.selectedPixels};var Fe,Ge=function(e){return e.task},Le=Be.a.mark(He),Ie=Be.a.mark(We),Re=Be.a.mark(Ae),ze=Be.a.mark(Pe);function He(e,t){return Be.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(t<2)){n.next=4;break}return n.next=3,Object(De.d)(W(e));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),Le)}function We(e,t){return Be.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(t<2)){n.next=4;break}return n.next=3,Object(De.d)(W(e,j.Fill));case 3:return n.abrupt("return",n.sent);case 4:if(!(t<4)){n.next=8;break}return n.next=7,Object(De.d)(W(e,j.Contour));case 7:return n.abrupt("return",n.sent);case 8:case"end":return n.stop()}}),Ie)}var _e=(Fe={},Object(y.a)(Fe,g.Task1,He),Object(y.a)(Fe,g.Task2,He),Object(y.a)(Fe,g.Task3,We),Fe);function Ae(e){var t,n,r,a,c,o;return Be.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return t=e.payload,n=t,u.next=4,Object(De.e)(Se);case 4:return r=u.sent,u.next=7,Object(De.e)(Ge);case 7:if(a=u.sent,c=ge(r,n),o=r.size,!c){u.next=16;break}return u.next=13,Object(De.d)(A(n));case 13:return u.abrupt("return",u.sent);case 16:return u.next=18,_e[a](n,o);case 18:return u.abrupt("return",u.sent);case 19:case"end":return u.stop()}}),Re)}function Pe(){return Be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(De.f)(Te,Ae);case 2:case"end":return e.stop()}}),ze)}var Ke=Pe,Je="draw";var qe=function(){return{type:Je}};var Ne=function(e){return e.delay};var Qe=function(e){return e.dashLength};var Ue=function(e){return e.pointerWidth};var Ve=function(e){return e.pointerHeight};var Xe=function(e,t){var n=t.x,r=t.y;return e.rasterConfig.rasterDisplay.display.getIn([r,n])},Ye=Be.a.mark(ct),Ze=Be.a.mark(ot),$e=Be.a.mark(lt),et=Be.a.mark(it),tt=Be.a.mark(st),nt=Be.a.mark(ft),rt=Be.a.mark(bt),at=Be.a.mark(pt);function ct(){var e,t,n,r,a,c,o,u,l,i,s,d;return Be.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Object(De.e)(Se);case 2:return e=f.sent,f.next=5,Object(De.e)(Ne);case 5:return t=f.sent,f.next=8,Object(De.e)(Ge);case 8:return n=f.sent,r=e.toArray(),a=r[0].get(0),c=r[0].get(1),o=r[1].get(0),u=r[1].get(1),f.next=16,Object(De.d)(he());case 16:if(n===g.Task3){f.next=21;break}return f.next=19,Object(De.b)(n===g.Task1?lt:it,t,a,c,o,u);case 19:f.next=27;break;case 21:return l=r[2].get(0),i=r[2].get(1),s=r[3].get(0),d=r[3].get(1),f.next=27,Object(De.b)(st,t,a,c,o,u,l,i,s,d);case 27:return f.next=29,Object(De.d)(be());case 29:case"end":return f.stop()}}),Ye)}function ot(){return Be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(De.f)(Je,ct);case 2:case"end":return e.stop()}}),Ze)}var ut=ot;function lt(e,t,n,r,a){var c,o,u,l,i,s,d,f,b,v,p,g,x,h,m;return Be.a.wrap((function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Object(De.e)(Qe);case 2:return c=y.sent,y.next=5,Object(De.d)(K({x:t,y:n},j.Background));case 5:return y.next=7,Object(De.c)(e);case 7:return y.next=9,Object(De.d)(K({x:r,y:a},j.Background));case 9:o=Math.abs(r-t),u=Math.abs(a-n),(l=o<u)&&(i=t,t=n,n=i,i=r,r=a,a=i,i=o,o=u,u=i),s=-2*o+2*u,d=2*u,f=t<=r?1:-1,b=n<=a?1:-1,v=2*u-o,p=t,g=n,x=0,h=!1,m=0;case 23:if(!(m<=o)){y.next=41;break}if(h){y.next=34;break}return y.next=27,Object(De.c)(e);case 27:if(!l){y.next=32;break}return y.next=30,Object(De.d)(K({x:g,y:p},j.Contour));case 30:y.next=34;break;case 32:return y.next=34,Object(De.d)(K({x:p,y:g},j.Contour));case 34:++x===c&&(h=!h,x=0),p+=f,v>0?(v+=s,g+=b):v+=d;case 38:++m,y.next=23;break;case 41:case"end":return y.stop()}}),$e)}function it(e,t,n,r,a){var c,o,u,l,i,s,d,f,b,v,p;return Be.a.wrap((function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Object(De.e)(Ue);case 2:return c=g.sent,g.next=5,Object(De.e)(Ve);case 5:return o=g.sent,u=dt(e,c,o),g.next=9,Object(De.d)(K({x:t,y:n},j.Background));case 9:return g.next=11,Object(De.c)(e);case 11:return g.next=13,Object(De.d)(K({x:r,y:a},j.Background));case 13:return g.next=15,Object(De.c)(e);case 15:return l=t,i=n,s=r-t,d=a-n,f=Math.floor(Math.sqrt(s*s+d*d)+.5),b=0,v=f,p=2-2*f,g.next=25,u(l,i+f);case 25:return g.next=27,Object(De.c)(e);case 27:return g.next=29,u(l,i-f);case 29:return g.next=31,Object(De.c)(e);case 31:return g.next=33,u(l+f,i);case 33:return g.next=35,Object(De.c)(e);case 35:return g.next=37,u(l-f,i);case 37:if(p>-v&&(--v,p+=1-2*v),p<=b&&(++b,p+=1+2*b),!(v<0)){g.next=42;break}return g.abrupt("return");case 42:return g.next=45,u(l+b,i+v);case 45:return g.next=47,u(l+b,i-v);case 47:return g.next=49,u(l-b,i+v);case 49:return g.next=51,u(l-b,i-v);case 51:g.next=37;break;case 53:case"end":return g.stop()}}),et)}function st(e,t,n,r,a,c,o,u,l){var i,s,d,f;return Be.a.wrap((function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,ft({x:t,y:n},{x:r,y:a},e,j.Fill);case 2:return i=Math.min(c,u),s=Math.max(c,u),d=Math.min(o,l),f=Math.max(o,l),b.next=8,bt(i,s,d,f,e);case 8:return b.next=10,pt(e,t,n,r,a,i,s,d,f);case 10:case"end":return b.stop()}}),tt)}function dt(e,t,n){var r=Math.floor(t/2),a=Math.floor(n/2);return Be.a.mark((function c(o,u){var l,i,s,d,f;return Be.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:l=0;case 1:if(!(l<t)){c.next=23;break}i=0;case 3:if(!(i<n)){c.next=20;break}return s={x:o-r+l,y:u-a+i},c.next=9,Object(De.e)(Xe,s);case 9:return d=c.sent,f=j.Fill,d!==j.Background&&(f=j.Contrast),(l===r&&i===a||d===j.Contour)&&(f=j.Contour),c.next=15,Object(De.c)(e);case 15:return c.next=17,Object(De.d)(K(s,f));case 17:++i,c.next=3;break;case 20:++l,c.next=1;break;case 23:case"end":return c.stop()}}),c)}))}function ft(e,t,n,r){var a,c,o,u,l,i,s,d,f,b,v,p,g,x,h,m;return Be.a.wrap((function(y){for(;;)switch(y.prev=y.next){case 0:return a=e.x,c=e.y,o=t.x,u=t.y,y.next=4,Object(De.d)(K({x:a,y:c},j.Background));case 4:return y.next=6,Object(De.c)(n);case 6:return y.next=8,Object(De.d)(K({x:o,y:u},j.Background));case 8:l=Math.abs(o-a),i=Math.abs(u-c),(s=l<i)&&(d=a,a=c,c=d,d=o,o=u,u=d,d=l,l=i,i=d),f=-2*l+2*i,b=2*i,v=a<=o?1:-1,p=c<=u?1:-1,g=2*i-l,x=a,h=c,m=0;case 20:if(!(m<=l)){y.next=35;break}return y.next=23,Object(De.c)(n);case 23:if(!s){y.next=28;break}return y.next=26,Object(De.d)(K({x:h,y:x},r));case 26:y.next=30;break;case 28:return y.next=30,Object(De.d)(K({x:x,y:h},r));case 30:x+=v,g>0?(g+=f,h+=p):g+=b;case 32:++m,y.next=20;break;case 35:case"end":return y.stop()}}),nt)}function bt(e,t,n,r,a){var c,o,u,l;return Be.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:c=e;case 1:if(!(c<=t)){i.next=7;break}return i.next=4,Object(De.d)(K({x:c,y:n},j.Contour));case 4:++c,i.next=1;break;case 7:return i.next=9,Object(De.c)(a);case 9:o=n;case 10:if(!(o<=r)){i.next=16;break}return i.next=13,Object(De.d)(K({x:t,y:o},j.Contour));case 13:++o,i.next=10;break;case 16:return i.next=18,Object(De.c)(a);case 18:u=t;case 19:if(!(u>=e)){i.next=25;break}return i.next=22,Object(De.d)(K({x:u,y:r},j.Contour));case 22:--u,i.next=19;break;case 25:return i.next=27,Object(De.c)(a);case 27:l=r;case 28:if(!(l>=n)){i.next=34;break}return i.next=31,Object(De.d)(K({x:e,y:l},j.Contour));case 31:--l,i.next=28;break;case 34:case"end":return i.stop()}}),rt)}function vt(e,t,n,r){var a=!0;if(e>0){var c=t/e;c<n?a=!1:r=Math.min(c,r)}if(e<0){var o=t/e;o>r?a=!1:n=Math.max(o,n)}return t<0&&(a=!1),{visible:a,t_in:n,t_out:r}}function pt(e,t,n,r,a,c,o,u,l){var i,s,d,f,b,v;return Be.a.wrap((function(p){for(;;)switch(p.prev=p.next){case 0:if(0,1,s=a-n,d=vt(-(i=r-t),o-t,0,1),console.log(d),!d.visible){p.next=20;break}if(f=vt(i,t-c,d.t_in,d.t_out),console.log(f),!f.visible){p.next=20;break}if(b=vt(-s,l-n,f.t_in,f.t_out),console.log(b),!b.visible){p.next=20;break}if(v=vt(s,n-u,b.t_in,b.t_out),console.log(v),!v.visible){p.next=20;break}return p.next=20,ft({x:t,y:n},{x:r,y:a},e,j.Contrast);case 20:case"end":return p.stop()}}),at)}var gt=Be.a.mark(xt);function xt(){return Be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(De.a)([Ke(),ut()]);case 2:case"end":return e.stop()}}),gt)}var ht=xt;var mt=function(){var e=Object(we.a)(),t=Object(f.e)(Ce,Object(f.a)(e));return"object"===typeof window&&window.addEventListener("resize",(function(){var e={width:window.innerWidth,height:window.innerHeight};t.dispatch($(e))})),e.run(ht),t},yt=n(109),kt=function(e){var t=e.raster,n=e.pixelMap,r=e.dispatch;return a.a.createElement(yt.a,{container:!0,direction:"column",justify:"center"},t.reverse().map((function(e,c){return a.a.createElement(yt.a,{item:!0,container:!0,direction:"row",justify:"center",key:c},e.map((function(e,o){return a.a.createElement(yt.a,{item:!0,style:n[e],onClick:function(){return r(Me({x:o,y:t.size-1-c}))},key:(c+1)*(o+1)})})))})))},jt=n(20);var Ot=function(e,t,n){return{backgroundColor:e,minWidth:t,minHeight:n,border:"1px solid white"}};var Ct=function(e,t,n){var r;return r={},Object(y.a)(r,j.Background,Ot(e[j.Background],t,n)),Object(y.a)(r,j.Fill,Ot(e[j.Fill],t,n)),Object(y.a)(r,j.Contour,Ot(e[j.Contour],t,n)),Object(y.a)(r,j.Contrast,Ot(e[j.Contrast],t,n)),r},wt=Object(jt.a)((function(e){return e.rasterConfig.screenSize.width}),(function(e){return e.rasterConfig.rasterDisplay.cols}),(function(e,t){return Math.floor(e/t)})),Et=Object(jt.a)((function(e){return e.rasterConfig.screenSize.height}),(function(e){return e.rasterConfig.rasterDisplay.rows}),(function(e,t){return Math.floor((e-61)/t)})),Bt=Object(jt.a)((function(e){return e.rasterConfig.pixelColor}),wt,Et,Ct),Dt=Object(d.b)((function(e){return{raster:e.rasterConfig.rasterDisplay.display,pixelMap:Bt(e)}}))(kt),Tt=n(116),Mt=n(115),St=n(120),Ft=n(121),Gt=n(113),Lt=n(119),It=n(59),Rt=[M.Blue,M.Crimson,M.DarkCyan,M.DarkGreen,M.DarkOrange,M.DodgerBlue,M.Gold,M.Green,M.LawnGreen,M.LightSeaGreen,M.MediumBlue,M.Orange,M.Red,M.Purple,M.SteelBlue,M.Indigo,M.FireBrick,M.DarkMagenta],zt=Object(It.a)({select:{color:function(e){return e.selected}}}),Ht=function(e){var t,n,r=zt(e),c="color-picker-"+e.label;return a.a.createElement(Gt.a,null,a.a.createElement(St.a,{id:c},e.label),a.a.createElement(Lt.a,{classes:{select:r.select},labelId:c,value:e.selected,onChange:(t=e.selected,n=e.onChange,function(e){var r=e.target.value;r!==t&&n(r)})},Rt.filter((function(t){return t!==e.removeColor1&&t!==e.removeColor2&&t!==e.removeColor3})).map((function(e,t){return a.a.createElement(Ft.a,{key:"".concat(t,"-").concat(e),value:e,style:{color:e}},e)}))))};var Wt=Object(d.b)((function(e){var t=e.rasterConfig.pixelColor;return{label:"Background",selected:t[j.Background],removeColor1:t[j.Fill],removeColor2:t[j.Contour],removeColor3:t[j.Contrast]}}),{onChange:w})(Ht),_t=Object(d.b)((function(e){var t=e.rasterConfig.pixelColor;return{label:"Fill",selected:t[j.Fill],removeColor1:t[j.Background],removeColor2:t[j.Contour],removeColor3:t[j.Contrast]}}),{onChange:E})(Ht),At=Object(d.b)((function(e){var t=e.rasterConfig.pixelColor;return{label:"Contour",selected:t[j.Contour],removeColor1:t[j.Fill],removeColor2:t[j.Background],removeColor3:t[j.Contrast]}}),{onChange:B})(Ht),Pt=Object(d.b)((function(e){var t=e.rasterConfig.pixelColor;return{label:"Contrast",selected:t[j.Contrast],removeColor1:t[j.Background],removeColor2:t[j.Contour],removeColor3:t[j.Fill]}}),{onChange:D})(Ht),Kt=function(){for(var e=new Array(71),t=10;t<=80;++t)e[t-10]=t;return e}().map((function(e,t){return a.a.createElement(Ft.a,{value:e,key:t},e)})),Jt=function(e){var t,n,r=e.label,c=e.value,o=e.onChange,u="pixel-count-"+r;return a.a.createElement(Gt.a,null,a.a.createElement(St.a,{id:u},r),a.a.createElement(Lt.a,{labelId:u,value:c,onChange:(t=c,n=o,function(e){var r=e.target.value;r!==t&&n(r)})},Kt))};var qt=Object(d.b)((function(e){return{label:"Rows",value:e.rasterConfig.rasterDisplay.rows}}),{onChange:L})(Jt),Nt=Object(d.b)((function(e){return{label:"Cols",value:e.rasterConfig.rasterDisplay.cols}}),{onChange:R})(Jt),Qt=n(114);var Ut=function(e){return!e.config},Vt=Object(d.b)((function(e){return{disabled:Ut(e)}}),{changeConfig:ae})((function(e){return a.a.createElement(Qt.a,{color:e.configRaster?"primary":"secondary",onClick:e.changeConfig,variant:e.configRaster?"contained":"outlined",disabled:e.disabled},e.configRaster?"Next":"Back")})),Xt=function(){return a.a.createElement(yt.a,{container:!0,direction:"row",justify:"space-evenly",alignItems:"center"},a.a.createElement(yt.a,{item:!0},a.a.createElement(Wt,null)),a.a.createElement(yt.a,{item:!0},a.a.createElement(_t,null)),a.a.createElement(yt.a,{item:!0},a.a.createElement(At,null)),a.a.createElement(yt.a,{item:!0},a.a.createElement(Pt,null)),a.a.createElement(yt.a,{item:!0},a.a.createElement(qt,null)),a.a.createElement(yt.a,{item:!0},a.a.createElement(Nt,null)),a.a.createElement(yt.a,{item:!0},a.a.createElement(Vt,{configRaster:!0})))};var Yt=Object(d.b)((function(e){return{task:Ge(e),disabled:Ut(e)}}),{onTaskChange:v})((function(e){return a.a.createElement(Gt.a,null,a.a.createElement(St.a,{id:"task"},"Task"),a.a.createElement(Lt.a,{labelId:"task",value:e.task,disabled:e.disabled,onChange:(t=e.task,n=e.onTaskChange,function(e){var r=e.target.value;r!==t&&n(r)})},a.a.createElement(Ft.a,{value:g.Task1},"Task 1"),a.a.createElement(Ft.a,{value:g.Task2},"Task 2"),a.a.createElement(Ft.a,{value:g.Task3},"Task 3")));var t,n})),Zt=[100,200,300,500,700,800,1e3,1200,1500].map((function(e){return a.a.createElement(Ft.a,{key:e,value:e},e<1e3?"".concat(e," ms"):"".concat(e/1e3," sec"))}));var $t=Object(d.b)((function(e){return{delay:Ne(e),disabled:Ut(e)}}),{onDelayChange:ue})((function(e){return a.a.createElement(Gt.a,null,a.a.createElement(St.a,{id:"delay"},"Delay"),a.a.createElement(Lt.a,{labelId:"delay",value:e.delay,disabled:e.disabled,onChange:(t=e.delay,n=e.onDelayChange,function(e){var r=e.target.value;r!==t&&n(r)})},Zt));var t,n})),en=[1,2,3,4,5].map((function(e){return a.a.createElement(Ft.a,{key:e,value:e},"".concat(e," pixels"))}));var tn=Object(d.b)((function(e){return{dashLength:Qe(e),disabled:Ut(e)}}),{onDelayChange:se})((function(e){return a.a.createElement(Gt.a,null,a.a.createElement(St.a,{id:"dash-length"},"Dash"),a.a.createElement(Lt.a,{labelId:"dash-length",value:e.dashLength,disabled:e.disabled,onChange:(t=e.dashLength,n=e.onDelayChange,function(e){var r=e.target.value;r!==t&&n(r)})},en));var t,n})),nn=[1,2,3,4,5].map((function(e,t){return a.a.createElement(Ft.a,{value:e,key:t},e)})),rn=function(e){var t,n,r=e.label,c=e.value,o=e.disabled,u=e.onChange,l="pointer-"+r;return a.a.createElement(Gt.a,null,a.a.createElement(St.a,{id:l},r),a.a.createElement(Lt.a,{labelId:l,value:c,disabled:o,onChange:(t=c,n=u,function(e){var r=e.target.value;r!==t&&n(r)})},nn))};var an,cn,on=Object(d.b)((function(e){return{label:"Width",disabled:Ut(e),value:Ue(e)}}),{onChange:ye})(rn),un=Object(d.b)((function(e){return{label:"Height",disabled:Ut(e),value:Ve(e)}}),{onChange:je})(rn),ln=n(122),sn=(an={},Object(y.a)(an,g.Task1,(function(e){switch(e.size){case 0:return"Select line edges";case 1:return"Selected 1/2 points";default:return"Line edges selected"}})),Object(y.a)(an,g.Task2,(function(e){switch(e.size){case 0:return"Select circle center";case 1:return"Select circle end point";default:return"Circle center and radius selected"}})),Object(y.a)(an,g.Task3,(function(e){switch(e.size){case 0:return"Select line edges";case 1:return"Selected 1/2 line edges";case 2:return"Select rectangle edges";case 3:return"Selected 1/2 rectangle edges";default:return"All input has been entered"}})),an),dn=Object(jt.a)(Ge,Se,(function(e,t){return sn[e](t)})),fn=Object(d.b)((function(e){return{feedback:dn(e),disable:Ut(e)}}))((function(e){var t=e.feedback,n=e.disable;return a.a.createElement(ln.a,{variant:"outlined",color:n?"default":"primary",label:t})}));function bn(e){return 2===e.size}var vn=(cn={},Object(y.a)(cn,g.Task1,bn),Object(y.a)(cn,g.Task2,bn),Object(y.a)(cn,g.Task3,(function(e){return 4===e.size})),cn),pn=Object(jt.a)(Ge,Se,(function(e,t){return vn[e](t)})),gn=Object(d.b)((function(e){return{canDraw:pn(e),disabled:Ut(e)}}),{draw:qe})((function(e){var t=e.canDraw,n=e.draw,r=e.disabled;return a.a.createElement(Qt.a,{variant:"contained",color:"primary",disabled:!t||r,onClick:n},"Draw")})),xn=Object(d.b)((function(e){return{disabled:Ut(e)}}),{clear:q})((function(e){var t=e.disabled,n=e.clear;return a.a.createElement(Qt.a,{variant:"outlined",color:"secondary",disabled:t,onClick:n},"Clear")})),hn=Object(d.b)((function(e){return{task:Ge(e)}}))((function(e){var t=e.task;return a.a.createElement(yt.a,{container:!0,direction:"row",justify:"space-evenly",alignItems:"center"},a.a.createElement(yt.a,{item:!0},a.a.createElement(Vt,{configRaster:!1})),a.a.createElement(yt.a,{item:!0},a.a.createElement(Yt,null)),a.a.createElement(yt.a,{item:!0},a.a.createElement($t,null)),t===g.Task1?a.a.createElement(yt.a,{item:!0},a.a.createElement(tn,null)):null,t===g.Task2?a.a.createElement(yt.a,{item:!0},a.a.createElement(un,null)):null,t===g.Task2?a.a.createElement(yt.a,{item:!0},a.a.createElement(on,null)):null,a.a.createElement(yt.a,{item:!0},a.a.createElement(fn,null)),a.a.createElement(yt.a,{item:!0},a.a.createElement(gn,null)),a.a.createElement(yt.a,{item:!0},a.a.createElement(xn,null)))})),mn=Object(d.b)((function(e){return{configRaster:e.configRaster}}))((function(e){var t=e.configRaster;return a.a.createElement(Mt.a,null,t?a.a.createElement(Xt,null):a.a.createElement(hn,null))})),yn=function(){return a.a.createElement(Tt.a,{position:"static",color:"default"},a.a.createElement(mn,null))},kn=Object(i.a)(),jn=Object(i.a)(Object(u.a)({},kn,{typography:{fontSize:24}})),On=mt(),Cn=function(){return a.a.createElement(s.a,{theme:jn},a.a.createElement(l.a,null),a.a.createElement("div",{style:{width:"100%",height:"100%"}},a.a.createElement(d.a,{store:On},a.a.createElement(yn,null),a.a.createElement(Dt,null))))};o.a.render(a.a.createElement(Cn,null),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.12f68968.chunk.js.map