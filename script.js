const myLibrary = []

//Object constructor
function Book(title, author, pages, readStatus){
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
     
};
Book.prototype.info = function() {
    if (this.readStatus === true) {
        return(`The ${this.title} by ${this.author} is ${this.pages} pages long; has been read`);
    } else {
        return(`The ${this.title} by ${this.author} is ${this.pages} pages long; has not been read yet`);
    }
};


function addBookToLibrary() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const readStatus = document.getElementById('readStatus').checked;

    const newBook = new Book(title, author, pages, readStatus);
    myLibrary.push(newBook);
    console.table(myLibrary);
    displayBooks();
};

function displayBooks() {
    bookList.textContent = '';

    myLibrary.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');

        // Create <p> elements for each book attribute
        const titlePara = document.createElement('p');
        titlePara.classList.add('bookAttributes');
        titlePara.textContent = `Title: ${book.title}`;

        const authorPara = document.createElement('p');
        authorPara.classList.add('bookAttributes');
        authorPara.textContent = `Author: ${book.author}`;

        const pagesPara = document.createElement('p');
        pagesPara.classList.add('bookAttributes');
        pagesPara.textContent = `Pages: ${book.pages}`;

        const readStatusPara = document.createElement('p');
        readStatusPara.classList.add('bookAttributes');
        readStatusPara.textContent = `${book.readStatus ? 'Read' : 'Not read yet'}`;
        book.readStatus ? readStatusPara.classList.add('bookRead') : readStatusPara.classList.add('bookNotRead')
        

        // Append <p> elements to the bookDiv
        bookDiv.appendChild(titlePara);
        bookDiv.appendChild(authorPara);
        bookDiv.appendChild(pagesPara);
        bookDiv.appendChild(readStatusPara);

        // Append the bookDiv to the bookList
        bookList.appendChild(bookDiv);
    });
}

//DOM elements

const addBookButton = document.querySelector('#addBookButton');
const addBookForm = document.getElementById('addBookForm');
const testPrint = document.querySelector('.testPrint'); 
const bookList = document.getElementById('bookList');

addBookButton.addEventListener("click", () => {
    addBookForm.classList.toggle('hidden')
    addBookForm.reset()
});

addBookForm.addEventListener('submit', (event) => {
    event.preventDefault();
    addBookToLibrary();
    addBookForm.classList.toggle('hidden')
});


