import axios from 'axios';

const basrUrl="http://localhost:5000/"

const allTodo = async (setTodo)=>{
try {
    const {data} =await axios.get(basrUrl);
    // console.log(data);
    setTodo(data);
} catch (error) {
    console.log(`Error: ${error.message}`);
}
   
}

export  {allTodo};