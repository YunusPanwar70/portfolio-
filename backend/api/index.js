import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './router/auth.routes.js';
import { connectDB } from './lib/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: 'https://portfolio-henna-pi-47.vercel.app', 
    credentials: true
}));
app.use(express.json());

// Routes
app.use('/api', authRoutes);

// Health check or base route
app.get('/', (req, res) => {
    res.json({ message: "ok", status: true });
});

app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`);
    connectDB();
});
