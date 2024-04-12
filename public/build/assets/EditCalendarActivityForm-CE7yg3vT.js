import{W as _,j as e}from"./app-DllE_dMi.js";import{T as d,I as i}from"./TextInput-DFlsiAce.js";import{C as j}from"./Checkbox-DpqCPyeg.js";import{I as m}from"./InputLabel-C3-qXOnj.js";import{P as h}from"./PrimaryButton-OsULsf-x.js";import{q as p}from"./transition-CqPzONSB.js";function k({activity:a}){const{data:s,setData:l,post:n,put:o,errors:r,processing:c,recentlySuccessful:u}=_({title:a.title,start_date:a.start_date,start_time:a.start_time,end_date:a.end_date,end_time:a.end_time,is_all_day:a.is_all_day}),x=t=>{t.preventDefault(),a.id?o(route("calendar.update",a)):n(route("calendar.store"))};return e.jsxs("form",{onSubmit:x,className:"mt-6 space-y-6",children:[e.jsxs("div",{children:[e.jsx(m,{htmlFor:"title",value:"Título"}),e.jsx(d,{id:"title",className:"mt-1 block w-full",value:s.title,onChange:t=>l("title",t.target.value),required:!0}),e.jsx(i,{className:"mt-2",message:r.title})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx(m,{htmlFor:"start_date",value:"Fecha de inicio"}),e.jsx(d,{id:"start_date",className:"mt-1 block w-full",type:"date",value:s.start_date,onChange:t=>l("start_date",t.target.value),required:!0}),e.jsx(i,{className:"mt-2",message:r.start_date})]}),e.jsxs("div",{children:[e.jsx(m,{htmlFor:"end_date",value:"Fecha de fin"}),e.jsx(d,{id:"end_date",className:"mt-1 block w-full",type:"date",value:s.end_date,onChange:t=>l("end_date",t.target.value),required:!0}),e.jsx(i,{className:"mt-2",message:r.end_date})]})]}),!s.is_all_day&&e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx(m,{htmlFor:"start_time",value:"Hora de inicio"}),e.jsx(d,{id:"start_time",className:"mt-1 block w-full",type:"time",value:s.start_time,onChange:t=>l("start_time",t.target.value)}),e.jsx(i,{className:"mt-2",message:r.start_time})]}),e.jsxs("div",{children:[e.jsx(m,{htmlFor:"end_time",value:"Hora de fin"}),e.jsx(d,{id:"end_time",className:"mt-1 block w-full",type:"time",value:s.end_time,onChange:t=>l("end_time",t.target.value)}),e.jsx(i,{className:"mt-2",message:r.end_time})]})]}),e.jsx("div",{className:"block mt-4",children:e.jsxs("label",{className:"flex items-center",children:[e.jsx(j,{name:"is_all_day",checked:s.is_all_day,onChange:t=>l("is_all_day",t.target.checked)}),e.jsx("span",{className:"ms-2 text-sm text-gray-600",children:"Todo el dia"})]})}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(h,{disabled:c,children:"Guardar"}),e.jsx(p,{show:u,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:e.jsx("p",{className:"text-sm text-gray-600",children:"Guardado correctamente."})})]})]})}export{k as default};
