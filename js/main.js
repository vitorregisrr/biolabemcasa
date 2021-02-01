(function () {
    'use strict';

    //Init Libs
    new WOW().init();
    $('.lazy').lazyload();

    //scroll top
    var scrollTopBtn = $('.scroll-top');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            scrollTopBtn.addClass('show');
        } else {
            scrollTopBtn.removeClass('show');
        }

        if ($(window).scrollTop() > 200) {
            $('#home-banner-more').css("opacity", 1 - $(window).scrollTop() / ($('#home-banner-more').height() + 400) );
        } else {
            $('#home-banner-more').css("opacity", 1);
        }
    });

     //Smooth Scrooling
     $('a[href*=\\#]:not([href$=\\#])').click(function () {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href'))
                .offset()
                .top - 300
        }, 500);
    });

    scrollTopBtn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });

    window.dispatchEvent(new Event('resize'));

})();