/* global $ */
/* global Utils */
/* global unescape */
/* global document */
/* export config */
'use strict';


        var base_url = $.environmentVar(
            'http://apibodegas.ondev.today/',
            'http://apibodegas.ondev.today/',
            'http://apibodegas.ondev.today/');
        var checkout_url = $.environmentVar(
            'http://lpcheckout.ondev.today',
            'http://lpcheckout.ondev.today',
            'http://lpcheckout.ondev.today');
        var app_public = $.environmentVar(33,33,33);