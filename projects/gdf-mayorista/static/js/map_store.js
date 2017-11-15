
        var base_url = $.environmentVar(
            'http://apibodegas.ondev.today/',
            'http://apibodegas.ondev.today/',
            'http://apibodegas.ondev.today/');
        var checkout_url = $.environmentVar(
            'http://lpcheckout.ondev.today',
            'http://lpcheckout.ondev.today',
            'http://lpcheckout.ondev.today');
        var app_public = $.environmentVar(50,50,50);
        var site_name = $.environmentVar('testgdf', 'testgdf', 'testgdf');

var initMap = function(){
    $.ajax({
        url:base_url+"store/list/"+app_public+"/false",
        success: storesLoaded
    });
}

 var drawPoints = function(map, places)
{
    var popup;

    for(var i in places)
    {
        var marker = new google.maps.Marker({
            position: places[i],
            map: map,
            title: i,
            icon: 'https://84static.loadingplay.com/static/images/0a0c162484bddc6fdb928cc9086d96e9_icono_.png'
        });

        google.maps.event.addListener(
            marker, 
            'click', 
            function()
            {
                if(!popup)
                {
                    popup = new google.maps.InfoWindow();
                }

                var note = this.title;

                popup.setContent(note);
                popup.open(map, this);

                google.maps.event.addListener(marker, 'mouseover', function() {
                    this.setIcon('https://84static.loadingplay.com/static/images/0a0c162484bddc6fdb928cc9086d96e9_icono_.png');
                });

                google.maps.event.addListener(marker, 'mouseout', function(){
                    this.setIcon('https://84static.loadingplay.com/static/images/0a0c162484bddc6fdb928cc9086d96e9_icono_.png');
                });

                limits.extend(places[i]);
            });
    }
};

var loadPlaces = function(stores)
{
    var places = [];
    for(var x=0;x<stores.stores.length;x++)
    {
        places[stores.stores[x].name+' - '+stores.stores[x].number+' '+stores.stores[x].street]=new google.maps.LatLng(stores.stores[x].latitude, stores.stores[x].longitude);
    }

    return places;
};

var storesLoaded = function(stores)
{
    // init options
    var options = {
        scrollwheel: false,
        zoom: 15,
        center: new google.maps.LatLng(stores.stores[0]['latitude'], stores.stores[0]['longitude']),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    // init map
    var map = new google.maps.Map(document.getElementById('map'), options);

    // init points
    var places = loadPlaces(stores);
    drawPoints(map, places);

};

