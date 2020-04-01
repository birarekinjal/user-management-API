import User from "../model/user";
import { validationSchema } from "../schema/userLogin";

const express = require("express");
const mongoose = require("mongoose");

const userLogin = express.Router();

userLogin.post("/", async (req, res) => {
  const { error } = validationSchema(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  console.log(req.body , "hi")

  try {
    const user = await User.find({
      userId: req.body.userId,
      password: req.body.password
    })
    console.log(user , "nw ueser")
  if(user.length > 0) return res.status(200).send("autoticate scuessfull")
  else return res.status(500).send("authotication fail");

  } catch (ex) {
    console.log(ex);
  }
});

module.exports = userLogin;
