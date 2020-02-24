import Joi from "@hapi/joi";

const mongoose = require("mongoose");

//This code for mongoose validation check
const userSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  jobTitleName: { type: String, required: true },
  firstName: String,
  lastName: {
    type: String,
    required: function() {
      return this.firstName;
    },
   
  },
  preferredFullName: String,
  employeeCode: String,
  region: String,
  phoneNumber: {
    type: Number,
    required: true
  },
  emailAddress: String
});

//This code for "JOI" Validations check
const validationSchema = users => {
  const schema = Joi.object({
    userId: Joi.string().required(),
    jobTitleName: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    preferredFullName: Joi.string().required(),
    employeeCode: Joi.string().required(),
    region: Joi.string().required(),
    phoneNumber: Joi.number().required(),
    emailAddress: Joi.string().required()
  });
  return schema.validate(users);
};

export { userSchema, validationSchema };
