
const addtask_input = document.getElementById("input_box");
const listcontainer = document.getElementById ("list_container");
const addtask_button = document.getElementById("addtask_button");

function addTask() {
  let task = addtask_input.value.trim();
  if (!task) {
    alert("Please write down a task");
    return;
  }

  li.innerHTML = `
    <label>
      <input type="checkbox">
      <span>${task}</span>
    </label>
    <span class="edit-btn">Edit</span>
    <span class="delete-btn">Delete</span>
    `;

  listcontainer.appendChild(li);
  addtask_input.value = "";
}
addtask_button.addEventListener('click', addTask);

const checkbox = li.querySelector("input");
const editBtn = li.querySelector(".edit-btn");
const taskSpan = li.querySelector("span");
const deleteBtn = li.querySelector(".delete-btn");

