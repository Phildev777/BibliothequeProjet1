

/* Evite d'envoyer le popup sans remplir le form mais envoi le pop up et le ferme direct */
/*
const form = document.querySelector(".form");

form.onsubmit = function openForm() {
    openForm.preventDefault();
    document.getElementById("popupForm").style.display = "block";
    document.querySelector(".form").style.display = "none";
}

function closeForm() {

    document.getElementById("popupForm").style.display = "none";
    document.querySelector(".form").style.display = "initial";
}
*/

/* Envoi le popup mais sans avoir à remplir le formulaire */

function openForm() {
    document.getElementById("popupForm").style.display = "block";
    document.querySelector(".form").style.display = "none";
    document.querySelector(".googleMap").style.display = "none";
    document.querySelector(".articles").style.opacity = "20%";
    document.getElementById("contactMe").style.display = "none";
}

function closeForm() {

    document.getElementById("popupForm").style.display = "none";
    document.querySelector(".form").style.display = "initial";
    document.querySelector(".googleMap").style.display = "flex";
    document.querySelector(".articles").style.opacity = "initial";
    document.getElementById("contactMe").style.display = "initial";
}