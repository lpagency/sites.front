
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
        'http://lpcheckout.ondev.today',
        'http://lpcheckout.ondev.today',
        'https://pay.loadingplay.com');
    var app_public = $.environmentVar(64,64,64);
    var site_name = $.environmentVar('lahorqueta', 'lahorqueta', 'lahorqueta');