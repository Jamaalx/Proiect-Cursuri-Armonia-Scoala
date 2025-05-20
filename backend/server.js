import express from "express";
import { connectDb } from "./config/db.js";
import productRoutes from "./routes/product.route.js";
import cors from "cors";
import path from "path";

// Dotenv part of config
import dotenv from "dotenv";
dotenv.config();

//const SELF_PING_URL = "https://mern-crud-app-sn8r.onrender.com"; // înlocuiește cu URL-ul tău
// 🔁 keep alive ping
// setInterval(() => {
//   fetch(SELF_PING_URL)
//     .then((res) => console.log(`Ping sent to Render. Response status: ${res.status}`))
//     .catch((err) => console.error("Ping failed:", err));
// }, 5 * 60 * 1000); // Ping every 5 minutes


const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(express.json()); // allows us to accept json data in the req.body

// cors trebuie apelat obligatoriu inaintea rutelor
app.use(cors({
  origin: ["https://localhost:3000", "http://localhost:3000"],
  credentials: true
}));

// route middleware
app.use("/api/products", productRoutes);


// deployment
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  connectDb();
  console.log("Server started at http://localhost:" + PORT);
})
