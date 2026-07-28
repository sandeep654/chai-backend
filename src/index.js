// require('dotenv').config({path : './env'})
import dotenv from 'dotenv'
// import mongoose from 'mongoose'
import { DB_NAME } from './constants.js'
// import express from 'express'
import connectDB from './db/userData.js';

dotenv.config({
    path: './.env'
})

console.log("MONGO_URL =", process.env.MONGO_URL);
connectDB();

// const app = express;

/*;(  async()=>{
     try{
       await  mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
              app.on( "error" ,(error)=>{
                        console.log("error" , error );
                        throw err;
              })
    
       app.listen( process.env.PORT , ()=>{
        console.log(`App is listening on port ${process.env.port}`)
       })

     }catch(error){
         console.error("Error:  " , error)
     }
})()*/