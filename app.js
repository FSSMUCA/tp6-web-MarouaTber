let historique = [];

document.getElementById("btnCalcul").addEventListener("click", calculer);

function calculer() {
    let A = document.getElementById("nombreA").value;
    let B = document.getElementById("nombreB").value;
    let op = document.getElementById("operation").value;
    let erreur = document.getElementById("erreur");

    erreur.textContent = ""; 

    if (A === "" || B === "") {
        erreur.textContent = "Veuillez remplir tous les champs.";
        return;
    }

    A = parseFloat(A);
    B = parseFloat(B);

    if (op === "/" && B === 0) {
        erreur.textContent = "Division par zéro interdite.";
        return;
    }

    let resultat = 0;

    switch (op) {
        case "+": resultat = A + B; break;
        case "-": resultat = A - B; break;
        case "*": resultat = A * B; break;
        case "/": resultat = A / B; break;
    }

    let operationTexte = `${A} ${op} ${B} = ${resultat}`;
    historique.push(operationTexte);

    afficherHistorique();
}

function afficherHistorique() {
    let ul = document.getElementById("listeHistorique");
    ul.innerHTML = ""; 

    historique.forEach(op => {
        let li = document.createElement("li");
        li.textContent = op;
        ul.appendChild(li);
    });
}
