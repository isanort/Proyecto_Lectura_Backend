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
        const filter = {id: (bookId)};  //////num o string
        const book = await booksCollection.findOne(filter);
        console.log("The book is in the server");
        return book;
    } 
    catch (error) { 
        console.error('Error al obtener un libro:', error);
        res.status(500).json({ error: 'Hubo un problema al obtener un libro' }); 
    } 
};

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

export const getAllBooks = async (query) => {
    try { 
        const books = await booksCollection.find(query).toArray();
        console.log("The books are in servers");
        return books;
    } 
    catch (error) { 
        console.error('Error al obtener un libro:', error);
        res.status(500).json({ error: 'Hubo un problema al obtener un libro' }); 
    } 
};

export const getListbyId = async (listId) => {
    try {          ///projection not working
        const list = await listsCollection.findOne({id: listId});
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
            "summary": book.summary,
            "pages": book.pages,
            "published": book.published,
            "dateread": book.dateread,
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
            "booksInList": []
        }
        return await listsCollection.insertOne(newList);
    }
    catch (error) { 
        console.error('Error al crear una lista:', error);
        res.status(500).json({ error: 'Hubo un problema al crear una lista' }); 
    } 
}

export const modifyBook = async (bookId, book) => { ///a mitad
    try {
        book = {
            $set: {
            "bookcover": book.bookcover,
            "title": book.title,
            "author": book.author,
            "genre": book.genre,
            "format": book.format,
            "language": book.language,
            "summary": book.summary,
            "pages": book.pages,
            "published": book.published,
            "dateread": book.dateread,
            "updatedAt": new Date(),
        }}
        return await booksCollection.updateOne({id: bookId}, book);
    }
    catch (error) { 
        console.error('Error al crear un libro:', error);
        res.status(500).json({ error: 'Hubo un problema al crear un libro' }); 
    } 
}

export const modifyList = async (listId, list) => {
    try {
        list = { $set: {
            "name": list.name,
            "description": list.description,
        }}
        return await listsCollection.updateOne({id: listId}, list);
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
        return toReadbooks;
        
    } 
    catch (error) { 
        console.error('Error al obtener un libro:', error);
        res.status(500).json({ error: 'Hubo un problema al obtener un libro' }); 
    } 
};

export const getFav = async () => {
    try { 
        const favbooks = await booksCollection.find({fav: true}).toArray();;
        console.log("The book is in server");
        return favbooks;
        
    } 
    catch (error) { 
        console.error('Error al obtener un libro:', error);
        res.status(500).json({ error: 'Hubo un problema al obtener un libro' }); 
    } 
};

export const getOwned = async () => {
    try { 
        const ownedbooks = await booksCollection.find({owned: true}).toArray();;
        console.log("The book is in server");
        return ownedbooks;
        
    } 
    catch (error) { 
        console.error('Error al obtener un libro:', error);
        res.status(500).json({ error: 'Hubo un problema al obtener un libro' }); 
    } 
};



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


/////////////////////////////////////



export const addListToBooks = async (listId, bookId) => {
    try {
        console.log("Añadiendo lista a al libro:", bookId);
        // Convertir `bookId` a ObjectId si es necesario
        const filter = { id: bookId };
        const filters = { id: listId };
        // Obtener el libro actual
        const book = await getBookbyId(bookId);
        if (!book) {
            console.log("Libro no encontrado");
            return { error: "Libro no encontrado" };
        }
        console.log(listId)
        const list = await getListbyId(listId);
        console.log('liist', listId)
        if (!list) {
            console.log("Lista no encontrado");
            return { error: "Lista no encontrado" };
        }
        //Añadir el libro a la lista
        // Añadir la lista al libro

        const updatedValue = {
            $each: [{id: listId}]
                }
        const updatedValue2 = {
                    $each: [{id: bookId}]
                        }

        const updateBook = await booksCollection.updateOne(filter, { $push: { customlists: updatedValue } });
        const updateList = await listsCollection.updateOne(filters, { $push: { booksInList: updatedValue2 } });
        console.log("Resultado de actualización:", updateBook);
                        const update = {
                            updateBook,
                            updateList
                        }
        return updateBook;
        }
        catch (error) { 
            console.error('Error al crear una lista:', error);
            res.status(500).json({ error: 'Hubo un problema al crear una lista' }); 
        }
}



