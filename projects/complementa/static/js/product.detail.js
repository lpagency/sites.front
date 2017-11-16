/* global $ */
'use strict';

$(document).ready(function() 
{
    var base_url = $.environmentVar(
        'https://betaapi.loadingplay.com/', 
        'https://betaapi.loadingplay.com/', 
        'https://betaapi.loadingplay.com/');
    var checkout_url = $.environmentVar(
        'https://betapay.loadingplay.com', 
        'https://betapay.loadingplay.com', 
        'https://betapay.loadingplay.com');
    var app_public = $.environmentVar(15, 15, 15);

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
                console.log(product);
                related(product.bullet_3);

                try
                {
                    var jssor_1_SlideoTransitions = [
                        [{b:-1,d:1,o:-1},{b:0,d:1000,o:1}],
                        [{b:1900,d:2000,x:-379,e:{x:7}}],
                        [{b:1900,d:2000,x:-379,e:{x:7}}],
                        [
                            {b:-1,d:1,o:-1,r:288,sX:9,sY:9},
                            {b:1000,d:900,x:-1400,y:-660,o:1,r:-288,sX:-9,sY:-9,e:{r:6}},
                            {b:1900,d:1600,x:-200,o:-1,e:{x:16}}
                        ]
                    ];

                    var options = { 
                        $AutoPlay: true,
                        $SlideDuration: 800,
                        $SlideEasing: $Jease$.$OutQuint,
                        $CaptionSliderOptions: {
                            $Class: $JssorCaptionSlideo$,
                            $Transitions: jssor_1_SlideoTransitions
                        },
                        $ArrowNavigatorOptions: {
                            $Class: $JssorArrowNavigator$
                        },
                        $BulletNavigatorOptions: {
                            $Class: $JssorBulletNavigator$
                        }
                    };

                    var jssor_slider1 = new $JssorSlider$('slider1_container', options);

                    //responsive code begin
                    //you can remove responsive code if you don't want the slider scales while window resizing
                    function ScaleSlider() {
                        var refSize = jssor_slider1.$Elmt.parentNode.clientWidth;
                        if (refSize) {
                            refSize = Math.min(refSize, 1920);
                            jssor_slider1.$ScaleWidth(refSize);
                        }
                        else {
                            window.setTimeout(ScaleSlider, 30);
                        }
                    }
                    ScaleSlider();
                    $(window).bind("load", ScaleSlider);
                    $(window).bind("resize", ScaleSlider);
                    $(window).bind("orientationchange", ScaleSlider);
                    //responsive code end

                    //});
                }
                catch (ex)
                {
                    // the slider is only initialized with product detail 2
                }
            }
        });
});
