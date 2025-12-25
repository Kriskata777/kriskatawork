document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const dropdown = document.querySelector(".menu.dropdown-content");

    hamburger.addEventListener("click", function () {
        // Toggle 'active' class on hamburger
        hamburger.classList.toggle("active");

        // Show/hide dropdown menu
        if (dropdown.style.display === "block") {
            dropdown.style.display = "none";
        } else {
            dropdown.style.display = "block";
        }
    });
});
