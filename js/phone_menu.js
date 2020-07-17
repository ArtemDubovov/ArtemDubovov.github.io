let buttonMenuClose = document.querySelector('.header__litle-menu-back-item-btn');
let buttonMenuOpen = document.querySelector('.header__litle-menu');
let phoneMenu = document.querySelector('.header__litle-menu-back');

$('.header__litle-menu').on('click', function() {
    $('.header__litle-menu-back').removeClass('invisible').addClass('visible');
    $('.header__litle-menu-wrapper').fadeIn(5000).addClass('header__litle-menu-wrapper-visible').removeClass('header__litle-menu-wrapper-invisible');
  });
$('.header__litle-menu-back-item-btn').on('click', function() {
    $('.header__litle-menu-back').removeClass('visible').addClass('invisible');
    $('.header__litle-menu-wrapper').removeClass('header__litle-menu-wrapper-visible').addClass('header__litle-menu-wrapper-invisible');
  });

$('.header__litle-menu-back').bind('touchmove', function(e){e.preventDefault()})
$('.header__litle-menu-back').scroll().disable();