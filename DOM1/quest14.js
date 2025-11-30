// Correct element ids
const box = document.getElementById("box");
const message = document.getElementById("message");

// Correct id for text button
const textButton = document.getElementById("textbutton");

// Correct id for color button
const colorButton = document.getElementById("colorbutton");

// Correct method -> addEventListener (was misspelled)
textButton.addEventListener("click", () => {
    // Correct property -> textContent (was para.contentText)
    message.textContent = "New Message";
});

// Correct .style usage and correct backgroundColor spelling
colorButton.addEventListener("click", () => {
    box.style.backgroundColor = "blue"; 
});
