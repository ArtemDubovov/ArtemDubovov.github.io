
$(document).ready(function(){
    $('.carousel__inner').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false,
      });
  });




let main = document.querySelector('.main__menu');
let item = main.querySelectorAll('.main__menu-item');

item.forEach(el => {
  el.onclick = function (){
    main.querySelector('.main__menu-item-active').classList.remove('main__menu-item-active');
    el.classList.add('main__menu-item-active');
  }
});

