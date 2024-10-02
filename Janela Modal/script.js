const button = document.querySelector('button')
const modal = document.querySelector('dialog')
const closeModal = document.querySelector('dialog button')

button.onclick = function () {
    modal.showModal()
}

closeModal.onclick = function () {
    modal.close()
}