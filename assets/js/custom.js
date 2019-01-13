    var head_body = $("head, body");
    var headerHeight = $("nav").outerHeight();
    var body = $("body");
    var header = $("header");
    var head = $("head");
    var nav = $("#nav");
    var btt = $(".back-to-top");


$(document).ready(function () {
    $('.testimonials').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });
});
$(document).ready(function () {
    $('.about-slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });
});
$('body').scrollspy({target: ".navbar", offset: 90});



$(document).ready(function(){
    //Header Height
    var headerHeight = $(".navbar").outerHeight();
    
    $(".slide-sec").click(function(e){
        var linkIn = $(this).attr('href');
        
        $('html, body').animate({
            scrollTop: $(linkIn).offset().top - headerHeight
        }, 1000);
        
        
        e.preventDefault();
    });
    
});

var scr = $('#about').offset().top;
        $(window).on('scroll', function(){
            var scrolling = $(this).scrollTop();
           if(scrolling > scr){
                nav.addClass('black');
                nav.removeClass('transparent')
                btt.show();
           }
           else{
               nav.removeClass('black'); 
               nav.addClass('transparent');
               btt.hide();
           }
       });
    //For smooth scroll
        $('.slide-sec').on('click', function(e){
            var linkIn = $(this).attr('href');
            head_body.animate({
                scrollTop: $(linkIn).offset().top - headerHeight
            }, 1000);
            e.preventDefault();
        });