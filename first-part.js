/* lire plus / lire Moins */


function textReveal2() {

    const dots = document.getElementById("dots2");
    const moreText = document.getElementById("more2");
    const btnText = document.getElementById("lirePlus2");

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
function textReveal3() {

    const dots = document.getElementById("dots3");
    const moreText = document.getElementById("more3");
    const btnText = document.getElementById("lirePlus3");

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
function textReveal1() {

    const dots = document.getElementById("dots1");
    const moreText = document.getElementById("more1");
    const btnText = document.getElementById("lirePlus1");

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
