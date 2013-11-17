/* -- jpreloader
   -- src: http://www.inwebson.com/jquery/jpreloader-a-preloading-screen-to-preload-images/
   ---------------------------- */
/*$(document).ready( function() {
  
  //calling jPreLoader
  $('body').jpreLoader({
    splashID: "#preloader",
    loaderVPos: '60%',
    autoClose: true
  });
});
*/

/* -- NiceScroll
   -- src: www.areaaperta.com/nicescroll
   ---------------------------- */

$(document).ready(
  function() {  
    $("html").niceScroll({
      cursorcolor:"#2C2F35",
      scrollspeed: 60,
      mousescrollstep: 35,
      cursorwidth: "7px",
    });
  }
);





// $(document).ready(function(){
//     $('select').on('change', function(){
//         $('.featured-image > img').attr('src', $(this).val() + '.png');
//     });
// });


// $(document).ready(function(){
//   $('#option-2').change(function () {
//     $('.featured-image img').attr('src', 'img/featured-' + $('#option-2:selected').text() + '.png');
//   });
// });

/* -- Unslider
   -- src: 
   ---------------------------- */
$(document).ready(function(){
    var unslider = $('.banner').unslider({
      speed: 500,               //  The speed to animate each slide (in milliseconds)
      delay: 4000,              //  The delay between slide animations (in milliseconds)
      complete: function() {},  //  A function that gets called after every slide animation
      keys: true,               //  Enable keyboard (left, right) arrow shortcuts
      dots: true,
      fluid: true
    });
    
    $('.unslider-arrow').click(function() {
        var fn = this.className.split(' ')[1];
        
        //  Either do unslider.data('unslider').next() or .prev() depending on the className
        unslider.data('unslider')[fn]();
    });
  });






/* -- Waypoints
   -- src: 
   ---------------------------- */
$('#about').waypoint(function() {
  $('.feature img').addClass('animated bounceInUp').css('display', 'block');
}, { offset: 100 });

$('#pricing').waypoint(function() {
  $('.plan').addClass('animated bounceIn');
}, { offset: 150 });

$('.plan').waypoint(function() {
  $('.circle .icon-like').addClass('animated bounceIn');
}, { offset: 0 });




/* -- Magnific Popup (Responsive Lightbox)
   -- src: www.dimsemenov.com/plugins/magnific-popup
   ---------------------------- */

$(document).ready(function() {
$('.lightbox').magnificPopup({
  type: 'image',

  overflowY: 'auto',

  closeBtnInside: true,
  preloader: false,
  
  midClick: true,
  removalDelay: 100,
  mainClass: 'my-mfp-slide-bottom',

  image: {
    verticalFit: true
  }
});

$('.modal-form').magnificPopup({
  type: 'inline',
  preloader: false,
  focus: '#fullname',
  midClick: true,
  removalDelay: 300,
  mainClass: 'my-mfp-slide-bottom',

  // When elemened is focused, some mobile browsers in some cases zoom in
  // It looks not nice, so we disable it:
  callbacks: {
    beforeOpen: function() {
      if($(window).width() < 700) {
        this.st.focus = false;
      } else {
        this.st.focus = '#fullname';
      }
    }
  }
});

});





/* -- Bootstrap Popover
   ---------------------------- */
$(function(){
  $('.login').popover({
    html: true,
    placement: "bottom",
    trigger: "click",
    content: function() {
      return $('#login-form').html();
    }
  });
});



/* -- jQuery Knobs
   -- src: https://github.com/aterrien/jQuery-Knob
   ---------------------------- */

$(function() {
    $(".dial").knob();
});



/* -- Bxslider
   -- src: www.bxslider.com
   ---------------------------- */

$(function(){

  $('.featuredSlider').bxSlider({
    auto: true,
    autoControls: false,
    mode: 'fade',
    easing: 'linear',
    pager: false,
    controls: false,
    speed: 150,
    pause: 5000
  });

});




/* -- Sticky Animated Header
   -- src: xxx
   ---------------------------- */

  var header = $('header')
  var logo = $('.logo')
  var navmenu = $('header .nav-menu')

  $(window).scroll(function(e){    
  var scrollTop = $(window).scrollTop();
  if(scrollTop > 50 ){
    header.stop().animate({height:"111px", backgroundColor: "#87d4d0", queue: false}, 300, 'linear');
  }
  else{        
    header.stop().animate({height:"100px", backgroundColor: "none", queue: false}, 300, 'linear');
  }
});

function animateHeader() {
    siteHeader = $("header");
    siteHeaderHeight = siteHeader.outerHeight();

    if(siteHeader.offset().top > siteHeaderHeight){
       siteHeader.removeClass("transparent");
    }
    else{
       siteHeader.addClass("transparent");
   }
}

animateHeader();

$(window).scroll(function(){
    animateHeader();
});




