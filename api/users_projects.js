import User_Project from "../model/users_projects";

const mongoose = require('mongoose');
// var Fawn = require("fawn");
// var task = Fawn.Task();

//add the Transactions in MongoDB
// Fawn.init(mongoose);

async function user_project(obj) {
  console.log(obj , "hiiiiii this is the new object")
  const result = new User_Project(obj);
  return result;
}

export { user_project };
