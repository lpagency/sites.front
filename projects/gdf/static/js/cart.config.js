/* global $ */
/* global Utils */
/* global unescape */
/* global document */
/* export config */
'use strict';

var getIncludeParameters = function()
{
    var scripts = document.getElementsByTagName('script');
    var myScript = scripts[ scripts.length - 6 ];
    // var scripts = document.getElementsByTagName('script');
    // var myScript = scripts[ scripts.length - 1 ];

    var queryString = myScript.src.replace(/^[^\?]+\??/,'');

    var params = parseQuery( queryString );

    function parseQuery ( query ) {
        var Params = new Object ();
        if ( ! query ) return Params; // return empty object
        var Pairs = query.split(/[;&]/);
        for ( var i = 0; i < Pairs.length; i++ ) {
            var KeyVal = Pairs[i].split('=');
            if ( ! KeyVal || KeyVal.length != 2 ) continue;
            var key = unescape( KeyVal[0] );
            var val = unescape( KeyVal[1] );
            val = val.replace(/\+/g, ' ');
            Params[key] = val;
        }
        return Params;
    }

    return params;
};

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

$(document).ready(function() 
{
    var params = getIncludeParameters();
    var tag = '';

    try
    {
        tag = Utils.getUrlParameter('t');
        tag = tag.replaceAll("%20", " ");
    }
    catch(ex)
    {
        // nothing here... 
    }

    $("#"+tag).addClass("active");
    if (tag === undefined){
        $("#todo").addClass("active");
    }

   var base_url = $.environmentVar(
        'https://apibodegas.loadingplay.com/',
        'https://apibodegas.loadingplay.com/',
        'https://apibodegas.loadingplay.com/');
    var checkout_url = $.environmentVar(
        'https://checkout.loadingplay.com',
        'https://checkout.loadingplay.com',
        'https://checkout.loadingplay.com');
    var app_public = $.environmentVar(50,50,50);

    var config = {
        'app_public': app_public,
        'base_url': base_url,
        'products_per_page' : 16, 
        'tag': tag,
        'ignore_stock': false,
        'infinite_scroll': false,
        // 'maxProducts': 100,
        'checkout_url': checkout_url,
        'operator' :'and',
        'onLoad': function(products) 
        {
            if (products.length === 0)
            {
                $(".products").html("no hay productos con estos filtros");
            }
            var hyper = window.location.search;

            if(/tag=sale/.test(hyper))
            {
                $(".precio").addClass("anterior-oferta-sale");
                $(".promo").removeClass("hidden");
            }

            var id = $("[name=id-car]");

            console.log(id.length);

            if(id.length === 0){

                $(".btn-compra").addClass("hidden");

                $(".tot").addClass("hidden");

                $(".lo-sentimos").removeClass('hidden');
            }
        }
    };

    $(document).ecommerce(config);


    $(document).on("click", ".mayor", function(ev)
    {
        ev.preventDefault();
        config.column = "main_price";
        config.direction = "desc";

        $('.products').html("");
        $(document).ecommerce("destroy");

        $(document).ecommerce(config);

    });

    $(document).on("click", ".menor", function(ev)
    {
        ev.preventDefault();
        config.column = "main_price";
        config.direction = "asc";

        $('.products').html("");
        $(document).ecommerce("destroy");

        $(document).ecommerce(config);

    });

    $(document).on("click", ".nombre", function(ev)
    {
        ev.preventDefault();
        config.column = "name";
        config.direction = "asc";

        $('.products').html("");
        $(document).ecommerce("destroy");

        $(document).ecommerce(config);

    });

    $(document).on("click", ".llegada", function(ev)
    {
        ev.preventDefault();
        config.column = "id";
        config.direction = "desc";

        $('.products').html("");
        $(document).ecommerce("destroy");

        $(document).ecommerce(config);

    });



    $(document).on("click", ".subcateg", function(ev){
        ev.stopPropagation();
        ev.preventDefault();

        

        // $(".subcateg").css("border-bottom", "");
        // $(this).css("border-bottom", "dashed 1px rgba(0, 0, 0, 0.33)");

        // if (tag === $(this).attr('tag')){
        //     config.tag=tag;
        //     config.operator = "or";
        // }else{
        //     var multiple_tag = tag+", "+$(this).attr('tag');
        //     config.tag=multiple_tag;
        //     config.operator = "and";
        // }

        config.tag=$(this).attr('tag');
        // console.log(config);
        
        // facade.page = 1; // o 1 no estoy seguro
        $(".products").html("");
        $(document).ecommerce('destroy');
        $(document).ecommerce(config);

            // alert($(this).attr("tag"));
    });
    $(document).ready(function()
    {
    var fil = $(".texto-filtros").html();

    var listaFiltros = [];

    $(document).on("click", ".num-tal-2", function()
    {
        fil = $(".texto-filtros").html();

        var talla = $(this).attr('tag');
        $(".texto-filtros").html('<div class="'+ talla +'">'+ talla +'(<i class="fa fa-times fa-'+talla+'" aria-hidden="true"></i>)</div>'+fil);

        var classTalla = "."+talla;

        $(document).on("click", ".fa-"+talla, function()
        {
            $( classTalla ).remove();
        });
    });

    $(document).on("change", ".categ-color", function(ev)
    {
        var Color = $(this).attr("tag");
        fil = $(".texto-filtros").html();

        listaFiltros.push(Color);

        console.log(listaFiltros.toString());
        config.tag =listaFiltros.toString();

        $('.products').ecommerce('destroy');
        $('.products').ecommerce(config);

        if(Color == "animal print")
        {
            var color2 = "animal";
            $(".texto-filtros").html('<div class="'+ Color +'">'+ Color +'(<i class="fa fa-times fa-'+color2+'" aria-hidden="true"></i>)</div>'+fil);
            var classColor = "."+color2;

            $(document).on("click", ".fa-"+color2, function()
            {
                $( classColor ).remove();
                $(".c-"+color2).prop('checked', false);

                for(var x in listaFiltros){
                    if(listaFiltros[x] == Color){
                        listaFiltros.splice(x,1);
                        console.log(listaFiltros.toString());
                        config.tag =listaFiltros.toString();

                        $('.products').ecommerce('destroy');
                        $('.products').ecommerce(config);
                    }
                }
            });
        }
        else
        {
            $(".texto-filtros").html('<div class="'+ Color +'">'+ Color +'(<i class="fa fa-times fa-'+Color+'" aria-hidden="true"></i>)</div>'+fil);
            var classColor = "."+Color;

            $(document).on("click", ".fa-"+Color, function()
            {
                $( classColor ).remove();
                $(".c-"+Color).prop('checked', false);

                for(var x in listaFiltros){
                    if(listaFiltros[x] == Color){
                        listaFiltros.splice(x,1);
                        console.log(listaFiltros.toString());
                        config.tag =listaFiltros.toString();

                        $('.products').ecommerce('destroy');
                        $('.products').ecommerce(config);
                    }
                }
            });
        }

    });

    $(document).on("change", ".categ-tipo", function(ev)
    {
        var tipo = $(this).attr("tag");
        fil = $(".texto-filtros").html();

        listaFiltros.push(tipo);
        console.log(listaFiltros.toString());
        config.tag =listaFiltros.toString();

        $('.products').ecommerce('destroy');
        $('.products').ecommerce(config);

        $(".texto-filtros").html('<div class="'+ tipo +'">'+ tipo +'(<i class="fa fa-times fa-'+tipo+'" aria-hidden="true"></i>)</div>'+fil);

        var classtipo = "."+tipo;

        $(document).on("click", ".fa-"+tipo, function()
        {
            $( classtipo ).remove();
            $(".c-"+tipo).prop('checked', false);

            for(var x in listaFiltros){
                if(listaFiltros[x] == tipo){
                    listaFiltros.splice(x,1);
                    console.log(listaFiltros.toString());
                    config.tag =listaFiltros.toString();

                    $('.products').ecommerce('destroy');
                    $('.products').ecommerce(config);
                }
            }
        });
    });
});
});
