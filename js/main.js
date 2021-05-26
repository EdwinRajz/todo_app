function addTask() {
  
  const titleInput = document.querySelector("input-title");
  const textInput = document.querySelector("input-text");

  let taskContainer = document.createElement("div");
  taskContainer.className = "todo-container";
  let titleTag = document.createElement("h1");
  titleTag.className = "title";
  let textTag = document.createElement("h4");
  textTag.className = "text";
  let timeTag = document.createElement("p");
  timeTag.className = "created-at";


  console.log(titleInput);
  titleTag.innerText(titleInput.value);
  textTag.innerText(textInput.value);
  timeTag = Date.now();

  document
    .getElementById("todo-list")
    .appendChild(taskContainer);
}
