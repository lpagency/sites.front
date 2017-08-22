var Event = function()
{
    this.title='';
    this.start='';
    this.end='';
    this.rendering='';
    this.color='';

};

var events= [
{
    title: 'Meeting',
    start: '2015-12-14T10:30:00',
    end: '2015-12-12T11:30:00',
    rendering: 'background',
    color: '#ff9f89',
},
{
    title: 'Lunch',
    start: '2015-12-14T12:00:00',
    end: '2015-12-14T13:00:00',
    rendering: 'background',
    color: '#ff9f89',
},
{
    title: 'Meeting',
    start: '2015-12-17T14:30:00',
    end: '2015-12-17T16:30:00',
    rendering: 'background',
    color: '#ff9f89',
},
{
    title: 'Happy Hour',
    start: '2015-12-16T17:30:00',
    end: '2015-12-16T119:30:00',
    rendering: 'background',
    color: '#ff9f89',
},
{
    title: 'Dinner',
    start: '2015-12-15T20:00:00',
    end: '2015-12-15T22:30:00',
    rendering: 'background',
    color: '#ff9f89',
},
{
    title: 'Birthday Party',
    start: '2015-12-13T07:00:00',
    end: '2015-12-13T0  9:30:00',
    rendering: 'background',
    color: '#ff9f89',
}];

var EventModel = {
    name : '',
    initDate:'',
    endDate:''
}

var EventView = function(controller)
{
    this.controller = controller;
}

EventView.prototype.init = function() 
{
    var self = this;
};

var EventController = function()
{
    this.model = EventModel;
    this.view = new EventView(this);

    this.view.init();
}

EventController.prototype.today = function() 
{
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd='0'+dd
    } 

    if(mm<10) {
        mm='0'+mm
    } 

    today =yyyy+'-'+mm+'-'+dd;

    return today;
};

EventController.prototype.allEvent = function() 
{
    //aquí va un ajax que recupere los datos como json
    var e= JSON.stringify(events);
    var evs=[];
    e=JSON.parse(e);

    for (var i = 0; i < e.length; i++) {
        ev=new Event();
        ev.title='';//e[i].title;
        ev.start=e[i].start;
        ev.end=e[i].end;
        // ev.rendering='background';
        // ev.color='#ff9f89';
        evs.push(ev);
    };
    // console.log(evs);
    return evs;
};

EventController.prototype.createEvent = function(data) 
{
    // console.log(data.title);
    var title= data.title;
    var start= data.start._d;
    var end= data.end._d;

    //datos separados para guardar evento
};

EventController.prototype.lockHour = function(time) 
{
    //aqui ajax que mande hora ingresada y compare en bd si esta bloqueada esa hora: boolean 
    //reemplazo momentaneo
    var start_hour="13:00";
    var end_hour="14:59";
    if ((time>=start_hour && time<=end_hour)){ 
        // console.log(false);
        return false;
    }
    // console.log(true);
    return true;
};

EventController.prototype.durationEvent = function() 
{
    var t=2;//valor en duro "mientras"
    //aqui ajax que rescate duración evento
    
    return t;
};

EventController.prototype.businessHours=function()
{
    // var eventBusiness=[];
    var eventBusiness=[{
        title:'first',
        start: '10:30',
        end: '12:30',
        dow: [ 0,1, 2, 3, 4, 5 ,6]
    },
    {
        title:'second',
        start: '13:30',
        end: '15:30',
        dow: [ 0,1, 2, 3, 4, 5 ,6]
    },
    {
        title:'third',
        start: '16:30',
        end: '18:30',
        dow: [ 0,1, 2, 3, 4, 5 ,6]
    }];

    //ajax que trae horas en funcionamiento 

    return eventBusiness;

};

