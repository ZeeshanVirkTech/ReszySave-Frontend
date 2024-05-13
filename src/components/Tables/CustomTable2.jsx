import React from "react";
import { tableData } from "../../data/tableData";
import LinkBlue from "../../assets/linkBlue.png";
const CustomTable2 = () => {
  return (
    <div>
      <div className="grid grid-cols-5 items-center justify-between p-3 bg-[#31353B] text-white text-xs rounded-md uppercase font-semibold">
        <p>Device Id</p>
        <p>PROPERTY</p>
        <p>CLOSE DATE</p>
        <p className="">UNIT STATUS</p>
        <p className="text-right">ACTION</p>
      </div>
      <div className="flex flex-col gap-2 pt-2">
        {tableData.map((item, index) => (
          <div
            className="grid grid-cols-5 items-center justify-between bg-lightGrayBg p-3 rounded-md"
            key={index}
          >
            <div>
              <p className="text-sm font-semibold">{item.created}</p>
              <p className="text-xs text-[#5C626E]">{item.time}</p>
            </div>
            <div>{item.property}</div>
            <div>
              <p className="text-sm font-semibold">{item.created}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="px-3 py-1 bg-white w-fit rounded-md uppercase text-sm font-semibold">
                {item.unitStatus}
              </div>
              <div className="px-3 py-1 bg-white w-fit rounded-md uppercase text-sm font-semibold">
                {item.unitStatus}
              </div>
            </div>
            <div className="flex justify-end">
              <img className="h-6 cursor-pointer" src={LinkBlue} alt="icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomTable2;
