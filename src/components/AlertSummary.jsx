import React, { useState } from "react";
import AlertWhite from "../assets/alertIcon-white.png";
import FilterIconWhite from "../assets/filterIcon-blue.png";
import { contentData } from "../data/alertsData";
import AlertTab from "./AlertTabs/AlertTab";
const AlertSummary = () => {
  const [selectedTab, setSelectedTab] = useState("tab1");
  const handleTabClick = (tabId) => {
    setSelectedTab(tabId);
  };
  const selectedContent = contentData.find((tab) => tab.id === selectedTab);
  return (
    <div className="w-full bg-white p-4 sm:p-2 flex flex-col gap-4 rounded-xl">
      <div className="bg-primary2 p-3 text-white rounded-md flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <img className="h-6 md:h-5 sm:h-4" src={AlertWhite} alt="Alert Icon" />
          <p className="md:text-[13px] sm:text-[10px]">Alert Summary</p>
        </div>
        <div className="bg-[#C0D9FF] flex items-center gap-2 px-3 py-2 sm:py-1 sm:px-2 rounded-md cursor-pointer">
          <p className="text-primary2 text-sm font-semibold md:text-[13px] sm:text-[10px]">SORT BY</p>
          <img className="h-4 sm:h-3" src={FilterIconWhite} alt="Filter Icon" />
        </div>
      </div>
      <div>
        <div className="flex flex-col lg:flex-row xl:flex-row bg-white">
          {contentData.map((tab) => (
            <div
              key={tab.id}
              className={`px-4 py-2 focus:outline-none w-full lg:w-auto xl:w-auto xl:flex-grow rounded-t-lg md:rounded-lg sm:rounded-lg cursor-pointer ${
                selectedTab === tab.id ? "bg-[#edf1f7]" : ""
              }`}
              onClick={() => handleTabClick(tab.id)}
            >
              <div className="flex items-center gap-4">
                <img
                  className={`sm:h-10 lg:h-10 xl:h-12 md:h-10`}
                  src={tab.icon}
                  alt={`${tab.text} Icon`}
                />
                <div className="flex flex-col justify-start">
                  <p className="text-[#5C626E] text-[12px] sm:text-sm md:text-base xl:text-lg lg:w-20">
                    {tab.text}
                  </p>
                  <p
                    className={`text-[${tab.numberColor}] text-3xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl`}
                  >
                    {tab.number}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[#edf1f7] -mt-2 rounded">
          <div className="p-4 sm:p-2">
            <div className="bg-white w-full p-2 rounded-md flex items-center gap-2">
              <img className="h-4" src={selectedContent.smallIcon} alt="Icon" />
              <p className="text-primary font-semibold text-sm sm:text-[12px]">
                {selectedContent.title}
              </p>
            </div>
            <div className="grid xl:grid-cols-2 sm:grid-cols-1 gap-2 mt-2">
              {selectedContent.alerts.map((alert, index) => (
                <AlertTab index={index} alert={alert} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertSummary;
