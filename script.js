const myLibrary = []

function Book(title, author, pages, readStatus){
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
    this.info = function(){
        if (this.readStatus === true) {
            return(`The ${this.title} by ${this.author} is ${this.pages} pages long; has been read`);
        } else {
            return(`The ${this.title} by ${this.author} is ${this.pages} pages long; has not been read yet`);
        }
    };
};

function addBookToLibrary() {
    //to build
}

const addBookButton = document.querySelector('#addBookButton');
const addBookForm = document.getElementById('addBookForm');
const testPrint = document.querySelector('.testPrint'); 

addBookButton.addEventListener("click", () => console.log("Button clicked"));
addBookForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    testPrint.textContent = `Title entered: ${title} Author entered: ${author} Pages entered: ${pages} `;
});

