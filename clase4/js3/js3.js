function addP() {
    document.querySelector("body").insertAdjacentHTML("beforeend", "<p>beep</p>")
    document.querySelector("body").classList.toggle("color")
}

var button = document.querySelector("button")
button.addEventListener("click", addP)