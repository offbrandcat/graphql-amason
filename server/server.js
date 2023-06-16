const express = require("express");
const path = require("path");
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const db = require('./config/db')

dotenv.config();


const PORT = process.env.PORT || 3001;

// connectDB();

const app = express();
//body parcer middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//cookie parcer middleware
app.use(cookieParser());
app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);