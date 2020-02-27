const express = require("express");
const Joi = require('@hapi/joi');

//file path
const connection = require("./connectionSettings/connection");
const projectRoute = require("./routes/project");
const userRoute = require("./routes/user");

const app = express();
app.use(express.json());

console.log(`Node Env: ${process.env.NODE_ENV}`);


//connection to the database
app.use(connection);


//route 
app.use("/project",projectRoute);
app.use("/users", userRoute);


//connect to port
app.listen(5000);
