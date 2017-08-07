$(document).ready(function () {

    // ===========================
    // Move
    // ===========================

    var sliderpos = 0;
    
    $('.left').click(function () {
        sliderpos += 140;
        $('.slides').css({
            'margin-left' : '' + sliderpos + 'px'
        });
        pos();
    });

    $('.right').click(function () {
        sliderpos -= 140;
        $('.slides').css({
            'margin-left' : '' + sliderpos + 'px'
        });
        pos();
    });




    function pos(){
        if(sliderpos >= 0) {
            $('.fa-chevron-left').css({
                'opacity' : '0.3'
            });
            $('.fa-chevron-right').css({
                'opacity' : '1'
            });
            console.log(sliderpos);
        }
        else if(sliderpos <= -980){
            $('.fa-chevron-right').css({
                'opacity' : '0.3'
            });
            $('.fa-chevron-left').css({
                'opacity' : '1'
            });
            console.log(sliderpos);
        }
        else {
            $('.fa-chevron-left').css({
                'opacity' : '1'
            });
            $('.fa-chevron-right').css({
                'opacity' : '1'
            });
            console.log(sliderpos);
        }
    }

    pos();


});

