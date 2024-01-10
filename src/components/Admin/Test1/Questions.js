import React from 'react'
import { useSelector } from 'react-redux'
import Options from './Options';
export default function Questions() {
    const array1 = useSelector((state) => state.test1Array);
  return (
    <>
      
       <div>
       <ul className='w-full'>
        {array1.map((item) => (
           <Options index={item.id}  item={item.text}></Options>               
        ))}
        
      </ul> 
    
    </div>    
    </>
  )
}
