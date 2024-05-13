import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { MdKeyboardArrowUp, MdKeyboardArrowDown, MdMenu } from "react-icons/md";
import Home from "../assets/homeIcon-white.png";
import Alert from "../assets/alertIcon-blue.png";
import AlertWhite from "../assets/alertIcon-white.png";
import Water from "../assets/waterIcon-blue.png";
import Gas from "../assets/gasIcon-blue.png";
import Electric from "../assets/electricIcon-blue.png";
import Fire from "../assets/fireIcon-blue.png";
import Mold from "../assets/moldIcon-blue.png";
import Security from "../assets/securityIcon-blue.png";
import Insurance from "../assets/insuranceIcon-blue.png";
import Monitoring from "../assets/monitoringIcon-blue.png";
import Weather from "../assets/weatherIcon-blue.png";
import Report from "../assets/reportIcon-blue.png";
import Admnistrator from "../assets/admnistratorIcon-blue.png";
import Analytics from "../assets/analyticsIcon-blue.png";
import { Link } from "react-router-dom";
import { useContextData } from "../context/ContextProvider";
import { RxCross2 } from "react-icons/rx";
const SideBar = () => {
  const [subMenuOpen, setSubMenuOpen] = useState(Array(4).fill(false));
  const [selectedMenu, setSelectedMenu] = useState("Home");
  const { isSidebarOpen, handleToggleSidebar } = useContextData();
  const handleSubMenuClick = (index) => {
    const newSubMenuOpen = subMenuOpen.map((isOpen, i) =>
      i === index ? !isOpen : false
    );
    setSubMenuOpen(newSubMenuOpen);
    setSelectedMenu("");
  };

  return (
    <div
      className={`w-72 bg-white flex flex-col h-screen ${
        isSidebarOpen
          ? "sm:block md:block sm:fixed sm:top-0 sm:left-0 sm:z-50 sm:transform sm:transition-transform sm:duration-300 md:fixed md:top-0 md:left-0 md:z-50 md:transform md:transition-transform md:duration-300 sm:shadow-2xl md:shadow-2xl"
          : "sm:hidden md:hidden"
      }`}
    >
      <div className="flex py-5 px-4 sm:items-center sm:justify-between md:items-center md:justify-between">
        <img className="h-9 lg:h-7" src={Logo} alt="Logo" />
        <RxCross2
          className="hidden sm:block md:block text-primary text-[23px]"
          onClick={handleToggleSidebar}
        />
      </div>
      <div
        className="flex flex-col gap-4 pt-8 pr-4 overflow-y-auto"
        style={{
          overflowY: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div>
          <Link to="/">
            <div
              className={`flex items-center gap-3 py-3 pl-4 cursor-pointer ${
                selectedMenu === "Home" && "bg-primary text-white rounded-r-md"
              }`}
              onClick={() => {
                setSelectedMenu("Home");
              }}
            >
              <img className="h-7 sm:h-5 md:h-6" src={Home} alt="Home" />
              <p className="sm:text-xs md:text-xs">Home</p>
            </div>
          </Link>
          <Link to="/alerts">
            <div
              className={`flex items-center gap-3 py-3 pl-4 cursor-pointer ${
                selectedMenu === "Alerts" &&
                "bg-primary text-white rounded-r-md"
              }`}
              onClick={() => {
                setSelectedMenu("Alerts");
              }}
            >
              <img
                className="h-7 sm:h-5 md:h-6"
                src={selectedMenu !== "Alerts" ? Alert : AlertWhite}
                alt="Alert"
              />
              <p className="sm:text-xs md:text-xs">Alerts</p>
            </div>
          </Link>
        </div>

        {/* Utilities submenu */}
        <div className="duration-1000">
          <div
            className="flex items-center justify-between py-1 pl-2 cursor-pointer"
            onClick={() => handleSubMenuClick(0)}
          >
            <p className="text-[#5C626E] font-semibold sm:text-xs md:text-xs">
              Utilities
            </p>
            <p>
              {subMenuOpen[0] ? (
                <MdKeyboardArrowUp className="text-[25px] text-primary" />
              ) : (
                <MdKeyboardArrowDown className="text-[25px] text-primary" />
              )}
            </p>
          </div>
          <div
            className={`${
              subMenuOpen[0] ? "block" : "hidden"
            } transition-all duration-300`}
          >
            <div
              className={`flex items-center gap-2 py-3 pl-4 cursor-pointer ${
                selectedMenu === "Water" && "bg-primary text-white rounded-r-md"
              }`}
              onClick={() => {
                setSelectedMenu("Water");
              }}
            >
              <img className="h-7 sm:h-5 md:h-6" src={Water} alt="Water" />
              <p className="sm:text-xs md:text-xs">Water</p>
            </div>
            <div
              className={`flex items-center gap-2 py-3 pl-4 cursor-pointer ${
                selectedMenu === "Gas" && "bg-primary text-white rounded-r-md"
              }`}
              onClick={() => {
                setSelectedMenu("Gas");
              }}
            >
              <img className="h-7 sm:h-5 md:h-6" src={Gas} alt="Gas" />
              <p className="sm:text-xs md:text-xs">Gas</p>
            </div>
            <div
              className={`flex items-center gap-2 py-3 pl-4 cursor-pointer ${
                selectedMenu === "Electric" &&
                "bg-primary text-white rounded-r-md"
              }`}
              onClick={() => {
                setSelectedMenu("Electric");
              }}
            >
              <img
                className="h-7 sm:h-5 md:h-6"
                src={Electric}
                alt="Electric"
              />
              <p className="sm:text-xs md:text-xs">Electric</p>
            </div>
          </div>
        </div>
        {/* Risk Index submenu */}
        <div className="duration-300">
          <div
            className="flex items-center justify-between py-1 pl-2 cursor-pointer"
            onClick={() => handleSubMenuClick(1)}
          >
            <p className="text-[#5C626E] font-semibold sm:text-xs md:text-xs">
              Risk Index
            </p>
            <p>
              {subMenuOpen[1] ? (
                <MdKeyboardArrowUp className="text-[25px] text-primary" />
              ) : (
                <MdKeyboardArrowDown className="text-[25px] text-primary" />
              )}
            </p>
          </div>
          <div
            className={`${
              subMenuOpen[1] ? "block" : "hidden"
            } transition-all duration-300`}
          >
            <Link to="/fire">
              <div
                className={`flex items-center gap-2 py-3 pl-4 cursor-pointer ${
                  selectedMenu === "Fire" &&
                  "bg-primary text-white rounded-r-md"
                }`}
                onClick={() => {
                  setSelectedMenu("Fire");
                }}
              >
                <img className="h-7 sm:h-5 md:h-6" src={Fire} alt="Fire" />
                <p className="sm:text-xs md:text-xs">Fire</p>
              </div>
            </Link>
            <div
              className={`flex items-center gap-2 py-3 pl-4 cursor-pointer ${
                selectedMenu === "Mold" && "bg-primary text-white rounded-r-md"
              }`}
              onClick={() => {
                setSelectedMenu("Mold");
              }}
            >
              <img className="h-7 sm:h-5 md:h-6" src={Mold} alt="Mold" />
              <p className="sm:text-xs md:text-xs">Mold</p>
            </div>
            <Link to="/security">
              <div
                className={`flex items-center gap-2 py-3 pl-4 cursor-pointer ${
                  selectedMenu === "Security" &&
                  "bg-primary text-white rounded-r-md"
                }`}
                onClick={() => {
                  setSelectedMenu("Security");
                }}
              >
                <img
                  className="h-7 sm:h-5 md:h-6"
                  src={Security}
                  alt="Security"
                />
                <p className="sm:text-xs md:text-xs">Security</p>
              </div>
            </Link>
            <div
              className={`flex items-center gap-2 py-3 pl-4 cursor-pointer ${
                selectedMenu === "Insurance" &&
                "bg-primary text-white rounded-r-md"
              }`}
              onClick={() => {
                setSelectedMenu("Insurance");
              }}
            >
              <img className="h-6 sm:h-4" src={Insurance} alt="Insurance" />
              <p className="sm:text-xs md:text-xs">Insurance</p>
            </div>
            <div
              className={`flex items-center gap-2 py-3 pl-4 cursor-pointer ${
                selectedMenu === "System Monitoring" &&
                "bg-primary text-white rounded-r-md"
              }`}
              onClick={() => {
                setSelectedMenu("System Monitoring");
              }}
            >
              <img className="h-6 sm:h-4" src={Monitoring} alt="Monitoring" />
              <p className="sm:text-xs md:text-xs">System Monitoring</p>
            </div>
            <div
              className={`flex items-center gap-2 py-3 pl-4 cursor-pointer ${
                selectedMenu === "Weather" &&
                "bg-primary text-white rounded-r-md"
              }`}
              onClick={() => {
                setSelectedMenu("Weather");
              }}
            >
              <img className="h-7 sm:h-5 md:h-6" src={Weather} alt="Weather" />
              <p className="sm:text-xs md:text-xs">Weather</p>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex items-center gap-2 py-3 pl-4 cursor-pointer ${
              selectedMenu === "Reports" && "bg-primary text-white rounded-r-md"
            }`}
            onClick={() => {
              setSelectedMenu("Reports");
            }}
          >
            <img className="h-6 sm:h-4" src={Report} alt="Report" />
            <p className="sm:text-xs md:text-xs">Reports</p>
          </div>
          <div
            className={`flex items-center gap-2 py-3 pl-4 cursor-pointer ${
              selectedMenu === "Administrator" &&
              "bg-primary text-white rounded-r-md"
            }`}
            onClick={() => {
              setSelectedMenu("Administrator");
            }}
          >
            <img
              className="h-7 sm:h-5 md:h-6"
              src={Admnistrator}
              alt="Admnistrator"
            />
            <p className="sm:text-xs md:text-xs">Administrator</p>
          </div>
          <div
            className={`flex items-center gap-2 py-3 pl-4 cursor-pointer ${
              selectedMenu === "RezyAI Analytics" &&
              "bg-primary text-white rounded-r-md"
            }`}
            onClick={() => {
              setSelectedMenu("RezyAI Analytics");
            }}
          >
            <img
              className="h-7 sm:h-5 md:h-6"
              src={Analytics}
              alt="Analytics"
            />
            <p className="sm:text-xs md:text-xs">RezyAI Analytics</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
