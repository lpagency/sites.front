$(document).ready(function(){
	var hyper = window.location.search;

    if(/tag=coleccion/.test(hyper)){

        $(".banner_coleccion").css("display", "block");
    }
    if(/tag=zapatos/.test(hyper)){

        $(".banner_zapatos").css("display", "block");
    }

    if(/tag=botines/.test(hyper)){

        $(".banner_botines").css("display", "block");
    }

    if(/tag=botas/.test(hyper)){

        $(".banner_botas").css("display", "block");
    }

    if(/tag=zapatillas/.test(hyper)){

        $(".banner_zapatillas").css("display", "block");
    }

    if(/tag=sandalias/.test(hyper)){

        $(".banner_sandalias").css("display", "block");
    }

    if(/tag=raices/.test(hyper)){

        $(".banner_raices").css("display", "block");
    }

    if(/tag=festival/.test(hyper)){

        $(".banner_festival").css("display", "block");
    }

    if(/tag=estilos/.test(hyper)){

        $(".banner_estilos").css("display", "block");
    }

    if(/tag=nuevo/.test(hyper)){

        $(".banner_nuevo").css("display", "block");
    }

    if(/tag=clasicos/.test(hyper)){

        $(".banner_clasicos").css("display", "block");
    }

    if(/tag=capsula/.test(hyper)){

        $(".banner_capsula").css("display", "block");
    }

    if(/tag=sale/.test(hyper)){

        $(".banner_sale").css("display", "block");
    }
});