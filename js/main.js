const menuIcon = document.getElementById("menu-icon");
const hiddenList = document.getElementById("hidden-list");
const header = document.getElementById("header");
const homeLogo = document.getElementById("home-logo");

menuIcon.addEventListener("click", () => {
    hiddenList.classList.toggle("hidden");
});

window.onscroll = () => {
  hiddenList.classList.toggle("hidden",window.screen.width<=320);
}

window.addEventListener('scroll', () => {
    header.classList.toggle("bg-[var(--bg-color)]", window.scrollY > 0);
    menuIcon.classList.toggle("text-[var(--text-color)]", window.scrollY > 0);
    homeLogo.classList.toggle("text-[var(--text-color)]", window.scrollY > 0);
});
