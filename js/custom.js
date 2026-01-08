$(document).ready(function(){
    collectMapSvg();

    $('.ham-icon1').click(function(){
      $('.my-sidenav').css('max-width', '380px');
      $('.my-sidenav').css('display', 'block');
  });
    
    $('.cross-btn1').click(function(){
      $('.my-sidenav').css('max-width', '0px');
  }); 
    
    $(".my-sidenav").accordion();
    $('.my-sidenav ul.submenu li a').click(function() {
        $('.my-sidenav').css('max-width', '0px');
    });

    $('.panel-collapse').on('shown.bs.collapse', function (e) {
       var $panel = $(this).closest('.panel');
       $('html,body').animate({
         scrollTop: $panel.offset().top-88
     }, 500); 
   });
   
   

    $('.banner-slider.owl-carousel').owlCarousel({
        autoplay: false,
        loop: false,
        dots:true,
        nav: true,
        navText:"",
        touchDrag: true,
        mouseDrag: false,
        smartSpeed:3000,
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            991: {
             items:1
         },
         1000: {
             items: 1
         }
     }      
 });

    $('.mgmt-slider.owl-carousel').owlCarousel({
        autoplay: false,
        loop: false,
        dots:true,
        nav: true,
        navText:"",
        touchDrag: true,
        mouseDrag: false,
        smartSpeed:1000,
        margin:40,
        responsive: {
            0: {
                items: 1
            },
            991: {
             items:1
         },
         1000: {
             items: 3
         }
     }      
 });

    $('.custome_slide.owl-carousel').owlCarousel({
      margin: 0,
      center: true,
      loop: true,
      dots:true,
              touchDrag: true,
        mouseDrag: false,
      nav: true,
      navText:"",
      responsive: {
          0: {
             items: 1
         },
         768: {
             items: 2,
             margin: 15
         },
         1000: {
             items: 3,
             stagePadding: 100
         }
     }
 });

    $('.footprint_slide.owl-carousel').owlCarousel({
      center: false,
      loop: false,
      dots:true,
      nav: true,
      navText:"",
              touchDrag: true,
        mouseDrag: false,
      margin: 10,
      responsive: {
          0: {
             items: 1
         },
         768: {
             items: 2
         },
         1000: {
             items: 5
         }
     }
 }); 
    $('.services_sliders.owl-carousel').owlCarousel({
      center: false,
      loop: false,
      dots:true,
      nav: true,
              touchDrag: true,
        mouseDrag: false,
      navText:"",
      margin: 30,
      responsive: {
          0: {
             items: 1
         },
         768: {
             items: 2
         },
         1000: {
            items: 3
        }
    }
});

 


    $('.leadership_slide.owl-carousel').owlCarousel({
      center: false,
      loop: false,
      dots:true,
      nav: false,
              touchDrag: true,
        mouseDrag: false,
      navText:"",
      margin: 10,
      responsive: {
          0: {
             items: 1
         },
         768: {
             items: 2
         },
         1000: {
             items: 2.2
         }
     }
 });
 
    $('.carees_slider.owl-carousel').owlCarousel({
      center: false,
      loop: false,
      dots:true,
      nav: true,
      touchDrag: true,
      mouseDrag: false,
      navText:"",
      margin: 7,
      responsive: {
          0: {
           items: 1,
           stagePadding:60,
       },
       768: {
           items: 2
       },
       1000: {
        items: 4
    }
}
});

    $('.partner-slider.owl-carousel').owlCarousel({
        autoplay: false,
        loop:true,
        dots:true,
        nav: false,
        navText:"",
        touchDrag: true,
        mouseDrag: false,
        smartSpeed:1000,
        responsive: {
            0: {
                items: 1
            },
            991: {
             items:1
         },
         1000: {
             items:1
         }
     }      
 });
    $('.partner-sliderlog.owl-carousel').owlCarousel({
        autoplay: false,
        loop:true,
        dots:false,
        nav: false,
        navText:"",
        touchDrag: true,
        mouseDrag: false,
        smartSpeed:1000,
        margin:50,
        responsive: {
            0: {
                items: 1.8,
                dots:true,
            },
            991: {
             items:1
         },
         1000: {
             items:1
         }
     }      
 });
 $('.leadershipSlider.owl-carousel').owlCarousel({
      autoplay: false,
      loop: false,
      dots:true,   
      nav: true,
      navText:"",
      touchDrag: true,
      mouseDrag: false,
      smartSpeed:3000,
      animateOut: 'fadeOut',
      margin:15,
      responsive: {
        0: {
          items: 1
      },
      600: {
          items: 1
      },
      1000: {
          items: 2
      }
  } 
});
    $('.awardsRecoSlider.owl-carousel').owlCarousel({
      autoplay: false,
      loop: true,
      dots:false,   
      nav: false,
      navText:"",
      touchDrag: true,
      mouseDrag: false,
      smartSpeed:3000,
      animateOut: 'fadeOut',
      margin:40,
      responsive: {
        0: {
          items: 1
      },
      600: {
          items: 1
      },
      1000: {
        items: 3
    }
} 
});
    $('.our_services_slider.owl-carousel').owlCarousel({
        autoplay: false,
        loop: true,
        dots:true,
        nav: true,
        navText:"",       
        items:7,
                touchDrag: true,
        mouseDrag: false,
        center:true,
        smartSpeed: 1000,
        margin:15, 
        stagePadding:100,
        responsive: {
            0: {
                items: 1,
                stagePadding:0,
                margin: 20,

            },
            991: {
             items:1
         },
         1000: {
            items: 3
        }
    },
    onDragged: counter,
    onInitialized  : counter,
    onTranslated : counter,
});

    function counter(el) {
      $('.owl-item')                     
      .removeClass('middle')
      .removeClass('middle_besideleft')
      .removeClass('middle_besideright')
      .removeClass('next_to_item')
      .removeClass('prev_to_item');
      var middle_item = Math.floor($('.active').length / 2);
      middle_item --;
      $('.active').eq(middle_item - 1).addClass('middle_besideleft');
      $('.active').eq(middle_item - 1).addClass('middle');
      $('.active').eq(middle_item - 2).addClass('middle_besideright');
      $('.active').eq(middle_item - 3).nextAll().addClass('next_to_item');
      $('.active').eq(middle_item - 1).prevAll().addClass('prev_to_item');
  }

});
     /*
 * Replace all SVG images with inline SVG
 */
