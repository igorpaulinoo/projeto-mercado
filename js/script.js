//trava o menu to top
window.addEventListener('scroll', function() {
    var nav = document.querySelector('#main-nav');
    var header = document.querySelector('header');

    if (window.pageYOffset > header.offsetTop) {
        nav.classList.add('fixed-nav');
    } else {
        nav.classList.remove('fixed-nav');
    }
});

//menu para celular
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('#main-nav ul');
const navLinks = document.querySelectorAll('#main-nav ul li a');

hamburger.addEventListener('click', function() {
    nav.classList.toggle('active');
});

navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        nav.classList.remove('active');
    });
});


// configurações do slide
var swiper = new Swiper(".slide-container", {
    //slidesPerView: 4,
    spaceBetween: 20,
    //slidesPerGroup: 4,
    loop: true,
    centerSlide: "true",
    grabCursor: "true",
    fade: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1000: {
            slidesPerView: 4,
        },
    },
  });