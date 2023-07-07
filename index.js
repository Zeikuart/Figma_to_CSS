const burgerButton = document.querySelector('.burger')
const navPhone = document.querySelector('.nav-phone')

burgerButton.onclick = function () {
    navPhone.classList.toggle('open')
}