import{u as k,B as j}from"./index-TJakpaRD.js";import{j as n}from"./jsx-runtime-Cw0GR0a5.js";import{r as t}from"./index-CTjT7uj6.js";import{m as u,n as d}from"./index-BrXc1ilD.js";import{T as m,S as F}from"./enum-DHbXvcqL.js";import{U as R}from"./endPoint-D9QdfkjO.js";import{B as b}from"./index-BWw-Y-iC.js";import{F as B}from"./index-IvnqwKj3.js";import{I as o}from"./index-BBwjF1qp.js";import"./index-DERK34or.js";import"./clsx-B-dksMZM.js";import"./index.es-D6nAsfRb.js";import"./index-BzjuzjN8.js";import"./index-Ya2q_kcw.js";const E=({nameValue:C,mailValue:w,passwordValue:M,confirmValue:v,onNameChange:H,onMailChange:L,onPasswordChange:x,onConfirmChange:y,onClick:P,message:e,authMessage:l})=>{const[a,I]=t.useState(!1),[r,V]=t.useState(!1),S=k(),q=t.useCallback(()=>{I(!a)},[a]),A=t.useCallback(()=>{V(!r)},[r]),N=()=>{S(R.SIGN_IN)};return n.jsx(B,{title:"Registration",children:n.jsxs("form",{className:"mt-11",children:[n.jsx(o,{label:"Name",placeholder:"Username",htmlFor:"name",value:C,onChange:H,message:e==null?void 0:e.name}),n.jsx(o,{label:"Email",placeholder:"username@mail.com",htmlFor:"email",value:w,onChange:L,type:"email",message:e==null?void 0:e.email}),n.jsx(o,{label:"Password",placeholder:"•••••••••••••",htmlFor:"password",value:M,onChange:x,icon:a?u:d,type:a?"text":"password",onClick:q,message:e==null?void 0:e.password}),n.jsx(o,{label:"Confirm Password",placeholder:"•••••••••••••",htmlFor:"confirm",value:v,onChange:y,icon:r?u:d,type:r?m.TEXT:m.PASSWORD,onClick:A,message:e==null?void 0:e.confirm}),n.jsxs("div",{className:"mt-8",children:[n.jsx(b,{name:"Register",variant:m.PRIMARY,onClick:P,size:F.LARGE}),l&&n.jsx("p",{className:"mt-3 text-center text-red-500",children:l}),n.jsxs("p",{className:"text-sm mt-10",children:["Already a user?"," ",n.jsx("span",{className:"text-dark underline cursor-pointer",onClick:N,children:"Login now"})]})]})]})})};E.__docgenInfo={description:"",methods:[],displayName:"SignUp",props:{nameValue:{required:!1,tsType:{name:"string"},description:""},mailValue:{required:!0,tsType:{name:"string"},description:""},passwordValue:{required:!0,tsType:{name:"string"},description:""},confirmValue:{required:!1,tsType:{name:"string"},description:""},onNameChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(\r
  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>\r
) => void`,signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"union",raw:"HTMLInputElement | HTMLTextAreaElement",elements:[{name:"HTMLInputElement"},{name:"HTMLTextAreaElement"}]}],raw:"ChangeEvent<HTMLInputElement | HTMLTextAreaElement>"},name:"e"}],return:{name:"void"}}},description:""},onMailChange:{required:!0,tsType:{name:"signature",type:"function",raw:`(\r
  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>\r
) => void`,signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"union",raw:"HTMLInputElement | HTMLTextAreaElement",elements:[{name:"HTMLInputElement"},{name:"HTMLTextAreaElement"}]}],raw:"ChangeEvent<HTMLInputElement | HTMLTextAreaElement>"},name:"e"}],return:{name:"void"}}},description:""},onPasswordChange:{required:!0,tsType:{name:"signature",type:"function",raw:`(\r
  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>\r
) => void`,signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"union",raw:"HTMLInputElement | HTMLTextAreaElement",elements:[{name:"HTMLInputElement"},{name:"HTMLTextAreaElement"}]}],raw:"ChangeEvent<HTMLInputElement | HTMLTextAreaElement>"},name:"e"}],return:{name:"void"}}},description:""},onConfirmChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(\r
  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>\r
) => void`,signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"union",raw:"HTMLInputElement | HTMLTextAreaElement",elements:[{name:"HTMLInputElement"},{name:"HTMLTextAreaElement"}]}],raw:"ChangeEvent<HTMLInputElement | HTMLTextAreaElement>"},name:"e"}],return:{name:"void"}}},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: FormEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"FormEvent",elements:[{name:"HTMLButtonElement"}],raw:"FormEvent<HTMLButtonElement>"},name:"e"}],return:{name:"void"}}},description:""},message:{required:!1,tsType:{name:"signature",type:"object",raw:"{ [key: string]: string }",signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]}},description:""},authMessage:{required:!1,tsType:{name:"string"},description:""}}};const ee={component:E,tags:["autodocs"],argTypes:{mailValue:{description:"Set the value for the mail input field"},passwordValue:{description:"Set the value for the password input field"},confirmValue:{description:"Set the value for the confirm input field"},nameValue:{description:"Set the value for the name input field"},onMailChange:{description:"Handle change value mail field"},onPasswordChange:{description:"Handle change value password field"},onConfirmChange:{description:"Handle change value confirm field"},onNameChange:{description:"Handle change value name field"},onClick:{description:"Handle event when click "},message:{description:"Show error messages according to the input field "},authMessage:{description:"Show api error messages"}},decorators:[j]},s={args:{nameValue:"Name",mailValue:"username@mail.com",passwordValue:"Password123",confirmValue:"Password123",onNameChange:()=>{},onMailChange:()=>{},onPasswordChange:()=>{},onConfirmChange:()=>{},onClick:()=>{}}},i={args:{nameValue:"",mailValue:"",passwordValue:"",confirmValue:"",onNameChange:()=>{},onMailChange:()=>{},onPasswordChange:()=>{},onConfirmChange:()=>{},onClick:()=>{},message:{name:"Name is required",email:"Email is required",password:"Password is required",confirm:"Confirm Password is required"}}};var p,c,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    nameValue: 'Name',
    mailValue: 'username@mail.com',
    passwordValue: 'Password123',
    confirmValue: 'Password123',
    onNameChange: () => {},
    onMailChange: () => {},
    onPasswordChange: () => {},
    onConfirmChange: () => {},
    onClick: () => {}
  }
}`,...(g=(c=s.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var h,T,f;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    nameValue: '',
    mailValue: '',
    passwordValue: '',
    confirmValue: '',
    onNameChange: () => {},
    onMailChange: () => {},
    onPasswordChange: () => {},
    onConfirmChange: () => {},
    onClick: () => {},
    message: {
      name: 'Name is required',
      email: 'Email is required',
      password: 'Password is required',
      confirm: 'Confirm Password is required'
    }
  }
}`,...(f=(T=i.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};const ne=["Primary","MessageError"];export{i as MessageError,s as Primary,ne as __namedExportsOrder,ee as default};
