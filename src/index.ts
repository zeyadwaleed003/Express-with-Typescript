import express from 'express';
import userRouter from './routes/userRoutes';

const app = express();

app.use('/api/users', userRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
