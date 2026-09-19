import express from "express";
import { connectDB } from "./config/db.js";
import eventRoutes from "./api/routes/event.routes.js";
import attendeeRoutes from "./api/routes/attendee.routes.js";
import viewRoutes from "./routes/view.routes.js";

const app = express();

app.use(express.json());
app.use("/api/events", eventRoutes);
app.use("/api/attendees", attendeeRoutes);

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/", viewRoutes);

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
