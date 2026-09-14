import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
const DB_NAME = "AH20232CP1";

const client = new MongoClient(MONGO_URI);

let db;

async function connectDB() {
  try {
    await client.connect();
    db = client.db(DB_NAME);
    console.log(`Conectado a la base de datos: ${DB_NAME}`);
    return db;
  } catch (error) {
    console.error("Error al conectar a MongoDB: ", error);
    process.exit(1);
  }
}

export { connectDB, db, ObjectId }