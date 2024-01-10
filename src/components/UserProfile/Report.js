import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";

export default function Report() {
  const navigate = useNavigate();

  const [test, setTest] = useState("");

  const [usertype, setUserType] = useState({});

  const [description, setDescription] = useState("");

  useEffect(() => {
    const storedResponse = localStorage.getItem("userType");
    console.log(storedResponse);
    if (storedResponse) {
      const userType = JSON.parse(storedResponse);

      fetchTest(userType.email);
      setUserType(userType);
    }
  }, []);

  const fetchTest = async (email) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:3000/get_personality/${email}`
      );
      console.log(response.data);

      fetchData(response.data.personality);

      setTest(response.data.personality);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchData = async (testResult) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:3000/get_description/${testResult}`
      );
      setDescription(response.data.description);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      
        {" "}
        <div className="p-4 flex flex-row h-full items-center justify-center ">
          <div className=" flex flex-col w-[80%] bg-[#262A56] pl-8 pr-8 pt-16 pb-16 / space-y-12 border  border-gray-200   ">
            <div className="text-[#E3CCAE] font-bold text-3xl flex flex-row items-center justify-center">
              {test}
            </div>
            <p className="text-[#E3CCAE] font-bold text-3xl flex flex-row items-center justify-center">
              {description}
            </p>
          </div>
        </div>
      
    </>
  );
}
