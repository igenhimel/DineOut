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

$('.img-hover').mouseenter(function () { 

    $('img').addClass("imghov")
    $('.col-12').children('.team-descrip').addClass("hovers")
    $('.team-descrip').children().addClass("addColor")
    $(this).parent().siblings().children('.team-descrip').removeClass("hovers")
    $(this).parent().siblings().children().children('img').removeClass("imghov")
    $(this).parent().siblings().children('.team-descrip').children().removeClass("addColor")
   
    
    
});

$('.img-hover').mouseleave(function () { 
    $('img').removeClass("imghov")

    $('.col-12').children('.team-descrip').removeClass("hovers")
    $('.team-descrip').children().removeClass("addColor")
    
    
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

      $('.test').owlCarousel({

          margin:20,
          responsiveClass:true,
          responsive:{

            0:{
                items:1
            },
            768:{
                items:2,
               
            },
            1200:{
                items:3
        }

          }

      });

  
   $('.lunch').click(function () { 
      
    $('#lunch').show('slow')
    $('#dinner,#drinks,#desserts').hide('slow')

   
 
       
   });
   $('.dinner').click(function () { 
      
    $('#dinner').show('slow')
    $('#lunch,#drinks,#desserts').hide('slow')

    
       
   });
   $('.drinks').click(function () { 
      
    $('#drinks').show('slow')
    $('#dinner,#lunch,#desserts').hide('slow')

   
 
       
   });
   $('.desserts').click(function () { 
      
    $('#desserts').show('slow')
    $('#lunch,#dinner,#drinks').hide('slow')

    
       
   });


   $(".mixbtn").click(function () { 

    $(this).addClass('mix-active')
    $(this).siblings().removeClass('mix-active')
    $('.mixbtn').removeClass('active')
       
       
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