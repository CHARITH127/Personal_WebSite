$(document).ready(function () {
    $("#menu").click(function () {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load',function () {
        $("#menu").removeClass('fa-times');
        $('header').removeClass('toggle');
    })


    $(window).on('scroll load',function(){

        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if($(window).scrollTop() > 0){
            $('.top').show();
        }else{
            $('.top').hide();
        }

    });

    /*smooth scrolling*/
    $('a[href*="#"]').on('click',function(e){

        e.preventDefault();

        $('html, body').animate({

                scrollTop : $($(this).attr('href')).offset().top,

            },
            500,
            'linear'
        );

    });

});

var typed = new Typed('.typedText',{
    strings:['Fornt end Developer..','Web developer..','Web Designer..','Software Developer..'],
    loop:true,
    typeSpeed:150
})

VanillaTilt.init(document.querySelectorAll('.tilt'),{
    max:25,
    speed:150
})