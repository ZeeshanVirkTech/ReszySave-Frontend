import React from "react";
import ALertIcon from "../assets/alertIcon-blue.png";
import CalenderIcon from "../assets/calendar.png";
import AlertBlue from "../assets/alertBlue.png";
import AlertYellow from "../assets/alertYellow.png";
import Timer from "../assets/timer.png";
import InsuranceIcon from "../assets/insuranceIcon-blue.png";
import { alertTabData2, alertTabData3 } from "../data/alertTabData";
import AlertTab2 from "./AlertTabs/AlertTab2";
import AlertTab3 from "./AlertTabs/AlertTab3";
const AlertSummary2 = () => {
  return (
    <div className="bg-lightGrayBg w-full p-4 sm:p-2 rounded-md">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img className="h-6 md:h-5 sm:h-4" src={ALertIcon} alt="icon" />
            <p className="font-semibold md:text-xs sm:text-xs">Alert Summary</p>
          </div>
          <div className="flex items-center gap-2 bg-[#C0D9FF] p-2 cursor-pointer rounded-md">
            <p className="text-primary font-semibold text-xs ">FILTER</p>
            <img className="h-4 sm:h-3" src={CalenderIcon} alt="icon" />
          </div>
        </div>
        <div className="bg-white rounded-md p-4 sm:p-2 flex flex-col gap-3">
          <div className="flex items-center flex-row sm:flex-col sm:items-start gap-4">
            <div className="flex items-center justify-between w-1/2 sm:w-full">
              <div className="flex items-center gap-3">
                <img className="h-8" src={AlertBlue} alt="" />
                <div>
                  <p className="md:text-[13px] sm:text-[10px] sm:font-semibold md:font-semibold">Alerts</p>
                  <p className="font-semibold">600</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-[#C0D9FF] p-2 cursor-pointer rounded-md">
                <p className="font-semibold text-xs md:text-[13px] sm:text-[10px]">ALERT HISTORY</p>
                <img className="h-4" src={Timer} alt="icon" />
              </div>
            </div>
            <div className="flex items-center justify-between w-1/2 sm:w-full">
              <div className="flex items-center gap-3">
                <img className="h-8" src={AlertYellow} alt="" />
                <div>
                  <p className="md:text-[13px] sm:text-[10px] sm:font-semibold md:font-semibold">Active Alerts</p>
                  <p className="font-semibold">06</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="bg-lightGrayBg p-3 rounded-md">
              <div className="flex items-center gap-1">
                <img className="h-5 md:h-5 sm:h-4" src={InsuranceIcon} alt="" />
                <p className="font-semibold md:text-xs sm:text-xs">Active Alerts</p>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-2">
              {alertTabData2.map((alert, index) => (
                <AlertTab2 index={index} alert={alert} />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="bg-lightGrayBg p-3 rounded-md">
              <div className="flex items-center gap-1">
                <img className="h-5 md:h-5 sm:h-4" src={InsuranceIcon} alt="" />
                <p className="font-semibold md:text-xs sm:text-xs">Insights</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              {alertTabData3.map((alert, index) => (
                <AlertTab3 index={index} alert={alert} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertSummary2;
