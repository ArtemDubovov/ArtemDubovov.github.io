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

$(window).load(function() {
  var images = $('img');
    images.each(function(i) {
      $(this).width($(this).width() / 2);
    });
});


let main2 = document.querySelector('.main__menu');
let item = main2.querySelectorAll('.main__menu-item');

item.forEach(el => {
  el.onclick = function (){
    main2.querySelector('.main__menu-item-active').classList.remove('main__menu-item-active');
    el.classList.add('main__menu-item-active');
  }
});