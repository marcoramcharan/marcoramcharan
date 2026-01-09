// Mobile navigation toggle
const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
const mobileNavClose = document.querySelector(".mobile-nav-close");
const mobileNav = document.querySelector(".mobile-nav");
const overlay = document.querySelector(".overlay");
const body = document.body;

function toggleMobileNav() {
  mobileNav.classList.toggle("active");
  overlay.classList.toggle("active");
  mobileNavToggle.classList.toggle("nav-active");
  body.classList.toggle("no-scroll");
}

function closeMobileNav() {
  mobileNav.classList.remove("active");
  overlay.classList.remove("active");
  mobileNavToggle.classList.remove("nav-active");
  body.classList.remove("no-scroll");
}

if (mobileNavToggle) {
  mobileNavToggle.addEventListener("click", toggleMobileNav);
}

// Add event listener for the close button
if (mobileNavClose) {
  mobileNavClose.addEventListener("click", closeMobileNav);
}

if (overlay) {
  overlay.addEventListener("click", closeMobileNav);
}

// Close mobile nav when clicking on a link
const mobileNavLinks = document.querySelectorAll(".mobile-nav-links a");
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", closeMobileNav);
});