import {
  svgEdit,
  svgDelete,
  svgTel,
  svgVK,
  svgMail,
  svgFB,
  svgOther,
  addClient,
  svgDeleteContact,
} from "./svg.js";
import { modalClientsDel } from "./modal-del.js";

const SERVER_URL =
  "http://localhost:3000"; /* "https://clients-maks0n.amvera.io"; */ /* http://localhost:3000 */

let clients = [];
let contacts = [];

// DOM элементы
const tableBody = document.getElementById("table-body");
const inpFilter = document.getElementById("header-inp");
const idTh = document.getElementById("id-th");
const fioTh = document.getElementById("fio-th");
const сreatedTh = document.getElementById("сreated-th");
const updatedTh = document.getElementById("updated-th");
const preloader = document.getElementById("preloader");

// Функция добавления на сервер
async function serverPost(clients) {
  const response = await fetch(SERVER_URL + "/api/clients", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(clients),
  });
  const data = await response.json();
  return data;
}

// Функция получения с сервера
async function serverGet() {
  try {
    const response = await fetch(SERVER_URL + "/api/clients", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    return data;
  } catch {
    noClients("Ошибка сервера попробуете повторить запрос позже");
  } finally {
    preloader.classList.add("preloader_hide");
  }
}

// Функция получения с сервера id
async function serverGetId(id) {
  const response = await fetch(SERVER_URL + "/api/clients" + id, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  return data;
}

// Функция изменения на сервер
async function serverPatch(id, inpName, inpLastname, inpSurname) {
  const response = await fetch(SERVER_URL + "/api/clients/" + id, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: inpName,
      surname: inpSurname,
      lastName: inpLastname,
      contacts: contacts,
    }),
  });
  const data = await response.json();
  return data;
}

