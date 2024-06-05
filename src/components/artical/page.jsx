"use client";
import React from "react";
import { Avatar } from "@material-tailwind/react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CommentIcon from "@mui/icons-material/Comment";

function Artical() {
  const fakeImg = [
    {
      img: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    },
    {
      img: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    },
    {
      img: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    },
  ];
  const countImage = 13;
  return (
    <>
      <article className="w-full h-auto p-[20px] bg-boxColor rounded-xl flex flex-col gap-3 border-solid border-border_element border-[2px]">
        <div className="flex flex-row items-center justify-between ">
          <div className="flex flex-row items-center gap-2 h-14 ">
            <Avatar
              src="https://docs.material-tailwind.com/img/face-2.jpg"
              alt="avatar"
              size="md"
              variant="rounded"
            />
            <div className="h-1/2 flex flex-col items-start justify-between">
              <p className="text-base font-bold text-title">Name</p>
              <p className="text-sm text-small_text">time</p>
            </div>
          </div>
          <MoreHorizIcon className="cursor-pointer" />
        </div>

        <div className="w-full h-auto">
          <p className="text-base break-words text-des_text">
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
          className={`${fakeImg.length >= 3 && " grid-rows-2 "} ${
            fakeImg.length !== 1 && "grid grid-cols-2 gap-2"
          } w-full min-h-10 rounded-xl`}
        >
          {fakeImg.map((vl, idx) => (
            <div
              key={idx}
              className={`${
                fakeImg.length >= 3 && idx === 0 && "row-start-1 row-end-3"
              } ${countImage > 3 && idx === 2 && "relative"}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={vl.img}
                alt="no thing"
                className="w-full h-full object-cover"
              />
              {countImage > 3 && idx === 2 && (
                <div className="absolute bg-black bg-opacity-60 top-0 left-0 w-full h-full flex items-center justify-center cursor-pointer">
                  <p className="text-gray-50 font-bold text-3xl">
                    {countImage - fakeImg.length}
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
          <div className="py-1 px-4 flex items-center gap-2 cursor-pointer hover:bg-blue-gray-50">
            <CommentIcon sx={{ color: "#3f3f3f", fontSize: "25px" }} />
            <p className="text-base text-title">Comment</p>
          </div>
        </div>
      </article>
    </>
  );
}

export default Artical;
