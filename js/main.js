$(document).ready(function () {


  // ===========================
  // Mobile Nav
  // ===========================

  $('#hamburger').click(function () {
    if ($('#menu').hasClass('hidden')) {
         $('#menu').slideDown( "slow", function() {
            $('#menu').removeClass('hidden');
         });
    }
    else {
        $('#menu').slideUp( "slow", function() {
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
    // Slider
    // ===========================

    // Click Events & CSS 

    var sliderPos = 0;

    $('.left').click(function () {
        if (sliderPos < 0) {
            sliderPos += 140;
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
        if (sliderPos > -980) {
            sliderPos -= 140;
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

        else if (sliderPos <= -980) {
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

