import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{r as E,R as L,g as $}from"./index-CTjT7uj6.js";import"./index-Hcv-Sshn.js";import{B as Q}from"./index-BWw-Y-iC.js";import{D as X}from"./index-BjL1sXoY.js";import"./index-SVfy51Fe.js";import"./index-CaGLDlOv.js";import"./index-CK8k5MaG.js";import"./index-bGgoeUOc.js";import"./index-CDEJpz3j.js";import{I as D}from"./index-BBwjF1qp.js";import"./index-CqnrDEy_.js";import{u as ee,b as te,e as re,a as se,d as O,f as ae,q as ne,w as oe,c as ie,g as ce,h as j}from"./auth-AY9r89Py.js";import"./index-CLD86TRe.js";import"./index-CASTjR2L.js";import"./index-CtF9otEl.js";import"./index-DlmwbrPx.js";import{T as x,S as de}from"./enum-DHbXvcqL.js";import{c as ue,D as le}from"./convert-B-0ARb2b.js";import"./index-CgRiTEaq.js";import{U as me}from"./index-D_LDqNjA.js";import{E as pe}from"./endPoint-D9QdfkjO.js";import{g as Ee,a as fe,u as W}from"./useOnlineStatus-DnmM3JzT.js";import{U as he}from"./index-iArLUUxv.js";import"./index-BhNf-aVa.js";import{C as ve}from"./index-BmjNuad-.js";import"./index-C3beOB5e.js";import{M as Ie}from"./index-nk1ce3t3.js";import{T as Se}from"./index-DGTiEEd8.js";import{f as Re}from"./index-D9gkCPzo.js";import"./clsx-B-dksMZM.js";import"./index.es-D6nAsfRb.js";import"./index-BzjuzjN8.js";import"./index-Ya2q_kcw.js";import"./list-D0Yobjwd.js";import"./index-CQUNLK73.js";import"./tslib.es6-CDuPK5Eb.js";import"./index-DERK34or.js";const _e=/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,ge=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/,y={INPUT_REQUIRED:"{field} is required",EMAIL_ERROR:"Email is not valid",EMAIL_EXIST:"Email has been registered, please try again!",PASSWORD_ERROR:"Minimum 6 characters, one uppercase, one lowercase, one number",CONFIRM_ERROR:"Password confirmation do not match password"},M={SIGN_UP_ERROR:"An error occurred. Please try again",SIGN_IN_ERROR:"email or password is incorrect",UPDATE_PROFILE_SUCCESS:"Update success",UPDATE_PROFILE_ERROR:"Update error"},be=()=>{const{data:t,error:e}=ee(pe.USER,Ee),[r,n]=E.useState({});return E.useEffect(()=>{(async()=>{if(t!=null&&t.data){const p=t.data.map(l=>l.id),f=(await Promise.all(p.map(l=>fe(l).then(s=>s.data)))).reduce((l,s)=>(s&&(l[s.user_id]=s),l),{});n(f)}})()},[t]),{users:(t==null?void 0:t.data)||[],profiles:r,isLoading:!t&&!e,isError:!!e}},Te=t=>{const e={};return Object.keys(t).forEach(r=>{const n=t[r];if(n.trim())r==="email"&&!_e.test(n)&&(e[r]=y.EMAIL_ERROR),r==="password"&&!ge.test(n)&&(e[r]=y.PASSWORD_ERROR),r==="confirm"&&t.password!==n&&(e[r]=y.CONFIRM_ERROR);else{const c=r.charAt(0).toUpperCase()+r.slice(1);e[r]=y.INPUT_REQUIRED.replace("{field}",c)}}),e};class xe extends L.Component{constructor(e){super(e),this.state={isError:!1,error:null,errorInfo:null}}componentDidCatch(e,r){this.setState({isError:!0,error:e,errorInfo:r}),console.log("Error occurred:",e)}render(){const{error:e,errorInfo:r,isError:n}=this.state;return n?o.jsxs("div",{children:[o.jsx("h2",{children:"Something went wrong."}),o.jsx("p",{children:e&&e.toString()}),o.jsx("p",{children:r&&r.componentStack})]}):this.props.children}}xe.__docgenInfo={description:"",methods:[],displayName:"ErrorBoundary",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};var Ae={VITE_FIREBASE_API_KEY:"AIzaSyDi9H_LNLTKdR1BHeAx2pr6YF2dJ3JbkG8",VITE_FIREBASE_AUTH_DOMAIN:"chat-app-223b4.firebaseapp.com",VITE_FIREBASE_PROJECT_ID:"chat-app-223b4",VITE_FIREBASE_STORAGE_BUCKET:"chat-app-223b4.appspot.com",VITE_FIREBASE_MESSAGING_SENDER_ID:"404191009390",VITE_FIREBASE_APP_ID:"1:404191009390:web:b773e9a0fbe4d61785a47f",VITE_FIREBASE_MEASUREMENT_ID:"G-BBECS153ZV",BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1,STORYBOOK:"true"};const B=t=>{let e;const r=new Set,n=(a,m)=>{const i=typeof a=="function"?a(e):a;if(!Object.is(i,e)){const d=e;e=m??(typeof i!="object"||i===null)?i:Object.assign({},e,i),r.forEach(v=>v(e,d))}},c=()=>e,l={setState:n,getState:c,getInitialState:()=>s,subscribe:a=>(r.add(a),()=>r.delete(a)),destroy:()=>{(Ae?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}},s=e=t(n,c,l);return l},De=t=>t?B(t):B;var Y={exports:{}},H={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P=E,ye=te;function Ue(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Pe=typeof Object.is=="function"?Object.is:Ue,Ne=ye.useSyncExternalStore,we=P.useRef,Ce=P.useEffect,Oe=P.useMemo,je=P.useDebugValue;H.useSyncExternalStoreWithSelector=function(t,e,r,n,c){var p=we(null);if(p.current===null){var u={hasValue:!1,value:null};p.current=u}else u=p.current;p=Oe(function(){function l(d){if(!s){if(s=!0,a=d,d=n(d),c!==void 0&&u.hasValue){var v=u.value;if(c(v,d))return m=v}return m=d}if(v=m,Pe(a,d))return v;var h=n(d);return c!==void 0&&c(v,h)?v:(a=d,m=h)}var s=!1,a,m,i=r===void 0?null:r;return[function(){return l(e())},i===null?void 0:function(){return l(i())}]},[e,r,n,c]);var f=Ne(t,p[0],p[1]);return Ce(function(){u.hasValue=!0,u.value=f},[f]),je(f),f};Y.exports=H;var Me=Y.exports;const Be=$(Me);var z={VITE_FIREBASE_API_KEY:"AIzaSyDi9H_LNLTKdR1BHeAx2pr6YF2dJ3JbkG8",VITE_FIREBASE_AUTH_DOMAIN:"chat-app-223b4.firebaseapp.com",VITE_FIREBASE_PROJECT_ID:"chat-app-223b4",VITE_FIREBASE_STORAGE_BUCKET:"chat-app-223b4.appspot.com",VITE_FIREBASE_MESSAGING_SENDER_ID:"404191009390",VITE_FIREBASE_APP_ID:"1:404191009390:web:b773e9a0fbe4d61785a47f",VITE_FIREBASE_MEASUREMENT_ID:"G-BBECS153ZV",BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1,STORYBOOK:"true"};const{useDebugValue:Fe}=L,{useSyncExternalStoreWithSelector:Ve}=Be;let F=!1;const Ge=t=>t;function ke(t,e=Ge,r){(z?"production":void 0)!=="production"&&r&&!F&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),F=!0);const n=Ve(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,r);return Fe(n),n}const V=t=>{(z?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?De(t):t,r=(n,c)=>ke(e,n,c);return Object.assign(r,e),r},K=t=>t?V(t):V;K(t=>({checkedUsers:[],addCheckedUser:e=>t(r=>({checkedUsers:[...r.checkedUsers,e]})),removeCheckedUser:e=>t(r=>({checkedUsers:r.checkedUsers.filter(n=>n!==e)})),resetStore:()=>t({checkedUsers:[]})}));const qe=K(t=>({currentUser:void 0,currentUserProfile:void 0,fetchUserData:async()=>re.onAuthStateChanged(async r=>{if(!r){t({currentUser:void 0,currentUserProfile:void 0});return}const n=se(O,"users",r.uid),c=await ae(n);if(!c.exists()){t({currentUser:void 0,currentUserProfile:void 0});return}const p=ne(ie(O,"profiles"),oe("user_id","==",r.uid)),u=await ce(p);let f;u.empty||(f=u.docs.map(l=>({id:l.id,...l.data()}))[0]),t({currentUser:c.data(),currentUserProfile:f})})})),Le=E.memo(()=>{const t=Re(),{currentUser:e,currentUserProfile:r,fetchUserData:n}=qe(),[c,p]=E.useState((r==null?void 0:r.avatar)||""),[u,f]=E.useState({}),[l,s]=E.useState(""),[a,m]=E.useState({id:"",password:"",userName:"",email:"",created_at:new Date,updated_at:new Date}),[i,d]=E.useState({id:"",user_id:e==null?void 0:e.id,avatar:(e==null?void 0:e.avatar)||"",phone:(e==null?void 0:e.phone)||""}),[v,h]=E.useState(!1);E.useEffect(()=>{if(!e){n();return}m(e),r&&d(r)},[t,r,e,n]);const g=E.useCallback(async R=>{const I=R.target.files,S=I&&I[0];if(S){const A=await ue(S);p(A),d(N=>({...N,avatar:A}))}},[]),b=E.useCallback(async()=>{const R={name:a.userName},_=Te(R);if(Object.keys(_).length){f(_);return}f({});const I={...a,userName:a.userName,updated_at:new Date},S={avatar:c||i.avatar,phone:i.phone};h(!0);const A=await j("users",a.id,I),N=await j("profiles",i.id,S);if(h(!1),!A.data||!N.data){s(M.UPDATE_PROFILE_ERROR);return}s(M.UPDATE_PROFILE_SUCCESS)},[i,c,a]),T=R=>_=>{const{value:I}=_.target;m(S=>({...S,[R]:I}))},J=R=>_=>{const{value:I}=_.target;d(S=>({...S,[R]:I}))},Z=a==null?void 0:a.id.split("-").join("");return o.jsxs("div",{className:" p-8 rounded-2xl",children:[o.jsxs("div",{className:"flex gap-20 item-center mt-4",children:[o.jsx("div",{className:"w-2/4 mt-4 ",children:o.jsx(me,{avatar:c||i.avatar,name:a==null?void 0:a.userName,htmlFor:"upload-profile",onImageChange:g})}),o.jsxs("div",{className:"w-full",children:[o.jsx(D,{variant:x.TERTIARY,htmlFor:"id-code",label:"ID",value:Z,disabled:!0}),o.jsx(D,{variant:x.TERTIARY,htmlFor:"fullName",label:"Full Name",value:a==null?void 0:a.userName,message:u==null?void 0:u.name,onChange:T("userName")}),o.jsx(D,{variant:x.TERTIARY,htmlFor:"email",label:"Email",value:a==null?void 0:a.email,disabled:!0}),o.jsx(D,{variant:x.TERTIARY,htmlFor:"phoneNumber",label:"Phone Number",value:i==null?void 0:i.phone,onChange:J("phone")})]})]}),o.jsx("div",{className:"mt-5",children:o.jsx(Q,{name:"Update Profile",variant:x.PRIMARY,size:de.MEDIUM,onClick:b,disabled:v})}),o.jsx("p",{className:"text-lg mt-5 text-center",children:l})]})});Le.__docgenInfo={description:"",methods:[],displayName:"Profile"};E.memo(({data:t,profiles:e,onSelected:r,currentUser:n,messages:c})=>{const{users:p}=be(),u=W(n),f=s=>{var g,b;const a=s.id,m="userName"in s,i=m?s.userName:s.title,d=m?(g=e[a])==null?void 0:g.avatar:s.avatar;if(m||s.isGroup)return{name:i,avatar:d,otherUserId:""};const v=s.members.find(T=>T!==n),h=p==null?void 0:p.find(T=>T.id===v);return h?{name:s.title||h.userName,avatar:s.avatar||((b=e[h.id])==null?void 0:b.avatar),otherUserId:h.id}:{name:i,avatar:d,otherUserId:""}};return t.filter(s=>s.id!==n).map(s=>{const{name:a,avatar:m,otherUserId:i}=f(s),d=s.id,v="userName"in s,h=c==null?void 0:c.find(b=>b.roomId===d),g=u[d]||i&&u[i]||!1;return o.jsx(he,{id:d,name:a,avatar:m,isActive:g,path:`/chat/${d}`,onSelect:r.bind(null,d,v),isGroup:!v&&s.isGroup,message:h==null?void 0:h.message,time_stamp:h==null?void 0:h.time_stamp.toString()},d)})});const We=E.memo(({messages:t,userProfiles:e,currentUser:r,onEdit:n,onDelete:c})=>{const p=W(r),u=s=>{n&&n(s)},f=s=>{c&&c(s)},l=E.useMemo(()=>{if(!t.length)return[];const s={};return t.forEach(a=>{const m=new Date(a.time_stamp),i=le(m);s[i]||(s[i]=[]),s[i].push(a)}),Object.keys(s).map(a=>({date:a,messages:s[a]}))},[t]);return o.jsx(o.Fragment,{children:l.map(s=>o.jsxs("div",{children:[o.jsx(X,{children:o.jsx(ve,{children:o.jsx("p",{children:s.date})})}),s.messages.map(a=>{const{name:m,avatar:i}=e.get(a.sender)||{name:"",avatar:""},d=p[a.sender]||!1;return o.jsx(Ie,{item:a,isCurrentUser:a.sender===r,avatar:i,name:m,isActive:d,onEdit:u,onDelete:f},a.id)})]},s.date))})});We.__docgenInfo={description:"",methods:[],displayName:"GroupedMessages",props:{messages:{required:!0,tsType:{name:"Array",elements:[{name:"IMessage"}],raw:"IMessage[]"},description:""},userProfiles:{required:!0,tsType:{name:"Map",elements:[{name:"string"},{name:"signature",type:"object",raw:"{ name: string; avatar: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"avatar",value:{name:"string",required:!0}}]}}],raw:"Map<string, { name: string; avatar: string }>"},description:""},currentUser:{required:!0,tsType:{name:"string"},description:""},onEdit:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: IMessage) => void",signature:{arguments:[{type:{name:"IMessage"},name:"item"}],return:{name:"void"}}},description:""},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}}};const C=E.memo(({list:t,onClick:e,index:r})=>o.jsx("div",{className:"w-full border-b-xs border-gray-200 flex items-center",children:t.map(n=>o.jsx(Se,{value:n.value,title:n.title,index:r,onClick:e},n.value))}));C.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{list:{required:!0,tsType:{name:"Array",elements:[{name:"Omit",elements:[{name:"ITab"},{name:"union",raw:"'index' | 'onClick'",elements:[{name:"literal",value:"'index'"},{name:"literal",value:"'onClick'"}]}],raw:"Omit<ITab, 'index' | 'onClick'>"}],raw:"Omit<ITab, 'index' | 'onClick'>[]"},description:""},index:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""}}};const w=E.memo(({index:t,tabIndex:e,children:r})=>t!==e?null:o.jsx("div",{className:"w-full",children:r}));w.__docgenInfo={description:"",methods:[],displayName:"Panel",props:{index:{required:!0,tsType:{name:"string"},description:""},tabIndex:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const Pt={component:C,tags:["autodocs"],argTypes:{list:{description:"Render dynamic react node children"},index:{description:"Tab position order"},onClick:{description:"Handle event when click "}}},Ye=[{title:"Tab 1",value:"1"},{title:"Tab 2",value:"2"}],U={render:()=>{const[t,e]=E.useState("1"),r=n=>{e(n.currentTarget.value)};return o.jsxs("div",{children:[o.jsx(C,{list:Ye,index:t,onClick:r}),o.jsx(w,{index:t,tabIndex:"1",children:o.jsx("div",{className:"text-center",children:"Content for Tab 1"})}),o.jsx(w,{index:t,tabIndex:"2",children:o.jsx("div",{className:"text-center",children:"Content for Tab 2"})})]})}};var G,k,q;U.parameters={...U.parameters,docs:{...(G=U.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    const [selectedTab, setSelectedTab] = useState<string>('1');
    const handleChangeTab = (event: React.MouseEvent<HTMLButtonElement>) => {
      setSelectedTab(event.currentTarget.value);
    };
    return <div>\r
        <Tabs list={list} index={selectedTab} onClick={handleChangeTab} />\r
        <Panel index={selectedTab} tabIndex="1">\r
          <div className="text-center">Content for Tab 1</div>\r
        </Panel>\r
        <Panel index={selectedTab} tabIndex="2">\r
          <div className="text-center">Content for Tab 2</div>\r
        </Panel>\r
      </div>;
  }
}`,...(q=(k=U.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};const Nt=["WithPanels"];export{U as WithPanels,Nt as __namedExportsOrder,Pt as default};
