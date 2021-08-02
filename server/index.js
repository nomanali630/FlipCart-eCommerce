import express from 'express';
// import dotenv from 'dotenv';
import connection from "./database/db.js";
import DefaultData from './default.js';


// dotenv.config();

const app = express();


// const username = process.env.DB_USERNAME;
// const password = process.env.DB_PASSWORD;

connection();
DefaultData();




const PORT = 8000;

app.listen(PORT, () => console.log(`server is Running on ${PORT}`));
