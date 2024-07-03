const openModalBtnElement = document.querySelector('#openModal');
const modalElement = document.querySelector('.modal');
const modalElementContent = modalElement.querySelector('.modal__content');

openModalBtnElement.addEventListener('click', function(){
    modalElement.classList.add('open');
})

modalElementContent.addEventListener('click', function(){
    modalElement.classList.remove('open');
})