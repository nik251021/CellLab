const image = document.getElementById("night");
let nighttheme = false;

var body = document.body;
var header = document.getElementById("header")
var navigation = document.getElementById("navigation")
var main = document.getElementById("main_content")

image.addEventListener("click", () => {
    nighttheme = !nighttheme;
    if (nighttheme) {
        body.classList.add("night-mode");
    } else {
        body.classList.remove("night-mode");
    }

    console.log("Текущая тема:", nighttheme ? "Ночная" : "Дневная");
});