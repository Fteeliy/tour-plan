$(document).ready(function () {
  var hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,
    preloadImages: false,
    lazy: true,
    // Keyboard control
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },
    effect: "coverflow",
  });
  var reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,
    autoHeight: true,
    // Keyboard control
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },
  });
  var menuButton = $('.menu-button');
  menuButton.on("click", function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);
  $(document).keyup(closeModal);
  $(".modal__overlay").on("click", closeModal);

  function openModal() {
    var targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
    $('body').css('overflow','hidden');
  }
  function closeModal(event) {
    $('body').css('overflow','auto');
    if (event.key === "Escape" || event.type === 'click') {
      var modalOverlay = $('.modal__overlay');
      var modalDialog = $('.modal__dialog');
      modalOverlay.removeClass('modal__overlay--visible');
      modalDialog.removeClass('modal__dialog--visible');
    }
    event.preventDefault();
    
  }
  // Обработка форм
  $('.form').each(function() {
    $(this).validate({
    errorClass: "invalid",
    messages: {
    name: {
      required: "Please don't forget",
      minlength: "It's must be no less than 2 letters",
    },
    email: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com"
    },
    phone: {
      required: "The phone number is impossible",
      minlength: "The phone number is incorrect",
    },
  }});
  });
  AOS.init();
});