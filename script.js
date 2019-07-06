$(document).ready(function() {

    $('.main_btna, .main_ntn, a[href="#sheldure"]').click(function(){
        $('.overlay').fadeIn(1000);
        $('.modal').slideDown(1000);
    });

    $('.close').click(function() {
        $('.modal').slideUp(1000);
        $('.overlay').fadeOut(1000);
    });
});