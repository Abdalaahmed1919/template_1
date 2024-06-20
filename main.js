let menu = document.querySelector(".fa-solid");
let list = document.querySelector(".list ul");
let p = document.querySelector(".footer .container p")
let up = document.querySelector(".up img");


window.onscroll = function () {
    this.scrollY ? up.classList.add("show") : up.classList.remove("show");
}

up.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

menu.onclick = function () {
    list.classList.toggle("active");
}
// to handle The Year
let a = new Date ();
a = a.getFullYear();
p.innerHTML = `Copyright © ${a} Omar Hassan . All Rights Reserved .`;