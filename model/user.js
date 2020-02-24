import {userSchema} from '../schema/user';
const mongoose = require('mongoose');


const User =  mongoose.model('user' ,userSchema);

export default User;