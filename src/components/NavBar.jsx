import React from "react";
import HomeIconWhite from "../assets/homeIcon-white.png";
import ChatIconWhite from "../assets/chatIcon-white.png";
import NotificationIconWhite from "../assets/notificationIcon-white.png";
import SearchIconWhite from "../assets/searchIcon-white.png";
import FilterIconWhite from "../assets/filterIcon-white.png";
import { MdMenu } from "react-icons/md";
import { useContextData } from "../context/ContextProvider";
const NavBar = () => {
  const { handleToggleSidebar } = useContextData();
  return (
    <div className="bg-primary h-16 text-white flex items-center py-4">
      <div className="flex justify-between items-center w-full px-6">
        <div className="flex items-center gap-2 sm:hidden md:hidden">
          <img className="h-6" src={HomeIconWhite} alt="Home Icon" />
          <p className="md:text-[13px]">Home</p>
        </div>
          <MdMenu className="lg:hidden xl:hidden 2xl:hidden text-[20px] cursor-pointer" onClick={handleToggleSidebar}/>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 border-2 border-secondary rounded-md sm:hidden">
            <div className="flex items-center gap-2">
              <img className="h-6 md:h-5" src={SearchIconWhite} alt="" />
              <input
                className="bg-transparent w-72 md:w-64 outline-none md:text-[13px]"
                type="text"
                placeholder="Search"
              />
            </div>
            <p className="bg-white text-[#303030] font-bold px-3 md:px-2 md:text-[13px] rounded-sm">
              All
            </p>
            <img
              className="h-5 md:h-4 cursor-pointer"
              src={FilterIconWhite}
              alt="FilterIcon"
            />
          </div>
          <img
            className="h-6 md:h-4 sm:h-4 cursor-pointer"
            src={ChatIconWhite}
            alt="ChatIcon"
          />
          <img
            className="h-6 md:h-4 sm:h-4 cursor-pointer"
            src={NotificationIconWhite}
            alt="NotificationIcon"
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
