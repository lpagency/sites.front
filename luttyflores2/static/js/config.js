/* global $ */
/* global Utils */
/* global unescape */
/* global document */
/* export config */
'use strict';

var base_url = $.environmentVar(
    'https://apibodegas.loadingplay.com/',
    'http://apibodegas.ondev.today/',
    'https://apibodegas.loadingplay.com/');
var checkout_url = $.environmentVar(
    'https://checkout.loadingplay.com',
    'http://lpcheckout.ondev.today',
    'https://checkout.loadingplay.com');
var app_public = $.environmentVar(48,45,48);
