$(function () {
    // スムーススクロール
    $('a[href^="#"]').click(function () {
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? "html" : href);
        let position = target.offset().top;
        $("html, body").animate({ scrollTop: position }, 800, "swing");
        return false;
    });

    // トップへ戻るボタン
    $(document).ready(function () {
        $('#back-to-top').hide();
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        $('#back-to-top').click(function () {
            $('html, body').animate({ scrollTop: 0 }, 600);
            return false;
        });
    });
    // 実績のスライド
    $(window).scroll(function () {
        $(".achievement_left").each(function () {

            var scroll = $(window).scrollTop();

            var target = $(this).offset().top;

            var windowHeight = $(window).height();

            if (scroll > target - windowHeight + $(this).outerHeight()-400) {
                $(this).addClass("slide-left");
            }
        });
    });

    $(window).scroll(function () {
        $(".achievement_right").each(function () {

            var scroll = $(window).scrollTop();

            var target = $(this).offset().top;

            var windowHeight = $(window).height();

            if (scroll > target - windowHeight + $(this).outerHeight()) {
                // outerHeight()はpaddingを含めた高さを取得する
                $(this).addClass("slide-right");
            }
        });
    });

    // フェードイン
    $(window).scroll(function () {
        $(".fadein").each(function () {
            let scroll = $(window).scrollTop();
            let target = $(this).offset().top;
            let windowHeight = $(window).height();
            if (scroll > target - windowHeight-200) {
                $(this).css("opacity", "1");
                $(this).css("transform", "translateY(0)");
            }
        });
    });
});