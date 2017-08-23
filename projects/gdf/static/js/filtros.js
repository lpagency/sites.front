$(document).ready(function()
{
    window.fil = $(".texto-filtros").html();
    window.z = 0;
    var hyper = Utils.getUrlParameter('tag');
    if(hyper == undefined)
    {
        hyper = "";
    }
    else
    {
        hyper = Utils.getUrlParameter('tag').split(',');
    }

    window.listaTag = [];

});




//<-------------------FUNCIONES-------------------->


//<-----------------FUNCION CHECK------------------>

function check(tag, value)
{

    var nombre = tag;
    var block = "";

    if($(".c-"+nombre).is(':checked'))
    {
        if(value == undefined)
        {
            block = 
                '<div class="'+ nombre +'">'+ nombre +'(<i class="fa fa-times fa-'+nombre
                +'" aria-hidden="true" onclick="borrar('+"'"+nombre+"'"+')"></i>)</div>';

            var classNombre = "."+nombre;
            var nombre2 = "+"+nombre;

            $(".texto-filtros").html($(".texto-filtros").html() + block);

            window.listaTag.push(nombre2);
            window.config.tag = window.listaTag.toString();

            $('.products').ecommerce('destroy');
            $('.products').ecommerce(window.config);
        }
        else
        {
            block = 
                '<div class="'+ nombre +'">'+ value +'(<i class="fa fa-times fa-'+nombre
                +'" aria-hidden="true" onclick="borrar('+"'"+nombre+"'"+')"></i>)</div>';

            var classNombre = "."+nombre;
            var nombre2 = "+"+nombre;

            $(".texto-filtros").html($(".texto-filtros").html() + block);

            window.listaTag.push(nombre2);
            window.config.tag = window.listaTag.toString();

            $('.products').ecommerce('destroy');
            $('.products').ecommerce(window.config);
        }
    }
    else
    {
        $( "."+nombre ).remove();
        var nombre2 = "+"+nombre;

        for(x in window.listaTag){
            if(window.listaTag[x] == nombre2){
                window.listaTag.splice(x,1);
                window.config.tag =window.listaTag.toString();
            };
        };

        $('.products').ecommerce('destroy');
        $('.products').ecommerce(window.config);
    }

};

function checkTallas(tag)
{

    var nombre = tag;
    var block = "";

    block = 
        '<div class="'+ nombre +'">'+ nombre +'(<i class="fa fa-times fa-'+nombre
        +'" aria-hidden="true" onclick="borrar('+"'"+nombre+"'"+')"></i>)</div>';

        var classNombre = "."+nombre;
        var nombre2 = "+"+nombre;

        $(".texto-filtros").html($(".texto-filtros").html() + block);

        window.listaTag.push(nombre2);
        window.config.tag = window.listaTag.toString();

        $('.products').ecommerce('destroy');
        $('.products').ecommerce(window.config);
}

//<---------------END FUNCION CHECK---------------->

//<---------------FUNCION LIMPIAR------------------>

function limpiar()
{

    $(".texto-filtros").html("");

    window.listaTag = [];

    window.config.tag = window.listaTag;

    $(".categ-tipo").attr('checked', false);
    $(".categ-color").attr('checked', false);

    $('.products').ecommerce('destroy');
    $('.products').ecommerce(config);
};

//<-------------END FUNCION LIMPIAR---------------->

//<----------------FUNCION BORRAR------------------>

function borrar(nombre)
{

    $( "."+nombre ).remove();
    $( ".c-"+nombre).attr('checked', false);
    var nombre2 = "+"+nombre;

    for(x in window.listaTag){
        if(window.listaTag[x] == nombre2){
            window.listaTag.splice(x,1);
            window.config.tag =window.listaTag.toString();
        };
    };

    $('.products').ecommerce('destroy');
    $('.products').ecommerce(window.config);
};