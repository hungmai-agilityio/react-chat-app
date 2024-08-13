import{M as m}from"./index-nk1ce3t3.js";import{a as c,b as p}from"./index-FQERE-35.js";import"./jsx-runtime-Cw0GR0a5.js";import"./index-CTjT7uj6.js";import"./clsx-B-dksMZM.js";import"./index-CQUNLK73.js";import"./index.es-D6nAsfRb.js";import"./index-BzjuzjN8.js";import"./enum-DHbXvcqL.js";import"./list-D0Yobjwd.js";import"./convert-B-0ARb2b.js";import"./index-Hcv-Sshn.js";import"./index-SVfy51Fe.js";import"./auth-AY9r89Py.js";import"./tslib.es6-CDuPK5Eb.js";import"./endPoint-D9QdfkjO.js";import"./index-Ya2q_kcw.js";const x={component:m,tags:["autodocs"],argTypes:{item:{description:"Message data"},isCurrentUser:{description:"Check if the user is the one currently logged in"},avatar:{description:"Render image for img tags"},name:{description:"Set name if there is no avatar or the avatar is corrupted"},isActive:{description:"Check if the user is connected?"},onEdit:{description:"Handles message editing"},onDelete:{description:"Handle message deletion"}}},e={args:{item:c,isCurrentUser:!0,avatar:"",name:"User Name",isActive:!1,onEdit:()=>console.log("Edit message"),onDelete:()=>console.log("Delete message")}},s={args:{item:p,isCurrentUser:!1,avatar:"",isActive:!0,name:"Member Name"}};var r,t,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    item: mockMessageEdit,
    isCurrentUser: true,
    avatar: '',
    name: 'User Name',
    isActive: false,
    onEdit: () => console.log('Edit message'),
    onDelete: () => console.log('Delete message')
  }
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};var o,i,n;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    item: mockMessage,
    isCurrentUser: false,
    avatar: '',
    isActive: true,
    name: 'Member Name'
  }
}`,...(n=(i=s.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const y=["UserMessage","MemberMessage"];export{s as MemberMessage,e as UserMessage,y as __namedExportsOrder,x as default};
