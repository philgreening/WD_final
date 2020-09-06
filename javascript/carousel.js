//Carousel script

var slideIndex = 1;
showSlides(slideIndex);

function slides(n){
    showSlides(slideIndex += n);
    //moveSlides();
}
function showSlides(n) {
    var slides = document.getElementsByClassName("carousel-slide-container");
    if (n > slides.length){
        slideIndex = 1;
    }
    if (n < 1){
        slideIndex = slides.length
    }
    for (var i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex -1].style.display = "flex";
    //slides[slideIndex -1].style.flexDirection = "column";
}
