import{W as w,r as f,j as s,a as x}from"./app-DllE_dMi.js";import{G as j}from"./GuestLayout-CVlvhMIs.js";import{T as t,I as m}from"./TextInput-DFlsiAce.js";import{I as i}from"./InputLabel-C3-qXOnj.js";import{P as v}from"./PrimaryButton-OsULsf-x.js";import"./ApplicationLogo-CfmWCj4_.js";function y({token:l,email:n}){const{data:e,setData:r,post:p,processing:c,errors:o,reset:d}=w({token:l,email:n,password:"",password_confirmation:""});f.useEffect(()=>()=>{d("password","password_confirmation")},[]);const u=a=>{a.preventDefault(),p(route("password.store"))};return s.jsxs(j,{children:[s.jsx(x,{title:"Cambiar contraseña"}),s.jsxs("form",{onSubmit:u,children:[s.jsxs("div",{children:[s.jsx(i,{htmlFor:"email",value:"Correo electrónico"}),s.jsx(t,{id:"email",type:"email",name:"email",value:e.email,className:"mt-1 block w-full",autoComplete:"username",onChange:a=>r("email",a.target.value)}),s.jsx(m,{message:o.email,className:"mt-2"})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx(i,{htmlFor:"password",value:"Contraseña"}),s.jsx(t,{id:"password",type:"password",name:"password",value:e.password,className:"mt-1 block w-full",autoComplete:"new-password",isFocused:!0,onChange:a=>r("password",a.target.value)}),s.jsx(m,{message:o.password,className:"mt-2"})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx(i,{htmlFor:"password_confirmation",value:"Confirma tu contraseña"}),s.jsx(t,{type:"password",name:"password_confirmation",value:e.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:a=>r("password_confirmation",a.target.value)}),s.jsx(m,{message:o.password_confirmation,className:"mt-2"})]}),s.jsx("div",{className:"flex items-center justify-end mt-4",children:s.jsx(v,{className:"ms-4",disabled:c,children:"Cambiar contraseña"})})]})]})}export{y as default};