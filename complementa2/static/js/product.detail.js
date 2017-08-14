/* global $ */
'use strict';

$(document).ready(function()
    {
        var base_url = $.environmentVar(
            'http://apibodegas.ondev.today/',
            'http://apibodegas.ondev.today/',
            'https://apibodegas.loadingplay.com/');
        var checkout_url = $.environmentVar(
            'https://checkout.loadingplay.com',
            'http://lpcheckout.ondev.today/',
            'https://checkout.loadingplay.com');
        var app_public = $.environmentVar(26,26,26);

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

    $(document).ecommerce(
        'product_detail', 
        {
            'app_public': app_public,
            'base_url': base_url,
            'checkout_url': checkout_url,
            'product_id': Utils.getUrlParameter('product_id'),
            onLoad: function(product) 
            {
                // related(product.bullet_3);
                    $("#img_detail").elevateZoom({constrainType:"height", 
                        constrainSize:445, 
                        zoomType: "inner", 
                        containLensZoom: true, 
                        gallery:'gallery_01', 
                        cursor: 'crosshair', 
                        galleryActiveClass: "active"}); 
            }
        });
