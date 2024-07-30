import{I as J}from"./index-CUH5uJUT.js";import"./jsx-runtime-Cw0GR0a5.js";import"./index-CTjT7uj6.js";import"./clsx-B-dksMZM.js";import"./enum-DHbXvcqL.js";import"./index-BrXc1ilD.js";import"./index.es-D6nAsfRb.js";import"./index-BzjuzjN8.js";import"./index-Hcv-Sshn.js";import"./index-D4gDJoVZ.js";const H={component:J,tags:["autodocs"],argTypes:{isCurrentUser:{description:"Check if the user is the one currently logged in"},styles:{description:"Add custom css"},isItemChecked:{description:"Item has been checked"},isOwner:{description:"Check if this user is the one who created the chat group or not"},onRemove:{description:"Handles removal of members from group chats by the master"}}},e={args:{id:"1",name:"John Doe",avatar:"assets/images/mock-image.jpg",isActive:!1,isCurrentUser:!1,isItemChecked:!1}},s={args:{id:"2",name:"Jane Smith",avatar:"assets/images/mock-image.jpg",isActive:!0,isCurrentUser:!1,isItemChecked:!1}},r={args:{id:"3",name:"Alice Johnson",avatar:"assets/images/mock-image.jpg",isActive:!1,isCurrentUser:!0,isItemChecked:!1}},a={args:{id:"4",name:"Bob Brown",avatar:"assets/images/mock-image.jpg",isActive:!1,isCurrentUser:!1,isItemChecked:!0}},t={args:{id:"5",name:"Charlie Davis",avatar:"assets/images/mock-image.jpg",isActive:!1,isCurrentUser:!0,isItemChecked:!0}},i={args:{id:"7",name:"Eve Adams",avatar:"assets/images/mock-image.jpg",isActive:!1,isCurrentUser:!1,isItemChecked:!1,isGroup:!0,isOwner:!1,onRemove:o=>console.log(`Removed user with id: ${o}`)}},n={args:{id:"8",name:"Franklin Green",avatar:"assets/images/mock-image.jpg",isActive:!1,isCurrentUser:!1,isItemChecked:!1,isGroup:!0,isOwner:!0,onRemove:o=>console.log(`Removed user with id: ${o}`)}};var m,c,d;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    id: '1',
    name: 'John Doe',
    avatar: 'assets/images/mock-image.jpg',
    isActive: false,
    isCurrentUser: false,
    isItemChecked: false
  }
}`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,g,p;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    id: '2',
    name: 'Jane Smith',
    avatar: 'assets/images/mock-image.jpg',
    isActive: true,
    isCurrentUser: false,
    isItemChecked: false
  }
}`,...(p=(g=s.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var l,h,v;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    id: '3',
    name: 'Alice Johnson',
    avatar: 'assets/images/mock-image.jpg',
    isActive: false,
    isCurrentUser: true,
    isItemChecked: false
  }
}`,...(v=(h=r.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var f,C,k;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    id: '4',
    name: 'Bob Brown',
    avatar: 'assets/images/mock-image.jpg',
    isActive: false,
    isCurrentUser: false,
    isItemChecked: true
  }
}`,...(k=(C=a.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var U,A,I;t.parameters={...t.parameters,docs:{...(U=t.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    id: '5',
    name: 'Charlie Davis',
    avatar: 'assets/images/mock-image.jpg',
    isActive: false,
    isCurrentUser: true,
    isItemChecked: true
  }
}`,...(I=(A=t.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var j,w,R;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    id: '7',
    name: 'Eve Adams',
    avatar: 'assets/images/mock-image.jpg',
    isActive: false,
    isCurrentUser: false,
    isItemChecked: false,
    isGroup: true,
    isOwner: false,
    onRemove: id => console.log(\`Removed user with id: \${id}\`)
  }
}`,...(R=(w=i.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var G,S,D;n.parameters={...n.parameters,docs:{...(G=n.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    id: '8',
    name: 'Franklin Green',
    avatar: 'assets/images/mock-image.jpg',
    isActive: false,
    isCurrentUser: false,
    isItemChecked: false,
    isGroup: true,
    isOwner: true,
    onRemove: id => console.log(\`Removed user with id: \${id}\`)
  }
}`,...(D=(S=n.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};const T=["Default","ActiveUser","CurrentUser","CheckedUser","CheckedCurrentUser","GroupUser","GroupUserWithRemove"];export{s as ActiveUser,t as CheckedCurrentUser,a as CheckedUser,r as CurrentUser,e as Default,i as GroupUser,n as GroupUserWithRemove,T as __namedExportsOrder,H as default};
