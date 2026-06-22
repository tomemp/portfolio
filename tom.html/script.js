function afficherJour(id) {

    const contenuClique = document.getElementById(id);

    // Si le jour est déjà ouvert, on le referme
    if (contenuClique.style.display === "block") {
        contenuClique.style.display = "none";
        return;
    }

    // On ferme tous les jours
    const contenus = document.querySelectorAll('.contenu');

    contenus.forEach(contenu => {
        contenu.style.display = "none";
    });

    // Puis on ouvre celui cliqué
    contenuClique.style.display = "block";
}
document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});
