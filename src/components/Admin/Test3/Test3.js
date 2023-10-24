import React from 'react'
import Addquestionaire from './Addquestionaire'
import { Link } from 'react-router-dom'
import Questions from './Questions'
export default function Test2() {
  return (
    <>
      <div className="h-screen w-screen bg-[#000000]   overflow-x-hidden box-border m-0 p-0 ">
        <div className="lg:max-w-6xl  lg:mx-auto ">
          {/* container-inner */}
          <div className="m-6">
            <div className="lg:flex lg:flex-row lg:space-x-7 h-[90vh]  flex flex-col">

              <div className=" mt-8 pt-8 pb-8 lg:w-[40%] bg-[#262A56] border  border-gray-200  ">
                <div className='text-[#E3CCAE] pl-5 text-3xl'>
                  <Link to="/admin"> Back</Link>
                </div>
                <Addquestionaire />
              </div>
              <div className="flex flex-col lg:w-[60%]   mt-8">
                <Questions />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
