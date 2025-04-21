document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const navLinks = document.getElementById("nav-links");

    menuIcon.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  });

const cards = document.getElementById("cards");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

let scrollAmount = 0;
const scrollStep = 620;

leftBtn.addEventListener("click", () => {
  scrollAmount -= scrollStep;
  cards.style.transform = `translateX(-${Math.max(0, scrollAmount)}px)`;
});

rightBtn.addEventListener("click", () => {
  scrollAmount += scrollStep;
  cards.style.transform = `translateX(-${scrollAmount}px)`;
});
