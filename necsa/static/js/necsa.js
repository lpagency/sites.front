//lleva a div dentro de pagina
anchor = {
    init: function() {
        $("a.anchorLink").click(function() {
            console.log("llega");
            elementClick = $(this).attr("href");
            destination = $(elementClick).offset().top;
            $("html:not(:animated),body:not(:animated)").animate({
                scrollTop: destination
            },900);
            return false;
        });
    }
};


$(document).ready(function() 
{

    anchor.init();
    setTimeout(function(){
         var qtt= $(".tt.units-total span").text();

         if (parseInt(qtt)>0){
            $(".carrito-header").css("background-color", "black");
         }
    },1500);

    $(document).on("click",".add-to-cart",  function(){
        $(this).removeClass("btn_comprar");
        $(this).addClass("btn_comprado");
        $(this).text("AGREGADO");

        // $(".carrito-header").css("background-color", "red");
        $('#carrito').animate({backgroundColor: 'red'}, 'slow');
        setTimeout(function()
        { 
        $('#carrito').animate({backgroundColor: 'black'}, 'slow');
        }, 1000);
        console.log('agrega al carro');
    });


    $(document).on("click", ".close-detail", function()
    {
        // $.fancybox.close();
        $.fancybox.helpers.overlay.close();
    });

});
