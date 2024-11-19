import express from 'express';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();
import { blogRouter } from './routers/blogRouters.js';

const app = express();
app.use(express.json());

app.use("/blog", blogRouter);

const PORT = process.env.SECRET_EXAMPLE_PORT || 3000
const MONGODB_URI = process.env.MONGODB_URL



const client = new MongoClient(MONGODB_URI);

const connectToDb = async () => {
    try {
        await client.connect();
        console.log('Datenbankverbindung erfolgreich!');
    } catch (error) {
        console.error('Fehler bei der Verbindung zur Datenbank:', error);
        process.exit(1);
    }
};

const startServer = () => {
    app.listen(PORT, () => {
        console.log(`Server läuft auf Port: ${PORT}`);
    });
};

connectToDb()
    .then(() => startServer())
    .catch((error) => {
        console.error("Server konnte nicht gestartet werden:", error);
        process.exit(2);
    });
