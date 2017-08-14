var imageResize = function(img)
{
    var width = img.naturalWidth;
    var height = img.naturalHeight;
    var pro = 1;
    var parent = $(img).parent();

    // @todo : optimize here
    if (width > height)
    {
        pro = (parent.height() / height) * width;

        if (pro > parent.width())
        {
            $(img).css("height", parent.height() + "px");
            $(img).css("width", pro +"px");
        }
        else
        {
            pro = (parent.width() / width) * height;
            $(img).css("width", parent.width() + "px");
            $(img).css("height", pro +"px");
        }
    }
    else
    {
        pro = (parent.width() / width) * height;

        if (pro > parent.height())
        {
            $(img).css("width", parent.width() + "px");
            $(img).css("height", pro +"px");
        }
        else
        {
            pro = (parent.height() / height) * width;
            $(img).css("height", parent.height() + "px");
            $(img).css("width", pro +"px");
        }
    }
}

$(document).ready(function()
{
    $("img.lazy").lazyload({
        effect : "fadeIn",
        load : function()
        {
            //imageResize(this);
        }
    });

    $(window).resize(function()
    {
        $("img.lazy").each(function()
        {
            //imageResize(this);
        });
    });
});