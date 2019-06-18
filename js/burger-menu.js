//CREATING BURGER MENU

const burgerLinks = document.querySelector(".top-bar__menu");
const burgerIcon = document.querySelector(".top-bar__burger-menu");

function displayMenu() {
    if (burgerLinks.style.display === "block") {
        burgerLinks.style.display = "none";
    } else {
        burgerLinks.style.display = "block";
    }
}

burgerIcon.addEventListener("click", displayMenu);


