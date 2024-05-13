import React from "react";
import { tableData } from "../../data/tableData";
import LinkBlue from "../../assets/linkBlue.png";
const Table = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-white uppercase bg-[#31353B] rounded-t-md">
          <tr>
            <th scope="col" className="px-6 py-3 font-semibold tex-sm">
              Created
            </th>
            <th scope="col" className="px-6 py-3 font-semibold tex-sm">
              PROPERTY
            </th>
            <th scope="col" className="px-6 py-3 font-semibold tex-sm">
              UNIT STATUS
            </th>
            <th scope="col" className="px-6 py-3 font-semibold tex-sm">
              CLOSE DATE
            </th>
            <th scope="col" className="px-6 py-3 text-right">
              ACTION
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {tableData.map((item, index) => (
            <tr className="bg-lightGrayBg border-b text-[#5C626E]">
              <th scope="row" className="px-6 py-4">
                <div>
                  <p className="text-sm font-semibold">{item.created}</p>
                  <p className="text-xs text-[#5C626E]">{item.time}</p>
                </div>
              </th>
              <td className="px-6 py-4 font-semibold">{item.property}</td>
              <td className="px-6 py-4">
                <div className="px-3 py-1 bg-white w-fit rounded-md uppercase text-sm font-semibold">
                  {item.unitStatus}
                </div>
              </td>
              <td className="px-6 py-4">
                <div>
                  <p className="text-sm font-semibold">{item.created}</p>
                  <p className="text-xs text-[#5C626E]">{item.time}</p>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex justify-end">
                  <img
                    className="h-6 cursor-pointer"
                    src={LinkBlue}
                    alt="icon"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
