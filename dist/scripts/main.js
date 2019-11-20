'use strict';

$(document).ready(function() {
  $('#slider, #sliderNews').slick({
    nextArrow: '<button type="button" class="slick slick-next"></button>',
    prevArrow: '<button type="button" class="slick slick-prev"></button>',
    infinite: false,
  });

  $('#modalBtn').on('click', function() {
    $('#modalInputName').val('');
    $('#modalInputPhone').val('');
  });

  $('#menuBtn').on('click', function() {
    $('#menuList').slideToggle();
  });

  $('#select').styler();
});
