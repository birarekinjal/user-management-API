import Project from "../model/project";

async function createProject(obj) {
  const project = new Project(obj);
  const result = await project.save();
  return result;
}

export { createProject };
