$(document).ready(function () {
    $('.navbuttons').click(function () { 
        $('#myNav').toggleClass("open-nav");
     
       

});

$('.close-nav').click(function () { 
    $('#myNav').toggleClass("open-nav");
    
});



$('.lunch').click(function(){

  
    $('#launch .mix').addClass('')



})

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

window.addEventListener("load",function(){

    document.querySelector(".pageloader").classList.add("fade-out");
    setTimeout(function(){
        document.querySelector(".pageloader").style.display="none"
    },600);

    AOS.init({
        easing:'ease-in-out',
        duration:600
    });

  });