$(document).ready(function(){
    'use strict'

    //featured menu active;
    $('#featured .featured-menu ul li').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

    //banner slider;
    $('.banner-slider').slick({
        prevArrow : '<i class="fas fa-chevron-left slick-prev left-arrow"></i>',
        nextArrow : '<i class="fas fa-chevron-right slick-next right-arrow"></i>'
    });

    //featured filter;
    var mixer = mixitup('.filter');

    //countdown;
    $(function(){
        $('.countdown').countdown({
          year: 2023, // YYYY Format
          month: 1, // 1-12
          day: 1, // 1-31
          hour: 0, // 24 hour format 0-23
          minute: 0, // 0-59
          second: 0, // 0-59
        });
    });

    //latest product slider;
    $('.latest-slider').slick({
        slidesToShow : 4,
        autoplay : true,
        centerPadding : '0px',
        prevArrow : '<i class="fas fa-chevron-left slick-prev left-arrow"></i>',
        nextArrow : '<i class="fas fa-chevron-right slick-next right-arrow"></i>'
    });

    //testimonial slider;
    $('.testimonial-slider').slick({
        slidesToShow : 2,
        centerPadding : '0px',
        prevArrow : '<i class="fas fa-chevron-left slick-prev left-arrow"></i>',
        nextArrow : '<i class="fas fa-chevron-right slick-next right-arrow"></i>'
    });

});