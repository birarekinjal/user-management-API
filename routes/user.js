// import file
import { createUser } from "../api/user";
import User from "../model/user";
import { validationSchema } from "../schema/user";
import Project from "../model/project";

const express = require("express");
const user = express.Router();

//get the user
user.get("/", async (req, res) => {
  const user = await User.find().populate(
    "project",
    "projectName projectDetails"
  );

  res.send(user);

  console.log("all the User", user);
});

user.get("/:id", async (req, res) => {
  const user = await User.find({ _id: req.params.id }).sort({ firstName: 1 });
  res.send(user);
  console.log("all the User", user);
});

//post the users

user.post("/", async (req, res) => {
  // console.log(req.body)
  const { error } = validationSchema(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

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
      emailAddress: req.body.emailAddress
    };
    var result = await createUser(
      obj,
      new Project({
        projectName: req.body.project,
        projectDetails: req.body.projectDetails
      })
    );
    res.send(result);
  } catch (error) {
    console.log(error);
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
  res.send("update user sucesfulyy");
});

// //delete the user
user.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const user = await User.findByIdAndRemove(id);
  res.send(`delete suceesfully, ${user}`);
});

module.exports = user;
