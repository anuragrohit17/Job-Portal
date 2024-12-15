import mongoose from "mongoose";


const connectDB = async () => {

    try {
        await mongoose.connect('mongodb+srv://rohitanuragi994:<rohit@123>@cluster0.39xov.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log('mongodb connected successfully');
    } catch (error) {
        console.log(error);
    }
}
export default connectDB;

/*export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://rohitanuragi994:<rohit@123>@cluster0.39xov.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log("DB Connected"));
   
}
export default connectDB;

// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.*/