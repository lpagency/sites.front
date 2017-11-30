
    $(document).ready(function(){
        var cookieCotizar = getCookie("url");
        window.urlVolver = cookieCotizar;

        $(".volver").attr("src", urlVolver);
        $(".demo").attr("href", urlVolver);
    });


function setCookie(cname,cvalue) {

    document.cookie = cname + "=" + cvalue + ";path=/";
}

function getCookie1(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

  function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
  }

  $(document).ready(function(){

        var cookie = getCookie("shopping-cart");
        var prod = "";

    $.get("https://apibodegas.loadingplay.com/v1/cart/"+cookie, function(p){
        for (x in p.cart.items) {
            prod = prod + "sku: " + p.cart.items[x].sku + ", nombre: "+ p.cart.items[x].name +", Cantidad: " + p.cart.items[x].quantity +"\n";
        }

        $(".cotizar").html(prod);

      });

    var cookie = getCookie("shopping-cart");

    $(document).on("click", ".add-one", function(){
        $.get("https://apibodegas.loadingplay.com/v1/cart"+cookie, function(p){ 

            for (x in p.cart.items) {
                var prod = "sku: " + p.cart.items[x].sku + ", nombre: "+ p.cart.items[x].name +", Cantidad: " + p.cart.items[x].quantity +"\n" + prod;
            }

            $(".cotizar").html(prod);

        });
    });
  });

  $(document).ready(function(){
    var cookie = getCookie("shopping-cart");

    $(document).on("click", ".remove-one", function(){
        $.get("https://apibodegas.loadingplay.com/v1/cart"+cookie, function(p){ 

            for (x in p.cart.items) {
                var prod = "sku: " + p.cart.items[x].sku + ", nombre: "+ p.cart.items[x].name +", Cantidad: " + p.cart.items[x].quantity +"\n" + prod;
            }

            $(".cotizar").html(prod);

        });
    });
  });

  $(document).ready(function(){




    $(document).on("blur", ".input-form", function(){
        var nombre = $(".nombre").val();
        var apellido = $(".apellido").val();
        var telefono = $(".telefono").val();
        var email = $(".email").val();

        var cookieNombre = $.cookie("user-name", nombre);
        var cookieApellido = $.cookie("last-name", apellido);
        var cookieTelefono = $.cookie("telephone-number", telefono);
        var cookieEmail = $.cookie("e-mail", email);

    });

    var cookie1 = $.cookie("user-name");
    var cookie2 = $.cookie("last-name");
    var cookie3 = $.cookie("telephone-number");
    var cookie4 = $.cookie("e-mail");

    $(".nombre").val(cookie1);
    $(".apellido").val(cookie2);
    $(".telefono").val(cookie3);
    $(".email").val(cookie4);


  });


    //Expresión para validar un correo electrónico
        var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
        //Expresión para validar edad de 18 a 60 años
        var expr2 = /^1[8-9]|[2-5]\d|60$/;

        var expr3 = /^([0-8]+){8}$/;
        $(document).ready(function(){
            //función click
            $("#bEnviar").click(function(){

                //Guardar en variables el valor que tengan las cajas de texto
                //Por medio de los id's
                //Y tener mejor manipulación de dichos valores
                var nombre = $("#itNombre").val();
                var apellido = $("#itApellido").val();
                var correo = $("#itMail").val();
                var asunto = $("#itComentario").val();
                var telefono = $("#itTelefono").val();

                var error_count = 0;
 
                // --- Condicionales anidados ----
                //Si nombre está vacío
                //Muestra el mensaje
                //Con false sale de los if's y espera a que sea pulsado de nuevo el botón de enviar
                if(nombre == ""){
                    $("#itNombre").parents(".form-group").addClass("has-error");
                    $(".help-nombre").removeClass('hidden');
                    error_count += 1;
                }
                //en otro caso, el mensaje no se muestra
                else{
                    $("#itNombre").parents(".form-group").removeClass("has-error");
                    $(".help-nombre").addClass('hidden');
                }

                if(apellido == ""){
                    $("#itApellido").parents(".form-group").addClass("has-error");
                    $(".help-apellido").removeClass('hidden');
                    error_count += 1;
                }
                //en otro caso, el mensaje no se muestra
                else{
                    $("#itApellido").parents(".form-group").removeClass("has-error");
                    $(".help-apellido").addClass('hidden');
                }

                //Si correo está vacío y la expresión NO corresponde -test es función de JQuery
                //Muestra el mensaje
                //Con false sale de los if's y espera a que sea pulsado de nuevo el botón de enviar
                if(correo == "" || !expr.test(correo)){
                    $("#itMail").parents(".form-group").addClass("has-error");
                    $(".help-mail").removeClass('hidden');
                    error_count += 1;
                }
                else
                {
                    $("#itMail").parents(".form-group").removeClass("has-error");
                    $(".help-mail").addClass('hidden');
                }

                if(telefono == "" || !expr3.test(telefono)){
                    $("#itTelefono").parents(".form-group").addClass("has-error");
                    $(".help-telefono").removeClass('hidden');
                    error_count += 1;
                }
                else
                {
                    $("#itTelefono").parents(".form-group").removeClass("has-error");
                    $(".help-telefono").addClass('hidden');
                }


                if(asunto == ""){
                    $("#itComentario").parents(".form-group").addClass("has-error");
                    $(".help-comentario").removeClass('hidden');
                    error_count += 1;
                }
                else
                {
                    $("#itComentario").parents(".form-group").removeClass("has-error");
                    $(".help-comentario").addClass('hidden');
                }

                if (error_count > 0)
                {
                    return false;
                }
 
            });//click
        });//ready

  $(document).ready(function(){

      $(document).on("click", ".formulario",function(){

        document.cookie = 'shopping-cart=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';

        $.removeCookie("user-name");
        $.removeCookie("last-name");
        $.removeCookie("telephone-number");
        $.removeCookie("e-mail");

      });
  });

    $(document).ready(function()
    {
        $(document).on("click", ".demo", function(ev)
        {
            ev.preventDefault();
            window.location.href = window.urlVolver;
        });
    });