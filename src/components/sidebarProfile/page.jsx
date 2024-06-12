"use client";
import { Button } from "@material-tailwind/react";
import React from "react";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import MailIcon from "@mui/icons-material/Mail";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";

function SidebarProfile() {
  const iconClass = {
    color: "#9a95a7",
    fontSize: "25px",
  };
  const listIntroduce = [
    {
      Label: "Mail",
      title: "nguyen@gmail.com",
      icon: <MailIcon sx={iconClass} />,
    },
    {
      Label: "Phone",
      title: "03276685564",
      icon: <PhoneEnabledIcon sx={iconClass} />,
    },
    {
      Label: "Location",
      title: "Phu Quoc, Kien Giang",
      icon: <FmdGoodIcon sx={iconClass} />,
    },
    {
      Label: "Current Location",
      title: "Can Tho",
      icon: <GpsFixedIcon sx={iconClass} />,
    },
  ];
  return (
    <div className="w-full flex flex-col gap-2 h-max pb-[2rem]">
      {/*information of user */}
      <div className=" bg-boxColor rounded-xl border_element min-h-20 flex flex-col gap-4 p-[20px]">
        <h1 className="w-full h-max text-xl text-title font-bold">Introduce</h1>
        <div className="w-full flex flex-col gap-3">
          {listIntroduce.map((vl, idx) => (
            <div key={idx} className="w-full flex items-center gap-3">
              {vl.icon}
              <>
                <p className=" text-click_title text-base">{vl.Label}</p>
                <p className="font-bold text-base text-title">{vl.title}</p>
              </>
            </div>
          ))}
        </div>
        <Button size="sm" variant="filled">
          Edit Information
        </Button>
      </div>
      {/* List image of user  */}
      <div className=" bg-boxColor rounded-xl border_element min-h-20 h-auto flex flex-col gap-4 p-[20px]">
        <div className="flex w-full justify-between">
          <h1 className="w-max h-max text-xl text-title font-bold">Images</h1>
          <p className="text-buttonColor text-base cursor-pointer rounded-xl px-2 flex items-center justify-center hover:bg-buttonColor hover:bg-opacity-5">
            Watch more
          </p>
        </div>
        {/* list image by user */}
        <div className="grid grid-cols-3 auto-rows-fr gap-1 w-full min-h-[10rem] h-auto rounded-xl overflow-hidden">
          {Array.from(new Array(9)).map((_, idx) => (
            <div key={idx} className="h-[7.5rem]">
              {/*eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://docs.material-tailwind.com/img/face-2.jpg"
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      {/* list friend of user */}
      <div className=" bg-boxColor rounded-xl border_element min-h-20 h-auto flex flex-col gap-4 p-[20px]">
        <div className="flex w-full justify-between items-start">
          <div className="w-max h-max flex flex-col items-start gap-1">
            <h1 className="w-max h-max text-xl text-title font-bold">Friend</h1>
            <h1 className="w-max h-max text-base text-click_title">
              1.200 friend
            </h1>
          </div>
          <p className="text-buttonColor text-base cursor-pointer rounded-xl px-2 flex items-center justify-center hover:bg-buttonColor hover:bg-opacity-5">
            See all friend
          </p>
        </div>
        {/* list image by user */}
        <div className="grid grid-cols-3 auto-rows-fr gap-2 w-full min-h-[10rem] h-auto">
          {/* map 9 friend in list of user */}
          {Array.from(new Array(9)).map((_, idx) => (
            <div key={idx} className="h-[9rem] flex flex-col items-start gap-1">
              <div className="w-full h-[80%]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://docs.material-tailwind.com/img/face-2.jpg"
                  alt="image"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <p className="text-base text-title font-bold">Tan nguyen</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SidebarProfile;
