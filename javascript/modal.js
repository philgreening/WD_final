const modal = document.getElementById("modal");
const closeButton = document.getElementById("close-button");
const openModal = document.getElementById("open-modal");
const modalOverlay = document.getElementById("modal-overlay");


openModal.addEventListener("click", function () {
        modal.style.display = "grid";
        modalOverlay.style.display = "block"
    });

    closeButton.addEventListener("click", function () {
        modal.style.display = "none";
        modalOverlay.style.display = "none";
    });
