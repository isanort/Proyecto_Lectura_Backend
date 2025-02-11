import express from 'express';
import morgan from 'morgan';
import {v4 as uuidv4} from 'uuid';
import cors from 'cors';
import { MongoClient, ObjectId} from 'mongodb';

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

uuidv4();

// URL de conexión a MongoDB y nombre de la base de datos
const mongoUrl = 'mongodb://localhost:27017';
const dbName = 'MY_BOOKS_DB';
//const booksCollection = collection('BOOKS');
//const listsCollection = collection('LISTS');

// Variable para almacenar la conexión a la base de datos
let db; 

// Conectar a MongoDB

//const ObjectID = require('mongodb').ObjectID;

MongoClient.connect(mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(client => {
        console.log('Conectado a MongoDB');
        db = client.db(dbName); // Asignar la base de datos
        //app.listen(5000, () => {
            //console.log('server is running on port 5000');
            //});
        })
    .catch(err => {
        console.error('Error al conectar a MongoDB:', err);
        });

/*let books = [
    { id: '1', bookcover: 'image', author:'Autor', title: 'Matrix', genre: "science-fiction", format: 'harcover', toread: true, rating: 3, fav: true, owned: true, limitededition: false, summary: 'summary of the book', pages: 100, published: 2010, dateread: Date(2010, 12, 30) ,customlists: [{id:10}],//id de las listas},
    { id: '2', bookcover: 'img', title: 'Libro2', author:'Autores', rating: 5, genre: "narrative", format: 'ebook', toread: true, fav: false, owned: true, limitededition: true },
];

// endspoint for random book. listado de libros para añadir
// two collections: mybooks (quick access). allthebooks

let lists = [
    {name: "Para dormir",description: "Por la noche",id: "10",booksInList: [] },
    {name: "Para despertar",description: "Por la mañana",id: "20",booksInList: [{id:1}]}
]

let genres = ["narrative"];*/


import { getBookbyId } from './server_functions.js';

import { getBooksbyId } from './server_functions.js';

import { getAllBooks } from './server_functions.js';

import { getListbyId } from './server_functions.js';

import { getAllLists } from './server_functions.js';

import { createBook } from './server_functions.js';

import { createList } from './server_functions.js';

import { modifyBook } from './server_functions.js';

import { modifyList } from './server_functions.js';

import { deleteBookbyId } from './server_functions.js';

import { deleteListbyId } from './server_functions.js';

import { getToRead } from './server_functions.js';

import { modifyToRead } from './server_functions.js';

import { getBooksbyGenre } from './server_functions.js';

import { getBooksbyFormat } from './server_functions.js';

import { getBooksbyLanguage } from './server_functions.js';

import { pluck } from './server_functions.js';


// API  

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Get a book
app.get('/books/id/:id', async (req, res) => { 
        const bookId = req.params.id;
        console.log(bookId);
        const thebook = await getBookbyId(bookId);
        res.json(thebook);
        console.log(thebook);
        console.log(bookId);
        console.log("The book is out");
}); 

//Get all books- working
app.get('/books', async (req, res) => {
        console.log("get all books");
        const allbooks = await getAllBooks();
        console.log("get all books");
        res.json(allbooks);
});

//Create a book- working
app.post('/books/', async (req, res) => {
    const body = req.body;
    const newBook = await createBook(body);
    res.json(newBook);
});

//Modify a book
app.patch('/books/:id', async (req, res) => {
    const bookId = req.params.id;
    const body = req.body;
    const updateBook = await modifyBook(bookId, body);
    res.json(updateBook);
});

app.patch('/books/:id', async (req, res) => {
    const bookId = req.params.id;
    const body = req.body;
})

//Delete a book- working
app.delete('/books/delete/:id', async (req, res) => {
    const bookId = req.params.id;
    const books = await deleteBookbyId(bookId);
    res.json(books); //mensaje de confirmación
});

/////////////////////////////////////

//Get toread books- working
app.get('/books/toread', async (req, res) => {
        const toreadBooks = await getToRead();
        res.json(toreadBooks);
});

//Modify toread
app.patch('/books/toread/:id', async (req, res) => {
        const bookId = req.params.id;
        console.log(bookId);
        //const newbook = await modifyToRead(bookId);
        const book = await getBookbyId(bookId);
        console.log(book);
        res.json(book);
}); 

//Get fav books
app.get('/books/fav', async (req, res) => {
    try {
        const favBooks = await booksCollection.find({fav: true}).toArray();
        res.json(favBooks);
    }
    catch (error) { 
        console.error('Error al obtener los libros favoritos:', error);
        res.status(500).json({ error: 'Hubo un problema al obtener los libros favoritos' }); 
    } 
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
app.get('/books/owned', async (req, res) => {
    try {
        const ownedBooks = await booksCollection.find({owned: true}).toArray();
        res.json(ownedBooks);
    }
    catch (error) { 
        console.error('Error al obtener los libros que tienes:', error);
        res.status(500).json({ error: 'Hubo un problema al obtener los libros que tienes' }); 
    } 
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


/////////////////////////////////////

//Get a random book- working
app.get('/books/random', async (req, res) => {
    console.log("random path")
    const toReadBooks =  await getAllBooks();
    const toReadbooks = toReadBooks.map(book => {
        book.dateread = null;
        return book.id
        });
    //random
    const position = Math.floor(Math.random()*(toReadbooks.length +1));
    console.log(position);
    const bookId = toReadbooks[position];
    console.log(bookId);
    const book = await getBookbyId(bookId);
    console.log(book);
    res.json(book);
});


//Get books by genre- working
app.get('/books/genres/:genre', async (req, res) => {
        const bookGenre = req.params.genre;
        const books = await getBooksbyGenre(bookGenre);
        console.log(books);
        res.json(books);
}); 

//genre list: buscar todos los géneros y mostar el nombre ------
app.get('/books/allgenres/', (req, res) => {
    const books = getAllBooks();
    const listGenres = pluck(books, 'genre');
    res.json(listGenres);
});


//Get books by format- working
app.get('/books/format/:format', async (req, res) => {
    const bookFormat = req.params.format;
    const books = await getBooksbyFormat(bookFormat);
    res.json(books);
});

//Get books by language- working
app.get('/books/language/:language', async (req, res) => {
    const bookLanguage = req.params.language;
    const books = await getBooksbyLanguage(bookLanguage);
    res.json(books);
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Get a list
app.get('/lists/:id', async (req, res) => {
    const listId = req.params.id;
    const list = await getListbyId(listId);
    res.json(list);
    console.log("The list is out");
});

//Get all lists
app.get('/lists', async (req, res) => {
        const lists = await getAllLists();
        res.json(lists);
});

//Create a new list- working
app.post('/lists', async (req, res) => {
    const body = req.body;
    const newList = await createList(body);
    res.json(newList);
});

//Modify a list
app.patch('/lists/:id', async (req, res) => {
    const listId = req.params.id;
    const body = req.body;
    const list = getListbyId(listId);
    const updatelist = await modifyList(list, body);
    res.json(updatelist);
});

//Delete a list- working
app.delete('/lists/delete/:id', async (req, res) => {
    const listId = req.params.id;
    const lists = await deleteListbyId(listId);
    res.json(lists); //mensaje de confirmación
});

//patch para listas del usuario- añadir libro a lista
//Add books to a list
app.patch('/lists/:id/addbooks', (req, res) => {
    const listId = req.params.id;
    const list = lists.find((list) => list.id == listId);


    if (req.body) {
        const idBooks = req.body;
        idBooks.forEach((bookId) => { 
            const book = books.find((book) => book.id == bookId);
            list.booksInList.push(book);
            book.lists.push(listId);
        })

    };
        //newBooks.forEach((book) => { list.booksInList.push(book);
        //const booksInList = newBooks.forEach((book) => {list.booksInList.push(book)


    res.json(list);
});




app.listen(3000, () => {
    console.log('Ready on port 3000!');
});