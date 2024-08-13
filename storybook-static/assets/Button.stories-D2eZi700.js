import{B as f}from"./index-BWw-Y-iC.js";import{S as t,T as s}from"./enum-DHbXvcqL.js";import{f as C}from"./index-CQUNLK73.js";import"./jsx-runtime-Cw0GR0a5.js";import"./index-CTjT7uj6.js";import"./clsx-B-dksMZM.js";import"./index.es-D6nAsfRb.js";import"./index-BzjuzjN8.js";const h={component:f,tags:["autodocs"],argTypes:{name:{description:"Name button"},size:{description:"Set size optional for Button"},variant:{description:"Set type optional for Button"},onClick:{description:"Handle the event when clicking on the button"},styles:{description:"Add custom css"},disabled:{description:"Set disabled button"},iconLeft:{description:"Render icon left with FontAwesome"},iconRight:{description:"Render icon right with FontAwesome"}}},e={args:{name:"Submit",size:t.MEDIUM,variant:s.PRIMARY,onClick:()=>alert("submit primary button")}},r={args:{name:"Submit",size:t.MEDIUM,variant:s.SECOND,onClick:()=>alert("submit secondary button")}},n={args:{name:"Submit",size:t.SMALL,variant:s.TERTIARY,iconRight:C,onClick:()=>alert("submit Tertiary button")}},a={args:{name:"Submit",size:t.LARGE,variant:s.TERTIARY,iconLeft:C,onClick:()=>alert("submit secondary button")}},o={args:{name:"Send",size:t.MINI,disabled:!0,onClick:()=>alert("Can not submit")}};var i,c,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    name: 'Submit',
    size: SIZE.MEDIUM,
    variant: TYPE.PRIMARY,
    onClick: () => alert('submit primary button')
  }
}`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,d,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
    disabled: true,
    onClick: () => alert('Can not submit')
  }
}`,...(y=(T=o.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};const B=["Primary","Secondary","Tertiary","ButtonLarge","ButtonDisabled"];export{o as ButtonDisabled,a as ButtonLarge,e as Primary,r as Secondary,n as Tertiary,B as __namedExportsOrder,h as default};
