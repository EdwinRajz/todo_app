function addTask() {
  let taskContainer = document.createElement("div");
  taskContainer.className = "todo-container";
  let titleTag = document.createElement("h1");
  titleTag.className = "title";
  let textTag = document.createElement("h4");
  textTag.className = "text";
  let timeTag = document.createElement("p");
  timeTag.className = "created-at";

  let titleInput = document.querySelector("input-title");
  let textInput = document.querySelector("input-text");

  console.log(titleInput);
  titleTag.innerText(titleInput);
  textTag.innerText(textInput);
  timeTag = Date.now();

  document
    .getElementById("todo-list")
    .appendChild(taskContainer);
}
