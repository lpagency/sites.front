(function($)
{
    var tags = [];
    var app_id = 7;
    var base_url = 'https://apibodegas.loadingplay.com/';
    var url_tag_list = 'https://apibodegas.loadingplay.com/tag/list_all/7';
    var priority_1 = 'priority%201';
    var priority_2 = 'priority%202';

    function isLocalHost() {
        return document.location.href.indexOf('localhost') != -1;
    }

    function isDevelopment() {
        return document.location.href.indexOf('ondev.today') != -1;
    }

    // configure for each enviroment
    if ( isLocalHost()) 
    {
        base_url = 'http://apibodegas.ondev.today/';
        url_tag_list = 'http://apibodegas.ondev.today/tag/list_all/5';
        app_id = 5;
        priority_1 = 'priority%201';
        priority_2 = 'priority%202';
    }
    else if (isDevelopment()) 
    {
        base_url = 'http://apibodegas.ondev.today/';
        url_tag_list = 'http://apibodegas.ondev.today/tag/list_all/5';
        app_id = 5;
        priority_1 = 'priority%201';
        priority_2 = 'priority%202';
    }

    // change selected product
    $(document).on('click', '.change-product', function() 
    {

        var $wrapper = $(this).closest('.product-group-wrapper');
        var product_id = $(this).attr('product-id');

        $.product_box.setProduct($wrapper, product_id);
    });


    $.product_box = function()
    {};

    $.product_box.add = function(tagId, tagName)
    {
        var config = {
            'app_public' : app_id,
            'base_url' : base_url,
            'maxProducts' : 50,
            'templateOrigin' : '.product_group_template',
            'tag' : tagName,
            'ignore_stock' : true,
            'onLoad' : function(products)
            {
                var $wrapper = $(this).closest('.product-group-wrapper');
                var product_id = $('.change-product ', $(this)).attr('product-id');

                $.product_box.setProduct($wrapper, product_id);

                $('.carousel', $(this).parent()).owlCarousel({
                    items: 7,
                    lazyLoad: true,
                    navigation: true
                });
            }
        };

        var tag_template = $('.product_group').html();
        var $html = '';

        tag_template = Utils.render(tag_template, { 'tag' : tagName, 'id' : tagId });
        $html = $(tag_template);

        $('.product_container', $html).ecommerce('product_box', config);
        $('.group_products').append($html);

    };

    $.product_box.getURLTAGList = function()
    {
        return url_tag_list;
    };

    $.product_box.getBaseURL = function()
    {
        return base_url;
    };

    $.product_box.getAppID = function()
    {
        return app_id;
    };

    $.product_box.getPriority1 = function()
    {
        return priority_1;
    };

    $.product_box.getPriority2 = function()
    {
        return priority_2;
    };

    $.product_box.setProduct = function($wrapper, product_id)
    {
        var $image = $('.product-image', $wrapper).attr('src', ''); // loading


        $.get(base_url + 'product/images/' + product_id, function(data)
        {
            $image.attr('src', data.images[0]['thumb_500']);
        });


        $.get(base_url + 'product/get/' + product_id, function(data)
        {
            $('.product_name', $wrapper).html(data.name);
            $('.product_description', $wrapper).html(data.description);

            if (data.bullet_1==''){
                $('.product_shop_online', $wrapper).attr('href', 'http://www.amazon.com/sp?_encoding=UTF8&asin=&isAmazonFulfilled=&isCBA=&marketplaceID=ATVPDKIKX0DER&orderID=&seller=AW1SP2IKKJM4H&tab=&vasStoreID=');
            }else{
                $('.product_shop_online', $wrapper).attr('href', data.bullet_1);
            }

            $('.product_where_to_buy', $wrapper).attr('href', site_base +'/sc/product/detail/'+data.name+'/'+data.id)
            // shop online = bullet_1
            // where can i buy = detalle producto
        });

    };

})(jQuery);

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

//lleva a div dentro de pagina
anchor = {
    init: function() {
        $("a.anchorLink").click(function() {
            elementClick = $(this).attr("href");
            destination = $(elementClick).offset().top;
            $("html:not(:animated),body:not(:animated)").animate({
                scrollTop: destination
            },1100);
            return false;
        });
    }
}


$(document).ready(function() 
{
    anchor.init();
    $.ajax({
        url: $.product_box.getURLTAGList(),
        success: function(data) 
        {
            $('.group_products').html('');

            for (var t in data.tags)
            {
                var tag_name = data.tags[t].name;
                var tag_id = data.tags[t].id;
                
                if (tag_name.startsWith('Group')){
                    $.product_box.add(tag_id, tag_name);
                }
            }
        }
    });

    //cargando productos entre banner 1
    var config = {
        'app_public' : $.product_box.getAppID(),
        'base_url' : $.product_box.getBaseURL(),
        'maxProducts' : 50,
        'templateOrigin' : '#product_template',
        'tag' : $.product_box.getPriority1(),
        'ignore_stock' : true,
        'onLoad':function(){
             $(".ellipsis").dotdotdot();
         }
    }

    // load product boxes
    $('#container_banner1').ecommerce('product_box', config);
    config.tag = $.product_box.getPriority2();
    $('#container_banner2').ecommerce('product_box', config);
    

    var tag = getUrlParameter('tag');

    if (tag != undefined)
    {
        config.tag = tag;
        config.onLoad = function()
        {
            $('.spinner', $(this)).remove();
            $(".ellipsis").dotdotdot();
        };

        $('#container_tag').ecommerce('product_box', config);
    }
    

});
