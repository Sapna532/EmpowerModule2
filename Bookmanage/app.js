// Load books.json
let books = [];

async function loadBooks() {
    try {
        const response = await fetch("../data/books.json");
        books = await response.json();
        renderBooks();
    } catch (error) {
        console.log("Error loading JSON:", error);
    }
}

loadBooks();

// Render books
function renderBooks() {
    const container = document.getElementById("booksContainer");
    container.innerHTML = "";

    books.forEach((book) => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${book.coverImageURL}">
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>₹${book.price}</p>
            <button onclick="updateAuthor(${book.id})">Update Author</button>
            <button onclick="deleteBook(${book.id})">Delete</button>
        `;

        container.appendChild(card);
    });
}

// Add book
document.getElementById("bookForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const newBook = {
        id: Date.now(),
        title: title.value,
        author: author.value,
        price: price.value,
        coverImageURL: image.value
    };

    books.push(newBook);
    renderBooks();
    e.target.reset();
});

// Update Author
function updateAuthor(id) {
    const newAuthor = prompt("Enter new author name:");
    if (!newAuthor) return;

    books = books.map((b) => b.id === id ? { ...b, author: newAuthor } : b);
    renderBooks();
}

// Delete
function deleteBook(id) {
    books = books.filter((b) => b.id !== id);
    renderBooks();
}
