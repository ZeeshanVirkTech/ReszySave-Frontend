import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
const AlertTab3 = ({ index, alert }) => {
  return (
    <div
      className={`flex flex-col rounded-md p-4 ${
        alert.notifyType === "Danger"
          ? "bg-[#FFC7C4]"
          : alert.notifyType === "Warning"
          ? "bg-warningBg"
          : "bg-lightGrayBg"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <p className="font-semibold  md:text-xs sm:text-xs">26 March, </p>
          <p className=" md:text-xs sm:text-xs">10:00 AM</p>
        </div>
        <MdArrowForwardIos className="text-[23px] sm:text-[15px]" />
      </div>
      <p className="sm:text-xs">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus
        magni, harum sint ducimus delectus cupiditate consectetur repudiandae
        laborum deleniti facere minus at quaerat expedita. Possimus dolorem
        reiciendis, dolores adipisci magnam consequuntur soluta delectus vero,
        porro doloremque, reprehenderit qui autem vel facilis cupiditate ducimus
        iusto excepturi deleniti tenetur architecto libero voluptate!
      </p>
    </div>
  );
};

export default AlertTab3;
