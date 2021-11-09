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

const ul = document.getElementById('liste');
for(let annee=1600; annee<=2100; annee++) {
    if (estBissextile(annee)) {
        const li = document.createElement('li');
        li.innerText = annee;
        ul.appendChild(li);
    }
}
