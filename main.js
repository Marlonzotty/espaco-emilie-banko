var menu = document.querySelector('nav ul');
var menuBar = document.querySelector('nav .menu-icon');
var iconMenu = document.querySelector('nav .menu-icon img');

menuBar.addEventListener('click', function () {

    if (iconMenu.getAttribute("src") == 'icons8-cardápio-50.png') {
        iconMenu.setAttribute("src", "icons8-cardápio-50.png");
    } else {
        iconMenu.setAttribute("src", "icons8-cardápio-50.png");
    }

    menu.classList.toggle('active');
});
let count = 1;
document.getElementById("radio1").ariaChecked = true;

setInterval(function () {
    nextImage();
}, 6000)
function nextImage() {
    count++;
    if (count > 4) {
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;
}










//acomodações



