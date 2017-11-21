/*global $*/
'use strict';

var base_url = 'https://apibodegas.loadingplay.com/';

function isLocalHost() {
    return document.location.href.indexOf('localhost') != -1;
}

function isDevelopment() {
    return document.location.href.indexOf('ondev.today') != -1;
}

// configure for each enviroment
if ( isLocalHost() ) 
{
    base_url = 'http://localhost:8520/';
} 
else if ( isDevelopment() ) 
{
    base_url = 'https://apibodegas.loadingplay.com/';
}

var Utils = {  //jshint ignore: line
    // base_url : 'https://apibodegas.loadingplay.com/',
    base_url: base_url,
    strEndsWith : function(str, suffix)
    {
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    },
    getURL : function(module, args) 
    {

        if (!Utils.strEndsWith(Utils.base_url, '/'))
        {
            Utils.base_url += '/';
        }


        var url = Utils.base_url + module + '/';

        if (args)
        {
            url += args.join('/');
        }

        return url;
    },
    getURLWithoutParam : function(module) 
    {
        if (!Utils.strEndsWith(Utils.base_url, '/'))
        {
            Utils.base_url += '/';
        }

        var url = Utils.base_url + module;

        return url;
    },
    friendly:function(t)
    {
        return Utils.URLBeautify(t);
    },
    hide_if_empty:function(t)
    {
        if ($.trim(t) === '')
            return 'hidden';

        return '';
    },
    extract_data:function(name, data)
    {
        name = $.trim(name);
        var splitted = [name];
        var fn = function(t){return t;};
        var d = '';

        if (name.indexOf('|') !== -1)
        {
            splitted = name.split('|');
            name = splitted[0];
            fn = Utils[splitted[1]];
        }

        try
        {
            d = eval('data.' + $.trim(name));  // jshint ignore: line
        }
        catch(e)
        {
            // nothing here...
            // console.log(e);
        }

        d = d === undefined ? '' : d;
        return fn(d);
    },
    render : function(template, data)
    {
        if (template === undefined) return '';
        var builder = '';

        var splitted_template = template.split('{{');

        for (var i = 0; i < splitted_template.length; i++) 
        {
            var name = splitted_template[i].split('}}')[0];
            var html = splitted_template[i].split('}}')[1];
            html = html === undefined ? name : html;

            var d = Utils.extract_data(name, data);

            builder += d;
            builder += html;
        }

        return builder;
    },
    getUrlParameter: function(sParam)
    {
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++) 
        {
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] == sParam) 
            {
                return sParameterName[1];
            }
        }
    },
    createUUID : function() 
    {
        // http://www.ietf.org/rfc/rfc4122.txt
        var s = [];
        var hexDigits = '0123456789abcdef';
        for (var i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = '4';  // bits 12-15 of the time_hi_and_version field to 0010
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
        s[8] = s[13] = s[18] = s[23] = '-';

        var uuid = s.join('');
        return uuid;
    },
    /**
     * return an string with number formatted as price I.E $2.000
     * @param  {Number} n number to convert
     * @param  {Number} c decimal counter, by default 0
     * @param  {String} d decimal separator, by defailt ","
     * @param  {String} t unit separator, by default "."
     * @return {String}   string with price formatted number.
     */
    formatMoney : function(n, c, d, t)
    {
        c = isNaN(c = Math.abs(c)) ? 0 : c;
        d = d === undefined ? ',' : d;
        t = t === undefined ? '.' : t;
        var s = n < 0 ? '-' : '';
        var i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + '';
        var j = (j = i.length) > 3 ? j % 3 : 0;

        return '$' + s + (j ? i.substr(0, j) + t : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : '');
    },
    processPrice : function($tag)
    {
        $('.money', $tag).each(function()
        {
            var html = $(this).html();
            $(this).html(Utils.formatMoney(html));
            console.log("llega");
        });
    },
    URLBeautify : function(text)
    {
        text = text.toLowerCase();

        var splitted = text.split(' ');
        text = splitted.join('_');

        text = text.split('ñ').join('n');
        text = text.split('á').join('a');
        text = text.split('é').join('e');
        text = text.split('í').join('i');
        text = text.split('ó').join('o');
        text = text.split('ú').join('u');

        text = text.split('?').join('');
        text = text.split('%').join('');
        text = text.split('$').join('');
        text = text.split('&').join('');
        text = text.split(',').join('');
        text = text.split('.').join('');

        text = text.split('/').join('');

        return text;
    }
};

