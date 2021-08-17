import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
// import dotenv from 'dotenv';
import connection from "./database/db.js";
import DefaultData from './default.js';
import Routes from './routes/route.js';


// dotenv.config();

const app = express();

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
// app.use(cors());

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));


app.use('/', Routes);

// const username = process.env.DB_USERNAME;
// const password = process.env.DB_PASSWORD;

connection();
DefaultData();




const PORT = 8000;

app.listen(PORT, () => console.log(`server is Running on ${PORT}`));
