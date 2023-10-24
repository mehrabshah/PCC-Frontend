import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Reset() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const handleChange = (e) => {
        setEmail(e.target.value);
    };
    


    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here

        navigate('/mail');

        
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
                                    <h1 className='text-3xl text-[#E3CCAE] font-bold '>Reset password</h1>
                                </div>
                                <div>
                                    <p className='text-md  / font-light break-words  text-[#E3CCAE]  '>Enter the email associated with your account and we'll send an email with instructions
                                        reset your password</p>
                                </div>
                            </div>

                            <div>
                                <form onSubmit={handleSubmit} className="/ space-y-8">
                                    <div className="mb-4 space-y-2">
                                        <label className="text-[#E3CCAE] text-xl" >
                                            Email Address:
                                        </label>
                                        <input
                                            className="shadow appearance-none border bg-[#B8621B] text-[#E3CCAE] h-16 rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                            id="email"
                                            type="email"
                                            placeholder="Enter your email address"
                                            value={email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="flex items-center  w-full justify-end">
                                        <button
                                            className="bg-[#B8621B] / h-12 w-32 hover:bg-blue-900 text-[#E3CCAE]   font-bold flex flex-row items-center justify-center"
                                            type="submit"
                                        >
                                            Submit
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
