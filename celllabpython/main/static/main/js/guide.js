const divtheme = document.getElementById("theme");
let nighttheme = false;

var body = document.body;
var header = document.getElementById("header")
var navigation = document.getElementById("navigation")
var main = document.getElementById("main_content")

divtheme.addEventListener("click", () => {

    if (nighttheme == false) {
        nighttheme = true
        body.classList.add("night-mode");
    } else {
        nighttheme = false
        body.classList.remove("night-mode");
    }
});