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
    'https://checkout.loadingplay.com',
    'https://checkout.loadingplay.com',
    'https://checkout.loadingplay.com');
var app_public = $.environmentVar(65,65,65);