// Функция удаления на сервер
export async function serverDelete(id) {
  const response = await fetch(SERVER_URL + "/api/clients/" + id, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
}

// Нет клиентов

function noClients(text) {
  const noClientsTr = createEl("tr");
  const noClientsTh = createEl("th");
  noClientsTh.colSpan = 6;
  const noClientsText = createEl("p", "no-clients");
  noClientsText.textContent = text;
  tableBody.append(noClientsTr);
  noClientsTr.append(noClientsTh);
  noClientsTh.append(noClientsText);
}

// Дата в нормальном формате
function formatDate(date) {
  let yyyy = date.getFullYear();
  let mm = date.getMonth() + 1;
  let dd = date.getDate();
  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  return dd + "." + mm + "." + yyyy;
}

function formateTime(time) {
  let h = time.getHours();
  let m = time.getMinutes();
  if (h < 10) h = "0" + h;
  if (m < 10) m = "0" + m;
  const spanGrey = document.createElement("span");
  spanGrey.classList.add("table__cell_time");
  spanGrey.textContent = h + ":" + m;
  return spanGrey;
}

// Функция создания одного элемента
export const createEl = (element, classList, id = "") => {
  const el = document.createElement(element);
  el.setAttribute("id", id);
  el.classList.add(classList);
  return el;
};

// Функция создания кнопки
export const btn = (classList, text) => {
  const button = document.createElement("button");
  button.classList.add(classList);
  button.innerHTML = text;
  button.type = "button";
  return button;
};

// Функция создания select
let contactsArray = ["Телефон", "Facebook", "VK", "Email", "Другое"];
function getSelect(optionsArray) {
  const select = document.createElement("select");
  select.classList.add("js-choice");

  for (let i = 0; i < optionsArray.length; i++) {
    let option = document.createElement("option");
    option.textContent = optionsArray[i];
    option.value = optionsArray[i];
    select.append(option);
  }
  return select;
}

// Функция создания input
function getInput(placeholder = "", classList, type) {
  const input = document.createElement("input");
  input.classList.add(classList);
  input.placeholder = placeholder;
  input.type = type;
  return input;
}

// Функция добавить контакт
function getContact() {
  const contact = createEl("div", "modal__contacts-dscr");
  const select = getSelect(contactsArray);
  const inpContacts = getInput(
    "Введите контакт",
    "modal__contacts-inp",
    "text"
  );
  const btnDeleteContact = btn("modal__btn-delete", svgDeleteContact);
  contact.append(select, inpContacts, btnDeleteContact);
  let valContacts = document.querySelectorAll(".modal__contacts-dscr");
  let addBtnContact = document.querySelector(".modal__btn-add");

  if (valContacts.length === 9) {
    addBtnContact.setAttribute("disabled", true);
    /* addBtnContact.style.display = "none" */
  }

  // Кастомизация select
  const choices = new Choices(select, {
    searchEnabled: false,
    itemSelectText: "",
  });

  btnDeleteContact.addEventListener("click", () => {
    document.querySelector(".modal__contacts-dscr").remove();
    if (document.querySelectorAll(".modal__contacts-dscr").length < 10) {
      document.querySelector(".modal__btn-add").removeAttribute("disabled");
      /* addBtnContact.style.display = "block" */
    }
  });

  return { contact, select, inpContacts };
}

// Модальное окно
// Открыть
const modalWindow = (open, close) => {
  const modal = createEl("div", "modal", "modal");
  const modalContainer = createEl("div", "modal__container", "modal-container");
  const modalTitleBlock = createEl("div", "modal__title-block");
  const modalTitle = createEl("h3", "modal__title");
  modalTitle.textContent = "Новый клиент";
  const closeBtnX = btn("modal__close-x", "&#10006");
  const modalContent = createEl("div", "modal__content");
  const modalCloseBtn = btn("btn-canc", "Отменить");

  const addForm = createEl("form", "modal__form", "add-form");
  const labelSurname = createEl("label", "modal__label", "label-surname");
  labelSurname.textContent = "Фамилия";
  const inpSurname = createEl("input", "modal__form-inp", "inp-surname");
  inpSurname.placeholder = "Введите Фамилию*";
  const labelName = createEl("label", "modal__label", "label-name");
  labelName.textContent = "Имя";
  const inpName = createEl("input", "modal__form-inp", "inp-name");
  inpName.placeholder = "Введите Имя*";
  const labelLastname = createEl("label", "modal__label", "label-lastname");
  labelLastname.textContent = "Отчество";
  const inpLastname = createEl("input", "modal__form-inp", "inp-lastname");
  inpLastname.placeholder = "Введите отчество";
  const modalContacts = createEl("div", "modal__contacts");
  const addBtnContact = btn("modal__btn-add", addClient + "Добавить контакт");
  const validation = createEl("div", "validation");
  const addBtn = btn("btn", "Добавить");
  addBtn.type = "submit";

  open(
    modalTitle,
    modalContent,
    modalCloseBtn,
    inpSurname,
    inpName,
    inpLastname,
    modalContacts,
    addBtn,
    addForm
  );

  document.body.append(modal);
  modal.append(modalContainer);
  modalContainer.append(
    closeBtnX,
    modalTitleBlock,
    modalTitle,
    modalContent,
    modalCloseBtn
  );
  modalTitleBlock.append(modalTitle);
  modalContent.append(addForm);
  addForm.append(
    labelSurname,
    inpSurname,
    labelName,
    inpName,
    labelLastname,
    inpLastname,
    modalContacts,
    validation,
    addBtn
  );
  modalContacts.append(addBtnContact);

  // Закрытие модального окна
  modalCloseBtn.addEventListener("click", () => {
    modalRemove(modal);
  });

  // Закрыть на крестик
  closeBtnX.addEventListener("click", () => {
    modalRemove(modal);
  });

  // Закрыть на кнопкой esc
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modalRemove(modal);
    }
  });

  // Закрыть на кликом вне модального окна
  document
    .querySelector("#modal .modal__container")
    .addEventListener("click", (e) => {
      e._isClickWithInModal = true;
    });
  modal.addEventListener("click", (e) => {
    if (e._isClickWithInModal) return;
    modalRemove(e.currentTarget);
  });

  // Кнопка добавить контакт
  addBtnContact.addEventListener("click", () => {
    modalContacts.prepend(getContact().contact);
  });

  if (document.querySelectorAll(".modal__contacts-dscr").length > 8) {
    addBtnContact.setAttribute("disabled", true);
  }

  // Форма добавления нового клиента
  addForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    let valueName = getLowerCase(inpName);
    let valueSurname = getLowerCase(inpSurname);
    let valueLastname = getLowerCase(inpLastname);
    let valContacts = document.querySelectorAll(".modal__contacts-dscr");
    let inpContacts = document.querySelector(".modal__contacts-inp");
    let btn = document.querySelector(".btn");

    // Валидация
    // Флаг ошибки
    let validationError = false;
    // Условия валидации
    surnameError.remove();
    inpSurname.classList.remove("modal__form-inp-error");
    if (valueSurname === "") {
      inpSurname.classList.add("modal__form-inp-error");
      validation.append(surnameError);
      validationError = true;
    }

    nameError.remove();
    inpName.classList.remove("modal__form-inp-error");
    if (valueName === "") {
      inpName.classList.add("modal__form-inp-error");
      validation.append(nameError);
      validationError = true;
    }

    contactsError.remove();
    if (valContacts.length === 0) {
      validationError = true;
      validation.append(contactsError);
    }

    contactsInpError.remove();
    inpContacts.classList.remove("modal__contacts-inp-error");
    if (inpContacts.value === "") {
      inpContacts.classList.add("modal__contacts-inp-error");
      validationError = true;
      validation.append(contactsInpError);
    }

    // Если ошибки есть, завершаем выполнение функции клика
    if (validationError === true) {
      return;
    }

    contacts = [];
    valContacts.forEach((item) => {
      contacts.push({
        type: item.firstChild.firstChild.firstChild.firstChild.value,
        value: item.childNodes[1].value,
      });
    });
    let clientsValue = {
      name: valueName,
      surname: valueSurname,
      lastName: valueLastname,
      contacts: contacts,
    };

    if (btn.textContent === "Добавить") {
      clients.push(await serverPost(clientsValue));
    }

    preloader.classList.remove("preloader_hide");
    modalRemove(modal);
    render(clients);
  });

  return modal;
};

