jQuery(document).ready(function() {
var win_height=jQuery(window).height();
jQuery('.sam_height').matchHeight();
jQuery('.sin_div img').css('height',jQuery('.sam_height').height());
var hei=jQuery('.sam_height').height();
var hei2=hei/2-5;
jQuery('.dub_div .ful_div').find('img').css('height',hei2);
jQuery('.ful_div').css('height',hei2);
jQuery('.header_wrapper').css('height',win_height);

//var sun_height=jQuery('.sin_div').height();
//var sun_height_new=sun_height/2;
//console.log(sun_height);
//jQuery('.dub_div').css('height',sun_height_new);

jQuery('.six_div .abs_back').css('width',jQuery('.six_div').width());
   jQuery('.six_div').on('mouseenter', function(){
    jQuery(this).find('.abs_back').animate({
        top: '0'   
   });
   });
   jQuery('.six_div').on('mouseleave', function(){
    jQuery(this).find('.abs_back').animate({
        top: '100%'
   });
   });
jQuery('.bot_div .abs_back').css('width',jQuery('.bot_div').width());
   jQuery('.bot_div').on('mouseenter', function(){
    jQuery(this).find('.abs_back').animate({
        top: '0'   
   });
   });
   jQuery('.bot_div').on('mouseleave', function(){
    jQuery(this).find('.abs_back').animate({
        top: '100%'
   });
   });
jQuery('.single_div .abs_back').css('width',jQuery('.single_div').width());
   jQuery('.single_div').on('mouseenter', function(){
    jQuery(this).find('.abs_back').animate({
        top: '0'   
   });
   });
   jQuery('.single_div').on('mouseleave', function(){
    jQuery(this).find('.abs_back').animate({
        top: '100%'
   });
   });
   jQuery('.next_down').on('click', function(){
       if(jQuery('.next_down').hasClass('clicked')){
        jQuery('.next_down').removeClass('clicked');
        jQuery('body').css('overflow','hidden');
        jQuery('.header_wrapper').css('height',win_height);
        jQuery('.main_content').hide();
       }
       else{
                
         jQuery('body').css('overflow-y','visible');
         jQuery('.main_content').show();
          jQuery('.next_down').addClass('clicked');
       }
   });

    //end document   

});
  