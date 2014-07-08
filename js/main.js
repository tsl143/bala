$(document).ready(function(){
    $('section').height(screen.height-50);
});
$(window).scroll(function(){
    if (isScrolledIntoView($('#phoneContainer'))){ 
        $("#phoneContainer").addClass('slideRight');
        $("#phoneContainer img").removeClass('coverIt');
        $(".textContainer .brick:nth-child(odd)").addClass('flickIt');
        $(".textContainer .brick:nth-child(even)").addClass('flickItRight');
    }
    else{
        $("#phoneContainer").removeClass('slideRight');$("#phoneContainer img").addClass('coverIt');
        $(".textContainer .brick:nth-child(odd)").removeClass('flickIt');
        $(".textContainer .brick:nth-child(even)").removeClass('flickItRight');
        }
    
    
});


function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var elemTop = $(elem).offset().top;
    return (((elemTop-150) <= docViewTop));
}