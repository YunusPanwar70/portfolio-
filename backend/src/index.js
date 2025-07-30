import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './router/auth.routes.js';
import { connectDB } from './lib/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: 'https://portfolio-henna-pi-47.vercel.app/', // Replace with your frontend URL
    credentials: true
}));
app.use(express.json());

// Routes
app.use('/api', authRoutes);
app.use('/', (req, res) => {
    return { msg: 'ok' };
});
app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`);
    connectDB();
});