// Function to open the modal and display the image
function openModal(imageSrc) {
    var modal = document.getElementById("image-modal");
    var modalImg = document.getElementById("modal-image");
    modal.style.display = "block"; // Show modal
    modalImg.src = imageSrc; // Set the image source to the clicked image
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById("image-modal");
    modal.style.display = "none"; // Hide modal
}
