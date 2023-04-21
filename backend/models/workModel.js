const mongoose=require('mongoose');

const workModelSchema =new mongoose.Schema({
    text :{
       type:String,
       require:true
    }
})

module.exports =mongoose.model('Work',workModelSchema);