import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{r as i}from"./index-CTjT7uj6.js";import{C as b}from"./index-BhNf-aVa.js";import{I as c}from"./index-C3beOB5e.js";import{S as y}from"./index-CgRiTEaq.js";import{D as j}from"./index-BjL1sXoY.js";import"./auth-AY9r89Py.js";import{u as w}from"./useOnlineStatus-DnmM3JzT.js";const C=a=>{let s;return(...o)=>{clearTimeout(s),s=setTimeout(()=>a(...o),1e3)}},S=({users:a,profiles:s,onChecked:o,currentUserId:n,checkedUsers:d})=>{const[l,u]=i.useState(""),[m,p]=i.useState(""),h=w(n),v=i.useCallback(C(e=>{p(e)}),[]),f=e=>{const r=e.target.value;u(r),v(r)},x=i.useMemo(()=>a.filter(e=>e.id!==n).filter(e=>e.userName.toLowerCase().includes(m.toLowerCase())),[a,m,n]);return t.jsxs("div",{className:"max-h-modal-body overflow-hidden",children:[d.length>0&&t.jsx("div",{className:"flex items-center p-3 gap-2 overflow-hidden hover:overflow-x-auto scrollbar",children:a.filter(e=>d.includes(e.id)).map(e=>{const r=s[e.id];return t.jsx(c,{id:e.id,name:e.userName,avatar:(r==null?void 0:r.avatar)||"",isItemChecked:!0},e.id)})}),t.jsx("div",{className:"bg-tertiary border-b-xs border-solid border-primary w-full px-4 py-1",children:t.jsx(y,{onChange:f,value:l})}),t.jsx("div",{className:"h-modal-body hover:overflow-y-auto scrollbar",children:x.map(e=>{const r=s[e.id],g=h[e.id]||!1;return t.jsxs("div",{children:[t.jsx(b,{id:e.id,onChange:o,isChecked:d.includes(e.id),children:t.jsx(c,{id:e.id,name:e.userName,avatar:(r==null?void 0:r.avatar)||"",isActive:g})}),t.jsx(j,{})]},e.id)})})]})};S.__docgenInfo={description:"",methods:[],displayName:"AddMember",props:{users:{required:!0,tsType:{name:"Array",elements:[{name:"IUser"}],raw:"IUser[]"},description:""},profiles:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"IProfile"}],raw:"Record<string, IProfile>"},description:""},onChecked:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},currentUserId:{required:!0,tsType:{name:"string"},description:""},checkedUsers:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}}};export{S as A};