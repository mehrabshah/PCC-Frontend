import React from "react";
import { useState } from "react";

import axios from "axios";
import { useEffect } from "react";

export default function Personality() {
  const [description, setDescription] = useState({});
  const [test, setTest] = useState("");

  const [usertype, setUserType] = useState({});

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

      fetchData(response.data.personality);

      setTest(response.data.personality);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchData = async (testResult) => {
    console.log("final", testResult);
    try {
      const response = await axios.get(
        `http://127.0.0.1:3002/get_personality_info/${testResult}`
      );

      setDescription(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <div className="p-4 flex flex-row h-full items-center justify-center ">
        <div className=" flex flex-col w-[80%] bg-[#262A56] pl-8 pr-8 pt-8 pb-8 / space-y-12 border  border-gray-200   ">
          <h1 className="text-[#E3CCAE] font-bold text-5xl ">
            Personality Info
          </h1>
          <ul className="flex flex-col ms-7  / mt-0">
            <l1>
              <span className="text-[#E3CCAE] font-bold text-3xl ">
                Personality Attributes:
              </span>
            </l1>
            <l1>
              <span className="text-[#E3CCAE] font-bold text-3xl ">
                Traits:
              </span>
               {description.personality_info.Traits} 
            </l1>
            <l1>
              <span className="text-[#E3CCAE] font-bold text-3xl ">
                Suitable Career:
              </span>
            </l1>
            <l1>
              <span className="text-[#E3CCAE] font-bold text-3xl ">
                strengths:
              </span>
            </l1>
            <l1>
              <span className="text-[#E3CCAE] font-bold text-3xl ">
                Weaknesses
              </span>
            </l1>
          </ul>
        </div>
      </div>
    </>
  );
}
