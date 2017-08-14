/* global jQuery */
/* global environmentVar */

'use strict';

(function($){
    var CALENDAR_ID = $.environmentVar(
                        'nlgg8htr2b3gjpip9qve7u23a8@group.calendar.google.com',
                        'nlgg8htr2b3gjpip9qve7u23a8@group.calendar.google.com',
                        'nlgg8htr2b3gjpip9qve7u23a8@group.calendar.google.com');

    var nameDay=function(day){
        var weekday = new Array(7);
        weekday[0] = "Domingo";
        weekday[1] = "Lunes";
        weekday[2] = "Martes";
        weekday[3] = "Miércoles";
        weekday[4] = "Jueves";
        weekday[5] = "Viernes";
        weekday[6] = "Sábado";

        return weekday[day];
    };

    var setBusy = function(start, end, name)
    {
        var day =nameDay(start.getDay())+" "+start.getDate();

        var hours = end.getHours();
        var minutes = end.getMinutes();

        var hours_start = start.getHours();
        var minutes_start = start.getMinutes();

        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;

        hours_start = hours_start < 10 ? '0' + hours_start : hours_start;
        minutes_start = minutes_start < 10 ? '0' + minutes_start : minutes_start;

        $('#custom-event').removeClass('hidden');
        $('.hour-end').html(hours+':'+minutes);
        $('.hour-start').html(hours_start+':'+minutes_start);
        $('.name-day').html(day);
        $('.name-event').html(name);

        $(".header_wrapper").css("top", "40px");
    };

    var ajaxCallback = function(json)
    {
        var calendar_data = json.items;

        if (calendar_data.length >= 1)
        {
            for (var i = calendar_data.length - 1; i >= 0; i--) {
                var start = new Date(calendar_data[i].start.dateTime);
                var end = new Date(calendar_data[i].end.dateTime);

                var name=calendar_data[i].summary;

                var timeDiff = Math.abs(start.getTime() - end.getTime());
                var diffHours = Math.ceil(timeDiff / (1000 * 3600));
                var d = new Date();
                d.setHours(d.getHours()+15);//a partir de 15 horas 

                if (start < (new Date()) && 
                    diffHours < 24) 
                {
                    setBusy(start, end, name);
                }
            }

        }
    };

    // timeMin=2014-01-01T01:01:01.000Z

    $.ajax({
        type: 'GET',
        method : 'GET',
        url: 'https://www.googleapis.com/calendar/v3/calendars/'+CALENDAR_ID+'/events?timeMin='+(new Date()).toISOString()+'&timeMax='+(new Date(new Date().getTime() + 60 * 60 * 24 * 1000)).toISOString()+'&key=AIzaSyCnVPEc4XGFBXU8ZRVdcq757QZk7SXWhjA',
        headers: {
            'content-type': 'application/json; charset=UTF-8'
        },
    }).done(ajaxCallback);

    // $.ajax({
    //     type: 'POST',
    //     method : 'POST',
    //     url: 'https://www.googleapis.com/calendar/v3/freeBusy?key=AIzaSyCnVPEc4XGFBXU8ZRVdcq757QZk7SXWhjA',
    //     headers: {
    //         'content-type': 'application/json; charset=UTF-8'
    //     },
    //     data: JSON.stringify({
    //         'timeMin' : (new Date()).toISOString(),
    //         'timeMax' : (new Date(new Date().getTime() + 60 * 60 * 24 * 1000)).toISOString(),
    //         'timeZone': 'America/Santiago',
    //         'items': [{
    //             'id': CALENDAR_ID
    //         }]
    //     })
    // })
    // .done(ajaxCallback);
})(jQuery);