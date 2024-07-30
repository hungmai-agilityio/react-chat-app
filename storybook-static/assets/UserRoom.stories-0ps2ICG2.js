import{N as C,B as N}from"./index-TJakpaRD.js";import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{r as _}from"./index-CTjT7uj6.js";import{c as k}from"./clsx-B-dksMZM.js";import{S as O}from"./enum-DHbXvcqL.js";import{h as G}from"./index-BrXc1ilD.js";import{F as I}from"./index.es-D6nAsfRb.js";import{t as E}from"./convert-Cmww3bkS.js";import{A as H}from"./index-Hcv-Sshn.js";import"./index-DERK34or.js";import"./index-BzjuzjN8.js";const j=_.memo(({id:S,isCurrentUser:T,name:r,avatar:b,isActive:A,isGroup:i,time_stamp:n,message:m,path:q,onSelect:w})=>e.jsxs(C,{to:q,className:"flex justify-between items-center w-full h-16 text-sm hover:bg-second px-3",onClick:w,children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("div",{className:"relative",children:[e.jsx(H,{name:r,avatar:b,circle:!0,size:O.SMALL}),!i&&e.jsx(I,{icon:G,className:k("absolute text-gray-400 border-xs border-white rounded-full top-6 left-7",{"text-green-500":A},{"text-red-500":T})})]}),m?e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold text-sm w-36 truncate",children:i?`${r}`:`PM: ${r}`}),e.jsx("p",{className:"w-36 truncate",children:m||""})]}):e.jsx("p",{children:r})]}),e.jsx("p",{children:n&&E(n)})]},S));j.__docgenInfo={description:"",methods:[],displayName:"UserRoom",props:{id:{required:!1,tsType:{name:"string"},description:""},isCurrentUser:{required:!1,tsType:{name:"boolean"},description:""},name:{required:!1,tsType:{name:"string"},description:""},avatar:{required:!1,tsType:{name:"string"},description:""},isActive:{required:!1,tsType:{name:"boolean"},description:""},isGroup:{required:!1,tsType:{name:"boolean"},description:""},isGroupChat:{required:!1,tsType:{name:"boolean"},description:""},time_stamp:{required:!1,tsType:{name:"string"},description:""},message:{required:!1,tsType:{name:"string"},description:""},path:{required:!1,tsType:{name:"string"},description:""},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const K={component:j,decorators:[N],tags:["autodocs"],argTypes:{id:{description:"Id user"},name:{description:"user name or chat room name"},avatar:{description:"User avatar or chat room avatar"},isActive:{description:"Check user active and render status"},isGroup:{description:"Check chat room is member or group chat"},time_stamp:{description:"render the time the last message was sent"},message:{description:"render the last message was sent"},path:{description:"The link opens the chat area according to the user id or chat room"},onSelect:{description:"Select chat room or user by id to start a conversation"}}},s={args:{name:"User",avatar:"",isActive:!0,isGroup:!0,message:"Hello",time_stamp:"2024-05-24T15:58:05.791Z",path:"/"}},a={args:{name:"User",avatar:"assets/images/mock-image.jpg",isActive:!0,message:"Hello you",time_stamp:new Date().toISOString(),path:"/"}},t={args:{name:"User",avatar:"",isActive:!0,path:"/"}},o={args:{name:"User",avatar:"",isActive:!1,path:"/"}};var c,p,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    name: 'User',
    avatar: '',
    isActive: true,
    isGroup: true,
    message: 'Hello',
    time_stamp: '2024-05-24T15:58:05.791Z',
    path: '/'
  }
}`,...(d=(p=s.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var l,u,g;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    name: 'User',
    avatar: 'assets/images/mock-image.jpg',
    isActive: true,
    message: 'Hello you',
    time_stamp: new Date().toISOString(),
    path: '/'
  }
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,f,v;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    name: 'User',
    avatar: '',
    isActive: true,
    path: '/'
  }
}`,...(v=(f=t.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var x,y,U;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    name: 'User',
    avatar: '',
    isActive: false,
    path: '/'
  }
}`,...(U=(y=o.parameters)==null?void 0:y.docs)==null?void 0:U.source}}};const Q=["GroupChat","ChatMember","UserOnline","UserOffline"];export{a as ChatMember,s as GroupChat,o as UserOffline,t as UserOnline,Q as __namedExportsOrder,K as default};
