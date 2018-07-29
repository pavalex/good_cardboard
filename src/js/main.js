$ (document).ready (function () {
  /* popup */
  $ ('.header-contacts__button').on ('click', function () {
    $ ('.overlay').fadeIn (500);
  });

  $ ('.popup-close').on ('click', function () {
    $ ('.overlay').fadeOut (500);
  });

  $ ('.overlay').click (function () {
    $ (document).on ('click', function (event) {
      var select = $ ('.popup');
      if ($ (event.target).closest (select).length) return;
      $ ('.overlay').fadeOut (500);
      $ (document).unbind ('click');
      event.stopPropagation ();
    });
  });

  /* jquery.maskedinput */
  $ ('.popup-form__input').mask ('+9(999) 999-9999');
  $ ('.form-title__input').mask ('+9(999) 999-9999');
});
