import User from "../model/user";
import { validationSchema } from "../schema/userLogin";


const express = require("express");
const mongoose = require("mongoose");
var jwt = require('jsonwebtoken');
const config = require('config');

const userLogin = express.Router();
const bcrypt = require("bcrypt");


userLogin.post("/", async (req, res) => {
  const { error } = validationSchema(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
 
  try {

    var user = await User.findOne({ userId : req.body.userId });
    if (!user) return res.status(400).send("Invalid Username and Password") 
  
    var password = await bcrypt.compare( req.body.password ,user.password)
    if (!password) return res.status(400).send("Invalid Password") ;

    const token = user.generateAuthTocken();
   
    res.send({"token":token});

  } catch (ex) {
    console.log(ex);
  }
});

module.exports = userLogin;
