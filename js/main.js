$(document).ready(function() {
    const navHeight = $('.top-nav').outerHeight();
    const gradientOffset = (navHeight * 2.0);
    const gradientFactor = 0.8 / gradientOffset;
    const colorFactor = 255.0 / gradientOffset;

    function animateTopBar() {
        var offset = $(window).scrollTop();
        var c = parseInt(255 - offset * colorFactor);
        if (offset < gradientOffset) {
            $('.top-nav').css({
                background: "rgba(255, 255, 255, " + (offset * gradientFactor + 0.2) + ")"
            });
            $('.top-nav .container a, .nav-expand a').css({
                color: "rgb(" + c + "," + c + "," + c + ")"
            });
        } else {
            $('.top-nav').css({
                background: "rgba(255, 255, 255, 1)"
            });
            $('.top-nav .container a, .nav-expand a').css({
                color: "rgb(0,0,0)"
            });
        }
    }
    animateTopBar();
    $(window).scroll(animateTopBar);

    // smooth scroll animation
    $("a:not(.no-scroll)").click(function(e) {
        if (this.hash !== "") {
            e.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });

    // nav toggle
    var navShown = false;
    $(".nav-expand").click(function () {
        if (navShown) {
            navShown = false;
            $('.nav-expand-container').animate({'right': '-250'});
        } else {
            navShown = true;
            $('.nav-expand-container').animate({'right': '0'});
        }
    });
});
