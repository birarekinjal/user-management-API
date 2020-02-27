import Joi from "@hapi/joi";

const mongoose = require("mongoose");

//This code for mongoose validation check
const projectSchema = new mongoose.Schema({
  projectName: { type: String, required: true },
  projectDetails: { type: String, required: true },
});

//This code for "JOI" Validations check
const validationSchema = project => {
  console.log("hiiiii")
  const schema = Joi.object({
    projectName: Joi.string().required(),
    projectDetails: Joi.string().required(),
  });
  return schema.validate(project);
};

export {validationSchema,projectSchema };
