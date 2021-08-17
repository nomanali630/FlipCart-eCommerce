import { request } from 'express';
import User from '../model/userSchema.js';



export const userSignup = async (request, response) => {
  try {
      const exist = await User.findOne({ userName: request.body.userName});
      if(exist){
          return response.status(401).json('user already exist')
      }
       const user = request.body;
       const newUser = new User(user);
     await  newUser.save();
     response.status(200).json('user successfully registered')
  } catch (error) {
    console.log("Error ", error.message);
  }
  
};
export const userLogin = async (request,response)=>{
  try{
    let user = await User.findOne({ userName: request.body.userName, password: request.body.password })
    if(user){
      return response.status(200).json(`${request.body.userName} login successfully`)
    }else{
      return response.status(401).json('invalid login')
    }
  } catch(error){
    console.log('error :' ,error.message)
  }
}