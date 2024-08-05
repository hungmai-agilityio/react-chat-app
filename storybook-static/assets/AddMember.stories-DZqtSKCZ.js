import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{e as x,f as y}from"./index-E68hvQi1.js";import{M}from"./index-COYxmSZT.js";import{r as a}from"./index-CTjT7uj6.js";import{C as D}from"./index-BhNf-aVa.js";import{I as h}from"./index-B0bZchQf.js";import{S as P}from"./index-CgRiTEaq.js";import{D as T}from"./index-BjL1sXoY.js";import"./clsx-B-dksMZM.js";import"./index-BrXc1ilD.js";import"./enum-DHbXvcqL.js";import"./index-Ya2q_kcw.js";import"./index.es-D6nAsfRb.js";import"./index-BzjuzjN8.js";import"./index-BWw-Y-iC.js";import"./index-Hcv-Sshn.js";const N=s=>{let t;return(...c)=>{clearTimeout(t),t=setTimeout(()=>s(...c),1e3)}},i=({users:s,profiles:t,onChecked:c,isActive:m,currentUserId:u,checkedUsers:l})=>{const[S,I]=a.useState(""),[p,U]=a.useState(""),j=a.useCallback(N(e=>{U(e)}),[]),A=e=>{const o=e.target.value;I(o),j(o)},w=a.useMemo(()=>s.filter(e=>e.id!==u).filter(e=>e.userName.toLowerCase().includes(p.toLowerCase())),[s,p,u]);return r.jsxs("div",{className:"max-h-modal-body overflow-hidden",children:[l.length>0&&r.jsx("div",{className:"flex items-center p-3 gap-2 overflow-hidden hover:overflow-x-auto scrollbar",children:s.filter(e=>l.includes(e.id)).map(e=>{const o=t[e.id];return r.jsx(h,{id:e.id,name:e.userName,avatar:(o==null?void 0:o.avatar)||"",isActive:m,isItemChecked:!0},e.id)})}),r.jsx("div",{className:"bg-tertiary border-b-xs border-solid border-primary w-full px-4 py-1",children:r.jsx(P,{onChange:A,value:S})}),r.jsx("div",{className:"h-modal-body hover:overflow-y-auto scrollbar",children:w.map(e=>{const o=t[e.id];return r.jsxs("div",{children:[r.jsx(D,{id:e.id,onChange:c,isChecked:l.includes(e.id),children:r.jsx(h,{id:e.id,name:e.userName,avatar:(o==null?void 0:o.avatar)||"",isActive:m})}),r.jsx(T,{})]},e.id)})})]})};i.__docgenInfo={description:"",methods:[],displayName:"AddMember",props:{users:{required:!0,tsType:{name:"Array",elements:[{name:"IUser"}],raw:"IUser[]"},description:""},profiles:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"IProfile"}],raw:"Record<string, IProfile>"},description:""},onChecked:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},isActive:{required:!0,tsType:{name:"boolean"},description:""},currentUserId:{required:!0,tsType:{name:"string"},description:""},checkedUsers:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}}};const X={component:i,tags:["autodocs"],argTypes:{currentUserId:{description:"Id of the currently logged in user"},users:{description:"List user"},profiles:{description:"User details by user id"},onChecked:{description:"Handles check users to add to the member list"},isActive:{description:"Check if any users are connected"},checkedUsers:{description:"List of checked users"}}},d={args:{users:x,profiles:y,onChecked:s=>console.log("Checked user ID:",s),isActive:!0,currentUserId:"701796f0-0253-11ef-804b-d90ac4375227",checkedUsers:[]},render:s=>r.jsx(M,{isOpen:!0,onCloseModal:()=>alert("Close Modal"),title:"Add members",btnPrimary:"Save",onClick:()=>alert("Save"),children:r.jsx(i,{...s})})},n={args:{users:x,profiles:y,onChecked:s=>console.log("Checked user ID:",s),isActive:!0,currentUserId:"701796f0-0253-11ef-804b-d90ac4375227",checkedUsers:["8a741820-0253-11ef-804b-d90ac4375227"]},render:s=>r.jsx(M,{isOpen:!0,onCloseModal:()=>alert("Close Modal"),title:"Add members",btnPrimary:"Save",onClick:()=>alert("Save"),children:r.jsx(i,{...s})})};var f,b,g;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    users: mockUsers,
    profiles: mockProfiles,
    onChecked: id => console.log('Checked user ID:', id),
    isActive: true,
    currentUserId: '701796f0-0253-11ef-804b-d90ac4375227',
    checkedUsers: []
  },
  render: args => <Modal isOpen={true} onCloseModal={() => alert('Close Modal')} title="Add members" btnPrimary="Save" onClick={() => alert('Save')}>\r
      <AddMember {...args} />\r
    </Modal>
}`,...(g=(b=d.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var C,k,v;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    users: mockUsers,
    profiles: mockProfiles,
    onChecked: id => console.log('Checked user ID:', id),
    isActive: true,
    currentUserId: '701796f0-0253-11ef-804b-d90ac4375227',
    checkedUsers: ['8a741820-0253-11ef-804b-d90ac4375227']
  },
  render: args => <Modal isOpen={true} onCloseModal={() => alert('Close Modal')} title="Add members" btnPrimary="Save" onClick={() => alert('Save')}>\r
      <AddMember {...args} />\r
    </Modal>
}`,...(v=(k=n.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};const Y=["Default","MemberChecked"];export{d as Default,n as MemberChecked,Y as __namedExportsOrder,X as default};
