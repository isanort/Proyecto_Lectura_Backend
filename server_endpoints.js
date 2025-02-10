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
const booksCollection = db.collection('BOOKS');
const listsCollection = db.collection('LISTS');

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



import { getBookbyId } from './server_functions';

import { getBooksbyId } from './server_functions';

import { getAllBooks } from './server_functions';

import { getListbyId } from './server_functions';

import { getAllLists } from './server_functions';

import { createBook } from './server_functions';

import { createList } from './server_functions';

import { modifyBook } from './server_functions';

import { modifyList } from './server_functions';

import { getToRead } from './server_functions';

import { modifyToRead } from './server_functions';


// API  

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Get a book
app.get('/books/id/:id', async (req, res) => { 
        const bookId = req.params.id;
        const book = getBookbyId(bookId);
        res.json(book);
        console.log("The book is in server");
}); 

//Get all books
app.get('/books', async (req, res) => {
        const books = getAllBooks();
        res.json(books);
});

//Create a book
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

//Delete a book
app.delete('/books/:id', async (req, res) => {
    const bookId = req.params.id;
    const book = getBookbyId(bookId);
    await booksCollection.deleteOne(book);
    res.json(books); //mensaje de confirmación
});

/////////////////////////////////////

//Get toread books
app.get('/books/toread', async (req, res) => {
        const toreadBooks = getToRead();
        res.json(toreadBooks);
});

//Modify toread
app.patch('/books/:id/toread', (req, res) => {
        const bookId = req.params.id;
        const book = getBookbyId(bookId);
        const newbook = modifyToRead(bookId, book);
        res.json(newbook);
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


//Get a random book Math.floor ---no funciona
app.get('/books/random', async (req, res) => {
    const toReadBooks =  getAllBooks();
    const toReadbooks = toReadBooks.map(book => {
        book.dateread = null;
        return id
    });
    //random
    const position = Math.floor(Math.random()*(toReadbooks.length +1));
    const book = toReadbooks[position];
    res.json(book);
});


    //Get genre books
app.get('/books/genres/:genre', async (req, res) => {
    try { 
        const bookGenre = req.params.genre;
        const books = await booksCollection.find({genre: bookGenre}).toArray();
        res.json(books);
    } 
    catch (error) { 
        console.error('Error al obtener los libros de un género:', error);
        res.status(500).json({ error: 'Hubo un problema al obtener los libros de un género' }); 
    } 
}); 


//genre list: buscar todos los géneros y mostar el nombre ------
app.get('/books/allgenres/', (req, res) => {
    console.log("hola");
    const listGenres = books.map(book => {
        const genre = book.genre;
        console.log(1, genre);
        return genre
    });
    
    //books.forEach(function(obj){genres.push(obj.genre)})
    console.log(2, listGenres);
    res.json(listGenres);
});


//Get format books
app.get('/books/format/:format', async (req, res) => {
    try { 
        const bookFormat = req.params.genre;
        const books = await booksCollection.find({genre: bookFormat}).toArray();
        res.json(books);
    } 
    catch (error) { 
        console.error('Error al obtener los libros de un formato:', error);
        res.status(500).json({ error: 'Hubo un problema al obtener los libros de un formato'}); 
    } 
});

//Get language books
app.get('/books/language/:language', async (req, res) => {
    try { 
        const bookLanguage = req.params.language;
        const books = await booksCollection.find({language: bookLanguage}).toArray();
        res.json(books);
    } 
    catch (error) { 
        console.error('Error al obtener los libros de un idioma:', error);
        res.status(500).json({ error: 'Hubo un problema al obtener los libros de un idioma'}); 
    } 
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Get a list
app.get('/lists/:id', (req, res) => {
    const listId = req.params.id;
    const list = getBookbyId(listId);
    res.json(list);
});

//Get all lists
app.get('/lists', async (req, res) => {
        const lists = getAllLists();
        res.json(lists);
});

//Create a new list
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

//Delete a list
app.delete('/lists/:id', async (req, res) => {
    const listId = req.params.id;
    const list = getListbyId(listId);
    booksCollection.deleteOne(list);
    res.json(list); //mensaje de confirmación
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