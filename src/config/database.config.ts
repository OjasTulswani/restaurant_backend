import mongoose from "mongoose";
import env from './env.var.config'

const connectDB = async () : Promise<void> => {
    try {
        await mongoose.connect(env.db.dbconnection!)
        .then((e) => {
            console.log(`[mongodb] Running On ${e.connection.host}`)  
        })
        .catch((err) => console.log(err));
    } catch (error) {
        console.log(`[mongodb] Server Error: ${error}`);
    }
}

export default connectDB;