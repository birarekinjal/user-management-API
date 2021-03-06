import Joi from "@hapi/joi";
import { projectSchema } from "../schema/project";

const mongoose = require("mongoose");
var jwt = require('jsonwebtoken');
const config = require('config');
//This code for mongoose validation check
const userSchema = new mongoose.Schema({
  userId: {type: String, required: true },
  jobTitleName: {type: String, required: true },
  firstName: String,
  lastName: {
    type: String,
    required: function(){
      return this.firstName;
    }
  },
  preferredFullName: String,
  employeeCode: String,
  region: String,
  phoneNumber: {
    type: Number,
    required: true
  },
  emailAddress: String,
  password:String,
  //project: projectSchema
});


//for generate the schemas
userSchema.methods.generateAuthTocken = function (){
  const token = jwt.sign({_id : userSchema._id},config.get('jwtPrivateKey'));
  return token;
}


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
    emailAddress: Joi.string().required(),
    password : Joi.string().required(),
   // project: Joi.string()
  }).unknown();
  return schema.validate(users);
};

export { userSchema, validationSchema };
