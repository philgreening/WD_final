var modal = document.getElementById("modal");
var closeButton = document.getElementById("close-button");
var openModal = document.getElementById("open-modal")
var modalOverlay = document.getElementById("modal-overlay")


    openModal.addEventListener("click", function () {
        modal.style.display = "grid";
        modalOverlay.style.display = "block"
    });

    closeButton.addEventListener("click", function () {
        modal.style.display = "none";
        modalOverlay.style.display = "none";
    });
