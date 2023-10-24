import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function NewPassword() {
    const navigate = useNavigate();
    const [password, setpassword] = useState('');
    const handleChange = (e) => {
        setpassword(e.target.value);
    };
    const [confirmPassword, setConfirmPassword] = useState('');
    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here

        navigate('/signin');


    };
    return (
        <>
            <div className="h-screen w-screen bg-[black] overflow-x-hidden box-border m-0 p-0 ">
                <div className="lg:max-w-xl  lg:mx-auto  h-full">
                    {/* container-inner */}
                    <div className="p-4 flex flex-row h-full items-center justify-center ">
                        <div className=" flex flex-col w-[80%] bg-[#262A56] pl-8 pr-8 pt-16 pb-16  space-y-6 border  border-gray-200   ">
                            <div className='/ space-y-1'>
                                <div>
                                    <h1 className='text-3xl text-[#E3CCAE] font-bold '>Create new password</h1>
                                </div>
                                <div>
                                    <p className='text-md  / font-light break-words  text-[#E3CCAE]  '>Your new password must be different from previous used password</p>
                                </div>
                            </div>

                            <div>
                                <form onSubmit={handleSubmit} className="/ space-y-8">
                                    <div className="mb-4 space-y-2">
                                        <label className="text-[#E3CCAE] text-xl" >
                                            password
                                        </label>
                                        <input
                                            className="shadow appearance-none border bg-[#B8621B] text-[#E3CCAE] h-16 rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                            id="password"
                                            type="password"
                                            placeholder="Enter your password address"
                                            value={password}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-4 space-y-2">
                                        <label className="text-[#E3CCAE] text-xl">
                                            Confirm Password
                                        </label>
                                        <input
                                            className="shadow appearance-none border bg-[#B8621B] text-[#E3CCAE] h-16 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                            id="confirmPassword"
                                            type="password"
                                            placeholder="Confirm your password"
                                            value={confirmPassword}
                                            onChange={handleConfirmPasswordChange}
                                            required
                                        />
                                    </div>
                                    <div className="flex items-center  w-full justify-end">
                                        <button
                                            className="bg-[#B8621B] / h-14 / w-44 hover:bg-blue-900 text-[#E3CCAE]   font-bold flex flex-row items-center justify-center"
                                            type="submit"
                                        >
                                            Reset Password
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>









        </>
    )
}
