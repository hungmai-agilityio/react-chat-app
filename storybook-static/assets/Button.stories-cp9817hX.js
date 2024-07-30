import{M as C}from"./index-BuifuLLO.js";import{S as e,T as s}from"./enum-DHbXvcqL.js";import{f as M}from"./index-BrXc1ilD.js";import"./jsx-runtime-Cw0GR0a5.js";import"./index-CTjT7uj6.js";import"./clsx-B-dksMZM.js";import"./index.es-D6nAsfRb.js";import"./index-BzjuzjN8.js";const v={component:C,tags:["autodocs"],argTypes:{name:{description:"Name button"},size:{description:"Set size optional for Button"},variant:{description:"Set type optional for Button"},onClick:{description:"Handle the event when clicking on the button"},styles:{description:"Add custom css"},isDisabled:{description:"Set disabled button"},iconLeft:{description:"Render icon left with FontAwesome"},iconRight:{description:"Render icon right with FontAwesome"}}},t={args:{name:"Submit",size:e.MEDIUM,variant:s.PRIMARY,onClick:()=>alert("submit primary button")}},r={args:{name:"Submit",size:e.MEDIUM,variant:s.SECOND,onClick:()=>alert("submit secondary button")}},n={args:{name:"Submit",size:e.SMALL,variant:s.TERTIARY,iconRight:M,onClick:()=>alert("submit Tertiary button")}},a={args:{name:"Submit",size:e.LARGE,variant:s.TERTIARY,iconLeft:M,onClick:()=>alert("submit secondary button")}},o={args:{name:"Send",size:e.MINI,isDisabled:!0,onClick:()=>alert("Can not submit")}};var i,c,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    name: 'Submit',
    size: SIZE.MEDIUM,
    variant: TYPE.PRIMARY,
    onClick: () => alert('submit primary button')
  }
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,d,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    name: 'Submit',
    size: SIZE.MEDIUM,
    variant: TYPE.SECOND,
    onClick: () => alert('submit secondary button')
  }
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var l,b,S;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    name: 'Submit',
    size: SIZE.SMALL,
    variant: TYPE.TERTIARY,
    iconRight: faPen,
    onClick: () => alert('submit Tertiary button')
  }
}`,...(S=(b=n.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var g,E,I;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    name: 'Submit',
    size: SIZE.LARGE,
    variant: TYPE.TERTIARY,
    iconLeft: faPen,
    onClick: () => alert('submit secondary button')
  }
}`,...(I=(E=a.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var R,T,y;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    name: 'Send',
    size: SIZE.MINI,
    isDisabled: true,
    onClick: () => alert('Can not submit')
  }
}`,...(y=(T=o.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};const h=["Primary","Secondary","Tertiary","ButtonLarge","ButtonDisabled"];export{o as ButtonDisabled,a as ButtonLarge,t as Primary,r as Secondary,n as Tertiary,h as __namedExportsOrder,v as default};
