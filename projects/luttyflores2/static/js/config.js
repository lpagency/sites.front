/* global $ */
/* global Utils */
/* global unescape */
/* global document */
/* export config */
'use strict';
    
    var base_url = $.environmentVar(
        'http://apibodegas.ondev.today/',
        'https://betaapi.loadingplay.com/',
        'https://betaapi.loadingplay.com/');
    var checkout_url = $.environmentVar(
        'http://lpcheckout.ondev.today',
        'https://betapay.loadingplay.com',
        'https://betapay.loadingplay.com');
    var app_public = $.environmentVar(65,48,48);
    var site_name = $.environmentVar('luttyflores', 'luttyflores', 'luttyflores');
