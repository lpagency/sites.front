$(document).ready(function()
{
    window.z = 0;

    window.default_tag = getDefaultFilter();

    $(".limpiar").addClass("hidden");

    window.listaTag = [];

    window.tagGroups = { // Groups of tags for 
        'Categoria3' : [], // Tipo calzado
        'Color' : [], 
        'Mat' : [], // Material calzado
        'Marca' : []
    };

    window.url_tags = []; // list of tags that go in the url


    var base_url = $.environmentVar(
        'https://apibodegas.loadingplay.com/',
        'https://apibodegas.loadingplay.com/',
        'https://apibodegas.loadingplay.com/');
    var checkout_url = $.environmentVar(
        'https://lpcheckout.ondev.today',
        'https://lpcheckout.ondev.today',
        'https://pay.loadingplay.com');
    var app_public = $.environmentVar(53,53,53);
    var site_name = $.environmentVar('placare', 'placare', 'placare');

    window.config = {
        'app_public': app_public,
        'base_url': base_url,
        'products_per_page' : 12,
        'tag': window.default_tag,
        'ignore_stock': false,
        'infinite_scroll': false,
        'column' : 'random',
        // 'maxProducts': 100,
        'checkout_url': checkout_url,
        'operator' :'or',
        'onLoad': function(products)
        {

            //PARCHE ESTUPIDO!!!!!!!

            $(".up-ex").each(function()
            {
                var titulo = $(this).html().replace("_"," ");
                $(this).html(titulo);
            });

            if(products.length == 0)
            {
                $(".link-recargar").removeClass("hidden");
            }
            else
            {
                $(".link-recargar").addClass("hidden");
            }

            $(".letrero-nuevo").each(function()
            {
                var tags = $(this).attr("nuevo");
                if(tags.search("nuevo") != -1)
                {
                    $(this).removeClass("hidden");
                }
            });

            window.z = products.length + z;
            var h =" - "+z.toString()+" Items";

            $(".descuento-lis").each(function()
            {
                var main = $(this).attr("main-price");
                var promotion = $(this).attr("promotion-price");

                if(promotion != 0)
                {
                    var resta = Math.trunc((main - promotion)*100/main);
                    $(this).removeClass("hidden");
                    $(this).html("("+resta+"%)");
                }

            });

            $(".oferta").each(function()
            {
                if($(this).attr("promotion-price") != 0)
                {
                    $(this).removeClass("hidden");
                }
            });

            $(".original-tachado").each(function()
            {
                if($(this).attr("promotion-price") != 0)
                {
                    $(this).removeClass("hidden");
                }
            });

            $(".original").each(function()
            {
                if($(this).attr("promotion-price") != 0)
                {
                    $(this).addClass("hidden");
                }
            });

            $(".letrero-sale").each(function()
            {
                if($(this).attr("promotion-price") != 0)
                {
                    $(this).removeClass("hidden");
                }
            });

            $(".tag-header2").html(h);
        }
    };

    $(document).ready(function()
    {
        var scroll = $(window).scrollTop();
        if(scroll > 744)
        {

            window.config.infinite_scroll = true;
            $(".more-products").remove();
            $(".products").ecommerce(config);
            setTimeout(function()
            {
                $("html").scrollTop(scroll);
            },3000);

         }
    });

    //<-------------ORDENAR MAYOR, MENOR Y POR NOMBRE------------->

    $(document).on("click", ".mayor", function(ev)
    {
        ev.preventDefault();
        config.column = "main_price";
        config.direction = "desc";

        $('.products').html("");
        $('.products').ecommerce("destroy");

        $('.products').ecommerce(config);

        return false;

    });


    $(document).on("click", ".menor", function(ev)
    {
        ev.preventDefault();
        config.column = "main_price";
        config.direction = "asc";

        $('.products').html("");
        $('.products').ecommerce("destroy");
        $('.products').ecommerce(config);

        return false;

    });

    $(document).on("click", ".nombre", function(ev)
    {
        ev.preventDefault();
        config.column = "name";
        config.direction = "asc";

        $('.products').html("");
        $('.products').ecommerce("destroy");
        $('.products').ecommerce(config);

        return false;

    });

    // Clean button on mobile view, doesn't fully work
    $(".limpiar").click(function()
    {
        limpiar();
    });

    $(document).on("click", ".variables1", function(ev)
    {

        ev.preventDefault();
        var variable = $(this).attr("tag");
        $(this).removeClass("activo");
        $(".c-"+variable).removeClass("hidden");

        $(".c-variable_2").addClass('hidden');
        $(".c-variable_3").addClass('hidden');
        $(".c-variable_4").addClass('hidden');

        $(".vari").css("margin-bottom", "5%");

    });

    $(document).on("click", ".variables2", function(ev)
    {

        ev.preventDefault();
        var variable = $(this).attr("tag");
        $(this).removeClass("activo");
        $(".c-"+variable).removeClass("hidden");

        $(".c-variable_1").addClass('hidden');
        $(".c-variable_3").addClass('hidden');
        $(".c-variable_4").addClass('hidden');

        $(".vari").css("margin-bottom", "5%");

    });

    $(document).on("click", ".variables3", function(ev)
    {

        ev.preventDefault();
        var variable = $(this).attr("tag");
        $(this).removeClass("activo");
        $(".c-"+variable).removeClass("hidden");

        $(".c-variable_2").addClass('hidden');
        $(".c-variable_1").addClass('hidden');
        $(".c-variable_4").addClass('hidden');

        $(".vari").css("margin-bottom", "5%");

    });

    $(document).on("click", ".variables4", function(ev)
    {

        ev.preventDefault();
        var variable = $(this).attr("tag");
        $(this).removeClass("activo");
        $(".c-"+variable).removeClass("hidden");

        $(".c-variable_2").addClass('hidden');
        $(".c-variable_1").addClass('hidden');
        $(".c-variable_3").addClass('hidden');

        $(".vari").css("margin-bottom", "5%");

    });

    $("input:checkbox[name=vehicle]").change(function(ev,shouldLoad)
    {
        var $box = $(this);
        var nombre = $(this).attr("tag");
        var va = $(this).attr("value2");

        window.z = 0;

        updateBlockFilters('#categoria3', nombre, va); // update view of filter blocks

        updateTextRoute(va, "categoria2");

        if($(".limpiar").hasClass("hidden"))
        {
            $(".limpiar").removeClass("hidden");
        }

        localStorage.setItem("subcategoriaProd", $(".texto-ruta").html());

        // New filter logic

        var groups = window.tagGroups.Categoria3;

        window.tagGroups.Categoria3 = updateGroupTag(groups, nombre);

        window.config.tag = prepareTags(tagGroups);

        var tags = window.url_tags;

        window.url_tags = updateURLTags(tags,nombre);

        url = getCurrentUrl();
        

        history.pushState('', 'Placare', url+'?tag='+url_tags.join(','));

        if(shouldLoad!==false)
        {
            $('.products').ecommerce('destroy');
            $('.products').ecommerce(window.config);
        }
    });

    $("input:checkbox[name=color]").change(function(ev,shouldLoad)
    {
        var $box = $(this);
        var nombre = $(this).attr("tag");
        var va = $(this).attr("value2");

        window.z = 0;

        updateBlockFilters('#color', nombre, va);

        updateTextRoute(va, "color2");

        if($(".limpiar").hasClass("hidden"))
        {
            $(".limpiar").removeClass("hidden");
        }

        // New filter logic

        tagGroups.Color = updateGroupTag(tagGroups.Color, nombre);

        window.config.tag = prepareTags(tagGroups);

        url_tags = updateURLTags(url_tags,nombre);

        history.pushState('', 'Placare', 'mujer?tag='+url_tags.join(','));

        if(shouldLoad!==false)
        {
            $('.products').empty();
            $('.products').ecommerce('destroy');
            $('.products').ecommerce(window.config);
        }

    });

    $("input:checkbox[name=material]").change(function(ev,shouldLoad)
    {
        var $box = $(this);
        var nombre = $(this).attr("tag");
        var va = $(this).attr("value2");

        window.z = 0;

        updateBlockFilters('#mat', nombre, va);

        updateTextRoute(va, "mat2");

        if($(".limpiar").hasClass("hidden"))
        {
            $(".limpiar").removeClass("hidden");
        }

        localStorage.setItem("subcategoriaProd", $(".texto-ruta").html());

        // New filter logic

        tagGroups.Mat = updateGroupTag(tagGroups.Mat, nombre);

        window.config.tag = prepareTags(tagGroups);
        console.log(window.config.tag);

        url_tags = updateURLTags(url_tags,nombre);

        history.pushState('', 'Placare', 'mujer?tag='+url_tags.join(','));

        if(shouldLoad!==false)
        {
            $('.products').ecommerce('destroy');
            $('.products').ecommerce(window.config);
        }

    });

    $("input:checkbox[name=marca]").change(function(ev,shouldLoad)
    {
        var $box = $(this);
        var nombre = $(this).attr("tag");
        var va = $(this).attr("value2");

        window.z = 0;

        updateBlockFilters('#marca', nombre, va);

        updateTextRoute(va, "marca2");

        if($(".limpiar").hasClass("hidden"))
        {
            $(".limpiar").removeClass("hidden");
        }

        localStorage.setItem("subcategoriaProd", $(".texto-ruta").html());

        // New filter logic

        tagGroups.Mat = updateGroupTag(tagGroups.Mat, nombre);

        window.config.tag = prepareTags(tagGroups);

        url_tags = updateURLTags(url_tags,nombre);

        history.pushState('', 'Placare', 'mujer?tag='+url_tags.join(','));

        if(shouldLoad!==false)
        {
            $('.products').ecommerce('destroy');
            $('.products').ecommerce(window.config);
        }

    });

    /**

    $("input:radio[name=checkbox]").change(function()
        {
            var $box = $(this);
            var nombre = $(this).attr("tag");
            var va = $(this).attr("value2");

            var element = '<div class="fil-ul" id="checkbox2">'+va+'</div>';

            window.z = 0;

            var block =
                    '<li class="fil-ul" id="checkbox"><ul class="fil-ul '+nombre+'"><li class="li-fil"><div class="ordenar-precio '+nombre+'"> '
                    +va+' <i class="fa fa-times" aria-hidden="true" onclick="borrar('+"'"+nombre+"'"+','+"'"+va+"'"+')"></i></div></li></ul></li>';

            var a = 
                    '<ul class="fil-ul '+nombre+'"><li class="ca li-fil"><div class="ordenar-precio '+nombre+'"> '
                    +va+' <i class="fa fa-times" aria-hidden="true" onclick="borrar('+"'"+nombre+"'"+','+"'"+va+"'"+')"></i></div></li></li>';

            var classNombre = "."+nombre;
            var textoRuta = $(".texto-ruta").html();

            if($('#checkbox').length > 0)
            {
                $("#checkbox").html(a);
                $("#checkbox2").html(va);
            }
            else
            {
                $(".filtrosRec").html($(".filtrosRec").html() + block);
                $(".texto-ruta").html(textoRuta + " / " +element);
            }

            if($(".limpiar").hasClass("hidden"))
            {
                $(".limpiar").removeClass("hidden");
            }

            var textoRuta = $(".texto-ruta").html();
            localStorage.setItem("subcategoriaProd", $(".texto-ruta").html());

            for(i in window.listaTag)
            {
                if(window.listaTag[i].indexOf("Talla_") != -1)
                {
                    window.listaTag.splice(i,1);
                }
            }

            window.listaTag.push(nombre);

            window.config.tag = window.listaTag.toString();

            var tagsU = window.config.tag.split("-Categoria2_Calzado_Hombre,");
            tagsU = tagsU[1].toString();

            if(window.split != undefined)
            {
                if(window.split == "mujeres")
                {
                    history.pushState('', 'Placare', window.split + '?tag='+tagsU);
                }
                else
                {
                    if(window.split == "mules")
                    {
                        history.pushState('', 'Placare', window.split + '-slippers-mujer?tag='+tagsU);
                    }
                    else
                    {
                        history.pushState('', 'Placare', window.split + '-mujer?tag='+tagsU);
                    }
                }
            }
            else
            {
                history.pushState('', 'Placare', 'listado_productos?tag='+window.config.tag);
            }

            $('.products').ecommerce('destroy');
            $('.products').ecommerce(window.config);

        });

        $("input:radio[name=checkbox2]").change(function()
        {
            var $box = $(this);
            var nombre = $(this).attr("tag");
            var va = $(this).attr("value2");

            var element = '<div class="fil-ul" id="checkbox22">'+va+'</div>';

            window.z = 0;

            var block =
                    '<li class="fil-ul" id="checkbox2"><ul class="fil-ul '+nombre+'"><li class="li-fil"><div class="ordenar-precio '+nombre+'"> '
                    +va+' <i class="fa fa-times" aria-hidden="true" onclick="borrar('+"'"+nombre+"'"+','+"'"+va+"'"+')"></i></div></li></ul></li>';

            var a = 
                    '<ul class="fil-ul '+nombre+'"><li class="ca li-fil"><div class="ordenar-precio '+nombre+'"> '
                    +va+' <i class="fa fa-times" aria-hidden="true" onclick="borrar('+"'"+nombre+"'"+','+"'"+va+"'"+')"></i></div></li></li>';

            var classNombre = "."+nombre;
            var textoRuta = $(".texto-ruta").html();

            if($('#checkbox2').length > 0)
            {
                $("#checkbox2").html(a);
                $("#checkbox22").html(va);
            }
            else
            {
                $(".filtrosRec").html($(".filtrosRec").html() + block);
                $(".texto-ruta").html(textoRuta + " / " +element);
            }

            if($(".limpiar").hasClass("hidden"))
            {
                $(".limpiar").removeClass("hidden");
            }

            var textoRuta = $(".texto-ruta").html();
            localStorage.setItem("subcategoriaProd", $(".texto-ruta").html());

            for(i in window.listaTag)
            {
                if(window.listaTag[i].indexOf("Platform_") != -1)
                {
                    window.listaTag.splice(i,1);
                }
            }

            window.listaTag.push(nombre);

            window.config.tag = window.listaTag.toString();

            var tagsU = window.config.tag.split("-Categoria2_Calzado_Hombre,");
            tagsU = tagsU[1].toString();

            if(window.split != undefined)
            {
                if(window.split == "mujeres")
                {
                    history.pushState('', 'Placare', window.split + '?tag='+tagsU);
                }
                else
                {
                    if(window.split == "mules")
                    {
                        history.pushState('', 'Placare', window.split + '-slippers-mujer?tag='+tagsU);
                    }
                    else
                    {
                        history.pushState('', 'Placare', window.split + '-mujer?tag='+tagsU);
                    }
                }
            }
            else
            {
                history.pushState('', 'Placare', 'listado_productos?tag='+window.config.tag);
            }

            $('.products').ecommerce('destroy');
            $('.products').ecommerce(window.config);

        });

        $("input:radio[name=checkbox3]").change(function()
        {
            var $box = $(this);
            var nombre = $(this).attr("tag");
            var va = $(this).attr("value2");

            var element = '<div class="fil-ul" id="checkbox32">'+va+'</div>';

            window.z = 0;

            var block =
                    '<li class="fil-ul" id="checkbox3"><ul class="fil-ul '+nombre+'"><li class="li-fil"><div class="ordenar-precio '+nombre+'"> '
                    +va+' <i class="fa fa-times" aria-hidden="true" onclick="borrar('+"'"+nombre+"'"+','+"'"+va+"'"+')"></i></div></li></ul></li>';

            var a = 
                    '<ul class="fil-ul '+nombre+'"><li class="ca li-fil"><div class="ordenar-precio '+nombre+'"> '
                    +va+' <i class="fa fa-times" aria-hidden="true" onclick="borrar('+"'"+nombre+"'"+','+"'"+va+"'"+')"></i></div></li></li>';

            var classNombre = "."+nombre;
            var textoRuta = $(".texto-ruta").html();

            if($('#checkbox3').length > 0)
            {
                $("#checkbox3").html(a);
                $("#checkbox32").html(va);
            }
            else
            {
                $(".filtrosRec").html($(".filtrosRec").html() + block);
                $(".texto-ruta").html(textoRuta + " / " +element);
            }

            if($(".limpiar").hasClass("hidden"))
            {
                $(".limpiar").removeClass("hidden");
            }

            var textoRuta = $(".texto-ruta").html();
            localStorage.setItem("subcategoriaProd", $(".texto-ruta").html());

            for(i in window.listaTag)
            {
                if(window.listaTag[i].indexOf("Forma_Taco_") != -1)
                {
                    window.listaTag.splice(i,1);
                }
            }

            window.listaTag.push(nombre);

            window.config.tag = window.listaTag.toString();

            var tagsU = window.config.tag.split("-Categoria2_Calzado_Hombre,");
            tagsU = tagsU[1].toString();

            if(window.split != undefined)
            {
                if(window.split == "mujeres")
                {
                    history.pushState('', 'Placare', window.split + '?tag='+tagsU);
                }
                else
                {
                    if(window.split == "mules")
                    {
                        history.pushState('', 'Placare', window.split + '-slippers-mujer?tag='+tagsU);
                    }
                    else
                    {
                        history.pushState('', 'Placare', window.split + '-mujer?tag='+tagsU);
                    }
                }
            }
            else
            {
                history.pushState('', 'Placare', 'listado_productos?tag='+window.config.tag);
            }

            $('.products').ecommerce('destroy');
            $('.products').ecommerce(window.config);

        });

        $("input:radio[name=checkbox4]").change(function()
        {
            var $box = $(this);
            var nombre = $(this).attr("tag");
            var va = $(this).attr("value2");

            var element = '<div class="fil-ul" id="checkbox42">'+va+'</div>';

            window.z = 0;

            var block =
                    '<li class="fil-ul" id="checkbox4"><ul class="fil-ul '+nombre+'"><li class="li-fil"><div class="ordenar-precio '+nombre+'"> '
                    +va+' <i class="fa fa-times" aria-hidden="true" onclick="borrar('+"'"+nombre+"'"+','+"'"+va+"'"+')"></i></div></li></ul></li>';

            var a = 
                    '<ul class="fil-ul '+nombre+'"><li class="ca li-fil"><div class="ordenar-precio '+nombre+'"> '
                    +va+' <i class="fa fa-times" aria-hidden="true" onclick="borrar('+"'"+nombre+"'"+','+"'"+va+"'"+')"></i></div></li></li>';

            var classNombre = "."+nombre;
            var textoRuta = $(".texto-ruta").html();

            if($('#checkbox4').length > 0)
            {
                $("#checkbox4").html(a);
                $("#checkbox42").html(va);
            }
            else
            {
                $(".filtrosRec").html($(".filtrosRec").html() + block);
                $(".texto-ruta").html(textoRuta + " / " +element);
            }

            if($(".limpiar").hasClass("hidden"))
            {
                $(".limpiar").removeClass("hidden");
            }

            var textoRuta = $(".texto-ruta").html();
            localStorage.setItem("subcategoriaProd", $(".texto-ruta").html());

            for(i in window.listaTag)
            {
                if(window.listaTag[i].indexOf("Taco_") != -1)
                {
                    window.listaTag.splice(i,1);
                }
            }

            window.listaTag.push(nombre);

            window.config.tag = window.listaTag.toString();

            var tagsU = window.config.tag.split("-Categoria2_Calzado_Hombre,");
            tagsU = tagsU[1].toString();

            if(window.split != undefined)
            {
                if(window.split == "mujeres")
                {
                    history.pushState('', 'Placare', window.split + '?tag='+tagsU);
                }
                else
                {
                    if(window.split == "mules")
                    {
                        history.pushState('', 'Placare', window.split + '-slippers-mujer?tag='+tagsU);
                    }
                    else
                    {
                        history.pushState('', 'Placare', window.split + '-mujer?tag='+tagsU);
                    }
                }
            }
            else
            {
                history.pushState('', 'Placare', 'listado_productos?tag='+window.config.tag);
            }

            $('.products').ecommerce('destroy');
            $('.products').ecommerce(window.config);

        });
        **/


    onLoadInit(); // Load products and filters
}); // End of $(document).ready()

