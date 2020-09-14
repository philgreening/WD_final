//Carousel script adapted from W3 Schools https://www.w3schools.com/howto/howto_js_slideshow.asp

//initialises index for cycle
let slideIndex = 1;
showSlides(slideIndex);

//function to accept input from onclick
function slides(n){
    showSlides(slideIndex += n);
}
//function to cycle through the two slide containers
function showSlides(n) {
    const slides = document.getElementsByClassName("carousel-slide-container");
    if (n > slides.length){
        slideIndex = 1;
    }
    if (n < 1){
        slideIndex = slides.length
    }
    //iteration to make current slide visible
    for (let i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex -1].style.display = "flex";
}