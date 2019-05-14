/*eslint-env browser*/
var $,
    slideInt = 1, 
    slideNext = 2;/*, count, loop*/

$(document).ready(function () {
    "use strict";
    $('div#1.divs', '.slideShow').fadeIn(1000);
    startSlideShow();
    //PROGRAMMATICALLY GENERATE SLIDE NUMBERS
    var len = $('div.divs', '.slideShow').length, i;
    for (i = 0; i < len; i += 1) {
        $('<a href="#"></a>').text(i + 1).appendTo('#slideNumbers');
    }
    //TAGET FIRST LINK AS DEFAULT.
    $('a', '#slideNumbers').eq(0).addClass('current');
            
}); //END READY

//FUNCTION FOR AUTOPLAY MODE
function startSlideShow() {
    "use strict";
    var count, loop;
    count = $('div.divs', '.slideShow').length;
    loop = setInterval(function () {
        if (slideNext > count) {
            slideNext = 1;
        }
        $('div.divs', '.slideShow').fadeOut(1000);
        $('a', '#slideNumbers').removeClass('current');
        $('div#' + slideNext + '.divs', '.slideShow').fadeIn(1000, function () {
            var currentSlide = $(this).index();
            $('a', '#slideNumbers').eq(currentSlide).addClass('current');
                    
        });
        slideInt = slideNext;
        slideNext = slideNext + 1;
    }, 3000);

}

