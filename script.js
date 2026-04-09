document.addEventListener('DOMContentLoaded', () => {
    // Get modal elements
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("zoomedImg");
    const captionText = document.getElementById("caption");
    const closeBtn = document.getElementById("closeModalBtn");

    // Get all images inside the gallery
    const images = document.querySelectorAll(".gallery-item img");

    // Loop through each image and add a click event
    images.forEach(img => {
        img.addEventListener("click", function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            // Grab the text from the caption div directly below the image
            captionText.innerHTML = this.nextElementSibling.innerHTML;
        });
    });

    // Close the modal when clicking the 'X'
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Close the modal when clicking anywhere outside the image
    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Close the modal when pressing the Escape key
    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape" && modal.style.display === "block") {
            modal.style.display = "none";
        }
    });
});