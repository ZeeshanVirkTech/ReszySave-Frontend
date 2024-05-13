import React from "react";
import AlertSummary2 from "../components/AlertSummary2";
import LiveIcon from "../assets/liveIconBlue.png";
import MaximizeIcon from "../assets/maximizeIconblue.png";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
const Security = () => {
  const navigate = useNavigate();
  const cameras = useSelector((state) => state.auth.camerasDetails.slice(2));
  return (
    <div className="flex justify-between flex-col xl:flex-row gap-3">
      <AlertSummary2 />
      <div className="flex flex-col gap-3 xl:w-1/2 w-full bg-lightGrayBg p-4 sm:p-2 rounded-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img className="h-4 sm:h-3" src={LiveIcon} alt="icon" />
            <p className="font-semibold md:text-xs sm:text-xs">Live Footage</p>
          </div>
          <img
            className="h-4 cursor-pointer sm:h-3"
            src={MaximizeIcon}
            alt="icon"
            onClick={() => {
              navigate("/allsecuritycameras");
            }}
          />
        </div>
        <div className="flex flex-col gap-3">
          {cameras.map((camera, index) => (
            <div className="w-full h-48 rounded-md">
              <ReactPlayer
                url={camera?.videoUrl}
                controls={false}
                loop
                playing={true}
                width="100%"
                height="100%"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Security;
