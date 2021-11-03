import express from 'express';
import ordersRouter from './routes/orders.routes.js';

const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
  throw new Error('Página não encontrada')
});

app.use('/v1', ordersRouter);


//Error handling
app.use((error, req, res, next) => {
  res.status(404).send({error: error.message});
});

export default app