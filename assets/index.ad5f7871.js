import{p as e,a as t,r as o,o as n,c as s,b as c,t as a,u as l,F as r,d,e as u}from"./vendor.642d02b4.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const n=new URL(e,location),s=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,c)=>{const a=new URL(e,n);if(self[t].moduleMap[a])return o(self[t].moduleMap[a]);const l=new Blob([`import * as m from '${a}';`,`${t}.moduleMap['${a}']=m;`],{type:"text/javascript"}),r=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(l),onerror(){c(new Error(`Failed to import: ${e}`)),s(r)},onload(){o(self[t].moduleMap[a]),s(r)}});document.head.appendChild(r)})),self[t].moduleMap={}}}("/assets/");e("data-v-d415dcd8");const p=c("p",null,[c("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank"}," Vite Documentation "),d(" | "),c("a",{href:"https://v3.vuejs.org/",target:"_blank"},"Vue 3 Documentation")],-1),m=c("p",null,[d(" Edit "),c("code",null,"components/HelloWorld.vue"),d(" to test hot module replacement. ")],-1);t();const i={expose:[],props:{msg:String},setup(e){const t=o({count:0});return(o,d)=>(n(),s(r,null,[c("h1",null,a(e.msg),1),p,c("button",{onClick:d[1]||(d[1]=e=>l(t).count++)},"count is: "+a(l(t).count),1),m],64))},__scopeId:"data-v-d415dcd8"};const f=c("img",{alt:"Vue logo",src:"/assets/logo.03d6d6da.png"},null,-1),h={expose:[],setup(e){const t=document.createElement("script");t.src="https://connect.facebook.net/en_US/sdk.js";const o=document.createElement("script");return o.src="https://connect.facebook.net/en_US/fbevents.js",setTimeout((()=>{document.body.appendChild(t)}),1500),setTimeout((()=>{document.body.appendChild(o)}),2e3),(e,t)=>(n(),s(r,null,[f,c(i,{msg:"Hello Vue 3 + Vite"})],64))}},b=document.createElement("link");b.rel="preconnect",b.href="https://connect.facebook.net",window.addEventListener("load",(()=>document.head.appendChild(b))),u(h).mount("#app");
