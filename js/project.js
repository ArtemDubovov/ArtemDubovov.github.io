let main = document.querySelector('.main__menu-project');
let item = main.querySelectorAll('.main__menu-item');

item.forEach(el => {
  el.onclick = function (){
    main.querySelector('.main__menu-item-active').classList.remove('main__menu-item-active');
    el.classList.add('main__menu-item-active');
  }
});
