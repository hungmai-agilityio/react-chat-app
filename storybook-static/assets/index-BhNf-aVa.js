import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{c as a}from"./clsx-B-dksMZM.js";const o=({id:r,children:s,isChecked:n,onChange:i})=>{const t=()=>{i(r)};return e.jsxs("div",{id:r,className:a("pl-3 flex items-center gap-4 w-full",{"bg-blue-50":n}),children:[e.jsx("input",{type:"checkbox",checked:n,className:"w-5 h-5 accent-primary",onChange:t}),e.jsx("label",{onClick:t,className:"w-full",children:s})]})};o.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{id:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},isChecked:{required:!0,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}}};export{o as C};