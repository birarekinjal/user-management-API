import {userSchema} from '../schema/user';

const mongoose = require('mongoose');

const User =  mongoose.model('users' ,userSchema);


export default User;