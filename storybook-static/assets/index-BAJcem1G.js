import{j as Je}from"./jsx-runtime-Cw0GR0a5.js";import{r as Ct,R as wi}from"./index-CTjT7uj6.js";import{c as Br}from"./clsx-B-dksMZM.js";import{F as la}from"./index.es-D6nAsfRb.js";import{P as St}from"./enum-DHbXvcqL.js";import{_ as Ei}from"./tslib.es6-CDuPK5Eb.js";import{M as ua}from"./index-D4gDJoVZ.js";const da=({ref:i,handler:e})=>{Ct.useEffect(()=>{const n=r=>{i.current&&!i.current.contains(r.target)&&e()};return document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}},[i,e])};var fa={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nt=Ct;function pa(i,e){return i===e&&(i!==0||1/i===1/e)||i!==i&&e!==e}var ga=typeof Object.is=="function"?Object.is:pa,ma=nt.useState,va=nt.useEffect,_a=nt.useLayoutEffect,ya=nt.useDebugValue;function Ia(i,e){var n=e(),r=ma({inst:{value:n,getSnapshot:e}}),o=r[0].inst,c=r[1];return _a(function(){o.value=n,o.getSnapshot=e,Xn(o)&&c({inst:o})},[i,n,e]),va(function(){return Xn(o)&&c({inst:o}),i(function(){Xn(o)&&c({inst:o})})},[i]),ya(n),n}function Xn(i){var e=i.getSnapshot;i=i.value;try{var n=e();return!ga(i,n)}catch{return!0}}function wa(i,e){return e()}var Ea=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?wa:Ia;fa.useSyncExternalStore=nt.useSyncExternalStore!==void 0?nt.useSyncExternalStore:Ea;const Re=()=>{},ie=Re(),Yn=Object,oe=i=>i===ie,xe=i=>typeof i=="function",yn=(i,e)=>({...i,...e}),Ta=i=>xe(i.then),en=new WeakMap;let Aa=0;const Rt=i=>{const e=typeof i,n=i&&i.constructor,r=n==Date;let o,c;if(Yn(i)===i&&!r&&n!=RegExp){if(o=en.get(i),o)return o;if(o=++Aa+"~",en.set(i,o),n==Array){for(o="@",c=0;c<i.length;c++)o+=Rt(i[c])+",";en.set(i,o)}if(n==Yn){o="#";const l=Yn.keys(i).sort();for(;!oe(c=l.pop());)oe(i[c])||(o+=c+":"+Rt(i[c])+",");en.set(i,o)}}else o=r?i.toJSON():e=="symbol"?i.toString():e=="string"?JSON.stringify(i):""+i;return o},Te=new WeakMap,Qn={},tn={},Ss="undefined",Ti=typeof window!=Ss,ci=typeof document!=Ss,Sa=(i,e)=>{const n=Te.get(i);return[()=>!oe(e)&&i.get(e)||Qn,r=>{if(!oe(e)){const o=i.get(e);e in tn||(tn[e]=o),n[5](e,yn(o,r),o||Qn)}},n[6],()=>!oe(e)&&e in tn?tn[e]:!oe(e)&&i.get(e)||Qn]};let hi=!0;const ba=()=>hi,[li,ui]=Ti&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[Re,Re],Ca=()=>{const i=ci&&document.visibilityState;return oe(i)||i!=="hidden"},Ra=i=>(ci&&document.addEventListener("visibilitychange",i),li("focus",i),()=>{ci&&document.removeEventListener("visibilitychange",i),ui("focus",i)}),Pa=i=>{const e=()=>{hi=!0,i()},n=()=>{hi=!1};return li("online",e),li("offline",n),()=>{ui("online",e),ui("offline",n)}},ka={isOnline:ba,isVisible:Ca},Oa={initFocus:Ra,initReconnect:Pa};wi.useId;const bs=!Ti||"Deno"in window,Zn=typeof navigator<"u"&&navigator.connection,Vr=!bs&&Zn&&(["slow-2g","2g"].includes(Zn.effectiveType)||Zn.saveData),Cs=i=>{if(xe(i))try{i=i()}catch{i=""}const e=i;return i=typeof i=="string"?i:(Array.isArray(i)?i.length:i)?Rt(i):"",[i,e]};let Da=0;const Hr=()=>++Da,Na=0,La=1,Ma=2;async function Ua(...i){const[e,n,r,o]=i,c=yn({populateCache:!0,throwOnError:!0},typeof o=="boolean"?{revalidate:o}:o||{});let l=c.populateCache;const g=c.rollbackOnError;let I=c.optimisticData;const E=b=>typeof g=="function"?g(b):g!==!1,A=c.throwOnError;if(xe(n)){const b=n,P=[],S=e.keys();for(const N of S)!/^\$(inf|sub)\$/.test(N)&&b(e.get(N)._k)&&P.push(N);return Promise.all(P.map(R))}return R(n);async function R(b){const[P]=Cs(b);if(!P)return;const[S,N]=Sa(e,P),[M,ee,X,H]=Te.get(e),Z=()=>{const d=M[P];return(xe(c.revalidate)?c.revalidate(S().data,b):c.revalidate!==!1)&&(delete X[P],delete H[P],d&&d[0])?d[0](Ma).then(()=>S().data):S().data};if(i.length<3)return Z();let V=r,x;const v=Hr();ee[P]=[v,0];const u=!oe(I),f=S(),p=f.data,m=f._c,y=oe(m)?p:m;if(u&&(I=xe(I)?I(y,p):I,N({data:I,_c:y})),xe(V))try{V=V(y)}catch(d){x=d}if(V&&Ta(V))if(V=await V.catch(d=>{x=d}),v!==ee[P][0]){if(x)throw x;return V}else x&&u&&E(x)&&(l=!0,N({data:y,_c:ie}));if(l&&!x)if(xe(l)){const d=l(V,y);N({data:d,error:ie,_c:ie})}else N({data:V,error:ie,_c:ie});if(ee[P][1]=Hr(),Promise.resolve(Z()).then(()=>{N({_c:ie})}),x){if(A)throw x;return}return V}}const $r=(i,e)=>{for(const n in i)i[n][0]&&i[n][0](e)},xa=(i,e)=>{if(!Te.has(i)){const n=yn(Oa,e),r={},o=Ua.bind(ie,i);let c=Re;const l={},g=(A,R)=>{const b=l[A]||[];return l[A]=b,b.push(R),()=>b.splice(b.indexOf(R),1)},I=(A,R,b)=>{i.set(A,R);const P=l[A];if(P)for(const S of P)S(R,b)},E=()=>{if(!Te.has(i)&&(Te.set(i,[r,{},{},{},o,I,g]),!bs)){const A=n.initFocus(setTimeout.bind(ie,$r.bind(ie,r,Na))),R=n.initReconnect(setTimeout.bind(ie,$r.bind(ie,r,La)));c=()=>{A&&A(),R&&R(),Te.delete(i)}}};return E(),[i,o,E,c]}return[i,Te.get(i)[4]]},Fa=(i,e,n,r,o)=>{const c=n.errorRetryCount,l=o.retryCount,g=~~((Math.random()+.5)*(1<<(l<8?l:8)))*n.errorRetryInterval;!oe(c)&&l>c||setTimeout(r,g,o)},ja=(i,e)=>Rt(i)==Rt(e),[Rs,Ba]=xa(new Map);yn({onLoadingSlow:Re,onSuccess:Re,onError:Re,onErrorRetry:Fa,onDiscarded:Re,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:Vr?1e4:5e3,focusThrottleInterval:5*1e3,dedupingInterval:2*1e3,loadingTimeout:Vr?5e3:3e3,compare:ja,isPaused:()=>!1,cache:Rs,mutate:Ba,fallback:{}},ka);Ct.createContext({});const Va="$inf$",Ps=Ti&&window.__SWR_DEVTOOLS_USE__,Ha=Ps?window.__SWR_DEVTOOLS_USE__:[],$a=()=>{Ps&&(window.__SWR_DEVTOOLS_REACT__=wi)},za=i=>(e,n,r)=>i(e,n&&((...c)=>{const[l]=Cs(e),[,,,g]=Te.get(Rs);if(l.startsWith(Va))return n(...c);const I=g[l];return oe(I)?n(...c):(delete g[l],I)}),r);Ha.concat(za);$a();wi.use;var zr={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks=function(i){const e=[];let n=0;for(let r=0;r<i.length;r++){let o=i.charCodeAt(r);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&r+1<i.length&&(i.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++r)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},Wa=function(i){const e=[];let n=0,r=0;for(;n<i.length;){const o=i[n++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const c=i[n++];e[r++]=String.fromCharCode((o&31)<<6|c&63)}else if(o>239&&o<365){const c=i[n++],l=i[n++],g=i[n++],I=((o&7)<<18|(c&63)<<12|(l&63)<<6|g&63)-65536;e[r++]=String.fromCharCode(55296+(I>>10)),e[r++]=String.fromCharCode(56320+(I&1023))}else{const c=i[n++],l=i[n++];e[r++]=String.fromCharCode((o&15)<<12|(c&63)<<6|l&63)}}return e.join("")},Os={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<i.length;o+=3){const c=i[o],l=o+1<i.length,g=l?i[o+1]:0,I=o+2<i.length,E=I?i[o+2]:0,A=c>>2,R=(c&3)<<4|g>>4;let b=(g&15)<<2|E>>6,P=E&63;I||(P=64,l||(b=64)),r.push(n[A],n[R],n[b],n[P])}return r.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(ks(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):Wa(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<i.length;){const c=n[i.charAt(o++)],g=o<i.length?n[i.charAt(o)]:0;++o;const E=o<i.length?n[i.charAt(o)]:64;++o;const R=o<i.length?n[i.charAt(o)]:64;if(++o,c==null||g==null||E==null||R==null)throw new Ga;const b=c<<2|g>>4;if(r.push(b),E!==64){const P=g<<4&240|E>>2;if(r.push(P),R!==64){const S=E<<6&192|R;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class Ga extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qa=function(i){const e=ks(i);return Os.encodeByteArray(e,!0)},hn=function(i){return qa(i).replace(/\./g,"")},Ds=function(i){try{return Os.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja=()=>Ka().__FIREBASE_DEFAULTS__,Xa=()=>{if(typeof process>"u"||typeof zr>"u")return;const i=zr.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},Ya=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Ds(i[1]);return e&&JSON.parse(e)},Ai=()=>{try{return Ja()||Xa()||Ya()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Ns=i=>{var e,n;return(n=(e=Ai())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[i]},Qa=i=>{const e=Ns(i);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Ls=()=>{var i;return(i=Ai())===null||i===void 0?void 0:i.config},Ms=i=>{var e;return(e=Ai())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",o=i.iat||0,c=i.sub||i.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},i);return[hn(JSON.stringify(n)),hn(JSON.stringify(l)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(J())}function nc(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function ic(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rc(){const i=J();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function sc(){try{return typeof indexedDB=="object"}catch{return!1}}function oc(){return new Promise((i,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),i(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var c;e(((c=o.error)===null||c===void 0?void 0:c.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac="FirebaseError";class ve extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ac,Object.setPrototypeOf(this,ve.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Dt.prototype.create)}}class Dt{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},o=`${this.service}/${e}`,c=this.errors[e],l=c?cc(c,r):"Error",g=`${this.serviceName}: ${l} (${o}).`;return new ve(o,g,r)}}function cc(i,e){return i.replace(hc,(n,r)=>{const o=e[r];return o!=null?String(o):`<${r}?>`})}const hc=/\{\$([^}]+)}/g;function lc(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function ln(i,e){if(i===e)return!0;const n=Object.keys(i),r=Object.keys(e);for(const o of n){if(!r.includes(o))return!1;const c=i[o],l=e[o];if(Wr(c)&&Wr(l)){if(!ln(c,l))return!1}else if(c!==l)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function Wr(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(i){const e=[];for(const[n,r]of Object.entries(i))Array.isArray(r)?r.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function uc(i,e){const n=new dc(i,e);return n.subscribe.bind(n)}class dc{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let o;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");fc(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:r},o.next===void 0&&(o.next=ei),o.error===void 0&&(o.error=ei),o.complete===void 0&&(o.complete=ei);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fc(i,e){if(typeof i!="object"||i===null)return!1;for(const n of e)if(n in i&&typeof i[n]=="function")return!0;return!1}function ei(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(i){return i&&i._delegate?i._delegate:i}class Be{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Za;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(c){if(o)return null;throw c}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mc(e))try{this.getOrInitializeService({instanceIdentifier:Ue})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const c=this.getOrInitializeService({instanceIdentifier:o});r.resolve(c)}catch{}}}}clearInstance(e=Ue){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ue){return this.instances.has(e)}getOptions(e=Ue){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[c,l]of this.instancesDeferred.entries()){const g=this.normalizeInstanceIdentifier(c);r===g&&l.resolve(o)}return o}onInit(e,n){var r;const o=this.normalizeInstanceIdentifier(n),c=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;c.add(e),this.onInitCallbacks.set(o,c);const l=this.instances.get(o);return l&&e(l,o),()=>{c.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const o of r)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:gc(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ue){return this.component?this.component.multipleInstances?e:Ue:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gc(i){return i===Ue?void 0:i}function mc(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new pc(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var D;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(D||(D={}));const _c={debug:D.DEBUG,verbose:D.VERBOSE,info:D.INFO,warn:D.WARN,error:D.ERROR,silent:D.SILENT},yc=D.INFO,Ic={[D.DEBUG]:"log",[D.VERBOSE]:"log",[D.INFO]:"info",[D.WARN]:"warn",[D.ERROR]:"error"},wc=(i,e,...n)=>{if(e<i.logLevel)return;const r=new Date().toISOString(),o=Ic[e];if(o)console[o](`[${r}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Si{constructor(e){this.name=e,this._logLevel=yc,this._logHandler=wc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in D))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_c[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,D.DEBUG,...e),this._logHandler(this,D.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,D.VERBOSE,...e),this._logHandler(this,D.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,D.INFO,...e),this._logHandler(this,D.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,D.WARN,...e),this._logHandler(this,D.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,D.ERROR,...e),this._logHandler(this,D.ERROR,...e)}}const Ec=(i,e)=>e.some(n=>i instanceof n);let Gr,qr;function Tc(){return Gr||(Gr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ac(){return qr||(qr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Us=new WeakMap,di=new WeakMap,xs=new WeakMap,ti=new WeakMap,bi=new WeakMap;function Sc(i){const e=new Promise((n,r)=>{const o=()=>{i.removeEventListener("success",c),i.removeEventListener("error",l)},c=()=>{n(ke(i.result)),o()},l=()=>{r(i.error),o()};i.addEventListener("success",c),i.addEventListener("error",l)});return e.then(n=>{n instanceof IDBCursor&&Us.set(n,i)}).catch(()=>{}),bi.set(e,i),e}function bc(i){if(di.has(i))return;const e=new Promise((n,r)=>{const o=()=>{i.removeEventListener("complete",c),i.removeEventListener("error",l),i.removeEventListener("abort",l)},c=()=>{n(),o()},l=()=>{r(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",c),i.addEventListener("error",l),i.addEventListener("abort",l)});di.set(i,e)}let fi={get(i,e,n){if(i instanceof IDBTransaction){if(e==="done")return di.get(i);if(e==="objectStoreNames")return i.objectStoreNames||xs.get(i);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ke(i[e])},set(i,e,n){return i[e]=n,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function Cc(i){fi=i(fi)}function Rc(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=i.call(ni(this),e,...n);return xs.set(r,e.sort?e.sort():[e]),ke(r)}:Ac().includes(i)?function(...e){return i.apply(ni(this),e),ke(Us.get(this))}:function(...e){return ke(i.apply(ni(this),e))}}function Pc(i){return typeof i=="function"?Rc(i):(i instanceof IDBTransaction&&bc(i),Ec(i,Tc())?new Proxy(i,fi):i)}function ke(i){if(i instanceof IDBRequest)return Sc(i);if(ti.has(i))return ti.get(i);const e=Pc(i);return e!==i&&(ti.set(i,e),bi.set(e,i)),e}const ni=i=>bi.get(i);function kc(i,e,{blocked:n,upgrade:r,blocking:o,terminated:c}={}){const l=indexedDB.open(i,e),g=ke(l);return r&&l.addEventListener("upgradeneeded",I=>{r(ke(l.result),I.oldVersion,I.newVersion,ke(l.transaction),I)}),n&&l.addEventListener("blocked",I=>n(I.oldVersion,I.newVersion,I)),g.then(I=>{c&&I.addEventListener("close",()=>c()),o&&I.addEventListener("versionchange",E=>o(E.oldVersion,E.newVersion,E))}).catch(()=>{}),g}const Oc=["get","getKey","getAll","getAllKeys","count"],Dc=["put","add","delete","clear"],ii=new Map;function Kr(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(ii.get(e))return ii.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,o=Dc.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||Oc.includes(n)))return;const c=async function(l,...g){const I=this.transaction(l,o?"readwrite":"readonly");let E=I.store;return r&&(E=E.index(g.shift())),(await Promise.all([E[n](...g),o&&I.done]))[0]};return ii.set(e,c),c}Cc(i=>({...i,get:(e,n,r)=>Kr(e,n)||i.get(e,n,r),has:(e,n)=>!!Kr(e,n)||i.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Lc(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Lc(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pi="@firebase/app",Jr="0.10.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve=new Si("@firebase/app"),Mc="@firebase/app-compat",Uc="@firebase/analytics-compat",xc="@firebase/analytics",Fc="@firebase/app-check-compat",jc="@firebase/app-check",Bc="@firebase/auth",Vc="@firebase/auth-compat",Hc="@firebase/database",$c="@firebase/database-compat",zc="@firebase/functions",Wc="@firebase/functions-compat",Gc="@firebase/installations",qc="@firebase/installations-compat",Kc="@firebase/messaging",Jc="@firebase/messaging-compat",Xc="@firebase/performance",Yc="@firebase/performance-compat",Qc="@firebase/remote-config",Zc="@firebase/remote-config-compat",eh="@firebase/storage",th="@firebase/storage-compat",nh="@firebase/firestore",ih="@firebase/vertexai-preview",rh="@firebase/firestore-compat",sh="firebase",oh="10.12.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi="[DEFAULT]",ah={[pi]:"fire-core",[Mc]:"fire-core-compat",[xc]:"fire-analytics",[Uc]:"fire-analytics-compat",[jc]:"fire-app-check",[Fc]:"fire-app-check-compat",[Bc]:"fire-auth",[Vc]:"fire-auth-compat",[Hc]:"fire-rtdb",[$c]:"fire-rtdb-compat",[zc]:"fire-fn",[Wc]:"fire-fn-compat",[Gc]:"fire-iid",[qc]:"fire-iid-compat",[Kc]:"fire-fcm",[Jc]:"fire-fcm-compat",[Xc]:"fire-perf",[Yc]:"fire-perf-compat",[Qc]:"fire-rc",[Zc]:"fire-rc-compat",[eh]:"fire-gcs",[th]:"fire-gcs-compat",[nh]:"fire-fst",[rh]:"fire-fst-compat",[ih]:"fire-vertex","fire-js":"fire-js",[sh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un=new Map,ch=new Map,mi=new Map;function Xr(i,e){try{i.container.addComponent(e)}catch(n){Ve.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,n)}}function it(i){const e=i.name;if(mi.has(e))return Ve.debug(`There were multiple attempts to register component ${e}.`),!1;mi.set(e,i);for(const n of un.values())Xr(n,i);for(const n of ch.values())Xr(n,i);return!0}function Ci(i,e){const n=i.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),i.container.getProvider(e)}function Pe(i){return i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Oe=new Dt("app","Firebase",hh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Be("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Oe.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot=oh;function Fs(i,e={}){let n=i;typeof e!="object"&&(e={name:e});const r=Object.assign({name:gi,automaticDataCollectionEnabled:!1},e),o=r.name;if(typeof o!="string"||!o)throw Oe.create("bad-app-name",{appName:String(o)});if(n||(n=Ls()),!n)throw Oe.create("no-options");const c=un.get(o);if(c){if(ln(n,c.options)&&ln(r,c.config))return c;throw Oe.create("duplicate-app",{appName:o})}const l=new vc(o);for(const I of mi.values())l.addComponent(I);const g=new lh(n,r,l);return un.set(o,g),g}function js(i=gi){const e=un.get(i);if(!e&&i===gi&&Ls())return Fs();if(!e)throw Oe.create("no-app",{appName:i});return e}function De(i,e,n){var r;let o=(r=ah[i])!==null&&r!==void 0?r:i;n&&(o+=`-${n}`);const c=o.match(/\s|\//),l=e.match(/\s|\//);if(c||l){const g=[`Unable to register library "${o}" with version "${e}":`];c&&g.push(`library name "${o}" contains illegal characters (whitespace or "/")`),c&&l&&g.push("and"),l&&g.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ve.warn(g.join(" "));return}it(new Be(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uh="firebase-heartbeat-database",dh=1,Pt="firebase-heartbeat-store";let ri=null;function Bs(){return ri||(ri=kc(uh,dh,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Pt)}catch(n){console.warn(n)}}}}).catch(i=>{throw Oe.create("idb-open",{originalErrorMessage:i.message})})),ri}async function fh(i){try{const n=(await Bs()).transaction(Pt),r=await n.objectStore(Pt).get(Vs(i));return await n.done,r}catch(e){if(e instanceof ve)Ve.warn(e.message);else{const n=Oe.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ve.warn(n.message)}}}async function Yr(i,e){try{const r=(await Bs()).transaction(Pt,"readwrite");await r.objectStore(Pt).put(e,Vs(i)),await r.done}catch(n){if(n instanceof ve)Ve.warn(n.message);else{const r=Oe.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ve.warn(r.message)}}}function Vs(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph=1024,gh=30*24*60*60*1e3;class mh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _h(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=Qr();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(l=>l.date===c)))return this._heartbeatsCache.heartbeats.push({date:c,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const g=new Date(l.date).valueOf();return Date.now()-g<=gh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Qr(),{heartbeatsToSend:r,unsentEntries:o}=vh(this._heartbeatsCache.heartbeats),c=hn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}}function Qr(){return new Date().toISOString().substring(0,10)}function vh(i,e=ph){const n=[];let r=i.slice();for(const o of i){const c=n.find(l=>l.agent===o.agent);if(c){if(c.dates.push(o.date),Zr(n)>e){c.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Zr(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class _h{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sc()?oc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await fh(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return Yr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return Yr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Zr(i){return hn(JSON.stringify({version:2,heartbeats:i})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(i){it(new Be("platform-logger",e=>new Nc(e),"PRIVATE")),it(new Be("heartbeat",e=>new mh(e),"PRIVATE")),De(pi,Jr,i),De(pi,Jr,"esm2017"),De("fire-js","")}yh("");var es=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hs;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,u){function f(){}f.prototype=u.prototype,v.D=u.prototype,v.prototype=new f,v.prototype.constructor=v,v.C=function(p,m,y){for(var d=Array(arguments.length-2),ae=2;ae<arguments.length;ae++)d[ae-2]=arguments[ae];return u.prototype[m].apply(p,d)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(v,u,f){f||(f=0);var p=Array(16);if(typeof u=="string")for(var m=0;16>m;++m)p[m]=u.charCodeAt(f++)|u.charCodeAt(f++)<<8|u.charCodeAt(f++)<<16|u.charCodeAt(f++)<<24;else for(m=0;16>m;++m)p[m]=u[f++]|u[f++]<<8|u[f++]<<16|u[f++]<<24;u=v.g[0],f=v.g[1],m=v.g[2];var y=v.g[3],d=u+(y^f&(m^y))+p[0]+3614090360&4294967295;u=f+(d<<7&4294967295|d>>>25),d=y+(m^u&(f^m))+p[1]+3905402710&4294967295,y=u+(d<<12&4294967295|d>>>20),d=m+(f^y&(u^f))+p[2]+606105819&4294967295,m=y+(d<<17&4294967295|d>>>15),d=f+(u^m&(y^u))+p[3]+3250441966&4294967295,f=m+(d<<22&4294967295|d>>>10),d=u+(y^f&(m^y))+p[4]+4118548399&4294967295,u=f+(d<<7&4294967295|d>>>25),d=y+(m^u&(f^m))+p[5]+1200080426&4294967295,y=u+(d<<12&4294967295|d>>>20),d=m+(f^y&(u^f))+p[6]+2821735955&4294967295,m=y+(d<<17&4294967295|d>>>15),d=f+(u^m&(y^u))+p[7]+4249261313&4294967295,f=m+(d<<22&4294967295|d>>>10),d=u+(y^f&(m^y))+p[8]+1770035416&4294967295,u=f+(d<<7&4294967295|d>>>25),d=y+(m^u&(f^m))+p[9]+2336552879&4294967295,y=u+(d<<12&4294967295|d>>>20),d=m+(f^y&(u^f))+p[10]+4294925233&4294967295,m=y+(d<<17&4294967295|d>>>15),d=f+(u^m&(y^u))+p[11]+2304563134&4294967295,f=m+(d<<22&4294967295|d>>>10),d=u+(y^f&(m^y))+p[12]+1804603682&4294967295,u=f+(d<<7&4294967295|d>>>25),d=y+(m^u&(f^m))+p[13]+4254626195&4294967295,y=u+(d<<12&4294967295|d>>>20),d=m+(f^y&(u^f))+p[14]+2792965006&4294967295,m=y+(d<<17&4294967295|d>>>15),d=f+(u^m&(y^u))+p[15]+1236535329&4294967295,f=m+(d<<22&4294967295|d>>>10),d=u+(m^y&(f^m))+p[1]+4129170786&4294967295,u=f+(d<<5&4294967295|d>>>27),d=y+(f^m&(u^f))+p[6]+3225465664&4294967295,y=u+(d<<9&4294967295|d>>>23),d=m+(u^f&(y^u))+p[11]+643717713&4294967295,m=y+(d<<14&4294967295|d>>>18),d=f+(y^u&(m^y))+p[0]+3921069994&4294967295,f=m+(d<<20&4294967295|d>>>12),d=u+(m^y&(f^m))+p[5]+3593408605&4294967295,u=f+(d<<5&4294967295|d>>>27),d=y+(f^m&(u^f))+p[10]+38016083&4294967295,y=u+(d<<9&4294967295|d>>>23),d=m+(u^f&(y^u))+p[15]+3634488961&4294967295,m=y+(d<<14&4294967295|d>>>18),d=f+(y^u&(m^y))+p[4]+3889429448&4294967295,f=m+(d<<20&4294967295|d>>>12),d=u+(m^y&(f^m))+p[9]+568446438&4294967295,u=f+(d<<5&4294967295|d>>>27),d=y+(f^m&(u^f))+p[14]+3275163606&4294967295,y=u+(d<<9&4294967295|d>>>23),d=m+(u^f&(y^u))+p[3]+4107603335&4294967295,m=y+(d<<14&4294967295|d>>>18),d=f+(y^u&(m^y))+p[8]+1163531501&4294967295,f=m+(d<<20&4294967295|d>>>12),d=u+(m^y&(f^m))+p[13]+2850285829&4294967295,u=f+(d<<5&4294967295|d>>>27),d=y+(f^m&(u^f))+p[2]+4243563512&4294967295,y=u+(d<<9&4294967295|d>>>23),d=m+(u^f&(y^u))+p[7]+1735328473&4294967295,m=y+(d<<14&4294967295|d>>>18),d=f+(y^u&(m^y))+p[12]+2368359562&4294967295,f=m+(d<<20&4294967295|d>>>12),d=u+(f^m^y)+p[5]+4294588738&4294967295,u=f+(d<<4&4294967295|d>>>28),d=y+(u^f^m)+p[8]+2272392833&4294967295,y=u+(d<<11&4294967295|d>>>21),d=m+(y^u^f)+p[11]+1839030562&4294967295,m=y+(d<<16&4294967295|d>>>16),d=f+(m^y^u)+p[14]+4259657740&4294967295,f=m+(d<<23&4294967295|d>>>9),d=u+(f^m^y)+p[1]+2763975236&4294967295,u=f+(d<<4&4294967295|d>>>28),d=y+(u^f^m)+p[4]+1272893353&4294967295,y=u+(d<<11&4294967295|d>>>21),d=m+(y^u^f)+p[7]+4139469664&4294967295,m=y+(d<<16&4294967295|d>>>16),d=f+(m^y^u)+p[10]+3200236656&4294967295,f=m+(d<<23&4294967295|d>>>9),d=u+(f^m^y)+p[13]+681279174&4294967295,u=f+(d<<4&4294967295|d>>>28),d=y+(u^f^m)+p[0]+3936430074&4294967295,y=u+(d<<11&4294967295|d>>>21),d=m+(y^u^f)+p[3]+3572445317&4294967295,m=y+(d<<16&4294967295|d>>>16),d=f+(m^y^u)+p[6]+76029189&4294967295,f=m+(d<<23&4294967295|d>>>9),d=u+(f^m^y)+p[9]+3654602809&4294967295,u=f+(d<<4&4294967295|d>>>28),d=y+(u^f^m)+p[12]+3873151461&4294967295,y=u+(d<<11&4294967295|d>>>21),d=m+(y^u^f)+p[15]+530742520&4294967295,m=y+(d<<16&4294967295|d>>>16),d=f+(m^y^u)+p[2]+3299628645&4294967295,f=m+(d<<23&4294967295|d>>>9),d=u+(m^(f|~y))+p[0]+4096336452&4294967295,u=f+(d<<6&4294967295|d>>>26),d=y+(f^(u|~m))+p[7]+1126891415&4294967295,y=u+(d<<10&4294967295|d>>>22),d=m+(u^(y|~f))+p[14]+2878612391&4294967295,m=y+(d<<15&4294967295|d>>>17),d=f+(y^(m|~u))+p[5]+4237533241&4294967295,f=m+(d<<21&4294967295|d>>>11),d=u+(m^(f|~y))+p[12]+1700485571&4294967295,u=f+(d<<6&4294967295|d>>>26),d=y+(f^(u|~m))+p[3]+2399980690&4294967295,y=u+(d<<10&4294967295|d>>>22),d=m+(u^(y|~f))+p[10]+4293915773&4294967295,m=y+(d<<15&4294967295|d>>>17),d=f+(y^(m|~u))+p[1]+2240044497&4294967295,f=m+(d<<21&4294967295|d>>>11),d=u+(m^(f|~y))+p[8]+1873313359&4294967295,u=f+(d<<6&4294967295|d>>>26),d=y+(f^(u|~m))+p[15]+4264355552&4294967295,y=u+(d<<10&4294967295|d>>>22),d=m+(u^(y|~f))+p[6]+2734768916&4294967295,m=y+(d<<15&4294967295|d>>>17),d=f+(y^(m|~u))+p[13]+1309151649&4294967295,f=m+(d<<21&4294967295|d>>>11),d=u+(m^(f|~y))+p[4]+4149444226&4294967295,u=f+(d<<6&4294967295|d>>>26),d=y+(f^(u|~m))+p[11]+3174756917&4294967295,y=u+(d<<10&4294967295|d>>>22),d=m+(u^(y|~f))+p[2]+718787259&4294967295,m=y+(d<<15&4294967295|d>>>17),d=f+(y^(m|~u))+p[9]+3951481745&4294967295,v.g[0]=v.g[0]+u&4294967295,v.g[1]=v.g[1]+(m+(d<<21&4294967295|d>>>11))&4294967295,v.g[2]=v.g[2]+m&4294967295,v.g[3]=v.g[3]+y&4294967295}r.prototype.u=function(v,u){u===void 0&&(u=v.length);for(var f=u-this.blockSize,p=this.B,m=this.h,y=0;y<u;){if(m==0)for(;y<=f;)o(this,v,y),y+=this.blockSize;if(typeof v=="string"){for(;y<u;)if(p[m++]=v.charCodeAt(y++),m==this.blockSize){o(this,p),m=0;break}}else for(;y<u;)if(p[m++]=v[y++],m==this.blockSize){o(this,p),m=0;break}}this.h=m,this.o+=u},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var u=1;u<v.length-8;++u)v[u]=0;var f=8*this.o;for(u=v.length-8;u<v.length;++u)v[u]=f&255,f/=256;for(this.u(v),v=Array(16),u=f=0;4>u;++u)for(var p=0;32>p;p+=8)v[f++]=this.g[u]>>>p&255;return v};function c(v,u){var f=g;return Object.prototype.hasOwnProperty.call(f,v)?f[v]:f[v]=u(v)}function l(v,u){this.h=u;for(var f=[],p=!0,m=v.length-1;0<=m;m--){var y=v[m]|0;p&&y==u||(f[m]=y,p=!1)}this.g=f}var g={};function I(v){return-128<=v&&128>v?c(v,function(u){return new l([u|0],0>u?-1:0)}):new l([v|0],0>v?-1:0)}function E(v){if(isNaN(v)||!isFinite(v))return R;if(0>v)return M(E(-v));for(var u=[],f=1,p=0;v>=f;p++)u[p]=v/f|0,f*=4294967296;return new l(u,0)}function A(v,u){if(v.length==0)throw Error("number format error: empty string");if(u=u||10,2>u||36<u)throw Error("radix out of range: "+u);if(v.charAt(0)=="-")return M(A(v.substring(1),u));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var f=E(Math.pow(u,8)),p=R,m=0;m<v.length;m+=8){var y=Math.min(8,v.length-m),d=parseInt(v.substring(m,m+y),u);8>y?(y=E(Math.pow(u,y)),p=p.j(y).add(E(d))):(p=p.j(f),p=p.add(E(d)))}return p}var R=I(0),b=I(1),P=I(16777216);i=l.prototype,i.m=function(){if(N(this))return-M(this).m();for(var v=0,u=1,f=0;f<this.g.length;f++){var p=this.i(f);v+=(0<=p?p:4294967296+p)*u,u*=4294967296}return v},i.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(S(this))return"0";if(N(this))return"-"+M(this).toString(v);for(var u=E(Math.pow(v,6)),f=this,p="";;){var m=Z(f,u).g;f=ee(f,m.j(u));var y=((0<f.g.length?f.g[0]:f.h)>>>0).toString(v);if(f=m,S(f))return y+p;for(;6>y.length;)y="0"+y;p=y+p}},i.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function S(v){if(v.h!=0)return!1;for(var u=0;u<v.g.length;u++)if(v.g[u]!=0)return!1;return!0}function N(v){return v.h==-1}i.l=function(v){return v=ee(this,v),N(v)?-1:S(v)?0:1};function M(v){for(var u=v.g.length,f=[],p=0;p<u;p++)f[p]=~v.g[p];return new l(f,~v.h).add(b)}i.abs=function(){return N(this)?M(this):this},i.add=function(v){for(var u=Math.max(this.g.length,v.g.length),f=[],p=0,m=0;m<=u;m++){var y=p+(this.i(m)&65535)+(v.i(m)&65535),d=(y>>>16)+(this.i(m)>>>16)+(v.i(m)>>>16);p=d>>>16,y&=65535,d&=65535,f[m]=d<<16|y}return new l(f,f[f.length-1]&-2147483648?-1:0)};function ee(v,u){return v.add(M(u))}i.j=function(v){if(S(this)||S(v))return R;if(N(this))return N(v)?M(this).j(M(v)):M(M(this).j(v));if(N(v))return M(this.j(M(v)));if(0>this.l(P)&&0>v.l(P))return E(this.m()*v.m());for(var u=this.g.length+v.g.length,f=[],p=0;p<2*u;p++)f[p]=0;for(p=0;p<this.g.length;p++)for(var m=0;m<v.g.length;m++){var y=this.i(p)>>>16,d=this.i(p)&65535,ae=v.i(m)>>>16,ct=v.i(m)&65535;f[2*p+2*m]+=d*ct,X(f,2*p+2*m),f[2*p+2*m+1]+=y*ct,X(f,2*p+2*m+1),f[2*p+2*m+1]+=d*ae,X(f,2*p+2*m+1),f[2*p+2*m+2]+=y*ae,X(f,2*p+2*m+2)}for(p=0;p<u;p++)f[p]=f[2*p+1]<<16|f[2*p];for(p=u;p<2*u;p++)f[p]=0;return new l(f,0)};function X(v,u){for(;(v[u]&65535)!=v[u];)v[u+1]+=v[u]>>>16,v[u]&=65535,u++}function H(v,u){this.g=v,this.h=u}function Z(v,u){if(S(u))throw Error("division by zero");if(S(v))return new H(R,R);if(N(v))return u=Z(M(v),u),new H(M(u.g),M(u.h));if(N(u))return u=Z(v,M(u)),new H(M(u.g),u.h);if(30<v.g.length){if(N(v)||N(u))throw Error("slowDivide_ only works with positive integers.");for(var f=b,p=u;0>=p.l(v);)f=V(f),p=V(p);var m=x(f,1),y=x(p,1);for(p=x(p,2),f=x(f,2);!S(p);){var d=y.add(p);0>=d.l(v)&&(m=m.add(f),y=d),p=x(p,1),f=x(f,1)}return u=ee(v,m.j(u)),new H(m,u)}for(m=R;0<=v.l(u);){for(f=Math.max(1,Math.floor(v.m()/u.m())),p=Math.ceil(Math.log(f)/Math.LN2),p=48>=p?1:Math.pow(2,p-48),y=E(f),d=y.j(u);N(d)||0<d.l(v);)f-=p,y=E(f),d=y.j(u);S(y)&&(y=b),m=m.add(y),v=ee(v,d)}return new H(m,v)}i.A=function(v){return Z(this,v).h},i.and=function(v){for(var u=Math.max(this.g.length,v.g.length),f=[],p=0;p<u;p++)f[p]=this.i(p)&v.i(p);return new l(f,this.h&v.h)},i.or=function(v){for(var u=Math.max(this.g.length,v.g.length),f=[],p=0;p<u;p++)f[p]=this.i(p)|v.i(p);return new l(f,this.h|v.h)},i.xor=function(v){for(var u=Math.max(this.g.length,v.g.length),f=[],p=0;p<u;p++)f[p]=this.i(p)^v.i(p);return new l(f,this.h^v.h)};function V(v){for(var u=v.g.length+1,f=[],p=0;p<u;p++)f[p]=v.i(p)<<1|v.i(p-1)>>>31;return new l(f,v.h)}function x(v,u){var f=u>>5;u%=32;for(var p=v.g.length-f,m=[],y=0;y<p;y++)m[y]=0<u?v.i(y+f)>>>u|v.i(y+f+1)<<32-u:v.i(y+f);return new l(m,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=E,l.fromString=A,Hs=l}).apply(typeof es<"u"?es:typeof self<"u"?self:typeof window<"u"?window:{});var nn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(t,s,a){return t==Array.prototype||t==Object.prototype||(t[s]=a.value),t};function n(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof nn=="object"&&nn];for(var s=0;s<t.length;++s){var a=t[s];if(a&&a.Math==Math)return a}throw Error("Cannot find global object")}var r=n(this);function o(t,s){if(s)e:{var a=r;t=t.split(".");for(var h=0;h<t.length-1;h++){var _=t[h];if(!(_ in a))break e;a=a[_]}t=t[t.length-1],h=a[t],s=s(h),s!=h&&s!=null&&e(a,t,{configurable:!0,writable:!0,value:s})}}function c(t,s){t instanceof String&&(t+="");var a=0,h=!1,_={next:function(){if(!h&&a<t.length){var w=a++;return{value:s(w,t[w]),done:!1}}return h=!0,{done:!0,value:void 0}}};return _[Symbol.iterator]=function(){return _},_}o("Array.prototype.values",function(t){return t||function(){return c(this,function(s,a){return a})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},g=this||self;function I(t){var s=typeof t;return s=s!="object"?s:t?Array.isArray(t)?"array":s:"null",s=="array"||s=="object"&&typeof t.length=="number"}function E(t){var s=typeof t;return s=="object"&&t!=null||s=="function"}function A(t,s,a){return t.call.apply(t.bind,arguments)}function R(t,s,a){if(!t)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var _=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(_,h),t.apply(s,_)}}return function(){return t.apply(s,arguments)}}function b(t,s,a){return b=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?A:R,b.apply(null,arguments)}function P(t,s){var a=Array.prototype.slice.call(arguments,1);return function(){var h=a.slice();return h.push.apply(h,arguments),t.apply(this,h)}}function S(t,s){function a(){}a.prototype=s.prototype,t.aa=s.prototype,t.prototype=new a,t.prototype.constructor=t,t.Qb=function(h,_,w){for(var T=Array(arguments.length-2),L=2;L<arguments.length;L++)T[L-2]=arguments[L];return s.prototype[_].apply(h,T)}}function N(t){const s=t.length;if(0<s){const a=Array(s);for(let h=0;h<s;h++)a[h]=t[h];return a}return[]}function M(t,s){for(let a=1;a<arguments.length;a++){const h=arguments[a];if(I(h)){const _=t.length||0,w=h.length||0;t.length=_+w;for(let T=0;T<w;T++)t[_+T]=h[T]}else t.push(h)}}class ee{constructor(s,a){this.i=s,this.j=a,this.h=0,this.g=null}get(){let s;return 0<this.h?(this.h--,s=this.g,this.g=s.next,s.next=null):s=this.i(),s}}function X(t){return/^[\s\xa0]*$/.test(t)}function H(){var t=g.navigator;return t&&(t=t.userAgent)?t:""}function Z(t){return Z[" "](t),t}Z[" "]=function(){};var V=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function x(t,s,a){for(const h in t)s.call(a,t[h],h,t)}function v(t,s){for(const a in t)s.call(void 0,t[a],a,t)}function u(t){const s={};for(const a in t)s[a]=t[a];return s}const f="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function p(t,s){let a,h;for(let _=1;_<arguments.length;_++){h=arguments[_];for(a in h)t[a]=h[a];for(let w=0;w<f.length;w++)a=f[w],Object.prototype.hasOwnProperty.call(h,a)&&(t[a]=h[a])}}function m(t){var s=1;t=t.split(":");const a=[];for(;0<s&&t.length;)a.push(t.shift()),s--;return t.length&&a.push(t.join(":")),a}function y(t){g.setTimeout(()=>{throw t},0)}function d(){var t=An;let s=null;return t.g&&(s=t.g,t.g=t.g.next,t.g||(t.h=null),s.next=null),s}class ae{constructor(){this.h=this.g=null}add(s,a){const h=ct.get();h.set(s,a),this.h?this.h.next=h:this.g=h,this.h=h}}var ct=new ee(()=>new Co,t=>t.reset());class Co{constructor(){this.next=this.g=this.h=null}set(s,a){this.h=s,this.g=a,this.next=null}reset(){this.next=this.g=this.h=null}}let ht,lt=!1,An=new ae,Hi=()=>{const t=g.Promise.resolve(void 0);ht=()=>{t.then(Ro)}};var Ro=()=>{for(var t;t=d();){try{t.h.call(t.g)}catch(a){y(a)}var s=ct;s.j(t),100>s.h&&(s.h++,t.next=s.g,s.g=t)}lt=!1};function _e(){this.s=this.s,this.C=this.C}_e.prototype.s=!1,_e.prototype.ma=function(){this.s||(this.s=!0,this.N())},_e.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function z(t,s){this.type=t,this.g=this.target=s,this.defaultPrevented=!1}z.prototype.h=function(){this.defaultPrevented=!0};var Po=function(){if(!g.addEventListener||!Object.defineProperty)return!1;var t=!1,s=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const a=()=>{};g.addEventListener("test",a,s),g.removeEventListener("test",a,s)}catch{}return t}();function ut(t,s){if(z.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var a=this.type=t.type,h=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=s,s=t.relatedTarget){if(V){e:{try{Z(s.nodeName);var _=!0;break e}catch{}_=!1}_||(s=null)}}else a=="mouseover"?s=t.fromElement:a=="mouseout"&&(s=t.toElement);this.relatedTarget=s,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:ko[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ut.aa.h.call(this)}}S(ut,z);var ko={2:"touch",3:"pen",4:"mouse"};ut.prototype.h=function(){ut.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ft="closure_listenable_"+(1e6*Math.random()|0),Oo=0;function Do(t,s,a,h,_){this.listener=t,this.proxy=null,this.src=s,this.type=a,this.capture=!!h,this.ha=_,this.key=++Oo,this.da=this.fa=!1}function jt(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Bt(t){this.src=t,this.g={},this.h=0}Bt.prototype.add=function(t,s,a,h,_){var w=t.toString();t=this.g[w],t||(t=this.g[w]=[],this.h++);var T=bn(t,s,h,_);return-1<T?(s=t[T],a||(s.fa=!1)):(s=new Do(s,this.src,w,!!h,_),s.fa=a,t.push(s)),s};function Sn(t,s){var a=s.type;if(a in t.g){var h=t.g[a],_=Array.prototype.indexOf.call(h,s,void 0),w;(w=0<=_)&&Array.prototype.splice.call(h,_,1),w&&(jt(s),t.g[a].length==0&&(delete t.g[a],t.h--))}}function bn(t,s,a,h){for(var _=0;_<t.length;++_){var w=t[_];if(!w.da&&w.listener==s&&w.capture==!!a&&w.ha==h)return _}return-1}var Cn="closure_lm_"+(1e6*Math.random()|0),Rn={};function $i(t,s,a,h,_){if(Array.isArray(s)){for(var w=0;w<s.length;w++)$i(t,s[w],a,h,_);return null}return a=Gi(a),t&&t[Ft]?t.K(s,a,E(h)?!!h.capture:!!h,_):No(t,s,a,!1,h,_)}function No(t,s,a,h,_,w){if(!s)throw Error("Invalid event type");var T=E(_)?!!_.capture:!!_,L=kn(t);if(L||(t[Cn]=L=new Bt(t)),a=L.add(s,a,h,T,w),a.proxy)return a;if(h=Lo(),a.proxy=h,h.src=t,h.listener=a,t.addEventListener)Po||(_=T),_===void 0&&(_=!1),t.addEventListener(s.toString(),h,_);else if(t.attachEvent)t.attachEvent(Wi(s.toString()),h);else if(t.addListener&&t.removeListener)t.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return a}function Lo(){function t(a){return s.call(t.src,t.listener,a)}const s=Mo;return t}function zi(t,s,a,h,_){if(Array.isArray(s))for(var w=0;w<s.length;w++)zi(t,s[w],a,h,_);else h=E(h)?!!h.capture:!!h,a=Gi(a),t&&t[Ft]?(t=t.i,s=String(s).toString(),s in t.g&&(w=t.g[s],a=bn(w,a,h,_),-1<a&&(jt(w[a]),Array.prototype.splice.call(w,a,1),w.length==0&&(delete t.g[s],t.h--)))):t&&(t=kn(t))&&(s=t.g[s.toString()],t=-1,s&&(t=bn(s,a,h,_)),(a=-1<t?s[t]:null)&&Pn(a))}function Pn(t){if(typeof t!="number"&&t&&!t.da){var s=t.src;if(s&&s[Ft])Sn(s.i,t);else{var a=t.type,h=t.proxy;s.removeEventListener?s.removeEventListener(a,h,t.capture):s.detachEvent?s.detachEvent(Wi(a),h):s.addListener&&s.removeListener&&s.removeListener(h),(a=kn(s))?(Sn(a,t),a.h==0&&(a.src=null,s[Cn]=null)):jt(t)}}}function Wi(t){return t in Rn?Rn[t]:Rn[t]="on"+t}function Mo(t,s){if(t.da)t=!0;else{s=new ut(s,this);var a=t.listener,h=t.ha||t.src;t.fa&&Pn(t),t=a.call(h,s)}return t}function kn(t){return t=t[Cn],t instanceof Bt?t:null}var On="__closure_events_fn_"+(1e9*Math.random()>>>0);function Gi(t){return typeof t=="function"?t:(t[On]||(t[On]=function(s){return t.handleEvent(s)}),t[On])}function W(){_e.call(this),this.i=new Bt(this),this.M=this,this.F=null}S(W,_e),W.prototype[Ft]=!0,W.prototype.removeEventListener=function(t,s,a,h){zi(this,t,s,a,h)};function Y(t,s){var a,h=t.F;if(h)for(a=[];h;h=h.F)a.push(h);if(t=t.M,h=s.type||s,typeof s=="string")s=new z(s,t);else if(s instanceof z)s.target=s.target||t;else{var _=s;s=new z(h,t),p(s,_)}if(_=!0,a)for(var w=a.length-1;0<=w;w--){var T=s.g=a[w];_=Vt(T,h,!0,s)&&_}if(T=s.g=t,_=Vt(T,h,!0,s)&&_,_=Vt(T,h,!1,s)&&_,a)for(w=0;w<a.length;w++)T=s.g=a[w],_=Vt(T,h,!1,s)&&_}W.prototype.N=function(){if(W.aa.N.call(this),this.i){var t=this.i,s;for(s in t.g){for(var a=t.g[s],h=0;h<a.length;h++)jt(a[h]);delete t.g[s],t.h--}}this.F=null},W.prototype.K=function(t,s,a,h){return this.i.add(String(t),s,!1,a,h)},W.prototype.L=function(t,s,a,h){return this.i.add(String(t),s,!0,a,h)};function Vt(t,s,a,h){if(s=t.i.g[String(s)],!s)return!0;s=s.concat();for(var _=!0,w=0;w<s.length;++w){var T=s[w];if(T&&!T.da&&T.capture==a){var L=T.listener,$=T.ha||T.src;T.fa&&Sn(t.i,T),_=L.call($,h)!==!1&&_}}return _&&!h.defaultPrevented}function qi(t,s,a){if(typeof t=="function")a&&(t=b(t,a));else if(t&&typeof t.handleEvent=="function")t=b(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(s)?-1:g.setTimeout(t,s||0)}function Ki(t){t.g=qi(()=>{t.g=null,t.i&&(t.i=!1,Ki(t))},t.l);const s=t.h;t.h=null,t.m.apply(null,s)}class Uo extends _e{constructor(s,a){super(),this.m=s,this.l=a,this.h=null,this.i=!1,this.g=null}j(s){this.h=arguments,this.g?this.i=!0:Ki(this)}N(){super.N(),this.g&&(g.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function dt(t){_e.call(this),this.h=t,this.g={}}S(dt,_e);var Ji=[];function Xi(t){x(t.g,function(s,a){this.g.hasOwnProperty(a)&&Pn(s)},t),t.g={}}dt.prototype.N=function(){dt.aa.N.call(this),Xi(this)},dt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Dn=g.JSON.stringify,xo=g.JSON.parse,Fo=class{stringify(t){return g.JSON.stringify(t,void 0)}parse(t){return g.JSON.parse(t,void 0)}};function Nn(){}Nn.prototype.h=null;function Yi(t){return t.h||(t.h=t.i())}function jo(){}var ft={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ln(){z.call(this,"d")}S(Ln,z);function Mn(){z.call(this,"c")}S(Mn,z);var ze={},Qi=null;function Un(){return Qi=Qi||new W}ze.La="serverreachability";function Zi(t){z.call(this,ze.La,t)}S(Zi,z);function pt(t){const s=Un();Y(s,new Zi(s))}ze.STAT_EVENT="statevent";function er(t,s){z.call(this,ze.STAT_EVENT,t),this.stat=s}S(er,z);function Q(t){const s=Un();Y(s,new er(s,t))}ze.Ma="timingevent";function tr(t,s){z.call(this,ze.Ma,t),this.size=s}S(tr,z);function gt(t,s){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return g.setTimeout(function(){t()},s)}function mt(){this.g=!0}mt.prototype.xa=function(){this.g=!1};function Bo(t,s,a,h,_,w){t.info(function(){if(t.g)if(w)for(var T="",L=w.split("&"),$=0;$<L.length;$++){var O=L[$].split("=");if(1<O.length){var G=O[0];O=O[1];var q=G.split("_");T=2<=q.length&&q[1]=="type"?T+(G+"="+O+"&"):T+(G+"=redacted&")}}else T=null;else T=w;return"XMLHTTP REQ ("+h+") [attempt "+_+"]: "+s+`
`+a+`
`+T})}function Vo(t,s,a,h,_,w,T){t.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+_+"]: "+s+`
`+a+`
`+w+" "+T})}function We(t,s,a,h){t.info(function(){return"XMLHTTP TEXT ("+s+"): "+$o(t,a)+(h?" "+h:"")})}function Ho(t,s){t.info(function(){return"TIMEOUT: "+s})}mt.prototype.info=function(){};function $o(t,s){if(!t.g)return s;if(!s)return null;try{var a=JSON.parse(s);if(a){for(t=0;t<a.length;t++)if(Array.isArray(a[t])){var h=a[t];if(!(2>h.length)){var _=h[1];if(Array.isArray(_)&&!(1>_.length)){var w=_[0];if(w!="noop"&&w!="stop"&&w!="close")for(var T=1;T<_.length;T++)_[T]=""}}}}return Dn(a)}catch{return s}}var xn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},zo={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Fn;function Ht(){}S(Ht,Nn),Ht.prototype.g=function(){return new XMLHttpRequest},Ht.prototype.i=function(){return{}},Fn=new Ht;function ye(t,s,a,h){this.j=t,this.i=s,this.l=a,this.R=h||1,this.U=new dt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new nr}function nr(){this.i=null,this.g="",this.h=!1}var ir={},jn={};function Bn(t,s,a){t.L=1,t.v=Gt(le(s)),t.m=a,t.P=!0,rr(t,null)}function rr(t,s){t.F=Date.now(),$t(t),t.A=le(t.v);var a=t.A,h=t.R;Array.isArray(h)||(h=[String(h)]),_r(a.i,"t",h),t.C=0,a=t.j.J,t.h=new nr,t.g=Ur(t.j,a?s:null,!t.m),0<t.O&&(t.M=new Uo(b(t.Y,t,t.g),t.O)),s=t.U,a=t.g,h=t.ca;var _="readystatechange";Array.isArray(_)||(_&&(Ji[0]=_.toString()),_=Ji);for(var w=0;w<_.length;w++){var T=$i(a,_[w],h||s.handleEvent,!1,s.h||s);if(!T)break;s.g[T.key]=T}s=t.H?u(t.H):{},t.m?(t.u||(t.u="POST"),s["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,s)):(t.u="GET",t.g.ea(t.A,t.u,null,s)),pt(),Bo(t.i,t.u,t.A,t.l,t.R,t.m)}ye.prototype.ca=function(t){t=t.target;const s=this.M;s&&ue(t)==3?s.j():this.Y(t)},ye.prototype.Y=function(t){try{if(t==this.g)e:{const q=ue(this.g);var s=this.g.Ba();const Ke=this.g.Z();if(!(3>q)&&(q!=3||this.g&&(this.h.h||this.g.oa()||Sr(this.g)))){this.J||q!=4||s==7||(s==8||0>=Ke?pt(3):pt(2)),Vn(this);var a=this.g.Z();this.X=a;t:if(sr(this)){var h=Sr(this.g);t="";var _=h.length,w=ue(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ne(this),vt(this);var T="";break t}this.h.i=new g.TextDecoder}for(s=0;s<_;s++)this.h.h=!0,t+=this.h.i.decode(h[s],{stream:!(w&&s==_-1)});h.length=0,this.h.g+=t,this.C=0,T=this.h.g}else T=this.g.oa();if(this.o=a==200,Vo(this.i,this.u,this.A,this.l,this.R,q,a),this.o){if(this.T&&!this.K){t:{if(this.g){var L,$=this.g;if((L=$.g?$.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!X(L)){var O=L;break t}}O=null}if(a=O)We(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Hn(this,a);else{this.o=!1,this.s=3,Q(12),Ne(this),vt(this);break e}}if(this.P){a=!0;let se;for(;!this.J&&this.C<T.length;)if(se=Wo(this,T),se==jn){q==4&&(this.s=4,Q(14),a=!1),We(this.i,this.l,null,"[Incomplete Response]");break}else if(se==ir){this.s=4,Q(15),We(this.i,this.l,T,"[Invalid Chunk]"),a=!1;break}else We(this.i,this.l,se,null),Hn(this,se);if(sr(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),q!=4||T.length!=0||this.h.h||(this.s=1,Q(16),a=!1),this.o=this.o&&a,!a)We(this.i,this.l,T,"[Invalid Chunked Response]"),Ne(this),vt(this);else if(0<T.length&&!this.W){this.W=!0;var G=this.j;G.g==this&&G.ba&&!G.M&&(G.j.info("Great, no buffering proxy detected. Bytes received: "+T.length),Kn(G),G.M=!0,Q(11))}}else We(this.i,this.l,T,null),Hn(this,T);q==4&&Ne(this),this.o&&!this.J&&(q==4?Dr(this.j,this):(this.o=!1,$t(this)))}else ca(this.g),a==400&&0<T.indexOf("Unknown SID")?(this.s=3,Q(12)):(this.s=0,Q(13)),Ne(this),vt(this)}}}catch{}finally{}};function sr(t){return t.g?t.u=="GET"&&t.L!=2&&t.j.Ca:!1}function Wo(t,s){var a=t.C,h=s.indexOf(`
`,a);return h==-1?jn:(a=Number(s.substring(a,h)),isNaN(a)?ir:(h+=1,h+a>s.length?jn:(s=s.slice(h,h+a),t.C=h+a,s)))}ye.prototype.cancel=function(){this.J=!0,Ne(this)};function $t(t){t.S=Date.now()+t.I,or(t,t.I)}function or(t,s){if(t.B!=null)throw Error("WatchDog timer not null");t.B=gt(b(t.ba,t),s)}function Vn(t){t.B&&(g.clearTimeout(t.B),t.B=null)}ye.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(Ho(this.i,this.A),this.L!=2&&(pt(),Q(17)),Ne(this),this.s=2,vt(this)):or(this,this.S-t)};function vt(t){t.j.G==0||t.J||Dr(t.j,t)}function Ne(t){Vn(t);var s=t.M;s&&typeof s.ma=="function"&&s.ma(),t.M=null,Xi(t.U),t.g&&(s=t.g,t.g=null,s.abort(),s.ma())}function Hn(t,s){try{var a=t.j;if(a.G!=0&&(a.g==t||$n(a.h,t))){if(!t.K&&$n(a.h,t)&&a.G==3){try{var h=a.Da.g.parse(s)}catch{h=null}if(Array.isArray(h)&&h.length==3){var _=h;if(_[0]==0){e:if(!a.u){if(a.g)if(a.g.F+3e3<t.F)Qt(a),Xt(a);else break e;qn(a),Q(18)}}else a.za=_[1],0<a.za-a.T&&37500>_[2]&&a.F&&a.v==0&&!a.C&&(a.C=gt(b(a.Za,a),6e3));if(1>=hr(a.h)&&a.ca){try{a.ca()}catch{}a.ca=void 0}}else Me(a,11)}else if((t.K||a.g==t)&&Qt(a),!X(s))for(_=a.Da.g.parse(s),s=0;s<_.length;s++){let O=_[s];if(a.T=O[0],O=O[1],a.G==2)if(O[0]=="c"){a.K=O[1],a.ia=O[2];const G=O[3];G!=null&&(a.la=G,a.j.info("VER="+a.la));const q=O[4];q!=null&&(a.Aa=q,a.j.info("SVER="+a.Aa));const Ke=O[5];Ke!=null&&typeof Ke=="number"&&0<Ke&&(h=1.5*Ke,a.L=h,a.j.info("backChannelRequestTimeoutMs_="+h)),h=a;const se=t.g;if(se){const Zt=se.g?se.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Zt){var w=h.h;w.g||Zt.indexOf("spdy")==-1&&Zt.indexOf("quic")==-1&&Zt.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(zn(w,w.h),w.h=null))}if(h.D){const Jn=se.g?se.g.getResponseHeader("X-HTTP-Session-Id"):null;Jn&&(h.ya=Jn,U(h.I,h.D,Jn))}}a.G=3,a.l&&a.l.ua(),a.ba&&(a.R=Date.now()-t.F,a.j.info("Handshake RTT: "+a.R+"ms")),h=a;var T=t;if(h.qa=Mr(h,h.J?h.ia:null,h.W),T.K){lr(h.h,T);var L=T,$=h.L;$&&(L.I=$),L.B&&(Vn(L),$t(L)),h.g=T}else kr(h);0<a.i.length&&Yt(a)}else O[0]!="stop"&&O[0]!="close"||Me(a,7);else a.G==3&&(O[0]=="stop"||O[0]=="close"?O[0]=="stop"?Me(a,7):Gn(a):O[0]!="noop"&&a.l&&a.l.ta(O),a.v=0)}}pt(4)}catch{}}var Go=class{constructor(t,s){this.g=t,this.map=s}};function ar(t){this.l=t||10,g.PerformanceNavigationTiming?(t=g.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(g.chrome&&g.chrome.loadTimes&&g.chrome.loadTimes()&&g.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function cr(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function hr(t){return t.h?1:t.g?t.g.size:0}function $n(t,s){return t.h?t.h==s:t.g?t.g.has(s):!1}function zn(t,s){t.g?t.g.add(s):t.h=s}function lr(t,s){t.h&&t.h==s?t.h=null:t.g&&t.g.has(s)&&t.g.delete(s)}ar.prototype.cancel=function(){if(this.i=ur(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function ur(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let s=t.i;for(const a of t.g.values())s=s.concat(a.D);return s}return N(t.i)}function qo(t){if(t.V&&typeof t.V=="function")return t.V();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(I(t)){for(var s=[],a=t.length,h=0;h<a;h++)s.push(t[h]);return s}s=[],a=0;for(h in t)s[a++]=t[h];return s}function Ko(t){if(t.na&&typeof t.na=="function")return t.na();if(!t.V||typeof t.V!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(I(t)||typeof t=="string"){var s=[];t=t.length;for(var a=0;a<t;a++)s.push(a);return s}s=[],a=0;for(const h in t)s[a++]=h;return s}}}function dr(t,s){if(t.forEach&&typeof t.forEach=="function")t.forEach(s,void 0);else if(I(t)||typeof t=="string")Array.prototype.forEach.call(t,s,void 0);else for(var a=Ko(t),h=qo(t),_=h.length,w=0;w<_;w++)s.call(void 0,h[w],a&&a[w],t)}var fr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Jo(t,s){if(t){t=t.split("&");for(var a=0;a<t.length;a++){var h=t[a].indexOf("="),_=null;if(0<=h){var w=t[a].substring(0,h);_=t[a].substring(h+1)}else w=t[a];s(w,_?decodeURIComponent(_.replace(/\+/g," ")):"")}}}function Le(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof Le){this.h=t.h,zt(this,t.j),this.o=t.o,this.g=t.g,Wt(this,t.s),this.l=t.l;var s=t.i,a=new It;a.i=s.i,s.g&&(a.g=new Map(s.g),a.h=s.h),pr(this,a),this.m=t.m}else t&&(s=String(t).match(fr))?(this.h=!1,zt(this,s[1]||"",!0),this.o=_t(s[2]||""),this.g=_t(s[3]||"",!0),Wt(this,s[4]),this.l=_t(s[5]||"",!0),pr(this,s[6]||"",!0),this.m=_t(s[7]||"")):(this.h=!1,this.i=new It(null,this.h))}Le.prototype.toString=function(){var t=[],s=this.j;s&&t.push(yt(s,gr,!0),":");var a=this.g;return(a||s=="file")&&(t.push("//"),(s=this.o)&&t.push(yt(s,gr,!0),"@"),t.push(encodeURIComponent(String(a)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a=this.s,a!=null&&t.push(":",String(a))),(a=this.l)&&(this.g&&a.charAt(0)!="/"&&t.push("/"),t.push(yt(a,a.charAt(0)=="/"?Qo:Yo,!0))),(a=this.i.toString())&&t.push("?",a),(a=this.m)&&t.push("#",yt(a,ea)),t.join("")};function le(t){return new Le(t)}function zt(t,s,a){t.j=a?_t(s,!0):s,t.j&&(t.j=t.j.replace(/:$/,""))}function Wt(t,s){if(s){if(s=Number(s),isNaN(s)||0>s)throw Error("Bad port number "+s);t.s=s}else t.s=null}function pr(t,s,a){s instanceof It?(t.i=s,ta(t.i,t.h)):(a||(s=yt(s,Zo)),t.i=new It(s,t.h))}function U(t,s,a){t.i.set(s,a)}function Gt(t){return U(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function _t(t,s){return t?s?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function yt(t,s,a){return typeof t=="string"?(t=encodeURI(t).replace(s,Xo),a&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Xo(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var gr=/[#\/\?@]/g,Yo=/[#\?:]/g,Qo=/[#\?]/g,Zo=/[#\?@]/g,ea=/#/g;function It(t,s){this.h=this.g=null,this.i=t||null,this.j=!!s}function Ie(t){t.g||(t.g=new Map,t.h=0,t.i&&Jo(t.i,function(s,a){t.add(decodeURIComponent(s.replace(/\+/g," ")),a)}))}i=It.prototype,i.add=function(t,s){Ie(this),this.i=null,t=Ge(this,t);var a=this.g.get(t);return a||this.g.set(t,a=[]),a.push(s),this.h+=1,this};function mr(t,s){Ie(t),s=Ge(t,s),t.g.has(s)&&(t.i=null,t.h-=t.g.get(s).length,t.g.delete(s))}function vr(t,s){return Ie(t),s=Ge(t,s),t.g.has(s)}i.forEach=function(t,s){Ie(this),this.g.forEach(function(a,h){a.forEach(function(_){t.call(s,_,h,this)},this)},this)},i.na=function(){Ie(this);const t=Array.from(this.g.values()),s=Array.from(this.g.keys()),a=[];for(let h=0;h<s.length;h++){const _=t[h];for(let w=0;w<_.length;w++)a.push(s[h])}return a},i.V=function(t){Ie(this);let s=[];if(typeof t=="string")vr(this,t)&&(s=s.concat(this.g.get(Ge(this,t))));else{t=Array.from(this.g.values());for(let a=0;a<t.length;a++)s=s.concat(t[a])}return s},i.set=function(t,s){return Ie(this),this.i=null,t=Ge(this,t),vr(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[s]),this.h+=1,this},i.get=function(t,s){return t?(t=this.V(t),0<t.length?String(t[0]):s):s};function _r(t,s,a){mr(t,s),0<a.length&&(t.i=null,t.g.set(Ge(t,s),N(a)),t.h+=a.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],s=Array.from(this.g.keys());for(var a=0;a<s.length;a++){var h=s[a];const w=encodeURIComponent(String(h)),T=this.V(h);for(h=0;h<T.length;h++){var _=w;T[h]!==""&&(_+="="+encodeURIComponent(String(T[h]))),t.push(_)}}return this.i=t.join("&")};function Ge(t,s){return s=String(s),t.j&&(s=s.toLowerCase()),s}function ta(t,s){s&&!t.j&&(Ie(t),t.i=null,t.g.forEach(function(a,h){var _=h.toLowerCase();h!=_&&(mr(this,h),_r(this,_,a))},t)),t.j=s}function na(t,s){const a=new mt;if(g.Image){const h=new Image;h.onload=P(we,a,"TestLoadImage: loaded",!0,s,h),h.onerror=P(we,a,"TestLoadImage: error",!1,s,h),h.onabort=P(we,a,"TestLoadImage: abort",!1,s,h),h.ontimeout=P(we,a,"TestLoadImage: timeout",!1,s,h),g.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=t}else s(!1)}function ia(t,s){const a=new mt,h=new AbortController,_=setTimeout(()=>{h.abort(),we(a,"TestPingServer: timeout",!1,s)},1e4);fetch(t,{signal:h.signal}).then(w=>{clearTimeout(_),w.ok?we(a,"TestPingServer: ok",!0,s):we(a,"TestPingServer: server error",!1,s)}).catch(()=>{clearTimeout(_),we(a,"TestPingServer: error",!1,s)})}function we(t,s,a,h,_){try{_&&(_.onload=null,_.onerror=null,_.onabort=null,_.ontimeout=null),h(a)}catch{}}function ra(){this.g=new Fo}function sa(t,s,a){const h=a||"";try{dr(t,function(_,w){let T=_;E(_)&&(T=Dn(_)),s.push(h+w+"="+encodeURIComponent(T))})}catch(_){throw s.push(h+"type="+encodeURIComponent("_badmap")),_}}function qt(t){this.l=t.Ub||null,this.j=t.eb||!1}S(qt,Nn),qt.prototype.g=function(){return new Kt(this.l,this.j)},qt.prototype.i=function(t){return function(){return t}}({});function Kt(t,s){W.call(this),this.D=t,this.o=s,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(Kt,W),i=Kt.prototype,i.open=function(t,s){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=s,this.readyState=1,Et(this)},i.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const s={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(s.body=t),(this.D||g).fetch(new Request(this.A,s)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,wt(this)),this.readyState=0},i.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Et(this)),this.g&&(this.readyState=3,Et(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof g.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;yr(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))};function yr(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}i.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var s=t.value?t.value:new Uint8Array(0);(s=this.v.decode(s,{stream:!t.done}))&&(this.response=this.responseText+=s)}t.done?wt(this):Et(this),this.readyState==3&&yr(this)}},i.Ra=function(t){this.g&&(this.response=this.responseText=t,wt(this))},i.Qa=function(t){this.g&&(this.response=t,wt(this))},i.ga=function(){this.g&&wt(this)};function wt(t){t.readyState=4,t.l=null,t.j=null,t.v=null,Et(t)}i.setRequestHeader=function(t,s){this.u.append(t,s)},i.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],s=this.h.entries();for(var a=s.next();!a.done;)a=a.value,t.push(a[0]+": "+a[1]),a=s.next();return t.join(`\r
`)};function Et(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Kt.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});function Ir(t){let s="";return x(t,function(a,h){s+=h,s+=":",s+=a,s+=`\r
`}),s}function Wn(t,s,a){e:{for(h in a){var h=!1;break e}h=!0}h||(a=Ir(a),typeof t=="string"?a!=null&&encodeURIComponent(String(a)):U(t,s,a))}function F(t){W.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(F,W);var oa=/^https?$/i,aa=["POST","PUT"];i=F.prototype,i.Ha=function(t){this.J=t},i.ea=function(t,s,a,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);s=s?s.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Fn.g(),this.v=this.o?Yi(this.o):Yi(Fn),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(s,String(t),!0),this.B=!1}catch(w){wr(this,w);return}if(t=a||"",a=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var _ in h)a.set(_,h[_]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const w of h.keys())a.set(w,h.get(w));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(a.keys()).find(w=>w.toLowerCase()=="content-type"),_=g.FormData&&t instanceof g.FormData,!(0<=Array.prototype.indexOf.call(aa,s,void 0))||h||_||a.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,T]of a)this.g.setRequestHeader(w,T);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ar(this),this.u=!0,this.g.send(t),this.u=!1}catch(w){wr(this,w)}};function wr(t,s){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=s,t.m=5,Er(t),Jt(t)}function Er(t){t.A||(t.A=!0,Y(t,"complete"),Y(t,"error"))}i.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,Y(this,"complete"),Y(this,"abort"),Jt(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Jt(this,!0)),F.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Tr(this):this.bb())},i.bb=function(){Tr(this)};function Tr(t){if(t.h&&typeof l<"u"&&(!t.v[1]||ue(t)!=4||t.Z()!=2)){if(t.u&&ue(t)==4)qi(t.Ea,0,t);else if(Y(t,"readystatechange"),ue(t)==4){t.h=!1;try{const T=t.Z();e:switch(T){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var s=!0;break e;default:s=!1}var a;if(!(a=s)){var h;if(h=T===0){var _=String(t.D).match(fr)[1]||null;!_&&g.self&&g.self.location&&(_=g.self.location.protocol.slice(0,-1)),h=!oa.test(_?_.toLowerCase():"")}a=h}if(a)Y(t,"complete"),Y(t,"success");else{t.m=6;try{var w=2<ue(t)?t.g.statusText:""}catch{w=""}t.l=w+" ["+t.Z()+"]",Er(t)}}finally{Jt(t)}}}}function Jt(t,s){if(t.g){Ar(t);const a=t.g,h=t.v[0]?()=>{}:null;t.g=null,t.v=null,s||Y(t,"ready");try{a.onreadystatechange=h}catch{}}}function Ar(t){t.I&&(g.clearTimeout(t.I),t.I=null)}i.isActive=function(){return!!this.g};function ue(t){return t.g?t.g.readyState:0}i.Z=function(){try{return 2<ue(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(t){if(this.g){var s=this.g.responseText;return t&&s.indexOf(t)==0&&(s=s.substring(t.length)),xo(s)}};function Sr(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function ca(t){const s={};t=(t.g&&2<=ue(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<t.length;h++){if(X(t[h]))continue;var a=m(t[h]);const _=a[0];if(a=a[1],typeof a!="string")continue;a=a.trim();const w=s[_]||[];s[_]=w,w.push(a)}v(s,function(h){return h.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Tt(t,s,a){return a&&a.internalChannelParams&&a.internalChannelParams[t]||s}function br(t){this.Aa=0,this.i=[],this.j=new mt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Tt("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Tt("baseRetryDelayMs",5e3,t),this.cb=Tt("retryDelaySeedMs",1e4,t),this.Wa=Tt("forwardChannelMaxRetries",2,t),this.wa=Tt("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new ar(t&&t.concurrentRequestLimit),this.Da=new ra,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=br.prototype,i.la=8,i.G=1,i.connect=function(t,s,a,h){Q(0),this.W=t,this.H=s||{},a&&h!==void 0&&(this.H.OSID=a,this.H.OAID=h),this.F=this.X,this.I=Mr(this,null,this.W),Yt(this)};function Gn(t){if(Cr(t),t.G==3){var s=t.U++,a=le(t.I);if(U(a,"SID",t.K),U(a,"RID",s),U(a,"TYPE","terminate"),At(t,a),s=new ye(t,t.j,s),s.L=2,s.v=Gt(le(a)),a=!1,g.navigator&&g.navigator.sendBeacon)try{a=g.navigator.sendBeacon(s.v.toString(),"")}catch{}!a&&g.Image&&(new Image().src=s.v,a=!0),a||(s.g=Ur(s.j,null),s.g.ea(s.v)),s.F=Date.now(),$t(s)}Lr(t)}function Xt(t){t.g&&(Kn(t),t.g.cancel(),t.g=null)}function Cr(t){Xt(t),t.u&&(g.clearTimeout(t.u),t.u=null),Qt(t),t.h.cancel(),t.s&&(typeof t.s=="number"&&g.clearTimeout(t.s),t.s=null)}function Yt(t){if(!cr(t.h)&&!t.s){t.s=!0;var s=t.Ga;ht||Hi(),lt||(ht(),lt=!0),An.add(s,t),t.B=0}}function ha(t,s){return hr(t.h)>=t.h.j-(t.s?1:0)?!1:t.s?(t.i=s.D.concat(t.i),!0):t.G==1||t.G==2||t.B>=(t.Va?0:t.Wa)?!1:(t.s=gt(b(t.Ga,t,s),Nr(t,t.B)),t.B++,!0)}i.Ga=function(t){if(this.s)if(this.s=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const _=new ye(this,this.j,t);let w=this.o;if(this.S&&(w?(w=u(w),p(w,this.S)):w=this.S),this.m!==null||this.O||(_.H=w,w=null),this.P)e:{for(var s=0,a=0;a<this.i.length;a++){t:{var h=this.i[a];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break t}h=void 0}if(h===void 0)break;if(s+=h,4096<s){s=a;break e}if(s===4096||a===this.i.length-1){s=a+1;break e}}s=1e3}else s=1e3;s=Pr(this,_,s),a=le(this.I),U(a,"RID",t),U(a,"CVER",22),this.D&&U(a,"X-HTTP-Session-Id",this.D),At(this,a),w&&(this.O?s="headers="+encodeURIComponent(String(Ir(w)))+"&"+s:this.m&&Wn(a,this.m,w)),zn(this.h,_),this.Ua&&U(a,"TYPE","init"),this.P?(U(a,"$req",s),U(a,"SID","null"),_.T=!0,Bn(_,a,null)):Bn(_,a,s),this.G=2}}else this.G==3&&(t?Rr(this,t):this.i.length==0||cr(this.h)||Rr(this))};function Rr(t,s){var a;s?a=s.l:a=t.U++;const h=le(t.I);U(h,"SID",t.K),U(h,"RID",a),U(h,"AID",t.T),At(t,h),t.m&&t.o&&Wn(h,t.m,t.o),a=new ye(t,t.j,a,t.B+1),t.m===null&&(a.H=t.o),s&&(t.i=s.D.concat(t.i)),s=Pr(t,a,1e3),a.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),zn(t.h,a),Bn(a,h,s)}function At(t,s){t.H&&x(t.H,function(a,h){U(s,h,a)}),t.l&&dr({},function(a,h){U(s,h,a)})}function Pr(t,s,a){a=Math.min(t.i.length,a);var h=t.l?b(t.l.Na,t.l,t):null;e:{var _=t.i;let w=-1;for(;;){const T=["count="+a];w==-1?0<a?(w=_[0].g,T.push("ofs="+w)):w=0:T.push("ofs="+w);let L=!0;for(let $=0;$<a;$++){let O=_[$].g;const G=_[$].map;if(O-=w,0>O)w=Math.max(0,_[$].g-100),L=!1;else try{sa(G,T,"req"+O+"_")}catch{h&&h(G)}}if(L){h=T.join("&");break e}}}return t=t.i.splice(0,a),s.D=t,h}function kr(t){if(!t.g&&!t.u){t.Y=1;var s=t.Fa;ht||Hi(),lt||(ht(),lt=!0),An.add(s,t),t.v=0}}function qn(t){return t.g||t.u||3<=t.v?!1:(t.Y++,t.u=gt(b(t.Fa,t),Nr(t,t.v)),t.v++,!0)}i.Fa=function(){if(this.u=null,Or(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=gt(b(this.ab,this),t)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Q(10),Xt(this),Or(this))};function Kn(t){t.A!=null&&(g.clearTimeout(t.A),t.A=null)}function Or(t){t.g=new ye(t,t.j,"rpc",t.Y),t.m===null&&(t.g.H=t.o),t.g.O=0;var s=le(t.qa);U(s,"RID","rpc"),U(s,"SID",t.K),U(s,"AID",t.T),U(s,"CI",t.F?"0":"1"),!t.F&&t.ja&&U(s,"TO",t.ja),U(s,"TYPE","xmlhttp"),At(t,s),t.m&&t.o&&Wn(s,t.m,t.o),t.L&&(t.g.I=t.L);var a=t.g;t=t.ia,a.L=1,a.v=Gt(le(s)),a.m=null,a.P=!0,rr(a,t)}i.Za=function(){this.C!=null&&(this.C=null,Xt(this),qn(this),Q(19))};function Qt(t){t.C!=null&&(g.clearTimeout(t.C),t.C=null)}function Dr(t,s){var a=null;if(t.g==s){Qt(t),Kn(t),t.g=null;var h=2}else if($n(t.h,s))a=s.D,lr(t.h,s),h=1;else return;if(t.G!=0){if(s.o)if(h==1){a=s.m?s.m.length:0,s=Date.now()-s.F;var _=t.B;h=Un(),Y(h,new tr(h,a)),Yt(t)}else kr(t);else if(_=s.s,_==3||_==0&&0<s.X||!(h==1&&ha(t,s)||h==2&&qn(t)))switch(a&&0<a.length&&(s=t.h,s.i=s.i.concat(a)),_){case 1:Me(t,5);break;case 4:Me(t,10);break;case 3:Me(t,6);break;default:Me(t,2)}}}function Nr(t,s){let a=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(a*=2),a*s}function Me(t,s){if(t.j.info("Error code "+s),s==2){var a=b(t.fb,t),h=t.Xa;const _=!h;h=new Le(h||"//www.google.com/images/cleardot.gif"),g.location&&g.location.protocol=="http"||zt(h,"https"),Gt(h),_?na(h.toString(),a):ia(h.toString(),a)}else Q(2);t.G=0,t.l&&t.l.sa(s),Lr(t),Cr(t)}i.fb=function(t){t?(this.j.info("Successfully pinged google.com"),Q(2)):(this.j.info("Failed to ping google.com"),Q(1))};function Lr(t){if(t.G=0,t.ka=[],t.l){const s=ur(t.h);(s.length!=0||t.i.length!=0)&&(M(t.ka,s),M(t.ka,t.i),t.h.i.length=0,N(t.i),t.i.length=0),t.l.ra()}}function Mr(t,s,a){var h=a instanceof Le?le(a):new Le(a);if(h.g!="")s&&(h.g=s+"."+h.g),Wt(h,h.s);else{var _=g.location;h=_.protocol,s=s?s+"."+_.hostname:_.hostname,_=+_.port;var w=new Le(null);h&&zt(w,h),s&&(w.g=s),_&&Wt(w,_),a&&(w.l=a),h=w}return a=t.D,s=t.ya,a&&s&&U(h,a,s),U(h,"VER",t.la),At(t,h),h}function Ur(t,s,a){if(s&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return s=t.Ca&&!t.pa?new F(new qt({eb:a})):new F(t.pa),s.Ha(t.J),s}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function xr(){}i=xr.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function ne(t,s){W.call(this),this.g=new br(s),this.l=t,this.h=s&&s.messageUrlParams||null,t=s&&s.messageHeaders||null,s&&s.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=s&&s.initMessageHeaders||null,s&&s.messageContentType&&(t?t["X-WebChannel-Content-Type"]=s.messageContentType:t={"X-WebChannel-Content-Type":s.messageContentType}),s&&s.va&&(t?t["X-WebChannel-Client-Profile"]=s.va:t={"X-WebChannel-Client-Profile":s.va}),this.g.S=t,(t=s&&s.Sb)&&!X(t)&&(this.g.m=t),this.v=s&&s.supportsCrossDomainXhr||!1,this.u=s&&s.sendRawJson||!1,(s=s&&s.httpSessionIdParam)&&!X(s)&&(this.g.D=s,t=this.h,t!==null&&s in t&&(t=this.h,s in t&&delete t[s])),this.j=new qe(this)}S(ne,W),ne.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ne.prototype.close=function(){Gn(this.g)},ne.prototype.o=function(t){var s=this.g;if(typeof t=="string"){var a={};a.__data__=t,t=a}else this.u&&(a={},a.__data__=Dn(t),t=a);s.i.push(new Go(s.Ya++,t)),s.G==3&&Yt(s)},ne.prototype.N=function(){this.g.l=null,delete this.j,Gn(this.g),delete this.g,ne.aa.N.call(this)};function Fr(t){Ln.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var s=t.__sm__;if(s){e:{for(const a in s){t=a;break e}t=void 0}(this.i=t)&&(t=this.i,s=s!==null&&t in s?s[t]:void 0),this.data=s}else this.data=t}S(Fr,Ln);function jr(){Mn.call(this),this.status=1}S(jr,Mn);function qe(t){this.g=t}S(qe,xr),qe.prototype.ua=function(){Y(this.g,"a")},qe.prototype.ta=function(t){Y(this.g,new Fr(t))},qe.prototype.sa=function(t){Y(this.g,new jr)},qe.prototype.ra=function(){Y(this.g,"b")},ne.prototype.send=ne.prototype.o,ne.prototype.open=ne.prototype.m,ne.prototype.close=ne.prototype.close,xn.NO_ERROR=0,xn.TIMEOUT=8,xn.HTTP_ERROR=6,zo.COMPLETE="complete",jo.EventType=ft,ft.OPEN="a",ft.CLOSE="b",ft.ERROR="c",ft.MESSAGE="d",W.prototype.listen=W.prototype.K,F.prototype.listenOnce=F.prototype.L,F.prototype.getLastError=F.prototype.Ka,F.prototype.getLastErrorCode=F.prototype.Ba,F.prototype.getStatus=F.prototype.Z,F.prototype.getResponseJson=F.prototype.Oa,F.prototype.getResponseText=F.prototype.oa,F.prototype.send=F.prototype.ea,F.prototype.setWithCredentials=F.prototype.Ha}).apply(typeof nn<"u"?nn:typeof self<"u"?self:typeof window<"u"?window:{});const ts="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}K.UNAUTHENTICATED=new K(null),K.GOOGLE_CREDENTIALS=new K("google-credentials-uid"),K.FIRST_PARTY=new K("first-party-uid"),K.MOCK_USER=new K("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lt="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt=new Si("@firebase/firestore");function te(i,...e){if(rt.logLevel<=D.DEBUG){const n=e.map(Pi);rt.debug(`Firestore (${Lt}): ${i}`,...n)}}function Ri(i,...e){if(rt.logLevel<=D.ERROR){const n=e.map(Pi);rt.error(`Firestore (${Lt}): ${i}`,...n)}}function Ih(i,...e){if(rt.logLevel<=D.WARN){const n=e.map(Pi);rt.warn(`Firestore (${Lt}): ${i}`,...n)}}function Pi(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(i="Unexpected state"){const e=`FIRESTORE (${Lt}) INTERNAL ASSERTION FAILED: `+i;throw Ri(e),new Error(e)}function vi(i,e){i||kt()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends ve{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class wh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(K.UNAUTHENTICATED))}shutdown(){}}class Eh{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Th{constructor(e){this.t=e,this.currentUser=K.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const o=I=>this.i!==r?(r=this.i,n(I)):Promise.resolve();let c=new Ye;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new Ye,e.enqueueRetryable(()=>o(this.currentUser))};const l=()=>{const I=c;e.enqueueRetryable(async()=>{await I.promise,await o(this.currentUser)})},g=I=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=I,this.auth.addAuthTokenListener(this.o),l()};this.t.onInit(I=>g(I)),setTimeout(()=>{if(!this.auth){const I=this.t.getImmediate({optional:!0});I?g(I):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new Ye)}},0),l()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(vi(typeof r.accessToken=="string"),new $s(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return vi(e===null||typeof e=="string"),new K(e)}}class Ah{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=K.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Sh{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Ah(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(K.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class bh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ch{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=c=>{c.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const l=c.token!==this.R;return this.R=c.token,te("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?n(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable(()=>r(c))};const o=c=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.appCheck.addTokenListener(this.o)};this.A.onInit(c=>o(c)),setTimeout(()=>{if(!this.appCheck){const c=this.A.getImmediate({optional:!0});c?o(c):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(vi(typeof n.token=="string"),this.R=n.token,new bh(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rh(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<i;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const o=Rh(40);for(let c=0;c<o.length;++c)r.length<20&&o[c]<n&&(r+=e.charAt(o[c]%e.length))}return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e,n,r){n===void 0?n=0:n>e.length&&kt(),r===void 0?r=e.length-n:r>e.length-n&&kt(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return dn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof dn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let o=0;o<r;o++){const c=e.get(o),l=n.get(o);if(c<l)return-1;if(c>l)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class re extends dn{construct(e,n,r){return new re(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(o=>o.length>0))}return new re(n)}static emptyPath(){return new re([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.path=e}static fromPath(e){return new Fe(re.fromString(e))}static fromName(e){return new Fe(re.fromString(e).popFirst(5))}static empty(){return new Fe(re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return re.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Fe(new re(e.slice()))}}function zs(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(e,n,r,o,c,l,g,I,E){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=o,this.ssl=c,this.forceLongPolling=l,this.autoDetectLongPolling=g,this.longPollingOptions=I,this.useFetchStreams=E}}class fn{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new fn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof fn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(e,n=null,r=[],o=[],c=null,l="F",g=null,I=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=o,this.limit=c,this.limitType=l,this.startAt=g,this.endAt=I,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Dh(i){return new Oh(i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ns,k;(k=ns||(ns={}))[k.OK=0]="OK",k[k.CANCELLED=1]="CANCELLED",k[k.UNKNOWN=2]="UNKNOWN",k[k.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",k[k.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",k[k.NOT_FOUND=5]="NOT_FOUND",k[k.ALREADY_EXISTS=6]="ALREADY_EXISTS",k[k.PERMISSION_DENIED=7]="PERMISSION_DENIED",k[k.UNAUTHENTICATED=16]="UNAUTHENTICATED",k[k.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",k[k.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",k[k.ABORTED=10]="ABORTED",k[k.OUT_OF_RANGE=11]="OUT_OF_RANGE",k[k.UNIMPLEMENTED=12]="UNIMPLEMENTED",k[k.INTERNAL=13]="INTERNAL",k[k.UNAVAILABLE=14]="UNAVAILABLE",k[k.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Hs([4294967295,4294967295],0);function si(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(e,n,r=1e3,o=1.5,c=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=o,this.Bo=c,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),o=Math.max(0,n-r);o>0&&te("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,o,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,n,r,o,c){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=o,this.removalCallback=c,this.deferred=new Ye,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,o,c){const l=Date.now()+r,g=new ki(e,n,l,o,c);return g.start(r),g}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Lh(i,e){if(Ri("AsyncQueue",`${e}: ${i}`),zs(i))return new B(j.UNAVAILABLE,`${e}: ${i}`);throw i}var is,rs;(rs=is||(is={})).J_="default",rs.Cache="cache";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e,n,r,o){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=o,this.user=K.UNAUTHENTICATED,this.clientId=Ph.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async c=>{te("FirestoreClient","Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(r,c=>(te("FirestoreClient","Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new B(j.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ye;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Lh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(i,e,n){if(!n)throw new B(j.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function xh(i,e,n,r){if(e===!0&&r===!0)throw new B(j.INVALID_ARGUMENT,`${i} and ${n} cannot be used together.`)}function os(i){if(Fe.isDocumentKey(i))throw new B(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function Fh(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":kt()}function jh(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new B(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Fh(i);throw new B(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new B(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}xh("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ws((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(c){if(c.timeoutSeconds!==void 0){if(isNaN(c.timeoutSeconds))throw new B(j.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (must not be NaN)`);if(c.timeoutSeconds<5)throw new B(j.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (minimum allowed value is 5)`);if(c.timeoutSeconds>30)throw new B(j.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,o){return r.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Oi{constructor(e,n,r,o){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new as({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new B(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new B(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new as(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new wh;switch(r.type){case"firstParty":return new Sh(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=ss.get(n);r&&(te("ComponentProvider","Removing Datastore"),ss.delete(n),r.terminate())}(this),Promise.resolve()}}function Bh(i,e,n,r={}){var o;const c=(i=jh(i,Oi))._getSettings(),l=`${e}:${n}`;if(c.host!=="firestore.googleapis.com"&&c.host!==l&&Ih("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),i._setSettings(Object.assign(Object.assign({},c),{host:l,ssl:!1})),r.mockUserToken){let g,I;if(typeof r.mockUserToken=="string")g=r.mockUserToken,I=K.MOCK_USER;else{g=ec(r.mockUserToken,(o=i._app)===null||o===void 0?void 0:o.options.projectId);const E=r.mockUserToken.sub||r.mockUserToken.user_id;if(!E)throw new B(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");I=new K(E)}i._authCredentials=new Eh(new $s(g,I))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Di(this.firestore,e,this._query)}}class In{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qe(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new In(this.firestore,e,this._key)}}class Qe extends Di{constructor(e,n,r){super(e,n,Dh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new In(this.firestore,null,new Fe(e))}withConverter(e){return new Qe(this.firestore,e,this._path)}}function Gs(i,e,...n){if(i=$e(i),Uh("collection","path",e),i instanceof Oi){const r=re.fromString(e,...n);return os(r),new Qe(i,null,r)}{if(!(i instanceof In||i instanceof Qe))throw new B(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=i._path.child(re.fromString(e,...n));return os(r),new Qe(i.firestore,null,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new Nh(this,"async_queue_retry"),this.hu=()=>{const n=si();n&&te("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=si();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=si();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new Ye;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!zs(e))throw e;te("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const o=function(l){let g=l.message||"";return l.stack&&(g=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),g}(r);throw Ri("INTERNAL UNHANDLED ERROR: ",o),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const o=ki.createAndSchedule(this,e,n,r,c=>this.Eu(c));return this._u.push(o),o}Pu(){this.au&&kt()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class Hh extends Oi{constructor(e,n,r,o){super(e,n,r,o),this.type="firestore",this._queue=function(){return new Vh}(),this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||zh(this),this._firestoreClient.terminate()}}function $h(i,e){const n=typeof i=="object"?i:js(),r=typeof i=="string"?i:"(default)",o=Ci(n,"firestore").getImmediate({identifier:r});if(!o._initialized){const c=Qa("firestore");c&&Bh(o,...c)}return o}function zh(i){var e,n,r;const o=i._freezeSettings(),c=function(g,I,E,A){return new kh(g,I,E,A.host,A.ssl,A.experimentalForceLongPolling,A.experimentalAutoDetectLongPolling,Ws(A.experimentalLongPollingOptions),A.useFetchStreams)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,o);i._firestoreClient=new Mh(i._authCredentials,i._appCheckCredentials,i._queue,c),!((n=o.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=o.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(i._firestoreClient._uninitializedComponentsProvider={_offlineKind:o.localCache.kind,_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider})}(function(e,n=!0){(function(o){Lt=o})(ot),it(new Be("firestore",(r,{instanceIdentifier:o,options:c})=>{const l=r.getProvider("app").getImmediate(),g=new Hh(new Th(r.getProvider("auth-internal")),new Ch(r.getProvider("app-check-internal")),function(E,A){if(!Object.prototype.hasOwnProperty.apply(E.options,["projectId"]))throw new B(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fn(E.options.projectId,A)}(l,o),l);return c=Object.assign({useFetchStreams:n},c),g._setSettings(c),g},"PUBLIC").setMultipleInstances(!0)),De(ts,"4.6.3",e),De(ts,"4.6.3","esm2017")})();var Wh="firebase",Gh="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */De(Wh,Gh,"app");function qs(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qh=qs,Ks=new Dt("auth","Firebase",qs());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn=new Si("@firebase/auth");function Kh(i,...e){pn.logLevel<=D.WARN&&pn.warn(`Auth (${ot}): ${i}`,...e)}function sn(i,...e){pn.logLevel<=D.ERROR&&pn.error(`Auth (${ot}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(i,...e){throw Ni(i,...e)}function ce(i,...e){return Ni(i,...e)}function Js(i,e,n){const r=Object.assign(Object.assign({},qh()),{[e]:n});return new Dt("auth","Firebase",r).create(e,{appName:i.name})}function je(i){return Js(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ni(i,...e){if(typeof i!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=i.name),i._errorFactory.create(n,...r)}return Ks.create(i,...e)}function C(i,e,...n){if(!i)throw Ni(e,...n)}function de(i){const e="INTERNAL ASSERTION FAILED: "+i;throw sn(e),new Error(e)}function me(i,e){i||de(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function Jh(){return cs()==="http:"||cs()==="https:"}function cs(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Jh()||nc()||"connection"in navigator)?navigator.onLine:!0}function Yh(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,n){this.shortDelay=e,this.longDelay=n,me(n>e,"Short delay should be less than long delay!"),this.isMobile=tc()||ic()}get(){return Xh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(i,e){me(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;de("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;de("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;de("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh=new Mt(3e4,6e4);function Mi(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function at(i,e,n,r,o={}){return Ys(i,o,async()=>{let c={},l={};r&&(e==="GET"?l=r:c={body:JSON.stringify(r)});const g=Nt(Object.assign({key:i.config.apiKey},l)).slice(1),I=await i._getAdditionalHeaders();return I["Content-Type"]="application/json",i.languageCode&&(I["X-Firebase-Locale"]=i.languageCode),Xs.fetch()(Qs(i,i.config.apiHost,n,g),Object.assign({method:e,headers:I,referrerPolicy:"no-referrer"},c))})}async function Ys(i,e,n){i._canInitEmulator=!1;const r=Object.assign(Object.assign({},Qh),e);try{const o=new tl(i),c=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const l=await c.json();if("needConfirmation"in l)throw rn(i,"account-exists-with-different-credential",l);if(c.ok&&!("errorMessage"in l))return l;{const g=c.ok?l.errorMessage:l.error.message,[I,E]=g.split(" : ");if(I==="FEDERATED_USER_ID_ALREADY_LINKED")throw rn(i,"credential-already-in-use",l);if(I==="EMAIL_EXISTS")throw rn(i,"email-already-in-use",l);if(I==="USER_DISABLED")throw rn(i,"user-disabled",l);const A=r[I]||I.toLowerCase().replace(/[_\s]+/g,"-");if(E)throw Js(i,A,E);ge(i,A)}}catch(o){if(o instanceof ve)throw o;ge(i,"network-request-failed",{message:String(o)})}}async function el(i,e,n,r,o={}){const c=await at(i,e,n,r,o);return"mfaPendingCredential"in c&&ge(i,"multi-factor-auth-required",{_serverResponse:c}),c}function Qs(i,e,n,r){const o=`${e}${n}?${r}`;return i.config.emulator?Li(i.config,o):`${i.config.apiScheme}://${o}`}class tl{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ce(this.auth,"network-request-failed")),Zh.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function rn(i,e,n){const r={appName:i.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const o=ce(i,e,r);return o.customData._tokenResponse=n,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nl(i,e){return at(i,"POST","/v1/accounts:delete",e)}async function Zs(i,e){return at(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function il(i,e=!1){const n=$e(i),r=await n.getIdToken(e),o=Ui(r);C(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const c=typeof o.firebase=="object"?o.firebase:void 0,l=c==null?void 0:c.sign_in_provider;return{claims:o,token:r,authTime:bt(oi(o.auth_time)),issuedAtTime:bt(oi(o.iat)),expirationTime:bt(oi(o.exp)),signInProvider:l||null,signInSecondFactor:(c==null?void 0:c.sign_in_second_factor)||null}}function oi(i){return Number(i)*1e3}function Ui(i){const[e,n,r]=i.split(".");if(e===void 0||n===void 0||r===void 0)return sn("JWT malformed, contained fewer than 3 sections"),null;try{const o=Ds(n);return o?JSON.parse(o):(sn("Failed to decode base64 JWT payload"),null)}catch(o){return sn("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function hs(i){const e=Ui(i);return C(e,"internal-error"),C(typeof e.exp<"u","internal-error"),C(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ot(i,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ve&&rl(r)&&i.auth.currentUser===i&&await i.auth.signOut(),r}}function rl({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const o=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=bt(this.lastLoginAt),this.creationTime=bt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gn(i){var e;const n=i.auth,r=await i.getIdToken(),o=await Ot(i,Zs(n,{idToken:r}));C(o==null?void 0:o.users.length,n,"internal-error");const c=o.users[0];i._notifyReloadListener(c);const l=!((e=c.providerUserInfo)===null||e===void 0)&&e.length?eo(c.providerUserInfo):[],g=al(i.providerData,l),I=i.isAnonymous,E=!(i.email&&c.passwordHash)&&!(g!=null&&g.length),A=I?E:!1,R={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:g,metadata:new yi(c.createdAt,c.lastLoginAt),isAnonymous:A};Object.assign(i,R)}async function ol(i){const e=$e(i);await gn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function al(i,e){return[...i.filter(r=>!e.some(o=>o.providerId===r.providerId)),...e]}function eo(i){return i.map(e=>{var{providerId:n}=e,r=Ei(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cl(i,e){const n=await Ys(i,{},async()=>{const r=Nt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:c}=i.config,l=Qs(i,o,"/v1/token",`key=${c}`),g=await i._getAdditionalHeaders();return g["Content-Type"]="application/x-www-form-urlencoded",Xs.fetch()(l,{method:"POST",headers:g,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function hl(i,e){return at(i,"POST","/v2/accounts:revokeToken",Mi(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){C(e.idToken,"internal-error"),C(typeof e.idToken<"u","internal-error"),C(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):hs(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){C(e.length!==0,"internal-error");const n=hs(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(C(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:o,expiresIn:c}=await cl(e,n);this.updateTokensAndExpiration(r,o,Number(c))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:o,expirationTime:c}=n,l=new Ze;return r&&(C(typeof r=="string","internal-error",{appName:e}),l.refreshToken=r),o&&(C(typeof o=="string","internal-error",{appName:e}),l.accessToken=o),c&&(C(typeof c=="number","internal-error",{appName:e}),l.expirationTime=c),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ze,this.toJSON())}_performRefresh(){return de("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(i,e){C(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class fe{constructor(e){var{uid:n,auth:r,stsTokenManager:o}=e,c=Ei(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new sl(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new yi(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(e){const n=await Ot(this,this.stsTokenManager.getToken(this.auth,e));return C(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return il(this,e)}reload(){return ol(this)}_assign(e){this!==e&&(C(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new fe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){C(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await gn(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Pe(this.auth.app))return Promise.reject(je(this.auth));const e=await this.getIdToken();return await Ot(this,nl(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,o,c,l,g,I,E,A;const R=(r=n.displayName)!==null&&r!==void 0?r:void 0,b=(o=n.email)!==null&&o!==void 0?o:void 0,P=(c=n.phoneNumber)!==null&&c!==void 0?c:void 0,S=(l=n.photoURL)!==null&&l!==void 0?l:void 0,N=(g=n.tenantId)!==null&&g!==void 0?g:void 0,M=(I=n._redirectEventId)!==null&&I!==void 0?I:void 0,ee=(E=n.createdAt)!==null&&E!==void 0?E:void 0,X=(A=n.lastLoginAt)!==null&&A!==void 0?A:void 0,{uid:H,emailVerified:Z,isAnonymous:V,providerData:x,stsTokenManager:v}=n;C(H&&v,e,"internal-error");const u=Ze.fromJSON(this.name,v);C(typeof H=="string",e,"internal-error"),Ee(R,e.name),Ee(b,e.name),C(typeof Z=="boolean",e,"internal-error"),C(typeof V=="boolean",e,"internal-error"),Ee(P,e.name),Ee(S,e.name),Ee(N,e.name),Ee(M,e.name),Ee(ee,e.name),Ee(X,e.name);const f=new fe({uid:H,auth:e,email:b,emailVerified:Z,displayName:R,isAnonymous:V,photoURL:S,phoneNumber:P,tenantId:N,stsTokenManager:u,createdAt:ee,lastLoginAt:X});return x&&Array.isArray(x)&&(f.providerData=x.map(p=>Object.assign({},p))),M&&(f._redirectEventId=M),f}static async _fromIdTokenResponse(e,n,r=!1){const o=new Ze;o.updateFromServerResponse(n);const c=new fe({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:r});return await gn(c),c}static async _fromGetAccountInfoResponse(e,n,r){const o=n.users[0];C(o.localId!==void 0,"internal-error");const c=o.providerUserInfo!==void 0?eo(o.providerUserInfo):[],l=!(o.email&&o.passwordHash)&&!(c!=null&&c.length),g=new Ze;g.updateFromIdToken(r);const I=new fe({uid:o.localId,auth:e,stsTokenManager:g,isAnonymous:l}),E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new yi(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(c!=null&&c.length)};return Object.assign(I,E),I}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls=new Map;function pe(i){me(i instanceof Function,"Expected a class definition");let e=ls.get(i);return e?(me(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,ls.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}to.type="NONE";const us=to;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(i,e,n){return`firebase:${i}:${e}:${n}`}class et{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:o,name:c}=this.auth;this.fullUserKey=on(this.userKey,o.apiKey,c),this.fullPersistenceKey=on("persistence",o.apiKey,c),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?fe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new et(pe(us),e,r);const o=(await Promise.all(n.map(async E=>{if(await E._isAvailable())return E}))).filter(E=>E);let c=o[0]||pe(us);const l=on(r,e.config.apiKey,e.name);let g=null;for(const E of n)try{const A=await E._get(l);if(A){const R=fe._fromJSON(e,A);E!==c&&(g=R),c=E;break}}catch{}const I=o.filter(E=>E._shouldAllowMigration);return!c._shouldAllowMigration||!I.length?new et(c,e,r):(c=I[0],g&&await c._set(l,g.toJSON()),await Promise.all(n.map(async E=>{if(E!==c)try{await E._remove(l)}catch{}})),new et(c,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ro(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(no(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(oo(e))return"Blackberry";if(ao(e))return"Webos";if(xi(e))return"Safari";if((e.includes("chrome/")||io(e))&&!e.includes("edge/"))return"Chrome";if(so(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=i.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function no(i=J()){return/firefox\//i.test(i)}function xi(i=J()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function io(i=J()){return/crios\//i.test(i)}function ro(i=J()){return/iemobile/i.test(i)}function so(i=J()){return/android/i.test(i)}function oo(i=J()){return/blackberry/i.test(i)}function ao(i=J()){return/webos/i.test(i)}function wn(i=J()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function ll(i=J()){var e;return wn(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ul(){return rc()&&document.documentMode===10}function co(i=J()){return wn(i)||so(i)||ao(i)||oo(i)||/windows phone/i.test(i)||ro(i)}function dl(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(i,e=[]){let n;switch(i){case"Browser":n=ds(J());break;case"Worker":n=`${ds(J())}-${i}`;break;default:n=i}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ot}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=c=>new Promise((l,g)=>{try{const I=e(c);l(I)}catch(I){g(I)}});r.onAbort=n,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pl(i,e={}){return at(i,"GET","/v2/passwordPolicy",Mi(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl=6;class ml{constructor(e){var n,r,o,c;const l=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=l.minPasswordLength)!==null&&n!==void 0?n:gl,l.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=l.maxPasswordLength),l.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=l.containsLowercaseCharacter),l.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=l.containsUppercaseCharacter),l.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=l.containsNumericCharacter),l.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=l.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(c=e.forceUpgradeOnSignin)!==null&&c!==void 0?c:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,o,c,l,g;const I={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,I),this.validatePasswordCharacterOptions(e,I),I.isValid&&(I.isValid=(n=I.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),I.isValid&&(I.isValid=(r=I.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),I.isValid&&(I.isValid=(o=I.containsLowercaseLetter)!==null&&o!==void 0?o:!0),I.isValid&&(I.isValid=(c=I.containsUppercaseLetter)!==null&&c!==void 0?c:!0),I.isValid&&(I.isValid=(l=I.containsNumericCharacter)!==null&&l!==void 0?l:!0),I.isValid&&(I.isValid=(g=I.containsNonAlphanumericCharacter)!==null&&g!==void 0?g:!0),I}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let o=0;o<e.length;o++)r=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,o,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e,n,r,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fs(this),this.idTokenSubscription=new fs(this),this.beforeStateQueue=new fl(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ks,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=pe(n)),this._initializationPromise=this.queue(async()=>{var r,o;if(!this._deleted&&(this.persistenceManager=await et.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Zs(this,{idToken:e}),r=await fe._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Pe(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(g=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(g,g))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let o=r,c=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,g=o==null?void 0:o._redirectEventId,I=await this.tryRedirectSignIn(e);(!l||l===g)&&(I!=null&&I.user)&&(o=I.user,c=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(o)}catch(l){o=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return C(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await gn(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Yh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Pe(this.app))return Promise.reject(je(this));const n=e?$e(e):null;return n&&C(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&C(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Pe(this.app)?Promise.reject(je(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Pe(this.app)?Promise.reject(je(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(pe(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await pl(this),n=new ml(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Dt("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await hl(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&pe(e)||this._popupRedirectResolver;C(n,this,"argument-error"),this.redirectPersistenceManager=await et.create(this,[pe(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,o){if(this._deleted)return()=>{};const c=typeof n=="function"?n:n.next.bind(n);let l=!1;const g=this._isInitialized?Promise.resolve():this._initializationPromise;if(C(g,this,"internal-error"),g.then(()=>{l||c(this.currentUser)}),typeof n=="function"){const I=e.addObserver(n,r,o);return()=>{l=!0,I()}}else{const I=e.addObserver(n);return()=>{l=!0,I()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return C(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ho(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Kh(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Fi(i){return $e(i)}class fs{constructor(e){this.auth=e,this.observer=null,this.addObserver=uc(n=>this.observer=n)}get next(){return C(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ji={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function _l(i){ji=i}function yl(i){return ji.loadJS(i)}function Il(){return ji.gapiScript}function wl(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(i,e){const n=Ci(i,"auth");if(n.isInitialized()){const o=n.getImmediate(),c=n.getOptions();if(ln(c,e??{}))return o;ge(o,"already-initialized")}return n.initialize({options:e})}function Tl(i,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(pe);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Al(i,e,n){const r=Fi(i);C(r._canInitEmulator,r,"emulator-config-failed"),C(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const o=!1,c=lo(e),{host:l,port:g}=Sl(e),I=g===null?"":`:${g}`;r.config.emulator={url:`${c}//${l}${I}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:l,port:g,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:o})}),bl()}function lo(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function Sl(i){const e=lo(i),n=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const c=o[1];return{host:c,port:ps(r.substr(c.length+1))}}else{const[c,l]=r.split(":");return{host:c,port:ps(l)}}}function ps(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function bl(){function i(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return de("not implemented")}_getIdTokenResponse(e){return de("not implemented")}_linkToIdToken(e,n){return de("not implemented")}_getReauthenticationResolver(e){return de("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tt(i,e){return el(i,"POST","/v1/accounts:signInWithIdp",Mi(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl="http://localhost";class He extends uo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new He(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ge("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:o}=n,c=Ei(n,["providerId","signInMethod"]);if(!r||!o)return null;const l=new He(r,o);return l.idToken=c.idToken||void 0,l.accessToken=c.accessToken||void 0,l.secret=c.secret,l.nonce=c.nonce,l.pendingToken=c.pendingToken||null,l}_getIdTokenResponse(e){const n=this.buildRequest();return tt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,tt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,tt(e,n)}buildRequest(){const e={requestUri:Cl,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Nt(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends fo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae extends Ut{constructor(){super("facebook.com")}static credential(e){return He._fromParams({providerId:Ae.PROVIDER_ID,signInMethod:Ae.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ae.credentialFromTaggedObject(e)}static credentialFromError(e){return Ae.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ae.credential(e.oauthAccessToken)}catch{return null}}}Ae.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ae.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se extends Ut{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return He._fromParams({providerId:Se.PROVIDER_ID,signInMethod:Se.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Se.credentialFromTaggedObject(e)}static credentialFromError(e){return Se.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Se.credential(n,r)}catch{return null}}}Se.GOOGLE_SIGN_IN_METHOD="google.com";Se.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be extends Ut{constructor(){super("github.com")}static credential(e){return He._fromParams({providerId:be.PROVIDER_ID,signInMethod:be.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return be.credentialFromTaggedObject(e)}static credentialFromError(e){return be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return be.credential(e.oauthAccessToken)}catch{return null}}}be.GITHUB_SIGN_IN_METHOD="github.com";be.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce extends Ut{constructor(){super("twitter.com")}static credential(e,n){return He._fromParams({providerId:Ce.PROVIDER_ID,signInMethod:Ce.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ce.credentialFromTaggedObject(e)}static credentialFromError(e){return Ce.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ce.credential(n,r)}catch{return null}}}Ce.TWITTER_SIGN_IN_METHOD="twitter.com";Ce.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,o=!1){const c=await fe._fromIdTokenResponse(e,r,o),l=gs(r);return new st({user:c,providerId:l,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const o=gs(r);return new st({user:e,providerId:o,_tokenResponse:r,operationType:n})}}function gs(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends ve{constructor(e,n,r,o){var c;super(n.code,n.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,mn.prototype),this.customData={appName:e.name,tenantId:(c=e.tenantId)!==null&&c!==void 0?c:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,o){return new mn(e,n,r,o)}}function po(i,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(i):n._getIdTokenResponse(i)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?mn._fromErrorAndOperation(i,c,e,r):c})}async function Rl(i,e,n=!1){const r=await Ot(i,e._linkToIdToken(i.auth,await i.getIdToken()),n);return st._forOperation(i,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pl(i,e,n=!1){const{auth:r}=i;if(Pe(r.app))return Promise.reject(je(r));const o="reauthenticate";try{const c=await Ot(i,po(r,o,e,i),n);C(c.idToken,r,"internal-error");const l=Ui(c.idToken);C(l,r,"internal-error");const{sub:g}=l;return C(i.uid===g,r,"user-mismatch"),st._forOperation(i,o,c)}catch(c){throw(c==null?void 0:c.code)==="auth/user-not-found"&&ge(r,"user-mismatch"),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kl(i,e,n=!1){if(Pe(i.app))return Promise.reject(je(i));const r="signIn",o=await po(i,r,e),c=await st._fromIdTokenResponse(i,r,o);return n||await i._updateCurrentUser(c.user),c}function Ol(i,e,n,r){return $e(i).onIdTokenChanged(e,n,r)}function Dl(i,e,n){return $e(i).beforeAuthStateChanged(e,n)}const vn="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(vn,"1"),this.storage.removeItem(vn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(){const i=J();return xi(i)||wn(i)}const Ll=1e3,Ml=10;class mo extends go{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Nl()&&dl(),this.fallbackToPolling=co(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),o=this.localCache[n];r!==o&&e(n,o,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((l,g,I)=>{this.notifyListeners(l,I)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const l=this.storage.getItem(r);if(e.newValue!==l)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const o=()=>{const l=this.storage.getItem(r);!n&&this.localCache[r]===l||this.notifyListeners(r,l)},c=this.storage.getItem(r);ul()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,Ml):o()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Ll)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}mo.type="LOCAL";const Ul=mo;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo extends go{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}vo.type="SESSION";const _o=vo;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xl(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const r=new En(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:o,data:c}=n.data,l=this.handlersMap[o];if(!(l!=null&&l.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const g=Array.from(l).map(async E=>E(n.origin,c)),I=await xl(g);n.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:I})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}En.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(i="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return i+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let c,l;return new Promise((g,I)=>{const E=Bi("",20);o.port1.start();const A=setTimeout(()=>{I(new Error("unsupported_event"))},r);l={messageChannel:o,onMessage(R){const b=R;if(b.data.eventId===E)switch(b.data.status){case"ack":clearTimeout(A),c=setTimeout(()=>{I(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),g(b.data.response);break;default:clearTimeout(A),clearTimeout(c),I(new Error("invalid_response"));break}}},this.handlers.add(l),o.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:E,data:n},[o.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(){return window}function jl(i){he().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(){return typeof he().WorkerGlobalScope<"u"&&typeof he().importScripts=="function"}async function Bl(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Vl(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function Hl(){return yo()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io="firebaseLocalStorageDb",$l=1,_n="firebaseLocalStorage",wo="fbase_key";class xt{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Tn(i,e){return i.transaction([_n],e?"readwrite":"readonly").objectStore(_n)}function zl(){const i=indexedDB.deleteDatabase(Io);return new xt(i).toPromise()}function Ii(){const i=indexedDB.open(Io,$l);return new Promise((e,n)=>{i.addEventListener("error",()=>{n(i.error)}),i.addEventListener("upgradeneeded",()=>{const r=i.result;try{r.createObjectStore(_n,{keyPath:wo})}catch(o){n(o)}}),i.addEventListener("success",async()=>{const r=i.result;r.objectStoreNames.contains(_n)?e(r):(r.close(),await zl(),e(await Ii()))})})}async function ms(i,e,n){const r=Tn(i,!0).put({[wo]:e,value:n});return new xt(r).toPromise()}async function Wl(i,e){const n=Tn(i,!1).get(e),r=await new xt(n).toPromise();return r===void 0?null:r.value}function vs(i,e){const n=Tn(i,!0).delete(e);return new xt(n).toPromise()}const Gl=800,ql=3;class Eo{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ii(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ql)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yo()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=En._getInstance(Hl()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Bl(),!this.activeServiceWorker)return;this.sender=new Fl(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Vl()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ii();return await ms(e,vn,"1"),await vs(e,vn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ms(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Wl(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>vs(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const c=Tn(o,!1).getAll();return new xt(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:o,value:c}of e)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(c)&&(this.notifyListeners(o,c),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Gl)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Eo.type="LOCAL";const Kl=Eo;new Mt(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(i,e){return e?pe(e):(C(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi extends uo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return tt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return tt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return tt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Xl(i){return kl(i.auth,new Vi(i),i.bypassAuthState)}function Yl(i){const{auth:e,user:n}=i;return C(n,e,"internal-error"),Pl(n,new Vi(i),i.bypassAuthState)}async function Ql(i){const{auth:e,user:n}=i;return C(n,e,"internal-error"),Rl(n,new Vi(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,n,r,o,c=!1){this.auth=e,this.resolver=r,this.user=o,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:o,tenantId:c,error:l,type:g}=e;if(l){this.reject(l);return}const I={auth:this.auth,requestUri:n,sessionId:r,tenantId:c||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(g)(I))}catch(E){this.reject(E)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Xl;case"linkViaPopup":case"linkViaRedirect":return Ql;case"reauthViaPopup":case"reauthViaRedirect":return Yl;default:ge(this.auth,"internal-error")}}resolve(e){me(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){me(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl=new Mt(2e3,1e4);class Xe extends To{constructor(e,n,r,o,c){super(e,n,o,c),this.provider=r,this.authWindow=null,this.pollId=null,Xe.currentPopupAction&&Xe.currentPopupAction.cancel(),Xe.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return C(e,this.auth,"internal-error"),e}async onExecution(){me(this.filter.length===1,"Popup operations only handle one event");const e=Bi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ce(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ce(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xe.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ce(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Zl.get())};e()}}Xe.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu="pendingRedirect",an=new Map;class tu extends To{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=an.get(this.auth._key());if(!e){try{const r=await nu(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}an.set(this.auth._key(),e)}return this.bypassAuthState||an.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nu(i,e){const n=su(e),r=ru(i);if(!await r._isAvailable())return!1;const o=await r._get(n)==="true";return await r._remove(n),o}function iu(i,e){an.set(i._key(),e)}function ru(i){return pe(i._redirectPersistence)}function su(i){return on(eu,i.config.apiKey,i.name)}async function ou(i,e,n=!1){if(Pe(i.app))return Promise.reject(je(i));const r=Fi(i),o=Jl(r,e),l=await new tu(r,o,n).execute();return l&&!n&&(delete l.user._redirectEventId,await r._persistUserIfCurrent(l.user),await r._setRedirectUser(null,e)),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au=10*60*1e3;class cu{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hu(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ao(e)){const o=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ce(this.auth,o))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=au&&this.cachedEventUids.clear(),this.cachedEventUids.has(_s(e))}saveEventToCache(e){this.cachedEventUids.add(_s(e)),this.lastProcessedEventTime=Date.now()}}function _s(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function Ao({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function hu(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ao(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lu(i,e={}){return at(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,du=/^https?/;async function fu(i){if(i.config.emulator)return;const{authorizedDomains:e}=await lu(i);for(const n of e)try{if(pu(n))return}catch{}ge(i,"unauthorized-domain")}function pu(i){const e=_i(),{protocol:n,hostname:r}=new URL(e);if(i.startsWith("chrome-extension://")){const l=new URL(i);return l.hostname===""&&r===""?n==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&l.hostname===r}if(!du.test(n))return!1;if(uu.test(i))return r===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu=new Mt(3e4,6e4);function ys(){const i=he().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let n=0;n<i.CP.length;n++)i.CP[n]=null}}function mu(i){return new Promise((e,n)=>{var r,o,c;function l(){ys(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ys(),n(ce(i,"network-request-failed"))},timeout:gu.get()})}if(!((o=(r=he().gapi)===null||r===void 0?void 0:r.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((c=he().gapi)===null||c===void 0)&&c.load)l();else{const g=wl("iframefcb");return he()[g]=()=>{gapi.load?l():n(ce(i,"network-request-failed"))},yl(`${Il()}?onload=${g}`).catch(I=>n(I))}}).catch(e=>{throw cn=null,e})}let cn=null;function vu(i){return cn=cn||mu(i),cn}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u=new Mt(5e3,15e3),yu="__/auth/iframe",Iu="emulator/auth/iframe",wu={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Eu=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Tu(i){const e=i.config;C(e.authDomain,i,"auth-domain-config-required");const n=e.emulator?Li(e,Iu):`https://${i.config.authDomain}/${yu}`,r={apiKey:e.apiKey,appName:i.name,v:ot},o=Eu.get(i.config.apiHost);o&&(r.eid=o);const c=i._getFrameworks();return c.length&&(r.fw=c.join(",")),`${n}?${Nt(r).slice(1)}`}async function Au(i){const e=await vu(i),n=he().gapi;return C(n,i,"internal-error"),e.open({where:document.body,url:Tu(i),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wu,dontclear:!0},r=>new Promise(async(o,c)=>{await r.restyle({setHideOnLeave:!1});const l=ce(i,"network-request-failed"),g=he().setTimeout(()=>{c(l)},_u.get());function I(){he().clearTimeout(g),o(r)}r.ping(I).then(I,()=>{c(l)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bu=500,Cu=600,Ru="_blank",Pu="http://localhost";class Is{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ku(i,e,n,r=bu,o=Cu){const c=Math.max((window.screen.availHeight-o)/2,0).toString(),l=Math.max((window.screen.availWidth-r)/2,0).toString();let g="";const I=Object.assign(Object.assign({},Su),{width:r.toString(),height:o.toString(),top:c,left:l}),E=J().toLowerCase();n&&(g=io(E)?Ru:n),no(E)&&(e=e||Pu,I.scrollbars="yes");const A=Object.entries(I).reduce((b,[P,S])=>`${b}${P}=${S},`,"");if(ll(E)&&g!=="_self")return Ou(e||"",g),new Is(null);const R=window.open(e||"",g,A);C(R,i,"popup-blocked");try{R.focus()}catch{}return new Is(R)}function Ou(i,e){const n=document.createElement("a");n.href=i,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du="__/auth/handler",Nu="emulator/auth/handler",Lu=encodeURIComponent("fac");async function ws(i,e,n,r,o,c){C(i.config.authDomain,i,"auth-domain-config-required"),C(i.config.apiKey,i,"invalid-api-key");const l={apiKey:i.config.apiKey,appName:i.name,authType:n,redirectUrl:r,v:ot,eventId:o};if(e instanceof fo){e.setDefaultLanguage(i.languageCode),l.providerId=e.providerId||"",lc(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[A,R]of Object.entries({}))l[A]=R}if(e instanceof Ut){const A=e.getScopes().filter(R=>R!=="");A.length>0&&(l.scopes=A.join(","))}i.tenantId&&(l.tid=i.tenantId);const g=l;for(const A of Object.keys(g))g[A]===void 0&&delete g[A];const I=await i._getAppCheckToken(),E=I?`#${Lu}=${encodeURIComponent(I)}`:"";return`${Mu(i)}?${Nt(g).slice(1)}${E}`}function Mu({config:i}){return i.emulator?Li(i,Nu):`https://${i.authDomain}/${Du}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai="webStorageSupport";class Uu{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_o,this._completeRedirectFn=ou,this._overrideRedirectResult=iu}async _openPopup(e,n,r,o){var c;me((c=this.eventManagers[e._key()])===null||c===void 0?void 0:c.manager,"_initialize() not called before _openPopup()");const l=await ws(e,n,r,_i(),o);return ku(e,l,Bi())}async _openRedirect(e,n,r,o){await this._originValidation(e);const c=await ws(e,n,r,_i(),o);return jl(c),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:c}=this.eventManagers[n];return o?Promise.resolve(o):(me(c,"If manager is not set, promise should be"),c)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Au(e),r=new cu(e);return n.register("authEvent",o=>(C(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ai,{type:ai},o=>{var c;const l=(c=o==null?void 0:o[0])===null||c===void 0?void 0:c[ai];l!==void 0&&n(!!l),ge(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=fu(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return co()||xi()||wn()}}const xu=Uu;var Es="@firebase/auth",Ts="1.7.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){C(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ju(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Bu(i){it(new Be("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:l,authDomain:g}=r.options;C(l&&!l.includes(":"),"invalid-api-key",{appName:r.name});const I={apiKey:l,authDomain:g,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ho(i)},E=new vl(r,o,c,I);return Tl(E,n),E},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),it(new Be("auth-internal",e=>{const n=Fi(e.getProvider("auth").getImmediate());return(r=>new Fu(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),De(Es,Ts,ju(i)),De(Es,Ts,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu=5*60,Hu=Ms("authIdTokenMaxAge")||Vu;let As=null;const $u=i=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Hu)return;const o=n==null?void 0:n.token;As!==o&&(As=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function zu(i=js()){const e=Ci(i,"auth");if(e.isInitialized())return e.getImmediate();const n=El(i,{popupRedirectResolver:xu,persistence:[Kl,Ul,_o]}),r=Ms("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(r,location.origin);if(location.origin===c.origin){const l=$u(c.toString());Dl(n,l,()=>l(n.currentUser)),Ol(n,g=>l(g))}}const o=Ns("auth");return o&&Al(n,`http://${o}`),n}function Wu(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}_l({loadJS(i){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",i),r.onload=e,r.onerror=o=>{const c=ce("internal-error");c.customData=o,n(c)},r.type="text/javascript",r.charset="UTF-8",Wu().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Bu("Browser");const Gu={apiKey:"AIzaSyDi9H_LNLTKdR1BHeAx2pr6YF2dJ3JbkG8",authDomain:"chat-app-223b4.firebaseapp.com",projectId:"chat-app-223b4",storageBucket:"chat-app-223b4.appspot.com",messagingSenderId:"404191009390",appId:"1:404191009390:web:b773e9a0fbe4d61785a47f",measurementId:"G-BBECS153ZV"},So=Fs(Gu);zu(So);const bo=$h(So);Gs(bo,"users");Gs(bo,"profiles");const qu=({children:i,items:e,onSelect:n,isHover:r,icon:o,styles:c,position:l})=>{const[g,I]=Ct.useState(!1),E=Ct.useRef(null),R={[St.TOP_RIGHT]:"top-12 -left-32",[St.TOP_LEFT]:"top-12 left-12",[St.BOT_RIGHT]:"-top-20 right-12",[St.BOT_LEFT]:"-top-20 left-12"}[l||St.TOP_RIGHT];da({ref:E,handler:()=>I(!1)});const b=()=>I(!g),P=S=>{n==null||n(S),I(!1)};return Je.jsxs("div",{className:Br("relative",c),ref:E,children:[Je.jsxs("div",{className:"flex items-center cursor-pointer px-4",onClick:b,children:[i,o&&Je.jsx(ua,{icon:o,isHover:r})]}),g&&Je.jsx("ul",{className:Br("w-40 bg-white shadow-xl rounded-md z-20 absolute",R),children:e.map(S=>Je.jsxs("li",{className:"px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-500",onClick:P.bind(null,S),children:[S.icon&&Je.jsx(la,{icon:S.icon,className:"mr-2"}),S.label]},S.value))})]})};qu.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"DropdownItem"}],raw:"DropdownItem[]"},description:""},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: DropdownItem) => void",signature:{arguments:[{type:{name:"DropdownItem"},name:"item"}],return:{name:"void"}}},description:""},icon:{required:!1,tsType:{name:"IconDefinition"},description:""},styles:{required:!1,tsType:{name:"string"},description:""},isHover:{required:!1,tsType:{name:"boolean"},description:""},position:{required:!1,tsType:{name:"union",raw:`| POSITION.TOP_LEFT\r
| POSITION.TOP_RIGHT\r
| POSITION.BOT_LEFT\r
| POSITION.BOT_RIGHT`,elements:[{name:"POSITION.TOP_LEFT"},{name:"POSITION.TOP_RIGHT"},{name:"POSITION.BOT_LEFT"},{name:"POSITION.BOT_RIGHT"}]},description:""}}};export{qu as D};
