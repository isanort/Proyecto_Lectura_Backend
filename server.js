import express from 'express';
import morgan from 'morgan';
import {v4 as uuidv4} from 'uuid';
import cors from 'cors';

const app = express();
uuidv4();

let books = [
    { id: '1', bookcover: 'img', title: 'Matrix', author:'Autor', rating: 3, genre: "science-fiction", format: 'harcover', toread: false, fav: true, owned: true, limitededition: false },
    { id: '2', bookcover: 'img', title: 'Libro2', author:'Autores', rating: 5, genre: "narrative", format: 'ebook', toread: true, fav: false, owned: true, limitededition: true },
];

// add pagecount, date read, endspoint for random book
// two collections: mybooks (quick access). allthebooks

let lists = [
    {
        name: "Para dormir",
        description: "Por la noche",
        id: "1"
    },
    {
        name: "Para despertar",
        description: "Por la mañana",
        id: "2"
    }
]

app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());

// API  

//Get all books
app.get('/books', (req, res) => {
    res.json(books);
});

//Get toread books
app.get('/books/toread', (req, res) => {
    const toreadBooks = books.filter((book) => book.toread === true);
    res.json(toreadBooks);
});

//Modify toread    ID DONDE
app.patch('/books/:id/toread', (req, res) => {
    const bookId = req.params.id;
    const book = books.find((book) => book.id == bookId);
    const toread = !book.toread;
    let bookUpt = {
        ...book,
        toread
    };
    books[books.indexOf(book)] = bookUpt;
    res.status(200).send('OK');
});

//Get fav books
app.get('/books/fav', (req, res) => {
    const favBooks = books.filter((book) => book.fav === true);
    res.json(favBooks);
});

//Modify fav
app.patch('/books/:id/fav', (req, res) => {
    const bookId = req.params.id;
    const book = books.find((book) => book.id == bookId);
    const fav = !book.fav;
    let bookUpt = {
        ...book,
        fav
    };
    books[books.indexOf(book)] = bookUpt;
    res.status(200).send('OK');
});

//Get owned books
app.get('/books/owned', (req, res) => {
    const ownBooks = books.filter((book) => book.owned === true);
    res.json(ownBooks);
});

//Modify owned
app.patch('/books/:id/owned', (req, res) => {
    const bookId = req.params.id;
    const book = books.find((book) => book.id == bookId);
    const owned = !book.owned;
    let bookUpt = {
        ...book,
        owned
    };
    books[books.indexOf(book)] = bookUpt;
    res.status(200).send('OK');
});

//Get limited edition books
app.get('/books/limitededition', (req, res) => {
    const limBooks = books.filter((book) => book.limitededition === true);
    res.json(limBooks);
});

//Modify limited edition
app.patch('/books/:id/limitededition', (req, res) => {
    const bookId = req.params.id;
    const book = books.find((book) => book.id == bookId);
    const limitededition = !book.limitededition;
    let bookUpt = {
        ...book,
        limitededition
    };
    books[books.indexOf(book)] = bookUpt;
    res.status(200).send('OK');
});

//Get a book
app.get('/books/:id', (req, res) => {
    const bookId = req.params.id;
    const book = books.find((book) => book.id == bookId);
    res.json(book);
});

//Create a book
app.post('/books/', (req, res) => {
    const postBook = req.body;
    postBook.id = uuidv4();
    postBook.createdAt = new Date();
    postBook.updatedAt = new Date();
    books.push(postBook);
    res.json(postBook);
});

//Delete a book
app.delete('/books/:id', (req, res) => {
    const bookId = req.params.id;
    const book = books.find((book) => book.id == bookId);
    const numb = books.indexOf(book);
    books.splice(numb, 1);
    res.json(books); //mensaje de confirmación
});


//Modify a book
app.patch('/books/:id', (req, res) => {
    const bookId = req.params.id;
    const book = books.find((book) => book.id == bookId);
    const updatedAt = new Date();

    let bookUpt = {
        ...book,
        updatedAt
    };

    if (req.body.title) {
        const title = req.body.title;
        bookUpt = {
            ...bookUpt,
            title
        }
    }

    if (req.body.author) {
        const author = req.body.author;
        bookUpt = {
            ...bookUpt,
            author
        }
    }

    if (req.body.genre) {
        const genre = req.body.genre;
        bookUpt = {
            ...bookUpt,
            genre
        }
    }

    if (req.body.format) {
        const format = req.body.genre;
        bookUpt = {
            ...bookUpt,
            format
        }
    }

    if (req.body.rating) {
        const rating = req.body.rating;
        bookUpt = {
            ...bookUpt,
            rating
        }
    }

    books[books.indexOf(book)] = bookUpt;
    res.json(bookUpt);
    console.log("Antes");
})

//Get genre books
app.get('/books/genres/:genre', (req, res) => {
    const genreBooks = books.filter((book) => book.genre === req.params.genre);
    res.json(genreBooks);
});

//genre list: buscar todos los géneros y mostar el nombre ------

//Get format books
app.get('/books/format/:format', (req, res) => {
    const formatBooks = books.filter((book) => book.format === req.params.format);
    res.json(formatBooks);
});

//Create a new list
app.post('/lists', (req, res) => {
    const newList = req.body;
    newList.id = uuidv4();
    lists.push(newList);
    res.json(newList);
});

//Modify a list - no funciona
app.patch('/lists/:id', (req, res) => {
    const listId = req.params.id;
    const list = lists.find((list) => list.id == listId);

    let listUpt = {
        ...list
    };

    if (req.body.name) {
        const name = req.body.name;
        listUpt = {
            ...listUpt,
            name
        }
    }

    if (req.body.description) {
        const description = req.body.description;
        listUpt = {
            ...listUpt,
            description
        }
    }

    lists[lists.indexOf(list)] = listUpt;
    res.json(listUpt);;
})

//Get all lists
app.get('/lists', (req, res) => {
    res.json(lists);
});

//Delete a list
app.delete('/lists/:id', (req, res) => {
    const listId = req.params.id;
    const list = lists.find((list) => list.id == listId);
    const numb = lists.indexOf(list);
    lists.splice(numb, 1);
    res.json(lists); //mensaje de confirmación
});

//patch para listas del usuario- añadir libro a lista

app.listen(3000, () => {
    console.log('Ready on port 3000!');
});