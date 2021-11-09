function estBissextile(annee) {
    if (annee % 400 === 0) {
        return true;
    } else {
        if (annee % 4 === 0) {
            if (annee % 100 !==0) {
                return true;
            }
        }
    }
    return false;
}

const bouton = document.getElementById('bouton');
const reponse = document.getElementById('reponse');

function test() {
    const annee = document.getElementById('annee').value;
    console.log(annee);
    if (estBissextile(annee)) {
        reponse.innerText = "Oui";
    } else {
        reponse.innerText = "Non";
    }
}

bouton.addEventListener('click', test);
