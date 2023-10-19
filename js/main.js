(function ($) {
    "use strict";

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 45,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);
let numero = 84988825389;

let redirecionar = "file:///C:/Users/Monteiro/Documents/gastronoma/cake-shop-website-template/index.html";

let tempo = 38000;



function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

let Hover = document.querySelector('.timeHover');
Hover.addEventListener("mouseover", time);
  
function time() {
  var d = new Date();
  var x = document.getElementsByClassName("time");
  var h = addZero(d.getHours());
  var m = addZero(d.getMinutes());

  var i;
  for (i = 0; i < x.length; i++) {
    x[i].innerHTML = h + ":" + m;
  }
}

Hover.addEventListener("mouseover", abrir); 
 
function abrir(){
 let PopupAbrir = document.querySelector('.whats-container');
  PopupAbrir.classList.add("whats-open");
  PopupAbrir.classList.remove("whats-close");
 
} 
 
Hover.addEventListener("mouseout", fechar); 
 
function fechar(){
 document.getElementById("whats-in").value = "";
 let PopupAbrir = document.querySelector('.whats-container');
  PopupAbrir.classList.add("whats-close");
  PopupAbrir.classList.remove("whats-open");
 
} 
 
let HoverContainer = document.querySelector('.whats-container'); 
 
HoverContainer.addEventListener("mouseover", abrirContainer); 
 
function abrirContainer(){

 let PopupAbrir = document.querySelector('.whats-container');
 PopupAbrir.classList.add("whats-open");
 PopupAbrir.classList.remove("whats-close");
  
 
} 


 
let sair = document.getElementById("sair"); 
sair.addEventListener("mouseup", fechar);
  
setTimeout(function(){  abrirContainer(); time(); }, tempo);
 
let sendBtn = document.getElementById('send-btn');
 
sendBtn.addEventListener("click", () => {
  let msg = document.getElementById('whats-in').value;
  let relmsg = msg.replace(/ /g,"%20");   


    window.open('https://api.whatsapp.com/send?phone=55'+numero+'&text='+relmsg, '_blank');

   setTimeout(function(){   location.replace(redirecionar) ;  }, 1000);

      

 fechar();
 }); 

