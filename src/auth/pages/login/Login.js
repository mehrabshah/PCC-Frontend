import React from "react";
import { useForm } from "react-hook-form";
import { logInUser } from "./../../services/Authservices";
import { InputField } from "../../components/InputField";
import { RadioButton } from "../../components/RadioButton";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const inputFields = [
  { label: "Email", type: "text", name: "email", placeholder: "Email" },
  {
    label: "Password",
    type: "password",
    name: "password",
    placeholder: "Password",
  },
];

export const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const responseData = await logInUser(data);

     
      localStorage.setItem("userType", JSON.stringify(responseData));
      console.log(responseData);
      if (responseData.user_type =="hr") {
        console.log("hr");

        navigate("/employer");
      } else if (responseData.user_type == "admin") {
        console.log("employer");
        navigate("/admin");
      } else if (responseData.user_type == "user") {
        console.log("user");
        navigate("/user");
      }

      console.log("Registration successful!", responseData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="auth-container">
      <div className=" card bg-white px-2 py-6 lg:w-1/3 md:w-1/2 w-full">
        <h1 className="text-center font-bold text-2xl">Log In</h1>
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

            <input
              type="submit"
              className="w-full bg-[#06CA8C] hover:bg-[#059476] text-[#ffffff] cursor-pointer p-2 mt-5"
            />
          </form>
        </div>
        <div className="text-center mt-5">
          <span>
            Don't Have an Account ?
            <Link className="text-red-500 cursor-pointer" to="/signup">
              Sign
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};
