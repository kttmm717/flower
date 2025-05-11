window.addEventListener('DOMContentLoaded', () => {
    //アンカーリンクスクロール
    const anchorLinks = document.querySelectorAll("a[href^='#']");
    const anchorLinksArr = Array.prototype.slice.call(anchorLinks);
    const header = document.querySelector('.header');

    anchorLinksArr.forEach(anchorLink => {
        anchorLink.addEventListener('click', e => {
            e.preventDefault();
            const targetId = anchorLink.hash;
            const targetElement = document.querySelector(targetId);
            const targetOffsetTop = window.pageYOffset + targetElement.getBoundingClientRect().top;
            const headerHeight = header.offsetHeight;
            const totalScrollAmount = targetOffsetTop - headerHeight;
            window.scrollTo({ top: totalScrollAmount, behavior: "smooth" });
            hamburger.classList.remove('active');
            navi.classList.remove('active');
        });
    });

    //ハンバーガーメニュー
    const hamburger = document.querySelector('.hamburger');
    const navi = document.querySelector('.navi');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');

        if (hamburger.classList.contains('active')) {
            navi.classList.add('active');
        } else {
            navi.classList.remove('active');
        }
    });
});


//jQuery
$(function () {
    $(window).on('scroll', function () {
        let now_scroll_position = $(window).scrollTop();
        let gallery_position = $('.gallery').offset().top - $(window).height();
        let access_position = $('.access').offset().top - $(window).height();
        let contact_position = $('.contact').offset().top - $(window).height();
 
        //ヘッダー表示
        if (now_scroll_position > 520) {
            $('.header__logo').fadeIn(500);
            $('.hamburger').fadeIn(500);
        } else {
            $('.header__logo').fadeOut(500);
            $('.hamburger').fadeOut(500);
        }

        //アクセスの背景画像表示
        if (now_scroll_position > access_position) {
            if (now_scroll_position < contact_position) {
                $('.bg').fadeIn(500);
            } else {
                $('.bg').fadeOut(500);
            }
        } else {
            $('.bg').fadeOut(500);
        }

        //サイドボタン表示
        if (window.innerWidth > 900) {
            if (now_scroll_position > gallery_position) {
                if (now_scroll_position < access_position) {
                    $('.side__btn').addClass('active');
                } else {
                    $('.side__btn').removeClass('active');
                }
            } else {
                $('.side__btn').removeClass('active');
            }
        }
        

        mv_scale(now_scroll_position)
    });

    //メインビジュアルの拡大縮小
    if (window.innerWidth > 900) {
        function mv_scale(now_scroll_position) {
            $('.mainvisual img').css({ width: (100 / 3 + now_scroll_position / 10) + '%' });
        }
    } else {
        function mv_scale(now_scroll_position) {
            $('.mainvisual img').css({ width: (100 - now_scroll_position / 10) + '%' });
        }
    }

});