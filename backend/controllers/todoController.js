const workModel =require('../models/workModel');

const addTodo =async (req,res)=>{
    try {
        const newTodo =await workModel.create({
            data: req.body.data,
            createdAt:Date.now()
        });
        
        await newTodo.save();
        
        console.log("Added Seccessfully.....");
        return res.status(200).json(newTodo);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

const allTodo =async (req,res)=>{
    try {
        const newTodo =await workModel.find({}).sort({'createdAt':-1})
        
        return res.status(200).json(newTodo);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}


const updateTodo =async (req,res)=>{
    try {
        const {_id,data}=req.body;
        
        const toDo= await workModel.findByIdAndUpdate(_id,{data});
        
        console.log("updated Seccessfully.....");
        return res.status(200).json(toDo);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}


const deleteTodo =async (req,res)=>{
    try {
        const {_id}=req.body;
        
        const toDo= await workModel.findByIdAndDelete(_id);
        
        console.log("Deleted Seccessfully.....");
        return res.status(200).json(toDo);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

module.exports = {allTodo,addTodo,updateTodo,deleteTodo};