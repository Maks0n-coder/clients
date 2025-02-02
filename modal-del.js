import { createEl, btn, modalRemove, } from './main.js'

export const modalClientsDel = () => {
  const modal = createEl('div', 'modal', 'modal')
  const modalContainer = createEl('div', 'modal__container', 'modal-container')
  const modalTitleBlock = createEl('div', 'modal__title-block')
  const modalTitle = createEl('h3', 'modal__title')
  const closeBtnX = btn('modal__close-x', '&#10006')
  const modalContent = createEl('div', 'modal__content')
  const modalText = createEl('p', 'deleteText')
  const btnDeleteModal = btn('btn', 'Удалить')
  const modalCloseBtn = btn('btn-canc', 'Отменить')

  modalTitle.textContent = 'Удалить клиента';
  modalText.textContent = 'Вы действительно хотите удалить данного клиента'

  document.body.append(modal)
  modal.append(modalContainer)
  modalContainer.append(closeBtnX, modalTitleBlock, modalTitle, modalContent, btnDeleteModal, modalCloseBtn)
  modalTitleBlock.append(modalTitle)
  modalContent.append(modalText)

  // Закрытие модального окна
  modalCloseBtn.addEventListener('click', () => {
    modalRemove(modal)
  })

  // Закрыть на крестик
  closeBtnX.addEventListener('click', () => {
    modalRemove(modal)
  })
  // Закрыть на кнопкой esc
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modalRemove(modal)
    }
  })
  // Закрыть на кликом вне модального окна
  document.querySelector('#modal .modal__container').addEventListener('click', e => {
    e._isClickWithInModal = true;
  })
  modal.addEventListener('click', e => {
    if (e._isClickWithInModal) return;
    modalRemove(e.currentTarget)
  })

  return { modal, btnDeleteModal }

}






















