import React from "react";
import LiveIcon from "../assets/liveIconBlue.png";
import MinimizeIcon from "../assets/minimizeIcon.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player";
const AllSecurityCameras = () => {
  const navigate = useNavigate()
  const cameras = useSelector((state) => state.auth.camerasDetails);
  return (
    <div className="flex flex-col gap-3 bg-lightGrayBg p-4 rounded-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img className="h-4" src={LiveIcon} alt="icon" />
          <p className="font-semibold">Live Footage</p>
        </div>
        <img className="h-4 cursor-pointer" src={MinimizeIcon} alt="icon" onClick={()=>{
            navigate("/security")
          }}/>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {cameras.map((camera, index) => (
          <div className="w-full h-48 rounded-md">
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
  );
};

export default AllSecurityCameras;
