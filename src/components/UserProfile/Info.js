import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
export default function Info() {
  const [usertype, setUserType] = useState({});
  const inputFields = [
    { label: "User Name", type: "text", name: "username" },
    {
      label: "Role",
      type: "text",
      name: "user_type",
    },
    {
      label: "Email",
      type: "text",
      name: "email",
    },
    {
      label: "Password",
      type: "password",
      name: "password",
    },
  ];

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedResponse = localStorage.getItem("userType");
        console.log(storedResponse);
        if (storedResponse) {
          const userType = JSON.parse(storedResponse);
          setUserType(userType);
          setValue("username", userType.username);
          setValue("user_type", userType.user_type);
          setValue("email", userType.email);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const onSubmit = async (data) => {
    try {
      const response = await axios.put(`http://127.0.0.1:3001/users/`, data);

      localStorage.setItem("userType", JSON.stringify(response.data));

      setValue("username", response.data.username);
      setValue("user_type", response.data.user_type);
      setValue("email", response.data.email);

      setUserType(response.data);
    } catch (error) {
      throw error.response.data || "Something went wrong";
    }
  };

  return (
    <>
      <div className="w-full bg-[#262A56] border border-gray-200">
        <div className="flex flex-col w-full">
          <div>
            <form
              className="flex flex-col space-y-4 p-8"
              onSubmit={handleSubmit(onSubmit)}
            >
              {inputFields.map((field) => (
                <div className="flex flex-row justify-between" key={field.id}>
                  {" "}
                  <label className="block mb-2 text-[#E3CCAE]">
                    {field.label}:
                  </label>
                  <input
                    className="w-[70%] px-4 py-2 border rounded-sm bg-[#B8621B] text-[#E3CCAE]"
                    key={field.name}
                    label={field.label}
                    type={field.type}
                    {...register(field.name)}
                    readOnly={field.name === "email"}
                  />
                </div>
              ))}

              <div className="flex flex-row">
                <input
                  type="submit"
                  className="bg-[#B8621B] w-[20%] h-[3rem] text-[#E3CCAE] cursor-pointer"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
