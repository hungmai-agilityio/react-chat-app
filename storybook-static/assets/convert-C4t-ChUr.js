const u=(e,t)=>e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear(),d=e=>{const t=new Date(e),o=u(t,new Date),r=t.getHours().toString().padStart(2,"0"),a=t.getMinutes().toString().padStart(2,"0"),s=t.getDate().toString().padStart(2,"0"),g=(t.getMonth()+1).toString().padStart(2,"0"),c=t.getFullYear();return o?`${r}:${a}`:`${s}.${g}.${c}`},S=e=>new Promise((t,n)=>{const o=new FileReader;o.readAsDataURL(e),o.onload=()=>t(o.result),o.onerror=r=>n(r)});export{S as c,d as t};
