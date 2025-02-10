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

export const getBookbyId = async (bookId) => {
    try { 
        const book = await db.collection(booksCollection).findOne({id: bookId});
        console.log("The book is in server");
        return book;
    } 
    catch (error) { 
        console.error('Error al obtener un libro:', error);
        res.status(500).json({ error: 'Hubo un problema al obtener un libro' }); 
    } 
};

export const getBooksbyId = async (booksId) => {
    try { 
        const book = await db.collection(booksCollection).find({id: booksId});  /////
        console.log("The book is in server");
        return book;
    } 
    catch (error) { 
        console.error('Error al obtener un libro:', error);
        res.status(500).json({ error: 'Hubo un problema al obtener un libro' }); 
    } 
};

export const getAllBooks = async () => {
    try { 
        const books = await db.collection(booksCollection).find().toArray();
        console.log("The books are in server");
        return books;
    } 
    catch (error) { 
        console.error('Error al obtener un libro:', error);
        res.status(500).json({ error: 'Hubo un problema al obtener un libro' }); 
    } 
};

export const getListbyId = async (listId) => {
    try { 
        const list = await db.collection(listsCollection).findOne({id: listId});
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
        const lists = await db.collection(listsCollection).find().toArray();
        console.log("The lists are in server");
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

export const modifyBook = async (id, book) => {
    try {
        const newBook = {
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
        }
        return await booksCollection.updateOne(id, newBook);
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
        const books = await db.collection(booksCollection).find({toread: true}).toArray();;
        console.log("The book is in server");
        return books;
    } 
    catch (error) { 
        console.error('Error al obtener un libro:', error);
        res.status(500).json({ error: 'Hubo un problema al obtener un libro' }); 
    } 
};

export const modifyToRead = async (book) => {
    try {
        const newBook = {
            "toread": !book.toread
        }
        return await booksCollection.updateOne(book, newBook);    
    }
    catch (error) { 
        console.error('Error al crear una lista:', error);
        res.status(500).json({ error: 'Hubo un problema al crear una lista' }); 
    } 
}
