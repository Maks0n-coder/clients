import{svgEdit,svgDelete,addClient,svgDeleteContact}from"./js/svg.js";import miniCar from"./img/miniCar.png";import miniCarYear from"./img/miniCarYear.png";import bigCarYear from"./img/bigCarYear.png";import bigCar from"./img/bigCar.png";import telephone from"./img/telephone.png";import"./css/normalize.css";import"./css/style.css";import"./css/media.css";import{modalClientsDel,modalRemove}from"./js/modal-del.js";import{serverPost,serverGet,serverPatch,serverDelete}from"./js/api.js";import{formatDate,formateTime,noClients}from"./js/helperFunc.js";import{createEl,createBtn,createSelect,createInput}from"./js/createFunc.js";const inputTheme=document.querySelector(".inpit-theme");function switchTheme(){document.body.classList.toggle("dark"),localStorage.setItem("theme",document.body.classList.contains("dark")?"dark":"light")}document.body.classList.contains("dark")?inputTheme.checked=!0:inputTheme.checked=!1,document.querySelector(".inpit-theme").addEventListener("click",(function(){switchTheme()}));let clients=[],contacts=[],contactsArray=["Сезон:Лег","Год:Лег","Сезон:Груз","Год:Груз","Телефон"];const tableBody=document.getElementById("table-body"),inpFilter=document.getElementById("header-inp"),idTh=document.getElementById("id-th"),fioTh=document.getElementById("fio-th"),сreatedTh=document.getElementById("сreated-th"),updatedTh=document.getElementById("updated-th"),preloader=document.getElementById("preloader");function addContact(){const e=createEl("div","modal__contacts-dscr"),t=createSelect(contactsArray),n=createInput("Введите номер","modal__contacts-inp","text"),a=createBtn("modal__btn-delete",svgDeleteContact);e.append(t,n,a);let r=document.querySelectorAll(".modal__contacts-dscr"),o=document.querySelector(".modal__btn-add");document.getElementById("add-entry");return 9===r.length&&o.setAttribute("disabled",!0),new Choices(t,{searchEnabled:!1,itemSelectText:""}),a.addEventListener("click",(()=>{document.querySelector(".modal__contacts-dscr").remove(),document.querySelectorAll(".modal__contacts-dscr").length<10&&document.querySelector(".modal__btn-add").removeAttribute("disabled")})),{contact:e,select:t,inpContacts:n}}function exportTableToExcel(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"CNT-pass.xls",n=document.getElementById(e).outerHTML.replace(/<img[^>]*>/g,"");n=n.replace(/ or .*?>/g,">"),n=encodeURIComponent(n);let a=document.createElement("a");a.href=`data:application/vnd.ms-excel, ${n}`,a.download=t,a.click()}document.getElementById("exel").addEventListener("click",(()=>{exportTableToExcel("table")}));const modalWindow=(e,t)=>{const n=createEl("div","modal","modal"),a=createEl("div","modal__container","modal-container"),r=createEl("div","modal__title-block"),o=createEl("h3","modal__title");o.textContent="Новый участник";const l=createBtn("modal__close-x","&#10006"),d=createEl("div","modal__content"),c=createBtn("btn-canc","Отменить"),i=createEl("form","modal__form","add-form"),s=createEl("label","modal__label","label-surname");s.textContent="Фамилия";const m=createEl("input","modal__form-inp","inp-surname");m.placeholder="Введите Фамилию*";const p=createEl("label","modal__label","label-name");p.textContent="Имя";const u=createEl("input","modal__form-inp","inp-name");u.placeholder="Введите Имя*";const _=createEl("label","modal__label","label-lastname");_.textContent="№ участка";const v=createEl("input","modal__form-inp","inp-lastname");v.placeholder="Введите № участка",v.type="number";const E=createEl("div","modal__contacts"),f=createBtn("modal__btn-add",addClient+"Добавить контакт"),b=createEl("div","validation"),g=createBtn("btn","Добавить");return g.id="add-entry",g.type="submit",e(o,d,c,m,u,v,E,g,i),document.body.append(n),n.append(a),a.append(l,r,o,d,c),r.append(o),d.append(i),i.append(s,m,p,u,_,v,E,b,g),E.append(f),c.addEventListener("click",(()=>{modalRemove(n)})),l.addEventListener("click",(()=>{modalRemove(n)})),window.addEventListener("keydown",(e=>{"Escape"===e.key&&modalRemove(n)})),document.querySelector("#modal .modal__container").addEventListener("click",(e=>{e._isClickWithInModal=!0})),n.addEventListener("click",(e=>{e._isClickWithInModal||modalRemove(e.currentTarget)})),f.addEventListener("click",(()=>{E.prepend(addContact().contact)})),i.addEventListener("submit",(async e=>{e.preventDefault();let t=getLowerCase(u),a=getLowerCase(m),r=getLowerCase(v),o=document.querySelectorAll(".modal__contacts-dscr"),l=document.querySelector(".modal__contacts-inp"),d=document.getElementById("add-entry"),c=!1;if(surnameError.remove(),m.classList.remove("modal__form-inp-error"),""===a&&(m.classList.add("modal__form-inp-error"),b.append(surnameError),c=!0),nameError.remove(),u.classList.remove("modal__form-inp-error"),""===t&&(u.classList.add("modal__form-inp-error"),b.append(nameError),c=!0),contactsError.remove(),0===o.length&&(c=!0,b.append(contactsError)),null!==l&&(contactsInpError.remove(),l.classList.remove("modal__contacts-inp-error"),""===l.value&&(l.classList.add("modal__contacts-inp-error"),c=!0,b.append(contactsInpError))),!0===c)return;contacts=[],o.forEach((e=>{contacts.push({type:e.firstChild.firstChild.firstChild.firstChild.value,value:e.childNodes[1].value})}));let i={name:t,surname:a,lastName:r,contacts};"Добавить"===d.textContent&&clients.push(await serverPost(i)),preloader.classList.remove("preloader_hide"),modalRemove(n),render(clients)})),n},addBtn=document.getElementById("add-btn").addEventListener("click",(()=>{modalWindow(((e,t,n)=>{}))}));function getLowerCase(e){return e.value.trim().toLowerCase()}function getError(e){let t=document.createElement("p");return t.classList.add("validation__text"),t.textContent=e,t}let nameError=getError("Ошибка: Введите Имя"),surnameError=getError("Ошибка: Введите Фамилию"),contactsError=getError("Ошибка: Укажите минимум 1 контакт"),contactsInpError=getError("Ошибка: Заполните контакт"),sortCol="fio",sortDir=!0;function getSort(e,t,n){return e.sort(((e,a)=>{if(!1==!n?e[t]<a[t]:e[t]>a[t])return-1}))}function filter(e,t,n){return e.filter((function(e){if(e[t].includes(n.trim().toLowerCase()))return!0}))}idTh.addEventListener("click",(()=>{sortCol="id",sortDir=!sortDir,idTh.innerHTML=sortDir?"id <span> 🡣 </span>":"id <span> 🡡 </span>",render(clients)})),fioTh.addEventListener("click",(()=>{sortCol="fio",sortDir=!sortDir,fioTh.innerHTML=sortDir?"Фамилия Имя (№ участка) <span>🡣</span>":"Фамилия Имя (№ участка) <span>🡡</span>",render(clients)})),сreatedTh.addEventListener("click",(()=>{sortCol="createdAt",sortDir=!sortDir,сreatedTh.innerHTML=sortDir?"Дата и время создания <span> 🡣 </span>":"Дата и время создания <span> 🡡 </span>",render(clients)})),updatedTh.addEventListener("click",(()=>{sortCol="updatedAt",sortDir=!sortDir,updatedTh.innerHTML=sortDir?"Последние изменения <span> 🡣 </span>":"Последние изменения <span> 🡡 </span>",render(clients)}));const filterForm=document.getElementById("header-form").addEventListener("submit",(e=>{e.preventDefault()}));inpFilter.addEventListener("input",(()=>{render(clients)}));const formClean=document.getElementById("form-clean").addEventListener("click",(()=>{inpFilter.value="",render(clients)}));function getClientItem(e){const t=createEl("tr","table__row-body"),n=createEl("td","table__cell"),a=createEl("td","table__cell");a.classList.add("table__fio");const r=createEl("td","table__cell","table-created"),o=createEl("td","table__cell","table-updated"),l=createEl("td","table__cell"),d=createEl("td","table__cell","table-edit"),c=formateTime(new Date(e.createdAt)),i=formateTime(new Date(e.updatedAt)),s=createBtn("table__btn-edit",svgEdit+"Изменить"),m=createBtn("table__btn-hidden","+0"),p=createBtn("table__btn-delete",svgDelete+"Удалить");n.classList.add("table__cell_id"),l.classList.add("table__cell_contacts"),l.setAttribute("id",e.id),n.textContent=e.id,a.textContent=e.fio,r.textContent=formatDate(new Date(e.createdAt)),o.textContent=formatDate(new Date(e.updatedAt)),e.contacts.forEach((function(t,n){let a=createEl("span","table__tooltip"),r=createEl("img","table__img");a.dataset.tippyContent=`${t.type}: ${t.value}`,r.src=t.svg;const o=createEl("span","visually-hidden");o.textContent=`${t.type}: ${t.value}; `,l.append(a,o),a.append(r);let d=n;m.append(d),m.textContent="+"+(d-3),n>3&&(a.classList.add("table__cell_contacts-hidden"),a.setAttribute("id",e.id),l.append(m))})),m.addEventListener("click",(()=>{document.querySelectorAll(".table__cell_contacts-hidden").forEach((t=>{t.id===e.id&&t.classList.remove("table__cell_contacts-hidden")})),m.remove()})),tableBody.append(t),t.append(n,a,r,o,l,d),r.append(c),o.append(i),d.append(s,p),s.addEventListener("click",(()=>{modalWindow(((t,n,a,r,o,l,d,c,i)=>{let s=createEl("span","modal__id");s.textContent=`ID: ${e.id}`,t.textContent="Изменить данные",t.append(s),o.value=e.name,l.value=e.lastName,r.value=e.surname;for(let t of e.contacts){let e=addContact();e.contact.firstChild.firstChild.lastChild.firstChild.textContent=t.type,e.inpContacts.value=t.value,d.prepend(e.contact)}c.textContent="Сохранить",i.addEventListener("submit",(async t=>{t.preventDefault();let n=document.querySelectorAll(".choices__list--single"),a=document.querySelectorAll(".modal__contacts-inp");contacts=[];for(let e=0;e<n.length;e++)contacts.push({type:n[e].textContent,value:a[e].value});await serverPatch(e.id,o.value,l.value,r.value,contacts)})),a.textContent="Удалить участника",a.addEventListener("click",(()=>{u()}))}))}));const u=()=>{modalClientsDel().btnDeleteModal.addEventListener("click",(async()=>{await serverDelete(e.id),t.remove(),preloader.classList.remove("preloader_hide"),render(clients),modalRemove(modal)}))};return p.addEventListener("click",(()=>{u()})),t}async function render(e){let t=[...e];tableBody.innerHTML="";let n=await serverGet();""!==n&&null!==n&&(t=n.map((e=>(e.createdAt=new Date(e.createdAt),e))),t=n.map((e=>(e.updatedAt=new Date(e.updatedAt),e))));for(let e of t){e.fio=e.surname.substring(0,1).toUpperCase()+e.surname.substring(1).toLowerCase()+" "+e.name.substring(0,1).toUpperCase()+e.name.substring(1).toLowerCase()+" "+`(№ ${e.lastName})`,e.filter=e.surname.substring(0).toLowerCase()+" "+e.name.substring(0).toLowerCase()+" "+e.lastName.substring(0).toLowerCase();for(let t of e.contacts)"Сезон:Лег"===t.type&&(t.svg=miniCar),"Год:Лег"===t.type&&(t.svg=miniCarYear),"Сезон:Груз"===t.type&&(t.svg=bigCar),"Год:Груз"===t.type&&(t.svg=bigCarYear),"Телефон"===t.type&&(t.svg=telephone)}t=getSort(t,sortCol,sortDir),""!==inpFilter.value.trim()&&(t=filter(t,"filter",inpFilter.value));for(let e of t){let t=getClientItem(e);tableBody.append(t)}tippy("[data-tippy-content]"),preloader.classList.add("preloader_hide"),0===t.length&&noClients("Участники отсутсвуют")}render(clients);