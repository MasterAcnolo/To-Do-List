function getText() {
  const input = document.getElementById('text-input');
  const text = input.value.trim();
  const ul = document.getElementById('list-output');
  const li = document.createElement("li");

  if (text === "") return; // On s'en fout si y'a rien

  li.textContent = text;
  input.value = ""; // Clear du champ après ajout

  // Créer le bouton de delete
  const removeButton = document.createElement("span");
  removeButton.textContent = " X"; // Contenu du bouton de delete
  removeButton.classList.add("remove");

  // Ajouter la croix (removeButton) au <li>
  li.appendChild(removeButton);

  // Ajouter le <li> à la liste
  ul.appendChild(li);

  // Ajouter un écouteur d'événements pour cocher/décocher la tâche
  li.addEventListener("click", function () {
    li.classList.toggle("done"); // Alterne entre .done et rien
  });

  // Ajouter un écouteur d'événements pour supprimer la tâche
  removeButton.addEventListener("click", function (event) {
    event.stopPropagation(); // Empêche la propagation du clic sur le <li>
    li.remove(); // Supprimer le <li> de la liste
  });
}