// Плавное удаление модального окна из DOM
export const modalRemove = (el) => {
  el.setAttribute("style", "animation: removeBlock .5s forwards");
  setTimeout(() => el.remove(), 500);
};

// Кнопка добавить клиента
const addBtn = document
  .getElementById("add-btn")
  .addEventListener("click", () => {
    modalWindow((modalTitle, modalContent, modalCloseBtn) => {});
  });

// Создание функции первая буква заглавная
function getLowerCase(inp) {
  return inp.value.trim().toLowerCase();
}

// Создание функции поля ошибки
function getError(text) {
  let validationText = document.createElement("p");
  validationText.classList.add("validation__text");
  validationText.textContent = text;
  return validationText;
}

let nameError = getError("Ошибка: Введите Имя");
let surnameError = getError("Ошибка: Введите Фамилию");
let contactsError = getError("Ошибка: Укажите минимум 1 контакт");
let contactsInpError = getError("Ошибка: Заполните контакт");

// Сортировка
let sortCol = "fio";
let sortDir = true;

function getSort(arr, prop, dir) {
  return arr.sort((a, b) => {
    if (!dir === false ? a[prop] < b[prop] : a[prop] > b[prop]) return -1;
  });
}

idTh.addEventListener("click", () => {
  sortCol = "id";
  sortDir = !sortDir;
  sortDir
    ? (idTh.innerHTML = "id <span> 🡣 </span>")
    : (idTh.innerHTML = "id <span> 🡡 </span>");
  render(clients);
});

fioTh.addEventListener("click", () => {
  sortCol = "fio";
  sortDir = !sortDir;
  sortDir
    ? (fioTh.innerHTML = "Фамилия Имя Отчество <span> 🡣 А-Я </span>")
    : (fioTh.innerHTML = "Фамилия Имя Отчество <span> 🡡 Я-А </span>");
  render(clients);
});

