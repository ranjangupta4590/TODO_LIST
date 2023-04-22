const express=require('express');
const cors=require('cors'); 
const ConnectDB =require("./database/db");
const routes= require('./routes/work');
require('dotenv').config();

const PORT=process.env.PORT;

const app=express();
app.use(cors());
app.use(express.json()); // to accept json data
ConnectDB();


app.use('/',routes);

app.listen(PORT,()=>console.log(`server is running on PORT ${PORT}`));