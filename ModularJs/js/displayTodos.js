export function displayTodos(data) {
    let html = "";

    data.forEach(todo => {
        html += `
        <div style="border:1px solid #ccc; padding:10px; margin:10px;">
            <p><b>${todo.title}</b></p>
            <p>Status: ${todo.completed ? "✔ Completed" : "❌ Pending"}</p>
        </div>`;
    });

    return html;
}
