(this["webpackJsonpcra-redux-implementation"]=this["webpackJsonpcra-redux-implementation"]||[]).push([[0],{18:function(t,e,n){},26:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(3),i=n.n(a),o=(n(18),n(9)),s=n(5),d=n(13),l=Object(d.a)([function(t){return t.decimal.arrOfTen},function(t){return t.decimal.arrOfHundred}],(function(t,e){return[t,e]})),u=n(1),j=function(){var t=Object(s.b)(l),e=Object(o.a)(t,2),n=e[0],r=e[1],a=Object(c.useRef)(null),i=Object(c.useState)(new Date),d=Object(o.a)(i,2),j=d[0],O=d[1],f=(1e3*(3600*j.getHours()+60*j.getMinutes()+j.getSeconds())+j.getMilliseconds())/864e5,b="".concat(Math.floor(10*f),":").concat(Math.floor(1e3*f%100).toString().padStart(2,"0"),":").concat(Math.floor(1e5*f%100).toString().padStart(2,"0")),m=function t(){O(new Date),a.current=requestAnimationFrame(t)};return Object(c.useEffect)((function(){return a.current=requestAnimationFrame(m),function(){cancelAnimationFrame(a.current)}}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"Decimal Clock"}),Object(u.jsxs)("div",{id:"clock-face",children:[n.map((function(t,e){return Object(u.jsx)("div",{className:"digit",style:{left:50-40*Math.sin(Math.PI*e/5)+"%",top:50+40*Math.cos(Math.PI*e/5)+"%"},children:e},e)})),r.map((function(t,e){return Object(u.jsx)("div",{className:e%10===0?"large tick":"tick",style:{transform:"rotate(".concat(3.6*e,"deg)")}},e)})),null!==b&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{id:"short-hand",style:{transform:"rotate(".concat(360*f+180,"deg)")}}),Object(u.jsx)("div",{id:"long-hand",style:{transform:"rotate(".concat(10*f%1*360+180,"deg)")}}),Object(u.jsx)("div",{id:"second-hand",style:{transform:"rotate(".concat(1e3*f%1*360+180,"deg)")}})]})]}),null!==b&&Object(u.jsx)("h1",{id:"clock-time",children:b})]})},O=n(6),f=n(12),b=n(11),m=function(t){return Object(b.a)(Array(t))},h={arrOfTen:m(10),arrOfHundred:m(100)},g=Object(O.a)({decimal:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,e=arguments.length>1?arguments[1]:void 0;return e.type,Object(f.a)({},t)}}),x=Object(O.b)(g,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(s.a,{store:x,children:Object(u.jsx)(j,{})})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.933be190.chunk.js.map