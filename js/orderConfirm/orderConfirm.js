$(function() {
    // 我的商城
    $('.store').mouseenter(function() {
        $('.meizu-header-dropdown').css('transform', 'scaleY(1)');
        $(this).children('i').css('transform', 'translateY(2px) rotate(-135deg)');
    })
    $('.store').mouseleave(function() {
        $('.meizu-header-dropdown').css('transform', 'scaleY(0)');
        $(this).children('i').css('transform', 'rotate(45deg)');
    })
    $('.meizu-header-dropdown').mouseenter(function() {
        $(this).css('transform', 'scaleY(1)');
        $('.store i').css('transform', 'translateY(2px) rotate(-135deg)');
    })
    $('.meizu-header-dropdown').mouseleave(function() {
        $(this).css('transform', 'scaleY(0)');
        $('.store i').css('transform', 'rotate(45deg)');
    })

    // 底部信息栏
    $('.meizu-right-info a').mouseenter(function() {
        $(this).children('img').css('display', 'block');
    })
    $('.meizu-right-info a').mouseleave(function() {
        $(this).children('img').css('display', 'none');
    })
})