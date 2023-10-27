import React from 'react';
export default function Professions() {
  const jobs = [
    { image: './images/chef.png', title: 'Cook' },
    { image: './images/doctor.png', title: 'Doctor' },
    { image: './images/engineer.png', title: 'Engineer' },
    { image: './images/farmer.png', title: 'Farmer' },
    { image: './images/hunter.png', title: 'Hunter' },
    { image: './images/lumberjack.png', title: 'Lumber' },
    { image: './images/military.png', title: 'Military' },
    { image: './images/police.png', title: 'Police' },
  ];

  return (
    <>
      <div className="  bg-black ">
        <div className="xl:container xl:mx-auto">
          <div className=" / bg-black">
            <div className="flex items-center justify-center sm:flex-col flex-col pb-24">
              <div className="flex items-center justify-center h-56 w-[100dvw] box-border m-0 p-0">
                <h1 className="/ text-white text-6xl font-extrabold text-center">
                  Popular Professions
                </h1>
              </div>
              <div className=" grid sm:grid-cols-2 sm:space-y-0 / space-y-60 bg-black xl:w-full w-screen   p-16 items-center justify-center lg:grid-cols-3 xl:grid-cols-4">
                {jobs.map((job, index) => (
                  <div
                    key={index}
                    className="sm:border-4   space-y-8 sm:space-y-4 md:border-[#fff] flex flex-col items-center justify-center h-96"
                  >
                    <img
                      className="sm:h-64 sm:w-72"
                      src={job.image}
                      alt={job.title}
                    />
                    <div className="text-[#fff] sm:text-3xl text-6xl">
                      {job.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
