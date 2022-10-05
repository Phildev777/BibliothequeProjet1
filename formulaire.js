const form = document.querySelector('.form');


function openForm(e) {
    e.preventDefault();
    document.getElementById("popupForm").style.display = "block";
    document.querySelector(".form").style.opacity = "20%";
    document.querySelector(".googleMap").style.display = "none";
    document.getElementById("contactMe").style.opacity = "20%";
    document.getElementById("bookFoot").style.opacity = "20%";
    document.querySelector(".articles").style.opacity = "20%";
    form.reset();
};


function closeForm() {

    document.getElementById("popupForm").style.display = "none";
    document.querySelector(".form").style.opacity = "initial";
    document.querySelector(".googleMap").style.display = "flex";
    document.getElementById("contactMe").style.opacity = "initial";
    document.getElementById("bookFoot").style.opacity = "initial";
    document.querySelector(".articles").style.opacity = "initial";
};