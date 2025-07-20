"use client";

import { UseCondition } from "@/src/hooks/useCondition.jsx";
import ImagePost from "@/src/views/pages/home-page/dialogs/ImagePostDialog";
import { Avatar } from "@material-tailwind/react";
import PanoramaIcon from "@mui/icons-material/Panorama";
import { useRef, useState } from "react";

function CreatePost({ showPost, closeTrigger, type, popupType }) {
  const textAreaRef = useRef(null);
  const [imagePost, setImagePost] = useState([]);
  const [imageLoaded, setImageLoaded] = useState([]);
  const [textField, setTextField] = useState("");

  // Check if user click to the outside of popup its will closing
  const handleClose = (e) => {
    if (e.target.id === "container") {
      closeTrigger();
    }
  };

  const resizeTextArea = (value) => {
    if (textAreaRef.current) {
      if (value?.length === 0) {
        textAreaRef.current.style.height = "auto"; // Reset height to recalculate properly
      }
      textAreaRef.current.style.height = "auto"; // Reset height to recalculate properly
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`; // Set height to match content
    }
  };

  return (
    <>
      <UseCondition isTrue={showPost}>
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
                      value={textField}
                      placeholder="What is your writing ...."
                      onChange={(e) => {
                        resizeTextArea(e.target.value);
                        setTextField(e.target.value);
                      }}
                    ></textarea>
                  </div>
                  {/*containt grid layout image by user*/}
                  <UseCondition isTrue={imageLoaded.length}>
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
                  </UseCondition>
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
            <ImagePost
              setImageLoaded={setImageLoaded}
              setImagePost={setImagePost}
              imageLoaded={imageLoaded}
              popupType={popupType}
            />
          )}
        </div>
      </UseCondition>
    </>
  );
}

export default CreatePost;
