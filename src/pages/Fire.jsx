import React from "react";
import AlertSummary2 from "../components/AlertSummary2";
import SummaryIcon from "../assets/deviceSummary.png";
import DeviceIcon from "../assets/deviceIcon.png";
import OnlineIcon from "../assets/onlineIcon.png";
import FilterIcon from "../assets/filterIcon-blue.png";
import { MdArrowForwardIos } from "react-icons/md";
import BarChart from "../components/Charts/BarChart";
import { barCharData } from "../data/barChartData";
const Fire = () => {
  return (
    <div className="flex flex-col xl:flex-row justify-between gap-3">
      <AlertSummary2 />
      <div className="flex flex-col gap-3 xl:w-1/2 w-full bg-lightGrayBg p-4 rounded-md">
        <div className="flex items-center gap-2">
          <img className="h-4 sm:h-3" src={SummaryIcon} alt="icon" />
          <p className="font-semibold  md:text-xs sm:text-xs">Device Summary</p>
        </div>
        <div className="flex items-center justify-between bg-white rounded-md py-1 px-2">
          <div className="flex items-center gap-2">
            <img
              className="h-10 sm:h-6 bg-[#C0D9FF] p-2 sm:p-1 rounded-md"
              src={DeviceIcon}
              alt=""
            />
            <div className="flex flex-col gap-0">
              <p className="text-[#5C626E]  md:text-xs sm:text-xs">Total Devices</p>
              <p className="text-primary font-semibold text-2xl  md:text-lg sm:text-lg">376</p>
            </div>
          </div>
          <MdArrowForwardIos className="text-[23px] sm:text-[15px]" />
        </div>
        <div className=" flex flex-col gap-4">
          {barCharData.map((data) => (
            <div className="flex flex-col gap-3 bg-white rounded-md p-2" key={data.id}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <img className="h-5" src={data.icon} alt="" />
                  <div className="flex items-center gap-1">
                    <p className="text-[#5c626e]  md:text-xs sm:text-xs">{data.title}</p>
                    <p className="font-semibold  md:text-xs sm:text-xs">{data.total} %</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-[#C0D9FF] p-2 cursor-pointer rounded-md">
                  <p className="text-primary font-semibold text-xs">FILTER</p>
                  <img className="h-4 sm:h-3" src={FilterIcon} alt="icon" />
                </div>
              </div>
              <div className="bg-lightGrayBg h-[1px] w-full px-6" />
              <BarChart />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fire;
