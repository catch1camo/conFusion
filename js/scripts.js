$(document).ready(function() {
    $("#indexCarousel").carousel( { interval:2000} );
    // carousel play/pause button script
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass("fa-pause"))
        {
            $("#indexCarousel").carousel("pause");
            $("#carouselButton").children("span").removeClass("fa-pause");
            $("#carouselButton").children("span").addClass("fa-play");
        }
        else 
        {
            $("#indexCarousel").carousel("cycle");
            $("#carouselButton").children("span").removeClass("fa-play");
            $("#carouselButton").children("span").addClass("fa-pause");
        }
    });
    // Reserve Table Button script
    $("#reserveTableButton").click(function() {
        $("#ReservationModal").modal('toggle');
    });
    // Login link Button script
    $("#loginButton").click(function() {
        $("#loginModal").modal('toggle');
    });
})