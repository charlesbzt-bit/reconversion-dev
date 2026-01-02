// script.js — Jour 3
function changerTexte1() {
    document.getElementById("texte1").textContent = "🎉 Texte de la section 1 changé !";
}

function changerTexte2() {
    document.getElementById("texte2").textContent = "🎉 Texte de la section 2 changé !";
}

function changerTexte3() {
    document.getElementById("texte3").textContent = "🎉 Texte de la section 3 changé !";
}
function ajouterLigne() {
    const tableau = document.getElementById("tableau");
    const nouvelleLigne = tableau.insertRow();
    
    const cellule1 = nouvelleLigne.insertCell(0);
    const cellule2 = nouvelleLigne.insertCell(1);
    
    cellule1.textContent = "Nouvel Item";
    cellule2.textContent = Math.floor(Math.random() * 100);
}
function supprimerLigne(bouton) {
    const ligne = bouton.parentElement.parentElement;
    ligne.remove();
    alert("Ligne supprimée !");
}

function modifierLigne(bouton) {
    const ligne = bouton.parentElement.parentElement;
    const nouvelleValeur = prompt("Entrez une nouvelle valeur :", ligne.cells[1].textContent);
    if (nouvelleValeur !== null) {
        ligne.cells[1].textContent = nouvelleValeur;
        alert("Valeur mise à jour !");
    }
}
