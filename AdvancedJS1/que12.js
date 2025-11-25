function processStudents(students) {
  const filtered = students.filter(s => s.marks > 80);
  const sorted = filtered.sort((a, b) => b.marks - a.marks);
  const names = sorted.map(s => s.name);
  return names;
}
