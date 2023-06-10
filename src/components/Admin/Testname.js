import React, { useState } from 'react';
export default function Testname() {
    const tests = [
        { id: 1, name: 'Test1', },
        { id: 2, name: 'Test2', },
        { id: 3, name: 'Test3', },
    ];
    const allTests = tests.map((test) => (
        
            <div key={test.id} className="flex-col flex mb-8">
                <div className='flex flex-row justify-between items-center space-x-8'>
                    <div className='text-3xl text-[#E3CCAE]'>
                        {test.name}
                    </div>  
                    <button className='flex items-center justify-center h-12 text- xl bg-[#B8621B] w-40 text-[#E3CCAE] hover:bg-blue-900' >Click here</button>
                </div>
            </div>
        
    ));
    return (
        <div className="overflow-x-hidden box-border m-0 p-0" >
            { allTests }
        </div>
    )
}
