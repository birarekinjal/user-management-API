import User from "../model/user";

async function createUser(obj,projectDetails) {
  const user = new User({
    ...obj,
    project: {...projectDetails}
  });
  const result = await user.save();
  return result;
}

export { createUser };