сreatedTh.addEventListener("click", () => {
  sortCol = "createdAt";
  sortDir = !sortDir;
  sortDir
    ? (сreatedTh.innerHTML = "Дата и время создания <span> 🡣 </span>")
    : (сreatedTh.innerHTML = "Дата и время создания <span> 🡡 </span>");
  render(clients);
});

updatedTh.addEventListener("click", () => {
  sortCol = "updatedAt";
  sortDir = !sortDir;
  sortDir
    ? (updatedTh.innerHTML = "Последние изменения <span> 🡣 </span>")
    : (updatedTh.innerHTML = "Последние изменения <span> 🡡 </span>");
  render(clients);
});

// Функция фильтра
function filter(arr, prop, value) {
  return arr.filter(function (student) {
    if (student[prop].includes(value.trim().toLowerCase())) return true;
  });
}

const filterForm = document
  .getElementById("header-form")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    /* render(clients) // Если захочу сделать поиск по нажатию на Enter */
  });

inpFilter.addEventListener("input", () => {
  render(clients);
});

const formClean = document
  .getElementById("form-clean")
  .addEventListener("click", () => {
    inpFilter.value = "";
    render(clients);
  });

// Функция вывода одного пользователя
function getClientItem(clientObj) {
  const tableBodyTr = createEl("tr", "table__row-body");
  const tableId = createEl("td", "table__cell");
  const tableFio = createEl("td", "table__cell");
  tableFio.classList.add("table__fio");
  const tableCreated = createEl("td", "table__cell", "table-created");
  const tableUpdated = createEl("td", "table__cell", "table-updated");
  const tableContacts = createEl("td", "table__cell");
  const tableEdit = createEl("td", "table__cell", "table-edit");
  const createdTime = formateTime(new Date(clientObj.createdAt));
  const updatedTime = formateTime(new Date(clientObj.updatedAt));
  const btnEdit = btn("table__btn-edit", svgEdit + "Изменить");
  const btnBurger = btn("table__btn-hidden", "+0");
  const btnDelete = btn("table__btn-delete", svgDelete + "Удалить");

  tableId.classList.add("table__cell_id");
  tableContacts.classList.add("table__cell_contacts");
  tableContacts.setAttribute("id", clientObj.id);

  tableId.textContent = clientObj.id;
  tableFio.textContent = clientObj.fio;
  tableCreated.textContent = formatDate(new Date(clientObj.createdAt));
  tableUpdated.textContent = formatDate(new Date(clientObj.updatedAt));

  clientObj.contacts.forEach(function (contact, index) {
    let spanContacts = createEl("span", "table__tooltip");
    spanContacts.dataset.tippyContent = `${contact.type}: ${contact.value}`;
    spanContacts.innerHTML = contact.svg;
    tableContacts.append(spanContacts);

    // Бургер
    let count = index;
    btnBurger.append(count);
    btnBurger.textContent = `+${count - 3}`;
    if (index > 3) {
      spanContacts.classList.add("table__cell_contacts-hidden");
      spanContacts.setAttribute("id", clientObj.id);
      tableContacts.append(btnBurger);
    }
  });

  // Бургер
  btnBurger.addEventListener("click", () => {
    let contactsHidden = document.querySelectorAll(
      ".table__cell_contacts-hidden"
    );
    contactsHidden.forEach((hidden) => {
      if (hidden.id === clientObj.id) {
        hidden.classList.remove("table__cell_contacts-hidden");
      }
    });
    btnBurger.remove();
  });

  tableBody.append(tableBodyTr);
  tableBodyTr.append(
    tableId,
    tableFio,
    tableCreated,
    tableUpdated,
    tableContacts,
    tableEdit
  );
  tableCreated.append(createdTime);
  tableUpdated.append(updatedTime);
  tableEdit.append(btnEdit, btnDelete);

  // Кнопка изменить клиента
  btnEdit.addEventListener("click", () => {
    modalWindow(
      (
        modalTitle,
        modalContent,
        modalCloseBtn,
        inpSurname,
        inpName,
        inpLastname,
        modalContacts,
        addBtn,
        addForm
      ) => {
        let spanId = createEl("span", "modal__id");
        spanId.textContent = `ID: ${clientObj.id}`;
        modalTitle.textContent = "Изменить данные";
        modalTitle.append(spanId);
        inpName.value = clientObj.name;
        inpLastname.value = clientObj.lastName;
        inpSurname.value = clientObj.surname;
        for (let contact of clientObj.contacts) {
          let contactEdit = getContact();
          contactEdit.contact.firstChild.firstChild.lastChild.firstChild.textContent =
            contact.type;
          contactEdit.inpContacts.value = contact.value;
          modalContacts.prepend(contactEdit.contact);
        }

        addBtn.textContent = "Сохранить";
        addForm.addEventListener("submit", async (e) => {
          e.preventDefault();

          let contactsTypes = document.querySelectorAll(
            ".choices__list--single"
          );
          let contactsValues = document.querySelectorAll(
            ".modal__contacts-inp"
          );

          contacts = [];

          for (let i = 0; i < contactsTypes.length; i++) {
            contacts.push({
              type: contactsTypes[i].textContent,
              value: contactsValues[i].value,
            });
          }
          await serverPatch(
            clientObj.id,
            inpName.value,
            inpLastname.value,
            inpSurname.value
          );
        });

        modalCloseBtn.textContent = "Удалить клиента";
        modalCloseBtn.addEventListener("click", () => {
          clientsDelApi();
        });
      }
    );
  });

  const clientsDelApi = () => {
    modalClientsDel().btnDeleteModal.addEventListener("click", async () => {
      await serverDelete(clientObj.id);
      tableBodyTr.remove();
      preloader.classList.remove("preloader_hide");
      render(clients);
      modalRemove(modal);
    });
  };

  btnDelete.addEventListener("click", () => {
    clientsDelApi();
  });

  return tableBodyTr;
}

