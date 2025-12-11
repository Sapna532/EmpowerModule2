import { Navbar } from "./navbar.js";
import { Footer } from "./footer.js";

document.getElementById("navbar").innerHTML = Navbar();
document.getElementById("footer").innerHTML = Footer();

document.getElementById("loginBtn").onclick = () => {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;

    const saved = JSON.parse(localStorage.getItem("user"));

    if (!saved || saved.email !== email || saved.pass !== pass) {
        alert("Invalid login");
    } else {
        localStorage.setItem("loggedIn", "yes");
        window.location.href = "todos.html";
    }
};
