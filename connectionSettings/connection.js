const mongoose = require('mongoose');

const express = require('express');
const connection = express.Router();

mongoose.connect('mongodb://localhost/usersapp',{ useNewUrlParser: true, useUnifiedTopology: true })
   .then(()=> console.log("connected to Mongo...."))
   .catch(err => console.log("something wrong" , err));

module.exports=connection;