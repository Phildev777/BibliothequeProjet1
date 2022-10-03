let hidenText = document.querySelector('.hide');

let readMore = document.querySelector('.lireplus');

readMore.addEventListener('click', toggleText);

function toggleText () {
    hidenText.classList.toggle("showtext");
}