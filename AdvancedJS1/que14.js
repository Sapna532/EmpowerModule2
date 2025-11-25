const employees = [
  { name: "Alice", tasksCompleted: 8, rating: 7.1 },
  { name: "Bob", tasksCompleted: 4, rating: 3.5 },
  { name: "Charlie", tasksCompleted: 6, rating: 9.0 },
  { name: "David", tasksCompleted: 10, rating: 9.8 },
  { name: "Eve", tasksCompleted: 2, rating: 3.8 }
];

// 1.
const mappedEmployees = employees.map(emp => {
  let performance = "";

  if (emp.tasksCompleted > 5 && emp.rating > 7.5) {
    performance = "Excellent";
  } else if (emp.tasksCompleted > 5) {
    performance = "Good";
  } else {
    performance = "Needs Improvement";
  }

  return { name: emp.name, performance };
});

// 2. 
const filtered = mappedEmployees.filter(emp => emp.performance !== "Needs Improvement");

// 3. 
const sorted = filtered.sort((a, b) => {
  const order = { "Excellent": 1, "Good": 2 };
  return order[a.performance] - order[b.performance];
});

// 4. 
console.log(sorted);
