// Mobile menu toggle
document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.getElementById("nav-links");

  menuIcon.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  // Close menu when clicking a nav link
  const links = document.querySelectorAll(".nav-links a");
  links.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.classList.remove("active");
    });
  });

  // Carousel functionality
  const cards = document.getElementById("cards");
  const leftBtn = document.getElementById("leftBtn");
  const rightBtn = document.getElementById("rightBtn");

  let scrollAmount = 0;
  const cardWidth = window.innerWidth > 768 ? 606 : window.innerWidth - 40;

  rightBtn.addEventListener("click", function () {
    scrollAmount += cardWidth + 20; // 20px is the gap
    const maxScroll = cards.scrollWidth - cards.clientWidth;
    if (scrollAmount > maxScroll) scrollAmount = maxScroll;
    cards.style.transform = `translateX(-${scrollAmount}px)`;
  });

  leftBtn.addEventListener("click", function () {
    scrollAmount -= cardWidth + 20;
    if (scrollAmount < 0) scrollAmount = 0;
    cards.style.transform = `translateX(-${scrollAmount}px)`;
  });

  // Reset on window resize
  window.addEventListener("resize", function () {
    scrollAmount = 0;
    cards.style.transform = "translateX(0)";
  });
});
