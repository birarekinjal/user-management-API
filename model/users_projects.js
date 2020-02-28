import {users_projects} from '../schema/users_projects';
const mongoose = require('mongoose');

const User_Project =  mongoose.model('users_projects' ,users_projects);

export default User_Project;