//<-------------------FUNCIONES-------------------->

//<---------------FUNCION LIMPIAR------------------>

function limpiar()
{

    window.z = 0;

    $(".limpiar").addClass("hidden");
    $(".texto-ruta").html("Home ");
    $(".fa-check-square").addClass("hidden");

    $('input:checkbox').each(function(){
        $(this).attr('checked',false);
    });

    $('.filtrosRec').children().each(function()
    {
        $(this).empty();
    });

    window.tagGroups = { 
        'Categoria3' : [], 
        'Color' : [], 
        'Mat' : [], 
        'Marca' : []
    };

    window.url_tags = [];

    window.config.tag = "Categoria2_Calzado_Mujer,-Categoria2_Calzado_Hombre";
    window.config.column = 'random';

    history.pushState('', 'Placare', 'mujer'); //Agregar url custom

    $('.products').ecommerce('destroy');
    $('.products').ecommerce(window.config);
};

//<-------------END FUNCION LIMPIAR---------------->

function prepareTags(tG){

    tg = "Categoria2_Calzado_Mujer,-Categoria2_Calzado_Hombre";

    jQuery.each(tG, function(i, val)
    {
        if(val.length>0)
        {
            tg+=",(";
            for(var t in val)
            {
                if(t==0)
                {
                    tg+=val[t];
                }
                else
                {
                    tg+=","+val[t];
                }
            }
            tg+=")";
        }
    });

    return tg;
}

