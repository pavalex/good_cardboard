new WOW().init();

$(document).ready(function() {
  /* popup */
  $(".header-contacts__button").on("click", function() {
    $(".overlay").fadeIn(500);
  });

  $(".contacts-block__btn").on("click", function() {
    $(".overlay").fadeIn(500);
  });

  $(".btn-send").on("click", function() {
    $(".overlay").fadeIn(500);
  });

  $(".popup-close").on("click", function() {
    $(".overlay").fadeOut(500);
  });

  $(".overlay").click(function() {
    $(document).on("click", function(event) {
      var select = $(".popup");
      if ($(event.target).closest(select).length) return;
      $(".overlay").fadeOut(500);
      $(document).unbind("click");
      event.stopPropagation();
    });
  });

  /* add class */
  function classFunction() {
    if ($("body").width() < 991.98) {
      $(".menu-item").addClass("menu-item-mobile");
    } else {
      $(".menu-item").removeClass("menu-item-mobile");
    }
  }

  classFunction();
  $(window).resize(classFunction);

  /* menu */
  $(".header-link__burger").on("click", function() {
    $(".menu").fadeIn(200);
  });

  $(".menu-close").on("click", function() {
    $(".menu").fadeOut(200);
  });

  $(".menu-item-mobile").on("click", function() {
    $(".menu").fadeOut(200);
  });

  /* jquery.maskedinput */
  $(".popup-form__input").mask("+9(999) 999-9999");
  $(".form-title__input").mask("+9(999) 999-9999");
  $(".offer-input").mask("+9(999) 999-9999");

  /* Slick */

  $(".main-slider").slick({
    arrows: false,
    autoplay: true
  });

  $(".production-slider-top").slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".production-slider-bottom",
    responsive: [
      {
        breakpoint: 576,
        settings: {
          arrows: true,
          prevArrow:
            '<div class="slider-arrow__mobile slider-arrow__left-mobile"></div>',
          nextArrow:
            '<div class="slider-arrow__mobile slider-arrow__right-mobile"></div>'
        }
      }
    ]
  });

  $(".production-slider-bottom").slick({
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    focusOnSelect: true,
    prevArrow: '<div class="slider-arrow slider-arrow__left"></div>',
    nextArrow: '<div class="slider-arrow slider-arrow__right"></div>',
    asNavFor: ".production-slider-top"
  });

  $(".feedback-slider").slick({
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:
      '<div class="slider-arrow-feedback slider-arrow-feedback__left"></div>',
    nextArrow:
      '<div class="slider-arrow-feedback slider-arrow-feedback__right"></div>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          prevArrow:
            '<div class="slider-arrow__mobile slider-arrow__left-mobile"></div>',
          nextArrow:
            '<div class="slider-arrow__mobile slider-arrow__right-mobile"></div>'
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow:
            '<div class="slider-arrow__mobile slider-arrow__left-mobile"></div>',
          nextArrow:
            '<div class="slider-arrow__mobile slider-arrow__right-mobile"></div>'
        }
      }
    ]
  });

  // ajax
  var $form = $("form");

  $form.submit(function(event) {
    event.preventDefault();
    $form.find('[type="submit"]').prop("disabled", true);
    $form.find('[type="submit"]').css("cursor", "progress");
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function() {
      yaCounter49916503.reachGoal("SEND_FORM");
      $form.find("input").val("");
      document.location.href = "thank-you.html";
    });
  });
});

// Яндекс карта
ymaps.ready(function() {
  var myMap = new ymaps.Map(
      "map",
      {
        center: [54.752656, 56.002053],
        zoom: 16,
        scroll: false,
        controls: ["zoomControl", "fullscreenControl"]
      },
      {
        searchControlProvider: "yandex#search"
      }
    ),
    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),
    myPlacemark = new ymaps.Placemark(
      myMap.getCenter(),
      {
        hintContent: "Здесь находится офис",
        balloonContent: "Это наш офис"
      },
      {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: "default#image",
        // Своё изображение иконки метки.
        iconImageHref: "img/map/maps.png",
        // Размеры метки.
        iconImageSize: [64, 64],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-32, -64]
      }
    );

  myMap.geoObjects.add(myPlacemark);

  myMap.behaviors.disable("scrollZoom");
});
