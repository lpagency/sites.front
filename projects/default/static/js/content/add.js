var ContentAddModel = 
{
}

var ContentAddView = function(controller)
{
    this.controller = controller;

    this.options = {
        contentAddButton : ".btn-new-content",
        contentAddURL : site_base + "/content/add_form",
        contentLightbox : ".descripcion_contenido",
        contentEditButton : ".edit_button"
    };

    this.init();
}

ContentAddView.prototype.init = function() 
{
    var self = this;
    $(document).on(
        "click", this.options.contentAddButton, function()
        {
            self.render();
        });

    $(document).on(
        "click", this.options.contentEditButton, function(evt)
        {
            self.renderEdit($(this).attr("href"));
            evt.preventDefault();
        });
};

ContentAddView.prototype.render = function() 
{
    var self = this;
    $.get(
        this.options.contentAddURL, 
        function(html)
        {
            $(self.options.contentLightbox).html(html);
            self.initOthers();

            // init date field
            // $(".date").mask("99/99/9999 99:99",{placeholder:"dd/mm/yyyy hh:mm"});
        });
};


ContentAddView.prototype.initOthers = function() 
{
    this.initWYSIWYG();

    $("[lp-image-loader]").lp_image_preview({
        'img_selector' : '.image-preview',
        'callback' : function(image_name, image_extension)
        {
            $(".form-added-image").show();
        }
    });

    this.controller.gallery_controller.init();
    this.controller.profile_controller.init();
};


ContentAddView.prototype.renderEdit = function(href) 
{
    $(".b_logo").css('display','none');
    var self = this;

    $.get(
        href, 
        function(html)
        {
            $(self.options.contentLightbox).html(html);
            $(".step_two").fadeIn(500);
            self.initOthers();
        });
};

ContentAddView.prototype.initWYSIWYG = function() 
{
    // @todo : SI!, esto esta -a la mala- por ahora... ya lo dejo hermoso, chill.
    // var editor_gallery = new wysihtml5.Editor("wysihtml5-gallery-textarea", { // id of textarea element
    //     toolbar:      "wysihtml5-gallery-toolbar", // id of toolbar element
    //     parserRules:  wysihtml5ParserRules // defined in parser rules set 
    // });
    var wysi; 
    wysi = new wysihtml5.Editor(
        "wysihtml5-event-textarea", 
        { // id of textarea element
            "font-styles": false,
            toolbar:      "wysihtml5-event-toolbar", // id of toolbar element
            parserRules:  wysihtml5ParserRules // defined in parser rules set 
        });
    wysi = new wysihtml5.Editor(
        "wysihtml5-article-textarea", 
        { // id of textarea element
            "font-styles": false,
            toolbar:      "wysihtml5-article-toolbar", // id of toolbar element
            parserRules:  wysihtml5ParserRules // defined in parser rules set 
        });
    wysi = new wysihtml5.Editor(
        "wysihtml5-gallery-textarea", 
        { // id of textarea element
            "font-styles": false,
            toolbar:      "wysihtml5-gallery-toolbar", // id of toolbar element
            parserRules:  wysihtml5ParserRules // defined in parser rules set 
        });
};


var ContentAddController = function()
{
    this.model = ContentAddModel;
    this.view = new ContentAddView(this);


    this.gallery_controller = new GalleryController();
    this.profile_controller = new AddProfileController();
}


$(document).ready(function()
{
    var content_add_controlle = new ContentAddController();
});