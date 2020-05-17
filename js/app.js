$(document).foundation(
  $('.mobile-menu-button').click(function () {
    $('.mobile-menu').addClass('isOpen');
    $('.mobile-menu-button').addClass('hide-button');
    $('.mobile-menu-close').removeClass('hide-button').addClass('show-button');
  }),

  $('.mobile-menu-close').click(function () {
    if ($('.mobile-menu-button.show-button')) {
      $('.mobile-menu-button').removeClass('hide-button');
    } else {
      $('.mobile-menu-button').addClass('show-button');
    }

    $('.mobile-menu-close').removeClass('show-button');
    $('.mobile-menu-close').addClass('hide-button');
    $('.mobile-menu').removeClass('isOpen');
  })
);
