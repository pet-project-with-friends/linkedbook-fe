"use client";

import personImage from "@/src/Images/addImage.svg";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import { motion } from "framer-motion";
import Image from "next/image.js";
import { useState } from "react";

function ImagePost({ setImagePost, setImageLoaded, imageLoaded, popupType }) {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
  const [hoverImage, setHoverImage] = useState(null);
  // delete image in 2 state imagePost chooose and imageLoad
  const removeImage = (id) => {
    setImageLoaded((prev) => prev.filter((_, idx) => idx !== id));
    setImagePost((prev) => prev.filter((_, idx) => idx !== id));
  };

  // trigger file image adding
  const changeFile = (e) => {
    if (
      !(
        e.target.files.length > 0 &&
        allowedTypes.includes(e.target.files[0].type)
      )
    ) {
      return;
    }
    setImagePost((prev) => [...prev, e.target.files[0]]);
    setImageLoaded((prev) => [...prev, URL.createObjectURL(e.target.files[0])]);
  };

  return (
    <div className="h-3/4 w-3/4 bg-boxColor rounded-xl flex flex-col">
      <div className="w-full flex p-[20px]">
        <p className="text-xl text-title font-bold align-middle h-max">
          Image list
        </p>
      </div>

      <div className="w-full h-96 p-[10px] overflow-y-auto scrollbar bg-[#f8fafd] border-solid border-border_box border-[1px] border-x-0">
        {!imageLoaded.length ? (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="w-64 h-60 ">
              <Image src={personImage} alt="" className="w-full h-full" />
            </div>
            <label
              className="bg-buttonColor hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-2xl focus:outline-none focus:shadow-outline cursor-pointer"
              htmlFor="file_input"
            >
              Updaload image from computer
            </label>
            <input
              type="file"
              className="opacity-0"
              id="file_input"
              accept="image/png, image/gif, image/jpeg"
              onChange={(e) => changeFile(e)}
            />
          </div>
        ) : (
          <div className="w-full h-auto grid grid-cols-4 auto-rows-fr gap-2">
            {imageLoaded.map((vl, idx) => (
              <div
                key={idx}
                className="h-44 relative"
                onMouseOver={() => setHoverImage(idx)}
                onMouseLeave={() => setHoverImage(null)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="h-full w-full object-cover object-center"
                  src={vl}
                  alt="nature image"
                />
                {hoverImage === idx && (
                  <motion.div
                    initial={{ y: 2, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="absolute py-1 w-full bottom-0 left-0 bg-black bg-opacity-30 backdrop-blur-sm"
                  >
                    <DeleteIcon
                      sx={{
                        color: "#eb0014",
                        fontSize: "20px",
                        cursor: "pointer",
                      }}
                      onClick={() => removeImage(idx)}
                    />
                  </motion.div>
                )}
              </div>
            ))}
            <>
              <label
                htmlFor="add_more_file"
                className="h-44 cursor-pointer bg-click_title bg-opacity-10 flex items-center justify-center"
              >
                <AddCircleIcon sx={{ color: "#ffffff", fontSize: "5rem" }} />
              </label>
              <input
                type="file"
                className="opacity-0"
                id="add_more_file"
                accept="image/png, image/gif, image/jpeg"
                onChange={(e) => changeFile(e)}
                onClick={(e) => {
                  e.currentTarget.value = null;
                }}
              />
            </>
          </div>
        )}
      </div>
      <div className="w-full min-h-5-5 flex justify-end p-[20px]">
        <button
          className="bg-buttonColor hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-2xl focus:outline-none focus:shadow-outline"
          type="button"
          disabled={!imageLoaded.length}
          onClick={() => popupType("post")}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ImagePost;
