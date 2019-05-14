/*eslint-env browser*/
var $;
$(document).ready(function () {
    "use strict";
    $("#accordion h2").click(function (evt) {
        $(this).toggleClass("minus");
        if ($(this).attr("class") !== "minus") {
            $(this).next().hide();  
        } else {
            $(this).next().show();  
        }
        evt.preventDefault();
    }); // END CLICK
    $("#accordion").find("a:first").focus();
}); // END READY