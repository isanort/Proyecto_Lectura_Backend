// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
import {v4 as uuidv4} from 'uuid';
uuidv4();

// The current database to use.
const booksDataBase = "MY_BOOKS_DB";
use(booksDataBase);
const myCollection = "BOOKS";

// Find a document in a collection.
//db.getCollection("BOOKS").findOne({});
const  dateRead = new Date();
dateRead.getDay
dateRead.getMonth

db.myCollection.insertOne(
    {
    "id": uuidv4(),
    "bookcover": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed.jpg",
    "title": "Matrix",
    "author": "Autor",
    "genre": "science-fiction",
    "format": "harcover",
    "toread": true,
    "fav": false,
    "owned": true,
    "limitededition": false,
    "summary": "summary of the book",
    "pages": 100,
    "published": 2010,
    "dateread": dat,
    "customlists": [
        {
        "id": 10
        }
    ]
});

db.getCollection(myCollection).find();
