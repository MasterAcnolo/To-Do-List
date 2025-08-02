function drop() {
    const input = document.getElementById("text-input"); // Récupère l'input
    const output = document.getElementById("output");    // Conteneur d'affichage
    const value = input.value.trim(); // Récupère la valeur proprement

    if (value === "") return; // Ne rien faire si vide

    // Création d'un conteneur pour la ligne (valeur + bouton X)
    const ligne = document.createElement("div");
    ligne.classList.add("ligne"); // (optionnel, pour styliser)

    // Crée le paragraphe avec le texte
    const p = document.createElement("p");
    p.textContent = value;

    // Crée le "X" pour supprimer
    const cross = document.createElement("p");
    cross.textContent = "X";
    cross.id = "cross";
    cross.style.cursor = "pointer";
    cross.onclick = () => ligne.remove(); // Supprime la ligne au clic

    // Ajoute tout dans la ligne
    ligne.appendChild(p);
    ligne.appendChild(cross);

    // Ajoute la ligne dans l’output
    output.appendChild(ligne);

    // Vide l’input après coup
    input.value = "";
}


function reset(){
    const input = document.getElementById("text-input")
    input.value =""; // Soft Reset car remise à 0
}