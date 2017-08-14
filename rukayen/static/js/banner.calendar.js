/* global jQuery */
/* global environmentVar */

'use strict';

(function($)
{

    // timezone
    var current_time_zone = 4;
    var user_time_zone = new Date().getTimezoneOffset() / 60;
    var time_zone_difference = current_time_zone - user_time_zone;
    var busy_hours = [];

    var CALENDAR_ID = $.environmentVar(
                        'orga2tlh1q23mvnh4mph5qjlco@group.calendar.google.com',
                        'i7d345njameip0caajs80tbhog@group.calendar.google.com',
                        'i7d345njameip0caajs80tbhog@group.calendar.google.com');

    var nameDay=function(day)
    {
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

    var clearBusy = function()
    {
        busy_hours = [];
    };

    var setBusy = function(start, end)
    {
        var s;
        var e;
        var i;
        var day;
        var hours;
        var minutes;
        var hours_start;
        var minutes_start;
        var desde;
        var hasta;
        var phrase_builder = [];

        busy_hours.push({start:start, end:end});

        for (var i = 0; i < busy_hours.length; i++) 
        {
            s = busy_hours[i].start;
            e = busy_hours[i].end;

            day = nameDay(s.getDay())+" "+s.getDate();

            hours = e.getHours();
            minutes = e.getMinutes();

            hours_start = s.getHours();
            minutes_start = s.getMinutes();

            hours = hours < 10 ? '0' + hours : hours;
            minutes = minutes < 10 ? '0' + minutes : minutes;

            hours_start = hours_start < 10 ? '0' + hours_start : hours_start;
            minutes_start = minutes_start < 10 ? '0' + minutes_start : minutes_start;

            desde = 'desde ' + hours_start+':'+minutes_start;
            hasta = ' hasta ' + hours+':'+minutes;
            phrase_builder.push(desde+hasta);

            if (i == busy_hours.length-2)
            {
                phrase_builder.push(' y ');
            }
            else if (i < busy_hours.length-1)
            {
                phrase_builder.push(', ');
            }

            // day : day
        }

        $('#alert_hour').removeClass('hidden');
        $('.times').html(phrase_builder.join(''));

        // $('.hour-end').html(hours+':'+minutes);
        // $('.hour-start').html(hours_start+':'+minutes_start);
        // $('.name-day').html(day);
    };

    var getStart = function(calendar_data)
    {
        return new Date(new Date(calendar_data.start).getTime() - (time_zone_difference * 60 * 60 * 1000));
    };

    var getEnd = function(calendar_data)
    {
        return new Date(new Date(calendar_data.end).getTime() - (time_zone_difference * 60 * 60 * 1000));
    };

    var ajaxCallback = function(json)
    {

        $.get("date", function(date)
        {
            clearBusy();

            date = date.replace("-04:00", "");
            var current_date = new Date(date);
            var calendar_data = json.calendars[CALENDAR_ID].busy;

            for (var i = 0; i < calendar_data.length; i++) 
            {
                var start = getStart(calendar_data[i]);
                var end = getEnd(calendar_data[i]);

                var timeDiff = Math.abs(start.getTime() - end.getTime());
                var diffHours = Math.ceil(timeDiff / (1000 * 3600));
                var d = new Date(date);
                d.setHours(d.getHours()+15);//a partir de 15 horas 

                console.log(diffHours);
                if (start < (d) && 
                    diffHours < 24) 
                {
                    setBusy(start, end);
                }
            }
        });
    };

    $.get("date", function(date)
    {
        date = date.replace("-04:00", "");
        var current_date = new Date(date);

        var time_min = current_date.toISOString();
        var time_max = new Date(current_date.getTime() + 60 * 60 * 24 * 1000).toISOString();

        $.ajax({
            type: 'POST',
            method : 'POST',
            url: 'https://www.googleapis.com/calendar/v3/freeBusy?key=AIzaSyCnVPEc4XGFBXU8ZRVdcq757QZk7SXWhjA',
            headers: {
                'content-type': 'application/json; charset=UTF-8'
            },
            data: JSON.stringify({
                'timeMin' : time_min,
                'timeMax' : time_max,
                'items': [{
                    'id': CALENDAR_ID
                }]
            })
        })
        .done(ajaxCallback);
    });
})(jQuery);

