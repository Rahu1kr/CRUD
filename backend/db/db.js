import mongoose from 'mongoose'

export const ConnectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Database Connected!")
    } catch (error) {
        console.error("Failed to connect!", error)
        process.exit(0);
    }
}