// Рендер
async function render(copyArray) {
  let copyClients = [...copyArray];
  tableBody.innerHTML = "";

  let serverData = await serverGet();

  if (serverData !== "" && serverData !== null) {
    copyClients = serverData.map((client) => {
      client.createdAt = new Date(client.createdAt);
      return client;
    });
    copyClients = serverData.map((client) => {
      client.updatedAt = new Date(client.updatedAt);
      return client;
    });
  }

  for (let client of copyClients) {
    client.fio =
      client.surname.substring(0, 1).toUpperCase() +
      client.surname.substring(1).toLowerCase() +
      " " +
      client.name.substring(0, 1).toUpperCase() +
      client.name.substring(1).toLowerCase() +
      " " +
      client.lastName.substring(0, 1).toUpperCase() +
      client.lastName.substring(1).toLowerCase();
    client.filter =
      client.surname.substring(0).toLowerCase() +
      " " +
      client.name.substring(0).toLowerCase() +
      " " +
      client.lastName.substring(0).toLowerCase();
    for (let contact of client.contacts) {
      if (contact.type === "Телефон") {
        contact.svg = svgTel;
      }
      if (contact.type === "Email") {
        contact.svg = svgMail;
      }
      if (contact.type === "VK") {
        contact.svg = svgVK;
      }
      if (contact.type === "Facebook") {
        contact.svg = svgFB;
      }
      if (contact.type === "Другое") {
        contact.svg = svgOther;
      }
    }
  }

  // Сортировка
  copyClients = getSort(copyClients, sortCol, sortDir);

  // Фильтр

  if (inpFilter.value.trim() !== "") {
    copyClients = filter(copyClients, "filter", inpFilter.value);
  }

  // Отрисовка
  for (let client of copyClients) {
    let newTd = getClientItem(client);
    tableBody.append(newTd);
  }

  tippy("[data-tippy-content]");

  // Прелоадер
  preloader.classList.add("preloader_hide");

  // Отсутсвуют клиенты
  if (copyClients.length === 0) {
    noClients("Клиенты отсутсвуют");
  }

  /*   const tableFio = document.querySelectorAll('.table__fio')
  tableFio.forEach((fio) => {
    console.log(fio.textContent);
  }) */
}

render(clients);
