
var burg = document.querySelector(".burg");
var mobileNav = document.querySelector("nav ul");




burg.addEventListener('click', function () {
  mobileNav.classList.toggle('visible');

});

mobileNav.addEventListener('click', function () {
  mobileNav.classList.toggle('visible');

});
// Header pop up on scroll

//use window.scrollY
var scrollpos = window.scrollY;
var header = document.getElementById("header");
var benefitsLink = document.getElementById("benefits-link");
var ingredientsLink = document.getElementById("ingredients-link");
var aboutLink = document.getElementById("about-link");

var logo = document.querySelector(".logo");

function add_class_on_scroll() {
    header.classList.add("header-scroll");
    header.classList.add("fade-in-1s");

    logo.classList.add("link-color-scroll");
    benefitsLink.classList.add("link-color-scroll");
    ingredientsLink.classList.add("link-color-scroll");
    aboutLink.classList.add("link-color-scroll");
}

function remove_class_on_scroll() {
    header.classList.remove("header-scroll");
    header.classList.remove("fade-in-1s");


    logo.classList.remove("link-color-scroll");
    benefitsLink.classList.remove("link-color-scroll");
    ingredientsLink.classList.remove("link-color-scroll");
    aboutLink.classList.remove("link-color-scroll");
}

window.addEventListener('scroll', function(){ 
    //Here you forgot to update the value
    scrollpos = window.scrollY;

    if(scrollpos > 400){
        add_class_on_scroll();

    }
    else {
        remove_class_on_scroll();
    }
    console.log(scrollpos);
    // close nav if open

});


// Slick Slider
$(document).ready(function(){
    $('.slider').slick({
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        speed: 1800, // 
        autoplaySpeed: 8000, // time between animation
        responsive: [
            {
              breakpoint: 960,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                autoplay: false,
                dots: true,
                autoplaySpeed: 3000
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ] 
    });
  });
      

// Scroll to top
var scrollToTop = document.querySelector('.scroll-top');
var preHeader = document.querySelector('.pre-header');

scrollToTop.addEventListener('click', function () {
    console.log('clicked the damn button!')
    preHeader.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});

// Benefits Link
var benefitsLink = document.getElementById('benefits-link');
var benefitsSection = document.getElementById('benefits-section')

benefitsLink.addEventListener('click', function () {
    benefitsSection.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});

// Ingredients Link
var ingredientsLink = document.getElementById('ingredients-link');
var ingredientsSection = document.getElementById('ingredients-section')

ingredientsLink.addEventListener('click', function () {
    ingredientsSection.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});

// About Link
var aboutLink = document.getElementById('about-link');
var aboutSection = document.getElementById('about-section')

aboutLink.addEventListener('click', function () {
    aboutSection.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
});





