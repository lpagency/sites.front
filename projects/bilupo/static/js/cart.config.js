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
    var tag = "";
    var tag_edad = "";
    var tag_area = "";
    var tag_marca = "";
    var info ="";
    var tag_exist = false;

    var base_url = $.environmentVar(
        'https://apibodegas.loadingplay.com/',
        'https://apibodegas.ondev.today/',
        'https://apibodegas.loadingplay.com/');
    var checkout_url = $.environmentVar(
        'https://pay.loadingplay.com/',
        'https://lpcheckout.ondev.today/',
        'https://pay.loadingplay.com');
    var app_public = $.environmentVar(42,42,42);
    var site_name = $.environmentVar('bilupo', 'bilupo', 'bilupo');

    var config = {
        'app_public': app_public,
        'base_url': base_url,
        'products_per_page' : 9, 
        'tag': tag,
        'ignore_stock': false,
        'infinite_scroll': false,
        'animation': 'ghost',
        // 'maxProducts': 100,
        'checkout_url': checkout_url,
        'analytics' : true,
        'operator' :'or',
        'no_products_template' : '<span class="fuentes2" >Lo sentimos!, no tenemos juguetes con estos filtros. Intenta cambiando alguno de los filtros de busqueda.</span>',
        'onLoad': function(products) 
        {
            var prod = $(".product-grid").html();
        }
    };

    $(document).ecommerce(config);

    $(".busqueda-edad").displayCategories({
        "type": "edad"
    });

    $(".busqueda-area").displayCategories({
        "type": "area"
    });

    $(".busqueda-marca").displayCategories({
        "type": "marca"
    });

    $("button.dropbtnup").click(function(){
        var dropdownlist = $(this).parent().find(".dropdownlist");
        console.log(dropdownlist.css("display"))
        if(dropdownlist.css("display") === 'none')
        {
            $(".dropdownlist").hide();
            dropdownlist.show();
        }else{
            dropdownlist.hide();
        }
    });

    $("button.dropbtn").click(function(){
        var dropdownlist = $(this).parent().find(".dropdownlist");

        if(dropdownlist.css("display") === 'none')
        {
            $(".dropdownlist").hide();
            dropdownlist.show();
        }else{
            dropdownlist.hide();
        }
    });

    $(".filtro").click(function(ev){
        
        ev.stopPropagation();
        ev.preventDefault();

        var input = $(this).parent().parent().find("input");
        var dropdownlist = $(this).parent().parent().find(".dropdownlist");
        
        input.val($(this).html());
        dropdownlist.hide();

        if(dropdownlist.hasClass("busqueda-edad")){
            tag_edad = $(this).attr("tag");
            info = $(this).attr(".info");
            tag_exist = true;
        }

        if(dropdownlist.hasClass("busqueda-area")){
            tag_area = $(this).attr("tag");
            tag_exist = true;
        }

        if(dropdownlist.hasClass("busqueda-marca")){
            tag_marca = $(this).attr("tag");
            tag_exist = true;
        }
    });


    $(".buscarPorFiltros").click(function(ev){
        ev.stopPropagation();
        ev.preventDefault();

        if(tag_exist){
            var multiple_tag = "";
            
            if(tag_edad !== ""){
                multiple_tag = tag_edad;                
            }

            if(tag_area !== ""){
                if(multiple_tag === ""){
                    multiple_tag = tag_area;
                }else{
                    multiple_tag = multiple_tag + ", " + tag_area;
                    config.operator = "and";
                }
            }

            if(tag_marca !== ""){
                if(multiple_tag === ""){
                    multiple_tag = tag_marca;
                }else{
                    multiple_tag = multiple_tag + ", " + tag_marca;
                    config.operator = "and";
                }
            }

            config.tag = multiple_tag;
            var hyper = window.location.href;

            hyper = hyper.split("?");

            history.pushState('', 'Biluppo', hyper[0]);

            $(".products").html("");
            $(document).ecommerce('destroy');
            $(document).ecommerce(config);
        }
    });

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
});