function updateGroupTag(tagGroup, tagName)
{
    if(tagGroup.length>0)
    {
        if(tagGroup.includes("+"+tagName))
        {
            tagGroup.splice(tagGroup.indexOf("+"+tagName),1);
        }
        else
        {
            tagGroup.push("+"+tagName);
        }
    }
    else
    {
        tagGroup.push("+"+tagName);
    }
    return tagGroup;
}

function updateURLTags(tagURL, tag)
{
    if(tagURL.length>0)
    {
        if(tagURL.includes(tag))
        {
            tagURL.splice(tagURL.indexOf(tag),1);
        }
        else
        {
            tagURL.push(tag);
        }
    }else{
        tagURL.push(tag);
    }

    return tagURL;
}

function updateBlockFilters(category, tagName, value){
    var filterBlocks = $(category).find('ul');
    var toAdd = true;
    var className = category.charAt(1).toUpperCase() + category.slice(2) + '_' + value;

    //Special case of category name for mujeres
    switch(className){
        case "Categoria3_Slippers":
            className="Categoria3_Mules";
            break;
        case "Color_Café":
            className="Color_Cafe";
            break;
        case "Color_Metálico":
            className="Color_Metalico";
            break;
        case "Mat_Cuero":
            className="Mat_Capellada_Cuero";
            break;
        case "Mat_Eco Cuero":
            className="Mat_Capellada_Eco_Cuero";
            break;
        case "Marca_Eda Manzini":
            className="Marca_Eda_Manzini";
            break;
        case "Marca_Lola Canales":
            className="Marca_Lola_Canales";
            break;
    }

    if(filterBlocks.length>0)
    {
        filterBlocks.each(function(i, val)
        {
            if($(this).hasClass(className))
            {
                $(this).remove();
                toAdd = false;
                return false;
            }
        });

        if(toAdd)
            $(category).append('<ul class="fil-ul '+tagName+'"><li class="ca li-fil"><div class="ordenar-precio '+tagName+'">'+value+'</div></li></ul>');
    }
    else
    {
        $(category).append('<ul class="fil-ul '+tagName+'"><li class="ca li-fil"><div class="ordenar-precio '+tagName+'">'+value+'</div></li></ul>');
    }

        
}

