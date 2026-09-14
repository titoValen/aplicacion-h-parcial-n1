import express from "express";
import { connectDB } from "./config/db.js";

const app = express();

const startServer = async () => {
  try {
    await connectDB();
    app.listen(3333, () => console.log("Funcionando... http://localhost:3333"));
  } catch (error) {
    console.error("No se pudo iniciar el servidor: ", error);
    process.exit(1);
  }
};

startServer();
