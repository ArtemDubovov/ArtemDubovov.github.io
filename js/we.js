//Изменение стилей в меню main

let main = document.querySelector('.main__menu');
let item = main.querySelectorAll('.main__menu-item');



item.forEach(el => {
  el.onclick = function (){
    main.querySelector('.main__menu-item-active').classList.remove('main__menu-item-active');
    el.classList.add('main__menu-item-active');
    wrapper.querySelector('.we_content-active').classList.remove('we_content-active');
    weItem.el.classList.add('we_content-active');
  }
});

