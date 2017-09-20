/* global $ */
/* global Utils */
/* global unescape */
/* global document */
/* export config */
'use strict';

        var base_url = $.environmentVar(
            'http://apibodegas.ondev.today/',
            'http://apibodegas.ondev.today/',
            'https://apibodegas.loadingplay.com/');
        var checkout_url = $.environmentVar(
            'http://betapay.loadingplay.com',
            'http://betapay.loadingplay.com',
            'https://pay.loadingplay.com');
        var app_public = $.environmentVar(15,15,15);
        var site_name = $.environmentVar('complementa', 'complementa', 'complementa');