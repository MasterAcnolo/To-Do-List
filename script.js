function getText() {
  const input = document.getElementById('text-input');
  const text = input.value.trim();
  const ul = document.getElementById('list-output');
  const Todo = [];
  if (text === "") return;

  const li = document.createElement("li");

  // Créer un nœud texte avec le contenu de la tâche
  const taskText = document.createElement("span");
  taskText.classList.add("task-text"); // On ajoute la classe `task-text` pour appliquer le style de barré si besoin
  taskText.textContent = text;

  // Créer le bouton de suppression
  const removeButton = document.createElement("span");
  removeButton.textContent = "X";
  removeButton.classList.add("remove");

  // Ajouter le texte puis le bouton
  li.appendChild(taskText);
  li.appendChild(removeButton);

  // Ajouter le <li> à la liste
  ul.appendChild(li);
  input.value = "";

  
  // Cocher/décocher la tâche (applique/désapplique le barré)
  li.addEventListener("click", function () {
    li.classList.toggle("done");
  });

  // Supprimer la tâche
  removeButton.addEventListener("click", function (event) {
    event.stopPropagation(); // Empêche de cocher/décocher quand on clique sur le X
    li.remove();
  });
}


// Ajouter avec la touche Entrée
document.getElementById("text-input").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    getText();
  }
});

// Ajouter avec le bouton "+"
document.getElementById("BoutonAdd").addEventListener("click", getText);
