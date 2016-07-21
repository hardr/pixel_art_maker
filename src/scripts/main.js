$(document).ready(function() {
  console.log('ready!');
  'use strict';

  function createCanvas(num) {
    var count = num * num;
    for(var i = 0; i < count; i ++) {
      $('.canvas').append('<div class="pixel"></div>');
    }
    var canvasWidth = (parseInt($('.pixel').css('width')) * num) + "px";
    $('.canvas').css('width', canvasWidth)
  };

  createCanvas(50);

  var userColor = 'black';

  $('.color').on('click', function() {
    userColor = $(this).css('background-color');
  });

  $('.pixel').on('click', function(e) {
    $(this).css('background-color', userColor)
  })

});
