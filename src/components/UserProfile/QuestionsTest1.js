import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { RadioButtonQuestions } from "./RadioButtonQuestions";
const Question1 = [
  { label: "option1", value: "1" },
  { label: "option2", value: "2" },
  { label: "option3", value: "3" },
  { label: "option4", value: "4" },
  { label: "option5", value: "5" },
  { label: "option6", value: "6" },
  { label: "option7", value: "7" },
];
const Question2 = [...Question1];
const Question3 = [...Question1];
const Question4 = [...Question1];
const Question5 = [...Question1];
const Question6 = [...Question1];
const Question7 = [...Question1];
const Question8 = [...Question1];
const Question9 = [...Question1];
const Question10 = [...Question1];
const Question11 = [...Question1];
const Question12 = [...Question1];
const Question13 = [...Question1];
const Question14 = [...Question1];
const Question15 = [...Question1];
const Question16 = [...Question1];
const Question17 = [...Question1];
const Question18 = [...Question1];
const Question19 = [...Question1];
const Question20 = [...Question1];
const Question21 = [...Question1];
const Question22 = [...Question1];
const Question23 = [...Question1];
const Question24 = [...Question1];
const Question25 = [...Question1];
const Question26 = [...Question1];
const Question27 = [...Question1];
const Question28 = [...Question1];
const Question29 = [...Question1];
const Question30 = [...Question1];
const Question31 = [...Question1];
const Question32 = [...Question1];
const Question33 = [...Question1];
const Question34 = [...Question1];
const Question35 = [...Question1];
const Question36 = [...Question1];
const Question37 = [...Question1];
const Question38 = [...Question1];
const Question39 = [...Question1];
const Question40 = [...Question1];
const Question41 = [...Question1];
const Question42 = [...Question1];
const Question43 = [...Question1];
const Question44 = [...Question1];
const Question45 = [...Question1];
const Question46 = [...Question1];
const Question47 = [...Question1];
const Question48 = [...Question1];
const Question49 = [...Question1];
const Question50 = [...Question1];
const Question51 = [...Question1];
const Question52 = [...Question1];
const Question53 = [...Question1];
const Question54 = [...Question1];
const Question55 = [...Question1];
const Question56 = [...Question1];
const Question57 = [...Question1];
const Question58 = [...Question1];
const Question59 = [...Question1];
const Question60 = [...Question1];

const resultArray = [
  { name: "1", label: " ", options: Question1 },
  { name: "2", label: " ", options: Question2 },
  { name: "3", label: " ", options: Question3 },
  { name: "4", label: " ", options: Question4 },
  { name: "5", label: " ", options: Question5 },
  { name: "6", label: " ", options: Question6 },
  { name: "7", label: " ", options: Question7 },
  { name: "8", label: " ", options: Question8 },
  { name: "9", label: " ", options: Question9 },
  { name: "10", label: " ", options: Question10 },
  { name: "11", label: " ", options: Question11 },
  { name: "12", label: " ", options: Question12 },
  { name: "13", label: " ", options: Question13 },
  { name: "14", label: " ", options: Question14 },
  { name: "15", label: " ", options: Question15 },
  { name: "16", label: " ", options: Question16 },
  { name: "17", label: " ", options: Question17 },
  { name: "18", label: " ", options: Question18 },
  { name: "19", label: " ", options: Question19 },
  { name: "20", label: " ", options: Question20 },
  { name: "21", label: " ", options: Question21 },
  { name: "22", label: " ", options: Question22 },
  { name: "23", label: " ", options: Question23 },
  { name: "24", label: " ", options: Question24 },
  { name: "25", label: " ", options: Question25 },
  { name: "26", label: " ", options: Question26 },
  { name: "27", label: " ", options: Question27 },
  { name: "28", label: " ", options: Question28 },
  { name: "29", label: " ", options: Question29 },
  { name: "30", label: " ", options: Question30 },
  { name: "31", label: " ", options: Question31 },
  { name: "32", label: " ", options: Question32 },
  { name: "33", label: " ", options: Question33 },
  { name: "34", label: " ", options: Question34 },
  { name: "35", label: " ", options: Question35 },
  { name: "36", label: " ", options: Question36 },
  { name: "37", label: " ", options: Question37 },
  { name: "38", label: " ", options: Question38 },
  { name: "39", label: " ", options: Question39 },
  { name: "40", label: " ", options: Question40 },
  { name: "41", label: " ", options: Question41 },
  { name: "42", label: " ", options: Question42 },
  { name: "43", label: " ", options: Question43 },
  { name: "44", label: " ", options: Question44 },
  { name: "45", label: " ", options: Question45 },
  { name: "46", label: " ", options: Question46 },
  { name: "47", label: " ", options: Question47 },
  { name: "48", label: " ", options: Question48 },
  { name: "49", label: " ", options: Question49 },
  { name: "50", label: " ", options: Question50 },
  { name: "52", label: " ", options: Question51 },
  { name: "52", label: " ", options: Question52 },
  { name: "53", label: " ", options: Question53 },
  { name: "54", label: " ", options: Question54 },
  { name: "55", label: " ", options: Question55 },
  { name: "56", label: " ", options: Question56 },
  { name: "57", label: " ", options: Question57 },
  { name: "58", label: " ", options: Question58 },
  { name: "59", label: " ", options: Question59 },
  { name: "60", label: " ", options: Question60 },

   


];



