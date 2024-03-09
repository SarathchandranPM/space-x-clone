const menuBtn = document.getElementById("menuBtn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  menu.classList.toggle("menu-open");
  document.body.classList.toggle("scroll-lock");
});

const arrow = document.getElementsByClassName("fa-solid");

for (let i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", () => {
    arrow[i].classList.toggle("rotate");
  });
}

const headerAndArrowElements = document.querySelectorAll(".header-and-arrow");

headerAndArrowElements.forEach((header) => {
  header.addEventListener("click", () => {
    const footerLinks = header.nextElementSibling;
    header.classList.toggle("active");
    footerLinks.classList.toggle("expand");
  });
});
