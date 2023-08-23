const myLibrary = [{title: 'test', author: 'test1', pages: '123', readStatus: false}, 
    {title: 'test2', author: 'test3', pages: '456', readStatus: true} ]
const bookList = document.getElementById('bookList');

displayBooks();

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
    console.log(newBook);
    myLibrary.push(newBook);
    console.table(myLibrary);
    displayBooks();
};

function displayBooks() {
    bookList.textContent = '';

    myLibrary.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');

        // Create <p> and button elements for each book attribute
        const titlePara = document.createElement('p');
        titlePara.classList.add('bookAttributes');
        titlePara.textContent = `Title: ${book.title}`;

        const authorPara = document.createElement('p');
        authorPara.classList.add('bookAttributes');
        authorPara.textContent = `Author: ${book.author}`;

        const pagesPara = document.createElement('p');
        pagesPara.classList.add('bookAttributes');
        pagesPara.textContent = `Pages: ${book.pages}`;

        const readStatusButton = document.createElement('button')
        readStatusButton.classList.add('bookAttributes', 'button');

        readStatusButton.textContent = `${book.readStatus ? 'Read' : 'Not read yet'}`;
        //adds class based on if book is read
        book.readStatus ? readStatusButton.classList.add('bookRead') : readStatusButton.classList.add('bookNotRead')

        

        // Append <p>  and button elements to the bookDiv
        bookDiv.appendChild(titlePara);
        bookDiv.appendChild(authorPara);
        bookDiv.appendChild(pagesPara);
        bookDiv.appendChild(readStatusButton);

        // Append the bookDiv to the bookList
        bookList.appendChild(bookDiv);
    });
}

//DOM elements

const addBookButton = document.querySelector('#addBookButton');
const addBookForm = document.getElementById('addBookForm');
const testPrint = document.querySelector('.testPrint'); 

addBookButton.addEventListener("click", () => {
    addBookForm.classList.toggle('hidden')
    addBookForm.reset()
});

addBookForm.addEventListener('submit', (event) => {
    event.preventDefault();
    addBookToLibrary();
    addBookForm.classList.toggle('hidden')
});


