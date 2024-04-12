import{r as w,W as g,j as s}from"./app-DllE_dMi.js";import{T as n,I as c}from"./TextInput-DFlsiAce.js";import{I as d}from"./InputLabel-C3-qXOnj.js";import{P as _}from"./PrimaryButton-OsULsf-x.js";import{q as y}from"./transition-CqPzONSB.js";function P({className:f=""}){const l=w.useRef(null),u=w.useRef(null),{data:a,setData:r,errors:t,put:x,reset:o,processing:j,recentlySuccessful:h}=g({current_password:"",password:"",password_confirmation:""}),v=e=>{e.preventDefault(),x(route("password.update"),{preserveScroll:!0,onSuccess:()=>o(),onError:i=>{var p,m;i.password&&(o("password","password_confirmation"),(p=l.current)==null||p.focus()),i.current_password&&(o("current_password"),(m=u.current)==null||m.focus())}})};return s.jsxs("section",{className:f,children:[s.jsxs("header",{children:[s.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Actualizar contraseña"}),s.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Asegúrate de que tu contraseña sea de una longitud suficiente y sea difícil de adivinar."})]}),s.jsxs("form",{onSubmit:v,className:"mt-6 space-y-6",children:[s.jsxs("div",{children:[s.jsx(d,{htmlFor:"current_password",value:"Contraseña actual"}),s.jsx(n,{id:"current_password",ref:u,value:a.current_password,onChange:e=>r("current_password",e.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"current-password"}),s.jsx(c,{message:t.current_password,className:"mt-2"})]}),s.jsxs("div",{children:[s.jsx(d,{htmlFor:"password",value:"Nueva contraseña"}),s.jsx(n,{id:"password",ref:l,value:a.password,onChange:e=>r("password",e.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"new-password"}),s.jsx(c,{message:t.password,className:"mt-2"})]}),s.jsxs("div",{children:[s.jsx(d,{htmlFor:"password_confirmation",value:"Confirma tu contraseña"}),s.jsx(n,{id:"password_confirmation",value:a.password_confirmation,onChange:e=>r("password_confirmation",e.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"new-password"}),s.jsx(c,{message:t.password_confirmation,className:"mt-2"})]}),s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx(_,{disabled:j,children:"Guardar"}),s.jsx(y,{show:h,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:s.jsx("p",{className:"text-sm text-gray-600",children:"Guardado correctamente."})})]})]})]})}export{P as default};
