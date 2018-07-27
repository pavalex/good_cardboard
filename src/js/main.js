$ (document).ready (function () {
  $ ('.header-contacts__button').on ('click', function () {
    $ ('.overlay').fadeIn (500);
  });

  $ ('.popup-close').on ('click', function () {
    $ ('.overlay').fadeOut (500);
  });
  
});
