import express from 'express';
import { register,login,profile } from '../controllers/user.js';
import { Authenticate } from '../middlewares/auth.js';
const router = express.Router();

//User register
router.post('/register', register)

//User login 
router.post('/login',login)

// profile

router.get('/user', Authenticate, profile)





export default router;

//async (req,res)=>{
   // const {name,gmail,password}= req.body

   //
   // 
   // 
   //  try{
      //  let user = await User.findOne({gmail})

        //if(user) return res.json({message:"user already exist"});

        //user = await User.create({name, gmail, password})

        //res.json({message:"User registered successfully....!",user})
    //}

  //  catch(error){

   // }
   // console.log(req.body)
//})