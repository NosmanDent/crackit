import React from "react";
import { MdAccountBalance } from "react-icons/md";
import SideMenu from "./SideMenu";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#182B54] py-4 inter w-full cursor-pointer">
      <div className="  w-full hidden lg:flex flex-row items-center justify-between px-10">
        <Link to="/">
          <div className="flex flex-row items-center  ">
            <MdAccountBalance className="text-5xl text-white" />
            <h1 className="text-white text-3xl">crackIt</h1>
          </div>
        </Link>

        <ul className="text-stone-300 font-semibold flex flex-row items-center gap-4 inter lg:text-sm text-xs ">
          <li className="hover:border-b-2 border-white pb-2" id="market">
            MARKETING
          </li>
          <li className="hover:border-b-2 border-white pb-2">ABOUT</li>
          <li className="hover:border-b-2 border-white pb-2">VIDEO</li>
          <li className="hover:border-b-2 border-white pb-2">OUR BOOK</li>
          <Link to="contact">
            <li className="hover:border-b-2 border-white pb-2">CONTACT</li>
          </Link>
        </ul>

        <Link to="contact">
          <div className="bg w-40 font-semibold flex items-center justify-center px-12 py-3 text-white rounded-full whitespace-nowrap">
            TALK TO US
          </div>
        </Link>
      </div>

      <SideMenu />
    </nav>
  );
};

export default Navbar;
