import CreateComment from "@/src/components/create-comment/page";
import { UseCondition } from "@/src/hooks/useCondition.jsx";
import { Avatar } from "@material-tailwind/react";
import React from "react";

export const CommentCore = ({ isOpen }) => {
  return (
    <UseCondition isTrue={isOpen}>
      <div className="w-full h-auto min-h-[20rem] border-solid flex flex-col gap-5">
        <CreateComment />
        <div className="w-full h-auto min-h-[5rem] p-[0.4rem] rounded-xl border-solid border-backdrop border-2 flex flex-row items-start gap-2">
          <div className="h-max w-max shrink-0">
            <Avatar
              src="https://docs.material-tailwind.com/img/face-2.jpg"
              alt="avatar"
              size="md"
              className="cursor-pointer"
            />
          </div>
          <div className="grow h-full pt-[0.3rem] flex flex-col justify-start items-start gap-2">
            <p className="text-base font-bold text-title ">Name</p>
            <p className="text-base break-words text-des_text ">
              text day la doan text day la doan text day la doan text day la
              doan text day la doan text day la doan text day la doan text day
            </p>
          </div>
        </div>
      </div>
    </UseCondition>
  );
};
