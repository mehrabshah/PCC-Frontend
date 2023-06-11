import React from 'react'
export default function Report() {
    return (
        <>
            <div className="h-screen w-screen bg-black overflow-x-hidden box-border m-0 p-0 ">
                <div className="lg:max-w-xl  lg:mx-auto  h-full">
                    {/* container-inner */}
                    <div className="p-4 flex flex-row h-full items-center justify-center ">
                        <div className=" flex flex-col w-[80%] bg-[#262A56] pl-8 pr-8 pt-16 pb-16 / space-y-12 border  border-gray-200   ">
                            <div className='text-[#E3CCAE] font-bold text-3xl flex flex-row items-center justify-center'>Report</div>
                            <div className='flex flex-col space-y-6'>
                                <div className='flex flex-col'>
                                    <div className='text-[#E3CCAE]'>Team Management</div>
                                    <div className='h-6 w-[20rem] rounded-lg bg-pink-600  flex flex-row justify-end items-center text-[#E3CCAE] '>70%</div>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='text-[#E3CCAE]'>Leadership</div>
                                    <div className='h-6 w-[24rem] rounded-lg  / bg-green-800 flex flex-row justify-end items-center text-[#E3CCAE]'>100%</div>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='text-[#E3CCAE]'>Consistenct</div>
                                    <div className='h-6 w-[17rem] rounded-lg / bg-red-600 flex flex-row justify-end items-center text-[#E3CCAE]'>60%</div>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='text-[#E3CCAE]'>Honesty</div>
                                    <div className='h-6 w-[23rem] rounded-lg / bg-indigo-600 flex flex-row justify-end items-center text-[#E3CCAE]'>90%</div>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='text-[#E3CCAE]'>Maturity</div>
                                    <div className='h-6 w-[15rem] rounded-lg / bg-sky-700 flex flex-row justify-end items-center text-[#E3CCAE]'>55%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
