var HeaderView = function(controller)
{
    this.controller = controller;
    this.is_running_animation = false;
};

HeaderView.prototype.animationInit = function() 
{
    var self = this;
    $(window).scroll(function()
    {
        var scroll = $(window).scrollTop();
        if (!self.is_running_animation)
        {
            if (scroll >= 60) 
            {
                if ($("#main-nav-fixed-navigation").css("margin-top") != "0px")
                {
                    self.is_running_animation = true;
                    $("#main-nav-fixed-navigation").animate(
                        {
                            marginTop: 0
                        },
                        "slow",
                        function() {
                            self.is_running_animation = false;
                        });
                }
            } 
            else 
            {
                self.is_running_animation = true;
                $("#main-nav-fixed-navigation").animate(
                    {
                        marginTop: -150
                    },
                    "fast",
                    function()
                    {
                        self.is_running_animation = false;
                    });
            }
        }
    });
};


var HeaderController = function()
{
    this.view = new HeaderView();
    this.view.animationInit();
};


$(document).ready(function()
{
    header_controller = new HeaderController();
});