const titleInput = document.querySelector(".input-title");
const textInput = document.querySelector(".input-text");

function getTasks() {
  firestoreDatabase
    .collection("tasks")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
      });
    });
}

function addTask() {
  let taskContainer = document.createElement("div");
  taskContainer.classList.add("todo-container");
  let titleTag = document.createElement("h1");
  titleTag.classList.add("title");
  let textTag = document.createElement("h4");
  textTag.classList.add("text");
  let timeTag = document.createElement("p");
  timeTag.classList.add("created-at");

  titleTag.innerText = titleInput.value;
  textTag.innerText = textInput.value;
  time = Date();
  timeTag.innerText = time.slice(0, 21);
  taskContainer.appendChild(titleTag);
  taskContainer.appendChild(textTag);
  taskContainer.appendChild(timeTag);

  document.getElementById("todo-list").appendChild(taskContainer);
}

function editTask() {}
function deleteTask() {}
