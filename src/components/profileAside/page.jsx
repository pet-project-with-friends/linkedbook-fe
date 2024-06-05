"use client";
import { Avatar } from "@material-tailwind/react";
import React from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PersonIcon from "@mui/icons-material/Person";
import PeopleIcon from "@mui/icons-material/People";

function ProfileAside() {
  const featureList = [
    {
      icon: <BookmarkIcon sx={{ color: "#9a95a7", fontSize: "20px" }} />,
      name: "Saved items",
    },
    {
      icon: <PersonIcon sx={{ color: "#9a95a7", fontSize: "20px" }} />,
      name: "Your profile",
    },
    {
      icon: <PeopleIcon sx={{ color: "#9a95a7", fontSize: "20px" }} />,
      name: "Friends list",
    },
  ];
  return (
    <div className="w-[225px] rounded-xl flex flex-col gap-5 ">
      <div className="w-full min-h-60 pb-2 rounded-xl bg-boxColor flex flex-col border-solid border-border_element border-[2px]">
        <div className="w-full h-24 rounded-t-xl relative flex flex-col">
          <div className="flex-[2_0_0] rounded-t-xl bg-gradient-to-r from-[#a0b4b7] to-[#c2d8db]"></div>
          <div className="flex-[1_0_0]"></div>
          <Avatar
            src="https://docs.material-tailwind.com/img/face-2.jpg"
            alt="avatar"
            size="xl"
            className="absolute translate-y-[25%] left-[50%] translate-x-[-50%]"
          />
        </div>
        <div className="w-full flex flex-col items-center gap-1">
          <h1 className="text-base font-bold text-title">Tan Nguyen</h1>
          <p className="text-sm text-small_text">Studen at fpt university</p>
        </div>
        <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        {featureList.map((vl, idx) => (
          <div
            key={idx}
            className="py-1 pl-2 w-full hover:bg-blue-gray-50 flex justify-start gap-4 cursor-pointer"
          >
            {vl.icon}
            <p className="text-sm text-click_title font-bold">{vl.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfileAside;
