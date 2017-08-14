var AddProfileView = function(controller)
{
    this.controller = controller;
    this.options = {
        profilePicture : ".profile-picture",
        profileInput : ".profile_picture_input",
        companyInput : ".company_picture_input",
        companyPicture : ".company-picture"
    };
};

AddProfileView.prototype.init = function()
{
    var $profile_picture = $(this.options.profileInput);
    var $company_picture = $(this.options.companyInput);
    var self = this;

    $profile_picture.lp_image_preview(
    {
        img_selector : this.options.profilePicture,
        callback : function()
        {
            self.centerImage($(this), $(this).parent());
        }
    } );

    $company_picture.lp_image_preview(
    {
        img_selector : this.options.companyPicture,
        callback : function()
        {
            self.centerImage($(this), $(this).parent());
        }
    });
};

AddProfileView.prototype.centerImage = function($image, $container) 
{
    var size = [parseInt($container.css("width").replace("px", "")), 
                parseInt($container.css("height").replace("px", ""))];

    var image_size = [$image[0].naturalWidth,
                      $image[0].naturalHeight];

    var transform = this.controller.getTransform(size, image_size);

    $image.css("width", transform[0] + "px");
    $image.css("height", transform[1] + "px");
    $image.css("margin-left", transform[2] + "px");
    $image.css("margin-right", transform[3] + "px");
};

// controller
var AddProfileController = function()
{
    this.view = new AddProfileView(this);
};

/**
 * return necesary transform for an image to be centered on a canvas
 * @param  {List} canvas_size pair values that indcate canvas size [width, height]
 * @param  {List} image_size  pair values that indcate image size [width, height]
 * @return {List}             list that contains all transformation must be applied
 *                                 i.e.:
 *                                 [width, height, left, top]
 * 
 */
AddProfileController.prototype.getTransform = function(canvas_size, image_size) 
{
    return $.me.getTransform(canvas_size, image_size);
};
