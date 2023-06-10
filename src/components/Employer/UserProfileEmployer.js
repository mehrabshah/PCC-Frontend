
import React, { useState } from 'react';
import Info from './Info';
import Jobs from './Jobs';
export default function () {
    const tests = [
        { id: 1, name: 'test1', },
        { id: 2, name: 'test2', },
        { id: 3, name: 'test3', },
    ];
    const rendertest = tests.map((test) => (
        <div key={test.id} className="flex-col flex space-y-4">
            <div className='flex flex-row justify-between items-center space-y-4'>
                <div className='text-3xl'>
                    {test.name}
                </div>
                <div>
                    <div className='flex items-center justify-center h-12 text- xl bg-blue-700 w-24 text-white hover:bg-blue-900 '>
                        <button>click here</button>
                    </div>
                </div>
            </div>
            <div className="h-[0.01rem]  bg-black w-72">
            </div>
        </div>
    ));
    const [activeTab, setActiveTab] = useState(1);
    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <>
            {/* container */}
            <div className="h-screen w-screen bg-[#f8fafb] overflow-x-hidden box-border m-0 p-0 ">
                <div className="lg:max-w-6xl  lg:mx-auto ">
                    {/* container-inner */}
                    <div className="p-4">
                        <div className="lg:flex lg:flex-row lg:space-x-7 flex flex-col ">
                            {/* Left */}
                            <div className=" mt-8 pt-8 pb-8 lg:w-[30vw] bg-purple-700 border / border-gray-200 ">
                                {/* Upper                            */}
                                <div className='flex flex-col items-center space-y-6 '>
                                    {/* Avatar */}
                                    <div className="h-[12rem] w-[12rem] rounded-[6rem]  border-4 overflow-hidden">
                                        <img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" className="w-64 overflow-hidden" alt=""></img>
                                    </div>                                    
                                    <div>
                                        <h1 className="text-3xl / font-medium">Mehrab Ali</h1>
                                    </div>
                                    <div className="flex flex-row / space-x-4">
                                        <div className='flex items-center justify-center / h-12 text-xl bg-blue-700 w-24 text-white hover:bg-blue-900' onClick={() => handleTabClick(1)}>
                                            <button>Info</button>
                                        </div>
                                        <div className='flex items-center justify-center h-12 text- xl bg-blue-700 w-24 text-white hover:bg-blue-900 ' onClick={() => handleTabClick(2)}>
                                            <button>Jobs</button>
                                        </div>
                                    </div>
                                    <div className='h-[0.09rem] / bg-black w-72'>
                                    </div>
                                </div>
                                {/* Lower */}
                                <div className='flex flex-col items-center space-y-6 pt-4'>
                                    <div className="text-3xl font-medium uppercase">Attempt test </div>
                                    <div>
                                        {rendertest}
                                    </div>
                                </div>
                            </div>
                            {/* right */}
                            <div className="flex flex-col lg:w-[70vw]   mt-8">
                                {activeTab ===1 && <Info></Info>}
                                {activeTab ===2 && <Jobs></Jobs>} 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
