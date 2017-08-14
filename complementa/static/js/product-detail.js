$(document).ready(function()
{
    $(document).on('click', '.img_prod_little', function()
    {
        var new_src = $(this).attr('src');
        $(".img_prod_detail").attr('src', new_src);
    });
});
