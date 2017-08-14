    $(document).ready(function()
    {

      var hyper = Utils.getUrlParameter('tag');
      if(hyper == undefined){
        hyper = "";
      }else{
        hyper = Utils.getUrlParameter('tag').split(',');
      }

      $(".limpiar").addClass("hidden");

      window.listaTag = [];

      var base_url = $.environmentVar(
          'https://apibodegas.loadingplay.com/',
          'https://apibodegas.loadingplay.com/',
          'https://apibodegas.loadingplay.com/');
      var checkout_url = $.environmentVar(
          'https://pay.loadingplay.com',
          'https://pay.loadingplay.com',
          'https://pay.loadingplay.com');
      var app_public = $.environmentVar(50,50,50);

      window.config = {
          'app_public': app_public,
          'base_url': base_url,
          'products_per_page' : 9, 
          'tag': '',
          'ignore_stock': false,
          'infinite_scroll': true,
          // 'maxProducts': 100,
          'checkout_url': checkout_url, 
          'operator' :'or',
          'onLoad': function(products) 
          {


            $(".letrero-nuevo").each(function(){
              var tags = $(this).attr("nuevo");
              if(tags.search("nuevo") != -1){
                $(this).removeClass("hidden");
              }
            });

            var h =" - "+products.length.toString()+" Items";

            $(".descuento-lis").each(function()
              {
                var main = $(this).attr("main-price");
                var promotion = $(this).attr("promotion-price");

                if(promotion != 0){
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
        $(document).ecommerce("destroy");

        $(document).ecommerce(config);

        return false;

      });

      $(document).on("click", ".nombre", function(ev)
      {
        ev.preventDefault();
        config.column = "name";
        config.direction = "asc";

        $('.products').html("");
        $(document).ecommerce("destroy");

        $(document).ecommerce(config);

        return false;

      });

      //<-------------END ORDENAR MAYOR, MENOR Y POR ORDEN------------->
      try
      {
        listaTag = Utils.getUrlParameter('tag').split(',');
        window.onload = TagURL(listaTag);
      }
      catch (ex)
      {
        listaTag = [];
        window.onload = TagURL(listaTag);
      }
      config.tag = listaTag.join(',');
      $('.products').ecommerce(config);

      $(document).ecommerce(config);

      $(".limpiar").click(function()
      {
        limpiar(config, hyper);
      });

      $(document).on("click", ".variables1", function(ev){

        ev.preventDefault();
        var variable = $(this).attr("tag");
        $(this).removeClass("activo");
        $(".c-"+variable).removeClass("hidden");

        $(".c-variable_2").addClass('hidden');
        $(".c-variable_3").addClass('hidden');

      });

      $(document).on("click", ".variables2", function(ev){

        ev.preventDefault();
        var variable = $(this).attr("tag");
        $(this).removeClass("activo");
        $(".c-"+variable).removeClass("hidden");

        $(".c-variable_1").addClass('hidden');
        $(".c-variable_3").addClass('hidden');

      });

      $(document).on("click", ".variables3", function(ev){

        ev.preventDefault();
        var variable = $(this).attr("tag");
        $(this).removeClass("activo");
        $(".c-"+variable).removeClass("hidden");

        $(".c-variable_2").addClass('hidden');
        $(".c-variable_1").addClass('hidden');

      });


});




//<-------------------FUNCIONES-------------------->



//<----------------FUNCION UNCHECK----------------->

function uncheck(tag, value)
{

  if(value == undefined)
  {
    var nombre2 = "+"+tag;

    $( "."+tag ).remove();
    $(".ch-"+tag).addClass("hidden");
    var textoRuta = $(".texto-ruta").html();

    textoRuta = textoRuta.replace(" / "+tag, "");

    $(".texto-ruta").html(textoRuta);

    for(x in window.listaTag){
      if(window.listaTag[x] == nombre2){
        window.listaTag.splice(x,1);
        window.config.tag =window.listaTag.toString();
      }
    }

    history.pushState('', 'Placare', 'listado_productos?tag='+window.config.tag);
    $('.products').ecommerce('destroy');
    $('.products').ecommerce(window.config);
  }
  else
  {
    var va = value;
    var nombre2 = "+"+tag;

    $( "."+tag ).remove();
    $(".ch-"+tag).addClass("hidden");
    var textoRuta = $(".texto-ruta").html();

    textoRuta = textoRuta.replace(" / "+va, "");

    $(".texto-ruta").html(textoRuta);

    for(x in window.listaTag){
      if(window.listaTag[x] == nombre2){
        window.listaTag.splice(x,1);
        window.config.tag =window.listaTag.toString();
      }
    }

    history.pushState('', 'Placare', 'listado_productos?tag='+window.config.tag);
    $('.products').ecommerce('destroy');
    $('.products').ecommerce(window.config);
  }
}

//<--------------END FUNCION UNCHECK--------------->

//<-----------------FUNCION CHECK------------------>

function check(tag, value)
{

  if(value == undefined)
  {

    var nombre = tag;
    var block = 
              '<ul class="fil-ul '+nombre+'"><li class="li-fil"><div class="ordenar-precio '+nombre+'"> '
                +nombre+' <i class="fa fa-times aria-hidden="true" onclick="borrar('+"'"+nombre+"'"+')"></i></div></li></ul>';

    var classNombre = "."+nombre;
    var nombre2 = "+"+nombre;
    var textoRuta = $(".texto-ruta").html();

    $(".ch-"+nombre).removeClass("hidden");
    $(".filtrosRec").html($(".filtrosRec").html() + block);

    if($(".limpiar").hasClass("hidden"))
    {
      $(".limpiar").removeClass("hidden");
    }

    $(".texto-ruta").html(textoRuta + " / " +nombre);
    var textoRuta = $(".texto-ruta").html();
    localStorage.setItem("subcategoriaProd", $(".texto-ruta").html());

    window.listaTag.push(nombre2);
    window.config.tag = window.listaTag.toString();

    history.pushState('', 'Placare', 'listado_productos?tag='+window.config.tag);

    $('.products').ecommerce('destroy');
    $('.products').ecommerce(window.config);
  }
  else
  {

    var nombre = tag;
    var va = value;
    var block = 
              '<ul class="fil-ul '+nombre+'"><li class="li-fil"><div class="ordenar-precio '+nombre+'"> '
                +va+' <i class="fa fa-times" aria-hidden="true" onclick="borrar('+"'"+nombre+"'"+','+"'"+va+"'"+')"></i></div></li></ul>';

    var classNombre = "."+nombre;
    var nombre2 = "+"+nombre;
    var textoRuta = $(".texto-ruta").html();

    lista = Utils.getUrlParameter('tag').split(',');

    $(".ch-"+nombre).removeClass("hidden");
    $(".filtrosRec").html($(".filtrosRec").html() + block);

    if($(".limpiar").hasClass("hidden"))
    {
      $(".limpiar").removeClass("hidden");
    }

    $(".texto-ruta").html(textoRuta + " / " +va);
    var textoRuta = $(".texto-ruta").html();
    localStorage.setItem("subcategoriaProd", $(".texto-ruta").html());

    window.listaTag.push(nombre2);
    window.config.tag = window.listaTag.toString();

    history.pushState('', 'Placare', 'listado_productos?tag='+window.config.tag);

    $('.products').ecommerce('destroy');
    $('.products').ecommerce(window.config);
  }
};

//<---------------END FUNCION CHECK---------------->

//<--------FUNCION TOMA TAG DESDE LA URL----------->

function TagURL(listaTag)
{

  for (l in listaTag)
  {
    var a = listaTag[l].replace("+", "");
    var b = ".c-" + a;

    if (b != ".c-mujer" && b != ".c--hombre" && b != ".c--mujer" && b != ".c-hombre")
    {

      if($(b).hasClass("check") && $(b).hasClass("categ"))
      {
        var nombre = $(b).attr("tag");
        var va = $(b).attr("value");
        var block =
          '<ul class="fil-ul '+nombre+'"><li class="li-fil"><div class="ordenar-precio '+nombre+'"> '
              +va+' <i class="fa fa-times aria-hidden="true" onclick="borrar('+"'"+nombre+"'"+','+"'"+va+"'"+')"></i></div></li></ul>';

        var classNombre = "." + nombre;
        var textoRuta = $(".texto-ruta").html();
        var fa = "fa-" + nombre;

        $(b).attr("checked", true);
        $(".ch-"+nombre).removeClass("hidden");

        if($(".ch-"+nombre).hasClass("c-variable_uno")){
          $(".c-variable_1").removeClass("hidden");
          $(".c-variable_2").addClass("hidden");
        }
        if($(".ch-"+nombre).hasClass("c-variable_2")){
          $(".c-variable_2").removeClass("hidden");
          $(".c-variable_2").addClass("hidden");
        }
        if($(".ch-"+nombre).hasClass("c-variable_3")){
          $(".c-variable_3").removeClass("hidden");
          $(".c-variable_2").addClass("hidden");
        }

        $(".texto-ruta").html(textoRuta +" / "+ va);

        $(".filtrosRec").html($(".filtrosRec").html() + block);
        $(".limpiar").removeClass("hidden");
      }
      else
      {
        if ($(b).hasClass("categ"))
        {

          var nombre = $(b).attr("tag");
          var block =
            '<ul class="fil-ul '+nombre+'"><li class="li-fil"><div class="ordenar-precio '+nombre+'"> '
                +nombre+' <i class="fa fa-times aria-hidden="true" onclick="borrar('+"'"+nombre+"'"+')"></i></div></li></ul>';

          var classNombre = "." + nombre;
          var textoRuta = $(".texto-ruta").html();
          var fa = "fa-" + nombre;

          $(b).attr("checked", true);
          $(".ch-"+nombre).removeClass("hidden");

          $(".texto-ruta").html(textoRuta +" / "+ nombre);

          $(".filtrosRec").html($(".filtrosRec").html() + block);
          $(".limpiar").removeClass("hidden");
        }
      }
    }
  }
};

//<------END FUNCION TOMA TAG DESDE LA URL--------->

//<---------------FUNCION LIMPIAR------------------>

function limpiar(config, hyper)
{
  $(".filtrosRec").html("");
  if ($(".categ").is( ":checked" ))
  {
    $(this).prop('checked', false);
  }

  $(".limpiar").addClass("hidden");
  $(".texto-ruta").html("Home ");
  $(".fa-check-square").addClass("hidden");

  config.tag =hyper[0] +","+ hyper[1];

  listaTag = [];

  listaTag.push(config.tag);
  $('.products').ecommerce('destroy');
  $('.products').ecommerce(config);
  history.pushState('', 'Placare', 'listado_productos?tag='+config.tag);
};

//<-------------END FUNCION LIMPIAR---------------->

//<----------------FUNCION BORRAR------------------>

function borrar(nombre,value)
{

  if(value == undefined)
  {
    $( "."+nombre ).remove();
    $(".ch-"+nombre).addClass("hidden");

    var textoRuta = $(".texto-ruta").html();
    var nombre2 = "+"+nombre;

    textoRuta = textoRuta.replace(" / "+nombre, "");
    $(".texto-ruta").html(textoRuta);

    for(x in window.listaTag){
      if(window.listaTag[x] == nombre2){
        window.listaTag.splice(x,1);
        window.config.tag =window.listaTag.toString();
      };
    };
    history.pushState('', 'Placare', 'listado_productos?tag='+window.config.tag);

    $('.products').ecommerce('destroy');
    $('.products').ecommerce(window.config);
  }
  else
  {
    $( "."+nombre ).remove();
    $(".ch-"+nombre).addClass("hidden");

    var textoRuta = $(".texto-ruta").html();
    var nombre2 = "+"+nombre;

    textoRuta = textoRuta.replace(" / "+value, "");
    $(".texto-ruta").html(textoRuta);

    for(x in window.listaTag){
      if(window.listaTag[x] == nombre2){
        window.listaTag.splice(x,1);
        window.config.tag =window.listaTag.toString();
      };
    };

    history.pushState('', 'Placare', 'listado_productos?tag='+window.config.tag);

    $('.products').ecommerce('destroy');
    $('.products').ecommerce(window.config);
  }
};