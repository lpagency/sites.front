$(function() {

    $('a[href=contacto]').bind( 'click', function( element) {
        element.preventDefault();
        $.fancybox({
            'href'            : "contacto",
            'type'            : "iframe",
        });
    });

    $('a[href$="jpg"], a[href$="png"], a[href$="gif"], a[href*="placehold.it"], a[href*="placeimg.com"]').fancybox();


    $( window ).bind( 'resize', function() {

        if ( window.innerWidth < 800  ) {
            var lazyElements = $('.gallery-item-01, .gallery-item-02, .gallery-item-03, .gallery-item-05, .gallery-item-07, .gallery-item-08, .gallery-item-09');
        } else {
            var lazyElements = $('.gallery-item');
        }

        if ( lazyElements.length ) {

            lazyElements.lazyload({
                treshold : 20000,
                effect: "fadeIn"
            });
            
        }


    }).trigger('resize');

    $('.rwd-table').basictable();

    // http://www.jerrylow.com/basictable/demo/

});