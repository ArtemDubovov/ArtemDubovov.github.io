let buttonMenuClose = document.querySelector('.header__litle-menu-back-item-btn');
let buttonMenuOpen = document.querySelector('.header__litle-menu');
let phoneMenu = document.querySelector('.header__litle-menu-back');

// buttonMenuOpen.onclick = function() {
//   phoneMenu.classList.remove('invisible');
//   phoneMenu.classList.add('visible');
//   console.log('1');
// }
// buttonMenuClose.onclick = function() {
//   phoneMenu.classList.add('invisible');
//   phoneMenu.classList.remove('visible');
//   console.log('1');
// }

$('.header__litle-menu').on('click', function() {
    $('.header__litle-menu-back').removeClass('invisible').addClass('visible');
    $('.header__litle-menu-wrapper').fadeIn(5000).addClass('header__litle-menu-wrapper-visible').removeClass('header__litle-menu-wrapper-invisible');
  });
$('.header__litle-menu-back-item-btn').on('click', function() {
    $('.header__litle-menu-back').removeClass('visible').addClass('invisible');
    $('.header__litle-menu-wrapper').removeClass('header__litle-menu-wrapper-visible').addClass('header__litle-menu-wrapper-invisible');
  });