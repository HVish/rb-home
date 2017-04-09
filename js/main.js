$(document).ready(function() {
    const navHeight = $('.top-nav').outerHeight();
    const gradientOffset = (navHeight * 2.0);
    const gradientFactor = 0.8 / gradientOffset;
    const colorFactor = 255.0 / gradientOffset;

    function animateTopBar() {
        var offset = $(window).scrollTop();
        var c = 255 - offset * colorFactor;
        if (offset < gradientOffset) {
            $('.top-nav').css({
                background: "rgba(255, 255, 255, " + (offset * gradientFactor + 0.2) + ")"
            });
            $('.top-nav a').css({
                color: "rgb(" + c + "," + c + "," + c + ")"
            });
        } else {
            $('.top-nav').css({
                background: "rgba(255, 255, 255, 1)"
            });
            $('.top-nav a').css({
                color: "rgb(0,0,0)"
            });
        }
    }
    animateTopBar();
    $(window).scroll(animateTopBar);
});
