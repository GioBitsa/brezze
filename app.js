
const contact = document.getElementById('contact');
const formPage = document.getElementById('form-page')
const close = document.getElementById('close')
const overlayForm = document.getElementById('overlay-form')

contact.addEventListener('click', () => {

  formPage.classList.add('open')

})

close.addEventListener('click', () => {
  formPage.classList.remove('open')
})


// bar

const open = document.getElementById('open')
const close2 = document.getElementById('close2')
const nav = document.querySelector('header ul')

open.addEventListener('click', () => {
    open.classList.add('close');
    close2.classList.add('show');
    nav.classList.add('show');
})

close2.addEventListener('click', () => {
    close2.classList.remove('show');
    open.classList.remove('close');
    nav.classList.remove('show')
})