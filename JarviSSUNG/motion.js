$(document).ready(function(){

    $('.menu_btn>a').on('click', function(){
        $('.menu_bg').show();
        $('.sidebar_menu').animate({
            left:0
        });
    });
    $('.close_btn>a').on('click', function(){
        $('.menu_bg').hide();
        $('.sidebar_menu').animate({
            left: '-' + 50 + '%'
                    });
    });

});
