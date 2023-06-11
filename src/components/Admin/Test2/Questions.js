import React from 'react'
import { useSelector } from 'react-redux'
import Options from './Options';
export default function Questions() {
    const array2 = useSelector((state) => state.test2Array);
  return (
    <>
        
       <div>
       <ul className='w-full'>
        {array2.map((item) => (
           <Options index={item.id}  item={item.text}></Options>               
        ))}
        
      </ul> 
    
    </div>    
    </>
  )
}
