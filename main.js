"use strict";

document.addEventListener('DOMContentLoaded', () => {
const productMenuWrapper = document.querySelector('.product-menu__wrapper'),
      checkbox = document.querySelector('.nav__cb');



const openMenu = (e) => {
    productMenuWrapper.classList.add('open');
    checkbox.checked = true;
}

const closeMenu = (e) => {
    productMenuWrapper.classList.remove('open');
    checkbox.checked = false;
}

if(productMenuWrapper){
    productMenuWrapper.addEventListener('mouseover', e => openMenu(e));
    productMenuWrapper.addEventListener('mouseout', e => closeMenu(e))
}

});

