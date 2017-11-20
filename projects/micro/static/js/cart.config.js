/* global $ */
/* global Utils */
/* global unescape */
/* global document */
/* export config */

var getIncludeParameters = function()
{
    var scripts = document.getElementsByTagName('script');
    var myScript = scripts[ scripts.length - 6 ];
    // var scripts = document.getElementsByTagName('script');
    // var myScript = scripts[ scripts.length - 1 ];

    var queryString = myScript.src.replace(/^[^\?]+\??/,'');

    var params = parseQuery( queryString );

    function parseQuery ( query ) 
    {
        var Params = {};
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

    if (tag === undefined){
        $("#todo").addClass("active");
    }

    var base_url = $.environmentVar(
        'https://betaapi.loadingplay.com/',
        'https://apibodegas.ondev.today',
        'https://betaapi.loadingplay.com/');
    var checkout_url = $.environmentVar(
        'https://betapay.loadingplay.com',
        'https://lpcheckout.ondev.today',
        'https://betapay.loadingplay.com');
    var app_public = $.environmentVar(33,33,33);
    var site_name = $.environmentVar('micro', 'micro', 'micro');

    var config = {
        'app_public': app_public,
        'base_url': base_url,
        'products_per_page' : 9, 
        'tag': tag,
        'ignore_stock': false,
        'infinite_scroll': false,
        'checkout_url': checkout_url,
        'operator' :'and',
        'onLoad': function(products) 
        {

            $(".h_detail_prod").each(function()
            {

                if(config.tag == "mini"){
                    console.log(products.attr("tags"));
                }
            });
        }
    };

    config.column = "name";
    config.direction = "asc";

    $(document).ecommerce(config);


    $(document).on("click", ".subcateg", function(ev)
    {
        ev.stopPropagation();
        ev.preventDefault();

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
        $(document).ecommerce(config);
        console.log(config.tag);
        console.log(config.operator);
    });
});
