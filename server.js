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
const booksCollection = 'BOOKS';

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

// API  

//Get a book
app.get('/books/id/:id', async (req, res) => {
    try { 
        const bookId = req.params.id;
        const book = await db.collection(booksCollection).findOne({id: bookId});
        res.json(book);
        console.log("The book is in server");
    } 
    catch (error) { 
        console.error('Error al obtener un libro:', error);
        res.status(500).json({ error: 'Hubo un problema al obtener un libro' }); 
    } 
}); 

//Get all books
app.get('/books', async (req, res) => {
    try {
        const books = await booksCollection.find().toArray();
        res.json(books);
    }
    catch (error) { 
        console.error('Error al obtener todos los libros:', error);
        res.status(500).json({ error: 'Hubo un problema al obtener un libro' }); 
    } 
});

//Get toread books
app.get('/books/toread', (req, res) => {
    const toreadBooks = books.filter((book) => book.toread === true);
    res.json(toreadBooks);
});

//Modify toread    ID después de elemento
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


//Get a random book Math.floor
app.get('/books/random', (req, res) => {
    console.log("holaaa");
    //array todos libros
    const toReadBooks = books.filter((book) => book.toread === true);
    //obtener id
    const idtoReadbooks = toReadBooks.map(book => {
        const id = book.id;
        return id
    });
    //random
    const bookId = Math.floor(Math.random()*(idtoReadbooks.length +1));
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
    console.log("adiós");
    const genreBooks = books.filter((book) => book.genre === req.params.genre);
    res.json(genreBooks);
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

//Get a list
app.get('/lists/:id', (req, res) => {
    const listId = req.params.id;
    const list = lists.find((list) => list.id == listId);
    res.json(list);
});

//Modify a list - no funciona
app.patch('/lists/:id/modify', (req, res) => {
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

    const listnum = lists.indexOf(list);
    lists[listnum] = listUpt;
    console.log(1, listnum);
    console.log(1, lists);
    res.json(listUpt);
})

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
        })

    };
        //newBooks.forEach((book) => { list.booksInList.push(book);
        //const booksInList = newBooks.forEach((book) => {list.booksInList.push(book)


    res.json(list);
});


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



app.listen(3000, () => {
    console.log('Ready on port 3000!');
});