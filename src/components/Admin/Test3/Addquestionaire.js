import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { modifyCount } from '../../../redux/count';
import { test3AddQuestion } from '../../../redux/test3Questionaire';
export default function Addquestionaire() {
  const [text, setText] = useState('');
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const dispatch =useDispatch()
  return (
    <>
      <div className='w-full h-96 bg-[#262A56] rounded-2xl'>
          <div className='flex flex-row  justify-center  w-full h-full items-center'>
            <div className='flex flex-col justify-center items-start / space-y-4'>
                <h1 className=" text-3xl text-[#E3CCAE] / font-bold">Add Questionaire </h1>
                <textarea value={text} className="w-96  text-[#E3CCAE]  h-[10rem] bg-[#B8621B] p-4 placeholder:shadow-sm placeholder:pt-[0.06rem] placeholder:pl-[0.3rem] placeholder:text-[#E3CCAE]" placeholder='Write questionaire her' onChange={handleChange}/>
                <button  className="bg-[#B8621B] h-10 hover:bg-blue-900 text-[#E3CCAE] w-32" onClick={()=>{dispatch(test3AddQuestion(text))}}>Add</button>
            </div> 
          </div>
      </div>
    </>
  )
}
