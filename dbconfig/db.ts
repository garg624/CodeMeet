import mongoose from 'mongoose';

async function connect(){
    try {
        const db=await mongoose.connect(process.env.MONGODB_URI!);
        console.log("MONGO URI",process.env.MONGODB_URI!)
        console.log('Database connected to:',db.connection.name);

        db.connection.on('error', (err) => {
            console.log(err);
          });
        db.connection.on("connected",()=>{
            console.log("Database connected sucessfully")
        })
    } catch (error) {
        console.log("Something went wrong while connecting to db")
        
    }
}
export {connect}