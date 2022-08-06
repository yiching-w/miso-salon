/*  ---------------------------------------------------
    Template Name: Yummy Food Blog
    Description: Yummy Food Blog HTML Template
    Author: Colorlib
    Author URI: http://www.colorlib.com
    Version: 1.0
    Created: Colorlib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");

        $(".categories-filter-section .filter-item ul li").on('click', function () {
            $(".categories-filter-section .filter-item ul li").removeClass('active');
            $(this).addClass('active');
        });
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });


    // Search model
    $('.search-switch').on('click', function () {
        $('.search-model').fadeIn(400);
    });

    $('.search-close-switch').on('click', function () {
        $('.search-model').fadeOut(400, function () {
            $('#search-input').val('');
        });
    });


    /*------------------
        Navigation
    --------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > $(window).height() - 500) {
            $('.header-section').addClass('scrolled');
        }
        else {
            $('.header-section').removeClass('scrolled');
        }
    })

    $('a[data-fancybox="gallery"]').fancybox({
        buttons: ["close"]
    });

    window.addEventListener('load', () => {
        let portfolioContainer = select('.portfolio-container');
        if (portfolioContainer) {
            let portfolioIsotope = new Isotope(portfolioContainer, {
                itemSelector: '.portfolio-item',
            });

            portfolioIsotope.arrange({
                filter: '.filter-all'
            });
        }
    });

    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)
        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener))
            } else {
                selectEl.addEventListener(type, listener)
            }
        }
    }
    $('.floatingButton').on('click',
        function (e) {
            e.preventDefault();
            $(this).toggleClass('open');
            if ($(this).children('.fas').hasClass('fa-plus')) {
                $(this).children('.fas').removeClass('fa-plus');
                $(this).children('.fas').addClass('fa-times');
            } else if ($(this).children('.fas').hasClass('fa-times')) {
                $(this).children('.fas').removeClass('fa-times');
                $(this).children('.fas').addClass('fa-plus');
            }
            $('.floatingMenu').stop().slideToggle();
        }
    );
    $(this).on('click', function (e) {

        var container = $(".floatingButton");
        if (!container.is(e.target) && $('.floatingButtonWrap').has(e.target).length === 0) {
            if (container.hasClass('open')) {
                container.removeClass('open');
            }
            if (container.children('.fas').hasClass('fa-times')) {
                container.children('.fas').removeClass('fa-times');
                container.children('.fas').addClass('fa-plus');
            }
            $('.floatingMenu').hide();
        }

        if (!container.is(e.target) && ($('.floatingMenu').has(e.target).length > 0)) {
            $('.floatingButton').removeClass('open');
            $('.floatingMenu').stop().slideToggle();
        }
    });

    const floatingButtonWrap = $('.floatingButtonWrap');
    $(window).on('scroll', function () {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            $(floatingButtonWrap).css('opacity', '1');
        } else {
            $(floatingButtonWrap).css('opacity', '0');
        }
    });

    const scrollTop = $('.scrollTop');
    $(window).on('scroll', function () {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            $(scrollTop).css('display', 'flex');
        } else {
            $(scrollTop).css('display', 'none');
        }
    });

    $(scrollTop).on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0,
        }, 800);
        return false;
    });

    $('a').on('click', function (e) {
        if (this.hash != '') {
            e.preventDefault()
            const hash = this.hash
            $('html, body').animate({ scrollTop: $(hash).offset().top }, 800)
            $('ul.nav-links').removeClass('active')
        }
    });

    var swiper = new Swiper(".env-swiper", {
        autoplay: false,
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 1,
        autoplay: {
            delay: 2000
        },
        loop: true,
        pagination: false,
        navigation: {
            nextEl: ".env-swiper-button-next",
            prevEl: false,
        },
        breakpoints: {
            769: {
                slidesPerView: 3,
                spaceBetween: 40,
                slidesPerGroup: 3,
            },
            991: {
                slidesPerView: 5,
                spaceBetween: 20,
                slidesPerGroup: 5,
            },
        }
    });

    var video_swiper = new Swiper(".video-swiper", {
        autoplay: false,
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        pagination: false,
        navigation: {
            nextEl: ".video-swiper-button-next",
            prevEl: false,
        },
        breakpoints: {
            578: {
                slidesPerView: 2,
                spaceBetween: 40,
                slidesPerGroup: 2,
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 40,
                slidesPerGroup: 3,
            },
        }
    });

    new WOW().init();

    const videoSlide = document.querySelectorAll('.video-swiper-slide');

    videoSlide.forEach((item, index) => {
        var playPauseBtn = item.querySelector('.playpause');
        var i = playPauseBtn.querySelector('i');
        var player = item.querySelector('video');
        player.onclick = function () {
            if (player.paused) {
                player.play();
                $(i).removeClass('fa-play');
                $(i).addClass('fa-pause');
                $(playPauseBtn).toggleClass('play');
            } else {
                player.pause();
                $(i).removeClass('fa-pause');
                $(i).addClass('fa-play');
                $(playPauseBtn).toggleClass('play');
            }
        };
        playPauseBtn.onclick = function () {
            if (player.paused) {
                player.play();
                $(i).removeClass('fa-play');
                $(i).addClass('fa-pause');
                $(playPauseBtn).toggleClass('play');
            } else {
                player.pause();
                $(i).removeClass('fa-pause');
                $(i).addClass('fa-play');
                $(playPauseBtn).toggleClass('play');
            }
        };
    })

})(jQuery);