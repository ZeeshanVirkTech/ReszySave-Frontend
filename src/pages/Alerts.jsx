import React from "react";
import AlertSummary from "../components/AlertSummary";
import FilterIconWhite from "../assets/filterIcon-blue.png";
import History from "../assets/history.png";
import { RxCross2 } from "react-icons/rx";
import Table from "../components/Tables/Table";
import CustomTable from "../components/Tables/CustomTable";
import CustomTable2 from "../components/Tables/CustomTable2";
const Alerts = () => {
  return (
    <>
      <AlertSummary />
      <div className="w-full bg-white p-4 flex flex-col gap-4 rounded-xl mt-2">
        <div className="bg-primary2 p-3 text-white rounded-md flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <img className="h-6" src={History} alt="Alert Icon" />
            <p>Alert Summary</p>
          </div>
          <div className="flex items-center gap-4">
            <p>600 items</p>
            <div className="bg-[#C0D9FF] flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer">
              <p className="text-primary2 text-sm font-semibold">SORT BY</p>
              <img className="h-4" src={FilterIconWhite} alt="Filter Icon" />
            </div>
            <RxCross2 className="text-[2px] cursor-pointer" />
          </div>
        </div>
        {/* <Table /> */}
        <CustomTable />
        {/* <CustomTable2 /> */}
      </div>
    </>
  );
};

export default Alerts;
