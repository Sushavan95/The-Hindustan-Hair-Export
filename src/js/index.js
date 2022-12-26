import '../css/style.css';

// import $ from 'jquery';

// FONT AWESOME
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
// import "@fortawesome/fontawesome-free/js/all.js";
// import "@fortawesome/fontawesome-free/css/all.css";

// import 'flowbite';

 // import Swiper bundle with all modules installed
 import Swiper from 'swiper/bundle';

 // import styles bundle
 import 'swiper/css/bundle';

// JQUERY START
$(document).ready(function () {
  // Search Form
  const searchBtnEl = $('.site-header__btn--search');
  var isSearchFormOpened = false;
  searchBtnEl.on('click', function() {
    if(!isSearchFormOpened) {
      $('.search-form-wrapper').slideDown(300);
      $('html').addClass('overlay--active scroll--disabled');
      isSearchFormOpened = true;
    }
    else {
      $('.search-form-wrapper').slideUp(300);
      $('html').removeClass('overlay--active scroll--disabled');
      isSearchFormOpened = false;
    }
  })

  $("html").click(function (event) {
    if(isSearchFormOpened) {
      if ($(event.target).closest(".search-form-wrapper, .site-header").length === 0) {
        $('.search-form-wrapper').slideUp(300);
        $('html').removeClass('overlay--active scroll--disabled');
        isSearchFormOpened = false;
      }
    }
  });

    //Click event to scroll to top
    $(".btn--scroll-top").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 500);
      return false;
    });

    // Featured Products slider
    var swiperProductsSlider = new Swiper(".swiper--hero-slider", {
      // Optional parameters
      direction: "horizontal",
      loop: true,
      speed: 3000,
      autoplay: {
        delay: 5000,
        pauseOnMouseEnter: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      },
      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderCustom: function (swiper, current, total) {
          var names = [];
          $(".swiper-wrapper .swiper-slide").each(function (i) {
            names.push($(this).data("name"));
          });
          var text = "<ul>";
          for (let i = 1; i <= total; i++) {
            if (current == i) {
              text += `<li class="swiper-pagination-bullet active">${names[i]}</li>`;
            } else {
              text += `<li class="swiper-pagination-bullet">${names[i]}</li>`;
            }
          }
          text += "</ul>";
          return text;
        },
      },
  
      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  // Featured Products slider
  var swiperProductsSlider = new Swiper(".swiper--products-slider", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 12,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 12,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 24,
      }
    },
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderCustom: function (swiper, current, total) {
        var names = [];
        $(".swiper-wrapper .swiper-slide").each(function (i) {
          names.push($(this).data("name"));
        });
        var text = "<ul>";
        for (let i = 1; i <= total; i++) {
          if (current == i) {
            text += `<li class="swiper-pagination-bullet active">${names[i]}</li>`;
          } else {
            text += `<li class="swiper-pagination-bullet">${names[i]}</li>`;
          }
        }
        text += "</ul>";
        return text;
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Product Card Enquiry button
  const productCardEnquiryBtns = $('.product-card__btn--enquiry');
  const enquiryForm = $('.enquiry-form');


  productCardEnquiryBtns.each(function() {
    $(this).on('click', function(e) {
      e.preventDefault();
      var getID = $(this).closest('.product-card').attr('data-id');
      console.log(getID);
  
      var productSelectFieldOptions = enquiryForm.find('.form__input--product-select option');
  
      productSelectFieldOptions.each(function() {
        if($(this).attr('data-id') == getID) {
          $(this).attr('selected', true);
        }
        else {
          $(this).attr('selected', false);
        }
      })
  
    })
    
  })
});
