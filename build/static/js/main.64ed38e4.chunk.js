(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{20:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(17),c=n.n(s),u=(n(37),n(38),n(2)),i=n(3),o=n.n(i),l=n(5),d=n(4),j=(n(20),n(10)),b=n.n(j),p=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a,r,s,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.username,a=t.password,r=t.token,e.next=3,b.a.post("/user/login",{username:n,password:a,token:r});case 3:return s=e.sent,c=s.data,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e){var t=e.username,n=e.password,a=e.token;return function(){var e=Object(l.a)(o.a.mark((function e(r){var s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p({username:t,password:n,token:a});case 2:(s=e.sent)||(r({type:"SETMESSAGE",message:"Wrong username or password"}),setTimeout((function(){r({type:"SETMESSAGE",message:""})}),5e3)),r({type:"LOGIN",data:s});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},f=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return t.data?(window.localStorage.setItem("user",JSON.stringify(t.data)),!0):(window.localStorage.removeItem("user"),!1);case"LOGOUT":return window.localStorage.removeItem("user"),!1;default:return e}},h=n(9),O=n(1),v={dispatchLogin:m},x=Object(h.b)((function(e){return{user:e.user,message:e.messageReducer}}),v)((function(e){var t=e.dispatchLogin,n=(e.user,Object(a.useState)("")),r=Object(d.a)(n,2),s=r[0],c=r[1],i=Object(a.useState)(""),j=Object(d.a)(i,2),b=j[0],p=j[1],m=Object(u.f)(),f=function(){var e=Object(l.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),t({username:s,password:b}),m("/"),c(""),p("");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"login",children:[Object(O.jsx)("h1",{children:"Login"}),Object(O.jsxs)("form",{onSubmit:function(e){return f(e)},children:[Object(O.jsxs)("div",{className:"div",children:[Object(O.jsx)("input",{value:s,type:"text",onChange:function(e){var t=e.target;return c(t.value)},required:!0,className:"input"}),Object(O.jsx)("label",{className:"label",htmlFor:"username",children:Object(O.jsx)("span",{className:"span",children:"Username"})})]}),Object(O.jsxs)("div",{className:"div",children:[Object(O.jsx)("input",{type:"password",value:b,onChange:function(e){var t=e.target;return p(t.value)},required:!0,className:"input"}),Object(O.jsx)("label",{className:"label",htmlFor:"password",children:Object(O.jsx)("span",{className:"span",children:"Password"})})]}),Object(O.jsx)("div",{children:Object(O.jsx)("button",{className:"loginLinkButton",type:"submit",children:"login"})}),Object(O.jsx)("button",{onClick:function(){return m("/")},className:"backButton",children:"back"})]})]})})),g=(n(65),function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a,r,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.username,a=t.password,e.next=3,b.a.post("/user/register",{username:n,password:a});case 3:return r=e.sent,s=r.data,e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),N=function(e){return function(t){t({type:"SETMESSAGE",message:e})}},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SETMESSAGE":case"SETUSERMESSAGE":return t.message;default:return e}},y={setMessage:N},k=Object(h.b)(null,y)((function(e){var t=e.setMessage,n=Object(a.useState)(""),r=Object(d.a)(n,2),s=r[0],c=r[1],i=Object(a.useState)(""),j=Object(d.a)(i,2),b=j[0],p=j[1],m=Object(a.useState)(""),f=Object(d.a)(m,2),h=f[0],v=f[1],x=Object(u.f)(),N=function(){var e=Object(l.a)(o.a.mark((function e(n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),b!==h){e.next=12;break}return e.next=4,g({username:s,password:b});case 4:if((a=e.sent)||(t("Username must be unique"),setTimeout((function(){t("")}),5e3)),c(""),p(""),v(""),console.log(a),!a){e.next=12;break}return e.abrupt("return",x("/login"));case 12:v("");case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"register",children:[Object(O.jsx)("h1",{children:"Register"}),Object(O.jsxs)("form",{className:"registerForm",onSubmit:function(e){return N(e)},autoComplete:"off",children:[Object(O.jsxs)("div",{className:"div",children:[Object(O.jsx)("input",{className:"input",value:s,type:"text",name:"username",onChange:function(e){var t=e.target;return c(t.value)},required:!0}),Object(O.jsx)("label",{className:"label",htmlFor:"username",children:Object(O.jsx)("span",{className:"span",children:"Username"})})]}),Object(O.jsxs)("div",{className:"div",children:[Object(O.jsx)("input",{className:"input",type:"password",name:"password",value:b,onChange:function(e){var t=e.target;return p(t.value)},required:!0}),Object(O.jsx)("label",{className:"label",htmlFor:"password",children:Object(O.jsx)("span",{className:"span",children:"Password"})})]}),Object(O.jsxs)("div",{className:"div",children:[Object(O.jsx)("input",{className:"input",type:"password",name:"passwordConfirm",value:h,onChange:function(e){var t=e.target;return v(t.value)},required:!0}),Object(O.jsx)("label",{className:"label",htmlFor:"passwordConfirm",children:Object(O.jsx)("span",{className:"span",children:"Confirm Password"})})]}),Object(O.jsx)("div",{children:Object(O.jsx)("button",{className:"registerButton",type:"submit",children:"register"})})]}),Object(O.jsx)("button",{onClick:function(){return x("/login")},className:"loginButton",children:"login"})]})})),S=(n(66),n(32)),C="/contacts",E=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.token,e.next=3,b.a.post("".concat(C,"/all"),{token:n});case 3:return a=e.sent,r=a.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a,r,s,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,a=t.number,r=t.token,e.next=3,b.a.post("".concat(C,"/add"),{name:n,number:a,token:r});case 3:return s=e.sent,c=s.data,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,a=t.token,e.next=3,b.a.delete(C,{data:{id:n,token:a}});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a,r,s,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,a=t.number,r=t.id,e.next=3,b.a.post("".concat(C,"/edit"),{name:n,number:a,id:r});case 3:return s=e.sent,c=s.data,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT":return t.data;case"ADD":return[].concat(Object(S.a)(e),[t.data]);case"EDIT":if(!t.data)return window.localStorage.removeItem("user"),e;var n=t.data;return e.map((function(e){return e.id===t.data.id?n:e}));case"DELETE":return e.filter((function(e){return e.id!==t.id}));default:return e}},M={add:function(e){var t=e.name,n=e.number,a=e.token;return function(){var e=Object(l.a)(o.a.mark((function e(r){var s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T({name:t,number:n,token:a});case 2:s=e.sent,r({type:"ADD",data:s});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},setMessage:N},B=Object(h.b)(null,M)((function(e){var t=e.add,n=e.setMessage,r=Object(a.useState)(""),s=Object(d.a)(r,2),c=s[0],u=s[1],i=Object(a.useState)(""),o=Object(d.a)(i,2),l=o[0],j=o[1],b=JSON.parse(window.localStorage.getItem("user"));return Object(O.jsxs)("div",{className:"addMain",children:[Object(O.jsx)("h2",{children:"Add Contact"}),Object(O.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault();var a=c.match(/[\d]/g);if(l.match(/[\D]/g)||a)return n("Name must be text and Number only Numbers"),void setTimeout((function(){n("")}),5e3);t({name:c,number:l,token:b.token}),u(""),j("")}(e)},children:[Object(O.jsxs)("div",{className:"div",children:[Object(O.jsx)("input",{value:c,onChange:function(e){var t=e.target;return u(t.value)},required:!0,type:"text",autoComplete:"off",className:"input"}),Object(O.jsx)("label",{className:"label",children:Object(O.jsx)("span",{className:"span",children:"Name"})})]}),Object(O.jsxs)("div",{className:"div",children:[Object(O.jsx)("input",{value:l,onChange:function(e){var t=e.target;return j(t.value)},required:!0,autoComplete:"off",className:"input"}),Object(O.jsx)("label",{className:"label",children:Object(O.jsx)("span",{className:"span",children:"Number"})})]}),Object(O.jsx)("button",{className:"addButton",type:"submit",children:"Add"})]})]})})),q={init:function(e){var t=e.token;return function(){var e=Object(l.a)(o.a.mark((function e(n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E({token:t});case 2:a=e.sent,n({type:"INIT",data:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},deleteContact:function(e){var t=e.id,n=e.token;return function(){var e=Object(l.a)(o.a.mark((function e(a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I({id:t,token:n});case 2:a({type:"DELETE",id:t});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},editContact:function(e){return function(){var t=Object(l.a)(o.a.mark((function t(n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L(e);case 2:a=t.sent,n({type:"EDIT",data:!!a&&e});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setMessage:N},F=Object(h.b)((function(e){return{contacts:e.contactsReducer,user:e.user}}),q)((function(e){var t=e.init,n=e.contacts,r=e.deleteContact,s=e.editContact,c=e.setMessage,u=Object(a.useState)(""),i=Object(d.a)(u,2),o=i[0],l=i[1],j=Object(a.useState)(""),b=Object(d.a)(j,2),p=b[0],m=b[1],f=Object(a.useState)(""),h=Object(d.a)(f,2),v=h[0],x=h[1],g=Object(a.useState)(""),N=Object(d.a)(g,2),w=N[0],y=N[1];Object(a.useEffect)((function(){c("");var e=JSON.parse(window.localStorage.getItem("user"));t({token:e.token})}),[t,c]);var k=JSON.parse(window.localStorage.getItem("user")),S=o.length>0&&!o.match(/[\d]/g)?n.filter((function(e){return e.name.indexOf(o)>=0})):o.match(/[\D]/g)?n:n.filter((function(e){return String(e.number).indexOf(o)>=0}));return Object(O.jsxs)("div",{className:"phonebook",children:[Object(O.jsx)(B,{}),Object(O.jsxs)("div",{className:"contacts",children:[Object(O.jsx)("h2",{style:{marginBottom:"10px"},children:"Contacts"}),Object(O.jsxs)("div",{className:"div",children:[Object(O.jsx)("input",{value:o,type:"text",onChange:function(e){var t=e.target;return l(t.value)},required:!0,className:"input",autoComplete:"off"}),Object(O.jsx)("label",{className:"label",htmlFor:"username",children:Object(O.jsx)("span",{className:"span",children:"search"})})]}),S.map((function(e){return p===e.id?Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"div",children:[Object(O.jsx)("input",{value:v,onChange:function(e){var t=e.target;return x(t.value)},required:!0,type:"text",autoComplete:"off",className:"input"}),Object(O.jsx)("label",{className:"label",children:Object(O.jsx)("span",{className:"span",children:"New username"})})]}),Object(O.jsxs)("div",{className:"div",children:[Object(O.jsx)("input",{value:w,onChange:function(e){var t=e.target;return y(t.value)},required:!0,autoComplete:"off",className:"input"}),Object(O.jsx)("label",{className:"label",children:Object(O.jsx)("span",{className:"span",children:"New number"})})]}),Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"10px",marginTop:"15px"},children:[Object(O.jsx)("button",{onClick:function(){return function(e){var t=e.id,n=v.match(/[\d]/g);if(w.match(/[\D]/g)||n)return c("Name must be text and Number only Numbers"),void setTimeout((function(){c("")}),5e3);s({name:v,number:w,id:t}),x(""),y(""),m("")}({id:e.id})},className:"editButton",children:"edit"}),Object(O.jsx)("button",{className:"cancelButton",onClick:function(){return m("")},children:"Cancel"})]})]},e.id):Object(O.jsxs)("div",{children:[Object(O.jsxs)("p",{children:[" ",e.name," - ",e.number]}),Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(O.jsx)("button",{className:"editButton",onClick:function(){return m(e.id)},children:"edit"}),Object(O.jsx)("button",{className:"deleteButton",style:{cursor:"pointer"},onClick:function(){return r({id:e.id,token:k.token})},children:"X"})]})]},e.id)}))]})]})})),A={dispatchLogin:m,dispatchLogout:function(){return function(e){e({type:"LOGOUT"})}}},G=Object(h.b)((function(e){return{user:e.user,message:e.messageReducer}}),A)((function(e){var t=e.user,n=e.dispatchLogin,r=e.dispatchLogout,s=e.message;return Object(a.useEffect)((function(){var e=JSON.parse(window.localStorage.getItem("user"));e&&n({token:e.token})}),[n,t]),Object(O.jsxs)("div",{children:[s?Object(O.jsx)("div",{className:"message",children:Object(O.jsx)("h3",{className:"messageText",children:s})}):null,Object(O.jsx)("header",{children:Object(O.jsx)("h1",{style:{color:"rgb(133, 29, 127)"},children:"Phonebook"})}),t?Object(O.jsxs)("div",{children:[Object(O.jsx)("button",{onClick:r,style:{float:"right",marginRight:"100px"},children:"Log out"}),Object(O.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(O.jsx)(F,{})})]}):Object(O.jsx)("div",{className:"user",children:Object(O.jsxs)(u.c,{children:[Object(O.jsx)(u.a,{path:"/login",element:Object(O.jsx)(x,{forMessage:!0})}),Object(O.jsx)(u.a,{path:"/",element:Object(O.jsx)(k,{})})]})})]})})),R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))},J=n(12),P=n(14),U=n(30),W=n(31),X=Object(P.combineReducers)({contactsReducer:D,user:f,messageReducer:w}),z=Object(P.createStore)(X,Object(U.composeWithDevTools)(Object(P.applyMiddleware)(W.a)));c.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(h.a,{store:z,children:Object(O.jsx)(J.a,{children:Object(O.jsx)(G,{})})})}),document.getElementById("root")),R()}},[[67,1,2]]]);
//# sourceMappingURL=main.64ed38e4.chunk.js.map