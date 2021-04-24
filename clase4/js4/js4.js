function changeColor(p) {
    p.classList.toggle("paragraph")
}

var paragraphs = document.querySelectorAll("p")
paragraphs.forEach(p => p.addEventListener("click", function () {
        changeColor(p)
    }
))