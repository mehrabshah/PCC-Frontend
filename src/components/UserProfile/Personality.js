import React from "react";
import { useState } from "react";

import axios from "axios";
import { useEffect } from "react";

export default function Personality() {
  const [personality_info, setPersonality_info] = useState({});
  const [order, setOrder] = useState([]);
  const [test, setTest] = useState("");

  const [usertype, setUserType] = useState({});

  useEffect(() => {
    const storedResponse = localStorage.getItem("userType");
    console.log(storedResponse);
    if (storedResponse) {
      const userType = JSON.parse(storedResponse);
      setUserType(userType);
      fetchTest(userType.email);
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
    console.log("america");
    try {
      const response = await axios.get(
        `http://127.0.0.1:3002/get_personality_info/${testResult}`
      );

      setOrder(response.data.ordered_professions);
      setPersonality_info(response.data.personality_info);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <div className="p-4 flex flex-row h-full items-center justify-center ">
        <div className=" flex flex-col w-[80%] bg-[#262A56] pl-16 pr-8 pt-8 pb-16 / space-y-12 border  border-gray-200   ">
          <h1 className="text-[#E3CCAE] font-bold text-5xl ">
            Personality Info
          </h1>
          <ul className="flex flex-col ms-7 / space-y-8  mt-0">
            <l1 className="flex flex-col">
              <span className="text-[#E3CCAE] font-bold text-3xl ">
                Personality Attributes:
              </span>
              <span className="text-[#E3CCAE] font-bold text-md ms-7">
                {" "}
                {personality_info.PersonalityAttributes}
              </span>
            </l1>
            <l1 className="flex flex-col">
              <span className="text-[#E3CCAE] font-bold text-3xl ">
                Traits:
              </span>
              <span className="text-[#E3CCAE] font-bold text-md ms-7">
                {" "}
                {personality_info.Traits}
              </span>
            </l1>
            <l1 className="flex flex-col">
              <span className="text-[#E3CCAE] font-bold text-3xl ">
                Suitable Career:
              </span>
              <span className="text-[#E3CCAE] font-bold text-md ms-7">
                {" "}
                {personality_info.Career}
              </span>
            </l1>
            <l1 className="flex flex-col">
              <span className="text-[#E3CCAE] font-bold text-3xl ">
                Strengths:
              </span>
              <span className="text-[#E3CCAE] font-bold text-md ms-7">
                {" "}
                {personality_info.Strengths}
              </span>
            </l1>
            <l1 className="flex flex-col">
              <span className="text-[#E3CCAE] font-bold text-3xl ">
                Weaknesses
              </span>
              <span className="text-[#E3CCAE] font-bold text-md ms-7">
                {" "}

                {personality_info.Weaknesses}
              
              </span>
            </l1>
            <l1 className="flex flex-col">
              <span className="text-[#E3CCAE] font-bold text-3xl ">
                Ordered Professions
              </span>
              <span className="text-[#E3CCAE] font-bold text-md ms-7">
                {" "}
                {order.map((item) => (
                  <div> {item}</div>
                ))}
               
              </span>
            </l1>
          </ul>
        </div>
      </div>
    </>
  );
}
