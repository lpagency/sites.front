var imagesArray = new Array();


var GalleryView = function(controller)
{
    this.controller = controller;
    this.$element = $.noop();
}

GalleryView.prototype.init = function() 
{
    var self = this;

    FileUploaderTemplates["imgup-image-add-template"] = ' \
        <li class="imgup-add-input-container" > \
            <div class="form-add-image" id="gallery-add-image-button"> \
                <i class="icon-plus icon-generic"></i> \
                <input type="file" class="imgup-add-input" multiple="multiple" /> \
            </div> \
        </li>';

    $(".gallery-add-form-input").fileuploader({
        uploadurl : site_base + "/gallery/addimage"
    });


    $("#submit_gallery_form").on("click", function(evt)
    {
        if (!$(".gallery-add-form-input").fileuploader("isready"))
        {
            evt.preventDefault();
            var $error_images = $(".error[for=image]", ".gallery-add-form");

            $error_images.html("Las imagenes se estan cargando, espere por favor");
            $error_images.fadeIn("slow");
        }

        // console.log("eeee");
    });
};

var GalleryController = function()
{
    this.view = new GalleryView(this);
}

GalleryController.prototype.init = function() 
{
    this.view.init();
};