function onLoadInit(tagGroups, tag_url){
    //Append filters categories
    $('.filtrosRec').append('<li class="fil-ul" id="categoria3"></li>'+
        '<li class="fil-ul" id="color"></li>'+
        '<li class="fil-ul" id="mat"></li>'+
        '<li class="fil-ul" id="marca"></li>');

    //Load default filter from friendly url

    var defaultTag = getDefaultFilter();

    if(default_tag!=="")
        $("."+default_tag).trigger('change',[false]);

 
    // Load filters from tag parameter in url
    if(Utils.getUrlParameter('tag')!==undefined)
    {
        tag_list = Utils.getUrlParameter('tag').split(',');

        tag_list.forEach(function(i){
            var temp = i.replace(/[+-]/g,"");
            $('input:checkbox').each(function(a, v){
                if($(this).hasClass("c-"+temp))
                {
                    $(this).trigger('change', [false]);
                    $(this).attr('checked',true);
                }
            });
        });
    }

    $('.products').ecommerce('destroy');
    $('.products').ecommerce(window.config);
}

function retrieveLocation(){
    try
    {
        var loc = window.location.href.match(/(?!\/)([^\/]+)\/?$/g).toString();
        if(/(.*?).*(?=\?)/g.test(loc))
        {
            return loc.match(/(.*?)(?=\?)/g)[0];
            console.log("with ?");
        }
        else
        {
            return loc;
        }
    }
    catch(ex)
    {
    }
}

