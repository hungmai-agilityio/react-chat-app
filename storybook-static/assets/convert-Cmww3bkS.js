const d=o=>{const t=new Date(o),n=new Date,e=t.getDate()===n.getDate()&&t.getMonth()===n.getMonth()&&t.getFullYear()===n.getFullYear(),r=t.getHours().toString().padStart(2,"0"),a=t.getMinutes().toString().padStart(2,"0"),s=t.getDate().toString().padStart(2,"0"),g=(t.getMonth()+1).toString().padStart(2,"0"),c=t.getFullYear();return e?`${r}:${a}`:`${s}.${g}.${c}`},i=o=>new Promise((t,n)=>{const e=new FileReader;e.readAsDataURL(o),e.onload=()=>t(e.result),e.onerror=r=>n(r)});export{i as c,d as t};
