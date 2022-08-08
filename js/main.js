$(window).on('load', function () {

  $('body').css('overflow', 'auto');

  $('.loading').fadeOut(1000, function () {

    $(this).remove();

  });

});

$(function () {

  // Variable Localstorage
  var mainColors = localStorage.getItem('pageColor');

  // Slider Time
  $('.carousel').carousel({

    interval: 5000

  });


  // Click Gear Open Option Color
  $('.option-box i').click(function () {

    $(this).toggleClass('fa-spin');

    $('.option-box').toggleClass("open");

  });

  // Local Storage Active
  document.documentElement.style.setProperty("--main-color", mainColors);

  // Add Active Class On list Color Local Storage
  $(".option-box ul li").each(function () {

    $(this).removeClass("active");

    if ($(this).data("color") === mainColors) {

        $(this).addClass("active");

    };

});

  // Add Active Class On list Color Click
  $('.option-box ul li').click(function () {

    $(this).addClass('active').siblings().removeClass('active');

    document.documentElement.style.setProperty("--main-color", $(this).data('color'));

    // Set Local Storage
    localStorage.setItem('pageColor', $(this).data('color'));

    console.log(document.documentElement.style.getPropertyValue('--main-color'))

  });


  $(window).scroll(function () {

    if ($(window).scrollTop() >= '700') {

      $('.scroll-top').fadeIn();
  
    } else {

      $('.scroll-top').fadeOut();

    }

  });

  $('.scroll-top').click(function () {

    $('html, body').animate({

      scrollTop: 0

    }, 1000)

  });

});