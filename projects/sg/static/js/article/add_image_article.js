function ToggleView()
{
    var ui_label = $("#image-selector-ui-label");
    var ui_label_text = $("#image-selector-ui-label").text();

    if (ui_label_text == "Agregar Foto")
    {
        ui_label.text("Seleccione un punto en la Foto");
        $("#article-image-fullsize-div").fadeIn("fast");
        //Limit img Size
        if ($("#article-image-fullsize").width() > $("div#g-articulo-a").width())
        {
            $("#article-image-fullsize").css("width", "100%");
        }
        //End Limit Size
    } else {
        ui_label.text("Agregar Foto");
        $("#image-selector-ui").fadeIn("fast");
    }   
}


function SetHighLightSpot(e)
{
    var image_offset = $("#article-image-fullsize").offset();
    var mark_middle_x = $("#article-highlight-mark").width()/2;
    var mark_middle_y = $("#article-highlight-mark").height()/2;
    var pos_x = e.pageX - image_offset.left - mark_middle_x;
    var pos_y = e.pageY - image_offset.top - mark_middle_y;
    var mark_porcentual_x = 100*pos_x/$("#article-image-fullsize").width();
    var mark_porcentual_y = 100*pos_y/$("#article-image-fullsize").height();
    var click_porcentual_x = 100*(e.pageX - image_offset.left)/$("#article-image-fullsize").width();
    var click_porcentual_y = 100*(e.pageY - image_offset.top)/$("#article-image-fullsize").height(); 
        //Un limite por las dudas
        mark_porcentual_x = Limit(mark_porcentual_x);
        mark_porcentual_y = Limit(mark_porcentual_y);
        click_porcentual_x = Limit(click_porcentual_x);
        click_porcentual_y = Limit(click_porcentual_y);
        //En limit
    $("#article-highlight-mark").css({"left": mark_porcentual_x + "%", "top": mark_porcentual_y + "%"}); 
    
    //put the result in inputs
    $("#input-position-x").val(parseInt(click_porcentual_x));
    $("#input-position-y").val(parseInt(click_porcentual_y));
}


function Limit(num)
{
    if(num > 100)
        num = 100;
    if(num < 0)
        num = 0;
    return num;
}


$(document).ready(function() 
{
    var DRAGGING = false;

    //Set 'image button'
    $("#article_input_image").hide();    
    $("i#article_input_image_button").click(function() 
    {
        $("#article_input_image").trigger("click");
    });
    //en set 'image button'

    $("body").delegate("#article-image-holder", "click", function() 
    {           
        $("#article-image-fullsize").attr("src", $(this).attr("src"));       
        $("#image-selector-ui").fadeOut("fast", ToggleView); 
    });

    $("body").delegate("#article-image-fullsize", "click", function(evt) 
    {
        SetHighLightSpot(evt);
    });

    $("body").delegate("#button-done-highlight", "click", function(evt)
    {
        evt.preventDefault();
        $("#article-image-fullsize-div").fadeOut("fast", ToggleView);
    });
    
    $("body").delegate("#article-image-fullsize", "dragstart", function(event) 
    { 
        event.preventDefault();
        DRAGGING = true;
        SetHighLightSpot(event);
        
        $(this).mousemove(function(evt)
        {
            if(DRAGGING)
                SetHighLightSpot(evt);            
        });

        $("#article-highlight-mark").mousemove(function(evt)
        {
            if(DRAGGING)
                SetHighLightSpot(evt);            
        });
        
        $("#article-highlight-mark").mouseup(function(e)
        { 
            DRAGGING = false;
        });
        $("#article-image-fullsize").mouseup(function(e)
        { 
            DRAGGING = false;
        });
        $("div#image-fullsize-holder").mouseenter(function()
        {
            DRAGGING = false;
        });
    });

    $("body").delegate("#article-highlight-mark", "dragstart", function(event) 
    { 
        event.preventDefault();
        DRAGGING = true;
        SetHighLightSpot(event);
        
        $(this).mousemove(function(evt)
        {
            if(DRAGGING)
                SetHighLightSpot(evt);            
        });

        $("#article-highlight-mark").mousemove(function(evt)
        {
            if(DRAGGING)
                SetHighLightSpot(evt);            
        });
        
        $("#article-highlight-mark").mouseup(function(e)
        { 
            DRAGGING = false;
        });
        $("#article-image-fullsize").mouseup(function(e)
        { 
            DRAGGING = false;
        });
        $("div#image-fullsize-holder").mouseenter(function()
        {
            DRAGGING = false;
        });            
    });

    $("body").delegate("#article-highlight-mark", "dragend", function() 
    {
        DRAGGING = false; 
    });
    
    $("body").delegate("#article-image-fullsize", "dragend", function() 
    {
        DRAGGING = false; 
    });
    
});