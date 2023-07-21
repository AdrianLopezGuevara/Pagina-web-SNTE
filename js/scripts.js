/* Slider */
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 5000);
}

/* Modal */

function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

let index = 1;
slides(index);

function plusSlides(n) {
    slides(index += n);
}

function currentSlide(n) {
    slides(index = n);
}

function slides(n) {
    var slides = document.getElementsByClassName("galeria__slides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { index = 1 }
    if (n < 1) { index = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[index - 1].style.display = "block";
    dots[index - 1].className += " active";
    captionText.innerHTML = dots[index - 1].alt;
}

const icon = document.querySelector(".icon")
const menu = document.querySelector(".menu")

icon.addEventListener("click", () => {
    menu.classList.toggle("activo");
})

document.querySelectorAll(".nav-link").forEach(n =>
    n.addEventListener("click", () => {
        menu.classList.remove("activo");
    }))
