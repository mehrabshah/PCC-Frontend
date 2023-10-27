import React, { useState } from 'react';
import Info from './Info';
import Jobs from './Jobs';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Result1 from './Result1';
// import Result2 from './Result2';
// import Result3 from './Result3';
import { useDispatch, useSelector } from 'react-redux';
import { modifytest1bool } from '../../redux/test1bool';
import { modifytest2bool } from '../../redux/test2bool';
import { modifytest3bool } from '../../redux/test3bool';
import Report from './Report';
import Personality from './Personality';
export default function () {
  const test1bool = useSelector((state) => state.test1bool.value);
  const test2bool = useSelector((state) => state.test2bool.value);
  const test3bool = useSelector((state) => state.test3bool.value);
  const dispatch = useDispatch();

  const tests = [
    { id: 1, name: 'MBIT' },
    // { id: 2, name: 'NEO-PI-R' },
    // { id: 3, name: 'BFI' },
  ];

  const rendertest = tests.map((test) => (
    <div key={test.id} className="flex-col flex space-y-4">
      <div className="flex flex-row justify-between items-center space-y-4">
        <div className="text-3xl text-[#E3CCAE] ">{test.name}</div>
        <div>
          <div className="flex items-center justify-center h-12 text- xl bg-[#B8621B] w-24 text-white hover:bg-blue-900">
            <Link
              to={`/questiontest${test.id}`}
              className="flex items-center justify-center h-10 text-xl bg-[#B8621B] w-40 text-[#E3CCAE] hover:bg-blue-900"
            >
              Click Here
            </Link>
          </div>
        </div>
      </div>
      <div className="h-[0.01rem]  bg-[#E3CCAE] w-72"></div>
    </div>
  ));
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      {/* container */}
      <div className="h-screen w-screen bg-[black] overflow-x-hidden box-border m-0 p-0 ">
        <div className="lg:max-w-6xl  lg:mx-auto ">
          {/* container-inner */}
          <div className="p-4">
            <div className="lg:flex lg:flex-row lg:space-x-7 flex flex-col ">
              {/* Left */}
              <div className=" mt-8 pt-8 pb-8 lg:w-[30%] lg:h-[95%] bg-[#262A56] border  ">
                {/* Upper                            */}
                <div className="flex flex-col items-center space-y-6 ">
                  {/* Avatar */}
                  <div className="h-[12rem] w-[12rem] rounded-[6rem]  border-4 overflow-hidden">
                    <img
                      src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                      className="w-64 overflow-hidden"
                      alt=""
                    ></img>
                  </div>
                  {/* <div>
                    <h1 className="text-3xl text-[#E3CCAE]  font-medium">
                      Ali
                    </h1>
                  </div> */}
                  <div className="flex flex-row / space-x-4">
                    <div
                      className="flex items-center justify-center / h-12 text-xl bg-[#B8621B] w-24 text-[#E3CCAE]  hover:bg-blue-900 rounded"
                      onClick={() => handleTabClick(1)}
                    >
                      <button>Detials</button>
                    </div>
                    <div
                      className="flex items-center justify-center h-12 text- xl bg-[#B8621B] / w-32 text-[#E3CCAE]  hover:bg-blue-900 rounded"
                      onClick={() => handleTabClick(2)}
                    >
                      <button>Match Jobs</button>
                    </div>
                  </div>
                  <div
                    className="flex items-center justify-center h-12 text- xl bg-[#B8621B] / w-44 text-[#E3CCAE]  hover:bg-blue-900 rounded"
                    onClick={() => handleTabClick(3)}
                  >
                    <button>Generate Report</button>
                  </div>
                  <div
                    className="flex items-center justify-center h-12 text- xl bg-[#B8621B] / w-44 text-[#E3CCAE]  hover:bg-blue-900 rounded"
                    onClick={() => handleTabClick(4)}
                  >
                    <button>Personality Standout</button>
                  </div>
                  <div
                    className="flex items-center justify-center h-12 text- xl bg-[#B8621B] / w-44 text-[#E3CCAE]  hover:bg-blue-900 rounded"
                    onClick={() => handleTabClick(4)}
                  >
                    <Link to="/careerlist">
                      <button> Career List</button>
                    </Link>
                  </div>

                  <div className="h-[0.09rem]  bg-[#E3CCAE] w-72"></div>
                </div>
                {/* Lower */}
                <div className="flex flex-col items-center space-y-6 pt-4">
                  <div className="text-3xl font-medium uppercase text-[#E3CCAE] rounded">
                    Attempt test{' '}
                  </div>
                  <div>
                    {rendertest}
                    <div className="pt-6">
                      <Link to="/">
                        <button
                          onClick={() => {
                            dispatch(modifytest1bool(false));
                            dispatch(modifytest2bool(false));
                            dispatch(modifytest3bool(false));
                          }}
                          className="bg-[#B8621B] hover:bg-blue-900 text-[#E3CCAE] h-12 w-32 flex flex-row items-center justify-center rounded mx-auto"
                        >
                          Logout
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* right */}
              <div className="flex flex-col lg:w-[70%]   mt-8 space-y-5">
                {activeTab === 1 && <Info></Info>}
                {activeTab === 2 && <Jobs></Jobs>}
                {activeTab === 3 && <Report />}
                {activeTab === 4 && <Personality />}

                {activeTab === 1 && (
                  <div className="flex flex-col w-full  space-y-4">
                    <div className="flex flex-col items-center w-full sm:space-x-7 sm:flex-row space-y-4 sm:space-y-0">
                      {test1bool && (
                        <div className="sm:w-[48%] w-[100%]">
                          <Result1 />
                        </div>
                      )}
                      {test2bool && (
                        <div className="sm:w-[48%] w-[100%]">
                          {/* <Result2 /> */}
                        </div>
                      )}
                    </div>
                    {test3bool && (
                      <div className="sm:w-[48%] w-[100%]">
                        {/* <Result3 />{' '} */}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
