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

  /* menu */
  $ ('.header-link__burger').on ('click', function () {
    $ ('.menu').fadeIn (500);
  });

  $ ('.menu-close').on ('click', function () {
    $ ('.menu').fadeOut (500);
  });

  /* jquery.maskedinput */
  $ ('.popup-form__input').mask ('+9(999) 999-9999');
  $ ('.form-title__input').mask ('+9(999) 999-9999');
  $ ('.offer-input').mask ('+9(999) 999-9999');

  /* Slick */

  $ ('.main-slider').slick ({
    autoplay: true,
  });

  $ ('.production-slider-top').slick ({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.production-slider-bottom',
    responsive: [
      {
        breakpoint: 576,
        settings: {
          arrows: true,
          prevArrow: '<div class="slider-arrow__mobile slider-arrow__left-mobile"></div>',
          nextArrow: '<div class="slider-arrow__mobile slider-arrow__right-mobile"></div>',
        },
      },
    ],
  });

  $ ('.production-slider-bottom').slick ({
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<div class="slider-arrow slider-arrow__left"></div>',
    nextArrow: '<div class="slider-arrow slider-arrow__right"></div>',
    asNavFor: '.production-slider-top',
  });

  $ ('.feedback-slider').slick ({
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<div class="slider-arrow-feedback slider-arrow-feedback__left"></div>',
    nextArrow: '<div class="slider-arrow-feedback slider-arrow-feedback__right"></div>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          prevArrow: '<div class="slider-arrow__mobile slider-arrow__left-mobile"></div>',
          nextArrow: '<div class="slider-arrow__mobile slider-arrow__right-mobile"></div>',
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: '<div class="slider-arrow__mobile slider-arrow__left-mobile"></div>',
          nextArrow: '<div class="slider-arrow__mobile slider-arrow__right-mobile"></div>',
        },
      },
    ],
  });
});
