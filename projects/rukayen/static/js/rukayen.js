$(document).ready(function() {

    if ($("#custom-event").hasClass("hidden")){
        $(".header_wrapper").css("top", "0px");
    }

 //lightbox registro
    $(document).on("click", "#alert_hour .close_btn", function() {
        $("#alert_hour").addClass("hidden");
    });

    $(document).on("click", "#custom-event .close_btn", function() {
        $("#custom-event").addClass("hidden");
        $(".header_wrapper").css("top", "0px");
    });

    $(document).on("click", ".top_search_bar .hide-search-bar", function(){

        $(".top_search_bar").animate({
            opacity: 0,
            width: "80%",
            "z-index": 1
        }, function(){
            $(".color-menu, .color-menu > li").animate({
                opacity: 1,
                fontSize: "14px",
                "z-index": 2
            } , 300, "linear");
        });
        // $(".fixed-menu-top .top_search_bar").fadeTo("fast", 1, "easeInCubic");
    });

    $(document).on("click", "#toogle_search_bar", function(){
        $(".color-menu").animate({
            opacity: 0,
            fontSize: "4px",
            "z-index": 1
        }, 300, "linear", function() {
            $(".top_search_bar").animate({
                opacity: 1,
                width: "80%",
                "z-index": 2
            });
        });
    });

});
