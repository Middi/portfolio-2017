$(document).ready(function () {

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

