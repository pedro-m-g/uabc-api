import{r as l,j as e,a as d}from"./app-DllE_dMi.js";import{A as m}from"./AuthenticatedLayout-iE7iIOvs.js";import{P as n}from"./PrimaryButtonLink-DXVG2q_u.js";import{S as a}from"./SecondaryButtonLink-C3A2VQ7i.js";import x from"./DeleteProcedureForm-Bq7JeeVi.js";import{D as c}from"./SecondaryButton-IeQZD-IV.js";import{P as h}from"./Pagination-B7HoucfC.js";import"./ApplicationLogo-CfmWCj4_.js";import"./transition-CqPzONSB.js";import"./Modal-CM-xsW5V.js";function b({auth:o,procedures:r}){const[t,i]=l.useState();return e.jsxs(m,{user:o.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Trámites"}),children:[e.jsx(d,{title:"Trámites"}),e.jsx(x,{procedure:t,show:!!t,onClose:()=>i(null)}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e.jsx("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg",children:e.jsxs("div",{className:"p-6 text-gray-900",children:[e.jsx(n,{href:route("procedures.create"),children:"Registrar trámite"}),e.jsx("div",{className:"py-4 border-collapse",children:r.data.map(s=>e.jsxs("div",{className:"border border-gray-300 flex items-center p-2",children:[e.jsxs("div",{className:"px-4",children:["#",s.id,":"]}),e.jsx("div",{className:"flex-1",children:s.title}),e.jsxs("div",{className:"flex space-x-4",children:[e.jsx(a,{href:route("procedures.show",s),children:"Vista previa"}),e.jsx(a,{href:route("procedures.edit",s),children:"Editar"}),e.jsx(c,{onClick:()=>i(s),children:"Eliminar"})]})]},s.id))}),e.jsx(h,{...r})]})})})})]})}export{b as default};
