var visibleText = "Show Less";
var hiddenText = "Show More";

$(document).ready(function(){
    $("button").click(function(){
        $(this).toggleClass("visible");
       if$((this).hasClass) {
          $(this).html(hiddenText);
        } else {
          $(this).html(visibleText);
        } $(this).next().toggleClass("visible");
    });
})