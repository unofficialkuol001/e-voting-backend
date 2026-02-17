import mongoose from "mongoose"
import { config } from "dotenv"

config()

const MONGO_URI = process.env.MONGO_URI

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI)
        console.log('MongoDB connection successfully')
    } catch (error) {
        console.log('MongoDB connection failed')
    }
}

export default connectDB