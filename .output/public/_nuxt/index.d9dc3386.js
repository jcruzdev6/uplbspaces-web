import{_ as h,o,c as i,d as u,r as f,a as t,b as r,u as d,w as y,t as l,F as v,e as b,f as x}from"./entry.40a6eb38.js";import{_ as g}from"./nuxt-link.18fb6253.js";import{u as F}from"./composables.4c78a47c.js";import{u as S}from"./FacilityTypeStore.25e2654d.js";const $={},C={class:"tile",id:"homeGridOneBg"},B=u('<div id="homeGridOne"><div id="homeGridOneContent"><div id="homeGridOneLeftCol"><h1 id="homeGridOneTitle">Rent a facility in U.P. Los Baños</h1><p>Just fill up the form or choose a category</p></div><div class="d-grid" id="homeGridOneRightCol"><label for="homeSearchForm-search">Which space do you need?</label><input type="text" id="homeSearchForm-search" class="form-control form-control-sm rounded" placeholder="ex. Umali Hall"><label for="homeSearchForm-cap">For how many persons?</label><div class="d-flex"><input type="number" id="homeSearchForm-cap-min" class="form-control form-control-sm rounded me-1" placeholder="min"></div><label for="homeSearchForm-date">When do you need it?</label><input type="date" id="homeSearchForm-date" class="form-control form-control-sm rounded" placeholder="no. of persons"><button type="submit" class="btn btn-success btn-sm mt-2 mb-2 rounded">Search</button></div></div></div>',1),G=[B];function O(n,e){return o(),i("div",C,G)}const T=h($,[["render",O]]),k={class:"tileClip"},L={class:"tile"},N={class:"tileContent"},w={class:"tileTitle"},I={__name:"Type",props:{facility_type:{type:Object}},setup(n){const e=n;return(s,_)=>{const c=f("nuxt-image"),a=g;return o(),i("div",k,[t("div",L,[r(c,{src:("useImage"in s?s.useImage:d(F))("facility_type",e.facility_type.id)},null,8,["src"]),r(a,{to:"/spaces/"+e.facility_type.id,class:"tileTint"},{default:y(()=>[t("div",N,[t("h3",w,l(e.facility_type.name),1),t("p",null,"description here "+l(e.facility_type.description),1)])]),_:1},8,["to"])])])}}},V=I,R={class:"container-fluid",id:"home"},U={class:"container-lg",id:"homeContent"},W={id:"homeGrid"},J={__name:"index",setup(n){const e=S();return(s,_)=>{const c=T,a=V;return o(),i("div",R,[t("div",U,[t("div",W,[r(c),(o(!0),i(v,null,b(d(e).facility_types,(m,p)=>(o(),x(a,{key:p,facility_type:m},null,8,["facility_type"]))),128))])])])}}};export{J as default};