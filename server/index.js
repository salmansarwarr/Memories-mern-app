import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';
import { connectDB } from './config/db.js';

const app = express();
dotenv.config();

app.listen(process.env.PORT || 3000, () =>
    console.log(`Server listening on port ${PORT}`)
);

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/posts', postRoutes);
app.use('/user', userRoutes);

app.get('/', (req, res) => res.send('App is running'));

connectDB();
