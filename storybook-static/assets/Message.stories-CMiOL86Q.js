import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{c as a}from"./clsx-B-dksMZM.js";import{r as y}from"./index-CTjT7uj6.js";import{h as b,d as j}from"./index-BrXc1ilD.js";import{F as N}from"./index.es-D6nAsfRb.js";import{P as w}from"./enum-DHbXvcqL.js";import{M as T}from"./list-DSm9MSaD.js";import{t as A}from"./convert-Cmww3bkS.js";import{A as E}from"./index-Hcv-Sshn.js";import{D as S}from"./index-BAJcem1G.js";import{a as k,b as I}from"./index-DNbxaVpp.js";import"./index-BzjuzjN8.js";import"./tslib.es6-CDuPK5Eb.js";import"./index-D4gDJoVZ.js";const f=y.memo(({item:s,isCurrentUser:r,avatar:x,name:m,isActive:v,onEdit:o,onDelete:n})=>{const h=M=>{switch(M.value){case"editMess":o==null||o(s);break;case"deleteMess":n==null||n(s.id);break}};return e.jsx("div",{className:a("relative flex mb-5",r?"justify-end":"justify-start"),children:e.jsxs("div",{className:a("flex gap-3 max-w-message",{"flex-row-reverse":r}),children:[e.jsxs("div",{className:"relative w-full max-w-avatar",children:[e.jsx(E,{avatar:x,name:m,circle:!0}),e.jsx(N,{icon:b,className:a("absolute text-gray-400 border-xs border-white rounded-full top-6 left-7",{"text-green-500":v})})]}),e.jsxs("div",{className:"w-full",children:[e.jsxs("div",{className:a("flex items-baseline gap-2",{"justify-end":r}),children:[e.jsx("p",{children:m}),e.jsx("span",{className:"text-xs text-gray-400",children:A(s.time_stamp)})]}),e.jsxs("div",{className:a("p-2 text-dark mt-2 group pr-7 max-w-max",r?"bg-second rounded-mess-user float-right":"bg-tertiary rounded-mess-member"),children:[s.message," ",s.isEdit&&e.jsx("span",{className:"text-sm text-gray-500",children:"(edited)"})]}),r&&e.jsx("div",{className:"absolute top-6 right-7",children:e.jsx(S,{icon:j,items:T,onSelect:h,position:w.TOP_RIGHT,isHover:!1})})]})]})})});f.__docgenInfo={description:"",methods:[],displayName:"Message",props:{item:{required:!0,tsType:{name:"IMessage"},description:""},isCurrentUser:{required:!0,tsType:{name:"boolean"},description:""},avatar:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},isActive:{required:!1,tsType:{name:"boolean"},description:""},onEdit:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: IMessage) => void",signature:{arguments:[{type:{name:"IMessage"},name:"item"}],return:{name:"void"}}},description:""},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}}};const J={component:f,tags:["autodocs"],argTypes:{item:{description:"Message data"},isCurrentUser:{description:"Check if the user is the one currently logged in"},avatar:{description:"Render image for img tags"},name:{description:"Set name if there is no avatar or the avatar is corrupted"},isActive:{description:"Check if the user is connected?"},onEdit:{description:"Handles message editing"},onDelete:{description:"Handle message deletion"}}},t={args:{item:k,isCurrentUser:!0,avatar:"",name:"User Name",isActive:!1,onEdit:()=>console.log("Edit message"),onDelete:()=>console.log("Delete message")}},i={args:{item:I,isCurrentUser:!1,avatar:"",isActive:!0,name:"Member Name"}};var c,d,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    item: mockMessageEdit,
    isCurrentUser: true,
    avatar: '',
    name: 'User Name',
    isActive: false,
    onEdit: () => console.log('Edit message'),
    onDelete: () => console.log('Delete message')
  }
}`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var p,g,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    item: mockMessage,
    isCurrentUser: false,
    avatar: '',
    isActive: true,
    name: 'Member Name'
  }
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const K=["UserMessage","MemberMessage"];export{i as MemberMessage,t as UserMessage,K as __namedExportsOrder,J as default};
