// Firebase Auth SDK
const firebaseConfig = {
   apiKey: "",
   authDomain: "",
};

firebase.initializeApp(firebaseConfig);

function signup() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  firebase.auth().createUserWithEmailAndPassword(email, pass)
    .then(() => {
      alert("Account created!");
    })
    .catch(err => alert(err.message));
}

function login() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, pass)
    .then(res => {
      localStorage.setItem("uid", res.user.uid);
      window.location.href = "home.html";
    })
    .catch(err => alert(err.message));
}
