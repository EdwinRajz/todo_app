


function addTask() {
  let titleTag = document.createElement("task-title");
  let testTag = document.createElement("task-text");
  let timeTag = document.createElement("task-time");





  let taskContainer = document.createElement("div");
  taskContainer.className = "todo-container";
  let text = document.createTextNode(createTask.fetchText);
  taskContainer.appendChild(text);
  document.getElementById("todo-list").appendChild(taskContainer);
}
