$(document).ready(function()
{
    var base_url = $.environmentVar(
        'http://localhost:8520/',
        'https://apibodegas.loadingplay.com/',
        'https://apibodegas.loadingplay.com/'
    );

    var checkout_url = $.environmentVar(
        'http://localhost:8522/',
        'https://pay.loadingplay.com/',
        'https://pay.loadingplay.com/'
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
