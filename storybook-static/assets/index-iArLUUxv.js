import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{r as c}from"./index-CTjT7uj6.js";import{c as d}from"./clsx-B-dksMZM.js";import{N as l}from"./index-D9gkCPzo.js";import{S as f}from"./enum-DHbXvcqL.js";import{m as u}from"./index-CQUNLK73.js";import{F as x}from"./index.es-D6nAsfRb.js";import{t as g}from"./convert-B-0ARb2b.js";import{A as h}from"./index-Hcv-Sshn.js";const y=c.memo(({id:o,name:s,avatar:a,isActive:n,isGroup:r,time_stamp:t,message:i,path:m,onSelect:p})=>e.jsxs(l,{to:m,className:"flex justify-between items-center w-full h-16 text-sm hover:bg-second px-3",onClick:p,children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("div",{className:"relative",children:[e.jsx(h,{name:s,avatar:a,circle:!0,size:f.SMALL}),!r&&e.jsx(x,{icon:u,className:d("absolute text-gray-400 border-xs border-white rounded-full top-6 left-7",{"text-green-500":n})})]}),i?e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold text-sm w-36 truncate",children:r?`${s}`:`PM: ${s}`}),e.jsx("p",{className:"w-36 truncate",children:i||""})]}):e.jsx("p",{children:s})]}),e.jsx("p",{children:t&&g(t)})]},o));y.__docgenInfo={description:"",methods:[],displayName:"UserRoom",props:{id:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},avatar:{required:!1,tsType:{name:"string"},description:""},isActive:{required:!1,tsType:{name:"boolean"},description:""},isGroup:{required:!1,tsType:{name:"boolean"},description:""},isGroupChat:{required:!1,tsType:{name:"boolean"},description:""},time_stamp:{required:!1,tsType:{name:"string"},description:""},message:{required:!1,tsType:{name:"string"},description:""},path:{required:!1,tsType:{name:"string"},description:""},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{y as U};