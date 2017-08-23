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

/* NUEVO MENU */
(function($) {
  "use strict"; // Start of use strict

  // Closes the sidebar menu
  $("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
  });

  // Opens the sidebar menu
  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $("#sidebar-wrapper").removeClass("active");
  });

  //#to-top button appears after scrolling
  var fixed = false;
  $(document).scroll(function() {
    if ($(this).scrollTop() > 250) {
      if (!fixed) {
        fixed = true;
        $('#to-top').show("slow", function() {
          $('#to-top').css({
            position: 'fixed',
            display: 'block'
          });
        });
      }
    } else {
      if (fixed) {
        fixed = false;
        $('#to-top').hide("slow", function() {
          $('#to-top').css({
            display: 'none'
          });
        });
      }
    }
  });

})(jQuery); // End of use strict