
const express = require('express');
const bodyParser = require('body-parser');
const booksRouter = require('./routes/booksRouter');

const app = express();
const PORT = process.env.PORT || 3003;

app.use(bodyParser.json());
app.use(booksRouter);

app.listen(3003, () => console.log(`Listen on 3003`));
