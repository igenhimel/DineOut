$(document).ready(function () {
    $('.navbuttons').click(function () { 
        $('#myNav').toggleClass("open-nav");
     
       

});

$('.close-nav').click(function () { 
    $('#myNav').toggleClass("open-nav");
    
});

AOS.init({
    easing:'ease-in-out',
    duration:600
});

$(window).load(function() {
    $('.preloader').fadeOut('slow');
 });

   
        $(window).scroll(function(){
         var y = $(window).scrollTop();
         
         if( y > 0 ){
         $(".navbar-header").addClass('back')
         } 
         else {
            $(".navbar-header").removeClass('back')
         }
        });
       

       $(function(){
        $.scrollIt({
            activeClass: 'active'
        });
      });

  
});