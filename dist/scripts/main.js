'use strict';

$(document).ready(function() {
  $('.slider__inner').slick({
    nextArrow: '<button type="button" class="slick slick-next"></button>',
    prevArrow: '<button type="button" class="slick slick-prev"></button>',
    infinite: false,
  });

  $('select').styler();
});
