import{B as v}from"./index-c6g07Ecw.js";import{U}from"./index-iArLUUxv.js";import"./index-CTjT7uj6.js";import"./index-D9gkCPzo.js";import"./index-DERK34or.js";import"./jsx-runtime-Cw0GR0a5.js";import"./clsx-B-dksMZM.js";import"./enum-DHbXvcqL.js";import"./index-CQUNLK73.js";import"./index.es-D6nAsfRb.js";import"./index-BzjuzjN8.js";import"./convert-B-0ARb2b.js";import"./index-Hcv-Sshn.js";const I={component:U,decorators:[v],tags:["autodocs"],argTypes:{id:{description:"Id user"},name:{description:"user name or chat room name"},avatar:{description:"User avatar or chat room avatar"},isActive:{description:"Check user active and render status"},isGroup:{description:"Check chat room is member or group chat"},time_stamp:{description:"render the time the last message was sent"},message:{description:"render the last message was sent"},path:{description:"The link opens the chat area according to the user id or chat room"},onSelect:{description:"Select chat room or user by id to start a conversation"}}},e={args:{name:"User",avatar:"",isActive:!0,isGroup:!0,message:"Hello",time_stamp:"2024-05-24T15:58:05.791Z",path:"/"}},r={args:{name:"User",avatar:"assets/images/mock-image.jpg",isActive:!0,message:"Hello you",time_stamp:new Date().toISOString(),path:"/"}},a={args:{name:"User",avatar:"",isActive:!0,path:"/"}},s={args:{name:"User",avatar:"",isActive:!1,path:"/"}};var t,o,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    name: 'User',
    avatar: '',
    isActive: true,
    isGroup: true,
    message: 'Hello',
    time_stamp: '2024-05-24T15:58:05.791Z',
    path: '/'
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var i,m,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    name: 'User',
    avatar: 'assets/images/mock-image.jpg',
    isActive: true,
    message: 'Hello you',
    time_stamp: new Date().toISOString(),
    path: '/'
  }
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,u,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    name: 'User',
    avatar: '',
    isActive: true,
    path: '/'
  }
}`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var g,h,l;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    name: 'User',
    avatar: '',
    isActive: false,
    path: '/'
  }
}`,...(l=(h=s.parameters)==null?void 0:h.docs)==null?void 0:l.source}}};const j=["GroupChat","ChatMember","UserOnline","UserOffline"];export{r as ChatMember,e as GroupChat,s as UserOffline,a as UserOnline,j as __namedExportsOrder,I as default};
