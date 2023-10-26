import React, { useState } from 'react';

export default function Home() {
  return (
    <>
      {/* 262A56 */}
      {/* Hero */}
      <br></br>
      <br></br>

      <div className="Hero h-screen  md:h-[80vh] bg-[#262A56] xl:h-[90vh]">
        <div className="lg:container h-full  m-0 p-0 bg-[#262A56] lg:mx-auto">
          {/* Hero Section Top */}
          <div className=" h-full bg-[#262A56]   box-border ml-4 mr-4 ">
            <div className="wrapper  flex flex-col  h-full  items-center / justify-center ">
              <div className=" flex  items-center justify-center flex-col space-y-4 md:flex-row-reverse md:w-[80%] md:h-screen  ">
                <div className="left md:w-[50%]   md:h-full md:flex md:items-center md:justify-center xl:bg-[#B8621B]  xl:h-[29rem] xl:w-[30rem] xl:rounded-[30rem]">
                  <img
                    src="./images/Hero.svg"
                    alt="Hero"
                    className="h-[384px] w-[400px]"
                  ></img>
                </div>

                <div className="right    space-y-8 text-4xl  md:w-[50%] font-extrabold  md:h-full md:flex md:items-center md:justify-center md:flex-col ">
                  <h1
                    className="text-[#E3CCAE] / text-center"
                    style={{
                      fontFamily: 'Lucida Console',
                      //   fontStyle: 'italic',
                      fontWeight: 'bold',
                    }}
                  >
                    Psychometric Career Counsellor
                  </h1>
                  <p className="text-center text-xl text-[#E3CCAE] / font-light / xl:block hidden ">
                    System that assists students in deciding a career path that
                    is suitable for them System that assists students
                  </p>
                  {/* <button className="bg-[#B8621B] h-12 / w-60 text-[#E3CCAE] text-xl    xl:block hidden">
                    Click Here
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      {/* Hero section bottom*/}

      <div className="bg-black">
        <div className="lg:max-w-5xl lg:mx-auto md:bg-black z-0">
          <div className=" box-border bg-[#f8fafb] md:bg-black / z-0 ">
            <div className="wrapper flex items-center justify-center ">
              <div
                className="/  flex flex-col items-center justify-center space-y-4 md:space-y-0 lg:flex-row lg:items-center lg:justify-center 
    
                            md:flex-row md:items-center md:justify-center md:relative md:bottom-24 z-0"
              >
                <div className="flex flex-col items-center justify-center h-[24rem]  / md:bg-pink-200  space-y-5 w-[95vw] md:w-[24vw] md:p-8 xl:w-[300px] md:h-fit">
                  <h1 className=" text-2xl  font-bold text-center">
                    Informed decision
                  </h1>
                  <p className="text-center m-4  leading-9">
                    System that assists students in deciding a career path that
                    is suitable for them System that assists students
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center h-[24rem]  md:bg-green-200  space-y-5 w-[95vw] md:w-[24vw] md:p-8 xl:w-[300px] md:h-fit">
                  <h1 className=" text-2xl  font-bold text-center">
                    Informed decision
                  </h1>
                  <p className="text-center m-4  leading-9">
                    System that assists students in deciding a career path that
                    is suitable for them System that assists students
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center h-[24rem]  md:bg-yellow-200  space-y-5 w-[95vw] md:w-[24vw] md:p-8 xl:w-[300px] md:h-fit">
                  <h1 className=" text-2xl  font-bold text-center">
                    Informed decision
                  </h1>
                  <p className="text-center m-4  leading-9">
                    System that assists students in deciding a career path that
                    is suitable for them System that assists students
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center h-[24rem]  md:bg-purple-200  space-y-5 w-[95vw] md:w-[24vw] md:p-8 xl:w-[300px] md:h-fit">
                  <h1 className=" text-2xl  font-bold text-center">
                    Informed decision
                  </h1>
                  <p className="text-center m-4  leading-9">
                    System that assists students in deciding a career path that
                    is suitable for them System that assists students
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
