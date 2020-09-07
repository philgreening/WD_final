var modal = document.getElementById("modal");
var closeButton = document.getElementById("close-button");
// var openModal = document.getElementsByClassName("article-img-float")
var openModal = document.getElementById("open-modal")
var modalOverlay = document.getElementById("modal-overlay")


    openModal.addEventListener("click", function () {
        modal.style.display = "grid";
        modalOverlay.style.display = "block"
    });
    // modalOverlay.addEventListener("click", function () {
    //     modalOverlay.style.display = "block";
    // });
    closeButton.addEventListener("click", function () {
        modal.style.display = "none";
        modalOverlay.style.display = "none";
    });
