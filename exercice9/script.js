function estPremier(nombre) {
    if (nombre === 1 || nombre === 2) {
        return true;
    }
    let i = 2;
    while (i < nombre) {
        if (nombre % i === 0) {
            return false;
        }
        i++;
    }
    return true;
}

const ul = document.getElementById("liste");

for (let n = 1; n <= 100; n++) {
    const li = document.createElement("li");
    li.innerText =n;
    if (estPremier(n)) {
        li.style.color = "red";
    }
    ul.appendChild(li);
}