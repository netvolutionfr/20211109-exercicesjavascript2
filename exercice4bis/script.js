const bouton = document.getElementById("bouton");
const compteur = document.getElementById("compteur");

let nbClicks = 0;

function incrementeCompteur() {
    nbClicks++;
    compteur.innerText = nbClicks;
}

bouton.addEventListener("click", incrementeCompteur);