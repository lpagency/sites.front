$(document).ready(function() 
{
    var expanded = false;
    var original_height = $(".ul-filtro").css('height')
    $(".ul-filtro").css('height', 0);

    //para ejecutal el menu
    $(".cover-material, .btn-categories").click(function(event) {

        event.stopPropagation();

        // Slide down menu if hidden
        if (!expanded) {
            $(".ul-filtro").animate({
                "height": original_height
            }, "fast");
            expanded = true;
        }
        // Slide up menu if shown
        else {

            $(".ul-filtro").animate({
                "height": 0
            }, "slow", function() {
                //para hacer un reset sobre los niveles del menú
                $(".nav-container-2").removeClass("show-sub-3");
                $(".nav-container-2").removeClass("show-sub-2");
                $(".has-sub-nav-2").removeClass("active-2");
            });

            expanded = false;
        }
    });


    $("#menu-material-4").click(function(event) {
        event.stopPropagation();
    });


    // para cerrar el menu y hacer un reset sobre los niveles del menu
    $(document).click(function() {
        if (expanded) {
            $(".ul-filtro").animate({
                "height": 0
            }, "slow", function() {
                $(".nav-container-2").removeClass("show-sub-3");
                $(".nav-container-2").removeClass("show-sub-2");
                $(".has-sub-nav-2").removeClass("active-2");
            });
            expanded = false;
        }

    });

    // se agrega clase has-sub-nav-2 para que funcione toda la funcion
    $(".nav-main-2 li:has(ul)").addClass("has-sub-nav-2");
    // se agrega la clase forward para avanzar al primer nivel
    $(".nav-main-2 a").addClass("forward");
    // se quita forward para agregar forward-2 para poder avanzar al segundo nivel
    $(".nav-main-2 ul li ul li a").removeClass("forward");
    // $(".nav-main-2 ul li ul li a").addClass("forward-2");

    // se agrega active para haceer visibles todas las listas y mover el primer nivel hacia la izquierda
    $(".has-sub-nav-2 .forward").click(function() {
        $(this).parent().addClass("active-2");
        $(".nav-container-2").addClass("show-sub-3");
    });
    // se agrega para porder llegar al segundo nivel menú
    $(".has-sub-nav-2 .forward-2").click(function() {
        $(".nav-container-2").addClass("show-sub-2");
    });
    // función para volver del primer nivel
    $(".has-sub-nav-2 .back").click(function() {
        $(".nav-container-2").removeClass("show-sub-3");
        $(".has-sub-nav-2").removeClass("active-2");
    });
    // función para volver del segundo nivel
    $(".has-sub-nav-2 .back-2").click(function() {
        $(".nav-container-2").removeClass("show-sub-2");
    });


});