$(document).ready(function(){

    $(document).on("submit", "#newsletter2", function(ev){
        ev.preventDefault();

        var nombre = $("#Nombre").val();
        var correo = $("#Mail").val();
        var asunto = $("#Comentario").val();

        var error_count = 0;

        // --- Condicionales anidados ----
        //Si nombre está vacío
        //Muestra el mensaje
        //Con false sale de los if's y espera a que sea pulsado de nuevo el botón de enviar
        if(nombre == ""){
            $("#Nombre").parents(".form-group").addClass("has-error");
            $(".help-nombre-2").removeClass('hidden');
            error_count += 1;
        }
        //en otro caso, el mensaje no se muestra
        else{
            $("#Nombre").parents(".form-group").removeClass("has-error");
            $(".help-nombre-2").addClass('hidden');
        }

        //Si correo está vacío y la expresión NO corresponde -test es función de JQuery
        //Muestra el mensaje
        //Con false sale de los if's y espera a que sea pulsado de nuevo el botón de enviar
        if(correo == "" || !expr.test(correo)){
            $("#Mail").parents(".form-group").addClass("has-error");
            $(".help-mail-2").removeClass('hidden');
            error_count += 1;
        }
        else
        {
            $("#Mail").parents(".form-group").removeClass("has-error");
            $(".help-mail-2").addClass('hidden');
        }


        if(asunto == ""){
            $("#Comentario").parents(".form-group").addClass("has-error");
            $(".help-comentario-2").removeClass('hidden');
            error_count += 1;
        }
        else
        {
            $("#Comentario").parents(".form-group").removeClass("has-error");
            $(".help-comentario-2").addClass('hidden');
        }

        if (error_count > 0)
        {
            return false;
        }else{

            var message = "Nombre: "+$("#newsletter2 input[name]").val()+"<br>";
            message += "Email: "+ $("#Mail").val() +"<br>";
            message += "Mensaje: "+$("#Comentario").val();

            $.ajax({
                url: $(this).attr("action"),
                type: 'post',
                data: $(this).serialize() + '&ajax=True&message='+message,
                success: function(data) {
                    if (data === 'ok'){
                        $("#send-message").addClass("hidden", {duration:1000,effect:'blind'});
                        $("#message-success").removeClass("hidden", {duration:1000,effect:'blind'});
                    }
                }
            });

        }

    });



        $(document).on("submit", "#newsletter", function(ev){
              // ev.preventDefault();

              var message = "Nombre: "+$("#newsletter input[name]").val()+"<br>";
              message += "Email: "+ $("#itMail").val() +"<br>";
              message += "Teléfono: "+ $("#itFono").val() +"<br>";
              message += "Mensaje: "+$("#itComentario").val();

              $.ajax({
                  url: $(this).attr("action"),
                  type: 'post',
                  data: $(this).serialize() + '&ajax=True&message='+message,
                  success: function(data) {
                      // console.log(data);
                      // if (data === 'ok'){
                      //   $(".fondo-for").addClass("hidden", {duration:1000,effect:'blind'});
                      //   $(".fondo-dos").removeClass("hidden", {duration:1000,effect:'blind'});
                      //   $(".fondo-dos").addClass("visible");
                      // }
                  }
              });



            });

});