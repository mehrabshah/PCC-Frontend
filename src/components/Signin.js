import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
export default function Signin() {
    const [Username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };
   
    const [selectedOption, setSelectedOption] = useState('');
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        console.log(event.target.value)
    };
    const navigate = useNavigate(); // Initialize useNavigate hook
    const handleSubmit = (event) => {
        event.preventDefault();
        // Redirect based on selected role
        switch (selectedOption) {
            case 'user':
                navigate('/user'); // Use navigate to redirect
                break;
            case 'admin':
                navigate('/admin');
                break;
            case 'employer':
                navigate('/employer');
                break;
            default:
                // Handle other cases or display an error message
                break;
        }
        // Add code to submit form data to server or perform other actions
    };




    return (
        <div className='w-screen / h-screen bg-[#f8fafb]'>
            <div className='w-[65%] h-screen mx-auto flex flex-col items-start  justify-center sm:flex-row sm:w-[100%] xl:container xl:mx-auto sm:items-center sm:justify-center
              sm:space-x-24
            '>
                <div className='sm:w-[40%]' >
                    <img src="./images/Hero.svg" alt="image"></img>

                </div>
                <form onSubmit={handleSubmit} className="flex-col  space-y-16 w-full sm:w-[30%]">
                    {/* para and heading code */}
                    <div className='w-full'>
                        <div className='flex flex-col space-y-9 w-full'>
                            <div className='flex flex-col space-y-5'>
                                <div className='text-Sign-size  font-[sans-serif] font-[540]'>Sign In</div>
                                <p className='text-1xl text-[#b3b3b3]'>Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.adipising</p>
                            </div>
                            {/* UserName and Password fields code */}
                            <div className='flex flex-col'>
                                <div>
                                    <label htmlFor="Username" className="sr-only">
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        name="Username"
                                        id="Username"
                                        placeholder="Username"
                                        value={Username}
                                        onChange={handleUsernameChange}
                                        className="px-3 py-2 outline-none  / h-[5rem]  w-full rounded-t-xl  bg-[#edf2f5] border-b-2 border"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="sr-only">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={handlePasswordChange}
                                        className="px-3 py-2 outline-none  h-[5rem]  w-full rounded-b-xl bg-[#edf2f5]"
                                    />
                                </div>
                            </div>
                            <div className='space-x-8 '>
                                <h1 className='pb-4 '>Choose Role</h1>
                                <label className=''>
                                    <input
                                        className='ml-2 mr-2 accent-black'
                                        type="radio"
                                        value="user"
                                        checked={selectedOption === 'user'}
                                        onChange={handleOptionChange}
                                    />
                                    User
                                </label>

                                <label>
                                    <input
                                        className=' form-radio / accent-black  ml-2 mr-2'
                                        type="radio"
                                        value="admin"
                                        checked={selectedOption === 'admin'}
                                        onChange={handleOptionChange}
                                    />
                                    Admin
                                </label>

                                <label>
                                    <input
                                        className='ml-2 mr-2 accent-black'
                                        type="radio"
                                        value="employer"
                                        checked={selectedOption === 'employer'}
                                        onChange={handleOptionChange}
                                    />
                                    Employer
                                </label>
                            </div>



                            <div className='flex flex-row justify-between'>
                                <div className='flex flex-row space-x-2'>
                                    <input type="checkbox" id="rememberMe" name="rememberMe" className='bg-[#6c63ff] form-checkbox h-5 w-5 ' />
                                    <label for="rememberMe">Remember me</label>
                                </div>
                                <div>
                                    Forgot Password
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full'>
                        <button type="submit" className="bg-[#6c63ff] h-[4rem] / text-white w-full">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
