document.getElementById("download-resume-btn").addEventListener("click", function () {
    window.open("./HimaniBansalResume.pdf", "_blank");
});

// Mobile nav toggle
document.getElementById("menu-toggle").addEventListener("click", function () {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show-nav");
});

