/* lire plus / lire Moins */

let noOfCharac = 150;
let contents = document.querySelectorAll(".content");

contents.forEach(content => {
    let displayText = content.textContent.slice(0, noOfCharac);
    let moreText = content.textContent.slice(noOfCharac);
    content.innerHTML = `${displayText}<span class="dots">...</span><span class="card__read-more">${moreText}</span>`;
});



const cardHolder = document
    .querySelector('.my-selection');

cardHolder
    .addEventListener('click', e => {

        const current = e.target;

        const isReadMoreBtn = current.className.includes('read-more-btn');

        if (!isReadMoreBtn)
            return;
        const dots = current.parentNode.querySelector('.dots');
        const currentText = current.parentNode.querySelector('.card__read-more');

        currentText.classList.toggle('card__read-more--open');
        dots.classList.toggle('hide_dots');

        current.textContent = current.textContent.includes('Lire plus +') ? 'Lire moins -' : 'Lire plus +';
    });