import React, { useState } from 'react';
export default function Signup() {
    const [formData, setFormData] = useState([]);
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevFormData) =>
        prevFormData.map((field) => (field.name === name ? { ...field, value } : field))
      );
    };
    const initialFormData = [
        {
            label: 'Username',
            type: 'text',
            name: 'Username',
            id: 'Username',
            placeholder: 'Username',
            value: '',
            onChange: handleInputChange,
        },
        {
            label: 'Email',
            type: 'email',
            name: 'Email',
            id: 'Email',
            placeholder: 'Email',
            value: '',
            onChange: handleInputChange,
        },
        {
            label: 'Age',
            type: 'number',
            name: 'Age',
            id: 'Age',
            placeholder: 'Age',
            value: '',
            onChange: handleInputChange,
        },
        {
            label: 'Password',
            type: 'password',
            name: 'password',
            id: 'password',
            placeholder: 'Password',
            value: '',
            onChange: handleInputChange,
        },
        {
            label: 'Confirm Password',
            type: 'password',
            name: 'Confirmpassword',
            id: 'Confirmpassword',
            placeholder: 'Confirm Password',
            value: '',
            onChange: handleInputChange,
        },
    ];       
    const handleSubmit = (event) => {
        event.preventDefault();
        // Add code to submit form data to server or perform other actions
    };

    return (
        <div className='w-screen / h-screen bg-[#f8fafb] / overflow-x-hidden box-border p-0 m'>
            <div className='w-[65%] h-screen mx-auto flex flex-col items-start  justify-center sm:flex-row sm:w-[100%] xl:container xl:mx-auto sm:items-center sm:justify-center
              sm:space-x-24
            '>
                <div className='sm:w-[40%]' >
                    <img src="./images/Hero.svg" alt=""></img>

                </div>
                <form onSubmit={handleSubmit} className="flex-col  space-y-16 w-full sm:w-[30%]">
                    {/* para and heading code */}
                    <div className='w-full'>
                        <div className='flex flex-col space-y-9 w-full'>
                            <div className='flex flex-col space-y-5'>
                                <div className='text-Sign-size  font-[sans-serif] font-[540]'>Sign Up</div>
                                <p className='text-1xl text-[#b3b3b3]'>Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.adipising</p>
                            </div>
                            {/* UserName and Password fields code */}
                            <div className='flex flex-col'>
                                {initialFormData.map((field) => (
                                    <div key={field.id}>
                                        <label htmlFor={field.id} className="sr-only">
                                            {field.label}
                                        </label>
                                        <input
                                            type={field.type}
                                            name={field.name}
                                            id={field.id}
                                            placeholder={field.placeholder}
                                            value={field.value}
                                            onChange={field.onChange}
                                            className="px-3 py-2 outline-none sm:h-[5rem] h-[3rem]  w-full rounded-b-xl bg-[#edf2f5]"
                                        />
                                    </div>
                                ))}


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
