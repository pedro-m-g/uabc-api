import{W as d,j as e}from"./app-orEJ4tBh.js";import{M as l}from"./Modal-Be-SFhaU.js";import{D as o,S as a}from"./SecondaryButton-dPdduaMM.js";import"./transition-BJ7zQ0Pe.js";function u({coach:s,show:t,onClose:r}){const{delete:i}=d({}),n=()=>{i(route("coaches.destroy",s)),r()};return e.jsx(l,{show:t,onClose:r,maxWidth:"sm",children:e.jsxs("div",{className:"p-4",children:[e.jsxs("p",{children:["¿Estás seguro de eliminar el registro del asesor #",s==null?void 0:s.id,"?"]}),e.jsxs("div",{className:"flex space-x-4 mt-4",children:[e.jsx(o,{onClick:()=>n(),children:"Eliminar"}),e.jsx(a,{onClick:()=>r(),children:"Cancelar"})]})]})})}export{u as default};