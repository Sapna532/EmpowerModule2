let myBooks = [];
const BOOK_IMAGE_URL = "https://m.media-amazon.com/images/I/71ZB18P3inL._SY522_.jpg";
const form = document.getElementById('addBookForm');
const booksDisplayGrid = document.getElementById('booksDisplayGrid');
const filterSelect = document.getElementById('filterCategory');
const sortByATitleBtn = document.getElementById('sortByATitle');
const sortByZTitleBtn = document.getElementById('sortByZTitle');
function renderBooks(booksToDisplay) {
    booksDisplayGrid.innerHTML = '';
    if (booksToDisplay.length === 0) {
        booksDisplayGrid.innerHTML = '<p style="grid-column: 1 / -1; text-align: center;">No books found in this category.</p>';
        return;
    }

    booksToDisplay.forEach(book => {
        const card = document.createElement('div');
        card.className = 'book-card';
        card.setAttribute('data-id', book.id); 
        card.innerHTML = `
            <img src="${BOOK_IMAGE_URL}" alt="Book Cover">
            <p><strong>${book.title}</strong></p>
            <p>Author: ${book.author}</p>
            <p>Category: ${book.category}</p>
            <button class="delete-btn" data-book-id="${book.id}">Delete</button>
        `;
        booksDisplayGrid.appendChild(card);
    });
}
form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const title = document.getElementById('bookTitle').value;
    const author = document.getElementById('bookAuthor').value;
    const category = document.getElementById('bookCategory').value;
    const newBook = {
        id: Date.now(), 
        title: title,
        author: author,
        category: category,
        imageUrl: BOOK_IMAGE_URL
    };
    myBooks.push(newBook);
    applyFilterAndSort();
    form.reset();
});
booksDisplayGrid.addEventListener('click', function(event) {
    const target = event.target;
    if (target.classList.contains('delete-btn')) {
        const bookId = parseInt(target.getAttribute('data-book-id'));
        myBooks = myBooks.filter(book => book.id !== bookId);
        applyFilterAndSort();
    }
});

function applyFilterAndSort() {
    let booksToDisplay = [...myBooks]; 
    const selectedCategory = filterSelect.value;
    if (selectedCategory !== 'All') {
        booksToDisplay = booksToDisplay.filter(book => book.category === selectedCategory);
    } 
    renderBooks(booksToDisplay);
}

sortByATitleBtn.addEventListener('click', () => {
    myBooks.sort((a, b) => a.title.localeCompare(b.title));
    applyFilterAndSort();
});

sortByZTitleBtn.addEventListener('click', () => {
    myBooks.sort((a, b) => b.title.localeCompare(a.title));
    applyFilterAndSort();
});

filterSelect.addEventListener('change', applyFilterAndSort);
myBooks.push({ id: 1600000000001, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', category: 'Fiction', imageUrl: BOOK_IMAGE_URL });
myBooks.push({ id: 1600000000002, title: 'Learn JavaScript', author: 'Tech Guru', category: 'Technical', imageUrl: BOOK_IMAGE_URL });
myBooks.push({ id: 1600000000003, title: 'Funny Jokes Book', author: 'Anonymous', category: 'Comedy', imageUrl: BOOK_IMAGE_URL });
document.addEventListener('DOMContentLoaded', applyFilterAndSort);