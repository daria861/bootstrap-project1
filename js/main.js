'use strict';

$(function () {
    $(window).scroll(function () {
        // если пользователь прокрутил страницу более чем на 300px
        if ($(this).scrollTop() > 300) {
            // то сделать кнопку видимой
            $('.scrollToTop').fadeIn();
        }
        // иначе скрыть кнопку scrollToTop
        else {
            $('.scrollToTop').fadeOut();
        }
    });

    $(function () {
        // при нажатии на кнопку
        $('.scrollToTop').click(function () {
            // переместиться в верхнюю часть страницы
            $("html, body").animate({
                scrollTop: 0
            }, 800);
            return false;
        })
    })

    /* Scroll to work */

    $("#our-works").on("click", function (e) {

        e.preventDefault();
        var plansOffset = $(".section-work").offset().top;

        $("html, body").animate({
            scrollTop: plansOffset + 30
        }, 1000);

    });

    /* Scroll to design */

    $("#our-design").on("click", function (e) {

        e.preventDefault();
        var plansOffset = $(".section-design").offset().top;

        $("html, body").animate({
            scrollTop: plansOffset + 30
        }, 900);

    });

});