import{M as c}from"./index-COYxmSZT.js";import{i as l}from"./index-BrXc1ilD.js";import"./jsx-runtime-Cw0GR0a5.js";import"./index-CTjT7uj6.js";import"./clsx-B-dksMZM.js";import"./enum-DHbXvcqL.js";import"./index-Ya2q_kcw.js";import"./index.es-D6nAsfRb.js";import"./index-BzjuzjN8.js";import"./index-BWw-Y-iC.js";const y={component:c,tags:["autodocs"],argTypes:{isOpen:{description:"Toggle modal (open or close)"},onCloseModal:{description:"Handle close the modal"},title:{description:"Modal title"},btnPrimary:{description:"Button name, shown if you use the button for the event"},icon:{description:"Icon from FontAwesome, shown if you use the icon for the event"},onClick:{description:"Handle event when click (button or icon)"},children:{description:"Render dynamic react node children"},onReturn:{description:"Replace closing the modal with returning to the previous page"},styles:{description:"Add custom css"}}},e={args:{isOpen:!0,onCloseModal:()=>{alert("close modal")},title:"Modal",btnPrimary:"Save",onClick:()=>{alert("Click button")}}},o={args:{isOpen:!0,onReturn:()=>{alert("Return")},title:"Modal Second",icon:l,onClick:()=>{alert("Click icon")}}};var n,t,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onCloseModal: () => {
      alert('close modal');
    },
    title: 'Modal',
    btnPrimary: 'Save',
    onClick: () => {
      alert('Click button');
    }
  }
}`,...(r=(t=e.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};var i,a,s;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onReturn: () => {
      alert('Return');
    },
    title: 'Modal Second',
    icon: faPenAlt,
    onClick: () => {
      alert('Click icon');
    }
  }
}`,...(s=(a=o.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const S=["Primary","Second"];export{e as Primary,o as Second,S as __namedExportsOrder,y as default};
