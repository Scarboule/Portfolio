const menuIcon = document.getElementById("menu");
const menu = document.getElementById("nav-menu");
const icon = document.getElementById("menu-btn");

menuIcon.addEventListener('click', function () {
    if (menu.style.display == "flex") {
        menu.style.display = 'none';
        menu.style.pointerEvents = 'none';
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    } else {
        menu.style.display = "flex";
        menu.style.pointerEvents = 'auto';
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
        }
})