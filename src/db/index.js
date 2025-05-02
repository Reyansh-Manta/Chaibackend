import mongoose from "mongoose"
import { DB_NAME } from "../utils/constants"


const connectDB = async ()=>{
    try {
        const connInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MONGODB connected!! DB HOST: ${connInstance.Connection.host}`);
        
    } catch (error) {
        console.log("MONGOBD connection error", error)
        process.exit(1)
    }
}
 export default connectDB