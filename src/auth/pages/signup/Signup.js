import React from "react";
import "./Signup.css";
import { useForm } from "react-hook-form";
import { signUpUser } from "./../../services/Authservices";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
export const Signup = () => {
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
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="auth-container">
      <div className=" card bg-white px-2 py-6  lg:w-1/3  md:w-1/2   w-full">
        <h1 className="text-center font-bold text-2xl">Sign Up</h1>
        <div className="card-body  p-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group mt-2">
              {" "}
              <label>Username:</label>
              <input
                className="w-full border border-gray-300 rounded p-2"
                {...register("username", {
                  required: "Username is required",
                })}
                placeholder="Name"
              />
              {errors.username && (
                <p className="text-red-500">{errors.username.message}</p>
              )}
            </div>

            <div className="form-group mt-2">
              {" "}
              <label>Email:</label>
              <input
                className="w-full border border-gray-300 rounded p-2"
                {...register("email", {
                  required: "Email is required",
                  pattern: /^\S+@\S+$/i,
                })}
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="form-group mt-2">
              <label>Password:</label>
              <input
                className="w-full border border-gray-300 rounded p-2"
                {...register("password", {
                  required: "Password is required",
                  minLength: 6,
                })}
                type="password"
                placeholder="Password"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>

            <div className="form-group mt-2 ">
              <label>Select Role:</label>
              <div className="flex space-x-2">
              <div>
                <input
                  type="radio"
                  {...register("role", { required: "Role is required" })}
                  value="hr"
                  id="roleHr"
                />
                <label htmlFor="roleHr" className="ml-2">
                  HR
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  {...register("role", { required: "Role is required" })}
                  value="admin"
                  id="roleAdmin"
                />
                <label htmlFor="roleAdmin" className="ml-2">
                  Admin
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  {...register("role", { required: "Role is required" })}
                  value="user"
                  id="roleUser"
                />
                <label htmlFor="roleUser" className="ml-2">
                  User
                </label>
              </div>
              </div>


              {errors.role && (
                <p className="text-red-500">{errors.role.message}</p>
              )}
            </div>

            <input
              type="submit"
              className="w-full bg-[#06CA8C]  hover:bg-[#059476]   text-[#ffffff] cursor-pointer  p-2 mt-5"
            />
          </form>
        </div>

        <div className="text-center mt-5">
          <span>
            Already Have an Account{" "}?
            <Link className="text-red-500 cursor-pointer" to="/signin">Log in</Link>
          </span>
        </div>
      </div>
    </div>
  );
};
