import React from 'react'
import { Link } from 'react-router-dom'
export default function Mail() {
    return (
        <>
            <div className="h-screen w-screen bg-[black] overflow-x-hidden box-border m-0 p-0 ">
                <div className="lg:max-w-xl  lg:mx-auto  h-full">
                    {/* container-inner */}
                    <div className="p-4 flex flex-row h-full items-center  justify-center ">
                        <div className=" flex flex-col w-[80%] bg-[#262A56] pl-8 pr-8 pt-16 pb-16  space-y-12 border  border-gray-200   ">
                            <div className='flex flex-col items-center justify-center space-y-2'>
                                <h1 className='text-3xl text-[#E3CCAE] font-bold '>Check your mail</h1>
                                <p className='text-md  / font-light break-words  text-[#E3CCAE] text-center'>We have sent a password recover instructions to your email. </p>
                            </div>
                            <div className='flex flex-col items-center justify-center space-y-6'>
                             <Link to="/newpassword"><button className='bg-[#B8621B] h-12 w-52 text-[#E3CCAE] hover:bg-blue-900'>Open email app</button></Link>
                                <p className='text-md  / font-light break-words  text-[#E3CCAE]'>Skip,I'll confirm later</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
