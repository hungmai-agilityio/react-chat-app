import{r as c}from"./index-CTjT7uj6.js";import{d as m,s as S,a as r,c as p,o as O}from"./auth-ZVG9sYy8.js";import{E as u}from"./endPoint-D9QdfkjO.js";const i=async(s,t)=>{const e=m(r,u.USER,s);await S(e,{isOnline:t},{merge:!0})},R=s=>{const[t,e]=c.useState({});return c.useEffect(()=>{if(!s)return;const f=async()=>{await i(s,!0)},d=async()=>{await i(s,!1)};f();const l=p(r,u.USER),w=O(l,E=>{const a={};E.forEach(o=>{a[o.id]=o.data().isOnline||!1}),e(a)}),n=async()=>{await d()};return window.addEventListener("beforeunload",n),()=>{w(),window.removeEventListener("beforeunload",n)}},[s]),t};export{R as u};