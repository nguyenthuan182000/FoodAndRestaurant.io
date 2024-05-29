$(document).ready(function () {
    let menuBg = document.querySelector('.header-two .menu-bg')
    let btnCart = document.querySelector('.cart')
    let cartDropdown = document.querySelector('.cart-dropdown')

    if (window.scrollY != 0) {
        menuBg.classList.add('nav-bg');
    }

    window.addEventListener('scroll', (e) => {
        if (window.scrollY == 0) {
            menuBg.classList.remove('nav-bg');
        } else {
            menuBg.classList.add('nav-bg');
        }
    })

    btnCart.addEventListener('click', (e) => {
        cartDropdown.classList.toggle('active-dropdown');
    })

    const btnOpen = document.querySelector('#nav-opn-btn')
    const btnClose = document.querySelector('#nav-cls-btn')
    const menuMobile = document.querySelector('#offcanvas-nav')

    btnOpen.addEventListener('click', (e) => {
        menuMobile.classList.add('open')
    })

    btnClose.addEventListener('click', (e) => {
        menuMobile.classList.remove('open')
    })
});