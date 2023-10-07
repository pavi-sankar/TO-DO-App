const taskInput = document.getElementById("inp");
const addTaskButton = document.getElementById("add");
const taskList = document.getElementById("mylist");

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const listItem = document.createElement("li");
    
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const label = document.createElement("label");
    label.textContent = taskText;

    const editButton = document.createElement("button");
    editButton.id = "edb"
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => {
        const newText = prompt("Edit task:", label.textContent);
        if (newText !== null && newText.trim() !== "") {
            label.textContent = newText;
        }
    });

    const deleteButton = document.createElement("button");
    deleteButton.id="dtb"
    deleteButton.textContent = "Delete";

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(deleteButton);
    listItem.appendChild(editButton);

    taskList.appendChild(listItem);

    taskInput.value = "";

    deleteButton.addEventListener("click", () => {
        listItem.remove();
    });

    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            label.style.textDecoration = "line-through";
        } else {
            label.style.textDecoration = "none";
        }
    });
}
addTaskButton.addEventListener("click", addTask);