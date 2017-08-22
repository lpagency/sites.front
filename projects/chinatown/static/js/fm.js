$(document).ready(function() {
    //abrir carro lateral
    var expanded = false;

    //para ejecutal el menu
    $('#open-cart, #close-cart').click(function(event) {
        event.stopPropagation();
        // Slide down menu if hidden
        if (!expanded) {
            $('.carro-lateral').animate({
                'right': 0
            }, 'fast');
            expanded = true;
            $("body").addClass("noscroll");
        }
        // Slide up menu if shown
        else {
            $('.carro-lateral').animate({
                'right': -$('.carro-lateral').width()
            }, 'fast');
            expanded = false;
            $("body").removeClass("noscroll");
        }
    });
    // $('#carro-home').click(function(event) {
    //     event.stopPropagation();
    // });
    // para cerrar el menu y hacer un reset sobre los niveles del menu
    $(document).click(function() {
        if (expanded && (!$('#carro-home').is(':hover'))) {
            $('.carro-lateral').animate({
                'right': -$('.carro-lateral').width()
            }, 'fast');
            expanded = false;
            $("body").removeClass("noscroll");
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

    $(document).on('click', '.add-to-cart', function () {
        var cart = $('#open-cart');
        var imgtodrag = $(this).parent('.product-limit-image').find("img").eq(0);
        var add_to_cart = $(this).parent(".row-add-to-cart");

        if (imgtodrag) {
            var imgclone = imgtodrag.clone()
                .offset({
                top: imgtodrag.offsetTop,
                left: imgtodrag.offsetLeft
            })
                .css({
                'opacity': '0.5',
                    'position': 'absolute',
                    'height': '150px',
                    'width': '150px',
                    'z-index': '100'
            })
                .appendTo($('body'))
                .animate({
                'top': cart.offset().top + 10,
                    'left': cart.offset().left + 10,
                    'width': 75,
                    'height': 75
            }, 1000, 'easeInOutExpo');
 
            setTimeout(function () {
                // cart.effect("pulsate", {
                //     times: 1
                // }, 200);
                imgtodrag.effect("transfer", { 
                    to: cart, 
                    className: "ui-effects-transfer"
                }, 200);
            }, 300);
 
            imgclone.animate({
                'width': 0,
                'height': 0
            }, function () {
                $(this).detach();
            });
        }
    });

    $("a.open-with-lightbox").fancybox({type: 'iframe', autoResize: true});

    if(!$("table#detalle_pedido").length || $("div#login_invitation").length){
        if (window.top != window.self) {
            window.top.location.reload();
            parent.$.fancybox.close(true);
        }
    }

    $(document).on("click", ".top_search_bar .hide-search-bar", function(){
        console.log("click");
        $(".top_search_bar").animate({
            opacity: 0,
            width: "100%",
            "z-index": 1
        }, function(){
            $(".nav-list.menu-5, .nav-list.menu-5 > li").animate({
                opacity: 1,
                fontSize: "14px",
                "z-index": 2
            } , 300, "linear");
        });
        // $(".fixed-menu-top .top_search_bar").fadeTo("fast", 1, "easeInCubic");
    });


    $(document).on("click", "#toogle_search_bar", function(){
        $(".fixed-menu-top .nav-list.menu-5").animate({
            opacity: 0,
            fontSize: "4px",
            "z-index": 1
        }, 300, "linear", function() {
            $(".fixed-menu-top .top_search_bar").animate({
                opacity: 1,
                width: "100%",
                "z-index": 2
            });
        });
    });

    $(document).on("click", ".nav-list.menu-7 .site_search .search_bar_inputs .hide-search-bar", function(){
        $(".fixed-menu-top .nav-list.menu-7 > .site_search").animate({
            opacity: 0,
            width: "84%",
            "z-index": -1
        }, function(){
            $(".fixed-menu-top .nav-list.menu-7 > .site_search").css("visibility", "hidden");
            $(".fixed-menu-top .nav-list.menu-7 > a").animate({
                opacity: 1,
                fontSize: "30px",
                "z-index": 2
            } , 50, "linear");
            $(".fixed-menu-top .nav-list.menu-7 > li").animate({
                opacity: 1,
                fontSize: "20px",
                "z-index": 2
            } , 50, "linear");
        });
        // $(".fixed-menu-top .top_search_bar").fadeTo("fast", 1, "easeInCubic");
    });

    $(document).on("click", "#toogle_search_bar_movil", function(){
        $(".fixed-menu-top .nav-list.menu-7 > a, .fixed-menu-top .nav-list.menu-7 > li").animate({
            opacity: 0,
            fontSize: "10px",
            "z-index": -1
        }, 100, "linear", function() {
            $(".fixed-menu-top .nav-list.menu-7 > .site_search").animate({
                opacity: 1,
                "z-index": 2
            }).css("visibility", "visible");
        });
    });

    $(document).on("click", ".boto-bus-header-movil", function(){
        $(this).closest("form").submit();
    });

});