const mongoose = require('mongoose');

const express = require('express');
const connection = express.Router();


require('dotenv').config({path: 'variable.env'});
console.log(process.env.DB_URL);

mongoose.connect(process.env.DB_URL,{ useNewUrlParser: true, useUnifiedTopology: true })
   .then(()=> console.log("connected to Mongo...."))
   .catch(err => console.log("something wrong" , err));

module.exports=connection;