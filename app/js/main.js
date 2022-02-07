$(function () {

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true, // плавный переход
    autoplay: true, // слайдер меняется автоматически
    autoplaySpeed: 2000
    // каждых 2000мс (2 минуты) слайд меняется

  });

  $(".star").rateYo({
    starWidth: "17px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true

  });

});