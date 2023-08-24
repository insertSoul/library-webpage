const myLibrary = [{title: 'test', author: 'test1', pages: '123', readStatus: false, bookId: 0}, 
    {title: 'test2', author: 'test3', pages: '456', readStatus: true, bookId: 1}  ]
const bookList = document.getElementById('bookList');

displayBooks();

//Object constructor
function Book(title, author, pages, readStatus, bookId){
    this.bookId = bookId
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

let bookId = 1;
function addBookToLibrary() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const readStatus = document.getElementById('readStatus').checked;
    bookId ++;

    const newBook = new Book(title, author, pages, readStatus, bookId);
    console.log(newBook);
    myLibrary.push(newBook);
    console.table(myLibrary);
    displayBooks();
};
function clearBook (){
    bookList.textContent = '';


}

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
        readStatusButton.classList.add('bookAttributes', 'button', 'readButton');

        readStatusButton.textContent = `${book.readStatus ? 'Read' : 'Not read yet'}`;
        //adds class based on if book is read
        book.readStatus ? readStatusButton.classList.add('bookRead') : readStatusButton.classList.add('bookNotRead')

        //set an id on the button div
        readStatusButton.setAttribute('data-book-id', book.bookId);

        // Setting up click event listener
        readStatusButton.addEventListener('click', (event) => {
            const clickedBookId = event.target.getAttribute('data-book-id');
            toggleReadStatus(clickedBookId); 
            displayBooks();
        });




        

        // Append <p>  and button elements to the bookDiv
        bookDiv.appendChild(titlePara);
        bookDiv.appendChild(authorPara);
        bookDiv.appendChild(pagesPara);
        bookDiv.appendChild(readStatusButton);

        // Append the bookDiv to the bookList
        bookList.appendChild(bookDiv);
    });
}

function toggleReadStatus(bookIndex){
    let currentBook = myLibrary[bookIndex];
    if (currentBook.readStatus == false ){
        currentBook.readStatus = true;
    } else {
        currentBook.readStatus = false;
    }
    console.table(myLibrary)

}

//DOM elements

const addBookButton = document.querySelector('#addBookButton');
const addBookForm = document.getElementById('addBookForm');
const readButton = document.querySelectorAll('.readButton');


addBookButton.addEventListener("click", () => {
    addBookForm.classList.toggle('hidden')
    addBookForm.reset()
});

addBookForm.addEventListener('submit', (event) => {
    event.preventDefault();
    addBookToLibrary();
    addBookForm.classList.toggle('hidden')
});

