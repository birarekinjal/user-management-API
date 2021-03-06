const express = require("express");
require('express-async-errors');

//file path
const dotenv = require('dotenv').config();
const winston = require('winston');
const LogzioWinstonTransport = require('winston-logzio');
const connection = require("./connectionSettings/connection");
const projectRoute = require("./routes/project");
const userRoute = require("./routes/user");
const userProject = require("./routes/users_projects");
const userLogin = require("./routes/userLogin");
const error = require("./middleware/error");
const bodyParser = require("body-parser");
const config = require('config');




const app = express();
app.use(express.json());

// winston.add(winston.transports.File , {filename : 'logfile.log'});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if (!config.get('jwtPrivateKey')){
    console.error('FATAL ERROR : jwtPrivateKey is not defined');
    process.exit(1)
}
console.log(`Node Env: ${process.env.NODE_ENV}`);

//connection to the database
app.use(connection);

//route
app.use("/user", userProject);
app.use("/project", projectRoute);
app.use("/users", userRoute);
app.use("/user/login", userLogin);
require('./middleware/production')(app);


app.use(error);

//connect to port

console.log(dotenv.parsed , "hi");
const host = process.env.HOST || '0.0.0.0';


var port = process.env.PORT || 5000
app.listen(port)

