(function($) {
  'use strict';  
    /*---------------------------------
        Preloader JS
    -----------------------------------*/ 
    var prealoaderOption = $(window);
    prealoaderOption.on("load", function () {
        var preloader = jQuery('.spinner');
        var preloaderArea = jQuery('.preloader_area');
        preloader.fadeOut();
        preloaderArea.delay(350).fadeOut('slow');
    });
    /*---------------------------------
        Preloader JS
    -----------------------------------*/

    /*---------------------------------  
        sticky header JS
    -----------------------------------*/
    $(window).on('scroll',function() {    
        var scroll = $(window).scrollTop();
         if (scroll < 106) {
          $(".header_area").removeClass("sticky");
         }else{
          $(".header_area").addClass("sticky");
         }
    }); 
    /*---------------------------------  
        sticky header JS
    -----------------------------------*/
    /*---------------------------------  
        Search JS
    -----------------------------------*/
    $(".search_btn,.close_link").on('click', function(e) {
      e.preventDefault();
      $(".search_wrapper").toggleClass("active");
    });
    /*---------------------
        Sidebar-menu js
    -----------------------*/
    $(".menu_icon,.close_btn").on('click', function (e) {
      e.preventDefault();
      $(".sidenav_menu").toggleClass("active");
    });
    $.sidebarMenu($('.sidebar-menu'))
    /*---------------------- 
        Scroll top js
    ------------------------*/
    $(window).on('scroll', function() {
      if ($(this).scrollTop() > 100) {
          $('#scroll_top').fadeIn();
      } else {
          $('#scroll_top').fadeOut();
      }
    });
    $('#scroll_top').on('click', function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
    /*---------------------- 
        Scroll top js
    ------------------------*/
    /*---------------------- 
        slider js
    ------------------------*/
    $('.testimonial_slide_1').slick({
        dots: true,
        infinite: true,
        arrows: false,
        autoplay:false,
        speed: 400,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1
              }
            }
        ]
    });
    $('.time_slide').slick({
        dots: true,
        infinite: true,
        arrows: false,
        autoplay:false,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    /*---------------------- 
        slider js
    ------------------------*/  
    /*---------------------- 
        magnific-Popup js
    ----------------------*/
    $('.play_btn').magnificPopup({
        type: 'iframe',
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });
    /*---------------------- 
        magnific-Popup js
    ----------------------*/
    /*----------------------
        datepicker js
    ------------------------*/
    $( "#datepicker" ).datepicker();
    /*----------------------
        nice-select js
    ------------------------*/
    $('.selectoption').niceSelect();
    /*----------------------
        Countdown Timer js
    ----------------------*/
    if($('.offer_countdown').length){  
      $('.offer_countdown').each(function() {
      var $this = $(this), finalDate = $(this).data('countdown');
      $this.countdown(finalDate, function(event) {
        var $this = $(this).html(event.strftime('' + '<div class="counter_column"><div class="inner"><span class="count">%D</span>Days</div></div> ' + '<div class="counter_column"><div class="inner"><span class="count">%H</span>Hours</div></div>  ' + '<div class="counter_column"><div class="inner"><span class="count">%M</span>Minutes</div></div>  ' + '<div class="counter_column"><div class="inner"><span class="count">%S</span>Seconds</div></div>'));
      });
     });
    }
    
})(window.jQuery);   