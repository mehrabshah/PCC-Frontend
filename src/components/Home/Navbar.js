import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
export default function Navbar() {
  const links = [
    { id: 1, url: '/', text: 'Home' },
    { id: 2, url: '/about', text: 'About' },
    { id: 3, url: '/contact', text: 'Contact' },
  ];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        <div className="pl-1 pr-1 p-8 w-full bg-[#e3eed8] fixed top-0 z-50">
          <div className="flex   justify-between h-full  ">
            <div
              className={`${
                isOpen ? 'invisible md:visible' : 'visible'
              }  text-[#262A56]    text-3xl font-serif font-extrabold`}
              style={{
                fontFamily: 'Lucida Console',
                fontWeight: '800',
              }}
            >
              PCC
            </div>
            <nav
              className={` ${
                isOpen
                  ? 'flex flex-col md:flex-row pt-8 md:pt-0 space-y-6 space-x-0 md:space-y-0 items-center justify-center '
                  : 'hidden'
              }    md:space-x-4 md:items-center md:justify-center md:flex`}
            >
              <ul className="md:flex md:flex-row md:space-x-4 space-y-6 md:space-y-0 flex flex-col items-center justify-center ">
                {links.map((link) => (
                  <li
                    key={link.id}
                    className="text-2xl md:text-2xl / text-[#262A56] hover:text-blue-900 font-extrabold"
                  >
                    <div
                      style={{
                        fontFamily: 'Lucida Console',
                        fontWeight: '800',
                      }}
                      to={link.url}
                    >
                      {link.text}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-center p-5 rounded-lg  h-10 text-lg bg-[#262A56] w-24 text-[#fff] hover:bg-blue-900">
                <Link to="/signin">
                  <button
                    style={{
                      fontFamily: 'Lucida Console',
                      //   fontStyle: 'italic',
                      fontWeight: 'bold',
                    }}
                  >
                    LogIn
                  </button>
                </Link>
              </div>
              <div className="flex items-center justify-center p-5 rounded-lg h-10 text-lg bg-[#262A56] w-24 text-[#fff] hover:bg-blue-900 ">
                <Link to="/signup">
                  <button
                    style={{
                      fontFamily: 'Lucida Console',
                      //   fontStyle: 'italic',
                      fontWeight: 'bold',
                    }}
                  >
                    SignUp
                  </button>
                </Link>
              </div>
            </nav>
            <div className="md:hidden block">
              <GiHamburgerMenu
                size={25}
                onClick={() => setIsOpen(!isOpen)}
              ></GiHamburgerMenu>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
