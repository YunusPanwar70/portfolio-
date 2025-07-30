import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './router/auth.routes.js';
import { connectDB } from './lib/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend URL
    credentials: true
}));
app.use(express.json());

// Routes
app.use('/api', authRoutes);

app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`);
    connectDB();
});