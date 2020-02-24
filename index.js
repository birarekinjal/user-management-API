const express = require("express");
const Joi = require('@hapi/joi')
//file path
const connection = require("./connectionSettings/connection");
const userRoute = require("./routes/user");

// var { log, authentication } = require("./middleware/logger");
const app = express();

app.use(express.json())
// app.use(log);
// app.use(authentication);
console.log(`Node Env: ${process.env.NODE_ENV}`);
// console.log(`app:${app.get("env")}`);
//connection object
app.use(connection);
app.use("/users", userRoute);

app.listen(5000);

// async function createUser(){
//     const user = new User({
//         name:'unnati',
//         EmailID:'jinal@gmail.com',
//         tags:['wordpress','string'],
//         phoneNumber:'8733850994',
//         price:'3'
//     });
//     const result = await user.save();
//     console.log(result);
// }delete

//get the userData
// async function getUser(){
//       const pageNumber = 2;
//       const pageSize = 2;

//       const user = await User
//          .find({name:/.*na.*/ })
//          .skip((pageNumber - 1) * pageSize)
//          .limit(3)
//          .sort({name:1})
//       console.log('all the User' , user)
// }

// async function updateUser(id){
//      const user = await User.findByIdAndUpdate(id,{
//          $set:{
//               name : 'vipra shah'
//          }
//      },{new:true});

//      console.log(user)
// }

// async function deleteUser(id){
//     const user = await User.findByIdAndRemove({_id:id})
//     console.log(user)
// }

// async function updateUser(id){
//     const user = await User.findById(id);
//     if(!user) return;

//     user.name = "vipra";
//     const result  = await user.save();
//     console.log(result)
// }

//deleteUser('5e4e5729d539e64eeb0293e6')

//createUser();
//getUser();