function getCurrentUrl(){

    var loc = retrieveLocation();

    var urlPart = "mujer"; //Default value

    var friendlyurls = ["ballerinas","botines","mocasines","mules","plataformas","playeras","sandalias","zapatos"];

    for(var u in friendlyurls)
    {
        if(loc.includes(u))
            urlPart = u + "-mujer";
    }

    return urlPart;
}

function getDefaultFilter(){

    var loc = retrieveLocation();

    var static_tag = "Categoria3_Calzado_Mujer,-Categoria3_Calzado_Hombre";

    var defaultTag = "";

    var friendlyurls = ["ballerinas","botines","mocasines","mules","plataformas","playeras","sandalias","zapatos"];

    for(var u in friendlyurls)
    {
        if(loc.includes(u))
        {
            defaultTag = " c-Categoria3_" + u.charAt(0).toUpperCase() + u.slice(1);
        }

    }
    return defaultTag;
}

function getClassDefaultTag()
{
    var loc = retrieveLocation();

    var static_tag = "Categoria3_Calzado_Mujer,-Categoria3_Calzado_Hombre";

    var defaultTag = "";

    var friendlyurls = ["ballerinas","botines","mocasines","mules","plataformas","playeras","sandalias","zapatos"];

    for(var u in friendlyurls)
    {
        if(loc.includes(u))
        {
            defaultTag = "Categoria3_" + u.charAt(0).toUpperCase() + u.slice(1);
        }

    }

    return defaultTag;
}

function updateTextRoute(name, category){

    var element = '<div class="fil-ul" id="'+category+'">'+name+'</div>';

    var textoRuta = $(".texto-ruta").html();

    if($('#'+category).html()!==undefined)
    {
        $('#'+category).html(name);
        console.log($('#'+category));
    }
    else
    {
        $(".texto-ruta").html(textoRuta + " / " +element);
        console.log($('.texto-ruta'));
    }


    
}