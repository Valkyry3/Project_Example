$(document).ready(function(){
    $(".infoBox button").click(function(){
        $(this).next().toggleClass("visible");
    });
})