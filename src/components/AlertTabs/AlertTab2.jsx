import React from "react";
import LinkIcon from "../../assets/linkIcon.png";
const AlertTab2 = ({ index, alert }) => {
  return (
    <div key={index} className="">
      <div
        className={`p-2 ${
          alert.notifyType === "Danger"
            ? "bg-[#ffc7c4] text-danger border-2 border-danger"
            : alert.notifyType === "Warning"
            ? "bg-warningBg text-warning border-2 border-warning"
            : ""
        }  rounded-md flex flex-col gap-2`}
      >
        <div className="flex items-center justify-between sm:gap-4 sm:flex-col sm:items-start">
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-full bg-danger" />
            <p className=" font-semibold text-xs  ">{alert.alertType}</p>
            <p className=" font-semibold text-xs ">{alert.location}</p>
            
          </div>
          <div className="flex items-center gap-2">
            <div
              className={`${
                alert.statusType === "New"
                  ? "bg-[#01337C] text-white"
                  : alert.statusType === "Late"
                  ? "bg-danger text-white"
                  : ""
              } text-xs py-1 px-1 rounded-md font-semibold `}
            >
              {alert.statusType}
            </div>
            <div
              className={`${
                alert.notifyType === "Danger"
                  ? "bg-danger border-danger"
                  : alert.notifyType === "Warning"
                  ? "bg-warning border-warning"
                  : ""
              } text-xs py-1 px-1 border-2 rounded-md font-semibold text-white flex items-center gap-1 cursor-pointer `}
            >
              <p>{alert.tasks} Tasks</p>
              <img className="h-4" src={LinkIcon} alt="icon" />
            </div>
          </div>
          
        </div>
        <div className="flex  items-center justify-between sm:flex-col sm:gap-4 sm:items-start">
          <div className="flex items-center gap-3 ">
            <p className="text-xs">{alert.unit}</p>
            <div
              className={`${
                alert.notifyType === "Danger"
                  ? "border-danger"
                  : alert.notifyType === "Warning"
                  ? "border-warning"
                  : ""
              } border-2 p-1 rounded-md bg-white cursor-pointer font-semibold text-xs `}
            >
              OCCUPIED
            </div>
          </div>
          <p className="text-[#5C626E] text-xs flex  items-center"><p className="font-semibold">{alert.date}</p>, {alert.time}</p>
        </div>
      </div>
    </div>
  );
};

export default AlertTab2;
