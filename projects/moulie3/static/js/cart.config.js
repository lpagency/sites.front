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
        tag = Utils.getUrlParameter('tag');
    }
    catch(ex)
    {
        console.log(ex);
    }

    $("#" + tag).addClass("active");

    if (tag === undefined || tag === 'todos'){
        $("#todos").addClass("active");

        $("#img-todas").removeClass("hidden");
        $("#banner_todas").css("display", "block");
    }else{


        $("#img-" + tag).removeClass("hidden");
        $("#banner_" + tag).css("display", "block");

        if (tag === 'chocolates'){
            $(".menu_choc").fadeIn('slow');
        }else{
            $(".menu_choc").hide();
        }
    }

    var base_url = $.environmentVar(
        'https://apibodegas.loadingplay.com/',
        'https://apibodegas.loadingplay.com/',
        'https://apibodegas.loadingplay.com/'
    );
    
    var checkout_url = $.environmentVar(
        'https://pay.loadingplay.com',
        'https://pay.loadingplay.com',
        'https://pay.loadingplay.com'
    );

    var app_public = $.environmentVar(38,38,38);

    var config = {
        'app_public': app_public,
        'base_url': base_url,
        'products_per_page' : 10, 
        'tag': tag,
        'ignore_stock': false,
        'infinite_scroll': true,
        'checkout_url': checkout_url,
        'operator' :'or',
        'onLoad': function(products) 
        {
            $(".product-list-loading").hide();
        }
    };

    $(document).ecommerce(config);

    /* Chien: Para optimizar, la variable "principal_tag" que aparece desde aqui hacia abajo, se cambia
    por tag ya definido anteriormente.
    */
    //var principal_tag = "";
    var loading = $('.product-list').html();    

    $(document).on("click", ".subcateg", function(ev){
        ev.preventDefault();

        tag = $(this).attr('tag');

        if (tag === 'chocolates'){
            $(".menu_choc").fadeIn('slow');
        }else{
            $(".menu_choc").hide();
        }

        $(".img-tag").addClass("hidden");
        $(".banner_top").css("display", "none");

        $("#img-" + tag).removeClass("hidden");
        $("#banner_" + tag).css("display", "block");

        config.tag = tag;
        
        $(".products").html("");
        $(document).ecommerce('destroy');
        $(".products").append(loading);
        $(document).ecommerce(config);

    });


    $(document).on("click", ".subcategchocolate", function(ev){
        ev.preventDefault();

        $(".img-tag").addClass("hidden");        

        if ($(this).attr('tag') === 'chocolates' ){
            $("#img-" + $(this).attr('tag')).removeClass("hidden");
        }else{
            $("#img-chocolates-" + $(this).attr('tag')).removeClass("hidden");
        }

        if (tag === $(this).attr('tag')){
            config.tag = tag;
            config.operator = "or";
        }else{
            var multiple_tag = tag + ", " + $(this).attr('tag');
            config.tag = multiple_tag;
            config.operator = "and";
        }
        
        $(".products").html("");
        $(document).ecommerce('destroy');
        $(".products").append(loading);
        $(document).ecommerce(config);

    });
});
