/* global $ */
'use strict';

$(document).ready(function() 
{
    var base_url = $.environmentVar(
        'http://localhost:8520/',
        'https://betaapi.loadingplay.com/',
        'https://betaapi.loadingplay.com/');
    var checkout_url = $.environmentVar(
        'http://localhost:8522/',
        'http://lpcheckout.ondev.today/',
        'https://betapay.loadingplay.com');
    var app_public = $.environmentVar(20,20,20);

    // functions 
    // productos relacionados
    var related = function(tag) 
    {
        var config = {
            'app_public': app_public,
            'base_url': base_url,
            'maxProducts': 8,
            'templateOrigin': '#product_template',
            'tag': tag,
            'ignore_stock': false
        };

        $('.product-related').ecommerce('product_box', config);
    };

    //cambia imagenes pequeñas en detalle de producto 
    $(document).on("click", '.little', function(){
        $("#img_detail").attr("src", $(this).attr('src'));
    });

});
