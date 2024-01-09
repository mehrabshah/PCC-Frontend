import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";

export default function Report() {
  const navigate = useNavigate();

  const [description,setDescription]=useState("")

  const testResult = useSelector((state) => state.postarray);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:3000/get_description/${testResult}`);
      setDescription(response.data.description)


    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleClick = () => {
    navigate("/user");
  };
  return (
    <>
      <div className="p-4 flex flex-row h-full items-center justify-center ">
        <div className=" flex flex-col w-[80%] bg-[#262A56] pl-8 pr-8 pt-16 pb-16 / space-y-12 border  border-gray-200   ">
          <div className="text-[#E3CCAE] font-bold text-3xl flex flex-row items-center justify-center">
            {testResult}
            
          </div>
          <p className="text-[#E3CCAE] font-bold text-3xl flex flex-row items-center justify-center">{description}</p>

        </div>
      </div>
    </>
  );
}
