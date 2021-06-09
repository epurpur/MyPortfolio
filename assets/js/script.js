

/**
 * Contact Section
 */

//display data-label when hovering over contact-item (on mouseenter event)
$(".contact-item").mouseenter(function() {
    $("#display-text").css("visibility", "visible");
    $("#display-text").text($(this).attr("data-label"));
});

//remove display when not hovering (on mouseleave event)
$(".contact-item").mouseleave(function() {
    $("#display-text").css("visibility", "hidden");
});