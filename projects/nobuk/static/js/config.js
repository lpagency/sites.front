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
    'https://lpcheckout.ondev.today',
    'https://lpcheckout.ondev.today',
    'https://checkout.loadingplay.com');
var app_public = $.environmentVar(34,34,34);
