$(document).ready(function() {

    $('#carouselExampleIndicators').carousel({
        pause: "hover",
        wrap: true,
        // transitin_duration: 5000
    })
    $('.f1_container').click(function() {
        $(this).toggleClass('active');
    });
});