import React from "react";
import { Button, Navbar } from "flowbite-react";
const navLinks = [
  { href: "#", text: "Home" },
  { href: "#", text: "About" },
  { href: "#", text: "Contact Us" },
  { href: "#", text: "Pages" },
];
export const Header = () => {
  return (
    <>
      <Navbar
        fluid
        rounded
        className="w-full  lg:px-32 md:x-16  bg-transparent absolute "
      >
        <Navbar.Brand href="https://flowbite-react.com">
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white text-[#ffffff]">
            PCC
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button className="rounded-sm text-[#ffffff]  bg-[#06CA8C] / border-2 border-[#ffffff] ">
            Login
          </Button>
          <Button className="rounded-sm ms-3 text-[#06CA8C] bg-[#ffffff]   hover:bg-[#06CA8C]  hover:text-[#ffffff]">
            Register
          </Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          {navLinks.map((link, index) => (
            <Navbar.Link
              key={index}
              href={link.href}
              className="text-[#ffffff] text-sm font-bold"
            >
              {link.text}
            </Navbar.Link>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
