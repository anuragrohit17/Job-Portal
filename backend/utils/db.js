import mongoose from "mongoose";


const connectDB = async () => {

    try {
        await mongoose.connect('mongodb+srv://rohitanuragi994:my-job-portal@cluster0.zcs53.mongodb.net/');
        console.log('mongodb connected successfully');
    } catch (error) {
        console.log(error);
    }
}
export default connectDB;

