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
            'http://lpcheckout.ondev.today',
            'http://lpcheckout.ondev.today',
            'https://betapay.loadingplay.com');
        var app_public = $.environmentVar(2,2,2);
        var site_name = $.environmentVar('familymarket', 'familymarket', 'familymarket'); 