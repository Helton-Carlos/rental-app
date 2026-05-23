import express from 'express';
import cors from 'cors';
import authRoutes from '../auth/authRoutes.js';
import contractRoutes from '../contracts/contractRoutes.js';
import emailRoutes from '../email/emailRoutes.js';
import adminRoutes from '../admin/adminRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', authRoutes);
app.use('/api', contractRoutes);
app.use('/api', emailRoutes);
app.use('/api', adminRoutes);

export default app;
