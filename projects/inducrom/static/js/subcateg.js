$(document).ready(function()
    {
      $(document).ready(function()
  {
    if($(window).width() < 800)
    {
      $(".desk").remove();
    }
  });
    $(document).on("click", ".subcateg", function(ev){
        ev.stopPropagation();

        var tags = $(this).attr("tag");

      if( tags == "control_de_acceso"){
        $(".tituloCategoria").html("CONTROL DE ACCESO");
        log = $(".tituloCategoria").html().toLowerCase();
        if(!$(".products").hasClass("hidden"))
        {
          $(".products").addClass("hidden");
        }
        if($(".banners").hasClass("hidden"))
        {
          $(".banners").removeClass("hidden");
        }
        $(".ban").addClass("hidden");
        $(".control_de_acceso").removeClass("hidden");
      }
      if( tags == "productos_ecologicos"){
        $(".tituloCategoria").html("PRODUCTOS ECOLÓGICOS");
        log = $(".tituloCategoria").html().toLowerCase();
        if(!$(".products").hasClass("hidden"))
        {
          $(".products").addClass("hidden");
        }
        if($(".banners").hasClass("hidden"))
        {
          $(".banners").removeClass("hidden");
        }
        $(".ban").addClass("hidden");
        $(".basureros").removeClass("hidden");
      }
      if( tags == "mobiliario_urbano"){
        $(".tituloCategoria").html("MOBILIARIO URBANO");
        log = $(".tituloCategoria").html().toLowerCase();
        if(!$(".products").hasClass("hidden"))
        {
          $(".products").addClass("hidden");
        }
        if($(".banners").hasClass("hidden"))
        {
          $(".banners").removeClass("hidden");
        }
        $(".ban").addClass("hidden");
        $(".mob_urbano").removeClass("hidden");
      }
      if( tags == "espacios_publicos"){
        $(".tituloCategoria").html("ESPACIOS PÚBLICOS");
        log = $(".tituloCategoria").html().toLowerCase();
        if(!$(".products").hasClass("hidden"))
        {
          $(".products").addClass("hidden");
        }
        if($(".banners").hasClass("hidden"))
        {
          $(".banners").removeClass("hidden");
        }
        $(".ban").addClass("hidden");
        $(".espa_publicos").removeClass("hidden");
      }
      if( tags == "productos_especiales"){
        $(".tituloCategoria").html("PRODUCTOS ESPECIALES");
        log = $(".tituloCategoria").html().toLowerCase();
        if(!$(".products").hasClass("hidden"))
        {
          $(".products").addClass("hidden");
        }
        if($(".banners").hasClass("hidden"))
        {
          $(".banners").removeClass("hidden");
        }
        $(".ban").addClass("hidden");
        $(".prod_especiales").removeClass("hidden");
      }
      if( tags == "productos_nuevos"){
        $(".tituloCategoria").html("MOBILIARIO NUEVOS");
        log = $(".tituloCategoria").html().toLowerCase();
        if(!$(".products").hasClass("hidden"))
        {
          $(".products").addClass("hidden");
        }
        if($(".banners").hasClass("hidden"))
        {
          $(".banners").removeClass("hidden");
        }
        $(".ban").addClass("hidden");
        $(".prod_nuevos").removeClass("hidden");
      }

        $(".subcateg").removeClass('active');
        $(this).addClass('active');

        //MUESTRA LA FLECHA

        $(".fa-caret-right").addClass('hidden');
        $(this).parent().find("i").removeClass('hidden');

        if($(this).hasClass("index")){
          $(".fa-caret-right").addClass('hidden');
          $(this).parent().find("i").removeClass('hidden');
        }

        //MUESTRA LA CATEGORIA COMO TITULO

        var valorSubCateg = $(this).attr("sub");
        var valorSubCateg2 = $(this).attr("sub2");
        $(".tituloCategoria").html(valorSubCateg2);

        //MUESTRA LA CATEGORIA EN HOME | SUBCATEGORIAS

        var catProd = $(".buscaCat").html(" Home | " + valorSubCateg);

        localStorage.setItem("subcategoriaProd"," Home | " + valorSubCateg2);

    });

    $(document).live("touchstart", ".subcateg", function(ev){
        ev.stopPropagation();

        var tags = $(this).attr("tag");

      if( tags == "control_de_acceso"){
        $(".tituloCategoria").html("CONTROL DE ACCESO");
        log = $(".tituloCategoria").html().toLowerCase();
        if(!$(".products").hasClass("hidden"))
        {
          $(".products").addClass("hidden");
        }
        if($(".banners").hasClass("hidden"))
        {
          $(".banners").removeClass("hidden");
        }
        $(".ban").addClass("hidden");
        $(".control_de_acceso").removeClass("hidden");
      }
      if( tags == "productos_ecologicos"){
        $(".tituloCategoria").html("PRODUCTOS ECOLÓGICOS");
        log = $(".tituloCategoria").html().toLowerCase();
        if(!$(".products").hasClass("hidden"))
        {
          $(".products").addClass("hidden");
        }
        if($(".banners").hasClass("hidden"))
        {
          $(".banners").removeClass("hidden");
        }
        $(".ban").addClass("hidden");
        $(".basureros").removeClass("hidden");
      }
      if( tags == "mobiliario_urbano"){
        $(".tituloCategoria").html("MOBILIARIO URBANO");
        log = $(".tituloCategoria").html().toLowerCase();
        if(!$(".products").hasClass("hidden"))
        {
          $(".products").addClass("hidden");
        }
        if($(".banners").hasClass("hidden"))
        {
          $(".banners").removeClass("hidden");
        }
        $(".ban").addClass("hidden");
        $(".mob_urbano").removeClass("hidden");
      }
      if( tags == "espacios_publicos"){
        $(".tituloCategoria").html("ESPACIOS PÚBLICOS");
        log = $(".tituloCategoria").html().toLowerCase();
        if(!$(".products").hasClass("hidden"))
        {
          $(".products").addClass("hidden");
        }
        if($(".banners").hasClass("hidden"))
        {
          $(".banners").removeClass("hidden");
        }
        $(".ban").addClass("hidden");
        $(".espa_publicos").removeClass("hidden");
      }
      if( tags == "productos_especiales"){
        $(".tituloCategoria").html("PRODUCTOS ESPECIALES");
        log = $(".tituloCategoria").html().toLowerCase();
        if(!$(".products").hasClass("hidden"))
        {
          $(".products").addClass("hidden");
        }
        if($(".banners").hasClass("hidden"))
        {
          $(".banners").removeClass("hidden");
        }
        $(".ban").addClass("hidden");
        $(".prod_especiales").removeClass("hidden");
      }
      if( tags == "productos_nuevos"){
        $(".tituloCategoria").html("MOBILIARIO NUEVOS");
        log = $(".tituloCategoria").html().toLowerCase();
        if(!$(".products").hasClass("hidden"))
        {
          $(".products").addClass("hidden");
        }
        if($(".banners").hasClass("hidden"))
        {
          $(".banners").removeClass("hidden");
        }
        $(".ban").addClass("hidden");
        $(".prod_nuevos").removeClass("hidden");
      }

        $(".subcateg").removeClass('active');
        $(this).addClass('active');

        //MUESTRA LA FLECHA

        $(".fa-caret-right").addClass('hidden');
        $(this).parent().find("i").removeClass('hidden');

        if($(this).hasClass("index")){
          $(".fa-caret-right").addClass('hidden');
          $(this).parent().find("i").removeClass('hidden');
        }

        //MUESTRA LA CATEGORIA COMO TITULO

        var valorSubCateg = $(this).attr("sub");
        var valorSubCateg2 = $(this).attr("sub2");
        $(".tituloCategoria").html(valorSubCateg2);

        //MUESTRA LA CATEGORIA EN HOME | SUBCATEGORIAS

        var catProd = $(".buscaCat").html(" Home | " + valorSubCateg);

        localStorage.setItem("subcategoriaProd"," Home | " + valorSubCateg2);

    });

    $(document).on("click", ".subcateg-ban", function(ev){
        ev.stopPropagation();

        var tags = $(this).attr("tag");

      if( tags == "control_de_acceso"){
        $(".tituloCategoria").html("CONTROL DE ACCESO");
        log = $(".tituloCategoria").html().toLowerCase();
        if(!$(".products").hasClass("hidden"))
        {
          $(".products").addClass("hidden");
        }
        if($(".banners").hasClass("hidden"))
        {
          $(".banners").removeClass("hidden");
        }
        $(".ban").addClass("hidden");
        $(".control_de_acceso").removeClass("hidden");
      }
      if( tags == "productos_ecologicos"){
        $(".tituloCategoria").html("PRODUCTOS ECOLÓGICOS");
        log = $(".tituloCategoria").html().toLowerCase();
        if(!$(".products").hasClass("hidden"))
        {
          $(".products").addClass("hidden");
        }
        if($(".banners").hasClass("hidden"))
        {
          $(".banners").removeClass("hidden");
        }
        $(".ban").addClass("hidden");
        $(".basureros").removeClass("hidden");
      }
      if( tags == "mobiliario_urbano"){
        $(".tituloCategoria").html("MOBILIARIO URBANO");
        log = $(".tituloCategoria").html().toLowerCase();
        if(!$(".products").hasClass("hidden"))
        {
          $(".products").addClass("hidden");
        }
        if($(".banners").hasClass("hidden"))
        {
          $(".banners").removeClass("hidden");
        }
        $(".ban").addClass("hidden");
        $(".mob_urbano").removeClass("hidden");
      }
      if( tags == "espacios_publicos"){
        $(".tituloCategoria").html("ESPACIOS PÚBLICOS");
        log = $(".tituloCategoria").html().toLowerCase();
        if(!$(".products").hasClass("hidden"))
        {
          $(".products").addClass("hidden");
        }
        if($(".banners").hasClass("hidden"))
        {
          $(".banners").removeClass("hidden");
        }
        $(".ban").addClass("hidden");
        $(".espa_publicos").removeClass("hidden");
      }
      if( tags == "productos_especiales"){
        $(".tituloCategoria").html("PRODUCTOS ESPECIALES");
        log = $(".tituloCategoria").html().toLowerCase();
        if(!$(".products").hasClass("hidden"))
        {
          $(".products").addClass("hidden");
        }
        if($(".banners").hasClass("hidden"))
        {
          $(".banners").removeClass("hidden");
        }
        $(".ban").addClass("hidden");
        $(".prod_especiales").removeClass("hidden");
      }
      if( tags == "productos_nuevos"){
        $(".tituloCategoria").html("MOBILIARIO NUEVOS");
        log = $(".tituloCategoria").html().toLowerCase();
        if(!$(".products").hasClass("hidden"))
        {
          $(".products").addClass("hidden");
        }
        if($(".banners").hasClass("hidden"))
        {
          $(".banners").removeClass("hidden");
        }
        $(".ban").addClass("hidden");
        $(".prod_nuevos").removeClass("hidden");
      }

        $(".subcateg").removeClass('active');
        $(this).addClass('active');

        //MUESTRA LA FLECHA

        $(".fa-caret-right").addClass('hidden');
        $(this).parent().find("i").removeClass('hidden');

        if($(this).hasClass("index")){
          $(".fa-caret-right").addClass('hidden');
          $(this).parent().find("i").removeClass('hidden');
        }

        //MUESTRA LA CATEGORIA COMO TITULO

        var valorSubCateg = $(this).attr("sub");
        var valorSubCateg2 = $(this).attr("sub2");
        $(".tituloCategoria").html(valorSubCateg2);

        //MUESTRA LA CATEGORIA EN HOME | SUBCATEGORIAS

        var catProd = $(".buscaCat").html(" Home | " + valorSubCateg);

        localStorage.setItem("subcategoriaProd"," Home | " + valorSubCateg2);

    });


  });