import React from 'react'
import { useSelector } from 'react-redux'
import Options from './Options';
export default function Questions() {
    const array = useSelector((state) => state.array);
  return (
    <>
       <div>
       <ul className='w-full'>
        {array.map((item) => (
           <Options index={item.id}  item={item.text}></Options>               
        ))}
        
      </ul> 
    
    </div>    
    </>
  )
}
