import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Info from '../UserProfile/Info';
import { Link } from 'react-router-dom';
import Testname from './Testname';
export default function () {
    
return (
    <>
        {/* container */}
        <div className="h-screen w-screen bg-[#000000]   overflow-x-hidden box-border m-0 p-0 ">
            <div className="lg:max-w-6xl  lg:mx-auto ">
                {/* container-inner */}
                <div className="m-6">                    
                    <div className="lg:flex lg:flex-row lg:space-x-7 h-[90vh]  flex flex-col ">                    
                        {/* Left */}
                        <div className=" mt-8 pt-8 pb-8 lg:w-[30%] bg-[#262A56] border  border-gray-200  ">
                            {/* Upper                            */}
                            <div className='flex flex-col items-center space-y-6 '>
                                {/* Avatar */}
                                <div className="h-[12rem] w-[12rem] rounded-[6rem]  border-4 overflow-hidden">
                                    <img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" className="w-64 overflow-hidden" alt=""></img>
                                </div>
                                <div>
                                    <h1 className="text-3xl text-[#E3CCAE] font-medium">Mehrab Ali</h1>
                                </div>

                                <div className='h-[0.09rem] / bg-[#f1f1f1] w-72'>
                                </div>
                            </div>
                            {/* Lower */}
                            <div className='flex flex-col items-center space-y-6 pt-4'>
                                <div className="text-3xl font-medium uppercase text-[#E3CCAE]">Select test </div>
                                <p className=' / text-center pl-8 pr-8 font-medium text-[#E3CCAE]'>Select test for View, Edit, Delete and Add questionnaire</p>
                                <div>
                                   <Testname></Testname>
                                   <button className='bg-[#B8621B] h-12 w-32  text-[#E3CCAE] hover:bg-blue-900 ' >
                                    <Link to="/" >Logout</Link>
                                   </button>
                                </div>
                            </div>

                        </div>
                        {/* right */}
                        <div className="flex flex-col lg:w-[70%] mt-8">    
                          <Info/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
)
};
