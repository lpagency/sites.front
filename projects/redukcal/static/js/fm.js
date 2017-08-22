$(document).ready(function() {
    //abrir carro lateral
    var expanded = false;

    //para ejecutal el menu
    $('#open-cart, #close-cart').click(function(event) 
    {
        event.stopPropagation();
        // Slide down menu if hidden
        if (!expanded) {
            $('.carro-lateral').animate({
                'right': 0
            }, 'fast');
            expanded = true;
        }
        // Slide up menu if shown
        else {
            $('.carro-lateral').animate({
                'right': -405
            }, 'slow');
            expanded = false;
        }
    });
    // $('#carro-home').click(function(event) {
    //     event.stopPropagation();
    // });
    // para cerrar el menu y hacer un reset sobre los niveles del menu
    $(document).click(function() 
    {
        if (expanded && (!$('#carro-home').is(':hover')) ) {
            $('.carro-lateral').animate({
                'right': -405
            }, 'fast');
            expanded = false;
        }
    });
    // abrir carro lateral
    // menús, agregar sombra
    $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 0) {
        $('#fixed-resume-total').addClass('fixed-resume');
        

    } else {
        $('#fixed-resume-total').removeClass('fixed-resume');
        
    }
    //home
    if (scroll >= 450) {
      
        $('.fixed-menu-top').addClass('sombra');
        $('.fixed-menu-2').css('top', '65px');  

    } else {
        
        $('.fixed-menu-top').removeClass('sombra');
        $('.fixed-menu-2').css('top', '25px');
    }
    //otras paginas
    if (scroll >= 50) {
      
        $('#fixed-menu-top-int').addClass('sombra');
        $('.fixed-menu-2').css('top', '65px');

    } else {
        
        $('#fixed-menu-top-int').removeClass('sombra');
        $('.fixed-menu-2').css('top', '25px');
    }
});
});
