import User from "../model/user";

const mongoose = require('mongoose');

async function createUser(obj,projectDetails) {
  const user = new User({
    ...obj,
    project: {...projectDetails}
  });
   return user;
}

export { createUser };
