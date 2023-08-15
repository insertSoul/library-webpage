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
    bookList.innerHTML = '';

    myLibrary.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');

        const bookInfo = document.createElement('p')
        bookInfo.textContent = book.info();

        bookDiv.appendChild(bookInfo);
        bookList.appendChild(bookDiv)
    })

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


