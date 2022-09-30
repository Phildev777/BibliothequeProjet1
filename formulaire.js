const form = document.querySelector(".form");
const userName = document.querySelector("#userName");


form.onsubmit = function (event) {
    event.preventDefault();
    window.alert(`Merci ${userName.value} ! Votre message est bien envoyé ! Je vous promet d'y répondre au plus vite !`);
};

