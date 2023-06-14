import path from 'path';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();


const PORT = process.env.PORT || 3001;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(notFound);
app.use(errorHandler);

app.listen(port, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);