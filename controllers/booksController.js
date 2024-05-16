// const Book = require('../models/Book');
const Book = require('../models/Book');

exports.getAll = (req, res) => {
    res.status(200).json(Book.getAll());
};

exports.getById = (req, res) => {
    res.status(200).json(Book.getBookById(parseInt(req.params.id))); 
};

exports.createBook = (req, res) => {
    const book = new Book(
        books.length + 1,
        req.body.title,
        req.body.ISBN,
        req.body.publishedDate,
        req.body.author
    );
    books.push(book);
    res.status(201).json(book);
};

exports.updateBook = (req, res) => {
    const book = books.find(book => book.id === parseInt(req.params.id));
    if (!book) return res.status(404).send('Book not found');
    book.title = req.body.title;
    book.ISBN = req.body.ISBN;
    book.publishedDate = req.body.publishedDate;
    book.author = req.body.author;
    res.json(book);
};

exports.deleteById = (req, res) => {
    Book.deleteById(req.params.id);
    res.sendStatus(204);
};
