let menu = document.querySelector("#menu-btn")
let navbar = document.querySelector(".navbar")


menu.onclick = () =>{
    menu.classList.toggle("fa-times")
    navbar.classList.toggle("active")
}


window.onscroll = () =>{
    menu.classList.remove("fa-times")
    navbar.classList.remove("active")
}

document.getElementById("home-btn").onclick = function () {
    location.href = "https://apps.apple.com/app/cookie-editor-by-clint/id1643498176";
};
document.getElementById("all-btn").onclick = function () {
    location.href = "https://apps.apple.com/app/cookie-editor-by-clint/id1643498176";
};