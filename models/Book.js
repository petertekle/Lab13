let books = [
{id: 1, title: 'Abidudo Tblwo', ISBN: 789345, author: 'Beyene Haile'},
{id: 2, title: 'Dukuan Tberh', ISBN: 342289, author: 'Beyene Haile'},
{id: 3, title: 'The Fountainhead', ISBN: 251678, author: 'Ayn Rand'},
{id: 4, title: 'Atlas Shrugged', ISBN: 58034, author: 'Ayn Rand'}
];

let idCounter = 5;

module.exports = class Book {

    constructor(id, title, ISBN, author) {
        this.id = id;
        this.title = title;
        this.ISBN = ISBN;
        this.author = author;
    }

    static getAll() {
        return books;
    }

    static getBookById(id){
        const book = books.find(b => b.id === id);
        if (book){
            return book;
        } else {
            throw new Error('No book found with Id: ${id}');
        }

    }

    Save(){
        this.id = idCounter++;
        books.push(this);
        return this;

    }

    static deleteById(id){
        const index = books.findIndex(b => b.id === id);
        if(index > -1) {          
            const temp = books[index];
            books.splice(index, 1);
            return temp;

        }else {
            throw new Error('No book found with Id: ${id}');
        }
    }

    update(){
        const index = books.findIndex(b => b.id === id);
        if(index > -1){             
            books[index] = this;           
        }else {
            throw new Error('No product found with Id: ${this.id}');
        }
    }

};

// new Book ().Save()


