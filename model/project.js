import {projectSchema} from '../schema/project';
const mongoose = require('mongoose');

const Project =  mongoose.model('projects' ,projectSchema);

export default Project;