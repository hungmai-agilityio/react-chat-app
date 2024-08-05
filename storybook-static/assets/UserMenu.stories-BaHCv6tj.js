import{S as O,P as c}from"./enum-DHbXvcqL.js";import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{U as I}from"./list-DSm9MSaD.js";import{D as S}from"./index-DD2PukJX.js";import{A as P}from"./index-Hcv-Sshn.js";import"./index-CTjT7uj6.js";import"./index-BrXc1ilD.js";import"./clsx-B-dksMZM.js";import"./index.es-D6nAsfRb.js";import"./index-BzjuzjN8.js";import"./tslib.es6-CDuPK5Eb.js";import"./endPoint-Czh9BODh.js";import"./index-Ya2q_kcw.js";const d=({name:e,avatar:T,onSelect:l,position:u})=>r.jsx(r.Fragment,{children:r.jsx(S,{items:I,onSelect:l,position:u,children:r.jsxs("div",{className:"flex items-center gap-3 w-full",children:[r.jsx(P,{avatar:T,name:e,size:O.SMALL,circle:!0,styles:"bg-dark"}),r.jsx("p",{className:"font-semibold text-primary text-lg w-32 truncate",children:e})]})})});d.__docgenInfo={description:"",methods:[],displayName:"UserMenu",props:{name:{required:!0,tsType:{name:"string"},description:""},avatar:{required:!0,tsType:{name:"string"},description:""},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: DropdownItem) => void",signature:{arguments:[{type:{name:"DropdownItem"},name:"item"}],return:{name:"void"}}},description:""},position:{required:!1,tsType:{name:"union",raw:`| POSITION.TOP_LEFT\r
| POSITION.TOP_RIGHT\r
| POSITION.BOT_LEFT\r
| POSITION.BOT_RIGHT`,elements:[{name:"POSITION.TOP_LEFT"},{name:"POSITION.TOP_RIGHT"},{name:"POSITION.BOT_LEFT"},{name:"POSITION.BOT_RIGHT"}]},description:""}}};const j={component:d,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{avatar:{description:"Render image for img tags"},name:{description:"Set name if there is no avatar or the avatar is corrupted"},onSelect:{description:"Callback function when an item is selected."},position:{description:"Position of the Dropdown when opened."}}},t={args:{avatar:"",name:"User Premium",onSelect:e=>alert(e.value),position:c.TOP_LEFT}},a={args:{avatar:"",name:"User Premium",onSelect:e=>alert(e.value),position:c.BOT_LEFT}};var n,o,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    avatar: '',
    name: 'User Premium',
    onSelect: (item: DropdownItem) => alert(item.value),
    position: POSITION.TOP_LEFT
  }
}`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var i,m,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    avatar: '',
    name: 'User Premium',
    onSelect: (item: DropdownItem) => alert(item.value),
    position: POSITION.BOT_LEFT
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const D=["Primary","Second"];export{t as Primary,a as Second,D as __namedExportsOrder,j as default};
