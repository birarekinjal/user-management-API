import Joi from "@hapi/joi";


const validationSchema = users => {
    const schema = Joi.object({
      userId: Joi.string().required(),
      password : Joi.string().required(),
    }).unknown();
    return schema.validate(users);
  };
  
  export { validationSchema };