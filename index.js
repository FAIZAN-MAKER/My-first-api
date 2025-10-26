import express from "express";
import mongoose from "mongoose";
import productRoutes from "./routes/product.routes.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/", (req, res) => res.send("Hello from node api"));

// ✅ Only use routes here - remove duplicate route definitions
app.use('/api/products', productRoutes);

//! Connecting dataBase to the backend
mongoose
    .connect(
        "mongodb+srv://un6902090_db_user:0IDaQSYxcD2zoZEw@mycrudapi.rktbfdb.mongodb.net/mycrudapi?retryWrites=true&w=majority&appName=mycrudapi"
    )
    .then(() => {
        console.log("✅ Database connected!");
        app.listen(3000, () => {
            console.log("API IS LISTENING ON PORT 3000");
        });
    })
    .catch((err) => console.error("❌ Database connection failed:", err));
