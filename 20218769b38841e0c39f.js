(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var a=n.getElementsByTagName("script");if(a.length)for(var d=a.length-1;d>-1&&(!t||!/^http(s?):/.test(t));)t=a[d--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <g opacity="0.7" clip-path="url(#clip0_224_718)"> <path d="M2 11.5002V14.0002H4.5L11.8733 6.62687L9.37333 4.12687L2 11.5002ZM13.8067 4.69354C14.0667 4.43354 14.0667 4.01354 13.8067 3.75354L12.2467 2.19354C11.9867 1.93354 11.5667 1.93354 11.3067 2.19354L10.0867 3.41354L12.5867 5.91354L13.8067 4.69354Z"/> </g> <defs> <clipPath id="clip0_224_718"> <rect width="16" height="16" fill="white"/> </clipPath> </defs>                        </svg>',n='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <g opacity="0.7" clip-path="url(#clip0_224_723)"> <path d="M8 2C4.682 2 2 4.682 2 8C2 11.318 4.682 14 8 14C11.318 14 14 11.318 14 8C14 4.682 11.318 2 8 2ZM8 12.8C5.354 12.8 3.2 10.646 3.2 8C3.2 5.354 5.354 3.2 8 3.2C10.646 3.2 12.8 5.354 12.8 8C12.8 10.646 10.646 12.8 8 12.8ZM10.154 5L8 7.154L5.846 5L5 5.846L7.154 8L5 10.154L5.846 11L8 8.846L10.154 11L11 10.154L8.846 8L11 5.846L10.154 5Z" /> </g>                       </svg>',a='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <g opacity="0.7" clip-path="url(#clip0_224_723)"> <path d="M8 2C4.682 2 2 4.682 2 8C2 11.318 4.682 14 8 14C11.318 14 14 11.318 14 8C14 4.682 11.318 2 8 2ZM8 12.8C5.354 12.8 3.2 10.646 3.2 8C3.2 5.354 5.354 3.2 8 3.2C10.646 3.2 12.8 5.354 12.8 8C12.8 10.646 10.646 12.8 8 12.8ZM10.154 5L8 7.154L5.846 5L5 5.846L7.154 8L5 10.154L5.846 11L8 8.846L10.154 11L11 10.154L8.846 8L11 5.846L10.154 5Z" /> </g>                       </svg>',d=e.p+"img/cb9239b2b3b00fdfb910.png",l=e.p+"img/9f59bd43e4505fdda9a3.png",o=e.p+"img/e0ec4144a91d22d7ba5f.png",i=e.p+"img/2e76711126c2a4f609cc.png",c=e.p+"img/be4c18b208fd690a2260.png",s=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";const a=document.createElement(e);return a.setAttribute("id",n),a.classList.add(t),a},r=(e,t)=>{const n=document.createElement("button");return n.classList.add(e),n.innerHTML=t,n.type="button",n};const p=e=>{e.setAttribute("style","animation: removeBlock .5s forwards"),setTimeout((()=>e.remove()),500)},m=()=>{const e=s("div","modal","modal"),t=s("div","modal__container","modal-container"),n=s("div","modal__title-block"),a=s("h3","modal__title"),d=r("modal__close-x","&#10006"),l=s("div","modal__content"),o=s("p","deleteText"),i=r("btn","Удалить"),c=r("btn-canc","Отменить");return a.textContent="Удалить участника",o.textContent="Вы действительно хотите удалить данного участника",document.body.append(e),e.append(t),t.append(d,n,a,l,i,c),n.append(a),l.append(o),c.addEventListener("click",(()=>{p(e)})),d.addEventListener("click",(()=>{p(e)})),window.addEventListener("keydown",(t=>{"Escape"===t.key&&p(e)})),document.querySelector("#modal .modal__container").addEventListener("click",(e=>{e._isClickWithInModal=!0})),e.addEventListener("click",(e=>{e._isClickWithInModal||p(e.currentTarget)})),{modal:e,btnDeleteModal:i}};function u(e){let t=e.getFullYear(),n=e.getMonth()+1,a=e.getDate();return a<10&&(a="0"+a),n<10&&(n="0"+n),a+"."+n+"."+t}function _(e){let t=e.getHours(),n=e.getMinutes();t<10&&(t="0"+t),n<10&&(n="0"+n);const a=document.createElement("span");return a.classList.add("table__cell_time"),a.textContent=t+":"+n,a}function v(e){const t=document.getElementById("table-body"),n=s("tr"),a=s("th");a.colSpan=6;const d=s("p","no-clients");d.textContent=e,t.append(n),n.append(a),a.append(d)}const h="https://clients-maks0n.amvera.io";let g=[],f=[],b=["Сезон:Лег","Год:Лег","Сезон:Груз","Год:Груз","Телефон"];const L=document.getElementById("table-body"),C=document.getElementById("header-inp"),y=document.getElementById("id-th"),w=document.getElementById("fio-th"),E=document.getElementById("сreated-th"),x=document.getElementById("updated-th"),k=document.getElementById("preloader");function M(){const e=s("div","modal__contacts-dscr"),t=function(e){const t=document.createElement("select");t.classList.add("js-choice");for(let n=0;n<e.length;n++){let a=document.createElement("option");a.textContent=e[n],a.value=e[n],t.append(a)}return t}(b),n=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;const a=document.createElement("input");return a.classList.add(t),a.placeholder=e,a.type=n,a}("Введите номер","modal__contacts-inp","text"),d=r("modal__btn-delete",a);e.append(t,n,d);let l=document.querySelectorAll(".modal__contacts-dscr"),o=document.querySelector(".modal__btn-add");document.getElementById("add-entry");return 9===l.length&&o.setAttribute("disabled",!0),new Choices(t,{searchEnabled:!1,itemSelectText:""}),d.addEventListener("click",(()=>{document.querySelector(".modal__contacts-dscr").remove(),document.querySelectorAll(".modal__contacts-dscr").length<10&&document.querySelector(".modal__btn-add").removeAttribute("disabled")})),{contact:e,select:t,inpContacts:n}}document.getElementById("exel").addEventListener("click",(()=>{!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"CNT-pass.xls",n=document.getElementById(e).outerHTML.replace(/<img[^>]*>/g,"");n=n.replace(/ or .*?>/g,">"),n=encodeURIComponent(n);let a=document.createElement("a");a.href=`data:application/vnd.ms-excel, ${n}`,a.download=t,a.click()}("table")}));const A=(e,t)=>{const n=s("div","modal","modal"),a=s("div","modal__container","modal-container"),d=s("div","modal__title-block"),l=s("h3","modal__title");l.textContent="Новый участник";const o=r("modal__close-x","&#10006"),i=s("div","modal__content"),c=r("btn-canc","Отменить"),m=s("form","modal__form","add-form"),u=s("label","modal__label","label-surname");u.textContent="Фамилия";const _=s("input","modal__form-inp","inp-surname");_.placeholder="Введите Фамилию*";const v=s("label","modal__label","label-name");v.textContent="Имя";const b=s("input","modal__form-inp","inp-name");b.placeholder="Введите Имя*";const L=s("label","modal__label","label-lastname");L.textContent="№ участка";const C=s("input","modal__form-inp","inp-lastname");C.placeholder="Введите № участка",C.type="number";const y=s("div","modal__contacts"),w=r("modal__btn-add",'<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M6.99998 3.66668C6.63331 3.66668 6.33331 3.96668 6.33331 4.33334V6.33334H4.33331C3.96665 6.33334 3.66665 6.63334 3.66665 7.00001C3.66665 7.36668 3.96665 7.66668 4.33331 7.66668H6.33331V9.66668C6.33331 10.0333 6.63331 10.3333 6.99998 10.3333C7.36665 10.3333 7.66665 10.0333 7.66665 9.66668V7.66668H9.66665C10.0333 7.66668 10.3333 7.36668 10.3333 7.00001C10.3333 6.63334 10.0333 6.33334 9.66665 6.33334H7.66665V4.33334C7.66665 3.96668 7.36665 3.66668 6.99998 3.66668ZM6.99998 0.333344C3.31998 0.333344 0.333313 3.32001 0.333313 7.00001C0.333313 10.68 3.31998 13.6667 6.99998 13.6667C10.68 13.6667 13.6666 10.68 13.6666 7.00001C13.6666 3.32001 10.68 0.333344 6.99998 0.333344ZM6.99998 12.3333C4.05998 12.3333 1.66665 9.94001 1.66665 7.00001C1.66665 4.06001 4.05998 1.66668 6.99998 1.66668C9.93998 1.66668 12.3333 4.06001 12.3333 7.00001C12.3333 9.94001 9.93998 12.3333 6.99998 12.3333Z" />                          </svg>Добавить контакт'),E=s("div","validation"),x=r("btn","Добавить");return x.id="add-entry",x.type="submit",e(l,i,c,_,b,C,y,x,m),document.body.append(n),n.append(a),a.append(o,d,l,i,c),d.append(l),i.append(m),m.append(u,_,v,b,L,C,y,E,x),y.append(w),c.addEventListener("click",(()=>{p(n)})),o.addEventListener("click",(()=>{p(n)})),window.addEventListener("keydown",(e=>{"Escape"===e.key&&p(n)})),document.querySelector("#modal .modal__container").addEventListener("click",(e=>{e._isClickWithInModal=!0})),n.addEventListener("click",(e=>{e._isClickWithInModal||p(e.currentTarget)})),w.addEventListener("click",(()=>{y.prepend(M().contact)})),m.addEventListener("submit",(async e=>{e.preventDefault();let t=T(b),a=T(_),d=T(C),l=document.querySelectorAll(".modal__contacts-dscr"),o=document.querySelector(".modal__contacts-inp"),i=document.getElementById("add-entry"),c=!1;if(S.remove(),_.classList.remove("modal__form-inp-error"),""===a&&(_.classList.add("modal__form-inp-error"),E.append(S),c=!0),I.remove(),b.classList.remove("modal__form-inp-error"),""===t&&(b.classList.add("modal__form-inp-error"),E.append(I),c=!0),D.remove(),0===l.length&&(c=!0,E.append(D)),null!==o&&(H.remove(),o.classList.remove("modal__contacts-inp-error"),""===o.value&&(o.classList.add("modal__contacts-inp-error"),c=!0,E.append(H))),!0===c)return;f=[],l.forEach((e=>{f.push({type:e.firstChild.firstChild.firstChild.firstChild.value,value:e.childNodes[1].value})}));let s={name:t,surname:a,lastName:d,contacts:f};"Добавить"===i.textContent&&g.push(await async function(e){const t=await fetch(h+"/api/clients",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});return await t.json()}(s)),k.classList.remove("preloader_hide"),p(n),N(g)})),n};document.getElementById("add-btn").addEventListener("click",(()=>{A(((e,t,n)=>{}))}));function T(e){return e.value.trim().toLowerCase()}function B(e){let t=document.createElement("p");return t.classList.add("validation__text"),t.textContent=e,t}let I=B("Ошибка: Введите Имя"),S=B("Ошибка: Введите Фамилию"),D=B("Ошибка: Укажите минимум 1 контакт"),H=B("Ошибка: Заполните контакт"),q="fio",Z=!0;y.addEventListener("click",(()=>{q="id",Z=!Z,y.innerHTML=Z?"id <span> 🡣 </span>":"id <span> 🡡 </span>",N(g)})),w.addEventListener("click",(()=>{q="fio",Z=!Z,w.innerHTML=Z?"Фамилия Имя (№ участка) <span>🡣</span>":"Фамилия Имя (№ участка) <span>🡡</span>",N(g)})),E.addEventListener("click",(()=>{q="createdAt",Z=!Z,E.innerHTML=Z?"Дата и время создания <span> 🡣 </span>":"Дата и время создания <span> 🡡 </span>",N(g)})),x.addEventListener("click",(()=>{q="updatedAt",Z=!Z,x.innerHTML=Z?"Последние изменения <span> 🡣 </span>":"Последние изменения <span> 🡡 </span>",N(g)}));document.getElementById("header-form").addEventListener("submit",(e=>{e.preventDefault()}));C.addEventListener("input",(()=>{N(g)}));document.getElementById("form-clean").addEventListener("click",(()=>{C.value="",N(g)}));function j(e){const a=s("tr","table__row-body"),d=s("td","table__cell"),l=s("td","table__cell");l.classList.add("table__fio");const o=s("td","table__cell","table-created"),i=s("td","table__cell","table-updated"),c=s("td","table__cell"),v=s("td","table__cell","table-edit"),b=_(new Date(e.createdAt)),C=_(new Date(e.updatedAt)),y=r("table__btn-edit",t+"Изменить"),w=r("table__btn-hidden","+0"),E=r("table__btn-delete",n+"Удалить");d.classList.add("table__cell_id"),c.classList.add("table__cell_contacts"),c.setAttribute("id",e.id),d.textContent=e.id,l.textContent=e.fio,o.textContent=u(new Date(e.createdAt)),i.textContent=u(new Date(e.updatedAt)),e.contacts.forEach((function(t,n){let a=s("span","table__tooltip"),d=s("img","table__img");a.dataset.tippyContent=`${t.type}: ${t.value}`,d.src=t.svg;const l=s("span","visually-hidden");l.textContent=`${t.type}: ${t.value}; `,c.append(a,l),a.append(d);let o=n;w.append(o),w.textContent="+"+(o-3),n>3&&(a.classList.add("table__cell_contacts-hidden"),a.setAttribute("id",e.id),c.append(w))})),w.addEventListener("click",(()=>{document.querySelectorAll(".table__cell_contacts-hidden").forEach((t=>{t.id===e.id&&t.classList.remove("table__cell_contacts-hidden")})),w.remove()})),L.append(a),a.append(d,l,o,i,c,v),o.append(b),i.append(C),v.append(y,E),y.addEventListener("click",(()=>{A(((t,n,a,d,l,o,i,c,r)=>{let p=s("span","modal__id");p.textContent=`ID: ${e.id}`,t.textContent="Изменить данные",t.append(p),l.value=e.name,o.value=e.lastName,d.value=e.surname;for(let t of e.contacts){let e=M();e.contact.firstChild.firstChild.lastChild.firstChild.textContent=t.type,e.inpContacts.value=t.value,i.prepend(e.contact)}c.textContent="Сохранить",r.addEventListener("submit",(async t=>{t.preventDefault();let n=document.querySelectorAll(".choices__list--single"),a=document.querySelectorAll(".modal__contacts-inp");f=[];for(let e=0;e<n.length;e++)f.push({type:n[e].textContent,value:a[e].value});await async function(e,t,n,a,d){const l=await fetch(h+"/api/clients/"+e,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t,surname:a,lastName:n,contacts:d})});return await l.json()}(e.id,l.value,o.value,d.value,f)})),a.textContent="Удалить участника",a.addEventListener("click",(()=>{x()}))}))}));const x=()=>{m().btnDeleteModal.addEventListener("click",(async()=>{await async function(e){const t=await fetch(h+"/api/clients/"+e,{method:"DELETE"});return await t.json()}(e.id),a.remove(),k.classList.remove("preloader_hide"),N(g),p(modal)}))};return E.addEventListener("click",(()=>{x()})),a}async function N(e){let t=[...e];L.innerHTML="";let n=await async function(){try{const e=await fetch(h+"/api/clients",{method:"GET",headers:{"Content-Type":"application/json"}});return await e.json()}catch{v("Ошибка сервера попробуете повторить запрос позже")}finally{preloader.classList.add("preloader_hide")}}();""!==n&&null!==n&&(t=n.map((e=>(e.createdAt=new Date(e.createdAt),e))),t=n.map((e=>(e.updatedAt=new Date(e.updatedAt),e))));for(let e of t){e.fio=e.surname.substring(0,1).toUpperCase()+e.surname.substring(1).toLowerCase()+" "+e.name.substring(0,1).toUpperCase()+e.name.substring(1).toLowerCase()+" "+`(№ ${e.lastName})`,e.filter=e.surname.substring(0).toLowerCase()+" "+e.name.substring(0).toLowerCase()+" "+e.lastName.substring(0).toLowerCase();for(let t of e.contacts)"Сезон:Лег"===t.type&&(t.svg=d),"Год:Лег"===t.type&&(t.svg=l),"Сезон:Груз"===t.type&&(t.svg=i),"Год:Груз"===t.type&&(t.svg=o),"Телефон"===t.type&&(t.svg=c)}var a,s;a=q,s=Z,t=t.sort(((e,t)=>{if(0==!s?e[a]<t[a]:e[a]>t[a])return-1})),""!==C.value.trim()&&(t=function(e,t,n){return e.filter((function(e){if(e[t].includes(n.trim().toLowerCase()))return!0}))}(t,"filter",C.value));for(let e of t){let t=j(e);L.append(t)}tippy("[data-tippy-content]"),k.classList.add("preloader_hide"),0===t.length&&v("Участники отсутсвуют")}N(g)})();
//# sourceMappingURL=20218769b38841e0c39f.js.map