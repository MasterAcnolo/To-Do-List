function getText() {
  const input = document.getElementById('text-input');
  const text = input.value.trim();
  const ul = document.getElementById('list-output');
  const Todo = [];
  if (text === "") return;

  const li = document.createElement("li");

  
  const taskText = document.createElement("span");
  taskText.classList.add("task-text"); 
  taskText.textContent = text;

  
  const removeButton = document.createElement("span");
  removeButton.textContent = "X";
  removeButton.classList.add("remove");

 
  li.appendChild(taskText);
  li.appendChild(removeButton);

 
  ul.appendChild(li);
  input.value = "";

  
  
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
