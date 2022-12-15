import express from 'express';
import productRouter from './routes/productsRouter';
import usersRouter from './routes/usersRouter';
import orderRouter from './routes/ordersRouter';

const app = express();

app.use(express.json());

app.use('/', usersRouter);
app.use('/', productRouter);
app.use('/', orderRouter);

export default app;
