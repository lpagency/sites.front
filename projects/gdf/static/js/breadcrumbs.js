$(document).ready(function(){

    var hyper = Utils.getUrlParameter('tag');

    if(hyper == "coleccion")
    {
        $(".nombre-tag").html("Colección 2017");
    }
    if(hyper == "raices")
    {
        $(".nombre-tag").html("Raices 2017");
    }
    if(hyper == "festival")
    {
        $(".nombre-tag").html("Festival PV 2017");
    }
    if(hyper == "clasicos")
    {
        $(".nombre-tag").html("Clasicos 2.0");
    }
    if(hyper == "capsula")
    {
        $(".nombre-tag").html("Capsula Metálica");
    }
    if(hyper == "estilos")
    {
        $(".nombre-tag").html("Estilos");
    }
    if(hyper == "botines")
    {
        $(".nombre-tag").html("Botines");
    }
    if(hyper == "botas")
    {
        $(".nombre-tag").html("Botas");
    }
    if(hyper == "zapatos")
    {
        $(".nombre-tag").html("Zapatos");
    }
    if(hyper == "zapatillas")
    {
        $(".nombre-tag").html("Zapatillas");
    }
    if(hyper == "sandalias")
    {
        $(".nombre-tag").html("sandalias");
    }
    if(hyper == "Nuevo")
    {
        $(".nombre-tag").html("Nuevos");
    }
    if(hyper == "sale")
    {
        $(".nombre-tag").html("Sale");
    }
});