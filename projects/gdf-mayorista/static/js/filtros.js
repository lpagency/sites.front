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
                '<div class="'+ nombre +'" style="padding-right:10px;">'+ nombre + '&nbsp(<p class="fa-'+nombre
                +'" onclick="borrar('+"'"+nombre+"'"+')" style="cursor:pointer; float: right;">X)</p></div>';

            var classNombre = "."+nombre;
            var nombre2 = "+"+nombre;

            $(".texto-filtros").html($(".texto-filtros").html() + block);

            window.listaTag.push(nombre2);
            window.config.tag = window.listaTag.toString();

        }
        else
        {
            block = 
                '<div class="'+ nombre +'">'+ value +'&nbsp(<p class="fa-'+nombre
                +'" onclick="borrar('+"'"+nombre+"'"+')" style="cursor:pointer; float: right;">X)</p></div>';

            var classNombre = "."+nombre;
            var nombre2 = "+"+nombre;

            $(".texto-filtros").html($(".texto-filtros").html() + block);

            window.listaTag.push(nombre2);
            window.config.tag = window.listaTag.toString();

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
    }

};

function checkTallas(tag)
{

    $(".filtrar").css("display", "block");
    var nombre = tag;
    var block = "";

    block = 
        '<div class="'+ nombre +'" style="padding-right:10px;">'+ nombre +'&nbsp(<p class="fa-'+nombre
        +'" onclick="borrar('+"'"+nombre+"'"+')" style="cursor:pointer; float: right">X)</p></div>';

        var classNombre = "."+nombre;
        var nombre2 = "+"+nombre;

        $(".texto-filtros").html($(".texto-filtros").html() + block);

        window.listaTag.push(nombre2);
        window.config.tag = window.listaTag.toString();
}

//<---------------END FUNCION CHECK---------------->

//<---------------FUNCION LIMPIAR------------------>

function limpiar()
{

    $(".demo3").css("display", "none");
    $(".movil").css("display", "none");

    $(".texto-filtros").html("");

    window.listaTag = [];

    window.config.tag = window.listaTag;

    $(".categ-tipo").attr('checked', false);
    $(".categ-color").attr('checked', false);

    $('.products').ecommerce('destroy');
    $('.products').ecommerce(config);

    if($(window).width() < 800)
    {

        $(".size-item-click").removeClass("hover2");
        $(".size-item-click").removeClass("hover2");
        $(".size-item-click").removeClass("hover2");
        $(".size-item-click").removeClass("hover2");
        $(".size-item-click").removeClass("hover2");
        $(".size-item-click").removeClass("hover2");

        $(".talla35").attr('onclick',"checkTallas('35'); deshabilitar('35');");
        $(".talla36").attr('onclick',"checkTallas('36'); deshabilitar('36');");
        $(".talla37").attr('onclick',"checkTallas('37'); deshabilitar('37');");
        $(".talla38").attr('onclick',"checkTallas('38'); deshabilitar('38');");
        $(".talla39").attr('onclick',"checkTallas('39'); deshabilitar('39');");
        $(".talla40").attr('onclick',"checkTallas('40'); deshabilitar('40');");
    }
    else
    {
        $(".talla35").removeClass("hover");
        $(".talla36").removeClass("hover");
        $(".talla37").removeClass("hover");
        $(".talla38").removeClass("hover");
        $(".talla39").removeClass("hover");
        $(".talla40").removeClass("hover");

        $(".talla_35").attr('onclick',"checkTallas('35'); deshabilitarDesk('35');");
        $(".talla_36").attr('onclick',"checkTallas('36'); deshabilitarDesk('36');");
        $(".talla_37").attr('onclick',"checkTallas('37'); deshabilitarDesk('37');");
        $(".talla_38").attr('onclick',"checkTallas('38'); deshabilitarDesk('38');");
        $(".talla_39").attr('onclick',"checkTallas('39'); deshabilitarDesk('39');");
        $(".talla_40").attr('onclick',"checkTallas('40'); deshabilitarDesk('40');");
    }
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

//<------------END FUNCION BORRAR------------------>

//<----------------FUNCION FILTAR------------------>

function filtrar()
{

    $('.products').ecommerce('destroy');
    $('.products').ecommerce(window.config);

    $(".demo3").css("display", "none");
    $(".movil").css("display", "none");

};

function deshabilitar(tag)
{
    $(".talla"+tag).attr('onclick','').unbind('click');
    $(".talla"+tag).attr('onclick',"habilitar('"+tag+"')");
    $(".talla"+tag).parent().addClass("hover2");
}

function deshabilitarDesk(tag)
{
    $(".talla_"+tag).attr('onclick','').unbind('click');
    $(".talla"+tag).addClass("hover");
}

function habilitar(tag)
{
    $(".talla"+tag).attr('onclick','').unbind('click');
    $(".talla"+tag).attr('onclick',"checkTallas('"+tag+"'); deshabilitar('"+tag+"')");
    $(".talla"+tag).parent().removeClass("hover2");
    $( "."+tag ).remove();
}