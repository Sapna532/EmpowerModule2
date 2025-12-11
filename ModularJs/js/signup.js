import { Navbar } from "./navbar.js";
import { Footer } from "./footer.js";

document.getElementById("navbar").innerHTML = Navbar();
document.getElementById("footer").innerHTML = Footer();

document.getElementById("signupBtn").onclick = () => {
    const user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        pass: document.getElementById("password").value
    };

    localStorage.setItem("user", JSON.stringify(user));
    alert("Signup successful!");
    window.location.href = "login.html";
};
