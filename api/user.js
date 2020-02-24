import User from "../model/user";

async function createUser(obj) {
  const user = new User(obj);
  const result = await user.save();
  return result;
}

export { createUser };
