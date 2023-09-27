var slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("slideshow-slide");
    var dots   = document.getElementsByClassName("slide-dot");
    var i;

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i=0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i=0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dot-active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " dot-active";
}
