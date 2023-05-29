import React from "react";
import { MdAccountBalance } from "react-icons/md";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const SideMenu = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="lg:hidden flex w-full flex-row items-center justify-between px-6">
      <div className="flex flex-row items-center  ">
        <MdAccountBalance className="xs:text-2xl text-xl text-white" />
        <h1 className="text-white xs:text-xl text-lg">crackIt</h1>
      </div>

      <div className="bg xs:w-28 w-20 font-semibold flex items-center justify-center px-6 xs:text-xs text-[10px] xs:py-3 py-2 text-white rounded-full whitespace-nowrap">
        TALK TO US
      </div>

      <div>
        <BiMenuAltRight
          color="#fff"
          fontSize={30}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="fixed top-0 left-0 w-full h-[100vh] bg-[#182B54] flex flex-col z-[5]">
            <AiOutlineClose
              fontSize={27}
              className="text-[40px] text-white cursor-pointer absolute top-[20px] right-[20px]"
              onClick={() => setToggleMenu(false)}
            />
            <div className="text-white flex flex-row items-center justify-center my-auto">
              <ul className="text-stone-300 font-semibold flex flex-col items-center gap-4 inter text-lg">
                <li className="hover:border-b-2 border-white pb-2" id="market">
                  MARKETING
                </li>
                <li className="hover:border-b-2 border-white pb-2">ABOUT</li>
                <li className="hover:border-b-2 border-white pb-2">VIDEO</li>
                <li className="hover:border-b-2 border-white pb-2">OUR BOOK</li>
                <li className="hover:border-b-2 border-white pb-2">CONTACT</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default SideMenu;
