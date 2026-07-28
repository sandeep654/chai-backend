import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';
import dns from "node:dns";

const connectDB = async () =>{
    try{

       dns.setServers(["8.8.8.8", "8.8.4.4"]);
      const connectionInstance = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
       console.log(`\n MongoDB Connected & DB Host:  ${connectionInstance.connection.host}`);

    }  catch(error){
         console.log("Mongo connection failed" , error);
         process.exit(1);
    }
}

export default connectDB;