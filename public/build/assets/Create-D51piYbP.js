import{j as a,d as t,a as i}from"./app-DllE_dMi.js";import{A as r}from"./AuthenticatedLayout-iE7iIOvs.js";import d from"./EditCoachForm-vVCGj9u5.js";import"./ApplicationLogo-CfmWCj4_.js";import"./transition-CqPzONSB.js";import"./TextInput-DFlsiAce.js";import"./InputLabel-C3-qXOnj.js";import"./PrimaryButton-OsULsf-x.js";import"./Checkbox-DpqCPyeg.js";function u({auth:e}){const s={school_id:"",name:"",description:"",is_available_monday:!1,is_available_tuesday:!1,is_available_wednesday:!1,is_available_thursday:!1,is_available_friday:!1,is_available_saturday:!1,monday_start_time:"12:00",monday_end_time:"13:00",tuesday_start_time:"12:00",tuesday_end_time:"13:00",wednesday_start_time:"12:00",wednesday_end_time:"13:00",thursday_start_time:"12:00",thursday_end_time:"13:00",friday_start_time:"12:00",friday_end_time:"13:00",saturday_start_time:"12:00",saturday_end_time:"13:00"};return a.jsxs(r,{user:e.user,header:a.jsxs("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:[a.jsx(t,{href:route("coaches.index"),children:a.jsx("span",{className:"underline",children:"Asesorías"})})," > Registrar asesor"]}),children:[a.jsx(i,{title:"Noticias - Registrar asesor"}),a.jsx("div",{className:"py-12",children:a.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:a.jsx("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg",children:a.jsx("div",{className:"p-6 text-gray-900",children:a.jsx(d,{coach:s})})})})})]})}export{u as default};