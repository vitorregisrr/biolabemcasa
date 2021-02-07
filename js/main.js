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

    $('[data-toggle="produto-tab"]').click( function(){
        var target = $(this).attr('data-target');
        var screenW = window.innerWidth;

        if(screenW < 1200){
            $('.home-produtos__tab').attr('data-active', false);
            $(target).attr('data-active', true);
            $('.home-produtos__tabs').attr('data-active', true);
        }else{
            $(target).attr('data-active', true);
            $('.home-produtos__tabs').attr('data-active', true);
        }
    })

    scrollTopBtn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });

    window.dispatchEvent(new Event('resize'));

})();