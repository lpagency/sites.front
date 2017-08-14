QUnit.test( "test for add members form", function(assert)
{
    var done = assert.async();
    var validations = new Validations();

    $(".test-front-end").load(
        "members/add.html",
        function()
        {

            $("input[name=profile_picture_input]", ".members-add-form").val("foo.png");
            $("input[name=company_picture_input]", ".members-add-form").val("foo.png");
            $("input[name=name]", ".members-add-form").val("foo");
            $("input[name=email]", ".members-add-form").val("foo@foo.cl");
            $("input[name=phone]", ".members-add-form").val("123");
            $("input[name=url]", ".members-add-form").val("http://www.google.com");

            $("input[name=company_name]", ".members-add-form").val("foo");
            $("input[name=position]", ".members-add-form").val("foo");
            $("input[name=phone]", ".members-add-form").val("123");
            $("textarea[name=description]", ".members-add-form").val("foo");
            $("textarea[name=description_company]", ".members-add-form").val("foo");


            var $error_profile_picture_input = $(".error[for=profile_picture_input]", ".members-add-form");
            var $error_company_picture_input = $(".error[for=company_picture_input]", ".members-add-form");
            var $error_name = $(".error[for=name]", ".members-add-form");
            var $error_email = $(".error[for=email]", ".members-add-form");
            var $error_phone = $(".error[for=phone]", ".members-add-form");
            var $error_url = $(".error[for=url]", ".members-add-form");

            var $error_company_name = $(".error[for=company_name]", ".members-add-form");
            var $error_position = $(".error[for=position]", ".members-add-form");
            var $error_phone = $(".error[for=phone]", ".members-add-form");
            var $error_description = $(".error[for=description]", ".members-add-form");
            var $error_description_company = $(".error[for=description_company]", ".members-add-form");

            assert.equal(validations.validateAddMembers(), true, "form valid");


            assert.equal($error_profile_picture_input.css("display"), "none", "error profile_picture_input");
            assert.equal($error_company_picture_input.css("display"), "none", "error company_picture_input");
            assert.equal($error_name.css("display"), "none", "error name");
            assert.equal($error_email.css("display"), "none", "error email");
            assert.equal($error_phone.css("display"), "none", "error phone");
            assert.equal($error_url.css("display"), "none", "error url");

            assert.equal($error_company_name.css("display"), "none", "$error_company_name");
            assert.equal($error_position.css("display"), "none", "$error_position");
            assert.equal($error_phone.css("display"), "none", "$error_phone");
            assert.equal($error_description.css("display"), "none", "$error_description");
            assert.equal($error_description_company.css("display"), "none", "$error_description_company")


            $("input[name=profile_picture_input]", ".members-add-form").val("");
            $("input[name=company_picture_input]", ".members-add-form").val("");
            $("input[name=name]", ".members-add-form").val("");
            $("input[name=email]", ".members-add-form").val("aaa");
            $("input[name=phone]", ".members-add-form").val("aaaa");
            $("input[name=url]", ".members-add-form").val("aaaa");

            $("input[name=company_name]", ".members-add-form").val("");
            $("input[name=position]", ".members-add-form").val("");
            $("input[name=phone]", ".members-add-form").val("");
            $("textarea[name=description]", ".members-add-form").val("");
            $("textarea[name=description_company]", ".members-add-form").val("");

            validations.validateAddMembers();

            assert.equal($error_profile_picture_input.css("display"), "block", "error error_profile_picture_input");
            assert.equal($error_company_picture_input.css("display"), "block", "error error_company_picture_input");
            assert.equal($error_name.css("display"), "block", "error error_name");
            assert.equal($error_email.css("display"), "block", "error error_email");
            assert.equal($error_phone.css("display"), "block", "error error_phone");
            assert.equal($error_url.css("display"), "block", "error error_url");

            assert.equal($error_company_name.css("display"), "block", "$error_company_name");
            assert.equal($error_description.css("display"), "block", "$error_description");
            assert.equal($error_description_company.css("display"), "block", "$error_description_company")



            $("input[name=profile_picture_input]", ".members-add-form").val("foo.png");
            $("input[name=company_picture_input]", ".members-add-form").val("foo.png");
            $("input[name=name]", ".members-add-form").val("foo");
            $("input[name=email]", ".members-add-form").val("foo@foo.com");
            $("input[name=phone]", ".members-add-form").val("123");
            $("input[name=url]", ".members-add-form").val("http://www.google.com");
            $("input[name=company_name]", ".members-add-form").val("foo");
            $("textarea[name=description]", ".members-add-form").val("foo");
            $("textarea[name=description_company]", ".members-add-form").val("foo");


            assert.equal(validations.validateAddMembers(), true, "valid form");
            assert.equal($error_profile_picture_input.css("opacity"), "0", "error profile_picture_input");
            assert.equal($error_company_picture_input.css("opacity"), "0", "error company_picture_input");
            assert.equal($error_name.css("opacity"), "0", "error name");
            assert.equal($error_email.css("opacity"), "0", "error email");
            assert.equal($error_phone.css("opacity"), "0", "error phone");
            assert.equal($error_url.css("opacity"), "0", "error url");

            $("input[name=phone]", "members-add-form").val("");
            assert.equal(validations.validateAddMembers(), true, "phone is optional")

            $("input[name=email]", ".members-add-form").val("");
            assert.equal(validations.validateAddMembers(), false, "email is optional")
            $("input[name=email]", ".members-add-form").val("foo@foo.cl");

            $("input[name=url]", ".members-add-form").val("");
            assert.equal(validations.validateAddMembers(), true, "white url is also valid");

            $("textarea[name=description]", ".members-add-form").val("");
            assert.equal(validations.validateAddMembers(), false, "white description is invalid");
            $("textarea[name=description]", ".members-add-form").val("foo");

            $("textarea[name=description_company]", ".members-add-form").val("");
            assert.equal(validations.validateAddMembers(), false, "white description_company is invalid");
            $("textarea[name=description_company]", ".members-add-form").val("foo");

            $("input[name=company_name]", ".members-add-form").val("");
            assert.equal(validations.validateAddMembers(), false, "company name obligatory");


            $(".test-front-end").html("");
            done();
        });

});