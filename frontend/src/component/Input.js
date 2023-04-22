import React, { useEffect, useState } from 'react'
import Items from './Items';
import {allTodo} from './handleApi';

const Input = () => {
const [todo,setTodo]=useState([]);

useEffect(()=>{
   allTodo(setTodo);
},[])

  return (
    <div>
        <div className='pt-10'>
            <input className='lg:w-[30rem] sm:w-[20rem] text-2xl  border-b-[2px] border-pink-400 outline-none' type='text' placeholder='Enter your work...' />        
        </div>
        <div className='pt-2'>
          <button className=' text-[20px] rounded-full pl-4 pr-4 items-center bg-pink-600 text-white hover:bg-blue-600'>Add</button>
        </div>
        <div className='pt-6'>
        {/* <Items/> */}
        
        {todo.map((item)=><Items 
            key={item._id}
            data={item.data}
        />)}
        
        </div>
    </div>
  )
}

export default Input;