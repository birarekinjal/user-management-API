// import file
import { createProject } from "../api/project";
import Project from "../model/project";
import { validationSchema } from "../schema/project";

const express = require("express");
const project = express.Router();

//get the project
project.get("/", async (req, res) => {
  const project = await Project.find().sort({ projectName: 1 });
  res.send(project);
});

project.get("/:id", async (req, res) => {
  const project = await Project.find({ _id: req.params.id }).sort({
    firstName: 1
  });
  res.send(project);
});

//post the projects
project.post("/", async (req, res) => {
  const { error } = validationSchema(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  try {
    const obj = {
      projectName: req.body.projectName,
      projectDetails: req.body.projectDetails
    };

    var result = await createProject(obj);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
});

//put

project.put("/:id", async (req, res) => {
  const id = req.params.id;
  const project = await Project.findByIdAndUpdate(
    id,
    {
      $set: {
        projectName: req.body.projectName,
        projectDetails: req.body.projectDetails
      }
    },
    { new: true }
  );
  res.send(project);
});

// //delete the project
project.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const project = await Project.findByIdAndRemove(id);
  res.send(`Delete successfully, ${project}`);
});

module.exports = project;
