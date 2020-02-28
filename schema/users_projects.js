import Joi from "@hapi/joi";
Joi.objectId = require('joi-objectid')(Joi)
const mongoose = require("mongoose");

const users_projects = new mongoose({
    user_id:{
         type:mongoose.Schema.Types.ObjectId,
         ref:'users'
    } ,
    project_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'projects'
    }
})

const validationSchema = data => {
    const schema = Joi.object({
      userId:Joi.objectId().require(),
      project:Joi.objectId().require(),
    }).unknown();
    return schema.validate(data);
  };
  
  export { users_projects, validationSchema };
