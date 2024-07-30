import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{F as l}from"./index.es-D6nAsfRb.js";import{p as h}from"./index-BrXc1ilD.js";import{S as T,T as v}from"./enum-DHbXvcqL.js";import{A as I}from"./index-Hcv-Sshn.js";import{I as E}from"./index-B84Xfoxu.js";import"./index-CTjT7uj6.js";import"./index-BzjuzjN8.js";import"./clsx-B-dksMZM.js";import"./index-D4gDJoVZ.js";const c=({htmlFor:n,avatar:d,name:u,onImageChange:g})=>e.jsxs("div",{className:"relative",children:[e.jsx(I,{avatar:d,name:u,size:T.LARGE,circle:!0}),e.jsx(E,{onChange:g,htmlFor:n,type:v.FILE,styles:"hidden"}),e.jsx("label",{htmlFor:n,className:"cursor-pointer absolute top-24 left-24",children:e.jsx(l,{icon:h,className:"w-5 h-5 border p-1 rounded-full bg-white border-white"})})]});c.__docgenInfo={description:"",methods:[],displayName:"Upload",props:{htmlFor:{required:!0,tsType:{name:"string"},description:""},avatar:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},onImageChange:{required:!0,tsType:{name:"signature",type:"function",raw:`(\r
  event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>\r
) => void`,signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"union",raw:"HTMLInputElement | HTMLTextAreaElement",elements:[{name:"HTMLInputElement"},{name:"HTMLTextAreaElement"}]}],raw:"ChangeEvent<HTMLInputElement | HTMLTextAreaElement>"},name:"event"}],return:{name:"void"}}},description:""}}};const w={component:c,tags:["autodocs"],argTypes:{avatar:{description:"User avatar or image from your PC"},name:{description:"User name or render alt if avatar not found"},htmlFor:{description:"Set id and html for input and label"},onImageChange:{description:"Handle change image"}}},a={args:{avatar:"",name:"user",htmlFor:"account",onImageChange:()=>{}}},r={args:{avatar:"assets/images/mock-image.jpg",name:"user",htmlFor:"account",onImageChange:()=>{}}};var t,o,s;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    avatar: '',
    name: 'user',
    htmlFor: 'account',
    onImageChange: () => {}
  }
}`,...(s=(o=a.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var m,i,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    avatar: 'assets/images/mock-image.jpg',
    name: 'user',
    htmlFor: 'account',
    onImageChange: () => {}
  }
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const b=["Primary","WithImage"];export{a as Primary,r as WithImage,b as __namedExportsOrder,w as default};
