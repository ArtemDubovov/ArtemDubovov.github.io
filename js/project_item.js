$(document).ready(function() {
  
    $('ul.main__menu').on('click', 'li:not(.main__menu-item-active)', function() {
      $(this)
        .addClass('main__menu-item-active').siblings().removeClass('main__menu-item-active')
        .closest('div.container').find('div.main__content').removeClass('main__content-active').eq($(this).index()).addClass('main__content-active');
    });
    
  });