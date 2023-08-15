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

