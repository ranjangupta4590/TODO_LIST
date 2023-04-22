import React from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'

const Items = ({ data,updateMode ,deleteTodo}) => {
    return (
        <div>
            
            <div className='flex justify-between text-[20px]  relative mt-4 pt-2 pr-2 pb-2 pl-2 bg-rose-100 rounded-md'>
            <div >
                {data}
            </div>
            <div className=' flex gap-2  pt-1 pr-2'>
                <AiFillEdit className='cursor-pointer' onClick={updateMode}/>
                <AiFillDelete className='cursor-pointer'onClick={deleteTodo}/>
            </div>
            </div>

        </div>
    )
}

export default Items;