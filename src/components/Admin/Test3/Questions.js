import React from 'react'
import { useSelector } from 'react-redux'
import Options from './Options';
export default function Questions() {
    const array3= useSelector((state) => state.test3Array);
  return (
    <>
        {console.log(array3)}
       <div>
       <ul className='w-full'>
        {array3.map((item) => (
           <Options index={item.id}  item={item.text}></Options>               
        ))}
        
      </ul> 
    
    </div>    
    </>
  )
}
