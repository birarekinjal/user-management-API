// import file
import { createUser } from "../api/user";
import User from "../model/user";
import { validationSchema , userSchema } from "../schema/user";
import Project from "../model/project";
import auth from "../middleware/auth";

const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const config = require("config");

//var Fawn = require("fawn");
//var task = Fawn.Task();

const user = express.Router();

//get the user

user.get('/me' ,auth, async (req, res) => {
  const user = await User.findById(req.user.id);
  res.send(user);
});

user.get("/", auth, async (req, res) => {
  const user = await User.find().populate(
    "project",
    "projectName projectDetails"
  );
  res.send(user);
});

user.get("/:id", async (req, res) => {
  const user = await User.find({ _id: req.params.id }).sort({ firstName: 1 });
  res.send(user);
});


//post the users
user.post("/", async (req, res) => {
  const { error } = validationSchema(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  var data = await User.findOne({ emailAddress: req.body.emailAddress });

  if (data && data.length > 0) {
    return res.status(400).send("user already register");
  } else {
    try {
      const obj = {
        userId: req.body.userId,
        jobTitleName: req.body.jobTitleName,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        preferredFullName: req.body.preferredFullName,
        employeeCode: req.body.employeeCode,
        region: req.body.region,
        phoneNumber: req.body.phoneNumber,
        emailAddress: req.body.emailAddress,
        password: req.body.password
      };
      var result = await createUser(
        obj,
        new Project({
          projectName: req.body.project,
          projectDetails: req.body.projectDetails
        })
      );

      const salt = await bcrypt.genSalt(10);
      result.password = await bcrypt.hash(result.password, salt);

      const token = data.generateAuthTocken();

      await result.save();
      res.header("x-auth-token", token).send(result);
    } catch (error) {
      console.log(error);
    }
  }
});

//put

user.put("/:id", async (req, res) => {
  const id = req.params.id;
  const user = await User.findByIdAndUpdate(
    id,
    {
      $set: {
        jobTitleName: req.body.jobTitleName,
        firstName: req.body.firstName
      }
    },
    { new: true }
  );
  user.save();
  res.send("update user sucesfulyy");
});

// //delete the user
user.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const user = await User.findByIdAndRemove(id);
  res.send(`delete suceesfully, ${user}`);
});

module.exports = user;
