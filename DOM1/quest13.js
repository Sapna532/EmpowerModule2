let colorInput = document.querySelector("#colorInput");
let textInput = document.querySelector("#textInput");

let bgBtn = document.querySelector("#bgBtn");
let textBtn = document.querySelector("#textBtn");

let box = document.querySelector("#box");

bgBtn.addEventListener("click", function () {
    let color = colorInput.value.trim();

    if (color === "") return;

    box.style.backgroundColor = color;

    if (box.style.backgroundColor !== color) {
        alert("Invalid color name!");
    }
});

textBtn.addEventListener("click", function () {
    let newText = textInput.value.trim();

    if (newText === "") {
        alert("Please enter some text!");
        return;
    }

    box.textContent = newText;
});