export const modifyToRead = async (bookId) => {
    try {
        console.log("Modificando 'toread' del libro:", bookId);
        // Convertir `bookId` a ObjectId si es necesario
        const filter = { id: (bookId) };
        // Obtener el libro actual
        const book = await getBookbyId(bookId);
        if (!book) {
            console.log("Libro no encontrado");
            return { error: "Libro no encontrado" };
        }
        // Invertir el valor actual de `toread`
        const updatedValue = !book.toread;
        // Realizar la actualización
        const updateResult = await booksCollection.updateOne(filter, { $set: { toread: updatedValue } });
        console.log("Resultado de actualización:", updateResult);
        return updateResult;
    } catch (error) {
        console.error('Error al modificar "toread":', error);
        return { error: "Hubo un problema al modificar 'toread'" };
    }
};


export const modifyFav = async (bookId) => {
    try {
        console.log("Modificando 'fav' del libro:", bookId);
        // Convertir `bookId` a ObjectId si es necesario
        const filter = { id: bookId };
        // Obtener el libro actual
        const book = await getBookbyId(bookId);
        if (!book) {
            console.log("Libro no encontrado");
            return { error: "Libro no encontrado" };
        }
        // Invertir el valor actual de `fav`
        const updatedValue = !book.fav;
        // Realizar la actualización
        const updateResult = await booksCollection.updateOne(filter, { $set: { fav: updatedValue } });
        console.log("Resultado de actualización:", updateResult);
        return updateResult;
    } catch (error) {
        console.error('Error al modificar "fav":', error);
        return { error: "Hubo un problema al modificar 'fav'" };
    }
};

export const modifyOwned = async (bookId) => {
    try {
        console.log("Modificando 'owned' del libro:", bookId);
        // Convertir `bookId` a ObjectId si es necesario
        const filter = { id: (bookId) };
        // Obtener el libro actual
        const book = await getBookbyId(bookId);
        if (!book) {
            console.log("Libro no encontrado");
            return { error: "Libro no encontrado" };
        }
        // Invertir el valor actual de `owned`
        const updatedValue = !book.owned;
        // Realizar la actualización
        const updateResult = await booksCollection.updateOne(filter, { $set: { owned: updatedValue } });
        console.log("Resultado de actualización:", updateResult);
        return updateResult;
    } catch (error) {
        console.error('Error al modificar "owned":', error);
        return { error: "Hubo un problema al modificar 'owned'" };
    }
};

// Endpoint para actualizar `toread` app.patch('/books/:id/toread', async (req, res) => { try { const bookId = req.params.id; console.log("Petición PATCH recibida para modificar 'toread' de:", bookId); const result = awaitmodifyToRead(bookId); if (result.error) { return res.status(404).json({ error: result.error }); } res.json({ message: "Estado 'toread' actualizado correctamente" }); } catch (error) { console.error("Error en la petición PATCH:", error); res.status(500).json({ error: "Error interno del servidor" }); } });

app.patch('/books/:id/toread', async (req, res) => {
    try {
        const bookId = req.params.id;
        console.log("Petición PATCH recibida para modificar 'toread' de:", bookId);
        const result = await modifyToRead(bookId);
        if (result.error) {
            return res.status(404).json({ error: result.error });
        }
        res.json({ message: "Estado 'toread' actualizado correctamente" });
    } catch (error) {
        console.error("Error en la petición PATCH:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});


export const filterBooks = async (query) => {
    try { 
        console.log(query);
        const booksfiltrados = await booksCollection.find(query).toArray(); 
        console.log(booksfiltrados);
        return booksfiltrados; 
        // Devolvemos los books  filtrados 
    
    } catch (error) { console.error('Error al obtener agricultores:', error); 
        res.status(500).json({ error: 'Hubo un problema al obtener los books' }); 
    }}