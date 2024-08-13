import{M as p}from"./index-DlmwbrPx.js";import{e as o,f as t}from"./index-FQERE-35.js";import"./jsx-runtime-Cw0GR0a5.js";import"./index-CTjT7uj6.js";import"./enum-DHbXvcqL.js";import"./index-Hcv-Sshn.js";import"./clsx-B-dksMZM.js";import"./index-C3beOB5e.js";import"./index-CQUNLK73.js";import"./index.es-D6nAsfRb.js";import"./index-BzjuzjN8.js";import"./index-Ya2q_kcw.js";import"./index-BjL1sXoY.js";import"./index-BWw-Y-iC.js";import"./auth-AY9r89Py.js";import"./tslib.es6-CDuPK5Eb.js";import"./endPoint-D9QdfkjO.js";import"./useOnlineStatus-DnmM3JzT.js";const N={component:p,tags:["autodocs"],argTypes:{currentUserId:{description:"Id of the currently logged in user"},member:{description:"Member data contained in the room"},avatar:{description:"User avatar"},name:{description:"User name"},count:{description:"Number of existing members"},isGroup:{description:"Check if this room is a group chat?"},onRemove:{description:"Handle event remove member by owner"},isOwner:{description:"Check if this user is the group creator"},onClick:{description:"Handle event when click "}}},e={args:{member:o,avatar:"",name:"Group Name",count:o.length,currentUserId:"701796f0-0253-11ef-804b-d90ac4375227",isGroup:!0}},r={args:{member:t,count:t.length,avatar:"assets/images/mock-image.jpg",name:"Mary",currentUserId:"701796f0-0253-11ef-804b-d90ac4375227",isGroup:!1}};var a,n,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    member: memberInfo,
    avatar: '',
    name: 'Group Name',
    count: memberInfo.length,
    currentUserId: '701796f0-0253-11ef-804b-d90ac4375227',
    isGroup: true
  }
}`,...(m=(n=e.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var s,i,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    member: memberInfoSolo,
    count: memberInfoSolo.length,
    avatar: 'assets/images/mock-image.jpg',
    name: 'Mary',
    currentUserId: '701796f0-0253-11ef-804b-d90ac4375227',
    isGroup: false
  }
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const j=["GroupChat","SoloChat"];export{e as GroupChat,r as SoloChat,j as __namedExportsOrder,N as default};
