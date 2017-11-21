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
        tag = tag.replaceAll("%20", " ");
    }
    catch(ex)
    {
        // nothing here... 
    }

    $("#"+tag).addClass("active");
    if (tag === undefined || tag === 'todos'){
        $("#todos").addClass("active");
    }

    var base_url = $.environmentVar(
         'https://apibodegas.loadingplay.com/',
         'https://apibodegas.loadingplay.com/',
         'https://apibodegas.loadingplay.com/');
     var checkout_url = $.environmentVar(
         '/bilupo/checkout',
         '/checkout',
         '/checkout');
     var app_public = $.environmentVar(13,13,13);

    console.log(tag);
    var config = {
        'app_public': app_public,
        'base_url': base_url,
        'products_per_page' : 9, 
        'tag': tag,
        'ignore_stock': false,
        'infinite_scroll': true,
        // 'maxProducts': 100,
        'checkout_url': checkout_url, 
        'operator' :'and',
        'onLoad': function(products) 
        {

            console.log(products);
            // if (products.length === 0)
            // {
            //     $(".products").html("no hay productos con estos filtros");
            // }
        }
    };

    console.log("arriba", config.tag, config);

    $(document).ecommerce(config);


    $(document).on("click", ".subcateg2", function(ev)
    {
        ev.stopPropagation();
        ev.preventDefault();

        if (tag === $(this).attr('tag')){
            config.tag = tag;
            config.operator = "or";
        }else{
            var multiple_tag = $(this).attr('tag');
            config.tag = multiple_tag.replaceAll("%20", " ");
            config.operator = "and";

            console.log("abajo", config.tag, config);
        }
        
        $(".products").html("");
        $(document).ecommerce('destroy');
        $(document).ecommerce(config);
    });
});
