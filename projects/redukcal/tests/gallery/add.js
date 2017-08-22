var generateImage = function()
{
    return $("<img class='gallery-image' />");
};

QUnit.test( "test for add gallery form", function(assert)
{
    var done = assert.async();
    var validations = new Validations();

    $(".test-front-end").load(
        "gallery/add.html",
        function()
        {
            $("input[name=name]", ".gallery-add-form").val("foo");
            // adding images
            $(".gallery-add-form").append(generateImage());

            var $error_name = $(".error[for=name]", ".gallery-add-form");

            assert.equal(validations.validateAddGallery(), true, "form valid");
            assert.equal($error_name.css("display"), "none", "error $error_name");

            $("input[name=name]", ".gallery-add-form").val("");

            validations.validateAddGallery();
            assert.equal($error_name.css("display"), "block", "error $error_name");

            $("input[name=name]", ".gallery-add-form").val("foo");

            validations.validateAddGallery();
            assert.equal($error_name.css("opacity"), "0", "error $error_name");


            $(".test-front-end").html("");
            done();
        });

});
