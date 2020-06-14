//Изменение стилей в меню main
$(document).ready(function() {
  
  $('ul.main__menu').on('click', 'li:not(.main__menu-item-active)', function() {
    $(this)
      .addClass('main__menu-item-active').siblings().removeClass('main__menu-item-active')
      .closest('div.container').find('div.we__content').removeClass('we_content-active').eq($(this).index()).addClass('we_content-active');
  });
  
});





// item.forEach(el => {
//   el.onclick = function (){
//     main.querySelector('.main__menu-item-active').classList.remove('main__menu-item-active');
//     el.classList.add('main__menu-item-active');
//   }
// });


