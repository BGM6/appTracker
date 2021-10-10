(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{110:function(e,t,a){},154:function(e,t,a){},156:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(24),s=a.n(r),i=a(8),l=a(9),o=(a(80),a(81),a(20)),j=a(27),d=a(68),u=a(73),b="SET_ALERT",m="REMOVE_ALERT",h="REGISTER_SUCCESS",p="REGISTER_FAIL",O="USER_LOADED",x="AUTH_ERROR",f="LOGIN_SUCCESS",v="LOGIN_FAIL",g="LOGOUT",N=[],y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return[].concat(Object(u.a)(e),[t.payload]);case m:return e.filter((function(e){return e.id!==t.payload}));default:return e}},k=a(13),w={token:localStorage.getItem("token"),isAuthenticated:null,loading:!0,user:null},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case O:return Object(k.a)(Object(k.a)({},e),{},{isAuthenticated:!0,loading:!1,user:n});case h:case f:return localStorage.setItem("token",n.token),Object(k.a)(Object(k.a)(Object(k.a)({},e),n),{},{isAuthenticated:!0,loading:!1});case p:case x:case v:case g:return localStorage.removeItem("token"),Object(k.a)(Object(k.a)({},e),{},{token:null,isAuthenticated:!1,loading:!1});default:return e}},C=Object(j.combineReducers)({alert:y,auth:S}),_=a(69),A=Object(j.createStore)(C,{},Object(d.composeWithDevTools)(Object(j.applyMiddleware)(_.a))),E=a(6),R=a.n(E),q=a(12),L=a(10),D=a.n(L),F=a(164),T=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5e3;return function(n){var c=Object(F.a)();n({type:b,payload:{msg:e,alertType:t,id:c}}),setTimeout((function(){return n({type:m,payload:c})}),a)}},I=function(e){e?D.a.defaults.headers.common["x-auth-token"]=e:delete D.a.defaults.headers.common["x-auth-token"]},P=function e(){return function(){var t=Object(q.a)(R.a.mark((function t(a){var n;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return localStorage.token&&I(localStorage.token),t.prev=1,t.next=4,D.a.get("/api/getuser");case 4:n=t.sent,a({type:O,payload:n.data}),a(e),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),a({type:x});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},M=a(0),U=Object(o.b)((function(e){return{auth:e.auth}}),{logout:function(){return function(e){e({type:g})}}})((function(e){var t=e.auth,a=t.isAuthenticated,r=t.loading,s=e.logout,l=Object(M.jsxs)("nav",{className:"navbar navbar-dark bg-primary navbar-expand-lg",style:{padding:"1rem",zIndex:"100"},children:[Object(M.jsx)(i.b,{to:"/dashboard",className:"navbar-brand",children:Object(M.jsx)("i",{className:"fas fa-edit",style:{fontSize:"2rem"}})}),Object(M.jsxs)("div",{className:"collapse navbar-collapse",children:[Object(M.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(M.jsx)("li",{className:"navbar-item",children:Object(M.jsx)(i.b,{to:"/applications",className:"nav-link",children:"Applications"})}),Object(M.jsx)("li",{className:"navbar-item",children:Object(M.jsx)(i.b,{to:"/new",className:"nav-link",children:"Add"})})]}),Object(M.jsx)("div",{className:"collapse navbar-collapse flex-grow-1 text-right",children:Object(M.jsxs)("ul",{className:"navbar-nav ms-auto flex-nowrap",children:[Object(M.jsx)("li",{className:"navbar-item",children:Object(M.jsx)(i.b,{to:"#",className:"nav-link menu-item",children:"About"})}),Object(M.jsx)("li",{className:"navbar-item",children:Object(M.jsx)(i.b,{to:"#!",className:"nav-link menu-item",children:"Contact"})}),Object(M.jsx)("li",{className:"navbar-item",children:Object(M.jsx)(i.b,{to:"/",onClick:s,className:"nav-link menu-item",children:"logout"})})]})})]})]}),o=Object(M.jsxs)("nav",{className:"navbar navbar-dark bg-primary navbar-expand-lg",style:{padding:"1rem",zIndex:"100"},children:[Object(M.jsx)(i.b,{to:"/",className:"navbar-brand",children:Object(M.jsx)("i",{className:"fas fa-edit",style:{fontSize:"2rem"}})}),Object(M.jsx)("div",{className:"collapse navbar-collapse",children:Object(M.jsx)("div",{className:"collapse navbar-collapse flex-grow-1 text-right",children:Object(M.jsxs)("ul",{className:"navbar-nav ms-auto flex-nowrap",children:[Object(M.jsx)("li",{className:"navbar-item",children:Object(M.jsx)(i.b,{to:"/register",className:"nav-link menu-item",children:"Register"})}),Object(M.jsx)("li",{className:"navbar-item",children:Object(M.jsx)(i.b,{to:"/login",className:"nav-link menu-item",children:"Login"})})]})})})]});return Object(M.jsx)(n.Fragment,{children:!r&&Object(M.jsx)(c.a.Fragment,{children:a?l:o})})})),B=(a(110),function(){return Object(M.jsx)("section",{className:"landing",children:Object(M.jsx)("div",{className:"dark-overlay",children:Object(M.jsxs)("div",{className:"landing-inner",children:[Object(M.jsx)("h1",{className:"header",children:"Welcome to appTracker"}),Object(M.jsx)("p",{className:"lead",children:"A place where you can keep track of all your job applications"}),Object(M.jsxs)("div",{children:[Object(M.jsx)(i.b,{to:"/register",className:"btn btn-primary btn-register",children:"Register"}),Object(M.jsx)(i.b,{to:"/login",className:"btn btn-warning btn-login",children:"Login"})]})]})})})}),G=function(){return Object(M.jsx)("div",{children:"Welcome to appTracker!"})},J=a(7),z=a(38),W=a.n(z),H=(a(65),function(){var e=Object(n.useState)(""),t=Object(J.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(J.a)(r,2),i=s[0],l=s[1],o=Object(n.useState)(""),j=Object(J.a)(o,2),d=j[0],u=j[1],b=Object(n.useState)(""),m=Object(J.a)(b,2),h=m[0],p=m[1],O=Object(n.useState)(new Date),x=Object(J.a)(O,2),f=x[0],v=x[1];return Object(M.jsxs)("div",{children:[Object(M.jsx)("h3",{children:"Add New Application"}),Object(M.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={company:a,position:i,location:d,link:h,date:f};D.a.post("/app/new",t).then((function(e){return console.log(e)})).catch((function(e){return console.error(e.message)})),window.location="/applications"},children:[Object(M.jsx)("div",{className:"form-group"}),Object(M.jsxs)("div",{className:"form-group",children:[Object(M.jsx)("label",{children:"Company: "}),Object(M.jsx)("input",{type:"text",required:!0,className:"form-control",value:a,onChange:function(e){return c(e.target.value)}})]}),Object(M.jsxs)("div",{className:"form-group",children:[Object(M.jsx)("label",{children:"Position: "}),Object(M.jsx)("input",{type:"text",required:!0,className:"form-control",value:i,onChange:function(e){return l(e.target.value)}})]}),Object(M.jsxs)("div",{className:"form-group",children:[Object(M.jsx)("label",{children:"Location: "}),Object(M.jsx)("input",{type:"text",required:!0,className:"form-control",value:d,onChange:function(e){return u(e.target.value)}})]}),Object(M.jsxs)("div",{className:"form-group",children:[Object(M.jsx)("label",{children:"Job Post URL: "}),Object(M.jsx)("input",{type:"text",required:!0,className:"form-control",value:h,onChange:function(e){return p(e.target.value)}})]}),Object(M.jsxs)("div",{className:"form-group",children:[Object(M.jsx)("label",{children:"Date: "}),Object(M.jsx)("div",{children:Object(M.jsx)(W.a,{selected:f,onChange:function(e){v(e)}})})]}),Object(M.jsx)("br",{}),Object(M.jsx)("div",{className:"form-group",children:Object(M.jsx)("input",{type:"submit",value:"Submit",className:"btn btn-primary"})})]})]})}),V=function(e){var t=e.application,a=e.confirmDeleteHandler;return Object(M.jsx)(n.Fragment,{children:Object(M.jsxs)("tr",{children:[Object(M.jsx)("td",{children:t.company}),Object(M.jsx)("td",{children:t.position}),Object(M.jsx)("td",{children:t.location}),Object(M.jsx)("td",{children:Object(M.jsx)("a",{href:t.link,target:"_blank",rel:"noreferrer",children:"Link"})}),Object(M.jsx)("td",{children:t.date.substring(0,10)}),Object(M.jsxs)("td",{children:[Object(M.jsxs)(i.b,{to:"/update/".concat(t._id),children:[Object(M.jsx)("i",{className:"fas fa-pen-square fa-lg"})," "]}),"| ",Object(M.jsx)("a",{type:"button",onClick:a,children:Object(M.jsx)("i",{className:"fas fa-trash-alt fa-lg",style:{color:"red"}})})]})]})})},X=a(72),Y=a.n(X),K=function(e){return Object(M.jsx)("div",{className:"".concat(Y.a.card," ").concat(e.className),children:e.children})},Q=a(17),Z=a.n(Q),$=a(35),ee=a.n($),te=function(e){var t=e.onConfirm,a=e.cancelBtn,n=e.deleteApp,c=e.applications;return Object(M.jsx)("div",{className:Z.a.backdrop,children:Object(M.jsx)("div",{onClick:t,children:Object(M.jsxs)(K,{className:Z.a.modal,children:[Object(M.jsx)("header",{className:Z.a.header,children:Object(M.jsx)("h2",{children:"Delete"})}),Object(M.jsx)("div",{className:Z.a.content,children:Object(M.jsx)("p",{children:"Are you sure you want to delete this application?"})}),Object(M.jsxs)("footer",{className:Z.a.actions,children:[Object(M.jsx)("button",{className:ee.a.button,style:{marginRight:"10px",backgroundColor:"red"},onClick:function(){return c.map((function(e){n(e._id)}))},children:"Delete"}),Object(M.jsx)("button",{className:ee.a.button,onClick:a,children:"Cancel"})]})]})})})},ae=function(){var e=Object(n.useState)([]),t=Object(J.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),s=Object(J.a)(r,2),i=s[0],l=s[1];Object(n.useEffect)((function(){localStorage.token&&I(localStorage.token),A.dispatch(P())})),Object(n.useEffect)((function(){(function(){var e=Object(q.a)(R.a.mark((function e(){var t;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("/app/myapps");case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var o=function(){var e=Object(q.a)(R.a.mark((function e(t){var n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.delete("/app/delete/".concat(t));case 2:n=a.filter((function(e){return e._id!==t})),c(n),l(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){l(!0)};return Object(M.jsxs)("div",{children:[i&&Object(M.jsx)(te,{cancelBtn:function(){l(!1)},deleteApp:o,applications:a}),Object(M.jsx)("h3",{children:"Applications"}),Object(M.jsxs)("table",{className:"table",children:[Object(M.jsx)("thead",{className:"thead-light",children:Object(M.jsxs)("tr",{children:[Object(M.jsx)("th",{children:"Company"}),Object(M.jsx)("th",{children:"Position"}),Object(M.jsx)("th",{children:"Location"}),Object(M.jsx)("th",{children:"Job Post"}),Object(M.jsx)("th",{children:"Date"}),Object(M.jsxs)("th",{children:[Object(M.jsx)("i",{className:"fas fa-pen-square fa-lg"})," | ",Object(M.jsx)("i",{className:"fas fa-trash-alt fa-lg"})]})]})}),Object(M.jsx)("tbody",{children:a.map((function(e){return Object(M.jsx)(V,{application:e,confirmDeleteHandler:j},e._id)}))})]})]})},ne=function(e){var t=Object(n.useState)(""),a=Object(J.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(""),i=Object(J.a)(s,2),l=i[0],o=i[1],j=Object(n.useState)(""),d=Object(J.a)(j,2),u=d[0],b=d[1],m=Object(n.useState)(""),h=Object(J.a)(m,2),p=h[0],O=h[1],x=Object(n.useState)(new Date),f=Object(J.a)(x,2),v=f[0],g=f[1];Object(n.useEffect)((function(){(function(){var t=Object(q.a)(R.a.mark((function t(){var a;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D.a.get("/app/".concat(e.match.params.id));case 2:a=t.sent,r(a.data.company),o(a.data.position),b(a.data.location),O(a.data.link),g(new Date(a.data.date));case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()().then((function(e){return e}))}),[e.match.params.id]);var N=function(){var e=Object(q.a)(R.a.mark((function e(t,a){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.put("/app/update/".concat(t),a);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0.message);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t,a){return e.apply(this,arguments)}}();return Object(M.jsxs)("div",{children:[Object(M.jsx)("h3",{children:"Edit Application"}),Object(M.jsxs)("form",{onSubmit:function(t){t.preventDefault();var a={company:c,position:l,location:u,link:p,date:v};N(e.match.params.id,a),window.location="/applications"},children:[Object(M.jsx)("div",{className:"form-group"}),Object(M.jsxs)("div",{className:"form-group",children:[Object(M.jsx)("label",{children:"Company: "}),Object(M.jsx)("input",{type:"text",required:!0,className:"form-control",value:c,onChange:function(e){return r(e.target.value)}})]}),Object(M.jsxs)("div",{className:"form-group",children:[Object(M.jsx)("label",{children:"Position: "}),Object(M.jsx)("input",{type:"text",required:!0,className:"form-control",value:l,onChange:function(e){return o(e.target.value)}})]}),Object(M.jsxs)("div",{className:"form-group",children:[Object(M.jsx)("label",{children:"Location: "}),Object(M.jsx)("input",{type:"text",required:!0,className:"form-control",value:u,onChange:function(e){return b(e.target.value)}})]}),Object(M.jsxs)("div",{className:"form-group",children:[Object(M.jsx)("label",{children:"Job Post URL: "}),Object(M.jsx)("input",{type:"text",required:!0,className:"form-control",value:p,onChange:function(e){return O(e.target.value)}})]}),Object(M.jsxs)("div",{className:"form-group",children:[Object(M.jsx)("label",{children:"Date: "}),Object(M.jsx)("div",{children:Object(M.jsx)(W.a,{selected:v,onChange:function(e){g(e)}})})]}),Object(M.jsx)("br",{}),Object(M.jsx)("div",{className:"form-group",children:Object(M.jsx)("input",{type:"submit",value:"Submit",className:"btn btn-primary"})})]})]})},ce=(a(66),a(36)),re=Object(o.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:function(e,t){return function(){var a=Object(q.a)(R.a.mark((function a(n){var c,r,s,i;return R.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c={headers:{"Content-Type":"application/json"}},r=JSON.stringify({email:e,password:t}),a.prev=2,a.next=5,D.a.post("/api/login",r,c);case 5:s=a.sent,n({type:f,payload:s.data}),n(P()),a.next=15;break;case 10:a.prev=10,a.t0=a.catch(2),(i=a.t0.response.data.errors)&&i.forEach((function(e){return n(T(e.msg,"danger"))})),n({type:v});case 15:case"end":return a.stop()}}),a,null,[[2,10]])})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.login,a=e.isAuthenticated,c=Object(n.useState)({email:"",password:""}),r=Object(J.a)(c,2),s=r[0],o=r[1],j=s.email,d=s.password,u=function(e){o(Object(k.a)(Object(k.a)({},s),{},Object(ce.a)({},e.target.name,e.target.value)))},b=function(){var e=Object(q.a)(R.a.mark((function e(a){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),t(j,d),o({email:"",password:""});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a?Object(M.jsx)(l.a,{to:"/applications"}):Object(M.jsxs)("div",{className:"card-body",children:[Object(M.jsx)("h4",{className:"card-title",children:"Login"}),Object(M.jsxs)("form",{className:"my-login-validation",noValidate:"",onSubmit:b,children:[Object(M.jsxs)("div",{className:"form-group",children:[Object(M.jsx)("label",{htmlFor:"email",children:"E-Mail Address"}),Object(M.jsx)("input",{id:"email",type:"email",className:"form-control",name:"email",value:j,onChange:u,required:!0,autoFocus:!0}),Object(M.jsx)("div",{className:"invalid-feedback",children:"Your email is invalid"})]}),Object(M.jsxs)("div",{className:"form-group",children:[Object(M.jsx)("label",{htmlFor:"password",children:"Password"}),Object(M.jsx)("input",{id:"password",type:"password",className:"form-control",name:"password",value:d,onChange:u,required:!0,"data-eye":""}),Object(M.jsx)("div",{className:"invalid-feedback",children:"Password is required"})]}),Object(M.jsx)("div",{className:"form-group m-0 register-btn-div",children:Object(M.jsx)("button",{type:"submit",className:"btn btn-warning btn-block register-btn",children:"Login"})}),Object(M.jsxs)("div",{className:"mt-4 text-center",children:["Don't have an account? ",Object(M.jsx)(i.b,{to:"/register",children:"Register"})]})]})]})})),se=function(){return Object(M.jsx)("div",{className:"my-login-page",children:Object(M.jsx)("section",{className:"h-100 ",children:Object(M.jsx)("div",{className:"container h-100 ",children:Object(M.jsx)("div",{className:"row justify-content-md-center h-100",children:Object(M.jsxs)("div",{className:"card-wrapper",children:[Object(M.jsx)("div",{className:"card fat",children:Object(M.jsx)(re,{})}),Object(M.jsx)("div",{className:"footer",children:"Copyright \xa9 2021 \u2014 Bryan Guilas"})]})})})})})},ie=function(e){return Object(M.jsx)("button",{className:ee.a.button,type:e.type||"button",onClick:e.onClick,children:e.children})},le=function(e){return Object(M.jsx)("div",{children:Object(M.jsx)("div",{className:Z.a.backdrop,onClick:e.onConfirm,children:Object(M.jsxs)(K,{className:Z.a.modal,children:[Object(M.jsx)("header",{className:Z.a.header,children:Object(M.jsx)("h2",{children:e.title})}),Object(M.jsx)("div",{className:Z.a.content,children:Object(M.jsx)("p",{children:e.message})}),Object(M.jsx)("footer",{className:Z.a.actions,children:Object(M.jsx)(ie,{onClick:e.onConfirm,children:"Okay"})})]})})})},oe=Object(o.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{setAlert:T,register:function(e){var t=e.name,a=e.email,n=e.password;return function(){var e=Object(q.a)(R.a.mark((function e(c){var r,s,i,l;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={headers:{"Content-Type":"application/json"}},s=JSON.stringify({name:t,email:a,password:n}),e.prev=2,e.next=5,D.a.post("/api/register",s,r);case 5:i=e.sent,c({type:h,payload:i.data}),c(P()),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(2),(l=e.t0.response.data.errors)&&l.forEach((function(e){return c(T(e.msg,"danger"))})),c({type:p});case 15:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){e.setAlert;var t=e.register,a=e.isAuthenticated,c=Object(n.useState)(""),r=Object(J.a)(c,2),s=r[0],o=r[1],j=Object(n.useState)(""),d=Object(J.a)(j,2),u=d[0],b=d[1],m=Object(n.useState)(""),h=Object(J.a)(m,2),p=h[0],O=h[1],x=Object(n.useState)(""),f=Object(J.a)(x,2),v=f[0],g=f[1],N=Object(n.useState)(null),y=Object(J.a)(N,2),k=y[0],w=y[1],S=function(){var e=Object(q.a)(R.a.mark((function e(a){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),p!==v?w({title:"Registration failed",message:"Passwords do not match. Please try again."}):(t({name:s,email:u,password:p}),o(""),b(""),O(""),g(""));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a?Object(M.jsx)(l.a,{to:"/applications"}):Object(M.jsxs)(n.Fragment,{children:[k&&Object(M.jsx)(le,{title:k.title,message:k.message,onConfirm:function(){w(null),O(""),g("")}}),Object(M.jsxs)("div",{className:"card-body",children:[Object(M.jsx)("h4",{className:"card-title",children:"Register"}),Object(M.jsxs)("form",{className:"my-login-validation",noValidate:"",onSubmit:S,children:[Object(M.jsxs)("div",{className:"form-group",children:[Object(M.jsx)("label",{htmlFor:"name",children:"Name"}),Object(M.jsx)("input",{id:"username",type:"text",className:"form-control",name:"username",value:s,onChange:function(e){return o(e.target.value)},required:!0,autoFocus:!0}),Object(M.jsx)("div",{className:"invalid-feedback",children:"What's your name?"})]}),Object(M.jsxs)("div",{className:"form-group",children:[Object(M.jsx)("label",{htmlFor:"email",children:"E-Mail Address"}),Object(M.jsx)("input",{id:"email",type:"email",className:"form-control",name:"email",value:u,onChange:function(e){return b(e.target.value)},required:!0}),Object(M.jsx)("div",{className:"invalid-feedback",children:"Your email is invalid"})]}),Object(M.jsxs)("div",{className:"form-group",children:[Object(M.jsx)("label",{htmlFor:"password",children:"Password"}),Object(M.jsx)("input",{id:"password",type:"password",className:"form-control",name:"password",value:p,onChange:function(e){return O(e.target.value)},required:!0,"data-eye":!0}),Object(M.jsx)("div",{className:"invalid-feedback",children:"Password is required"})]}),Object(M.jsxs)("div",{className:"form-group",children:[Object(M.jsx)("label",{htmlFor:"password2",children:"Re-Enter Password"}),Object(M.jsx)("input",{id:"password2",type:"password",className:"form-control",name:"password",value:v,onChange:function(e){return g(e.target.value)},required:!0,"data-eye":!0}),Object(M.jsx)("div",{className:"invalid-feedback",children:"Password is required"})]}),Object(M.jsx)("div",{className:"form-group m-0 register-btn-div",children:Object(M.jsx)("button",{type:"submit",className:"btn btn-primary btn-block register-btn",children:"Register"})}),Object(M.jsxs)("div",{className:"mt-4 text-center",children:["Already have an account? ",Object(M.jsx)(i.b,{to:"/login",children:"Login"})]})]})]})]})})),je=function(){return Object(M.jsx)("div",{className:"test",children:Object(M.jsx)("div",{className:"my-login-page",children:Object(M.jsx)("section",{className:"h-100",children:Object(M.jsx)("div",{className:"container h-100",children:Object(M.jsx)("div",{className:"row justify-content-md-center h-100",children:Object(M.jsxs)("div",{className:"card-wrapper",children:[Object(M.jsx)("div",{className:"card fat ",children:Object(M.jsx)(oe,{})}),Object(M.jsx)("div",{className:"footer",children:"Copyright \xa9 2021 \u2014 Bryan Guilas"})]})})})})})})},de=function(){return Object(M.jsx)("section",{className:"ui container mt-5",children:Object(M.jsxs)(l.d,{children:[Object(M.jsx)(l.b,{path:"/dashboard",component:G}),Object(M.jsx)(l.b,{path:"/applications",component:ae}),Object(M.jsx)(l.b,{path:"/login",component:se}),Object(M.jsx)(l.b,{path:"/register",component:je}),Object(M.jsx)(l.b,{path:"/update/:id",component:ne}),Object(M.jsx)(l.b,{path:"/new",component:H})]})})},ue=(a(154),Object(o.b)((function(e){return{alerts:e.alert}}))((function(e){var t=e.alerts,a=null!==t&&t.length>0&&t.map((function(e){return Object(M.jsx)("div",{className:"alert alert-".concat(e.alertType),children:e.msg},e.id)}));return Object(M.jsx)(n.Fragment,{children:a})}))),be=function(){return Object(n.useEffect)((function(){localStorage.token&&I(localStorage.token),A.dispatch(P())}),[]),Object(M.jsx)(o.a,{store:A,children:Object(M.jsx)(i.a,{children:Object(M.jsxs)(n.Fragment,{children:[Object(M.jsx)(U,{}),Object(M.jsx)(l.b,{exact:!0,path:"/",component:B}),Object(M.jsxs)("section",{className:"ui container mt-5",children:[Object(M.jsx)(ue,{}),Object(M.jsx)(l.d,{children:Object(M.jsx)(l.b,{component:de})})]})]})})})};s.a.render(Object(M.jsx)(be,{}),document.querySelector("#root"))},17:function(e,t,a){e.exports={backdrop:"Modal_backdrop__1mfF6",fadeInBackground:"Modal_fadeInBackground__TIuxM",modal:"Modal_modal__4DXUe",header:"Modal_header__b50LG",content:"Modal_content__3zUnK",actions:"Modal_actions__1JvhX"}},35:function(e,t,a){e.exports={button:"Button_button__6-R6B"}},66:function(e,t,a){},72:function(e,t,a){e.exports={card:"Card_card__1m44e"}},81:function(e,t,a){}},[[156,1,2]]]);
//# sourceMappingURL=main.29e72075.chunk.js.map