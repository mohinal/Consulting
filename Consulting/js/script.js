//scroll up button start
$(document).ready(function(){
    $(window).scroll(function(){
     
      if(this.scrollY > 500){
       $('.scroll-up-btn').addClass('show'); 
      }
      else{
       $('.scroll-up-btn').removeClass('show'); 
      }
    });
    

    $('.scroll-up-btn').click(function(){
      $('html').animate({scrollTop: 0});
    }); 
    //scroll up button end

    //type animation start
     var typed = new Typed(".typing",{
       strings: ["Consulting","Corporate"],
       typeSpeed: 100,
       backSpeed:60,
       loop: true
     })
    //type animation end
      
    // web scrolling animation start
      AOS.init({
        duration:3000
      });
    // web scrolling animation end

    // cursor pointer start
    new kursor({
        type: 1,
        color:'#407bff',
    })
    // cursor pointer end

     // testomonial slider start
      $('.loop').owlCarousel({
        center: true,
        items:2,
        loop:true,
        margin:50,
        autoplay:{
            delay:1000,
        },
        responsive:{
            0:{
                items:1 
            },
            576:{
                items:1
            },
            778:{
                items:2
            },
            1000:{
                items:2
            }
        },  
    });
// testomonial slider end

// company logo swiper slider start
    
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:{
            delay:1000
        },
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
            },
            600:{
                items:3,
            },
            1000:{
                items:6,
            }
        }
    })
  // company logo swiper slider end

});

// counter start
var a = 0;
$(window).scroll(function () {
    var oTop = $("#counter-box").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $(".counter").each(function () {
            var $this = $(this),
                countTo = $this.attr("data-number");
            $({
                countNum: $this.text()
            }).animate(
                {
                    countNum: countTo
                },

                {
                    duration: 2000,
                    easing: "swing",
                    step: function () {
                        //$this.text(Math.ceil(this.countNum));
                        $this.text(
                            Math.ceil(this.countNum).toLocaleString("en")
                        );
                    },
                    complete: function () {
                        $this.text(
                            Math.ceil(this.countNum).toLocaleString("en")
                        );
                        //alert('finished');
                    }
                }
            );
        });
        a = 1;
    }
});
// counter end

// team swiper slider start
var swiper = new Swiper(".mybigSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
    loop:true,
    autoplay:{
        delay:5000,
    }
  });

// team swiper slider end



 
