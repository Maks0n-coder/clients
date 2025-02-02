/* // Функция добавить контакт
function getContact() {
  const contact = createEl('div', 'modal__contacts-dscr')
  const optionContacts = getSelect(contactsArray)
  const inpContacts = getInput('Введите контакт', 'modal__contacts-inp', 'text')
  const btnDeleteContact = btn('modal__btn-delete', svgDeleteContact)
  modalContacts.prepend(contact)
  contact.append(optionContacts, inpContacts, btnDeleteContact)
  let valContacts = document.querySelectorAll('.modal__contacts-dscr')
  const deleteBtnContact = document.querySelector('.modal__btn-delete').addEventListener('click', () => {
    document.querySelector('.modal__contacts-dscr').remove()
    addBtnContact.removeAttribute('disabled')
  })

  if (valContacts.length > 9) {
    addBtnContact.setAttribute('disabled', true)
  }

  return contact
} */


    // Прелоадер
/*     let tableRowBody = document.querySelectorAll('.table__row-body')
    if (tableRowBody.length !== 0) {
      preloader.style.display  = 'none'
    }

    console.log(tableRowBody); */



