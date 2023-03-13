// MENU
const fermerMenu = () => {
    // Récupérer le menu
    const input = document.getElementById('menu-cb')
    input.checked = false

    const fenetreNode = document.getElementById('menu-cote')
    fenetreNode.remove()
}

const changerEtatMenu = () => {
    // Récupérer le menu
    const input = document.getElementById('menu-cb')
    const actif = input.checked

    if (actif) {
        const fenetreNode = document.createElement('div')
        fenetreNode.id = 'menu-cote'
        fenetreNode.className = 'menu-cote'
        fenetreNode.addEventListener('click', fermerMenu)
        document.body.appendChild(fenetreNode)
    } else {
        const fenetreNode = document.getElementById('menu-cote')
        fenetreNode.remove()
    }
}

const input = document.getElementById('menu-cb')
input.addEventListener('click', changerEtatMenu)

// Ajout ultérieur :
// Lorsque le menu a été déroulé et l'utilisateur rafraichit
// la page, exécuter la procédure d'ouverture pour permettre à
// l'utilisateur de clôre le menu en cliquant sur l'écran
if (input.checked) {
    changerEtatMenu()
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("custom-slider");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}