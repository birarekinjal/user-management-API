// import file
import { user_project } from "../api/users_projects";
import User_Project from "../model/users_projects";
import { validationSchema } from "../schema/users_projects";

const express = require("express");
const userProject = express.Router();

//get the user
userProject.get("/:user_id/project/:project_id", async (req, res) => {
  const user = await User_Project.find({ user_id: req.params.user_id ,project_id : req.params.project_id})
  res.send(user);
});

userProject.get("/:id/project", async (req, res) => {
  const user = await User_Project.find({ user_id: req.params.id })
  .populate('user_id')
  .populate('project_id');
  res.send(user);
});


//post the users
userProject.post("/:id/project/:id", async (req, res) => {
  const { error } = validationSchema(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  try {
    const obj = {
      user_id: req.body.userId,
      project_id: req.body.projectId
    };

    var result = await user_project(obj);
    result.save();
    res.send(result);
  } catch (error) {
    console.log(error);
  }
});

//put
userProject.put("/:id/project", async (req, res) => {
  const id = req.params.id;
  const user = await User_Project.findByIdAndUpdate(
    id,
    {
      $set: {
        project_id: req.body.projectId
      }
    },
    { new: true }
  );
  res.send("Update user successfully");
});



//delete the user
userProject.delete("/:id/project", async (req, res) => {
  const id = req.params.id;
  const user = await User_Project.findByIdAndRemove(id);
  res.send(`Delete successfully, ${user}`);
});

module.exports = userProject;
