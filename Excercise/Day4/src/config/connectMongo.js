import mongoose from "mongoose";

let connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/VMO-NodeJs', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connect succesfully!!!');
    } catch (err) {
        console.log('Connect failure!!!');
    }
}

module.exports = connectDB
