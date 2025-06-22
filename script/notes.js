const input = document.getElementById("taskInput");
const button = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

window.addEventListener("load", () => {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach(task => addTaskToList(task.text, task.done));
});

button.addEventListener("click", () => {
  const taskText = input.value.trim();
  if (taskText !== "") {
    addTaskToList(taskText, false);
    saveTask(taskText, false);
    input.value = "";
  }
});

function saveTask(text, done) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push({ text, done });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function updateStorage() {
  const items = document.querySelectorAll("#taskList li");
  const tasks = [];
  items.forEach(item => {
    const checkbox = item.querySelector("input[type='checkbox']");
    const span = item.querySelector("span");
    tasks.push({ text: span.textContent, done: checkbox.checked });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTaskToList(text, done) {
  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = done;
  checkbox.addEventListener("change", updateStorage);

  const span = document.createElement("span");
  span.textContent = text;
  if (done) span.style.textDecoration = "line-through";
  checkbox.addEventListener("change", () => {
    span.style.textDecoration = checkbox.checked ? "line-through" : "none";
    updateStorage();
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.style.marginLeft = "10px";
  deleteBtn.addEventListener("click", () => {
    li.remove();
    updateStorage();
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}
