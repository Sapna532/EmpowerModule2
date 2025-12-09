const BASE_URL = "https://timetrack-9fe31-default-rtdb.asia-southeast1.firebasedatabase.app/Timetrack.json";
const uid = localStorage.getItem("uid");

// ADD activity
function addActivity() {
  const date = document.getElementById("dateInput").value;
  const title = document.getElementById("titleInput").value;
  const minutes = Number(document.getElementById("minutesInput").value);
  const category = document.getElementById("categoryInput").value;

  fetch(`${BASE_URL}/users/${uid}/days/${date}/activities.json`, {
    method: "POST",
    body: JSON.stringify({ title, minutes, category })
  })
    .then(res => res.json())
    .then(() => {
      alert("Activity Added!");
      loadActivities();
    });
}

// GET activities
function loadActivities() {
  const date = document.getElementById("dateInput").value;

  fetch(`${BASE_URL}/users/${uid}/days/${date}/activities.json`)
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById("list");
      list.innerHTML = "";

      if (!data) {
        list.innerHTML = "<h3>No data for this day</h3>";
        return;
      }

      Object.keys(data).forEach(id => {
        let a = data[id];

        list.innerHTML += `
        <div class="card">
          <p><b>${a.title}</b></p>
          <p>${a.minutes} min</p>
          <p>${a.category}</p>

          <button onclick="deleteActivity('${id}')">Delete</button>
        </div>`;
      });
    });
}

// DELETE
function deleteActivity(id) {
  const date = document.getElementById("dateInput").value;

  fetch(`${BASE_URL}/users/${uid}/days/${date}/activities/${id}.json`, {
    method: "DELETE"
  })
    .then(() => {
      alert("Deleted!");
      loadActivities();
    });
}

// Go to analyse
function analyse() {
  const date = document.getElementById("dateInput").value;
  localStorage.setItem("selectedDate", date);
  window.location.href = "analyse.html";
}
