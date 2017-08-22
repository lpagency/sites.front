$(document).ready(function() 
{
    $(document).on("click", "#g-evento", function() 
    {
        $("#datetimepicker").datetimepicker(
        {
            format: "DD/MM/YYYY  HH:mm"
        });
    });
});