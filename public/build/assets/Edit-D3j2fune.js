import{j as e,d as s,a as r}from"./app-DllE_dMi.js";import{A as a}from"./AuthenticatedLayout-iE7iIOvs.js";import t from"./EditCalendarActivityForm-CE7yg3vT.js";import"./ApplicationLogo-CfmWCj4_.js";import"./transition-CqPzONSB.js";import"./TextInput-DFlsiAce.js";import"./Checkbox-DpqCPyeg.js";import"./InputLabel-C3-qXOnj.js";import"./PrimaryButton-OsULsf-x.js";function u({auth:i,activity:d}){return e.jsxs(a,{user:i.user,header:e.jsxs("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:[e.jsx(s,{href:route("calendar.index"),children:e.jsx("span",{className:"underline",children:"Calendario de Actividades"})})," > Editar evento #",d.id]}),children:[e.jsx(r,{title:`Calendario de Actividades - Editar evento #${d.id}`}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e.jsx("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-6 text-gray-900",children:e.jsx(t,{activity:d})})})})})]})}export{u as default};