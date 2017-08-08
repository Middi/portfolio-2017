$(document).ready(function () {


  // ===========================
  // Mobile Nav
  // ===========================

  $('#hamburger').click(function () {
      
        if ($('#menu').hasClass('hidden')) {
            $('.text-content').css({
                'opacity' : '0'
            });
            $('#menu').slideDown( "slow", function() {
                $('#menu').removeClass('hidden');
            });
        }
        else {
            $('#menu').slideUp( "slow", function() {
                $('.text-content').css({
                    'opacity' : '1'
                });
                $('.text-content').show();
                $('#menu').addClass('hidden');
            });
        }
  });



  // ===========================
  // Smooth Scrolling
  // ===========================

    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);

                $('#menu').slideUp( "slow", function() {
                $('#menu').addClass('hidden');
                
                });
                return false;
            }
        }
    });



    // ===========================
    // Parralax Scrolling
    // ===========================

    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();

        var opacity = wScroll /80;

        $('.text-content').css({
            'transform' : 'translate(0px, -' + wScroll /2.4 +'%)'
        });

        $('#hero').css({
            'transform' : 'translate(0px, ' + wScroll /18 +'%)'
        });
        
        if(opacity < 0.9) {
            $('.container-nav').css({
                'background-color' : 'rgba(48, 53, 82, ' + opacity +')'
            });
        }
        else {
             $('.container-nav').css({
                'background-color' : 'rgba(48, 53, 82, 1.0)'
            });
        }
    
    });


    // ===========================
    // Spin Cards On Load
    // ===========================

    setTimeout(function() {
        if($(window).width() > 880){
            $('.card').addClass('spin');
        }
    }, 2000);



    // ===========================
    // Slider
    // ===========================

    // Click Events & CSS 

    var sliderPos = 0;

    $('.left').click(function () {
        if (sliderPos < 0) {
            sliderPos += 137;
            $('.slides').css({
                'margin-left': '' + sliderPos + 'px'
            });
            pos();
        }
        else {
            return false;
        }
    });

    $('.right').click(function () {
        if (sliderPos > -959) {
            sliderPos -= 137;
            $('.slides').css({
                'margin-left': '' + sliderPos + 'px'
            });
            pos();
        }
        else {
            return false;
        }
    });


    // Chevron color changes

    function pos() {
        if (sliderPos >= 0) {
            $('.fa-chevron-left').css({
                'opacity': '0.3'
            });
            $('.fa-chevron-right').css({
                'opacity': '1'
            });
        }

        else if (sliderPos <= -959) {
            $('.fa-chevron-right').css({
                'opacity': '0.3'
            });
            $('.fa-chevron-left').css({
                'opacity': '1'
            });
        }

        else {
            $('.fa-chevron-left').css({
                'opacity': '1'
            });
            $('.fa-chevron-right').css({
                'opacity': '1'
            });
        }
    }
    pos();
});

