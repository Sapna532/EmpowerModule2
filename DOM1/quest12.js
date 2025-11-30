
let ul = document.querySelector("#list");

let btn = document.querySelector("#addBtn");

btn.addEventListener("click", function () {
    let newLi = document.createElement("li");

    let count = ul.children.length + 1;
    newLi.textContent = "New Item " + count;

    if (count % 2 === 1) {
        newLi.style.fontWeight = "bold";
        newLi.style.color = "blue";
    } else {
        newLi.style.color = "red";
    }

    ul.appendChild(newLi);
});
