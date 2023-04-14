import React, { useState } from 'react';
export default function Signupform() {
    const [Username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        // Add code to submit form data to server or perform other actions
    };

    return (
        <div className='w-screen / h-screen bg-[#f8fafb]'>
            <div className='w-[65%] h-screen mx-auto flex flex-col items-start  justify-center md:flex-row md:w-[100%] md:container md:mx-auto md:items-center md:justify-center
              md:space-x-24
            '>
                <div className='md:w-[35%]'>
                    <img src="./images/Hero.svg" alt="image"></img>

                </div>
                <form onSubmit={handleSubmit} className="flex-col  space-y-16 w-full md:w-[25%]">
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
