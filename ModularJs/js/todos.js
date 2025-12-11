import { Navbar } from "./navbar.js";
import { Footer } from "./footer.js";
import { displayTodos } from "./displayTodos.js";

document.getElementById("navbar").innerHTML = Navbar();
document.getElementById("footer").innerHTML = Footer();

// Check login
if (localStorage.getItem("loggedIn") !== "yes") {
    alert("Please login first!");
    window.location.href = "login.html";
}

// Fetch todos
fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(data => {
        document.getElementById("todos").innerHTML = displayTodos(data.slice(0, 20));
    });
