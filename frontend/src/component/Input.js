import React, { useEffect, useState } from 'react'
import Items from './Items';
import {allTodo,addTodo,updateTodo,deleteTodo} from './handleApi';

const Input = () => {
const [todo,setTodo]=useState([]);
const [data,setData]=useState("");
const [update,setUpdate]=useState(false);
const [todoId,setTodoId]=useState("");

useEffect((e)=>{
   allTodo(setTodo);
},[])

const updateMode =(_id,data)=>{
    setUpdate(true);
    setData(data);
    setTodoId(_id);
}
  return (
    <div>
        <div className='pt-10'>
            <input  className='lg:w-[30rem] sm:w-[20rem] text-2xl  border-b-[2px] border-pink-400 outline-none' type='text' placeholder='Enter your work...' value={data} onChange={(e)=>setData(e.target.value) }required />        
        </div>
        <div className='pt-2'>
          <button type='submit' className=' text-[20px] rounded-full pl-4 pr-4 items-center bg-pink-600 text-white hover:bg-blue-600' onClick={update ? ()=>updateTodo(todoId,data,setData,setTodo,setUpdate): ()=>addTodo(data,setData,setTodo)}>
          {update?"Update":"Add"}
          </button>
        </div>
        <div className='pt-6'>
        {/* <Items/> */}
        
        {todo.map((item)=><Items 
            key={item._id}
            data={item.data}
            
            updateMode ={()=>updateMode(item._id,item.data)}
            deleteTodo={()=> deleteTodo(item._id,setTodo)}
        />)}
        
        </div>
    </div>
  )
}

export default Input;