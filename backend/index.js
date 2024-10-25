import dotenv from 'dotenv'
dotenv.config()

import connectDB from './config/connectdb.js';
import express from "express";
import router from './routes/bookRoutes.js';

const PORT = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL

// configure app
const app = express();

// Load Routes
app.use("", router)

// Database connectivity
connectDB(DATABASE_URL)
app.listen(PORT, () => {
    console.log(`Server is listening to port: http://localhost:${PORT}`)
});
