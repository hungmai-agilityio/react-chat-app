import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{c as m,d as p}from"./index-FQERE-35.js";import{M as u}from"./index-CLD86TRe.js";import{A as d}from"./index-CtF9otEl.js";import"./index-CTjT7uj6.js";import"./clsx-B-dksMZM.js";import"./index-CQUNLK73.js";import"./enum-DHbXvcqL.js";import"./index-Ya2q_kcw.js";import"./index.es-D6nAsfRb.js";import"./index-BzjuzjN8.js";import"./index-BWw-Y-iC.js";import"./index-BhNf-aVa.js";import"./index-C3beOB5e.js";import"./index-Hcv-Sshn.js";import"./index-CgRiTEaq.js";import"./index-BjL1sXoY.js";import"./auth-AY9r89Py.js";import"./tslib.es6-CDuPK5Eb.js";import"./endPoint-D9QdfkjO.js";import"./useOnlineStatus-DnmM3JzT.js";const z={component:d,tags:["autodocs"],argTypes:{currentUserId:{description:"Id of the currently logged in user"},users:{description:"List user"},profiles:{description:"User details by user id"},onChecked:{description:"Handles check users to add to the member list"},checkedUsers:{description:"List of checked users"}}},r={args:{users:m,profiles:p,onChecked:e=>console.log("Checked user ID:",e),currentUserId:"701796f0-0253-11ef-804b-d90ac4375227",checkedUsers:[]},render:e=>o.jsx(u,{isOpen:!0,onCloseModal:()=>alert("Close Modal"),title:"Add members",btnPrimary:"Save",onClick:()=>alert("Save"),children:o.jsx(d,{...e})})},s={args:{users:m,profiles:p,onChecked:e=>console.log("Checked user ID:",e),currentUserId:"701796f0-0253-11ef-804b-d90ac4375227",checkedUsers:["8a741820-0253-11ef-804b-d90ac4375227"]},render:e=>o.jsx(u,{isOpen:!0,onCloseModal:()=>alert("Close Modal"),title:"Add members",btnPrimary:"Save",onClick:()=>alert("Save"),children:o.jsx(d,{...e})})};var t,a,c;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    users: mockUsers,
    profiles: mockProfiles,
    onChecked: id => console.log('Checked user ID:', id),
    currentUserId: '701796f0-0253-11ef-804b-d90ac4375227',
    checkedUsers: []
  },
  render: args => <Modal isOpen={true} onCloseModal={() => alert('Close Modal')} title="Add members" btnPrimary="Save" onClick={() => alert('Save')}>\r
      <AddMember {...args} />\r
    </Modal>
}`,...(c=(a=r.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var n,i,l;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    users: mockUsers,
    profiles: mockProfiles,
    onChecked: id => console.log('Checked user ID:', id),
    currentUserId: '701796f0-0253-11ef-804b-d90ac4375227',
    checkedUsers: ['8a741820-0253-11ef-804b-d90ac4375227']
  },
  render: args => <Modal isOpen={true} onCloseModal={() => alert('Close Modal')} title="Add members" btnPrimary="Save" onClick={() => alert('Save')}>\r
      <AddMember {...args} />\r
    </Modal>
}`,...(l=(i=s.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const H=["Default","MemberChecked"];export{r as Default,s as MemberChecked,H as __namedExportsOrder,z as default};
