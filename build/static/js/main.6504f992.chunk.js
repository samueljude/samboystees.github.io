(this.webpackJsonpprojfrontend=this.webpackJsonpprojfrontend||[]).push([[0],{18:function(e,t,a){},23:function(e,t,a){e.exports=a(33)},33:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(2),o=a(5),l=a(3),s=(a(18),a(4)),m=function(){return"undefined"!=typeof window&&(!!localStorage.getItem("jwt")&&JSON.parse(localStorage.getItem("jwt")))},i=function(e,t){return e.location.pathname===t?{color:"#2ecc72"}:{color:"#FFFFFF"}},u=Object(o.g)((function(e){var t=e.history;return c.a.createElement("div",null,c.a.createElement("ul",{className:"nav nax-tabs bg-dark"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(r.b,{style:i(t,"/"),className:"nav-link",to:"/"},"Home")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(r.b,{style:i(t,"/cart"),className:"nav-link",to:"/cart"},"Cart")),m()&&0===m().user.role&&c.a.createElement("li",{className:"nav-item"},c.a.createElement(r.b,{style:i(t,"/user/dashboard"),className:"nav-link",to:"/user/dashboard"},"U.DashBoard")),m()&&1===m().user.role&&c.a.createElement("li",{className:"nav-item"},c.a.createElement(r.b,{style:i(t,"/admin/dashboard"),className:"nav-link",to:"/admin/dashboard"},"A.DashBoard")),!m()&&c.a.createElement(n.Fragment,null,c.a.createElement("li",{className:"nav-item"},c.a.createElement(r.b,{style:i(t,"/signup"),className:"nav-link",to:"/signup"},"Signup")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(r.b,{style:i(t,"/signin"),className:"nav-link",to:"/signin"},"SignIn"))),m()&&c.a.createElement("li",{className:"nav-item"},c.a.createElement("span",{className:"nav-link text-warning",onClick:function(){!function(e){if("undefined"!==typeof window)localStorage.removeItem("jwt"),e(),fetch("".concat(s.API,"/signout"),{method:"GET"}).then((function(e){return console.log("signout success")})).catch((function(e){return console.log(e)}))}((function(){t.push("/")}))}},"Signout"))))})),d=function(e){var t=e.title,a=void 0===t?"My Title":t,n=e.description,r=void 0===n?"My desription":n,o=e.className,l=void 0===o?"bg-dark text-white p-4":o,s=e.children;return c.a.createElement("div",null,c.a.createElement(u,null),c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"jumbotron bg-dark text-white text-center"},c.a.createElement("h2",{className:"display-4"},a),c.a.createElement("p",{className:"lead"},r)),c.a.createElement("div",{className:l},s)),c.a.createElement("footer",{className:"footer bg-dark mt-auto "},c.a.createElement("div",{className:"container-fluid bg-success text-white text-center py-0.5"},c.a.createElement("h5",null,"If you got any questions, feel free to reach out!"),c.a.createElement("button",{className:"btn btn-warning btn-lg"},"Contact Us")),c.a.createElement("div",{className:"container"},c.a.createElement("span",{className:"text-muted"},"An Amazing ",c.a.createElement("span",{className:"text-white"},"MERN")," Bootcamp"))))},p=function(e){var t=e.product,a=t?"".concat(s.API,"/product/photo/").concat(t._id):"https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";return c.a.createElement("div",{className:"rounded border border-success p-2"},c.a.createElement("img",{src:a,alt:"photo",style:{maxHeight:"100%",maxWidth:"100%"},className:"mb-3 rounded"}))},f=a(1),E=function(e){var t=e.product,a=e.addtoCart,r=void 0===a||a,s=e.removeFromCart,m=void 0!==s&&s,i=e.setReload,u=void 0===i?function(e){return e}:i,d=e.reload,E=void 0===d?void 0:d,b=Object(n.useState)(!1),g=Object(l.a)(b,2),h=g[0],N=g[1],v=Object(n.useState)(t.count),j=Object(l.a)(v,2),y=(j[0],j[1],t?t.name:"A photo from pexels"),O=t?t.description:"Default description",w=t?t.price:"DEFAULT",x=function(){!function(e,t){var a=[];void 0!==typeof window&&(localStorage.getItem("cart")&&(a=JSON.parse(localStorage.getItem("cart"))),a.push(Object(f.a)(Object(f.a)({},e),{},{count:1})),localStorage.setItem("cart",JSON.stringify(a)),t())}(t,(function(){return N(!0)}))};return c.a.createElement("div",{className:"card text-white bg-dark border border-info "},c.a.createElement("div",{className:"card-header lead"},y),c.a.createElement("div",{className:"card-body"},function(e){if(e)return c.a.createElement(o.a,{to:"/cart"})}(h),c.a.createElement(p,{product:t}),c.a.createElement("p",{className:"lead bg-success font-weight-normal text-wrap"},O),c.a.createElement("p",{className:"btn btn-success rounded  btn-sm px-4"},"$ ",w),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},function(e){return e&&c.a.createElement("button",{onClick:x,className:"btn btn-block btn-outline-success mt-2 mb-2"},"Add to Cart")}(r)),c.a.createElement("div",{className:"col-12"},function(e){return e&&c.a.createElement("button",{onClick:function(){!function(e){var t=[];void 0!==typeof window&&(localStorage.getItem("cart")&&(t=JSON.parse(localStorage.getItem("cart"))),t.map((function(a,n){a._id===e&&t.splice(n,1)})),localStorage.setItem("cart",JSON.stringify(t)))}(t._id),u(!E)},className:"btn btn-block btn-outline-danger mt-2 mb-2"},"Remove from cart")}(m)))))},b=a(4).API;function g(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(!1),s=Object(l.a)(o,2),m=(s[0],s[1]),i=function(){fetch("".concat(b,"/products"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)})).then((function(e){e.error?m(e.error):r(e)}))};return Object(n.useEffect)((function(){i()}),[]),c.a.createElement(d,{title:"Home Page",description:"Welcome to the TShirt Store"},c.a.createElement("div",{className:"row text-center"},c.a.createElement("h1",{className:"text-white"},"All of Tshirts"),c.a.createElement("div",{className:"row"},a.map((function(e,t){return c.a.createElement("div",{key:t,className:"col-4 mb-4"},c.a.createElement(E,{product:e}))})))))}var h=a(10),N=function(){var e=Object(n.useState)({email:"samson@gmail.com",password:"12345",error:"",loading:!1,didRedirect:!1}),t=Object(l.a)(e,2),a=t[0],r=t[1],i=a.email,u=a.password,p=a.error,E=a.loading,b=a.didRedirect,g=m().user,N=function(e){return function(t){r(Object(f.a)(Object(f.a)({},a),{},Object(h.a)({error:!1},e,t.target.value)))}},v=function(e){e.preventDefault(),r(Object(f.a)(Object(f.a)({},a),{},{error:!1,loading:!0})),function(e){return fetch("".concat(s.API,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}({email:i,password:u}).then((function(e){e.error?r(Object(f.a)(Object(f.a)({},a),{},{error:e.error,loading:!1})):function(e,t){"undefined"!==typeof window&&(localStorage.setItem("jwt",JSON.stringify(e)),t())}(e,(function(){r(Object(f.a)(Object(f.a)({},a),{},{didRedirect:!0}))}))})).catch(console.log("sign-in failed"))};return c.a.createElement(d,{title:"Sign In Page",description:"A Page for user to Sign In!"},E&&c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 offset-sm-3 text-left"},c.a.createElement("div",{className:"alert alert-info"},c.a.createElement("h3",null,"Loading...")))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 offset-sm-3 text-left"},c.a.createElement("div",{className:"alert alert-danger",style:{display:p?"":"none"}},p))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 offset-sm-3 text-left"},c.a.createElement("form",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-light"},"Email "),c.a.createElement("input",{className:"form-control",type:"email",onChange:N("email"),value:i})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-light"},"Password "),c.a.createElement("input",{onChange:N("password"),value:u,className:"form-control",type:"password"})),c.a.createElement("button",{className:"btn btn-success btn-block",onClick:v},"Login")))),b?g&&1===g.role?c.a.createElement(o.a,{to:"/admin/dashboard"}):c.a.createElement(o.a,{to:"/user/dashboard"}):m()?c.a.createElement(o.a,{to:"/"}):void 0,c.a.createElement("p",{className:"text-white text-enter"},JSON.stringify(a)))},v=function(){var e=Object(n.useState)({name:"",email:"",password:"",error:"",success:!1}),t=Object(l.a)(e,2),a=t[0],o=t[1],m=a.name,i=a.email,u=a.password,p=a.error,E=a.success,b=function(e){return function(t){o(Object(f.a)(Object(f.a)({},a),{},Object(h.a)({error:!1},e,t.target.value)))}},g=function(e){var t;e.preventDefault(),o(Object(f.a)(Object(f.a)({},a),{},{error:!1})),(t={name:m,email:i,password:u},fetch("".concat(s.API,"signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))).then((function(e){e.error?o(Object(f.a)(Object(f.a)({},a),{},{error:e.error,success:!1})):o(Object(f.a)(Object(f.a)({},a),{},{name:"",email:"",password:"",error:"",success:!0}))}))};return c.a.createElement(d,{title:"Sign up page",description:"A page for user to sign up!"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 offset-sm-3 text-left"},c.a.createElement("div",{className:"alert alert-success",style:{display:E?"":"none"}},"New account was created successfully. Please"," ",c.a.createElement(r.b,{to:"/signin"},"Login Here")))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 offset-sm-3 text-left"},c.a.createElement("div",{className:"alert alert-danger",style:{display:p?"":"none"}},p))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 offset-sm-3 text-left"},c.a.createElement("form",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-light"},"Name"),c.a.createElement("input",{className:"form-control",onChange:b("name"),type:"text",value:m})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-light"},"Email"),c.a.createElement("input",{className:"form-control",onChange:b("email"),type:"email",value:i})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-light"},"Password"),c.a.createElement("input",{onChange:b("password"),className:"form-control",type:"password",value:u})),c.a.createElement("button",{onClick:g,className:"btn btn-success btn-block"},"Submit")))),c.a.createElement("p",{className:"text-white text-center"},JSON.stringify(a)))},j=a(13),y=function(e){var t=e.component,a=Object(j.a)(e,["component"]);return c.a.createElement(o.b,Object.assign({},a,{render:function(e){return m()&&1===m().user.role?c.a.createElement(t,e):c.a.createElement(o.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))},O=function(e){var t=e.component,a=Object(j.a)(e,["component"]);return c.a.createElement(o.b,Object.assign({},a,{render:function(e){return m()?c.a.createElement(t,e):c.a.createElement(o.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))},w=function(){return c.a.createElement(d,{title:"UserDashBoard Page"},c.a.createElement("h1",null,"Profile page"))},x=function(){var e=m().user,t=e.name,a=e.email;e.role;return c.a.createElement(d,{title:"Welcome to admin area",description:"Manage all of your products here",className:"container bg-success p-4"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-3"},c.a.createElement("div",{className:"card"},c.a.createElement("h4",{className:"card-header bg-dark text-white"},"Admin Navigation"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},c.a.createElement(r.b,{to:"/admin/create/category",className:"nav-link text-success font-weight-bold "},"Create Categories")),c.a.createElement("li",{className:"list-group-item"},c.a.createElement(r.b,{to:"/admin/categories",className:"nav-link text-success font-weight-bold "},"Manage Categories")),c.a.createElement("li",{className:"list-group-item"},c.a.createElement(r.b,{to:"/admin/create/product",className:"nav-link text-success font-weight-bold"},"Create Product")),c.a.createElement("li",{className:"list-group-item"},c.a.createElement(r.b,{to:"/admin/products",className:"nav-link text-success font-weight-bold"},"Manage Products")),c.a.createElement("li",{className:"list-group-item"},c.a.createElement(r.b,{to:"/admin/orders",className:"nav-link text-success font-weight-bold"},"Manage Orders"))))),c.a.createElement("div",{className:"col-9"},c.a.createElement("div",{className:"card mb-4"},c.a.createElement("h4",{className:"card-header"},"Admin Profile"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},c.a.createElement("span",{className:"badge badge-success mr-2"},"Name:"),t),c.a.createElement("li",{className:"list-group-item"},c.a.createElement("span",{className:"badge badge-success mr-2"},"Email:"),a),c.a.createElement("li",{className:"list-group-item"},c.a.createElement("span",{className:"badge badge-danger"},"Admin Privelege")))))))},k=function(){return fetch("".concat(s.API,"/categories"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},S=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],o=t[1],i=Object(n.useState)(!1),u=Object(l.a)(i,2),p=u[0],f=u[1],E=Object(n.useState)(!1),b=Object(l.a)(E,2),g=b[0],h=b[1],N=m(),v=N.user,j=N.token,y=function(e){f(""),o(e.target.value)},O=function(e){e.preventDefault(),f(""),h(!1),function(e,t,a){return fetch("".concat(s.API,"category/create/").concat(e),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(a)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}(v._id,j,{name:a}).then((function(e){e.error?f(!0):(f(""),h(!0),o(""))}))};return c.a.createElement(d,{title:"Create a category here",description:"Add a new category for new tshirts",className:"container bg-info p-4"},c.a.createElement("div",{className:"row bg-white rounded"},c.a.createElement("div",{className:"col-md-8 offset-md-2"},function(){if(g)return c.a.createElement("h4",{className:"text-success"},"Category created successfully")}(),function(){if(p)return c.a.createElement("h4",{className:"text-warning"},"Failed to create category")}(),c.a.createElement("form",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("p",{className:"lead"},"Enter the category"),c.a.createElement("input",{type:"text",className:"form-control my-3",onChange:y,value:a,autoFocus:!0,required:!0,placeholder:"For Ex. Summer"}),c.a.createElement("button",{onClick:O,className:"btn btn-outline-info"},"Create Category"))),c.a.createElement("div",{className:"mt-5"},c.a.createElement(r.b,{className:"btn btn-sm btn-success mb-3",to:"/admin/dashboard"},"Admin Home")))))},C=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],o=t[1],i=m(),u=i.user,p=i.token,f=function(){k().then((function(e){e.error?console.log(e.error):o(e)}))};Object(n.useEffect)((function(){f()}),[]);var E=function(e){(function(e,t,a){return fetch("".concat(s.API,"category/").concat(e,"/").concat(t),{method:"DELETE",headers:{Accept:"application/json",Authorization:"Bearer ".concat(a)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})(e,u._id,p).then((function(e){e.error?console.log(e.error):f()}))};return c.a.createElement(d,{title:"Welcome admin",description:"Manage Categories here"},c.a.createElement("h2",{className:"mb-4"},"All Categories:"),c.a.createElement(r.b,{className:"btn btn-info",to:"/admin/dashboard"},c.a.createElement("span",{className:""},"Admin Home")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("h2",{className:"text-center text-white my-3"}),a.map((function(e,t){return c.a.createElement("div",{key:t,className:"row text-center mb-2 "},c.a.createElement("div",{className:"col-4"},c.a.createElement("h3",{className:"text-white text-left"},e.name,e._id)),c.a.createElement("div",{className:"col-4"},c.a.createElement(r.b,{className:"btn btn-success",to:"/admin/category/update/".concat(e._id)},c.a.createElement("span",{className:""},"Update"))),c.a.createElement("div",{className:"col-4"},c.a.createElement("button",{onClick:function(){E(e._id)},className:"btn btn-danger"},"Delete")))})))))},A=function(){var e=m(),t=e.user,a=e.token,i=Object(n.useState)({name:"",description:"",price:"",stock:"",photo:"",categories:[],category:"",loading:!1,error:"",createdProduct:"",getaRedirect:!1,formData:""}),u=Object(l.a)(i,2),p=u[0],E=u[1],b=p.name,g=p.description,N=p.price,v=p.stock,j=p.categories,y=(p.category,p.loading),O=(p.error,p.createdProduct),w=p.getaRedirect,x=p.formData;Object(n.useEffect)((function(){k().then((function(e){e.error?E(Object(f.a)(Object(f.a)({},p),{},{error:e.error})):E(Object(f.a)(Object(f.a)({},p),{},{categories:e,formData:new FormData}))}))}),[]);var S=function(e){e.preventDefault(),E(Object(f.a)(Object(f.a)({},p),{},{error:"",loading:!0})),function(e,t,a){return fetch("".concat(s.API,"/product/create/").concat(e),{method:"POST",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)},body:a}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}(t._id,a,x).then((function(e){e.error?E(Object(f.a)(Object(f.a)({},p),{},{error:e.error})):E(Object(f.a)(Object(f.a)({},p),{},{name:"",description:"",price:"",photo:"",stock:"",loading:!1,createdProduct:e.name,getaRedirect:!0}))}))},C=function(e){return function(t){var a="photo"===e?t.target.files[0]:t.target.value;x.set(e,a),E(Object(f.a)(Object(f.a)({},p),{},Object(h.a)({},e,a)))}};return c.a.createElement(d,{title:"Add a product here!",description:"Welcome to product creation section",className:"container bg-info p-4 "},c.a.createElement(r.b,{to:"/admin/dashboard",className:"btn btn-md btn-dark mb-3"},"Admin Home"),c.a.createElement("div",{className:"row bg-dark text-white rounded"},c.a.createElement("div",{className:"col-md-8 offset-md-2"},c.a.createElement("div",{className:"alet alert-success mt-3",style:{display:O?"":"none"}},c.a.createElement("h4",{className:!0},O," Product Created Successfully")),y&&c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 offset-sm-3 text-left"},c.a.createElement("div",{className:"alert alert-info"},c.a.createElement("h3",null,"Loading...")))),c.a.createElement("form",null,c.a.createElement("span",null,"Post photo"),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"btn btn-block btn-success"},c.a.createElement("input",{onChange:C("photo"),type:"file",name:"photo",accept:"image",placeholder:"choose a file"}))),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{onChange:C("name"),name:"photo",className:"form-control",placeholder:"Name",value:b})),c.a.createElement("div",{className:"form-group"},c.a.createElement("textarea",{onChange:C("description"),name:"photo",className:"form-control",placeholder:"Description",value:g})),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{onChange:C("price"),type:"number",className:"form-control",placeholder:"Price",value:N})),c.a.createElement("div",{className:"form-group"},c.a.createElement("select",{onChange:C("category"),className:"form-control",placeholder:"Category"},c.a.createElement("option",null,"Select"),j&&j.map((function(e,t){return c.a.createElement("option",{key:t,value:e._id},e.name," ")})))),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{onChange:C("stock"),type:"number",className:"form-control",placeholder:"Quantity",value:v})),c.a.createElement("div",{className:"text-center"},c.a.createElement("button",{type:"submit",onClick:S,className:"btn btn-success align-center "},"Create Product"))),function(){if(w&&t&&1===t.role)return c.a.createElement(o.a,{to:"/admin/dashboard"})}())))},P=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],o=t[1],i=m(),u=i.user,p=i.token,f=function(){fetch("".concat(s.API,"/products"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)})).then((function(e){e.error?console.log(e.error):o(e)}))};Object(n.useEffect)((function(){f()}),[]);var E=function(e){(function(e,t,a){return fetch("".concat(s.API,"/product/").concat(e,"/").concat(t),{method:"DELETE",headers:{Accept:"application/json",Authorization:"Bearer ".concat(a)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})(e,u._id,p).then((function(e){e.error?console.log(e.error):f()}))};return c.a.createElement(d,{title:"Welcome admin",description:"Manage products here"},c.a.createElement("h2",{className:"mb-4"},"All products:"),c.a.createElement(r.b,{className:"btn btn-info",to:"/admin/dashboard"},c.a.createElement("span",{className:""},"Admin Home")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("h2",{className:"text-center text-white my-3"}),a.map((function(e,t){return c.a.createElement("div",{key:t,className:"row text-center mb-2 "},c.a.createElement("div",{className:"col-4"},c.a.createElement("h3",{className:"text-white text-left"},e.name)),c.a.createElement("div",{className:"col-4"},c.a.createElement(r.b,{className:"btn btn-success",to:"/admin/product/update/".concat(e._id)},c.a.createElement("span",{className:""},"Update"))),c.a.createElement("div",{className:"col-4"},c.a.createElement("button",{onClick:function(){E(e._id)},className:"btn btn-danger"},"Delete")))})))))},I=function(e){var t=e.match,a=m(),o=a.user,i=a.token,u=Object(n.useState)({name:"",description:"",price:"",stock:"",photo:"",categories:[],category:"",loading:!1,error:"",createdProduct:"",getaRedirect:!1,formData:""}),p=Object(l.a)(u,2),E=p[0],b=p[1],g=E.name,N=E.description,v=E.price,j=E.stock,y=E.categories,O=(E.category,E.loading,E.error,E.createdProduct),w=(E.getaRedirect,E.formData),x=function(e){(function(e){return fetch("".concat(s.API,"/product/").concat(e),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})(e).then((function(e){e.error?b(Object(f.a)(Object(f.a)({},E),{},{error:e.error})):(S(),b(Object(f.a)(Object(f.a)({},E),{},{name:e.name,description:e.description,price:e.price,category:e.category._id,stock:e.stock,formData:new FormData})))}))},S=function(){k().then((function(e){e.error?b(Object(f.a)(Object(f.a)({},E),{},{error:e.error})):b({categories:e,formData:new FormData})}))};Object(n.useEffect)((function(){x(t.params.productId)}),[]);var C=function(e){e.preventDefault(),b(Object(f.a)(Object(f.a)({},E),{},{error:"",loading:!0})),function(e,t,a,n){return fetch("".concat(s.API,"/product/").concat(e,"/").concat(t),{method:"PUT",headers:{Accept:"application/json",Authorization:"Bearer ".concat(a)},body:n}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}(t.params.productId,o._id,i,w).then((function(e){e.error?b(Object(f.a)(Object(f.a)({},E),{},{error:e.error})):b(Object(f.a)(Object(f.a)({},E),{},{name:"",description:"",price:"",photo:"",stock:"",loading:!1,createdProduct:e.name}))}))},A=function(e){return function(t){var a="photo"===e?t.target.files[0]:t.target.value;w.set(e,a),b(Object(f.a)(Object(f.a)({},E),{},Object(h.a)({},e,a)))}};return c.a.createElement(d,{title:"Update Product Here!",description:"Welcome to product update section",className:"container bg-info p-4"},c.a.createElement(r.b,{to:"/admin/dashboard",className:"btn btn-md btn-dark mb-3"},"Admin Home"),c.a.createElement("div",{className:"row bg-dark text-white rounded"},c.a.createElement("div",{className:"col-md-8 offset-md-2"},c.a.createElement("div",{className:"alert alert-success mt-3",style:{display:O?"":"none"}},c.a.createElement("h4",null,O," updated successfully")),c.a.createElement("form",null,c.a.createElement("span",null,"Post photo"),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"btn btn-block btn-success"},c.a.createElement("input",{onChange:A("photo"),type:"file",name:"photo",accept:"image",placeholder:"choose a file"}))),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{onChange:A("name"),name:"photo",className:"form-control",placeholder:"Name",value:g})),c.a.createElement("div",{className:"form-group"},c.a.createElement("textarea",{onChange:A("description"),name:"photo",className:"form-control",placeholder:"Description",value:N})),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{onChange:A("price"),type:"number",className:"form-control",placeholder:"Price",value:v})),c.a.createElement("div",{className:"form-group"},c.a.createElement("select",{onChange:A("category"),className:"form-control",placeholder:"Category"},c.a.createElement("option",null,"Select"),y&&y.map((function(e,t){return c.a.createElement("option",{key:t,value:e._id},e.name)})))),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{onChange:A("stock"),type:"number",className:"form-control",placeholder:"Stock",value:j})),c.a.createElement("div",{className:"text-center"},c.a.createElement("button",{type:"submit",onClick:C,className:"btn btn-success align-center "},"Update Product"))))))},D=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(!1),s=Object(l.a)(o,2),i=s[0],u=s[1],p=Object(n.useState)(!1),f=Object(l.a)(p,2),E=f[0],b=f[1],g=m(),h=(g.user,g.token,function(e){u(""),r(e.target.value)}),N=function(e){e.preventDefault(),u(""),b(!1)};return c.a.createElement(d,{title:"Create a category here",description:"Add a new category for new tshirts",className:"container bg-info p-4"},c.a.createElement("div",{className:"row bg-white rounded"},c.a.createElement("div",{className:"col-md-8 offset-md-2"},function(){if(E)return c.a.createElement("h4",{className:"text-success"},"Category created successfully")}(),function(){if(i)return c.a.createElement("h4",{className:"text-warning"},"Failed to create category")}(),c.a.createElement("form",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("p",{className:"lead"},"Enter the category"),c.a.createElement("input",{type:"text",className:"form-control my-3",onChange:h,value:a,autoFocus:!0,required:!0,placeholder:"For Ex. Summer"}),c.a.createElement("button",{onClick:N,className:"btn btn-outline-info"},"Create Category"))))))},T=a(21),F=a.n(T),J=(a(4).API,function(e){var t=e.products,a=(e.setReload,e.reload,Object(n.useState)({loading:!1,success:!1,error:"",address:""})),o=Object(l.a)(a,2),i=(o[0],o[1],m()&&m().token,m()&&m().user._id,function(){var e=0;return t.map((function(t){e+=t.price})),e}),u=function(e){var a={token:e,products:t};return fetch("".concat(s.API,"/stripepayment"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){console.log(e)})).catch((function(e){return console.log(e)}))};return c.a.createElement("div",null,c.a.createElement("h3",{className:"text-white"},"Stripe Checkout ",i()),m()?c.a.createElement(F.a,{stripeKey:"pk_test_51Hd6OsJSVq5Vl1xqH6NnsY3rxxPwdJJgs8GZySYT5naWORpudWoUbALybkQGNpuhbrM1SMZK6NncuCihIHJ0zvKq00uw75qMoR",token:u,amount:100*i(),name:"Buy Tshirts"},c.a.createElement("button",{className:"btn btn-success"},"Pay with stripe")):c.a.createElement(r.b,{to:"/signin"},c.a.createElement("button",{className:"btn btn-warning"},"Signin")))}),_=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(!1),s=Object(l.a)(o,2),m=s[0],i=s[1];Object(n.useEffect)((function(){r(function(){if(void 0!==typeof window&&localStorage.getItem("cart"))return JSON.parse(localStorage.getItem("cart"))}())}),[m]);return c.a.createElement(d,{title:"Cart Page",description:"Ready to checkout"},c.a.createElement("div",{className:"row text-center"},c.a.createElement("div",{className:"col-6"},c.a.createElement("div",null,c.a.createElement("h2",null,"This section is to load products"),a.map((function(e,t){return c.a.createElement(E,{key:t,product:e,removeFromCart:!0,addtoCart:!1,setReload:i,reload:m})})))),c.a.createElement("div",{className:"col-6"},c.a.createElement(J,{products:a,setReload:i}))))},R=function(){return c.a.createElement(r.a,null,c.a.createElement(o.d,null,c.a.createElement(o.b,{path:"/",exact:!0,component:g}),c.a.createElement(o.b,{path:"/signup",exact:!0,component:v}),c.a.createElement(o.b,{path:"/signin",exact:!0,component:N}),c.a.createElement(O,{path:"/user/dashboard",exact:!0,component:w}),c.a.createElement(y,{path:"/admin/dashboard",exact:!0,component:x}),c.a.createElement(y,{path:"/admin/create/category",exact:!0,component:S}),c.a.createElement(y,{path:"/admin/categories",exact:!0,component:C}),c.a.createElement(y,{path:"/admin/create/product",exact:!0,component:A}),c.a.createElement(y,{path:"/admin/products",exact:!0,component:P}),c.a.createElement(y,{path:"/admin/product/update/:productId",exact:!0,component:I}),c.a.createElement(y,{path:"/admin/category/update/:categoryId",exact:!0,component:D}),c.a.createElement(o.b,{path:"/cart",exact:!0,component:_})))},H=a(22);a.n(H).a.render(c.a.createElement(R,null),document.getElementById("root"))},4:function(e,t,a){"use strict";a.r(t),a.d(t,"API",(function(){return n}));var n="http://localhost:8000/api/"}},[[23,1,2]]]);
//# sourceMappingURL=main.6504f992.chunk.js.map