export default function QuestionsTest1() {
  
  
  const [result,setResult]=useState(resultArray)
  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:3000/mbit/questions");
      console.log(response.data)


      const updatedResultArray = [
        { name: "1", label: response.data[0], options: Question1 },
        { name: "2", label: response.data[1], options: Question2 },
        { name: "3", label: response.data[2], options: Question3 },
        { name: "4", label: response.data[3], options: Question4 },
        { name: "5", label: response.data[4], options: Question5 },
        { name: "6", label: response.data[5], options: Question6 },
        { name: "7", label: response.data[6], options: Question7 },
        { name: "8", label: response.data[7], options: Question8 },
        { name: "9", label: response.data[8], options: Question9 },
        { name: "10", label: response.data[9], options: Question10 },
        { name: "11", label: response.data[10], options: Question11 },
        { name: "12", label: response.data[11], options: Question12 },
        { name: "13", label: response.data[12], options: Question13 },
        { name: "14", label: response.data[13], options: Question14 },
        { name: "15", label: response.data[14], options: Question15 },
        { name: "16", label: response.data[15], options: Question16 },
        { name: "17", label: response.data[16], options: Question17 },
        { name: "18", label: response.data[17], options: Question18 },
        { name: "19", label: response.data[18], options: Question19 },
        { name: "20", label: response.data[19], options: Question20 },
        { name: "21", label: response.data[20], options: Question21 },
        { name: "22", label: response.data[21], options: Question22 },
        { name: "23", label: response.data[22], options: Question23 },
        { name: "24", label: response.data[23], options: Question24 },
        { name: "25", label: response.data[24], options: Question25 },
        { name: "26", label: response.data[25], options: Question26 },
        { name: "27", label: response.data[26], options: Question27 },
        { name: "28", label: response.data[27], options: Question28 },
        { name: "29", label: response.data[28], options: Question29 },
        { name: "30", label: response.data[29], options: Question30 },
        { name: "31", label: response.data[30], options: Question31 },
        { name: "32", label: response.data[31], options: Question32 },
        { name: "33", label: response.data[32], options: Question33 },
        { name: "34", label: response.data[33], options: Question34 },
        { name: "35", label: response.data[34], options: Question35 },
        { name: "36", label: response.data[35], options: Question36 },
        { name: "37", label: response.data[36], options: Question37 },
        { name: "38", label: response.data[37], options: Question38 },
        { name: "39", label: response.data[38], options: Question39 },
        { name: "40", label: response.data[39], options: Question40 },
        { name: "41", label: response.data[40], options: Question41 },
        { name: "42", label: response.data[41], options: Question42 },
        { name: "43", label: response.data[42], options: Question43 },
        { name: "44", label: response.data[43], options: Question44 },
        { name: "45", label: response.data[44], options: Question45 },
        { name: "46", label: response.data[45], options: Question46 },
        { name: "47", label: response.data[46], options: Question47 },
        { name: "48", label: response.data[47], options: Question48 },
        { name: "49", label: response.data[48], options: Question49 },
        { name: "50", label: response.data[49], options: Question50 },
       
      ];
      

      setResult( updatedResultArray)


    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <div className="h-screen w-screen bg-[black] overflow-x-hidden box-border m-0 p-0">
        <div className="lg:max-w-6xl  lg:mx-auto ">
          <div className="p-12">
            <ul className="w-full ">
              <div className="  bg-[#262A56] pt-6 pb-6 w-full  box-border flex flex-row items-center justify-center ">
                <div className="w-[90%]  bg-[#262A56] ">
                  <form>
                    {result.map((item, index) => (
                      <div className="flex flex-col  mt-24  space-y-36 w-full">
                        <RadioButtonQuestions
                          options={item.options}
                          name={item.name}
                          register={register}
                          label={item.label}
                        />
                      </div>
                    ))}
                    <input
                      type="submit"
                      className=" bg-[#B8621B]   ms-[870px]   text-[#ffffff] cursor-pointer p-3  / mb-12   mt-16"
                    />
                  </form>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
