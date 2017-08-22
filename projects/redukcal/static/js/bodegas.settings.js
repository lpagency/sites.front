$(document).ready(function()
{
    var base_url = $.environmentVar(
        'http://localhost:8520/',
        'http://apibodegas.ondev.today/',
        'https://apibodegas.loadingplay.com/'
    );

    var checkout_url = $.environmentVar(
        'http://localhost:8522/',
        'http://lpcheckout.ondev.today/',
        'https://checkout.loadingplay.com/'
    );

    $(document).ecommerce(
    {
        'app_public' : 4,
        'products_per_page' : 36,
        'base_url' : base_url,
        'checkout_url' : checkout_url,
        'ignore_stock' : true
    });
});
