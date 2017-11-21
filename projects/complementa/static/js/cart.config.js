/* global $ */
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
        // nothing here... 
    }

    tag = tag.replace("%20", " ");
    console.log(tag);

    var base_url = $.environmentVar(
        'https://apibodegas.loadingplay.com/',
        'https://apibodegas.loadingplay.com/',
        'https://apibodegas.loadingplay.com/');
    var checkout_url = $.environmentVar(
        'https://pay.loadingplay.com',
        'https://pay.loadingplay.com',
        'https://pay.loadingplay.com');
    var app_public = $.environmentVar(15,15,15);

    var config = {
        'app_public': app_public,
        'base_url': base_url,
        'products_per_page' : 8, 
        'tag': tag,
        'ignore_stock': false,
        'infinite_scroll': true,
        // 'maxProducts': 100,
        'checkout_url': checkout_url,
        'operator' :'or',
        'onLoad': function(products) 
        {
            if (products.length === 0)
            {
                $(".products").html("no hay productos con estos filtros");
            }
        }
    };

    $(document).ecommerce(config);
    $(document).on("click", ".btn-subcateg", function(){
        if (tag === $(this).attr('tag')){
            config.tag=tag;
            config.operator = "or";
        }else{
            var multiple_tag = tag+", "+$(this).attr('tag');
            config.tag=multiple_tag;
            config.operator = "and";
        }
        
        // facade.page = 1; // o 1 no estoy seguro
        $(".products").html("");
        $(document).ecommerce('destroy');
        $(document).ecommerce(config);

            // alert($(this).attr("tag"));
    });
});
