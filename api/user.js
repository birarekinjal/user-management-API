import User from "../model/user";

const mongoose = require('mongoose');
// var Fawn = require("fawn");
// var task = Fawn.Task();

//add the Transactions in MongoDB
// Fawn.init(mongoose);

async function createUser(obj,projectDetails) {
  const user = new User({
    ...obj,
    project: {...projectDetails}
  });
   return result;
}

export { createUser };
