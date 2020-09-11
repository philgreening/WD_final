//Carousel script

let slideIndex = 1;
showSlides(slideIndex);

function slides(n){
    showSlides(slideIndex += n);
}
function showSlides(n) {
    const slides = document.getElementsByClassName("carousel-slide-container");
    if (n > slides.length){
        slideIndex = 1;
    }
    if (n < 1){
        slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex -1].style.display = "flex";
}