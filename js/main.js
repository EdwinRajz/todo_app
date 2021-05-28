const titleInput = document.querySelector(".input-title");
const textInput = document.querySelector(".input-text");
let taskContainer = document.createElement("div");
taskContainer.classList.add("todo-container");
let titleTag = document.createElement("h1");
titleTag.classList.add("title");
let textTag = document.createElement("h4");
textTag.classList.add("text");
let timeTag = document.createElement("p");
timeTag.classList.add("created-at");

function addTask() {
  titleTag.innerText = titleInput.value;
  textTag.innerText = textInput.value;
  timeTag.innerText = Date.now();

  taskContainer.appendChild(titleTag);
  taskContainer.appendChild(textTag);
  taskContainer.appendChild(timeTag);

  document.getElementById("todo-list").appendChild(taskContainer);
}
