/*eslint-env browser*/
var $;
$(document).ready(function () {
    "use strict";
    $('#description p:not(:first)').hide();
    $('#tabbedMenu li').on('click mouseover', function (e) {
        $('#description p').hide();
        $('#tabbedMenu .current').removeClass('current');
        $(this).addClass('current');
        var clicked = $(this).find('a:first').attr('href');
        $('#description ' + clicked).fadeIn('fast');
        e.preventDefault();
    }).eq(0).addClass('current');

});
