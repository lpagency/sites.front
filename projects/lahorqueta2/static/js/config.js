
/* global $ */
/* global Utils */
/* global unescape */
/* global document */
/* export config */
'use strict';
    var base_url = $.environmentVar(
        'https://betaapi.loadingplay.com/',
        'https://betaapi.loadingplay.com/',
        'https://betaapi.loadingplay.com/');
    var checkout_url = $.environmentVar(
        'https://betapay.loadingplay.com',
        'https://betapay.loadingplay.com',
        'https://betapay.loadingplay.com');
    var app_public = $.environmentVar(64,64,64);
    var site_name = $.environmentVar('lahorqueta2', 'lahorqueta2', 'lahorqueta2');
