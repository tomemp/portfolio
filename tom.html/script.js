document.querySelectorAll("button").forEach(btn => {

btn.addEventListener("mouseenter", () => {

btn.style.transform = "scale(1.08)";

});

btn.addEventListener("mouseleave", () => {

btn.style.transform = "scale(1)";

});

});

document.querySelector(".cv-btn")
.addEventListener("click", () => {

alert("Téléchargement du CV");

});

document.querySelectorAll(".project-card button")
.forEach(btn => {

btn.addEventListener("click", () => {

alert("Projet à ouvrir");

});

});

document.querySelector(".secondary-btn")
.addEventListener("click", () => {

document
.getElementById("contact")
.scrollIntoView({
behavior:"smooth"
});

});