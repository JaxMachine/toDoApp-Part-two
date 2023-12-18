//Document Query Variables
const taskSubmit = document.querySelector("form");
const taskList = document.querySelector("#task-list");
const toDo = document.querySelector("#new-task");

let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

for (let i = 0; i < savedTasks.length; i++) {
  let newLi = document.createElement("li");
  newLi.innerText = savedTasks[i].task;
  newLi.isCompleted = savedTasks[i].isCompleted ? true : false;
  if (newLi.isCompleted) {
    newLi.classList.add("task-done");
  }
  taskList.appendChild(newLi);
}

//Task List Creation and Removal
taskList.addEventListener("click", function (e) {
  let clickedTask = e.target;
  if (!clickedTask.isCompleted) {
    clickedTask.classList.add("task-done");
    clickedTask.isCompleted = true;
  } else {
    clickedTask.classList.remove("task-done");
    clickedTask.isCompleted = false;
  }

  for (let i = 0; i < savedTasks.length; i++) {
    if (savedTasks[i].task === clickedTask.innerText) {
      savedTasks[i].isCompleted = !savedTasks[i].isCompleted;
      localStorage.setItem("tasks", JSON.stringify(savedTasks));
    }
  }
});

taskSubmit.addEventListener("submit", function (e) {
  e.preventDefault();
  const newTaskInput = document.querySelector("#new-task");
  const newLi = document.createElement("li");
  const newButton = document.createElement("Button");
  newLi.innerText = newTaskInput.value;
  newButton.innerText = "Remove Task";
  newSpan = document.createElement("span");
  taskList.append(newLi);
  taskSubmit.reset();

  savedTasks.push({ task: newLi.innerText, isCompleted: false });
  localStorage.setItem("tasks", JSON.stringify(savedTasks));
});
