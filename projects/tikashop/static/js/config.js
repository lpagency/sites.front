/* global $ */
/* global Utils */
/* global unescape */
/* global document */
/* export config */
'use strict';
    
    var base_url = $.environmentVar(
        'https://apibodegas.loadingplay.com/',
        'https://apibodegas.loadingplay.com/',
        'https://apibodegas.loadingplay.com/');
    var checkout_url = $.environmentVar(
        'https://pay.loadingplay.com',
        'https://pay.loadingplay.com',
        'https://pay.loadingplay.com');
    var app_public = $.environmentVar(67,67,67);
    var site_name = $.environmentVar('tikashop', 'tikashop', 'tikashop');
