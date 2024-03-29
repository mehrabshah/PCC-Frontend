import React from "react";
import { useNavigate } from 'react-router-dom';
import "./Signup.css";
import { useForm } from "react-hook-form";
import { signUpUser } from "./../../services/Authservices";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { InputField } from "../../components/InputField";
import { RadioButton } from "../../components/RadioButton";
const inputFields = [
  { label: "Username", type: "text", name: "username", placeholder: "Name" },
  { label: "Email", type: "text", name: "email", placeholder: "Email" },
  {
    label: "Password",
    type: "password",
    name: "password",
    placeholder: "Password",
  },

];
const roleOptions = [
  { label: "HR", value: "hr" },
  { label: "Admin", value: "admin" },
  { label: "User", value: "user" },
];
export const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const responseData = await signUpUser(data);
      console.log("Registration successful!", responseData);
      navigate('/signin');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="auth-container">
      <div className=" card bg-white px-2 py-6 lg:w-1/3 md:w-1/2 w-full">
        <h1 className="text-center font-bold text-2xl">Sign Up</h1>
        <div className="card-body p-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            {inputFields.map((field) => (
              <InputField
                key={field.name}
                label={field.label}
                type={field.type}
                register={register(field.name, {
                  required: `${field.label} is required`,
                })}
                placeholder={field.placeholder}
                error={errors[field.name]}
              />
            ))}
            <RadioButton
              label="Select Role"
              options={roleOptions}
              register={register("user_type", { required: "Role is required" })}
              error={errors.role}
            />

            <input
              type="submit"
              className="w-full bg-[#06CA8C] hover:bg-[#059476] text-[#ffffff] cursor-pointer p-2 mt-5"
            />
          </form>
        </div>

        <div className="text-center mt-5">
          <span>
            Already Have an Account{" "}?
            <Link className="text-red-500 cursor-pointer" to="/signin">
              Log in
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};
