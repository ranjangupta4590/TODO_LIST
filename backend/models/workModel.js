const mongoose=require('mongoose');

const workModelSchema =new mongoose.Schema({
    text :{
       type:String,
       require:true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports =mongoose.model('work',workModelSchema);