const BASE_URL = "https://timetrack-9fe31-default-rtdb.asia-southeast1.firebasedatabase.app/Timetrack.json";
const uid = localStorage.getItem("uid");
const date = localStorage.getItem("selectedDate");

// GET data for chart
fetch(`${BASE_URL}/users/${uid}/days/${date}/activities.json`)
  .then(res => res.json())
  .then(data => {
    if (!data) {
      document.body.innerHTML = "<h2>No data available</h2>";
      return;
    }

    let labels = [];
    let values = [];

    Object.keys(data).forEach(id => {
      labels.push(data[id].title);
      values.push(data[id].minutes);
    });

    new Chart(document.getElementById("pieChart"), {
      type: "pie",
      data: {
        labels,
        datasets: [{
          data: values
        }]
      }
    });
  });
