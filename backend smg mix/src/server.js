import express from 'express';
import dotenv from 'dotenv';
// import cors from 'cors';
import authRoutes from './router/auth.routes.js';
import msgRoutes from './router/msg.routes.js';
import { connectDB } from './lib/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/msg', msgRoutes);

app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`);
    connectDB();
});