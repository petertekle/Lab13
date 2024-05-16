
const express = require('express');
const booksController = require('../controllers/booksController');

const router = express.Router();

router.get('/books', booksController.getAll);
router.get('/books/:id', booksController.getById);
router.post('/books', booksController.createBook);
router.put('/books/:id', booksController.updateBook);
router.delete('/books/:id', booksController.deleteById);

module.exports = router;
