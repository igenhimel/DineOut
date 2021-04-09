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




  
});