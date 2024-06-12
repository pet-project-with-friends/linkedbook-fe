"use client";
import { Avatar } from "@material-tailwind/react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import React from "react";

function Page() {
  return (
    <div className=" w-full grid grid-cols-2 auto-rows-auto gap-5 bg-boxColor rounded-xl border_element p-[20px]">
      {Array.from(new Array(4)).map((_, idx) => (
        <div
          key={idx}
          className="min-h-[8rem] p-[10px] max-h-[10rem] border_element flex justify-between items-center rounded-xl "
        >
          <div className="flex items-center gap-2">
            <Avatar
              src="https://docs.material-tailwind.com/img/face-2.jpg"
              alt="avatar"
              size="xxl"
              variant="rounded"
            />
            <p className="text-base text-title font-bold">Tan Nguyen</p>
          </div>
          <MoreHorizIcon className="cursor-pointer" />
        </div>
      ))}
    </div>
  );
}

export default Page;
