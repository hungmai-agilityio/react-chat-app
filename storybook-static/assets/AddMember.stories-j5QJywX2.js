import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{c as g,d as C}from"./index-DNbxaVpp.js";import{M as b}from"./index-D9js_i28.js";import{C as S}from"./index-BhNf-aVa.js";import{I as l}from"./index-CUH5uJUT.js";import{S as U}from"./index-CgRiTEaq.js";import{D as j}from"./index-BjL1sXoY.js";import"./index-CTjT7uj6.js";import"./clsx-B-dksMZM.js";import"./index-BrXc1ilD.js";import"./enum-DHbXvcqL.js";import"./index-D4gDJoVZ.js";import"./index.es-D6nAsfRb.js";import"./index-BzjuzjN8.js";import"./index-BuifuLLO.js";import"./index-Hcv-Sshn.js";const a=({users:s,profiles:d,onSearch:k,onChecked:y,value:x,isActive:c,currentUserId:M,checkedUsers:i})=>{const I=s.filter(e=>e.id!==M);return r.jsxs("div",{className:"max-h-modal-body overflow-hidden",children:[i.length>0&&r.jsx("div",{className:"flex items-center p-3 gap-2 overflow-hidden hover:overflow-x-auto scrollbar",children:s.filter(e=>i.includes(e.id)).map(e=>{const n=d[e.id];return r.jsx(l,{id:e.id,name:e.userName,avatar:(n==null?void 0:n.avatar)||"",isActive:c,isItemChecked:!0},e.id)})}),r.jsx("div",{className:"bg-tertiary border-b-xs border-solid border-primary w-full px-4 py-1",children:r.jsx(U,{onChange:k,value:x})}),r.jsx("div",{className:"h-modal-body hover:overflow-y-auto scrollbar",children:I.map(e=>{const n=d[e.id];return r.jsxs("div",{children:[r.jsx(S,{id:e.id,onChange:y,isChecked:i.includes(e.id),children:r.jsx(l,{id:e.id,name:e.userName,avatar:(n==null?void 0:n.avatar)||"",isActive:c})}),r.jsx(j,{})]},e.id)})})]})};a.__docgenInfo={description:"",methods:[],displayName:"AddMember",props:{users:{required:!0,tsType:{name:"Array",elements:[{name:"IUser"}],raw:"IUser[]"},description:""},profiles:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"IProfile"}],raw:"Record<string, IProfile>"},description:""},onSearch:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"event"}],return:{name:"void"}}},description:""},onChecked:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},value:{required:!0,tsType:{name:"string"},description:""},isActive:{required:!0,tsType:{name:"boolean"},description:""},currentUserId:{required:!0,tsType:{name:"string"},description:""},checkedUsers:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}}};const G={component:a,tags:["autodocs"],argTypes:{currentUserId:{description:"Id of the currently logged in user"},users:{description:"List user"},profiles:{description:"User details by user id"},onSearch:{description:"Handles searching for users in lists"},onChecked:{description:"Handles check users to add to the member list"},value:{description:"Input value for searching?"},isActive:{description:"Check if any users are connected"},checkedUsers:{description:"List of checked users"}}},t={args:{users:g,profiles:C,onSearch:()=>{},onChecked:s=>console.log("Checked user ID:",s),value:"",isActive:!0,currentUserId:"701796f0-0253-11ef-804b-d90ac4375227",checkedUsers:[]},render:s=>r.jsx(b,{isOpen:!0,onCloseModal:()=>alert("Close Modal"),title:"Add members",btnPrimary:"Save",onClick:()=>alert("Save"),children:r.jsx(a,{...s})})},o={args:{users:g,profiles:C,onSearch:()=>{},onChecked:s=>console.log("Checked user ID:",s),value:"",isActive:!0,currentUserId:"701796f0-0253-11ef-804b-d90ac4375227",checkedUsers:["8a741820-0253-11ef-804b-d90ac4375227"]},render:s=>r.jsx(b,{isOpen:!0,onCloseModal:()=>alert("Close Modal"),title:"Add members",btnPrimary:"Save",onClick:()=>alert("Save"),children:r.jsx(a,{...s})})};var m,u,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    users: mockUsers,
    profiles: mockProfiles,
    onSearch: () => {},
    onChecked: id => console.log('Checked user ID:', id),
    value: '',
    isActive: true,
    currentUserId: '701796f0-0253-11ef-804b-d90ac4375227',
    checkedUsers: []
  },
  render: args => <Modal isOpen={true} onCloseModal={() => alert('Close Modal')} title="Add members" btnPrimary="Save" onClick={() => alert('Save')}>\r
      <AddMember {...args} />\r
    </Modal>
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var h,f,v;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    users: mockUsers,
    profiles: mockProfiles,
    onSearch: () => {},
    onChecked: id => console.log('Checked user ID:', id),
    value: '',
    isActive: true,
    currentUserId: '701796f0-0253-11ef-804b-d90ac4375227',
    checkedUsers: ['8a741820-0253-11ef-804b-d90ac4375227']
  },
  render: args => <Modal isOpen={true} onCloseModal={() => alert('Close Modal')} title="Add members" btnPrimary="Save" onClick={() => alert('Save')}>\r
      <AddMember {...args} />\r
    </Modal>
}`,...(v=(f=o.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const J=["Default","MemberChecked"];export{t as Default,o as MemberChecked,J as __namedExportsOrder,G as default};
