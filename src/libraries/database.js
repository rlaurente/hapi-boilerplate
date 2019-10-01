import mongoose from 'mongoose';

export default class DatabaseLibrary {
    static async Setup(url){
        await mongoose.connect(url, { useNewUrlParser: true });
        console.log(`Database connected to ${url}`);
    }
}