import React from "react";
import LinkIcon from "../../assets/linkIcon.png";
const AlertTab = ({index, alert}) => {
  return (
    <div key={index} className="">
      <div
        className={`p-4 sm:p-2 ${
          alert.notifyType === "Danger"
            ? "bg-[#ffc7c4] text-danger border-2 border-danger"
            : alert.notifyType === "Warning"
            ? "bg-warningBg text-warning border-2 border-warning"
            : ""
        }  rounded-md flex flex-col gap-4`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 sm:flex-col sm:items-start">
            <div className="h-7 w-7 rounded-full bg-danger " />
            <p className=" font-semibold text-sm  md:text-xs sm:text-xs ">{alert.alertType}</p>
            <p className=" font-semibold text-sm md:text-xs sm:text-xs ">{alert.location}</p>
            <div
              className={`${
                alert.notifyType === "Danger"
                  ? "bg-danger"
                  : alert.notifyType === "Warning"
                  ? "bg-warning"
                  : ""
              } text-white p-2 rounded-md`}
            >
              <p className="text-xs">{alert.status}</p>
            </div>
          </div>
          <p className="text-[#5C626E] text-sm md:text-xs sm:text-xs">{alert.time}</p>
        </div>
        <div className="flex  items-center justify-between sm:flex-col sm:gap-4 sm:items-start">
          <div className="flex items-center gap-3 ">
            <p className="text-sm md:text-xs sm:text-xs">{alert.unit}</p>
            <div
              className={`${
                alert.notifyType === "Danger"
                  ? "border-danger"
                  : alert.notifyType === "Warning"
                  ? "border-warning"
                  : ""
              } border-2 p-1 rounded-md bg-white cursor-pointer font-semibold text-xs`}
            >
              OCCUPIED
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div
              className={`${
                alert.statusType === "New"
                  ? "bg-newBgColor border-newColor text-newColor"
                  : alert.statusType === "InProgress"
                  ? "bg-inProgressbgColor border-inProgressColor text-inProgressColor"
                  : ""
              } text-sm py-1 px-2 border-2 md:text-xs sm:text-xs rounded-md font-semibold `}
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
              } text-sm py-1 px-2 border-2 md:text-xs sm:text-xs rounded-md font-semibold text-white flex items-center gap-2 cursor-pointer`}
            >
              <p>{alert.tasks} Tasks</p>
              <img className="h-4" src={LinkIcon} alt="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertTab;
