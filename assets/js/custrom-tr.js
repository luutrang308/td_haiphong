$(document).ready(function() {
	new WOW().init();

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.icon_backtotop').fadeIn();
    } else {
      $('.icon_backtotop').fadeOut();
    }
  });
  $('.icon_backtotop').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
  });
  $('.main_menu>li').click(function(event) {
    if ($('.main_menu').hasClass('main_menu_mobi')) {
      $('.main_menu>li').not($(this)).removeClass('active');
      /*$('.menu_pc>li .mega_menu').not($(this).next()).slideUp(300);*/
    }
    $(this).toggleClass('active');
  });

  $('.cate_post > li').click(function(event) {
    if ($('.cate_post').hasClass('cate_post_line')) {
      $('.cate_post > li').not($(this)).removeClass('active');
      /*$('.menu_pc>li .mega_menu').not($(this).next()).slideUp(300);*/
    }
    $(this).toggleClass('active');
  });

  $('.icon_bar').click(function(){
    $('.header_pc .header_page:nth-child(3)').toggleClass('active');
    $(this).toggleClass('active');
  });

  $('.slider_video_hotro').slick({
    dots: false,
    slidesToShow: 4,
    autoplay: true,
    prevArrow: "<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/next2.png' alt=''></button>",
    nextArrow: "<button class='next slick-next'><img class='right-arrow ' src='./assets/img/next1.png' alt=''></button>",
    responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      }
    }
    ]
  });
    
});

