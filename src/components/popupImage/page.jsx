import { UseCondition } from "@/src/hooks/useCondition.jsx";
import React from "react";

const PopupImage = ({ isOpen, isClose, blogId }) => {
  return (
    <UseCondition isTrue={isOpen}>
      <div
        onClick={() => isClose()}
        id="container"
        className="fixed pt-5  inset-0 z-40 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center "
      >
        <div className="p-[20px] min-h-[22rem] max-h-[40rem] w-[727px] bg-boxColor rounded-xl flex flex-col justify-start gap-2">
          hi this is my popup
        </div>
      </div>
    </UseCondition>
  );
};

export default PopupImage;
