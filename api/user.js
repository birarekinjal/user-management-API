import User from "../model/user";

const mongoose = require('mongoose');
// var Fawn = require("fawn");
// var task = Fawn.Task();

//add the Transactions in MongoDB
// Fawn.init(mongoose);

async function createUser(obj,projectDetails) {
  console.log(obj , "++++")
  const user = new User({
    ...obj,
    project: {...projectDetails}
  });
  console.log(user , "hii ")
   return user;
}

export { createUser };
