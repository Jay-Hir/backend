import express from 'express';
import dotenv from 'dotenv';
import { connect } from 'mongoose';
import cookieParser from "cookie-parser";
import { connectDB } from './db/connectDB.js';
import cors from 'cors';

import authRoutes from "./routes/auth.route.js"

dotenv.config();

const app = express();


app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

const PORT = process.env.PORT || 3000;

app.use(express.json()); // allows us to parse incoming request with JSON payloads
app.use(cookieParser()); // allows us to parse incoming cookies

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port: ${PORT}`);
})