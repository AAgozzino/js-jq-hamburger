// al click sull'icona fas fa-bars
// ->hamburger-menu + class="active"
$('a .fas.fa-bars').click(
  function () {
    $('.hamburger-menu').addClass('active')
  }
);

// al click sull'icona fas fa-times
//  -> hamburger-menu - class="active"
$('a .fas.fa-times').click(
  function () {
    $('.hamburger-menu').removeClass('active')
  }
);
