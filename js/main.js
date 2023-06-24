// ハンバーガーメニュー
var hamburger = $('.hamburger-menu');

$('.hamburger-button').on('click', function () {
  hamburger.toggleClass('hamburger-menu-active');
})

$(window).on('resize', function () {
  hamburger.removeClass('hamburger-menu-active');
})

$('.hamburger-menu li a').on('click', function () {
  hamburger.removeClass('hamburger-menu-active');
})

//Swiper
new Swiper('.swiper', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  centeredSlides: true,
  breakpoints: {
    768: {
      spaceBetween: 53,
    }
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    formatFractionCurrent: function (n) {
      return ('00' + n).slice(-2);
    },
    formatFractionTotal: function (number) {
      return ('00' + number).slice(-2);
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// アコーディオン
$('.others dt').on('click', function(e) {

  var content = $(e.target).next();
  var icon = $(e.target);

  content.slideToggle();
  icon.toggleClass('open');

});