$(document).ready(function() 
{
    var event_calendar = new EventController();

    // $(document).on("click", ".fc-widget-content", function()
    // {
    //     // alert("llega");
    //     // alert($(this).attr("data-date"));
    //     $("#day").html($(this).attr("data-date"));
    // });

    var range=event_calendar.businessHours()

    for (var i = range.length - 1; i >= 0; i--) {
        var html='';
        html+='<div class="radio">';
            html+='<label><input type="radio" name="optradio" class="optradio" id="'+range[i].title+'" start="'+range[i].start+'" end="'+range[i].end+'">'+range[i].start+' a '+range[i].end+'</label>';
        html+='</div>';
        $("#business-hour").append(html);
    };

    $(document).on("click", ".reserve", function()
    {
        var day=$("#day").attr("date");
        var start_hour = $('input:radio[name=optradio]:checked').attr("start");
        var end_hour = $('input:radio[name=optradio]:checked').attr("end");
        
        alert(moment(day).format("YYYY-MM-DD") +"-------"+start_hour+"-------"+end_hour );
    });

    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next',
            center: 'title',
            right: ''
        },
        lang:'es',
        firstDay:1,
        defaultDate: event_calendar.today(),
        timezone: 'local',
        selectable: true,
        selectHelper: true,
        defaultView: 'month',
    eventLimit: true, // allow "more" link when too many events
    editable: true,
    // selectConstraint: 'businessHours',
    // eventConstraint: 'businessHours',
    events:event_calendar.allEvent(),
    // eventOverlap: false,
    dayClick: function(date) {
        $(".optradio").attr("disabled", false);
        $(':input[checked]').prop('checked',false); //uncheck
        var ev=event_calendar.allEvent();
        //largo eventos
        for (var i = ev.length - 1; i >= 0; i--) {
            //eventos para la fecha clickeada
            if (moment(ev[i].start).format("YYYY-MM-DD")== date.format()){
                //rango de horas disponibles
                for (var x = range.length - 1; x >= 0; x--) {
                    if ((moment(ev[i].start).format("HH:mm")>=range[x].start && moment(ev[i].start).format("HH:mm")<= range[x].end)||
                        (moment(ev[i].end).format("HH:mm")>=range[x].start && moment(ev[i].end).format("HH:mm")<= range[x].end))
                    {
                        $("#"+range[x].title).attr("disabled", true);
                    }
                };
            }
            // console.log(moment(ev[i].start).format("YYYY-MM-DD"));
            // console.log(moment(ev[i].start).format("HH:mm"));

            
        };
        $("#day").attr("date",date.format("YYYY-MM-DD"))
        $("#day").html(date.format("dddd DD, MMMM YYYY"));
    },
    // eventClick: function(calEvent, jsEvent, view) {

    //     alert('Event: ' + calEvent.title);
    //     alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
    //     alert('View: ' + view.name);
    //     console.log(calEvent);
    //     console.log(jsEvent);
    //     console.log(view);
    // // change the border color just for fun
    // $(this).css('border-color', 'red');
    // },


    // si evento esta seleccionado como background no lo puede cliquear 
    selectOverlap: function(event) {
        // console.log(event.rendering);
        if (event.rendering === 'background')
            return ;
    },
    // select: function(start, end, jsEvent, view) {
    //     hour_start=moment(start).format('H:mm');
    //     // var f = event_calendar.lockHour(hour_start);
    //     var f=false;
    //     var check = moment(start).format('YYYY/MM/DD');
    //     var today = moment(new Date()).format('YYYY/MM/DD');
    //     // var today = $.fullCalendar.formatDate(new Date(),'yyyy-MM-dd');
    //     if(check < today)
    //     {
    //         $('#calendar').fullCalendar('unselect');
    //         // Previous Day. show message if you want otherwise do nothing.
    //                 // So it will be unselectable
    //             }
    //             else
    //             {
    //                 var title = prompt('Event Title:');
    //                 var eventData;
    //                 if (title) {
    //                     end = new Date(start);
    //                     end.setHours(end.getHours() + event_calendar.durationEvent());
    //                     eventData = {
    //                         title: title,
    //                         start: start,
    //                         end: end
    //                     };

    //                     event_calendar.createEvent(eventData);
    //                 $('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
    //             }
    //             $('#calendar').fullCalendar('unselect');
    //         }

    //     },
        businessHours: event_calendar.businessHours(),
        // allDaySlot: false,

    });


});

