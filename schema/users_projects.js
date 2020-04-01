import Joi from "@hapi/joi";
Joi.objectId = require('joi-objectid')(Joi);


const mongoose = require("mongoose");


import Project from "../model/project";
import User from "../model/user";

const users_projects = new mongoose.Schema({
    user_id:{
         type:mongoose.Schema.Types.ObjectId,
         ref:User
    },
    project_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:Project
    }
})

const validationSchema = data => {
    const schema = Joi.object({
      userId:Joi.objectId(),
      projectId:Joi.objectId(),
    }).unknown();
    return schema.validate(data);
  };
  
  export { users_projects, validationSchema };
