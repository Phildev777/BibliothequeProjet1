var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");
var close = document.getElementById("close");
var close1 = document.getElementById("close1");
var close2 = document.getElementById("close2");


function openNav() {
    sidenav.classList.add("active");
}


function closeNav() {
    sidenav.classList.remove("active");
}


openBtn.onclick = openNav;
closeBtn.onclick = closeNav;
close.onclick = closeNav;
close1.onclick = closeNav;
close2.onclick = closeNav;






