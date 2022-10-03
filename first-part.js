/* lire plus / lire Moins */

let noOfCharac = 150;
let contents = document.querySelectorAll(".content");

contents.forEach(content => {
    let displayText = content.textContent.slice(0, noOfCharac);
    let moreText = content.textContent.slice(noOfCharac);
    content.innerHTML = `${displayText}<span class="dots">...</span><span class="hide more">${moreText}</span>`;
});
const lirePlus = "Lire plus +";
const lireMoins = "Lire moins -";

function readMore(div) {
    let post = div.parentElement;
    let divContent = div.textContent;

    post.querySelector(".dots").classList.toggle("hide");
    post.querySelector(".more").classList.toggle("hide");
    if (divContent === lirePlus) {
        div.innerHTML = lireMoins;
    }
    else {
        div.innerHTML = lirePlus;
    };
}
