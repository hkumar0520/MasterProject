import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';


// by adding type:'module' in package.json, no need to add express = require('express') syntax

import dotenv from 'dotenv';


import postRoutes from './routes/posts.js'

// create a instance of express which can be used to call function 
const app = express();
dotenv.config();
console.log(process.env.CONNECTION_URL);

// send requests with 30mb size
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts',postRoutes);

// const CONNECTION_URL = 'mongodb+srv://js_mastery:123123123@practice.jto9p.mongodb.net/test';
//mongodb+srv://javascriptmastery:1234@cluster0.7awa0.mongodb.net/?retryWrites=true&w=majority
// const CONNECTION_URL = 'mongodb://localhost:27017/Project';
// mongodb+srv://javascriptmastery:1234@cluster0.7awa0.mongodb.net/?retryWrites=true&w=majority
// mongodb+srv://javascriptmastery:1234@cluster0.7awa0.mongodb.net/?retryWrites=true&w=majority
//const CONNECTION_URL = 'mongodb+srv://javascriptmastery:1234@cluster0.7awa0.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

// do not get any warning in console
// depriciated
// mongoose.set('useFindAndModify', false);