/* -- gMap integration
   -- src: http://labs.mario.ec/jquery-gmap/
   ---------------------------- */

$(function() {
 $('#map_controls').gMap(
 {
      latitude: 40.756100,
      longitude: -73.983307,
      maptype: 'TERRAIN', // 'HYBRID', 'SATELLITE', 'ROADMAP' or 'TERRAIN'
      zoom: 15,
      controls: {
          panControl: false,
          zoomControl: false,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: false,
          overviewMapControl: false
      },
      markers: [
      {
          latitude: 40.756100,
          longitude: -73.983307,
      }
    ]
 });
});



/* -- Page Slider
   -- src: https://github.com/davist11/jQuery-One-Page-Nav
   ---------------------------- */


$(document).ready(function() {

var $nav = $('header nav');
  var $nav2 = $('.nav2');

  $nav.onePageNav({
      currentClass: 'current',
      changeHash: false,
      scrollSpeed: 750,
      scrollOffset: 70,
      scrollThreshold: 0.1,
      filter: '',
      easing: 'swing',
      begin: function() {
          //I get fired when the animation is starting
      },
      end: function() {
          //I get fired when the animation is ending
      },
      scrollChange: function($currentListItem) {
          //I get fired when you enter a section and I pass the list item of the section
      }
  });

  $nav2.on('click', 'a', function(e) {
    var currentPos = $(this).parent().prevAll().length;
    $nav.find('li').eq(currentPos).children('a').trigger('click');
    e.preventDefault();
  });


});




/* -- Teaser Form (Coming soon page)
   ---------------------------- */

$(function(){
   $('.teaser-signup .lead').click(function(){
      $(this).hide();
      $('.teaser-signup form').show();
      return false;
   });
});




/* -- Smooth Scroll to Top
------------------------- */

$(function(){ 

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    }); 

    $('.scrollup, .logo').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

});

/* -- Full Screen Viewport Container
   ---------------------------- */

$(function () {

      // Set Initial Screen Dimensions

      var screenWidth = $(window).width() + "px";
      var screenHeight = $(window).height() + "px";

      $("#home").css({
        width: screenWidth,
        height: screenHeight
      });

      // Every time the window is resized...

      $(window).resize( function () {

        // Fetch Screen Dimensions

        var screenWidth = $(window).width() + "px";
        var screenHeight = $(window).height() + "px";
        
        // Set Slides to new Screen Dimensions
        
        $("#home").css({
          width: screenWidth,
          height: screenHeight
        }); 
        
      });

  });


/* -- NaturaL Language Hero Form
   -- src: http://tympanus.net/codrops/2013/05/21/natural-language-form-with-custom-input-elements/
   ---------------------------- */
$(function () {


var nlform = new NLForm( document.getElementById( 'nl-form' ) );


var el = document.querySelector( '.md-slider' ),
        settings = {
          autoplay : false,
          interval : 3000,
          devices : [ 
            { cName : 'md-device-1', canRotate : false, imgsrc : 'img/site1.jpg' },
            { cName : 'md-device-2', canRotate : false, imgsrc : 'img/site2.jpg' },
            { cName : 'md-device-3', canRotate : true, imgsrc : 'img/site3.jpg', rotatedsrc : 'img/site3r.jpg' },
            { cName : 'md-device-4', canRotate : true, imgsrc : 'img/site4.jpg', rotatedsrc : 'img/site4r.jpg' }
          ]
        },
        devicesTotal = settings.devices.length,
        ds = MorphingDevice( el, settings );

      // create navigation triggers
      var nav = document.createElement( 'nav' );
      for( var i = 0; i < devicesTotal; ++i ) {

        var trigger = document.createElement( 'a' );
        trigger.className = i === 0 ? 'md-current' : '';
        trigger.setAttribute( 'href', '#' );
        trigger.setAttribute( 'pos', i );
        trigger.onclick = function( event ) {

          ds.stopSlideshow();
          var pos = Number( event.target.getAttribute( 'pos' ) );
          if( pos === ds.getCurrent() ) {
            return false;
          }
          ds.updateCurrentTrigger( event.target );
          ds.setCurrent( pos );
          ds.changeDevice();
          return false;

        };
        nav.appendChild( trigger );

      }
      el.appendChild( nav );

      if( settings.autoplay ) {
        ds.startSlideshow();
      }
});

/* -- Smooth Scroll to Specific Anchor
------------------------- */

$(document).ready(function() {

    $(".scroll").click(function(event) {
        event.preventDefault(); 

        var defaultAnchorOffset = 80;
        
        var $anchor = $('#about');
                
        var anchorOffset = $anchor.attr('data-anchor-offset');
        if (!anchorOffset) // for when anchor does have the offset attribute like Section 4
            anchorOffset = defaultAnchorOffset; 

        $('html,body').animate({ 
            scrollTop: $anchor.offset().top - anchorOffset
        }, 500);        
    });
});