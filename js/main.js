$(document).ready(function() {
    $('.gallery__btn[filter]').click(function() {
        if($(this).attr('filter')=='all') {
            if($(this).attr('val')=='off') {
                $('.gallery__btn[filter]').attr('val', 'off');
                $(this).attr('val', 'on');
                $('.gallery__btn[filter]').removeClass('focused');
                $(this).addClass('focused');
                $('.filter > div').show(300);
            }
        } else
        if($(this).attr('val')=='off') {
            $('.gallery__btn[filter]').attr('val', 'off');
            $(this).attr('val', 'on');
            $('.gallery__btn[filter]').removeClass('focused');
            $(this).addClass('focused');
            $('.filter > div').hide(300);
            var filter = $(this).attr('filter');
            $('.filter > div[filter='+filter+']').show(500);
        }
    });
      $('.gallery__btn-more').click(function() {
        $('.cards__more').toggle(500);
        $(this).toggleClass('close');
    });
    $("a.videoLinkModal").click(function (event) {
        event.preventDefault();
        $("#videoOverlay").fadeIn(297, function () {
            $("#videoModal")
                .css("display", "block")
                .animate({ opacity: 1 }, 198);
        });
    });
    $("#videoModal__close, #videoOverlay").click(function () {
        $("#videoModal").animate({ opacity: 0 }, 198, function () {
            $(this).css("display", "none");
            $("#videoOverlay").fadeOut(297);
        });
    });
    $('.blog__slider-inner').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1500
    });
    $('.header__btn-menu').on('click', function(){
        $('.header__menu').slideToggle();
    });
});