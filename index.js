const express = require("express");

//file path
const connection = require("./connectionSettings/connection");

const projectRoute = require("./routes/project");
const userRoute = require("./routes/user");
const userProject = require("./routes/users_projects");
const userLogin = require("./routes/userLogin");

const bodyParser = require("body-parser");

const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

console.log(`Node Env: ${process.env.NODE_ENV}`);

//connection to the database
app.use(connection);

//route
app.use("/user", userProject);
app.use("/project", projectRoute);
app.use("/users", userRoute);
app.use("/user/login", userLogin);

//connect to port
app.listen(5000);
