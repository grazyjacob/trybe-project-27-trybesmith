import express from 'express';
import productRouter from './routes/productsRouter';
import usersRouter from './routes/usersRouter';

const app = express();

app.use(express.json());

app.use('/', usersRouter);
app.use('/', productRouter);

export default app;
