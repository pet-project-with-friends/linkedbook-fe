"use client";

import personImage from "@/src/Images/addImage.svg";
import { useShallowSelectore } from "@/src/hooks/useShallowSelectore.js";
import { Avatar } from "@material-tailwind/react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import PanoramaIcon from "@mui/icons-material/Panorama";
import { motion } from "framer-motion";
import Image from "next/image.js";
import { useEffect, useRef, useState } from "react";

function CreatePost({ showPost, closeTrigger, type, popupType }) {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];

  const textAreaRef = useRef(null);
  const { images } = useShallowSelectore((state) => state.postImage);
  const [imagePost, setImagePost] = useState([]);
  const [imageLoaded, setImageLoaded] = useState([]);
  const [hoverImage, setHoverImage] = useState(null);

  // Check if user click to the outside of popup its will closing
  const handleClose = (e) => {
    if (e.target.id === "container") {
      closeTrigger();
    }
  };

  // delete image in 2 state imagePost chooose and imageLoad
  const removeImage = (id) => {
    setImageLoaded((prev) => prev.filter((_, idx) => idx !== id));
    setImagePost((prev) => prev.filter((_, idx) => idx !== id));
  };

  // trigger file image adding
  const changeFile = (e) => {
    console.log("running adding file image");
    if (
      !(
        e.target.files.length > 0 &&
        allowedTypes.includes(e.target.files[0].type)
      )
    ) {
      return;
    }
    console.log("adding more image to state");
    setImagePost((prev) => [...prev, e.target.files[0]]);
    setImageLoaded((prev) => [...prev, URL.createObjectURL(e.target.files[0])]);
  };

  const resizeTextArea = () => {
    if (!textAreaRef.current) {
      return;
    }

    textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
  };

  useEffect(() => {
    resizeTextArea();
    window.addEventListener("resize", resizeTextArea);
  }, []);

  return (
    <>
      {showPost ? (
        <div
          onClick={(e) => handleClose(e)}
          id="container"
          className="fixed pt-5  inset-0 z-40 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center "
        >
          {type === "post" ? (
            <div className="p-[20px] min-h-[22rem] max-h-[40rem] w-[727px] bg-boxColor rounded-xl flex flex-col justify-start gap-2">
              <div className="w-full h-max flex items-center gap-2">
                <Avatar
                  src="https://docs.material-tailwind.com/img/face-2.jpg"
                  alt="avatar"
                  size="xl"
                />
                <p className="text-xl text-title font-bold align-middle h-max">
                  Tan Nguyen
                </p>
              </div>
              {/* scroll div content */}
              <div className="w-full h-[30rem] overflow-y-auto scrollbar">
                {/* containt text value and image */}
                <div className="w-full h-auto flex flex-col gap-1">
                  <div className="w-full h-auto">
                    <textarea
                      className="text-xl text-des_text h-auto w-full resize-none overflow-hidden p-[20px] outline-0 break-words"
                      ref={textAreaRef}
                      placeholder="What is your writing ...."
                      onChange={(e) => {
                        resizeTextArea();
                      }}
                    ></textarea>
                  </div>
                  {/*containt grid layout image by user*/}
                  {imageLoaded.length ? (
                    <div
                      className={`${
                        imageLoaded.length >= 3 && " grid-rows-2 "
                      } ${
                        imageLoaded.length !== 1 && "grid grid-cols-2 gap-2"
                      } w-full h-[30rem]`}
                    >
                      {imageLoaded.slice(0, 3).map((vl, idx) => (
                        <div
                          key={idx}
                          className={`${
                            imageLoaded.length >= 3 &&
                            idx === 0 &&
                            "row-start-1 row-end-3"
                          } ${
                            imageLoaded.length > 3 && idx === 2 && "relative"
                          }`}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={vl}
                            alt="no thing"
                            className="w-full h-full object-cover"
                          />
                          {imageLoaded.length > 3 && idx === 2 && (
                            <div className="absolute bg-black bg-opacity-60 top-0 left-0 w-full h-full flex items-center justify-center cursor-pointer">
                              <p className="text-gray-50 font-bold text-3xl">
                                {imageLoaded.length - 3}
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="w-full min-h-10 flex items-center">
                <PanoramaIcon
                  sx={{
                    color: "#0a66c2",
                    fontSize: "25px",
                    cursor: "pointer",
                  }}
                  onClick={() => popupType("image")}
                />
              </div>
            </div>
          ) : (
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
                      <Image
                        src={personImage}
                        alt=""
                        className="w-full h-full"
                      />
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
                        <AddCircleIcon
                          sx={{ color: "#ffffff", fontSize: "5rem" }}
                        />
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
          )}
        </div>
      ) : null}
    </>
  );
}

export default CreatePost;
