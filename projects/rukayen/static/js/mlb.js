$(document).ready(function() {

 //lightbox registro
    $(document).on("click", ".mlb-register", function() {
        $("#mlb-register-wrapper").fadeIn(100, function() {
            $(".mlb-register-content").addClass("mlb-opacity");
            $(".mlb-register-content").addClass("mlb-top");
        });
    });

    $(document).on("click", "button#mlb-close-register", function() {
        $("#mlb-register-wrapper").fadeOut(100, function() {
            $(".mlb-register-content").removeClass("mlb-opacity");
            $(".mlb-register-content").removeClass("mlb-top");
        });
    });

 //Para animar el carro de compras del home
    var expandedcart = false;

    $(document).on("click", ".mlb-open-cart", function(event) {
    	//el evento del click
    	event.stopPropagation();

    	// Slide down menu if hidden
        if (!expandedcart) {
            $(".mlb-cart-add-products").fadeIn( "slow" );
            expandedcart = true;
        }

 		// Slide up menu if shown
        else {

            $(".mlb-cart-add-products").fadeOut( 100 );

            expandedcart = false;
        }
    });
    
    // $(".mlb-cart-add-products").click(function(event) {
    //     event.stopPropagation();
    // });

    // // para cerrar el carro
    // $(document).click(function() {
    //     if (expandedcart) {
    //         $(".mlb-cart-add-products").fadeOut(100);
    //         expandedcart = false;
    //     }

    // });

    $(document).click(function() 
    {
        if (expandedcart && (!$('.mlb-cart-add-products').is(':hover')) ) {
            $(".mlb-cart-add-products").fadeOut( 100 );
            expandedcart = false;
        }
    });

    //abrir menú lateral movil 
    var expandedmenu = false;

    //para abrir el menú 
    $("#open-mlb-menu-movil").click(function(event) {
        event.stopPropagation();
        // Slide 
        if (!expandedmenu) {
            $(".mlb-menu-movil").animate({
                "left": 0
            }, "fast");
            $("#open-mlb-menu-movil").animate({
                "left": 280
            }, "fast");

            expandedmenu = true;
        }
        // Slide up menu if shown
        else {
            $(".mlb-menu-movil").animate({
                "left": -280
            }, "slow");
            $("#open-mlb-menu-movil").animate({
                "left": 0
            }, "slow");
            expandedmenu = false;
        }
    });
    // $(".mlb-menu-movil").click(function(event) {
    //     event.stopPropagation();
    // });
    // para cerrar el menu movil
    $(document).click(function() {
        if (expandedmenu) {
            $(".mlb-menu-movil").animate({
                "left": -280
            }, "fast");
            $("#open-mlb-menu-movil").animate({
                "left": 0
            }, "fast");
            expandedmenu = false;
        }
    });

    // $('.modal').on('show', function(e) {
    // var modal = $(this);
    // modal.css('margin-top', (modal.outerHeight() / 2) * -1)
    //      .css('margin-left', (modal.outerWidth() / 2) * -1);
    // return this;
    // });

});


