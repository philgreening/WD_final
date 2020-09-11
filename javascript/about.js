//Event handler to display form success message
document.getElementById("submit").addEventListener("click", success);

function success() {
    document.getElementById("success").innerHTML = "Form submitted successfully";
}