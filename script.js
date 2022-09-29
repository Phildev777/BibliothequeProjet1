/* lire plus / lire Moins */

function textReveal() {

    const dots = document.querySelector(".dots");
    const moreText = document.querySelector(".more");
    const btnText = document.querySelector(".myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Lire plus <i class='fa-solid fa-plus'></i>";
        moreText.style.display = "none";

    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Lire moins <i class='fa-solid fa-minus'></i>";
        moreText.style.display = "inline";

    }
}