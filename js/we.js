//Изменение стилей в меню main
let show = document.querySelectorAll('.we__content');


let showContentOne = document.querySelector('.we__content-1'),
    showContentTwo = document.querySelector('.we__content-2'),
    showContentFree = document.querySelector('.we__content-3'),
    showContentFour = document.querySelector('.we__content-4'),
    showContentFive = document.querySelector('.we__content-5'),
    showContentSix = document.querySelector('.we__content-6'),
    showContentSeven = document.querySelector('.we__content-7'),
    showContentEight = document.querySelector('.we__content-8');


let wrapper = document.querySelectoraAll('.we__wrapper');
let weItem = wrapper.querySelectorAll('.we__content');

let main = document.querySelector('.main__menu');
let item = main.querySelectorAll('.main__menu-item');

item[0].onclick = function() {

    show[0].classList.add('we_content-active');
};

item.forEach(el => {
  el.onclick = function (){
    main.querySelector('.main__menu-item-active').classList.remove('main__menu-item-active');
    el.classList.add('main__menu-item-active');
    wrapper.querySelector('.we_content-active').classList.remove('we_content-active');
    weItem.el.classList.add('we_content-active');
  }
});

weItem.forEach(element => {
    element.classList.toggle('className','main__menu-item-active');
})