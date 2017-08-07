$(document).ready(function () {

    // ===========================
    // Move
    // ===========================

    var sliderpos = 0;
    
    $('.left').click(function () {
        sliderpos += -140;
        $('.slides').css({
            'margin-left' : '' + sliderpos + 'px'
        });
    });

    $('.right').click(function () {
        sliderpos += +140;
        $('.slides').css({
            'margin-left' : '' + sliderpos + 'px'
        });
    });


});

