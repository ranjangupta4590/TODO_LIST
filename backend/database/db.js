const mongoose=require('mongoose')

require('dotenv').config();

// console.log(process.env.MONGO_URI)
const ConnectDB = async()=>{
     try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{
         useNewUrlParser: true,
         useUnifiedTopology: true,
         // useFindAndModify: true,
       });
       
      console.log(`mongo connection successful : ${conn.connection.host}`)
     } 
     catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit();
     }
};

module.exports = ConnectDB;