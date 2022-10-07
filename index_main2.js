let hidenText1 = document.querySelector('.hiddennn1');
let readMore1 = document.querySelector('#lireplus1');
let puntos1 = document.querySelector('.puntos1');
readMore1.addEventListener('click', toggleText);
function toggleText() {
    console.log(hidenText1.classList);
    hidenText1.classList.toggle("showMas1");
    puntos1.classList.toggle('hiddenn4');
    if (hidenText1.classList.contains('showMas1')) {
        readMore1.innerHTML = 'Lire moins -';
    }
    else { readMore1.innerHTML = 'Lire plus +' }
}
let hidenText2 = document.querySelector('.hiddennn2');
let readMore2 = document.querySelector('#lireplus2');
let puntos2 = document.querySelector('.puntos2');
readMore2.addEventListener('click', toggleText2);
function toggleText2() {
    console.log(hidenText2.classList);
    hidenText2.classList.toggle("showMas2");
    puntos2.classList.toggle('hiddenn4');
    if (hidenText1.classList.contains('showMas2')) {
        readMore2.innerHTML = 'Lire moins -';
    }
    else { readMore2.innerHTML = 'Lire plus +' }
}
let hidenText3 = document.querySelector('.hiddennn3');
let readMore3 = document.querySelector('#lireplus3');
let puntos3 = document.querySelector('.puntos3');
readMore3.addEventListener('click', toggleText3);
function toggleText3() {
    console.log(hidenText3.classList);
    hidenText3.classList.toggle("showMas3");
    puntos3.classList.toggle('hiddenn4');
    if (hidenText3.classList.contains('showMas3')) {
        readMore3.innerHTML = 'Lire moins -';
    }
    else { readMore3.innerHTML = 'Lire plus +' }
}













