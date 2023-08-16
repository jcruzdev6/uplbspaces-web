import{_ as w,a as S,b as y}from"./google-logo.c84c3b49.js";import{aN as m,az as F,c as x,b as e,w as E,u as a,bB as B,bD as c,o as C,a as s,t as i,aq as u,J as _}from"./entry.40a6eb38.js";import{u as N}from"./AuthStore.e197b3ac.js";import{a as k,b as g,F as h,d as q}from"./index.esm.4c2b265f.js";import"./useApiFetch.2f581416.js";const I={id:"pageSignin",tabindex:"-1"},M={class:"modal-dialog modal-dialog-centered"},T={class:"modal-content"},D={type:"button",class:"toggleBtnDark ms-auto mt-2 me-2","data-bs-dismiss":"modal","aria-label":"Close"},L={class:"modalContainer"},P=s("div",{class:"modalTitleContainer"},[s("h3",{class:"modalTitle",id:"modalSigninLabel"},"Sign In")],-1),V={class:"msgError"},$=s("label",{for:"modalSigninForm-username"},"Enter your email",-1),z={class:"msgError"},A=s("label",{for:"modalSigninForm-password"},"Enter your password",-1),G={class:"msgError"},J=s("div",{class:"d-flex"},[s("a",{href:"#","data-bs-target":"#modalForgot","data-bs-toggle":"modal",class:"ms-auto my-1"},"Forgot Password?")],-1),X=s("div",{class:"d-grid"},[s("button",{type:"submit",class:"btn btn-success btn-sm mt-2 mb-2 rounded"},"Sign In ")],-1),j=s("a",{href:"#modalSignup","data-bs-target":"#modalSignup","data-bs-toggle":"modal"},"Not yet a member? Sign up",-1),H=s("div",{class:"my-3"},[s("strong",null,"or")],-1),K=s("div",{class:"d-grid"},[s("button",{type:"button",class:"socialBtn"},[s("div",null,[s("img",{src:w,width:"30",height:"30",class:"me-3"}),_("Continue with Facebook")])]),s("button",{type:"button",class:"socialBtn"},[s("div",null,[s("img",{src:S,width:"27",height:"27",class:"me-3"}),_("Continue with Google")])])],-1),Z={__name:"signin",setup(O){const{$bootstrap:p}=B(),n=N(),l=m(""),b=k().shape({email:g().required("Email is required").email("Email is invalid"),password:g().min(8,"Password must be at least 8 characters").required("Password is required")}),d=m(null);F(()=>{d.value=new p.Modal("#modalSignin")});const v=async r=>{if(n.isLoggedIn)return c("/");const{data:f,error:o}=await n.signin(r);o.value?l.value=o.value.data.message:(console.log("login successful"),d.hide(),c("/"))};return(r,f)=>{const o=y;return C(),x("div",I,[e(a(q),{onSubmit:v,"validation-schema":a(b)},{default:E(({errors:t})=>[s("div",M,[s("div",T,[s("button",D,[e(o)]),s("div",L,[P,s("div",V,i(a(l)),1),$,e(a(h),{name:"email",type:"email",id:"modalSigninForm-username",class:u([{"is-invalid":t.email},"form-control form-control-sm rounded"]),placeholder:"email"},null,8,["class"]),s("div",z,i(t.email),1),A,e(a(h),{name:"password",type:"password",id:"modalSigninForm-password",class:u([{"is-invalid":t.email},"form-control form-control-sm rounded"]),placeholder:"password"},null,8,["class"]),s("div",G,i(t.password),1),J,X,j,H,K])])])]),_:1},8,["validation-schema"])])}}};export{Z as default};