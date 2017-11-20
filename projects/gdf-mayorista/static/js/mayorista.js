var sendToCheckout = function(price, product, combination, name, img)
{
    var facade = $('.product_detail').data('ecommerce');

    facade.ecommerce.cart.addProduct(
        parseInt(product), // product.id, 
        name,
        combination,
        price,// product.price, 
        name, 
        1, // product.upp, 
        "", // product.bullet1, 
        "", // product.bullet2, 
        "", // product.bullet3,
        img, // product.images, 
        ""
    );
};

var remover = function(id)
{
    $(".remove-product").each(function()
    {
         if($(this).attr("lp-cart-remove-one") == id)
        {
            $(this).click();
        }
    });
}

$(document).ready(function()
{
    setTimeout(function()
    {
        var resta = $(".precio").html();
        resta = resta.split("+");
        resta = resta[0].toString();
        resta = resta.split("$");
        resta = resta[1].toString();
        resta = resta.replace(".","");
        resta = parseInt(resta);


        $(document).on("click", ".fa-plus-square", function()
        {

            var subtotal = $(".precio").html();
            var nombre = $(".title-detail").html();
            var idProducto = $(".id-producto").html();
            var img = $(".img_detail").attr("src");
            var talla = $(this).attr("product-id");
            subtotal = subtotal.split("+");
            subtotal = subtotal[0].toString();
            subtotal = subtotal.split("$");
            subtotal = subtotal[1].toString();
            subtotal = subtotal.replace(".","");
            subtotal = parseInt(subtotal);

            var aux = parseInt($("#"+$(this).attr("product-id")).html());
            if(aux < parseInt($(this).attr("va")))
            {
                aux = aux + 1;

                subtotal = subtotal * aux;

                subtotal = subtotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

                $(this).parent().parent().children(".variant-s").html("$"+subtotal);
                sendToCheckout(subtotal, idProducto, talla, nombre, img);

                window.id = $(".add-one").attr("product-id");
            }

            $("#"+$(this).attr("product-id")).html(aux);
        });

        $(document).on("click", ".fa-minus-square", function()
        {
            var subtotal = $(this).parent().parent().children(".variant-s").html();
            var nombre = $(".title-detail").html();
            var idProducto = $(".id-producto").html();
            var img = $(".img_detail").attr("src");
            var talla = $(this).attr("product-id");
            subtotal = subtotal.split("+");
            subtotal = subtotal[0].toString();
            subtotal = subtotal.split("$");
            subtotal = subtotal[1].toString();
            subtotal = subtotal.replace(".","");
            subtotal = parseInt(subtotal);

            var aux = parseInt($("#"+$(this).attr("product-id")).html());
            if(aux > 0)
            {
                aux = aux - 1;

                subtotal = subtotal - resta;

                subtotal = subtotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

                $(this).parent().parent().children(".variant-s").html("$"+subtotal);
                remover(window.id);
            }
            $("#"+$(this).attr("product-id")).html(aux);
        });
    },2000);
});