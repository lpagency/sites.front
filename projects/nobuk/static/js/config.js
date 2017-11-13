/* global $ */
/* global Utils */
/* global unescape */
/* global document */
/* export config */
'use strict';

var base_url = $.environmentVar(
    'https://apibodegas.ondev.today/',
    'https://apibodegas.ondev.today/',
    'https://betaapi.loadingplay.com/');
var checkout_url = $.environmentVar(
    'https://lpcheckout.ondev.today',
    'https://lpcheckout.ondev.today',
    'https://betapay.loadingplay.com');
var app_public = $.environmentVar(34,34,34);
