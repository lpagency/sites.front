$(document).ready(function(){
    // if ( document.location.href.indexOf("redukcal.cl") != -1) {
    //     $(document).ecommerce(
    //     {
    //         'app_public' : 4,
    //         'products_per_page' : 36,
    //         'base_url' : 'https://apibodegas.loadingplay.com/',
    //         'checkout_url': 'https://checkout.loadingplay.com',
    //         'ignore_stock' : true
    //     });

    // } else {
        $(document).ecommerce({
            'app_public' : 4,
            'products_per_page' : 36,
            'base_url' : 'https://apibodegas.loadingplay.com/',
            'checkout_url': 'http://lpcheckout.ondev.today',
            'ignore_stock' : true
        });
    // }
});