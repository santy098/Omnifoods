


$(document).ready(function() {
    


/*-----STICKY NAVIGATION----*/
$('.js--section-features').waypoint(function(direction) {

if (direction=="down"){
$('nav').addClass('sticky');

} else {
$('nav').removeClass('sticky');

}
}, {
offset: '60px;'
});

/*-----SCROLL ON BUTTONS----*/

$('.js--scroll-to-plans').click(function() {
$('html,body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
});

$('.js--scroll-to-start').click(function() {
$('html,body').animate({scrollTop: $('.js--section-features').offset().top}, 850);
});


/*-----ANIMATIONS----*/
    
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    },{
        offset: '50%'
    });
    
        $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    },{
        offset: '50%'
    });
    
        $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    },{
        offset: '50%'
    });
    
        $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated bounce');
    },{
        offset: '50%'
    });
    
    
  /*-----MOBILE NAVIGATION----*/  
    
    $('.js--mobile-nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--mobile-nav-icon i');
        nav.slideToggle(200);
        
        if(icon.hasClass('ion-android-menu')){
            icon.addClass('ion-android-close');
            icon.removeClass('ion-android-menu');
           } else {
            icon.addClass('ion-android-menu');
            icon.removeClass('ion-android-close');
        }
        
    });
    
    /*----MAPS----*/
   var map = new GMaps({
  div: '.map',
  lat: 12.9542946,
  lng: 77.59,
       zoom:12
});
    
    
    map.addMarker({
  lat: 12.9542946,
  lng: 77.4908518,
  title: 'Bengaluru',
    infoWindow: {
      content: '<p>Omnifoods CEO: Santy</p>'
    }
});
    
});



