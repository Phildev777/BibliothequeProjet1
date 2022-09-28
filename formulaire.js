const form = document.querySelector(".form");
const userName = document.querySelector("#formulaireName");


form.onsubmit = function (event) {
    event.preventDefault();
    window.alert(`Merci, ${userName.value}, votre message est bien envoyé ! Je vous promet d'y répondre au plus vite !`);
};