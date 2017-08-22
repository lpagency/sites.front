$(document).ready(function()
{
    var controller = new SiteSelector($('.site-selector'));
    controller.loadSites($.noop);

    controller.onchange = function()
    {
        try
        {
            if (QUnit === undefined)  // detect if i'm not in test enviroment
            {
                document.location.reload();
            }
        }
        catch(ex)
        {
            document.location.reload();
        }
    };
});