function collectMapSvg() {
    $('img.mapsvg').each(function(){
  //$('.'+cls).css({ fill: "#ff0000" });
      var $img = $(this);
      var imgID = $img.attr('id');
      var imgClass = $img.attr('class');
      var imgURL = $img.attr('src');

      $.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = $(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');

  });
}

$(document).ready(function(){

//     $(window).on("scroll", function() {

//       if($(this).scrollTop() > 50) {
//       $('#header').addClass("sticky"); 
//   } 
//   else {
//       $('#header').removeClass("sticky");
//   } 
// }); 

    $('.careers_3d_slider.owl-carousel').owlCarousel({
        autoplay: false,
        loop: true,
        dots:false,
        nav: true,
        navText:"",
        navigation: true,       
        items:7,
        center:true,
                touchDrag: true,
        mouseDrag: false,
        smartSpeed: 1000,
        margin:0, 
        stagePadding:150,
        responsive: {
            0: {
                items: 1,
                stagePadding:0,
                margin: 20

            },
            991: {
             items:1
         },
         1000: {
            items: 3
        }
    },
});
});


// (function() {
//   "use strict";

//   var carousel = document.getElementsByClassName('carousel')[0],
//   slider = carousel.getElementsByClassName('carousel__slider')[0],
//   items = carousel.getElementsByClassName('carousel__slider__item'),
//   prevBtn = carousel.getElementsByClassName('carousel__prev')[0],
//   nextBtn = carousel.getElementsByClassName('carousel__next')[0];

//   var width, height, totalWidth, margin = 20,
//   currIndex = 0,
//   interval, intervalTime = 4000;

//   function init() {
//     resize();
//     move(Math.floor(items.length / 2));
//     bindEvents();

//     timer();
// }

// function resize() {
//     width = Math.max(window.innerWidth * .25, 275),
//     height = window.innerHeight * .5,
//     totalWidth = width * items.length;

//     slider.style.width = totalWidth + "px";

//     for(var i = 0; i < items.length; i++) {
//       let item = items[i];
//       item.style.width = (width - (margin * 2)) + "px";
//       item.style.height = height + "px";
//   }
// }

// function move(index) {

//     if(index < 1) index = items.length;
//     if(index > items.length) index = 1;
//     currIndex = index;

//     for(var i = 0; i < items.length; i++) {
//       let item = items[i],
//       box = item.getElementsByClassName('item__3d-frame')[0];
//       if(i == (index - 1)) {
//         item.classList.add('carousel__slider__item--active');
//         box.style.transform = "perspective(1200px)"; 
//     } else {
//         item.classList.remove('carousel__slider__item--active');
//         box.style.transform = "perspective(1200px) rotateY(" + (i < (index - 1) ? 40 : -40) + "deg)";
//     }
// }

// slider.style.transform = "translate3d(" + ((index * -width) + (width / 2) + window.innerWidth / 2) + "px, 0, 0)";
// }

// function timer() {
//     clearInterval(interval);    
//     interval = setInterval(() => {
//       move(++currIndex);
//   }, intervalTime);    
// }

// function prev() {
//     move(--currIndex);
//     timer();
// }

// function next() {
//     move(++currIndex);    
//     timer();
// }


// function bindEvents() {
//     window.onresize = resize;
//     prevBtn.addEventListener('click', () => { prev(); });
//     nextBtn.addEventListener('click', () => { next(); });    
// }
// init();
// })();
   $('.the_cloud_slide.owl-carousel').owlCarousel({
      autoplay: false,
      loop: false,
      dots:true,
      nav: true,
      navText:"",
      touchDrag: true,
      mouseDrag: false,
      margin: 20,
      responsive: {
          0: {
           items: 1
       },
       768: {
           items: 1
       },
       1000: {
           items: 3
       }
   }
});
   $('.umbrella_sliders.owl-carousel').owlCarousel({
      autoplay: false,
      loop: false,
      dots:true,
      nav: true,
      navText:"",
      touchDrag: true,
      mouseDrag: false,
      margin: 30,
      responsive: {
          0: {
             items: 1
         },
         768: {
             items: 2
         },
         1000: {
            items: 3
        }
    }
});

 $(document).ready(function(){
        $(".arrow-btn-d").click(function(){
          $(".quick-linksa-btm").slideToggle();
        });
        $('.arrow-btn-d').on("click", function (event) {
          $('.arrow-img').toggleClass('rotate');
          $('.arrow-img').toggleClass('rotate-reset');
        });
      });
      
$(document).ready(function(){
window.onscroll = function() {myFunction()};
    var navbar = document.getElementById("fix-header");
    var stickynew = navbar.offsetTop-20;
    function myFunction() {
      if (window.pageYOffset >= stickynew) {
        navbar.classList.add("stickynew")
      } else {
        navbar.classList.remove("stickynew");
      }
    }

});      