import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'express';
import userRouter from './routes/user.js';
import recipeRouter from './routes/recipe.js';
import cors from 'cors'



const app = express();

app.use(cors({
    origin:true,
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
   
  }))
  

app.use(bodyParser.json())
//user router 

app.use('/api', userRouter)
//recipe router 

app.use('/api',recipeRouter)

mongoose.connect("mongodb+srv://mubashsheera555:Il69wbTcNMbN1F0S@cluster0.1zmkd.mongodb.net/",
{
dbName:"RECIPE_APP_2025",
}).then(()=>console.log("MongoDb is connected..!"))
.catch((err) => console.log(err.message));

 const port = 3000;

app.listen(port,()=>console.log(`server is running on port ${port}`));

// username = mubashsheera555
// password = Il69wbTcNMbN1F0S
// mongodb+srv://mubashsheera555:<db_password>@cluster0.1zmkd.mongodb

