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
var app_public = $.environmentVar(65,65,65);
var site_name = $.environmentVar('inducrom-tienda', 'inducrom-tienda', 'inducrom-tienda');
