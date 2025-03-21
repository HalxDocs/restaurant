// Toggle Menu Function
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close Menu When a Link is Clicked (Optional)
navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// Loader Disappear After 4 Seconds
window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    setTimeout(() => {
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
        }, 500); // Fade-out duration
    }, 2000); // 4 seconds
});

// https://www.pfchangs.com/