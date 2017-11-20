$(document).ready(function()
{
    var base_url = $.environmentVar(
        'http://localhost:8520/',
        'https://betaapi.loadingplay.com/',
        'https://betaapi.loadingplay.com/'
    );

    var checkout_url = $.environmentVar(
        'http://localhost:8522/',
        'https://betapay.loadingplay.com/',
        'https://betapay.loadingplay.com/'
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
