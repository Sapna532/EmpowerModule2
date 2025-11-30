const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
    const text = input.value.trim();

    if (text === "") return;

    const li = document.createElement("li");
    li.textContent = text;

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";

    completeBtn.addEventListener("click", () => {
        li.style.textDecoration = "line-through";
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    list.appendChild(li);

    input.value = "";
});
