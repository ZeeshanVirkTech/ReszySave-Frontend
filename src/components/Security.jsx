import React from "react";
import SecurityIcon from "../assets/securityIcon.png";
import LiveIcon from "../assets/liveIcon.png";
import MaximizeIcon from "../assets/maximizeIcon.png";
import { MdKeyboardArrowUp } from "react-icons/md";
import InsuranceIcon from "../assets/insuranceIcon-blue.png";
import AlertTab from "./AlertTabs/AlertTab";
import { alertTabData } from "../data/alertTabData";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player";
const Security = () => {
  const cameras = useSelector((state) => state.auth.camerasDetails.slice(0, 4));
  return (
    <div className="w-full bg-white p-4 flex flex-col gap-4 rounded-xl mt-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            className="h-5 md:h-4 sm:h-4"
            src={SecurityIcon}
            alt="security"
          />
          <p className="text-primary font-semibold md:text-xs sm:text-xs">
            Security
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-danger text-white px-2 py-1 rounded-md cursor-pointer md:text-xs sm:text-xs">
            Alert: 1
          </div>
          <div className="bg-warning text-white px-2 py-1 rounded-md cursor-pointer md:text-xs sm:text-xs">
            Insights: 4
          </div>
          <MdKeyboardArrowUp className="text-[30px] md:text-[25px] text-primary cursor-pointer" />
        </div>
      </div>
      <div className="flex justify-between xl:flex-row flex-col  gap-2">
        <div className="xl:w-1/2 flex flex-col gap-2">
          <div className="bg-primary flex items-center justify-between rounded-md p-2">
            <div className="flex items-center gap-2 text-white">
              <img className="h-5 md:h-4 sm:h-4" src={LiveIcon} alt="icon" />
              <p className="md:text-xs sm:text-xs">Live Footage</p>
            </div>
            <img className="h-5 md:h-4 sm:h-4" src={MaximizeIcon} alt="icon" />
          </div>
          <div className="flex flex-wrap gap-3 lg:gap-1">
            {cameras.map((camera, index) => (
               <div className="xl:w-[48%] lg:w-[49%] w-[48%] sm:w-full h-48 rounded-md">
               <ReactPlayer
                 url={camera?.videoUrl}
                 controls={false}
                 loop
                 playing = {true}
                 width="100%"
                 height="100%"
               />
             </div>
            ))}
          </div>
        </div>
        <div className="xl:w-1/2  bg-[#EDF1F7] p-4 rounded-md flex flex-col gap-4">
          <div>
            <div className="flex items-center gap-2">
              <img className="h-5 md:h-4 sm:h-4" src={InsuranceIcon} alt="" />
              <p className="font-semibold md:text-xs sm:text-xs">
                Alerts & Insights
              </p>
              <div className="px-2 py-1 bg-white rounded-md md:text-xs sm:text-xs">
                Alert: 2
              </div>
              <div className="px-2 py-1 bg-white rounded-md md:text-xs sm:text-xs">
                Insights: 1
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {alertTabData.map((alert, index) => (
              <AlertTab index={index} alert={alert} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
