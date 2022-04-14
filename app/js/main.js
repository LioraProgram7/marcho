$(function () {

  $('.shop__filter-btn').on('click', function () {
    $('.shop__filters').slideToggle();
  });

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.blog-page__slider').slick({
    prevArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 14 14" version="1.1"><g><path d="M 5.621094 7 L 11.007812 2.113281 C 11.488281 1.628906 11.488281 0.847656 11.007812 0.363281 C 10.523438 -0.121094 9.738281 -0.121094 9.253906 0.363281 L 2.988281 6.046875 C 2.726562 6.308594 2.613281 6.660156 2.632812 7 C 2.613281 7.34375 2.726562 7.691406 2.988281 7.953125 L 9.257812 13.640625 C 9.738281 14.121094 10.523438 14.121094 11.007812 13.640625 C 11.492188 13.15625 11.492188 12.371094 11.007812 11.886719 Z M 5.621094 7 "/></g></svg></button>',

    nextArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 14 14" version="1.1"><g> <path d="M 11.011719 6.046875 L 4.746094 0.363281 C 4.261719 -0.121094 3.476562 -0.121094 2.996094 0.363281 C 2.511719 0.847656 2.511719 1.628906 2.996094 2.113281 L 8.382812 7 L 2.996094 11.886719 C 2.511719 12.371094 2.511719 13.15625 2.996094 13.636719 C 3.476562 14.121094 4.261719 14.121094 4.746094 13.636719 L 11.011719 7.953125 C 11.273438 7.691406 11.386719 7.34375 11.367188 7 C 11.386719 6.660156 11.273438 6.308594 11.011719 6.046875 Z M 11.011719 6.046875 "/></g></svg></button>',



    infinite: false,
  });



  $('.product-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');

  });

  // для слайдера 1 продукта
  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
  });
  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true,
    responsive: [{
      breakpoint: 1051,
      settings: {
        draggable: true,
      }
    }, ]
  });

  $('.shop-content__filter-btn').on('click', function () {
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
    $(this).addClass('shop-content__filter-btn--active');
  });

  $('.button-list').on('click', function () {
    $('.product-item').addClass('product-item--list');
    $('.shop-content__inner').addClass('shop-content__nogrid');
  });

  $('.button-grid').on('click', function () {
    $('.product-item').removeClass('product-item--list');
    $('.shop-content__inner').removeClass('shop-content__nogrid');
  });


  $('.select-style, .product-one__num').styler();

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });



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
    readOnly: true,
    starSvg: ' <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height = "16px" viewBox = "0 0 18 16" version = "1.1" > <g id = "surface1" ><path style = " stroke:none;fill-rule:nonzero;fill-opacity:1;"d = "M 11.914062 4.695312 L 16.402344 5.359375 C 16.773438 5.414062 17.085938 5.675781 17.207031 6.035156 C 17.324219 6.398438 17.226562 6.789062 16.960938 7.058594 L 13.703125 10.253906 L 14.472656 14.835938 C 14.535156 15.210938 14.382812 15.589844 14.070312 15.8125 C 13.757812 16.035156 13.351562 16.0625 13.015625 15.882812 L 9.003906 13.742188 L 4.992188 15.882812 C 4.65625 16.0625 4.246094 16.035156 3.9375 15.8125 C 3.628906 15.589844 3.472656 15.210938 3.539062 14.835938 L 4.304688 10.253906 L 1.050781 7.058594 C 0.78125 6.789062 0.683594 6.398438 0.804688 6.035156 C 0.921875 5.675781 1.230469 5.414062 1.605469 5.359375 L 6.09375 4.695312 L 8.105469 0.5625 C 8.273438 0.21875 8.621094 0 9.003906 0 C 9.386719 0 9.738281 0.21875 9.902344 0.5625 Z M 11.914062 4.695312 " / ></g> </svg>'
  });

  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }

  function initializeClock(id, endtime) {
    const clock = document.querySelector('.promo__clock');
    const daysSpan = clock.querySelector('.promo__days');
    const hoursSpan = clock.querySelector('.promo__hours');
    const minutesSpan = clock.querySelector('.promo__minutes');
    const secondsSpan = clock.querySelector('.promo__seconds');

    function updateClock() {
      const t = getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }

  const deadline = $('.promo__clock').attr('data-time');
  initializeClock('promo__clock', deadline);





});