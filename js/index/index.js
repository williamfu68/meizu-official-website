$(function() {

    // meizu-header-nav li
    $('.meizu-header-nav li').mouseenter(function() {
        // $('.meizu-header-dropdown').css('height', '400px');
        $('.meizu-header-nav li').eq(4).mouseenter(function() {
            $('.meizu-header-dropdown-content').parent().css('backgroundColor', 'transparent');
        })
        $('.meizu-header-nav li').eq(5).mouseenter(function() {
            $('.meizu-header-dropdown-content').parent().css('backgroundColor', 'transparent');
        })
        $('.meizu-header-nav li').eq(6).mouseenter(function() {
            $('.meizu-header-dropdown-content').parent().css('backgroundColor', 'transparent');
        })
        $('.meizu-header-nav li').eq(7).mouseenter(function() {
            $('.meizu-header-dropdown-content').parent().css('backgroundColor', 'transparent');
        })
        $('.meizu-header-nav li').eq(8).mouseenter(function() {
            $('.meizu-header-dropdown-content').parent().css('backgroundColor', 'transparent');
        })
        let $index = $(this).index();
        $('.meizu-header-dropdown-content').stop(true, true).eq($index).css('display', 'block').siblings().css('display', 'none').parents('.meizu-header-dropdown').css('backgroundColor', '#fff');
        $('.meizu-header-dropdown-item').css('opacity', '1');
    })
    $('.meizu-header-nav li').mouseleave(function() {
        let $index = $(this).index();
        // $('.meizu-header-dropdown').css('height', '0');
        $('.meizu-header-dropdown-content').stop(true, true).eq($index).css('display', 'block');
    })

    // meizu-header-dropdown-content
    $('.meizu-header-dropdown-content').mouseleave(function() {
        $(this).css('display', 'none');
    })

    // meizu-header-dropdown-item
    $('.meizu-header-dropdown-item').mouseenter(function() {
        $(this).css('opacity', '1').siblings().css('opacity', '.5');
    })

    // meizu-header-user
    $('.meizu-header-user').mouseenter(function() {
        $('.meizu-header-user-dropdown').css('display', 'block');
        $('.meizu-header-dropdown-content').css('display', 'none');
    })
    $('.meizu-header-img').mouseenter(function() {
        $('.meizu-header-user-dropdown').css('display', 'block');
    })
    $('.meizu-header-user').mouseleave(function() {
        $('.meizu-header-user-dropdown').css('display', 'none');
    })

    // meizu-header-user-dropdown
    $('.meizu-header-user-dropdown').mouseenter(function() {
        $(this).css('display', 'block');
    })
    $('.meizu-header-user-dropdown').mouseleave(function() {
        $(this).css('display', 'none');
    })

    // meizu-header-cart
    $('.meizu-header-cart').mouseenter(function() {
        $('.store-cart').css('display', 'block');
    })
    $('.meizu-header-cart').mouseleave(function() {
        $('.store-cart').css('display', 'none');
    })

    // store-cart
    $('.store-cart').mouseenter(function() {
        $(this).css('display', 'block');
    })
    $('.store-cart').mouseleave(function() {
        $(this).css('display', 'none');
    })

    // meizu-right-info
    $('.meizu-right-info a').mouseenter(function() {
        $(this).children('img').css('display', 'block');
    })
    $('.meizu-right-info a').mouseleave(function() {
        $(this).children('img').css('display', 'none');
    })

    // meizu-footer-button
    $(document).on('scroll', function() {
        if ($(document).scrollTop() > 8700) {
            $('.meizu-footer-button').show();
        } else {
            $('.meizu-footer-button').hide();
        }
    })
    $('.backTop').on('click', function() {
        $(document).scrollTop(0);
    })
})