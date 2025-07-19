"use client";
import React, { useEffect, useState } from "react";
import { Avatar } from "@material-tailwind/react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CommentIcon from "@mui/icons-material/Comment";
import { CommentCore } from "../commentCore/page.jsx";
import { UseCondition } from "@/src/hooks/useCondition.jsx";

function Artical({ openImage, item }) {
  const [isOpenCmt, setIsOpenCmt] = useState(false);
  const [popupOpen, setPopupOpen] = useState(null);

  console.log(item.images.length);

  // ** Handler
  const horizonClick = (val) => {
    setPopupOpen(val.id);
  };

  const closeHorizon = () => {
    setPopupOpen(null);
  };

  const countImage = item.images.length;
  return (
    <>
      <article
        className={`w-full h-auto p-[20px] bg-boxColor rounded-xl flex flex-col gap-3 border_element `}
      >
        <div className="flex flex-row items-center justify-between ">
          <div className="flex flex-row items-center gap-2 h-14 ">
            <Avatar
              src="https://docs.material-tailwind.com/img/face-2.jpg"
              alt="avatar"
              size="md"
              variant="rounded"
            />
            <div className="h-1/2 flex flex-col items-start justify-between">
              <p className="text-base font-bold text-title ">Name</p>
              <p className="text-sm text-small_text">time</p>
            </div>
          </div>
          {/* TODO: Adding onlick here for showing popup */}
          <MoreHorizIcon
            className="cursor-pointer"
            onClick={() => horizonClick(item)}
          />
        </div>

        <div className="w-full h-auto">
          <p className="text-base break-words text-des_text ">
            day la doan text day la doan text day la doan text day la doan text
            day la doan text day la doan text day la doan text day la doan text
            day la doan text day la doan text day la doan text day la doan text
            day la doan text day la doan text day la doan text day la doan text
            day la doan text day la doan text day la doan text day la doan text
            day la doan text day la doan text day la doan text day la doan text
            day la doan text day la doan text day la doan text day la doan text
            day la doan text day la doan text
          </p>
        </div>

        {/* check if image array is 2 or 3 image its will be grid layout, if only 1 image its just showing normal layout */}
        <div
          className={`${item.images.length >= 3 && " grid-rows-2 "} ${
            item.images.length !== 1 && "grid grid-cols-2 gap-2"
          } w-full min-h-10 rounded-xl`}
        >
          {item.images.slice(0, 3).map((val, idx) => (
            <div
              key={idx}
              onClick={() => openImage()}
              className={`${
                item.images.length >= 3 && idx === 0 && "row-start-1 row-end-3"
              } ${countImage > 3 && idx === 2 && "relative"}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={val.img}
                alt="no thing"
                className="w-full h-full object-cover"
              />
              {countImage > 3 && idx === 2 && (
                <div className="absolute bg-black bg-opacity-60 top-0 left-0 w-full h-full flex items-center justify-center cursor-pointer">
                  <p className="text-gray-50 font-bold text-3xl">
                    {countImage - 3}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="w-full flex">
          <div className="py-1 px-5 flex items-center gap-2 cursor-pointer hover:bg-blue-gray-50">
            <ThumbUpOffAltIcon sx={{ color: "#3f3f3f", fontSize: "25px" }} />
            <p className="text-base text-title">Like</p>
          </div>
          <div
            className="py-1 px-4 flex items-center gap-2 cursor-pointer hover:bg-blue-gray-50 select-none"
            onClick={() => setIsOpenCmt((prev) => !prev)}
          >
            <CommentIcon sx={{ color: "#3f3f3f", fontSize: "25px" }} />
            <p className="text-base text-title">Comment</p>
          </div>
        </div>
        <CommentCore isOpen={isOpenCmt} />
      </article>
      <UseCondition isTrue={popupOpen === item.id}>
        <div
          onClick={() => closeHorizon()}
          id="container"
          className="fixed pt-5  inset-0 z-40 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center "
        >
          <div className="p-[20px] min-h-[22rem] max-h-[40rem] w-[727px] bg-boxColor rounded-xl flex flex-col justify-start gap-2">
            hi this is my popup
          </div>
        </div>
      </UseCondition>
    </>
  );
}

export default Artical;
