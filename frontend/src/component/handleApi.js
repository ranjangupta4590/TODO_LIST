import axios from 'axios';

const baseUrl="http://localhost:5000/"

const allTodo = async (setTodo)=>{
try {
    const {data} =await axios.get(baseUrl);
    // console.log(data);
    setTodo(data);
} catch (error) {
    console.log(`Error: ${error.message}`);
}
   
}

const addTodo = async (data,setData,setTodo)=>{
try {
    await axios.post(`${baseUrl}`,{data})
    setData("");
    allTodo(setTodo);
} catch (error) {
    console.log(`Error: ${error.message}`);
}
}

const updateTodo = async (todoId,data,setData,setTodo,setUpdate)=>{
try {
    await axios.post(`${baseUrl}update/:id`,{_id:todoId,data})
    setData("");
    setUpdate(false);
    allTodo(setTodo);
} catch (error) {
    console.log(`Error: ${error.message}`);
}
}

const deleteTodo = async (_id,setTodo)=>{
try {
    await axios.post(`${baseUrl}delete/:id`,{_id})
    allTodo(setTodo);
} catch (error) {
    console.log(`Error: ${error.message}`);
}
}

export  {allTodo,addTodo,updateTodo,deleteTodo};