import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { modifyCount } from '../../redux/count';


export default function Testname() {
    const tests = [
        { id: 1, name: 'test1', },
        { id: 2, name: 'test2', },
        { id: 3, name: 'test3', },
    ];
    const [activeTest, setActiveTest] = useState(1);
    const [activeAllTest, setActiveAllTest] = useState(true);
    const handleTestClick = (tabId) => {
        setActiveTest(tabId);
        setActiveAllTest(false)

    };
    const rendertest = tests.map((test) => (
        <div key={test.id} className="flex-col flex space-y-4">
            <div className='flex flex-row justify-between items-center space-y-4'>
                <div className='text-3xl text-[#E3CCAE]'>
                    {test.name}
                </div>
                <div>
                    <div className='flex items-center justify-center h-12 text- xl bg-[#B8621B] w-24 text-[#E3CCAE] hover:bg-blue-900 '>
                        <button onClick={() => handleTestClick(test.id)}>Click here</button>
                    </div>
                </div>
            </div>
            <div className="h-[0.09rem]  bg-[#f1f1f1] w-72">
            </div>
        </div>
    ))
    // Example: Filter objects with the desired id
    const filteredData = tests.filter(item => item.id === activeTest);
    const [textareaValue, setTextareaValue] = useState('');

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };

    const dispatch=useDispatch();
    
    const indivitualtest = filteredData.map((test) => (
        <div>
            <div key={test.id} className="flex-col flex space-y-4">
                <div className='flex flex-col justify-between items-center space-y-4'>
                    <div className='text-3xl text-[#E3CCAE]'>
                        {test.name}
                    </div>
                    <div className='flex flex-col  items-center justify-center / space-y-8'>
                        <div className='flex items-center justify-center h-12 text- xl bg-[#B8621B] w-40 text-[#E3CCAE] hover:bg-blue-900 '>
                            <button onClick={()=>dispatch(modifyCount(1))} >Add Questionnaire</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>





    ));
    return (
        <div className="overflow-x-hidden box-border m-0 p-0" >
            {activeAllTest? rendertest: indivitualtest }
        </div>
    )
}
