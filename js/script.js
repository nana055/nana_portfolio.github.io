$(function () {
    $('.hamburger,.sp-nav li a').on('click', function () {
        $('.sp-nav').fadeToggle();
        $('.hamburger').toggleClass('open');
    });
});

/* index.html */
$(document).ready(function () {
    $('.work-img').slick({
        centerMode: true,
        autoplay: true,
        slidesToShow: 3,
        responsive: [{
            breakpoint: 1000,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});

/* work.html */
$('#all-btn').click(function () {
    $('#web-btn,#banner-btn,#all-btn').removeClass('active');
    $(this).addClass('active');
    $('.web').show();
    $('.banner').show();
});
$('#web-btn').click(function () {
    $('#web-btn,#banner-btn,#all-btn').removeClass('active');
    $(this).addClass('active');
    $('.web').show();
    $('.banner').hide();
});
$('#banner-btn').click(function () {
    $('#web-btn,#banner-btn,#all-btn').removeClass('active');
    $(this).addClass('active');
    $('.web').hide();
    $('.banner').show();
});


/* work1.html */
$(function () {
    var openImgBtn = $('.pc-button');
    var openImgTarget = $('.pc-btn-img');
    var closeImgBtn = $('.pc-close-img');
    openImgBtn.on('click', function () {
        openImgTarget.fadeIn();
        openImgBtn.hide();
    });
    closeImgBtn.on('click', function () {
        openImgBtn.show();
        openImgTarget.hide();
    });
});

$(function () {
    var openImgBtn = $('.sp-button');
    var openImgTarget = $('.sp-btn-img');
    var closeImgBtn = $('.sp-close-img');
    openImgBtn.on('click', function () {
        openImgTarget.fadeIn();
        openImgBtn.hide();
    });
    closeImgBtn.on('click', function () {
        openImgBtn.show();
        openImgTarget.hide();
    });
});


/* html */
setTimeout(function () {
    if (document.getElementsByTagName("html")[0].classList.contains('wf-active') != true) {
        document.getElementsByTagName("html")[0].classList.add('loading-delay');
    }
}, 3000);