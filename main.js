// al click sull'icona fas fa-bars
// ->hamburger-menu + class="active"
$('.header-right > a .fas.fa-bars').click(
  function () {
    $('.hamburger-menu').addClass('active')
  }
);

// al click sull'icona fas fa-times
//  -> hamburger-menu - class="active"
$('.close').click(
  function () {
    $('.hamburger-menu').removeClass('active')
  }
);
