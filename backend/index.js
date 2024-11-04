import dotenv from 'dotenv'
dotenv.config()

import connectDB from './config/connectdb.js';
import express from "express";
import router from './routes/book_routes.js';
import cors from 'cors';

const PORT = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL

// Configure App
const app = express();

// Initializing Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS Policy
app.use(
    cors({
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type']
    })
)

// Load Routes
app.use("", router);

// Middleware for handling CORS Policy

// Database connectivity
connectDB(DATABASE_URL)
app.listen(PORT, () => {
    console.log(`Server is listening to port: http://localhost:${PORT}`)
});
