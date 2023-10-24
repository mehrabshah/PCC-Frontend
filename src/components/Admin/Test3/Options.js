import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {test3DeleteQuestion } from '../../../redux/test3Questionaire';
const Options = (props) => {
  const [selectedOption, setSelectedOption] = useState('');
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
   const dispatch=useDispatch(
   );

  return (
  <>

    <div className="  bg-[#262A56] pt-12 pb-12 w-full  box-border flex flex-row items-center justify-center ">
    <div className='w-[90%]  bg-[#262A56] '>
      <div className='flex flex-col space-y-8 w-full'>
        <div className="text-[#E3CCAE] text-3xl  break-words" key={props.index}>{props.item}</div>
        <form >
          <div className="mb-4">
            <div className="flex items-center  justify-between">
              <div className='text-xl  font-semibold  text-[#6cbe9b]'>Agree</div>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio h-14 w-14  accent-[#6cbe9b] "
                  name="option"
                  value="option1"
                  checked={selectedOption === 'option1'}
                  onChange={handleOptionChange}
                />
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio / h-11 w-11 accent-[#6cbe9b]"
                  name="option"
                  value="option2"
                  checked={selectedOption === 'option2'}
                  onChange={handleOptionChange}
                />
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio h-8 w-8 accent-[#6cbe9b]"
                  name="option"
                  value="option3"
                  checked={selectedOption === 'option3'}
                  onChange={handleOptionChange}
                />
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 accent-[#ad92b9]"
                  name="option"
                  value="option4"
                  checked={selectedOption === 'option4'}
                  onChange={handleOptionChange}
                />
              </label>
              <label className="inline-flex items-center ">
                <input
                  type="radio"
                  className="form-radio h-8 w-8 accent-[#ad92b9]"
                  name="option"
                  value="option5" checked={selectedOption === 'option5'}
                  onChange={handleOptionChange}
                />
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio h-11 w-11 accent-[#ad92b9]"
                  name="option"
                  value="option6"
                  checked={selectedOption === 'option6'}
                  onChange={handleOptionChange}
                />
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio h-14 w-14 accent-[#ad92b9]"
                  name="option"
                  value="option7"
                  checked={selectedOption === 'option7'}
                  onChange={handleOptionChange}
                />
              </label>
              <div className='text-xl font-semibold text-[#ad92b9]'>Disagree</div>
            </div>
          </div>
        </form>
        <div className='flex flex-row items-center justify-between'>
          
          <button className='bg-[#B8621B] text-[#E3CCAE] h-10 w-32' onClick={()=>dispatch(test3DeleteQuestion(props.index))}>Delete</button>
          <button className='bg-[#B8621B] text-[#E3CCAE] h-10 w-32'>Edit</button>
        </div>
        
      </div>
      </div>
    </div>
    <div className='bg-black h-8 w-full'></div>
  </>
  );
};

export default Options;
