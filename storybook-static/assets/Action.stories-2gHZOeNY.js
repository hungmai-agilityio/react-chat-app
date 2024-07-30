import{o as R}from"./index-BrXc1ilD.js";import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{r as j}from"./index-CTjT7uj6.js";import{S as d,T as o}from"./enum-DHbXvcqL.js";import{c as H}from"./convert-Cmww3bkS.js";import{A as k}from"./index-Hcv-Sshn.js";import{I as w}from"./index-B84Xfoxu.js";import{M as L}from"./index-BuifuLLO.js";import"./clsx-B-dksMZM.js";import"./index-D4gDJoVZ.js";import"./index.es-D6nAsfRb.js";import"./index-BzjuzjN8.js";const h=({avatar:T,name:a,btnName:s,onClick:E,onChange:x,icon:C,onAvatarChange:i})=>{const r=j.useRef(null),A=async y=>{const m=y.target.files,c=m&&m[0];if(c){const I=await H(c);i&&i(I)}},M=()=>{r.current&&r.current.click()};return e.jsxs("div",{className:"relative mt-5",children:[e.jsxs("div",{className:"absolute left-1/2 transform -translate-x-1/2",children:[e.jsx(k,{name:a,avatar:T||"",size:d.LARGE,onClick:M,styles:"rounded-lg"}),e.jsx("input",{ref:r,onChange:A,id:"upload",type:o.FILE,className:"hidden",accept:"image/*","data-testid":"file-input"})]}),e.jsx("div",{className:"absolute top-32 left-1/2 transform -translate-x-1/2",children:e.jsx("div",{className:"mt-4 w-72",children:e.jsx(w,{placeholder:"Chat name",variant:o.TERTIARY,value:a||"",onChange:x})})}),s&&e.jsx("div",{className:"absolute top-lg right-xs",children:e.jsx(L,{name:s,onClick:E,iconRight:C,variant:o.PRIMARY,size:d.MEDIUM,isDisabled:!(a!=null&&a.trim())})})]})};h.__docgenInfo={description:"",methods:[],displayName:"ModalAction",props:{btnName:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},icon:{required:!1,tsType:{name:"IconDefinition"},description:""},avatar:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:`(\r
  event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>\r
) => void`,signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"union",raw:"HTMLInputElement | HTMLTextAreaElement",elements:[{name:"HTMLInputElement"},{name:"HTMLTextAreaElement"}]}],raw:"ChangeEvent<HTMLInputElement | HTMLTextAreaElement>"},name:"event"}],return:{name:"void"}}},description:""},onAvatarChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(avatar: string) => void",signature:{arguments:[{type:{name:"string"},name:"avatar"}],return:{name:"void"}}},description:""}}};const G={component:h,tags:["autodocs"],argTypes:{btnName:{description:"Button name"},onClick:{description:"Handles event click"},icon:{description:"Add icon to buttons using FontAwesome"},avatar:{description:"Room image"},name:{description:"Title or room name"},onChange:{description:"Handle change room name"},onAvatarChange:{description:"Handle image changes from your device"}}},n={args:{avatar:"",onChange:()=>{},name:"",onClick:()=>{}}},t={args:{avatar:"",onChange:()=>{},name:"",btnName:"People",icon:R,onClick:()=>{}}};var l,p,u;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    avatar: '',
    onChange: () => {},
    name: '',
    onClick: () => {}
  }
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,f,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    avatar: '',
    onChange: () => {},
    name: '',
    btnName: 'People',
    icon: faArrowRight,
    onClick: () => {}
  }
}`,...(v=(f=t.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const O=["ModalEdit","ModalAdd"];export{t as ModalAdd,n as ModalEdit,O as __namedExportsOrder,G as default};
