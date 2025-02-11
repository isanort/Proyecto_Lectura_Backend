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
const mongoUrl = 'mongodb://localhost:27017';
const dbName = 'MY_BOOKS_DB';
let database;
let booksCollection;
let listsCollection;

MongoClient.connect(mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(client => {
        console.log('Conectado a MongoDB');
        database = client.db(dbName);
        booksCollection = database.collection('BOOKS');
        listsCollection = database.collection('LISTS'); // Asignar la base de datos
        //app.listen(5000, () => {
            //console.log('server is running on port 5000');
            //});
        })
    .catch(err => {
        console.error('Error al conectar a MongoDB:', err);
        });


export const getBookbyId = async (bookId) => {
    try { 
        const options = { 
            sort: {"title": -1},
            projection: {_id: 0, id: 1, title: 1, author: 1 }
        }
        const filter = {id: bookId};
        const book = await booksCollection.findOne(filter, options);
        console.log("The book is in the server");
        console.log(book);
        console.log(bookId);
        console.log(book);
        return book;
    } 
    catch (error) { 
        console.error('Error al obtener un libro:', error);
        res.status(500).json({ error: 'Hubo un problema al obtener un libro' }); 
    } 
};

export const getBooksbyId = async (booksId) => {
new Promise((resolve, reject) => {
        const book = booksCollection.find({id: booksId}) 
        console.log("The book is in server")
    .then (book=> resolve (book))
    .catch(errorFind => reject(errorFind));
});}

export const deleteBookbyId = async (bookId) => {
    try {         ///projection not working
        const book = await booksCollection.deleteOne({id: bookId});
        console.log("The book is in server");
        return book;
    } 
    catch (error) { 
        console.error('Error al obtener un libro:', error);
        res.status(500).json({ error: 'Hubo un problema al obtener un libro' }); 
    } 
};

export const deleteListbyId = async (listId) => {
    try {         ///projection not working
        const list = await listsCollection.deleteOne({id: listId});
        console.log("The list is in server");
        return list;
    } 
    catch (error) { 
        console.error('Error al obtener un libro:', error);
        res.status(500).json({ error: 'Hubo un problema al obtener un libro' }); 
    } 
};

export const getAllBooks = async () => {
    try { 
        const options = { sort: {"title": -1},projection: {title: 1, author: 1, id:1, _id:0, toread: 1 }};
        const books = await booksCollection.find({}, options).toArray();
        console.log("The books are in servers");
        return books;
    } 
    catch (error) { 
        console.error('Error al obtener un libro:', error);
        res.status(500).json({ error: 'Hubo un problema al obtener un libro' }); 
    } 
};

export const getListbyId = async (listId) => {
    try { 
        const projection = { name: 1, description: 1 };         ///projection not working
        const list = await listsCollection.findOne({id: listId}, projection);
        console.log("The list is in server");
        return list;
    } 
    catch (error) { 
        console.error('Error al obtener un libro:', error);
        res.status(500).json({ error: 'Hubo un problema al obtener un libro' }); 
    } 
};

export const getAllLists = async () => {
    try { 
        const lists = await listsCollection.find().toArray();
        console.log("The lists are in server");
        console.log(lists);
        return lists;
        
    } 
    catch (error) { 
        console.error('Error al obtener un libro:', error);
        res.status(500).json({ error: 'Hubo un problema al obtener un libro' }); 
    } 
};

export const createBook = async (book) => {
    try {
        const newBook = {
            "id": uuidv4(),
            "bookcover": book.bookcover,
            "title": book.title,
            "author": book.author,
            "genre": book.genre,
            "format": book.format,
            "language": book.language,
            "toread": book.toread,
            "fav": book.fav,
            "owned": book.owned,
            "summary": book.summary,
            "pages": book.pages,
            "published": book.published,
            "dateread": book.dateread,
            "customlists": [],
            "createdAt": new Date(),
            "updatedAt": new Date(),
        }
        return await booksCollection.insertOne(newBook);
    }
    catch (error) { 
        console.error('Error al crear un libro:', error);
        res.status(500).json({ error: 'Hubo un problema al crear un libro' }); 
    } 
}

export const createList = async (list) => {
    try {
        const newList = {
            "id": uuidv4(),
            "name": list.name,
            "description": list.description,
        }
        return await listsCollection.insertOne(newList);
    }
    catch (error) { 
        console.error('Error al crear una lista:', error);
        res.status(500).json({ error: 'Hubo un problema al crear una lista' }); 
    } 
}

export const modifyBook = async (bookId, book) => {
    try {
        const newBook = {
            $set: {
            "bookcover": book.bookcover,
            "title": book.title,
            "author": book.author,
            "genre": book.genre,
            "format": book.format,
            "language": book.language,
            "toread": book.toread,
            "fav": book.fav,
            "owned": book.owned,
            "summary": book.summary,
            "pages": book.pages,
            "published": book.published,
            "dateread": book.dateread,
            "customlists": [],
            "updatedAt": new Date(),
        }}
        return await booksCollection.updateOne({id: bookId}, newBook);
    }
    catch (error) { 
        console.error('Error al crear un libro:', error);
        res.status(500).json({ error: 'Hubo un problema al crear un libro' }); 
    } 
}

export const modifyKey = async (bookId, book, bookKey) => {
    try {
        const key = bookKey;
    return await booksCollection.updateOne({id: bookId}, {$set: {key: book.key}});
    }
    catch (error) { 
        console.error('Error al crear un libro:', error);
        res.status(500).json({ error: 'Hubo un problema al crear un libro' }); 
    }
}

export const modifyList = async (list) => {
    try {
        const newList = {
            "name": list.name,
            "description": list.description,
        }
        return await listsCollection.updateOne(id, newList);
    }
    catch (error) { 
        console.error('Error al crear una lista:', error);
        res.status(500).json({ error: 'Hubo un problema al crear una lista' }); 
    } 
}


/////////////////////////////////////

export const getToRead = async () => {
    try { 
        const toReadbooks = await booksCollection.find({toread: true}).toArray();;
        console.log("The book is in server");
        console.log(toReadbooks);
        return toReadbooks;
        
    } 
    catch (error) { 
        console.error('Error al obtener un libro:', error);
        res.status(500).json({ error: 'Hubo un problema al obtener un libro' }); 
    } 
};

export const modifyToRead = async (bookId) => {
    try {
        const projection = { title: 1, toread: 1 };
        const book = await booksCollection.findOne({id: bookId}, projection);
        console.log("this way");
        console.log(book);
        book = {
            $set: {
                toread: {$not: book.toread}
        }};
        console.log(book);
        console.log(bookId);
        return await booksCollection.updateOne({id: bookId}, book);    
    }
    catch (error) { 
        console.error('Error al crear una lista:', error);
        res.status(500).json({ error: 'Hubo un problema al crear una lista' }); 
    } 
}


// to do: fav, owned



/////////////////////////////////////

export const getBooksbyGenre = async (booksGenre) => {
    try { 
        const books = await booksCollection.find({genre: booksGenre}).toArray();
        console.log("The book is in server");
        console.log(booksGenre);
        return books;
    } 
    catch (error) { 
        console.error('Error al obtener un libro:', error);
        res.status(500).json({ error: 'Hubo un problema al obtener un libro' }); 
    } 
};

export const getBooksbyFormat = async (booksFormat) => {
    try { 
        const books = await booksCollection.find({format: booksFormat}).toArray();
        console.log("The format book is in server");
        console.log(booksFormat);
        return books;
        
    } 
    catch (error) { 
        console.error('Error al obtener un libro:', error);
        res.status(500).json({ error: 'Hubo un problema al obtener un libro' }); 
    } 
};

export const getBooksbyLanguage = async (booksLanguage) => {
    try { 
        const books = await booksCollection.find({language: booksLanguage}).toArray();
        console.log("The Language book is in server");
        console.log(booksLanguage);
        return books;
        
    } 
    catch (error) { 
        console.error('Error al obtener un libro:', error);
        res.status(500).json({ error: 'Hubo un problema al obtener un libro' }); 
    } 
};

export const pluck = (arr, ...keys) =>
    keys.length > 1 ?
        arr.map(i => keys.map(k => i[k])) :
        arr.map(i => i[keys[0]]);