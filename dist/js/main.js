$(document).ready(function() {

    $('.la-modal .la-btn-modal-close').click(function (e) {
        $('.la-modal').fadeOut('fast', function(){
            $('.la-pano-modal').fadeOut('slow');
        });
    });

    $('.la-btn-refs-active').click(function (e) {
        $('.la-content-refs').fadeIn();
    });

    $('.la-btn-refs-inactive').click(function (e) {
        $('.la-content-refs').fadeOut();
    });

    if($(window).width() > 850)
    {
        $('.la-btn-active-ref').tooltipster({
            theme: 'tooltipster-shadow',
            contentAsHTML: true,
            content: "",
            maxWidth: 400,
            functionBefore: function(instance, helper){

                var data = $(helper.origin).attr('data-ref')
                var title = $(helper.origin).attr('title-ref');
                var number = $(helper.origin).attr('number-ref');

                content = '<div class="la-modal-tooltip"><h1>' + title +'</h1>' + '<p>' + data + '</p>' + '    <span class="la-modal-ref"><i>' + number + '</i></span>' + '</div>';

                instance.content(content);

            }
        });
    }

    else
    {
        $('.la-btn-active-ref').click(function (e) {
            var data = $(this).attr('data-ref');
            var title = $(this).attr('title-ref');
            var number = $(this).attr('number-ref');

            $('.la-modal').find('h1').html(title);
            $('.la-modal').find('p').html(data);
            $('.la-modal').find('span i').html(number);

            $('.la-pano-modal').fadeIn('fast', function(){
                $('.la-modal').fadeIn('slow');
            });
        });
    }

    $('.la-btn-menu-mobile').click(function (e) {
        if($('.la-btn-menu-mobile-close').hasClass('la-hide'))
        {
            $('.la-btn-menu-mobile-open').addClass('la-hide');
            $('.la-btn-menu-mobile-close').removeClass('la-hide');
            $('.la-menu-mobile').fadeIn('fast');
        }
        else
        {
            $('.la-btn-menu-mobile-open').removeClass('la-hide');
            $('.la-btn-menu-mobile-close').addClass('la-hide');
            $('.la-menu-mobile').fadeOut('fast');
        }
    });

    $('.la-menu-mobile a').click(function (e){
        $('.la-btn-menu-mobile-open').removeClass('la-hide');
        $('.la-btn-menu-mobile-close').addClass('la-hide');
        $('.la-menu-mobile').fadeOut('fast');
    });


});