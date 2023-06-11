import React from 'react'

export default function Posted(props) {
    return (
        <>
            <div className='sm:w-[70%] bg-[#262A56] w-full '>
                <div className='flex flex-col  pt-8 pb-2 pl-4 pr-4 space-y-2'>
                    {/* image and Hr Title */}
                    <div className='flex flex-row space-x-4 '>
                        <div className="h-[7rem] w-[7rem] rounded-[6rem]  border-4 overflow-hidden">
                            <img  src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" className="w-64 overflow-hidden" alt=""></img>
                        </div>
                        <div className='flex flex-col'>
                        <div className='text-[#E3CCAE] text-3xl font-bold'>Mehrab Ali</div>
                        <div className='text-[#E3CCAE]'>Hr executive with more than 4 years of experience</div>
                        </div>
                    </div>
                    {/* Job Title */}
                    <div className='text-[#E3CCAE]'>
                       {props.jobTitle}
                    </div>
                    {/* Job Tags */}
                    <div className='text-[#E3CCAE]'>
                       {props.jobDescription}
                    </div>
                    {/* Job Description */}
                    <div className='text-[#E3CCAE]'>
                       {props.jobTags}
                    </div>
                    {/* Job Image */}
                    <div>
                         <img className="w-[32rem] h-[18rem]"  src="./images/Hiring.jpg"></img>
                    </div>
                </div>
            </div>
        </>
    )
}
