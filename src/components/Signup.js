import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Signup() {
  const initialFormData = [
    {
      label: 'Username',
      type: 'text',
      name: 'Username',
      id: 'Username',
      placeholder: 'Username',
    },
    {
      label: 'Email',
      type: 'email',
      name: 'Email',
      id: 'Email',
      placeholder: 'Email',
    },
    {
      label: 'Age',
      type: 'number',
      name: 'Age',
      id: 'Age',
      placeholder: 'Age',
    },
    {
      label: 'Password',
      type: 'password',
      name: 'password',
      id: 'password',
      placeholder: 'Password',
    },
    {
      label: 'Confirm Password',
      type: 'password',
      name: 'Confirmpassword',
      id: 'Confirmpassword',
      placeholder: 'Confirm Password',
    },
  ];

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const updatedFormData = formData.map((field) =>
      field.name === name ? { ...field, value } : field
    );
    setFormData(updatedFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Add code to submit form data to server or perform other actions
  };
  const [selectedOption, setSelectedOption] = useState('');
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="w-screen bg-[#f8fafb] / overflow-x-hidden box-border p-0 m">
      <div
        className="w-[65%] h-screen mx-auto flex flex-col items-start  justify-center sm:flex-row sm:w-[100%] xl:container xl:mx-auto sm:items-center sm:justify-center
              sm:space-x-24
            "
      >
        <div className="sm:w-[40%]">
          <img src="./images/Hero.svg" alt=""></img>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex-col  space-y-16 w-full sm:w-[30%]"
        >
          {/* para and heading code */}
          <hr />
          <hr />
          <hr />
          <hr />

          <div className="w-full">
            <div className="flex flex-col space-y-9 w-full">
              <div className="flex flex-col space-y-5">
                <div className="text-Sign-size  font-[Lucida Console] font-[540] mt-2">
                  Sign Up
                </div>
                {/* <p className="text-1xl text-[#b3b3b3]">
                  Lorem ipsum dolor sit amet elit. Sapiente sit aut eos
                  consectetur adipisicing.adipising
                </p> */}
              </div>
              {/* UserName and Password fields code */}
              <div className="flex flex-col">
                {initialFormData.map((field) => (
                  <div key={field.id} className="mb-2">
                    <label htmlFor={field.id} className="sr-only">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      id={field.id}
                      placeholder={field.placeholder}
                      value={field.value}
                      onChange={handleInputChange}
                      className="px-3 py-2 outline-none sm:h-[5rem] h-[3rem]  w-full rounded-b-xl bg-[#edf2f5]"
                    />
                  </div>
                ))}
              </div>
              <div className="space-x-8 ">
                <h1 className="pb-4 ">Choose Role</h1>
                <label className="">
                  <input
                    className="ml-2 mr-2 accent-black"
                    type="radio"
                    value="user"
                    checked={selectedOption === 'user'}
                    onChange={handleOptionChange}
                  />
                  User
                </label>

                <label>
                  <input
                    className=" form-radio / accent-black  ml-2 mr-2"
                    type="radio"
                    value="admin"
                    checked={selectedOption === 'admin'}
                    onChange={handleOptionChange}
                  />
                  Admin
                </label>

                <label>
                  <input
                    className="ml-2 mr-2 accent-black"
                    type="radio"
                    value="employer"
                    checked={selectedOption === 'employer'}
                    onChange={handleOptionChange}
                  />
                  Employer
                </label>
              </div>

              <div className="flex flex-row justify-between">
                <div className="flex flex-row space-x-2">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    className="bg-[#6c63ff] form-checkbox h-5 w-5 "
                  />
                  <label for="rememberMe">Remember me</label>
                </div>
                <div>Forgot Password</div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <Link to="/">
              <button
                type="submit"
                className="bg-[#6c63ff] h-[3rem]  hover:bg-orange-700   text-white w-full"
                style={{
                  fontFamily: 'Lucida Console',
                  fontWeight: 'bold',
                  fontSize: '1.2rem',
                }}
              >
                Signup
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
