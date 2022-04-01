let slideIndex = 1;
showSlides(slideIndex);

function nextSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dots");
    if(n > slides.length) {slideIndex = 1}
    if(n < 1){slideIndex = slides.length}

    for(i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", " ");

    }
    slides[slideIndex-1].getElementsByClassName.display = "block";
    dots[slideIndex-1].className += " active";
}