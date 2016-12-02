$(document).ready(function(){

    // Part-2
    
    // Show
    $('#btnShow').on('click', function() {
        $('.display-basic').show();
    });
    
    // Hide
    $('#btnHide').on('click', function() {
        $('.display-basic').hide();
    });
    
    // Toggle
    $('#btnToggle').on('click', function() {
        $('.display-basic').toggle();
    });
    
    // Part-3
    
    // Fade In
    $('#btnFadeIn').on('click', function() {
        $('.display-fade').fadeIn();
    });
    
    // Fade Out
    $('#btnFadeOut').on('click', function() {
        $('.display-fade').fadeOut();
    });
    
    // Fade Toggle
    $('#btnFadeToggle').on('click', function() {
        $('.display-fade').fadeToggle();
    });
    
    // part-4
    
    // Slide Down
    $('#btnSlideDown').on('click', function() {
        $('.display-slide').slideDown(1000);
    });
    
    // Slide Up
    $('#btnSlideUp').on('click', function() {
        $('.display-slide').slideUp(500);
    });
    
    // Slide Toggle
    $('#btnSlideToggle').on('click', function() {
        $('.display-slide').slideToggle();
    });

});