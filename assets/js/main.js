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



    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
    });

    $(document).ready(function(){
        $(window).scroll(function(){
         var y = $(window).scrollTop();
         
         if( y > 0 ){
         $(".navbar-header").addClass('back')
         } 
         else {
            $(".navbar-header").removeClass('back')
         }
        });
       })

       $(function(){
        $.scrollIt({
            activeClass: 'active'
        });
      });

  
});