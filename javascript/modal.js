// modal code inspired by  https://css-tricks.com/considerations-styling-modal/

//variables to hold id elements
const modal = document.getElementById("modal");
const closeButton = document.getElementById("close-button");
const openModal = document.getElementById("open-modal");
const modalOverlay = document.getElementById("modal-overlay");

//event listener to make modal display on click
openModal.addEventListener("click", function () {
        modal.style.display = "grid";
        modalOverlay.style.display = "block"
    });
//event listener close modal on click of  close button
closeButton.addEventListener("click", function () {
        modal.style.display = "none";
        modalOverlay.style.display = "none";
    });
